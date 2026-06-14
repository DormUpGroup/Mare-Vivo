"use client";

import { useLanguage } from "./LanguageProvider";

export default function ExperienceText() {
  const { t } = useLanguage();

  return (
    <div className="rounded-3xl border border-deep/10 bg-card p-6 shadow-soft sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-olive">
        {t.experience.eyebrow}
      </p>
      <p className="mt-4 text-lg text-heading sm:text-xl">
        {t.experience.description}
      </p>
    </div>
  );
}
