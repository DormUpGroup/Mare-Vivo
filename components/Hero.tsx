"use client";

import Reveal from "./Reveal";
import { useParallaxScroll } from "./Parallax";
import { useLanguage } from "./LanguageProvider";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop";

export default function Hero() {
  const { t } = useLanguage();
  const { offset, enabled } = useParallaxScroll(0.42);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -top-[18%] -bottom-[18%] bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          ...(enabled
            ? {
                transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
                willChange: "transform",
              }
            : undefined),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/80">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-sand/90 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/menu"
              className="rounded-full bg-deep px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-deep/90"
            >
              {t.hero.viewMenu}
            </a>
            <a
              href="/#book"
              className="rounded-full border border-white/70 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              {t.hero.bookTable}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
