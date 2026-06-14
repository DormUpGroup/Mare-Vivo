"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import DishLightbox from "./DishLightbox";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import { usePreloadLightboxImages } from "@/hooks/usePreloadLightboxImages";
import { preloadLightboxImage } from "@/lib/images";
import type { Dish } from "@/lib/menu";

function CategoryOrnament() {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rotate-45 rounded-sm bg-olive/70"
      aria-hidden="true"
    />
  );
}

export default function MenuSection() {
  const { t, menuSections } = useLanguage();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const imageSources = useMemo(
    () => menuSections.flatMap((section) => section.items.map((item) => item.image)),
    [menuSections]
  );

  usePreloadLightboxImages(imageSources);

  return (
    <section id="menu" className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-olive/25 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-16 px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.menu.eyebrow}
            title={t.menu.title}
            description={t.menu.description}
            titleClassName="font-medium"
          />
        </Reveal>

        <div className="flex flex-col gap-16">
          {menuSections.map((section, sectionIndex) => (
            <Reveal key={section.title} delay={sectionIndex * 100}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-olive/35 to-deep/20" />
                  <div className="flex items-center gap-2.5">
                    <CategoryOrnament />
                    <h3 className="font-serif text-2xl font-medium tracking-wide text-heading sm:text-[1.65rem]">
                      {section.title}
                    </h3>
                    <CategoryOrnament />
                  </div>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent via-olive/35 to-deep/20" />
                </div>

                <ul className="menu-panel flex flex-col overflow-hidden rounded-[1.75rem] border border-deep/15 bg-gradient-to-b from-card via-card to-sand/40 shadow-[0_18px_50px_-28px_rgba(23,77,73,0.35)]">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={item.name}
                      className={
                        itemIndex > 0
                          ? "border-t border-dashed border-deep/12"
                          : undefined
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedDish(item)}
                        onPointerEnter={() => preloadLightboxImage(item.image)}
                        onFocus={() => preloadLightboxImage(item.image)}
                        className="menu-item group flex w-full gap-4 p-5 text-left transition duration-300 sm:gap-5 sm:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-deep/50"
                        aria-label={`${item.name}, ${item.price}`}
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-deep/10 transition duration-500 group-hover:ring-olive/35 sm:h-24 sm:w-24">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                            sizes="96px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-deep/25 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <p className="font-serif text-lg font-medium leading-snug text-heading transition group-hover:text-deep sm:text-xl">
                              {item.name}
                            </p>
                            <span className="shrink-0 rounded-full border border-olive/25 bg-olive/10 px-2.5 py-1 font-sans text-sm font-medium text-olive transition group-hover:border-olive/45 group-hover:bg-olive/15 sm:text-base">
                              {item.price}
                            </span>
                          </div>

                          <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-muted">
                            {item.description}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.22em] text-olive/0 transition duration-300 group-hover:text-olive/90">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                              />
                            </svg>
                            {t.menu.viewDish}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <DishLightbox
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
