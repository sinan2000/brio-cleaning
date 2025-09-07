import * as z from "zod";

export const bookingSchema = z.object({
  service: z.string().min(1, "Selectează un serviciu"),
  name: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  phone: z
    .string()
    .regex(
      /^\+40[0-9]{9}$/,
      "Numărul trebuie să înceapă cu +40 și să aibă 9 cifre"
    ),
  address: z.string().min(5, "Adresa trebuie să aibă minim 5 caractere"),
  date: z.date({ error: "Selectează o dată" }),
  timeSlot: z.string().min(1, "Selectează un interval orar"),
  message: z.string().optional(),
  gdprConsent: z
    .boolean()
    .refine(Boolean, { message: "Trebuie să accepți termenii" }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
