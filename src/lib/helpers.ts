import { contact } from "./constants";

export const normPhone = () => contact.phone.replace(/[\s+]/g, "");

export function slugFromHref(href: string) {
  return href.split("/").filter(Boolean).pop() ?? "";
}

export function timeAgo(dateString: string): string {
  const now = new Date();
  const then = new Date(dateString);

  const diffMonths =
    (now.getFullYear() - then.getFullYear()) * 12 +
    (now.getMonth() - then.getMonth());

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
  }

  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
}

// utils/pricing.ts
export const formatRON = (value: number) =>
  new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    currencyDisplay: "code", // shows RON instead of “lei”
    maximumFractionDigits: 0,
  }).format(value);

export const getPriceText = (s: any): string | null => {
  const prices = Array.isArray(s?.prices) ? s.prices : [];
  if (!prices.length) return s?.note ?? null;

  // find minimum numeric p across all items
  const min = prices.reduce((acc: number, item: any) => {
    const v = typeof item?.p === "string" ? parseFloat(item.p) : item?.p;
    return Number.isFinite(v) && v < acc ? v : acc;
  }, Infinity);

  if (!Number.isFinite(min)) return s?.note ?? null;
  return `De la ${formatRON(min)}`;
};
