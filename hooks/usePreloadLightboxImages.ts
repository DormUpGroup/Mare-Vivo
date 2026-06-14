"use client";

import { useEffect } from "react";
import { lightboxSrc, preloadLightboxImages } from "@/lib/images";

export function usePreloadLightboxImages(sources: string[]) {
  useEffect(() => {
    const urls = sources.map((src) => lightboxSrc(src));

    const run = () => preloadLightboxImages(urls);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(run, 400);
    return () => window.clearTimeout(id);
  }, [sources]);
}
