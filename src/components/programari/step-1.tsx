"use client";

import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import type { BookingFormData } from "@/app/programari/schema";
import { services as SERVICE_DATA, slugFromHref } from "@/lib/constants";

export default function StepService() {
  const { control, watch } = useFormContext<BookingFormData>();

  const bookingServices = useMemo(
    () =>
      SERVICE_DATA.map((s) => ({
        id: slugFromHref(s.href),
        name: s.title,
        description: s.short,
        image: s.image,
      })),
    []
  );

  const selected = bookingServices.find((s) => s.id === watch("service"));

  return (
    <div className="space-y-4">
      {selected && (
        <Image
          src={selected.image}
          alt={selected.name}
          className="w-full h-48 object-contain rounded-lg"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      )}

      <FormItem>
        <FormControl>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <RadioGroup
                className="space-y-4"
                value={field.value}
                onValueChange={field.onChange}
              >
                {bookingServices.map((s) => (
                  <Label key={s.id} htmlFor={s.id} className="cursor-pointer">
                    <Card
                      className={
                        field.value === s.id
                          ? "ring-2 ring-[#1E839C] bg-blue-50"
                          : "hover:bg-gray-50 transition"
                      }
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem
                            id={s.id}
                            value={s.id}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">
                              {s.name}
                            </h3>
                            <p className="text-sm font-medium text-brio-blue mt-2">
                              {s.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Label>
                ))}
              </RadioGroup>
            )}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
}
