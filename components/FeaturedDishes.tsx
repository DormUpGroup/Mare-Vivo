"use client";

import { useState } from "react";
import DishCard from "./DishCard";
import DishLightbox from "./DishLightbox";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import type { Dish } from "@/lib/menu";

export default function FeaturedDishes() {
  const { t, featuredDishes } = useLanguage();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <section id="featured" className="bg-sand py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.featured.eyebrow}
            title={t.featured.title}
            description={t.featured.description}
          />
        </Reveal>
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 100} className="h-full">
              <DishCard dish={dish} onSelect={() => setSelectedDish(dish)} />
            </Reveal>
          ))}
        </div>
      </div>
      <DishLightbox dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  );
}
