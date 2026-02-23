import SectionTitle from "@/components/SectionTitle";
import MenuCategory from "@/components/MenuCategory";
import RevealOnScroll from "@/components/RevealOnScroll";
import { menu } from "@/data/menu";
import Link from "next/link";

export const metadata = {
  title: "Cardápio | Churraskim do Akira",
  description:
    "Confira o cardápio completo do Churraskim do Akira: carnes, pratos japoneses, acompanhamentos e bebidas.",
  alternates: { canonical: "/cardapio" },
};

export default function CardapioPage() {
  return (
    <section className="py-16">
      <RevealOnScroll direction="up">
        <SectionTitle>Cardápio</SectionTitle>
      </RevealOnScroll>

      <RevealOnScroll direction="up" delayMs={40}>
        <div className="mt-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-yellow-400 bg-black/80 px-4 py-2 text-sm font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black"
          >
            ← Voltar ao início
          </Link>
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
