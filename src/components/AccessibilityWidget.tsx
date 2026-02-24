"use client";

import { useEffect, useState } from "react";

type ColorMode = "default" | "light-soft" | "high-contrast";

type AccessibilitySettings = {
  fontScale: number;
  colorMode: ColorMode;
};

const STORAGE_KEY = "akira-a11y-settings";
const MIN_SCALE = 1;
const MAX_SCALE = 1.4;
const STEP = 0.1;

const defaultSettings: AccessibilitySettings = {
  fontScale: 1,
  colorMode: "default",
};

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number(value.toFixed(2))));
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window === "undefined") {
      return defaultSettings;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultSettings;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
      return {
        fontScale: clampScale(parsed.fontScale ?? defaultSettings.fontScale),
        colorMode:
          parsed.colorMode === "light-soft" || parsed.colorMode === "high-contrast"
            ? parsed.colorMode
            : "default",
      };
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const shell = document.querySelector(".site-shell");
    if (!shell) {
      return;
    }

    shell.classList.remove("a11y-light-soft", "a11y-high-contrast");

    if (settings.colorMode === "light-soft") {
      shell.classList.add("a11y-light-soft");
    }

    if (settings.colorMode === "high-contrast") {
      shell.classList.add("a11y-high-contrast");
    }

    document.documentElement.style.setProperty(
      "--a11y-font-scale",
      String(settings.fontScale),
    );

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const increaseFont = () => {
    setSettings((prev) => ({
      ...prev,
      fontScale: clampScale(prev.fontScale + STEP),
    }));
  };

  const decreaseFont = () => {
    setSettings((prev) => ({
      ...prev,
      fontScale: clampScale(prev.fontScale - STEP),
    }));
  };

  const resetAll = () => {
    setSettings(defaultSettings);
  };

  const isLightSoft = settings.colorMode === "light-soft";

  return (
    <div
      className={`a11y-widget fixed left-4 bottom-5 z-50 ${
        isLightSoft ? "a11y-widget-light" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir opções de acessibilidade"
        aria-expanded={isOpen}
        className="a11y-widget-trigger inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-yellow-400 bg-black/90 text-yellow-400 shadow-lg transition-all hover:scale-105 hover:bg-yellow-400 hover:text-black"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="1.8" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" d="M12 7.5v4" />
          <path strokeLinecap="round" d="M8 9.5h8" />
          <path strokeLinecap="round" d="M12 11.5 9.3 19" />
          <path strokeLinecap="round" d="M12 11.5 14.7 19" />
        </svg>
      </button>

      {isOpen ? (
        <section className="a11y-widget-panel mt-3 w-[18rem] rounded-2xl border border-red-800/60 bg-black/95 p-4 text-sm text-white shadow-2xl">
          <h3 className="text-sm font-bold text-yellow-400">Acessibilidade</h3>

          <div className="mt-3 space-y-2">
            <p className="text-xs text-gray-300">Tamanho da fonte</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decreaseFont}
                className="cursor-pointer rounded-lg border border-red-800 px-3 py-1 font-semibold text-white hover:border-yellow-400 hover:text-yellow-400"
              >
                A-
              </button>
              <button
                type="button"
                onClick={increaseFont}
                className="cursor-pointer rounded-lg border border-red-800 px-3 py-1 font-semibold text-white hover:border-yellow-400 hover:text-yellow-400"
              >
                A+
              </button>
              <span className="ml-1 text-xs text-gray-300">
                {Math.round(settings.fontScale * 100)}%
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs text-gray-300">Modo de cores</p>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setSettings((prev) => ({ ...prev, colorMode: "default" }))}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-left font-semibold transition-colors ${
                  settings.colorMode === "default"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-red-800 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                Padrão
              </button>
              <button
                type="button"
                onClick={() => setSettings((prev) => ({ ...prev, colorMode: "light-soft" }))}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-left font-semibold transition-colors ${
                  settings.colorMode === "light-soft"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-red-800 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                Cores claras e suaves
              </button>
              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({ ...prev, colorMode: "high-contrast" }))
                }
                className={`cursor-pointer rounded-lg border px-3 py-2 text-left font-semibold transition-colors ${
                  settings.colorMode === "high-contrast"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-red-800 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                Alto contraste
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAll}
            className="mt-4 w-full cursor-pointer rounded-lg border border-red-800 bg-black px-3 py-2 font-semibold text-white hover:border-yellow-400 hover:text-yellow-400"
          >
            Resetar acessibilidade
          </button>
        </section>
      ) : null}
    </div>
  );
}
