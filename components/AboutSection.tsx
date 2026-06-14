"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-sand py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
          <p className="mt-6 text-sm text-muted sm:text-base">
            {t.about.body}
          </p>
          <div className="mt-8 space-y-4 border-l-2 border-olive/40 pl-5">
            <p className="font-serif text-base leading-relaxed text-heading sm:text-lg">
              {t.about.familyStory}
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {t.about.familyStoryContinued}
            </p>
            <p className="font-serif text-sm italic text-olive sm:text-base">
              {t.about.familySignature}
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Parallax speed={0.22}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1766928102338-203d0e91d290?q=80&w=1600&auto=format&fit=crop"
                alt={t.about.imageAlt}
                fill
                className="object-cover object-center scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
