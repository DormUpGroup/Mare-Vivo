"use client";

import { Phone, CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function StickyBookingBar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const bookHref = pathname === "/" ? "#book" : "/#book";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand/20 bg-deep md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
    >
      <div className="flex">
        <a
          href="tel:+390000000000"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium text-white transition active:bg-deep/90"
        >
          <Phone className="h-5 w-5 shrink-0" strokeWidth={1.5} />
          <span>{t.stickyBar.call}</span>
        </a>
        <a
          href={bookHref}
          onClick={
            pathname === "/"
              ? (e) => {
                  e.preventDefault();
                  document
                    .getElementById("book")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              : undefined
          }
          className="flex flex-1 items-center justify-center gap-2 border-l border-white/20 py-4 text-sm font-medium text-white transition active:bg-deep/90"
        >
          <CalendarDays className="h-5 w-5 shrink-0" strokeWidth={1.5} />
          <span>{t.stickyBar.book}</span>
        </a>
      </div>
    </div>
  );
}
