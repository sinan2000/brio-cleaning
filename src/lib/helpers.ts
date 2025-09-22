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

// Helper: make a compact price label from your `service.prices`
export const getPriceText = (s: any): string | null => {
  const prices = Array.isArray(s?.prices) ? s.prices : [];

  if (!prices.length) {
    return s?.note ? s.note : "Preț variabil";
  }

  // find minimum "p" across all entries
  const minItem = prices.reduce((acc: any, curr: any) => {
    if (typeof acc.p !== "number") return curr;
    if (typeof curr.p !== "number") return acc;
    return curr.p < acc.p ? curr : acc;
  });

  return `De la ${minItem.p} RON${minItem.unit ? `/${minItem.unit}` : ""}`;
};
