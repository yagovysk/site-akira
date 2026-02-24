"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const galleryItems = [
  {
    src: "/images/espetos-na-brasa.png",
    title: "Espetinhos na Brasa",
    subtitle: "Sabor marcante e preparo na hora",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/mulher-comendo-no-churraskim.png",
    title: "Toque Japonês",
    subtitle: "Experiência única em cada visita",
    size: "",
  },
  {
    src: "/images/garotos-no-fliperama.png",
    title: "Fliperama Retrô",
    subtitle: "Diversão enquanto espera",
    size: "",
  },
  {
    src: "/images/imagem-estabelecimento.png",
    title: "Ambiente Acolhedor",
    subtitle: "Família e amigos bem-vindos",
    size: "",
  },
  {
    src: "/images/imagem-estabelecimento-2.png",
    title: "Happy Hour",
    subtitle: "Comida boa e energia alta",
    size: "",
  },
  {
    src: "/images/prato-feito-espeto-tradicional.png",
    title: "Pratos da Casa",
    subtitle: "Brasa, qualidade e sabor",
    size: "lg:col-span-2",
  },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imagesByCard, setImagesByCard] = useState(() =>
    galleryItems.map((item) => item.src),
  );
  const [isTransmitting, setIsTransmitting] = useState(false);

  const transitionMs = 560;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      setIsTransmitting(false);
      return;
    }

    let timeoutId: number | undefined;

    const intervalId = window.setInterval(() => {
      setIsTransmitting(true);

      timeoutId = window.setTimeout(() => {
        setImagesByCard((previous) => {
          if (previous.length <= 1) {
            return previous;
          }

          const lastImage = previous[previous.length - 1];
          return [lastImage, ...previous.slice(0, previous.length - 1)];
        });

        setIsTransmitting(false);
      }, transitionMs);
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [selectedIndex]);

  const selectedItem =
    selectedIndex !== null
      ? {
          ...galleryItems[selectedIndex],
          src: imagesByCard[selectedIndex],
        }
      : null;

  return (
    <section className="py-12 sm:py-16" id="galeria">
      <SectionTitle>Conheça o Churraskim do Akira</SectionTitle>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-300">
        Um gostinho da experiência: brasa, culinária japonesa e fliperama no
        mesmo lugar.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[190px] sm:auto-rows-[220px] gap-4">
        {galleryItems.map((item, index) => {
          const incomingIndex =
            (index - 1 + imagesByCard.length) % imagesByCard.length;
          const incomingImage = imagesByCard[incomingIndex];

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Abrir foto: ${item.title}`}
              className={`gallery-card group relative overflow-hidden rounded-2xl border border-red-900/60 bg-black/70 shadow-lg cursor-pointer ${item.size}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Image
                src={imagesByCard[index]}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                  isTransmitting ? "gallery-image-out" : ""
                }`}
                priority={index === 0}
              />
              {isTransmitting ? (
                <Image
                  src={incomingImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover gallery-image-in group-hover:scale-110"
                />
              ) : null}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
              <div className="gallery-shine absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/85 p-3 sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${selectedItem.title}`}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="game-modal-enter game-modal-shell relative w-full max-w-5xl rounded-2xl border border-yellow-400/70 bg-black/95 p-2 sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Fechar foto"
              className="absolute right-2 top-2 z-10 rounded-md border border-yellow-400/80 bg-black/80 px-3 py-1 text-xs font-bold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black cursor-pointer"
            >
              FECHAR
            </button>

            <div className="relative h-[70vh] min-h-70 w-full overflow-hidden rounded-xl">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 px-1 pb-1 text-center">
              <h3 className="text-sm sm:text-base font-bold text-yellow-400">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                {selectedItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
