"use server";

import { bookingSchema } from "./schema";
import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";
import { contact, services } from "@/lib/constants";
import { normPhone, slugFromHref } from "@/lib/helpers";
import { format, parse, isValid } from "date-fns";
import { redirect } from "next/navigation";

export async function submitBooking(input: unknown) {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) {
    // You can return a structured error if you prefer
    throw new Error("Datele nu sunt valide.");
  }
  const data = parsed.data;

  await sendSms(data);

  return { ok: true };
}

function toGSM(input: string) {
  // 1) Strip diacritics generically
  let s = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 2) Normalize legacy cedilla forms explicitly (just in case)
  s = s.replace(/[șşȘŞ]/g, "s").replace(/[țţȚŢ]/g, "t");

  // 3) Normalize smart punctuation that isn’t in GSM-7
  s = s
    .replace(/[’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...");

  return s;
}

function formatIOSDate(d: Date, tz = "Europe/Bucharest") {
  // => "16.09.2025"
  return new Intl.DateTimeFormat("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: tz,
  }).format(d);
}

function normalizeSlot(slot: string) {
  // Accept "9-12", "09-12", "09:00-12", "09:00-12:00", "09–12" etc.
  const m = slot.match(
    /^\s*(\d{1,2})(?::?(\d{2}))?\s*[-–]\s*(\d{1,2})(?::?(\d{2}))?\s*$/
  );
  if (!m) return slot.trim(); // fallback, keep as-is
  const sH = m[1].padStart(2, "0");
  const sM = (m[2] ?? "00").padStart(2, "0");
  const eH = m[3].padStart(2, "0");
  const eM = (m[4] ?? "00").padStart(2, "0");
  return `${sH}:${sM}-${eH}:${eM}`; // GSM-safe hyphen
}

function formatIOSDateTime(dateInput: string | Date, slot: string) {
  const d = new Date(dateInput);
  return `${formatIOSDate(d)} ${normalizeSlot(slot)}`; // "16.09.2025 09:00-12:00"
}

// dd/MM/yyyy with safe parsing of 'yyyy-MM-dd' (no UTC shift)
function formatDMY(value: Date | string) {
  const d =
    typeof value === "string"
      ? parse(value, "yyyy-MM-dd", new Date()) // parses as LOCAL date
      : value;

  return isValid(d) ? format(d, "dd/MM/yyyy") : "";
}

async function sendSms(data: any) {
  const { service, name, phone, address, date, timeSlot, message } = data;

  const vonage = new Vonage(
    new Auth({
      apiKey: process.env.VONAGE_API_KEY,
      apiSecret: process.env.VONAGE_API_SECRET,
    })
  );

  function toInline(s?: string) {
    return (s ?? "")
      .replace(/\s*\r?\n\s*/g, ", ") // newlines -> ", "
      .replace(/\s{2,}/g, " ") // collapse extra spaces
      .replace(/,\s*,/g, ", ") // collapse double commas
      .trim();
  }

  // Usage
  const addressInline = toInline(address);
  const messageInline = toInline(message);

  const svc = services.find((s) => slugFromHref(s.href) === service)!;
  const dateStr = formatDMY(date);
  const iosDateTime = formatIOSDateTime(date, timeSlot);

  const from = "Website";
  const text =
    `Programare nouă de la ${name}, tel. ${phone}, pentru ${svc.title}, pe ${iosDateTime}, adresa ${addressInline}.` +
    (messageInline ? `Mesaj: ${messageInline}` : "");
  const cleanText = toGSM(text);

  try {
    await vonage.sms.send({
      to: "40732405829", // normPhone(),
      from,
      text: cleanText,
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      `A apărut o eroare. Vă rugăm să ne sunați direct la ${contact.phone}`
    );
  }

  const qs = new URLSearchParams({
    s: svc.title, // slug, e.g. "curatare-tapiterie"
    d: dateStr,
    t: data.timeSlot, // "09-12"
    n: data.name.split(" ")[0] || data.name,
  });

  redirect(`/programari/succes?${qs.toString()}`);
}
