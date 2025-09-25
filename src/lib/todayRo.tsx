export const todayRo = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Bucharest",
}).format(new Date());
