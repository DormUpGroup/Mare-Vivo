import Image from "next/image";
import type { Dish } from "@/lib/menu";

type DishCardProps = {
  dish: Dish;
  onSelect?: () => void;
  onPreload?: () => void;
};

export default function DishCard({ dish, onSelect, onPreload }: DishCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onPointerEnter={onPreload}
      onFocus={onPreload}
      className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-card text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-h-[3.25rem] flex-1 line-clamp-2 font-sans text-xl font-normal leading-tight text-heading">
            {dish.name}
          </h3>
          <span className="shrink-0 pt-0.5 font-sans text-sm font-medium text-olive">
            {dish.price}
          </span>
        </div>
        <p className="line-clamp-3 font-sans text-sm font-normal leading-relaxed text-muted">
          {dish.description}
        </p>
      </div>
    </button>
  );
}
