import Link from "next/link";

import Image from "next/image";
export default function Hero() {
  return (
    <section className="py-10 sm:py-16">
      <div className="relative flex flex-col items-center justify-center text-center bg-linear-to-br from-black via-red-950 to-black rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 border border-red-900/60 w-full">
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
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-lg leading-tight">
          Churraskim do Akira
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl text-gray-200 mb-5 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
          Espetinhos na brasa com toque de culinária japonesa e fliperama para
          curtir enquanto a comida chega.
        </p>
        <p className="text-xs sm:text-sm text-gray-300 mb-5 sm:mb-7 max-w-xs sm:max-w-2xl mx-auto">
          Vicente Pires • Ambiente para família e amigos
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-2xl mx-auto">
          <Link
            href="/cardapio"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded shadow transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            Ver Cardápio
          </Link>
          <a
            href="https://wa.link/akira"
            target="_blank"
            rel="noopener"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded shadow transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
