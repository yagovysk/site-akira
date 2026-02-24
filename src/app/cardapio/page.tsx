import SectionTitle from "@/components/SectionTitle";
import MenuCategory from "@/components/MenuCategory";
import RevealOnScroll from "@/components/RevealOnScroll";
import { menu } from "@/data/menu";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Confira o cardápio completo do Churraskim do Akira: carnes, pratos japoneses, acompanhamentos e bebidas.",
  alternates: { canonical: "/cardapio" },
  openGraph: {
    title: "Cardápio Churraskim do Akira",
    description:
      "Conheça carnes, pratos orientais, petiscos e bebidas do cardápio completo.",
    url: "/cardapio",
    type: "website",
  },
};

export default function CardapioPage() {
  return (
    <section className="py-16">
      <RevealOnScroll direction="up">
        <SectionTitle>Cardápio</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-300 leading-relaxed">
          Espetinhos, pratos especiais, petiscos e bebidas em um cardápio com
          toque japonês e brasa de verdade.
        </p>
      </RevealOnScroll>

      <RevealOnScroll direction="up" delayMs={40}>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-yellow-400 bg-black/80 px-4 py-2 text-sm font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black"
          >
            ← Voltar ao início
          </Link>

          <a
            href="#espetos-tradicionais"
            className="inline-flex items-center rounded-xl border border-red-900/60 bg-black/70 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-200 transition-all hover:border-yellow-400 hover:text-yellow-400"
          >
            Espetos
          </a>
          <a
            href="#entradas-especiais"
            className="inline-flex items-center rounded-xl border border-red-900/60 bg-black/70 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-200 transition-all hover:border-yellow-400 hover:text-yellow-400"
          >
            Entradas
          </a>
          <a
            href="#petiscos"
            className="inline-flex items-center rounded-xl border border-red-900/60 bg-black/70 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-200 transition-all hover:border-yellow-400 hover:text-yellow-400"
          >
            Petiscos
          </a>
          <a
            href="#bebidas-sem-alcool"
            className="inline-flex items-center rounded-xl border border-red-900/60 bg-black/70 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-200 transition-all hover:border-yellow-400 hover:text-yellow-400"
          >
            Bebidas
          </a>
        </div>
      </RevealOnScroll>

      <div className="space-y-10 mt-8">
        {menu.map((category, index) => (
          <RevealOnScroll
            key={category.slug}
            direction={index % 2 === 0 ? "left" : "right"}
            delayMs={index * 70}
          >
            <MenuCategory category={category} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
