"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import BookingForm from "./BookingForm";

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="book" className="bg-sand py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.booking.eyebrow}
            title={t.booking.title}
            description={t.booking.description}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+390000000000"
              className="inline-flex items-center gap-3 rounded-full bg-deep px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-deep/90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5.4 3.6h3.1l1 4-2 1.2c1 2 2.7 3.7 4.7 4.7l1.2-2 4 1v3.1c0 1-.8 1.9-1.9 1.9A12.1 12.1 0 0 1 3.5 5.5c0-1 .8-1.9 1.9-1.9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              {t.booking.call}
            </a>
            <a
              href="https://wa.me/390000000000"
              className="inline-flex items-center gap-3 rounded-full bg-deep px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-deep/90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M12 3.2a8.8 8.8 0 0 0-7.5 13.3L3 21l4.6-1.2A8.8 8.8 0 1 0 12 3.2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2 8.8c.4-.4 1-.3 1.3.1l.9 1.2c.2.3.2.7 0 1l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.3-.2.7-.2 1 0l1.2.9c.4.3.5.9.1 1.3-.4.4-1 .7-1.6.7-3.5 0-6.3-2.8-6.3-6.3 0-.6.2-1.2.7-1.6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              {t.booking.whatsapp}
            </a>
            <a
              href="https://www.instagram.com"
              className="inline-flex items-center gap-3 rounded-full border border-deep px-6 py-3 text-sm uppercase tracking-[0.2em] text-deep transition hover:bg-deep hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M16.8 3H7.2C4.88 3 3 4.88 3 7.2v9.6C3 19.12 4.88 21 7.2 21h9.6c2.32 0 4.2-1.88 4.2-4.2V7.2C21 4.88 19.12 3 16.8 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
              {t.booking.instagram}
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="border-t border-deep/10 pt-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-olive">
              {t.booking.formHeading}
            </p>
            <div className="mt-6 rounded-2xl border border-deep/10 bg-card px-6 py-8 shadow-soft md:px-10 md:py-10">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
