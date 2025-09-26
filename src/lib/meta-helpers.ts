// utils/serp.ts
export function serpTruncate(input: string, maxChars: number = 60): string {
  const ELLIPSIS = "...";
  if (!input) return "";
  const s = input.replace(/\s+/g, " ").trim();
  if (s.length <= maxChars) return s;

  if (maxChars <= ELLIPSIS.length) {
    return ELLIPSIS.slice(0, maxChars);
  }

  const limit = Math.max(0, maxChars - ELLIPSIS.length);
  let slice = s.slice(0, limit);

  // Prefer cutting at a word boundary near the end (last 10–15 chars)
  const boundary = slice.lastIndexOf(" ");
  if (boundary > limit - 15) {
    slice = slice.slice(0, boundary);
  }

  // Clean trailing punctuation/spaces before adding …
  slice = slice.replace(/[.,;:!?\-\s]+$/u, "");

  return slice + ELLIPSIS;
}

export function serviceMetaTitle(baseTitle: string, benefit: string) {
  const city = "Timișoara";
  const raw = benefit
    ? `${baseTitle} în ${city} - ${benefit} | Brio Cleaning`
    : `${baseTitle} în ${city} | Brio Cleaning`;
  return serpTruncate(raw);
}

export function slugFromHref(href: string) {
  return href.replace(/\/+$/, "").split("/").pop() || "";
}
