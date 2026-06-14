"use client";

import { useEffect } from "react";
import { lightboxSrc, preloadLightboxImages } from "@/lib/images";

export function usePreloadLightboxImages(sources: string[]) {
  useEffect(() => {
    const urls = sources.map((src) => lightboxSrc(src));

    const run = () => preloadLightboxImages(urls);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(run, 400);
    return () => clearTimeout(id);
  }, [sources]);
}
