"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function MobileQuickActions() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black shadow-lg transition-all hover:scale-105 hover:bg-green-600"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.54 0 .23 5.3.23 11.83c0 2.08.55 4.11 1.58 5.9L0 24l6.45-1.7a11.77 11.77 0 0 0 5.61 1.43h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.13-3.48-8.42ZM12.06 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.35-.21-3.83 1.01 1.02-3.74-.23-.38a9.78 9.78 0 0 1-1.5-5.2c0-5.42 4.42-9.84 9.85-9.84 2.63 0 5.1 1.03 6.95 2.88a9.78 9.78 0 0 1 2.89 6.96c0 5.43-4.42 9.85-9.85 9.85Zm5.4-7.35c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47a8.95 8.95 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400 bg-black/85 text-yellow-400 shadow-lg transition-all hover:scale-105 hover:bg-yellow-400 hover:text-black ${
          showTopButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18 15-6-6-6 6"
          />
        </svg>
      </button>
    </div>
  );
}
