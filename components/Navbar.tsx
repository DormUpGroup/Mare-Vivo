"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.menu, href: "/menu" },
    { label: t.nav.featured, href: "/#featured" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.book, href: "/#book" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isMenuPage
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group flex items-center gap-2.5"
          onClick={closeMobile}
          aria-label="Mare Vivo — Home"
        >
          <Logo
            size={36}
            className="text-deep transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif text-xl font-semibold tracking-wide text-heading">
            Mare Vivo
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 rounded-full border border-deep/40 px-1 py-1 text-[10px] uppercase tracking-[0.2em] text-deep">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2 py-1 transition ${
                locale === "en" ? "bg-deep text-white" : "hover:bg-deep/10"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("it")}
              className={`rounded-full px-2 py-1 transition ${
                locale === "it" ? "bg-deep text-white" : "hover:bg-deep/10"
              }`}
            >
              IT
            </button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-md text-deep transition hover:bg-deep/10 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-controls="mobile-menu"
          >
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
          <a
            href="/#book"
            className="hidden rounded-full border border-deep px-4 py-2 text-xs uppercase tracking-[0.2em] text-deep transition hover:bg-deep hover:text-white md:inline-flex"
          >
            {t.nav.reserve}
          </a>
        </div>
      </div>

      {/* Mobile slide panel (from top, below header) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 top-14 z-40 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-white/95 backdrop-blur transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
          onClick={closeMobile}
        />
        <nav
          className={`relative flex flex-col border-t border-deep/10 bg-white/98 px-5 py-6 shadow-lg transition-all duration-300 ease-out ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-deep/5 py-4 text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-deep last:border-0"
              onClick={closeMobile}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#book"
            className="mt-2 inline-flex justify-center rounded-full border border-deep px-4 py-3 text-xs uppercase tracking-[0.2em] text-deep transition hover:bg-deep hover:text-white"
            onClick={closeMobile}
          >
            {t.nav.reserve}
          </a>
        </nav>
      </div>
    </header>
  );
}
