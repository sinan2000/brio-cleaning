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
