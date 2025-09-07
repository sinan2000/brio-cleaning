"use server";

import { bookingSchema } from "./schema";

export async function submitBooking(input: unknown) {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) {
    // You can return a structured error if you prefer
    throw new Error("Form data invalidă.");
  }
  const data = parsed.data;

  console.log(data);

  return { ok: true };
}
