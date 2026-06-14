"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const STORAGE_KEY = "mare-vivo-splash-seen";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const holdMs = reducedMotion ? 500 : 1400;
    const fadeMs = reducedMotion ? 250 : 550;

    const exitTimer = window.setTimeout(() => setExiting(true), holdMs);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, holdMs + fadeMs);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-sand ${
        exiting ? "splash-screen--exit" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label="Mare Vivo"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(23, 77, 73, 0.1) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(167, 124, 82, 0.12) 0%, transparent 40%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <div className="splash-logo text-deep">
          <Logo size={72} />
        </div>

        <div className="splash-title flex flex-col items-center gap-2">
          <p className="font-serif text-4xl font-semibold tracking-[0.06em] text-heading sm:text-5xl">
            Mare Vivo
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-olive/90">
            Mediterranean Soul
          </p>
        </div>
      </div>
    </div>
  );
}
