const preloaded = new Set<string>();

export function lightboxSrc(src: string, width = 1200): string {
  try {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", "75");
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  } catch {
    return src;
  }
}

export function thumbSrc(src: string, width = 480): string {
  try {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", "70");
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  } catch {
    return src;
  }
}

function nextImageUrl(src: string, width: number): string {
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: "75",
  });
  return `/_next/image?${params.toString()}`;
}

export function preloadLightboxImage(src: string, width = 1200): void {
  if (typeof window === "undefined") return;

  const optimizedSrc = lightboxSrc(src, width);
  const nextSrc = nextImageUrl(optimizedSrc, width);
  const cacheKey = nextSrc;

  if (preloaded.has(cacheKey)) return;
  preloaded.add(cacheKey);

  const img = new window.Image();
  img.decoding = "async";
  img.src = nextSrc;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = optimizedSrc;
  document.head.appendChild(link);
}

export function preloadLightboxImages(sources: string[], width = 1200): void {
  sources.forEach((src) => preloadLightboxImage(src, width));
}
