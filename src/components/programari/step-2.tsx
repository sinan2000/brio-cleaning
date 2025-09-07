"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { BookingFormData } from "@/app/programari/schema";

export default function StepContact() {
  const { control } = useFormContext<BookingFormData>();

  const formatPhone = (v: string) => {
    let cleaned = v.replace(/[^\d+]/g, "");
    if (!cleaned.startsWith("+40")) cleaned = "+40" + cleaned.replace(/^\+?40?/, "");
    return cleaned.slice(0, 12);
  };

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nume *</FormLabel>
            <FormControl>
              <Input placeholder="Numele tău complet" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefon (WhatsApp) *</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="+40 123 456 789"
                {...field}
                onChange={(e) => field.onChange(formatPhone(e.target.value))}
              />
            </FormControl>
            <FormDescription>Confirmăm pe WhatsApp în max. 2h</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adresă *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Strada, numărul, orașul..."
                className="min-h-[80px]"
                {...field}
              />
            </FormControl>
            <FormDescription>Locația intervenției</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
