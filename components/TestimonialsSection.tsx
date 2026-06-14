"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

const TESTIMONIALS = [
  {
    quote:
      "The branzino al forno was perfect — simple, fresh, and the olive oil and lemon made it unforgettable. The staff knew the wine list by heart and the terrace at sunset felt like being on the Amalfi coast.",
    author: "James T.",
    city: "London",
    date: "August 2024",
  },
  {
    quote:
      "We had the crudo and the spaghetti alle vongole. Everything tasted like it had just come from the sea. Warm, unpretentious service and a real neighbourhood feel. Will definitely be back.",
    author: "Sarah M.",
    city: "Edinburgh",
    date: "July 2024",
  },
  {
    quote:
      "Il crudo di mare e il risotto ai frutti di mare erano impeccabili. Personale gentilissimo e locale curatissimo. Sembrava di essere in un ristorante di pesce in Puglia, non in città. Consigliatissimo.",
    author: "Marco R.",
    city: "Milano",
    date: "Agosto 2024",
  },
  {
    quote:
      "Prenotato per un compleanno: ci hanno fatto trovare un tavolo con vista sul porto. Le orate e i gamberi alla griglia da sogno. Servizio attento senza essere invadente. Mare Vivo è diventato il nostro posto per il pesce.",
    author: "Elena e Paolo",
    city: "Roma",
    date: "Settembre 2024",
  },
];

function StarRating() {
  return (
    <span className="text-olive" aria-hidden>
      ★★★★★
    </span>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-sand py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:snap-none md:overflow-visible">
            {TESTIMONIALS.map((item) => (
              <article
                key={`${item.author}-${item.city}`}
                className="min-w-[280px] shrink-0 snap-start rounded-2xl bg-card p-6 shadow-soft md:min-w-0"
              >
                <div className="mb-3">
                  <StarRating />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-heading">
                  {item.author} — {item.city}
                </p>
                <p className="mt-0.5 text-xs text-muted">{item.date}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
