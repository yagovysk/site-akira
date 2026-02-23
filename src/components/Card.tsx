import { MenuItem } from "@/data/menu";

export default function Card({ item }: { item: MenuItem }) {
  return (
    <div className="bg-black/80 border border-red-900 rounded-lg p-4 shadow-lg hover:shadow-xl hover:border-yellow-400 transition-all flex flex-col items-start w-full min-w-0">
      {/* TODO: Adicionar imagem do prato */}
      <div className="mb-2">
        <span className="text-lg font-bold text-white break-all">
          {item.name}
        </span>
      </div>
      <p className="text-sm text-gray-300 mb-2 flex-1 break-all">
        {item.description}
      </p>
      <span className="text-yellow-400 font-semibold text-base">
        {item.price}
      </span>
    </div>
  );
}
