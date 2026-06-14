"use client";

import { useLanguage } from "./LanguageProvider";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.1l.9-3H13V9c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep text-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-semibold text-sand">Mare Vivo</h3>
          <p className="text-sm text-sand/90">
            {t.footer.address}
          </p>
        </div>
        <div className="space-y-3 text-sm text-sand/90">
          <p className="uppercase tracking-[0.2em] text-sand/70">
            {t.footer.hours}
          </p>
          <p>{t.footer.lunch}</p>
          <p>{t.footer.dinner}</p>
          <p>{t.footer.closed}</p>
        </div>
        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-sm text-sand/70">
            {t.footer.follow}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="rounded-full border border-sand/40 p-2 transition hover:border-sand hover:text-sand"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-sand/20 py-6 text-center text-xs text-sand/70">
        {t.footer.rights}
      </div>
    </footer>
  );
}
