"use client";

import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

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
    <div className="space-y-3">
      {/* Animated preview image */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-md"
          >
            <Image
              src={selected.image}
              alt={selected.name}
              className="w-full h-40 sm:h-44 object-contain bg-white"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 640px"
              priority={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slimmer options list */}
      <FormItem>
        <FormControl>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <RadioGroup
                className="space-y-3"
                value={field.value}
                onValueChange={field.onChange}
              >
                {bookingServices.map((s) => {
                  const checked = field.value === s.id;
                  return (
                    <Label
                      key={s.id}
                      htmlFor={s.id}
                      className="cursor-pointer block"
                    >
                      <Card
                        className={[
                          "transition",
                          "hover:bg-gray-50",
                          "py-2",
                          "gap-2",
                          "ring-1 ring-gray-100",
                          checked ? "ring-2 ring-[#1E839C] bg-blue-50" : "",
                        ].join(" ")}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-start gap-3">
                            <RadioGroupItem
                              id={s.id}
                              value={s.id}
                              className="mt-0.5"
                            />
                            <div className="flex-1">
                              <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">
                                {s.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-brio-blue mt-1 leading-snug">
                                {s.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Label>
                  );
                })}
              </RadioGroup>
            )}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
}
