import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ArcadeSection from "@/components/ArcadeSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import LocationMap from "@/components/LocationMap";
import RevealOnScroll from "@/components/RevealOnScroll";
import GallerySection from "@/components/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Restaurante Japonês e Churrasco em Vicente Pires",
  description:
    "Espetinhos na brasa com toque de culinária japonesa em Vicente Pires, Brasília. Fliperama retrô, ambiente familiar e atendimento acolhedor.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Churraskim do Akira em Vicente Pires",
    description:
      "Cardápio com churrasco e culinária japonesa, ambiente familiar e fliperama retrô em Brasília.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/logo-akira.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Churraskim do Akira",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <RevealOnScroll direction="up">
        <Hero />
      </RevealOnScroll>

      <RevealOnScroll direction="left">
        <section className="py-12 sm:py-16">
          <SectionTitle>Prova Social</SectionTitle>
          <div className="mt-4 rounded-2xl border border-yellow-400/40 bg-black/70 p-5 shadow-lg">
            <p className="text-white font-semibold text-lg">⭐ 5,0 no Google</p>
            <p className="text-sm text-gray-300 mt-1">
              Avaliação média dos clientes que visitam o Churraskim do Akira.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="rounded-2xl border border-red-900/60 bg-black/70 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm text-gray-200">
                “Espetinho muito saboroso e atendimento rápido. Lugar ideal para
                voltar com a família.”
              </p>
            </article>
            <article className="rounded-2xl border border-red-900/60 bg-black/70 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm text-gray-200">
                “Curti o toque japonês no cardápio e o ambiente é super
                agradável para happy hour.”
              </p>
            </article>
            <article className="rounded-2xl border border-red-900/60 bg-black/70 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm text-gray-200">
                “O fliperama enquanto espera a comida faz toda diferença. A
                experiência fica divertida.”
              </p>
            </article>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll direction="right" delayMs={80}>
        <section className="py-12 sm:py-16">
          <SectionTitle>Sobre o Akira</SectionTitle>
          <p className="max-w-3xl text-gray-300 leading-relaxed text-base sm:text-lg">
            O Churraskim do Akira une tradição japonesa com churrasco na brasa,
            criando uma experiência única em Vicente Pires. Nosso foco é servir
            comida de qualidade, com sabor marcante e atendimento próximo.
          </p>
        </section>
      </RevealOnScroll>

      <RevealOnScroll direction="up" delayMs={100}>
        <GallerySection />
      </RevealOnScroll>

      <RevealOnScroll direction="left" delayMs={120}>
        <section className="py-12 sm:py-16">
          <SectionTitle>Combos da Casa</SectionTitle>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <article className="rounded-2xl bg-black/70 border border-red-900/60 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-yellow-400 text-lg">
                Combo Casal
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                6 espetinhos + 1 porção oriental + 2 bebidas.
              </p>
            </article>
            <article className="rounded-2xl bg-black/70 border border-red-900/60 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-yellow-400 text-lg">
                Combo Galera
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                12 espetinhos variados + 2 porções para compartilhar.
              </p>
            </article>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll direction="left" delayMs={130}>
        <section className="py-12 sm:py-16">
          <SectionTitle>Destaques do Cardápio</SectionTitle>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <article className="rounded-2xl bg-black/70 border border-red-900/60 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-yellow-400 text-lg">
                Picanha Premium
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Corte nobre e suculento na brasa.
              </p>
            </article>
            <article className="rounded-2xl bg-black/70 border border-red-900/60 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-yellow-400 text-lg">
                Yakisoba Especial
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Massa oriental com legumes frescos e molho da casa.
              </p>
            </article>
            <article className="rounded-2xl bg-black/70 border border-red-900/60 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-yellow-400 text-lg">
                Sushi Variado
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Seleção de peças preparadas diariamente.
              </p>
            </article>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll direction="right" delayMs={140}>
        <ArcadeSection />
      </RevealOnScroll>

      <RevealOnScroll direction="up" delayMs={160}>
        <section className="py-12 sm:py-16">
          <SectionTitle>Venha nos visitar</SectionTitle>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="min-w-0 rounded-2xl bg-black/50 border border-red-900/60 p-3 shadow-lg">
              <LocationMap />
            </div>
            <div className="min-w-0 rounded-2xl bg-black/50 border border-red-900/60 p-6 flex items-center justify-center shadow-lg">
              <WhatsAppCTA />
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
