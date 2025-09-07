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
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Clock } from "lucide-react";
import { TIME_SLOTS } from "@/lib/constants";
import type { BookingFormData } from "@/app/programari/schema";

export default function StepSchedule() {
  const { control } = useFormContext<BookingFormData>();

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dată *</FormLabel>
            <FormControl>
              <CalendarComponent
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(d) => d < new Date() || d.getDay() === 0}
                className="rounded-md border"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="timeSlot"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interval Orar *</FormLabel>
            <FormControl>
              <RadioGroup
                className="grid grid-cols-1 gap-3"
                value={field.value}
                onValueChange={field.onChange}
              >
                {TIME_SLOTS.map((slot) => (
                  <Label
                    key={slot.id}
                    htmlFor={slot.id}
                    className="cursor-pointer"
                  >
                    <Card
                      className={
                        field.value === slot.value
                          ? "ring-2 ring-[#1E839C] bg-blue-50 py-2 gap-2 "
                          : "hover:bg-gray-50 transition py-2 gap-2 "
                      }
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem id={slot.id} value={slot.value} />
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">{slot.label}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Label>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mesaj (opțional)</FormLabel>
            <FormControl>
              <textarea
                className="min-h-[80px] w-full rounded-md border px-3 py-2"
                placeholder="Detalii suplimentare…"
                {...field}
              />
            </FormControl>
            <FormDescription>Orice informații utile</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
