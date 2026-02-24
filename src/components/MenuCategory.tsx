import Card from "@/components/Card";
import { MenuCategory as MenuCategoryType } from "@/data/menu";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <section id={category.slug} className="py-5 sm:py-6 scroll-mt-28">
      <div className="menu-category-shell relative overflow-hidden rounded-2xl border border-red-900/70 bg-black/70 shadow-xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-red-700 via-yellow-400 to-red-700" />

        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 pt-5 pb-3">
          <h3 className="text-lg sm:text-2xl font-extrabold text-red-400 tracking-wide">
            {category.name}
          </h3>
          {category.badge ? (
            <span className="badge-pulse inline-flex items-center rounded-full border border-yellow-400/70 bg-black px-3 py-1 text-xs sm:text-sm font-bold text-yellow-400">
              {category.badge}
            </span>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-6 pb-4 sm:pb-5">
          {category.items.map((item) => (
            <Card key={item.slug} item={item} />
          ))}

          {category.note ? (
            <div className="sm:col-span-2 rounded-xl border border-yellow-400/40 bg-black/60 px-4 py-3 text-xs sm:text-sm text-gray-200 leading-relaxed">
              {category.note}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
