"use client";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import type { BookingFormData } from "@/app/programari/schema";
import { TIME_SLOTS } from "@/lib/constants";

// ⬇️ use your services + slugFromHref
import { services as SERVICE_DATA } from "@/lib/constants";
import { slugFromHref } from "@/lib/helpers";
import Link from "next/link";

export default function StepSummary() {
  const { watch, control } = useFormContext<BookingFormData>();
  const vals = watch();

  // find selected service by slug (the form stores the slug)
  const svc = SERVICE_DATA.find((s) => slugFromHref(s.href) === vals.service);
  const slot = TIME_SLOTS.find((s) => s.value === vals.timeSlot)?.label ?? "-";

  const safeDate =
    vals.date instanceof Date ? vals.date.toLocaleDateString("ro-RO") : "-";

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
        <h3 className="font-semibold text-gray-900 mb-2">
          Rezumatul Programării
        </h3>
        <Row l="Serviciu" r={svc?.title ?? "-"} />
        <Row l="Nume" r={vals.name} />
        <Row l="Telefon" r={vals.phone} />
        <Row l="Adresă" r={vals.address} />
        <Row l="Dată" r={safeDate} />
        <Row l="Interval" r={slot} />
      </div>

      <FormField
        control={control}
        name="gdprConsent"
        render={({ field }) => (
          <FormItem className="flex items-start gap-3">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>

            {/* make the text area grow + shrink properly */}
            <div className="flex-1 min-w-0 leading-normal">
              <FormLabel className="text-[13px] sm:text-sm">
                {/* keep pieces inline but allow nice wrapping */}
                <span className="inline-flex flex-wrap items-center gap-x-1 gap-y-0.5">
                  <span>Sunt de acord cu</span>
                  <Link
                    href="/termeni-si-conditii"
                    className="text-[#1E839C] hover:underline"
                  >
                    Termenii și Condițiile
                  </Link>
                  <span>și</span>
                  <Link
                    href="/politica-de-confidentialitate"
                    className="text-[#1E839C] hover:underline"
                  >
                    Politica de Confidențialitate
                  </Link>
                  <span className="text-red-500">*</span>
                </span>
              </FormLabel>

              {/* keep the error on a new line, small and subtle */}
              <FormMessage className="mt-1 text-xs" />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}

function Row({ l, r }: { l: string; r?: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-gray-600">{l}:</span>
      <span className="font-medium">{r || "-"}</span>
    </div>
  );
}
