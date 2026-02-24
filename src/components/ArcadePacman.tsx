"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Vector = { x: number; y: number };
type Position = { x: number; y: number };
type Ghost = { position: Position; direction: Vector; color: string };

const CELL_SIZE = 16;
const GRID_SIZE = 14;
const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;
const STEP_MS = 100;
const MAX_PHASE = 3;

const PHASE_CONFIG: Record<number, { ghostStepModulo: number; extraGhostMoves: number }> = {
  1: { ghostStepModulo: 3, extraGhostMoves: 0 },
  2: { ghostStepModulo: 2, extraGhostMoves: 0 },
  3: { ghostStepModulo: 1, extraGhostMoves: 1 },
};

const WALLS = [
  "##############",
  "#............#",
  "#.####..####.#",
  "#............#",
  "#.##.####.##.#",
  "#............#",
  "#.####..####.#",
  "#............#",
  "#.##.####.##.#",
  "#............#",
  "#.####..####.#",
  "#............#",
  "#............#",
  "##############",
];

const DIRECTIONS: Vector[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
];

const GHOST_SPAWNS: Position[] = [
  { x: 10, y: 10 },
  { x: 10, y: 1 },
  { x: 1, y: 10 },
];

const GHOST_COLORS = ["#ef4444", "#06b6d4", "#a855f7"];

function keyFromPosition(position: Position) {
  return `${position.x},${position.y}`;
}

function addVector(position: Position, vector: Vector): Position {
  return { x: position.x + vector.x, y: position.y + vector.y };
}

function createGhosts(count: number): Ghost[] {
  return Array.from({ length: count }, (_, index) => ({
    position: GHOST_SPAWNS[index],
    direction: { x: -1, y: 0 },
    color: GHOST_COLORS[index] ?? "#ef4444",
  }));
}

export default function ArcadePacman() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pelletsRef = useRef<Set<string>>(new Set());
  const ghostsRef = useRef<Ghost[]>(createGhosts(1));
  const pacmanRef = useRef<{ position: Position; direction: Vector; next: Vector }>({
    position: { x: 1, y: 1 },
    direction: { x: 1, y: 0 },
    next: { x: 1, y: 0 },
  });
  const tickRef = useRef(0);

  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(1);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState("Clique no fliperama para jogar");

  const walls = useMemo(
    () =>
      new Set(
        WALLS.flatMap((row, y) =>
          row
            .split("")
            .map((value, x) => (value === "#" ? `${x},${y}` : ""))
            .filter(Boolean),
        ),
      ),
    [],
  );

  const ghostCount = Math.min(MAX_PHASE, phase);

  const refillPellets = useCallback((currentGhostCount: number) => {
    const freshPellets = new Set<string>();

    for (let y = 0; y < GRID_SIZE; y += 1) {
      for (let x = 0; x < GRID_SIZE; x += 1) {
        const key = `${x},${y}`;
        const isWall = walls.has(key);
        const isPacmanSpawn = key === "1,1";
        const isGhostSpawn = GHOST_SPAWNS.slice(0, currentGhostCount).some(
          (spawn) => spawn.x === x && spawn.y === y,
        );

        if (!isWall && !isPacmanSpawn && !isGhostSpawn) {
          freshPellets.add(key);
        }
      }
    }

    pelletsRef.current = freshPellets;
  }, [walls]);

  const resetPositions = useCallback((currentGhostCount: number) => {
    pacmanRef.current = {
      position: { x: 1, y: 1 },
      direction: { x: 1, y: 0 },
      next: { x: 1, y: 0 },
    };
    ghostsRef.current = createGhosts(currentGhostCount);
  }, []);

  const startGame = useCallback(() => {
    setStarted(true);
    if (phase === 2) {
      setStatus("Fase 2: dificuldade média, mantenha o foco!");
      return;
    }

    if (phase === 3) {
      setStatus("Fase 3: modo difícil ativado!");
      return;
    }

    setStatus("Fase 1: aquecimento arcade.");
  }, [phase]);

  useEffect(() => {
    resetPositions(ghostCount);
    refillPellets(ghostCount);
  }, [ghostCount, refillPellets, resetPositions]);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) {
      return;
    }

    const canMove = (position: Position, direction: Vector) => {
      const next = addVector(position, direction);
      const isOutside =
        next.x < 0 || next.y < 0 || next.x >= GRID_SIZE || next.y >= GRID_SIZE;
      if (isOutside) {
        return false;
      }

      return !walls.has(keyFromPosition(next));
    };

    const draw = () => {
      const pacman = pacmanRef.current;
      const ghosts = ghostsRef.current;

      context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      context.fillStyle = "#02020a";
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      walls.forEach((wall) => {
        const [x, y] = wall.split(",").map(Number);
        context.fillStyle = "#172554";
        context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        context.strokeStyle = "#60a5fa";
        context.strokeRect(
          x * CELL_SIZE + 0.5,
          y * CELL_SIZE + 0.5,
          CELL_SIZE - 1,
          CELL_SIZE - 1,
        );
      });

      pelletsRef.current.forEach((pellet) => {
        const [x, y] = pellet.split(",").map(Number);
        context.fillStyle = "#fde68a";
        context.beginPath();
        context.arc(
          x * CELL_SIZE + CELL_SIZE / 2,
          y * CELL_SIZE + CELL_SIZE / 2,
          2,
          0,
          Math.PI * 2,
        );
        context.fill();
      });

      const mouth = tickRef.current % 2 === 0 ? 0.26 : 0.07;
      const angle = Math.atan2(pacman.direction.y, pacman.direction.x);
      const centerX = pacman.position.x * CELL_SIZE + CELL_SIZE / 2;
      const centerY = pacman.position.y * CELL_SIZE + CELL_SIZE / 2;

      context.fillStyle = "#facc15";
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(
        centerX,
        centerY,
        CELL_SIZE / 2 - 1,
        angle + mouth,
        angle - mouth + Math.PI * 2,
      );
      context.closePath();
      context.fill();

      ghosts.forEach((ghost) => {
        const ghostCenterX = ghost.position.x * CELL_SIZE + CELL_SIZE / 2;
        const ghostCenterY = ghost.position.y * CELL_SIZE + CELL_SIZE / 2;

        context.fillStyle = ghost.color;
        context.beginPath();
        context.arc(ghostCenterX, ghostCenterY, CELL_SIZE / 2 - 2, Math.PI, 0);
        context.lineTo(
          ghostCenterX + CELL_SIZE / 2 - 2,
          ghostCenterY + CELL_SIZE / 2 - 1,
        );
        context.lineTo(
          ghostCenterX - CELL_SIZE / 2 + 2,
          ghostCenterY + CELL_SIZE / 2 - 1,
        );
        context.closePath();
        context.fill();

        context.fillStyle = "white";
        context.beginPath();
        context.arc(ghostCenterX - 3, ghostCenterY - 1, 1.5, 0, Math.PI * 2);
        context.arc(ghostCenterX + 3, ghostCenterY - 1, 1.5, 0, Math.PI * 2);
        context.fill();
      });
    };

    const moveGhost = (ghost: Ghost, index: number) => {
      const pacman = pacmanRef.current;

      const validDirections = DIRECTIONS.filter((direction) =>
        canMove(ghost.position, direction),
      );

      if (validDirections.length === 0) {
        return;
      }

      validDirections.sort((first, second) => {
        const firstPos = addVector(ghost.position, first);
        const secondPos = addVector(ghost.position, second);

        const firstDistance =
          Math.abs(firstPos.x - pacman.position.x) +
          Math.abs(firstPos.y - pacman.position.y) +
          ((tickRef.current + index) % 3) * 0.2;

        const secondDistance =
          Math.abs(secondPos.x - pacman.position.x) +
          Math.abs(secondPos.y - pacman.position.y) +
          ((tickRef.current + index + 1) % 3) * 0.2;

        return firstDistance - secondDistance;
      });

      ghost.direction = validDirections[0];
      ghost.position = addVector(ghost.position, ghost.direction);
    };

    const gameTick = () => {
      tickRef.current += 1;
      const phaseConfig = PHASE_CONFIG[phase] ?? PHASE_CONFIG[1];

      const pacman = pacmanRef.current;

      if (canMove(pacman.position, pacman.next)) {
        pacman.direction = pacman.next;
      }

      if (canMove(pacman.position, pacman.direction)) {
        pacman.position = addVector(pacman.position, pacman.direction);
      }

      const pelletKey = keyFromPosition(pacman.position);
      if (pelletsRef.current.has(pelletKey)) {
        pelletsRef.current.delete(pelletKey);
        setScore((previous) => previous + 10);
      }

      if (tickRef.current % phaseConfig.ghostStepModulo === 0) {
        ghostsRef.current.forEach((ghost, index) => {
          moveGhost(ghost, index);
        });

        for (let i = 0; i < phaseConfig.extraGhostMoves; i += 1) {
          ghostsRef.current.forEach((ghost, index) => {
            moveGhost(ghost, index + i + 1);
          });
        }
      }

      const touchedGhost = ghostsRef.current.some(
        (ghost) =>
          ghost.position.x === pacman.position.x &&
          ghost.position.y === pacman.position.y,
      );

      if (touchedGhost) {
        setStatus("Fantasma te pegou! Continue jogando.");
        resetPositions(ghostCount);
        draw();
        return;
      }

      if (pelletsRef.current.size === 0) {
        if (phase < MAX_PHASE) {
          setPhase((previous) => previous + 1);
          setStatus(
            phase === 1
              ? "Fase 1 concluída! Fase 2 agora: dificuldade média."
              : "Fase 2 concluída! Fase 3 agora: bem difícil.",
          );
        } else {
          setStatus("Você zerou as 3 fases! Clique no fliperama para jogar de novo.");
          setStarted(false);
          setPhase(1);
          setScore(0);
        }
        draw();
        return;
      }

      draw();
    };

    const setDirection = (direction: Vector) => {
      pacmanRef.current.next = direction;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "w", "W"].includes(event.key)) {
        event.preventDefault();
        if (!started) startGame();
        setDirection({ x: 0, y: -1 });
      }
      if (["ArrowRight", "d", "D"].includes(event.key)) {
        event.preventDefault();
        if (!started) startGame();
        setDirection({ x: 1, y: 0 });
      }
      if (["ArrowDown", "s", "S"].includes(event.key)) {
        event.preventDefault();
        if (!started) startGame();
        setDirection({ x: 0, y: 1 });
      }
      if (["ArrowLeft", "a", "A"].includes(event.key)) {
        event.preventDefault();
        if (!started) startGame();
        setDirection({ x: -1, y: 0 });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    draw();

    if (!started) {
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    const intervalId = window.setInterval(gameTick, STEP_MS);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearInterval(intervalId);
    };
  }, [phase, started, walls, ghostCount, resetPositions, startGame]);

  const handleDirection = (direction: Vector) => {
    if (!started) {
      startGame();
    }
    pacmanRef.current.next = direction;
  };

  return (
    <div className="w-full max-w-77.5 rounded-2xl border border-red-900/50 bg-black/75 p-3 shadow-lg">
      <p className="mb-2 text-center text-[11px] font-semibold text-yellow-400">
        Clique no fliperama para jogar
      </p>

      <div
        className="relative mx-auto w-62.5 cursor-pointer"
        onClick={startGame}
        role="button"
        tabIndex={0}
        aria-label="Iniciar mini jogo de Pac-Man"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            startGame();
          }
        }}
      >
        <svg viewBox="0 0 250 410" className="w-full h-auto" aria-hidden>
          <defs>
            <linearGradient id="cabinetBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>
          </defs>

          <path
            d="M40 14h170l18 66v284a20 20 0 0 1-20 20H42a20 20 0 0 1-20-20V80z"
            fill="url(#cabinetBody)"
            stroke="#facc15"
            strokeWidth="4"
          />

          <rect x="60" y="40" width="130" height="42" rx="8" fill="#450a0a" />
          <text
            x="125"
            y="67"
            textAnchor="middle"
            fill="#facc15"
            fontSize="18"
            fontWeight="700"
          >
            AKIRA ARCADE
          </text>

          <rect
            x="38"
            y="102"
            width="174"
            height="178"
            rx="10"
            fill="#0f172a"
            stroke="#ef4444"
            strokeWidth="3"
          />
          <rect x="48" y="112" width="154" height="158" rx="6" fill="url(#screenGlow)" />

          <circle cx="80" cy="322" r="14" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" />
          <circle cx="170" cy="322" r="14" fill="#2563eb" stroke="#93c5fd" strokeWidth="2" />
          <rect x="108" y="304" width="34" height="34" rx="6" fill="#111827" stroke="#facc15" />
          <path d="M125 309v24M113 321h24" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="absolute left-11.75 top-28 h-39.5 w-38.5 rounded-md"
          aria-label="Mini jogo de Pac-Man"
        />

        {!started ? (
          <div className="absolute left-11.75 top-28 flex h-39.5 w-38.5 items-center justify-center rounded-md bg-black/65 text-center text-[10px] font-bold uppercase tracking-wide text-yellow-300">
            Clique para jogar
          </div>
        ) : null}
      </div>

      <p className="mt-3 text-center text-xs font-semibold text-yellow-400">{status}</p>
      <p className="mt-1 text-center text-sm font-bold text-white">
        Fase: {phase}/3 • Pontuação: {score}
      </p>

      <div className="mt-3 grid grid-cols-3 gap-1.5 text-xs sm:hidden">
        <div />
        <button
          type="button"
          onClick={() => handleDirection({ x: 0, y: -1 })}
          className="cursor-pointer rounded border border-yellow-400/70 bg-black px-2 py-1 text-yellow-400"
          aria-label="Mover para cima"
        >
          ↑
        </button>
        <div />
        <button
          type="button"
          onClick={() => handleDirection({ x: -1, y: 0 })}
          className="cursor-pointer rounded border border-yellow-400/70 bg-black px-2 py-1 text-yellow-400"
          aria-label="Mover para esquerda"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => handleDirection({ x: 0, y: 1 })}
          className="cursor-pointer rounded border border-yellow-400/70 bg-black px-2 py-1 text-yellow-400"
          aria-label="Mover para baixo"
        >
          ↓
        </button>
        <button
          type="button"
          onClick={() => handleDirection({ x: 1, y: 0 })}
          className="cursor-pointer rounded border border-yellow-400/70 bg-black px-2 py-1 text-yellow-400"
          aria-label="Mover para direita"
        >
          →
        </button>
      </div>
    </div>
  );
}
