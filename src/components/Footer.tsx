export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-red-700/40 py-8 mt-8 sm:mt-12 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-3 sm:flex-row items-center justify-between w-full">
        <span className="block">
          © {new Date().getFullYear()} Churraskim do Akira. Todos os direitos
          reservados.
        </span>
        <span className="block text-center sm:text-right">
          Vicente Pires, Brasília -{" "}
          <a
            href="https://wa.link/akira"
            className="text-green-400 hover:underline ml-1 font-semibold"
          >
            WhatsApp
          </a>
        </span>
      </div>
    </footer>
  );
}
