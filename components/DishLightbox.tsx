"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { lightboxSrc, preloadLightboxImage } from "@/lib/images";
import type { Dish } from "@/lib/menu";

type DishLightboxProps = {
  dish: Dish | null;
  onClose: () => void;
};

export default function DishLightbox({ dish, onClose }: DishLightboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!dish) return;

    setIsLoaded(false);
    preloadLightboxImage(dish.image);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const fullSrc = lightboxSrc(dish.image);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={dish.name}
    >
      <button
        type="button"
        className="absolute inset-0 bg-deep/85 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl animate-[lightbox-in_0.35s_ease-out] overflow-hidden rounded-3xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={dish.image}
            alt=""
            fill
            unoptimized
            aria-hidden="true"
            className="object-cover scale-105 blur-[2px] brightness-90"
            sizes="100vw"
          />

          <Image
            key={fullSrc}
            src={fullSrc}
            alt={dish.name}
            fill
            priority
            fetchPriority="high"
            className={`object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 896px) 100vw, 896px"
            onLoad={() => setIsLoaded(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <h2 className="font-serif text-3xl font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl">
                {dish.name}
              </h2>
              <span className="font-sans text-2xl font-medium text-olive drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-3xl">
                {dish.price}
              </span>
            </div>
            <p className="mt-4 max-w-2xl font-sans text-base font-normal leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] sm:text-lg">
              {dish.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
