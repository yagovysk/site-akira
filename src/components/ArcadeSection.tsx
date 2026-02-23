export default function ArcadeSection() {
  return (
    <section id="fliperama" className="py-12 sm:py-16">
      <div className="bg-linear-to-r from-black via-red-950 to-black rounded-2xl p-5 sm:p-8 shadow-xl border border-red-900/60 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 w-full min-w-0 max-w-full mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-2 sm:mb-4">
            Fliperama Retrô
          </h2>
          <p className="text-gray-200 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            Venha se divertir no nosso fliperama retrô! Diversos clássicos
            arcade para todas as idades, ambiente climatizado e vibe nostálgica.
            Ideal para família, amigos e happy hour.
          </p>
          <a
            href="https://wa.link/akira"
            target="_blank"
            rel="noopener"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg text-base sm:text-lg transition-all w-full sm:w-auto text-center"
          >
            Venha jogar!
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center w-full min-w-0 max-w-full">
          {/* Placeholder para imagem do fliperama */}
          <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-black/60 border-4 border-yellow-400 rounded-xl flex items-center justify-center text-yellow-400 text-5xl sm:text-6xl font-extrabold">
            🕹️
          </div>
        </div>
      </div>
    </section>
  );
}
