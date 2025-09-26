// lib/meta-images.ts
import type { StaticImageData } from "next/image";

type Media = string | StaticImageData;

export function getMetadataImage(media?: Media[], fallback = "/logo-og.png") {
  const m = media?.[0];
  if (!m) return fallback;                 // relative ok because you set metadataBase
  return typeof m === "string" ? m : m.src;
}

export function getMetadataImages(media?: Media[], limit = 4) {
  if (!media?.length) return undefined;
  return media.slice(0, limit).map((m) =>
    typeof m === "string"
      ? { url: m }                         // width/height optional
      : { url: m.src, width: m.width, height: m.height }
  );
}
