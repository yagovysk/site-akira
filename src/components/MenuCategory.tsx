import Card from "@/components/Card";
import { MenuCategory as MenuCategoryType } from "@/data/menu";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <section className="py-8">
      <h3 className="text-xl font-semibold text-red-400 mb-2 pl-1">
        {category.name}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {category.items.map((item) => (
          <Card key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
