"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function MenuSection() {
  const { t, menuSections } = useLanguage();

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.menu.eyebrow}
            title={t.menu.title}
            description={t.menu.description}
            titleClassName="font-medium"
          />
        </Reveal>

        <div className="flex flex-col gap-14">
          {menuSections.map((section, sectionIndex) => (
            <Reveal key={section.title} delay={sectionIndex * 100}>
              <div className="flex flex-col gap-6">
                <h3 className="font-serif text-2xl font-medium text-heading">
                  {section.title}
                </h3>

                <ul className="flex flex-col divide-y divide-deep/10 overflow-hidden rounded-3xl border border-deep/10 bg-card shadow-soft">
                  {section.items.map((item) => (
                    <li key={item.name} className="p-5 sm:p-6">
                      <div className="flex gap-4 sm:gap-5">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <p className="font-sans text-base font-normal leading-snug text-heading sm:text-lg">
                              {item.name}
                            </p>
                            <span className="shrink-0 font-sans text-sm font-medium text-olive sm:text-base">
                              {item.price}
                            </span>
                          </div>
                          <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
