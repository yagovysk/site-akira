import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-700/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 w-full min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2 min-w-0"
          aria-label="Página inicial do Churraskim do Akira"
        >
          <Image
            src="/images/logo-akira.jpg"
            alt="Logo do Churraskim do Akira"
            width={64}
            height={64}
            className="rounded-full shadow-md border-2 border-yellow-400 bg-black w-12 h-12 sm:w-16 sm:h-16 object-cover"
            priority
          />
          <span className="font-bold text-sm sm:text-base text-white">
            Churraskim do Akira
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link
            href="/cardapio"
            className="hover:text-yellow-400 transition-colors"
          >
            Cardápio
          </Link>
          <Link
            href="/onde-estamos"
            className="hover:text-yellow-400 transition-colors"
          >
            Onde Estamos
          </Link>
          <a
            href="https://wa.link/akira"
            target="_blank"
            rel="noopener"
            className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded shadow font-bold ml-2 transition-all"
          >
            WhatsApp
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/cardapio"
            className="text-xs font-semibold hover:text-yellow-400 transition-colors"
          >
            Cardápio
          </Link>
          <a
            href="https://wa.link/akira"
            target="_blank"
            rel="noopener"
            className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded shadow font-bold transition-all text-xs"
            aria-label="WhatsApp Akira"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
