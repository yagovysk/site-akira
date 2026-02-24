import Image from "next/image";
import { MenuItem } from "@/data/menu";

export default function Card({ item }: { item: MenuItem }) {
  return (
    <article className="menu-item-card group relative overflow-hidden rounded-xl border border-red-900/60 bg-black/80 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/80 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-red-900/0 via-red-800/10 to-red-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {item.image ? (
        <div className="relative z-10 mb-3 overflow-hidden rounded-lg border border-red-900/50">
          <Image
            src={item.image}
            alt={item.name}
            width={640}
            height={360}
            className="h-48 sm:h-72 md:h-80 w-full object-contain bg-black/30"
          />
        </div>
      ) : null}

      <div className="relative z-10 flex items-start justify-between gap-3">
        <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
          {item.name}
        </h4>
        <span className="price-chip shrink-0 rounded-full bg-red-600 px-3 py-1 text-xs sm:text-sm font-extrabold text-white shadow-md">
          {item.price}
        </span>
      </div>

      {item.description ? (
        <p className="relative z-10 mt-2 text-sm text-gray-300 leading-relaxed">
          {item.description}
        </p>
      ) : null}

      {item.highlight ? (
        <div className="relative z-10 mt-3 inline-flex items-center rounded-full border border-yellow-400/60 bg-black/70 px-3 py-1 text-[11px] font-semibold text-yellow-400">
          Destaque da casa
        </div>
      ) : null}
    </article>
  );
}
