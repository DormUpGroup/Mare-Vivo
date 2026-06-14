"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Via%20della%20Marina%2018,%2070122%20Bari,%20Italy&output=embed";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=60&w=1200&auto=format&fit=crop";

function MapPinIcon() {
  return (
    <svg
      className="h-10 w-10 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function MapSection() {
  const { t } = useLanguage();
  const [mapVisible, setMapVisible] = useState(false);

  return (
    <section className="bg-sand py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-olive">
          {t.footer.address}
        </p>
        <div className="overflow-hidden rounded-3xl border border-deep/10 shadow-soft">
          {!mapVisible ? (
            <button
              type="button"
              onClick={() => setMapVisible(true)}
              className="relative flex h-56 w-full cursor-pointer items-center justify-center overflow-hidden bg-sand/30 transition hover:bg-sand/50 focus:outline-none focus:ring-2 focus:ring-deep/40 focus:ring-offset-2"
              aria-label={t.footer.loadMap}
            >
              <Image
                src={PLACEHOLDER_IMAGE}
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent"
                aria-hidden
              />
              <span className="relative z-10 flex flex-col items-center gap-2 text-white drop-shadow">
                <MapPinIcon />
                <span className="text-sm font-medium uppercase tracking-[0.15em]">
                  {t.footer.loadMap}
                </span>
              </span>
            </button>
          ) : (
            <iframe
              title="Mare Vivo location"
              src={MAP_EMBED_URL}
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </section>
  );
}
