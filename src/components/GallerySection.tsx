import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const galleryItems = [
  {
    title: "Espetinhos na Brasa",
    subtitle: "Sabor marcante e preparo na hora",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Toque Japonês",
    subtitle: "Tradição oriental em cada prato",
    size: "",
  },
  {
    title: "Fliperama Retrô",
    subtitle: "Diversão enquanto espera",
    size: "",
  },
  {
    title: "Ambiente Acolhedor",
    subtitle: "Família e amigos bem-vindos",
    size: "",
  },
  {
    title: "Happy Hour",
    subtitle: "Comida boa e energia alta",
    size: "",
  },
];

export default function GallerySection() {
  return (
    <section className="py-12 sm:py-16" id="galeria">
      <SectionTitle>Galeria do Churraskim</SectionTitle>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-300">
        Um gostinho da experiência: brasa, culinária japonesa e fliperama no
        mesmo lugar.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className={`gallery-card group relative overflow-hidden rounded-2xl border border-red-900/60 bg-black/70 shadow-lg ${item.size}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <Image
              src="/images/logo-akira.jpg"
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index === 0}
            />
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
          </article>
        ))}
      </div>
    </section>
  );
}
