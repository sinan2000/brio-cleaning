"use server";

import { bookingSchema } from "./schema";
import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";
import { contact, normPhone, services, slugFromHref } from "@/lib/constants";
import { format, parse, isValid } from "date-fns";

export async function submitBooking(input: unknown) {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) {
    // You can return a structured error if you prefer
    throw new Error("Datele nu sunt valide.");
  }
  const data = parsed.data;

  console.log(data);

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

  const from = "Website";
  const text =
    `Programare nouă de la ${name}, tel. ${phone}, pentru ${svc.title}, pe ${dateStr}, orele ${timeSlot}, adresa ${addressInline}.` +
    (messageInline ? `Mesaj: ${messageInline}` : "");
  const cleanText = toGSM(text);

  try {
    await vonage.sms.send({
      to: "40732405829",//normPhone(),
      from,
      text: cleanText,
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      `A apărut o eroare. Vă rugăm să ne sunați direct la ${contact.phone}`
    );
  }
}
