import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="py-10 sm:py-16">
      <div
        className="relative flex flex-col items-center justify-center text-center rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 border border-red-900/60 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(139, 0, 0, 0.88), rgba(43, 0, 0, 0.9)), url('/images/akira-cliente-no-fliperama.png')",
        }}
      >
        <div className="mb-3 sm:mb-6 flex justify-center">
          <Image
            src="/images/logo-akira.jpg"
            alt="Logo do Churraskim do Akira"
            width={112}
            height={112}
            className="rounded-full border-2 border-yellow-400 bg-black w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover shadow-lg"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-lg leading-tight pixel-blink">
          Espetinho na Brasa + Fliperama <span aria-hidden="true">🎮🔥</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl text-gray-200 mb-5 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
          Enquanto seu pedido fica pronto, a diversão já começa.
        </p>
        <p className="text-xs sm:text-sm text-gray-300 mb-5 sm:mb-7 max-w-xs sm:max-w-2xl mx-auto">
          Vicente Pires • Ambiente família • Créditos a partir de R$2
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-2xl mx-auto">
          <Link
            href="/cardapio"
            className="hero-cta bg-[#ff3c00] hover:bg-[#ff2b00] text-white font-bold px-6 py-3 rounded shadow transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            <span className="animate-flame" aria-hidden="true">
              🔥
            </span>{" "}
            Ver Cardápio
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="hero-cta bg-[#25D366] hover:bg-[#1ebd5b] text-black font-bold px-6 py-3 rounded shadow transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
