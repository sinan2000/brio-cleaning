"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import tapiterii from "@/assets/booking/tapiterii.jpg";
import auto from "@/assets/booking/auto.jpg";
import horeca from "@/assets/booking/horeca.jpg";
import Image from "next/image";

// Service data with images
const services = [
  {
    id: "tapiterii",
    name: "Curățare Tapițerii",
    description: "Curățare profesională pentru canapele, fotolii și saltele",
    image: tapiterii,
  },
  {
    id: "auto",
    name: "Curățare Auto",
    description: "Curățare completă interior și exterior vehicule",
    image: auto,
  },
  {
    id: "horeca",
    name: "Curățare HoReCa",
    description: "Servicii profesionale pentru restaurante și hoteluri",
    image: horeca,
  },
];

// Time slots
const timeSlots = [
  { id: "morning", label: "09:00 - 12:00", value: "09-12" },
  { id: "afternoon", label: "12:00 - 15:00", value: "12-15" },
  { id: "evening", label: "15:00 - 18:00", value: "15-18" },
];

// Form schema
const bookingSchema = z.object({
  service: z.string().min(1, "Selectează un serviciu"),
  name: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  phone: z
    .string()
    .regex(
      /^\+40[0-9]{9}$/,
      "Numărul de telefon trebuie să înceapă cu +40 și să aibă 9 cifre"
    ),
  address: z.string().min(5, "Adresa trebuie să aibă minim 5 caractere"),
  date: z.date({
    error: "Selectează o dată",
  }),
  timeSlot: z.string().min(1, "Selectează un interval orar"),
  message: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Trebuie să accepți termenii și condițiile",
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function ProgramarePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("s");

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      service: preselectedService || "",
      name: "",
      phone: "+40",
      address: "",
      timeSlot: "",
      message: "",
      gdprConsent: false,
    },
  });

  const { watch, trigger, getValues, formState } = form;
  const watchedService = watch("service");
  const selectedService = services.find((s) => s.id === watchedService);

  // Phone number formatting
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits except +
    let cleaned = value.replace(/[^\d+]/g, "");

    // Ensure it starts with +40
    if (!cleaned.startsWith("+40")) {
      cleaned = "+40" + cleaned.replace(/^\+?40?/, "");
    }

    // Limit to +40 + 9 digits
    if (cleaned.length > 12) {
      cleaned = cleaned.substring(0, 12);
    }

    return cleaned;
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["service"];
        break;
      case 2:
        fieldsToValidate = ["name", "phone", "address"];
        break;
      case 3:
        fieldsToValidate = ["date", "timeSlot"];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    console.log("[v0] Booking form submitted:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const values = getValues();
    const service = services.find((s) => s.id === values.service);
    const message = `Bună ziua! Aș dori să programez o ${service?.name.toLowerCase()} pentru data de ${values.date?.toLocaleDateString(
      "ro-RO"
    )} în intervalul ${values.timeSlot}. Numele meu este ${
      values.name
    }, telefon: ${values.phone}, adresa: ${values.address}.${
      values.message ? ` Mesaj suplimentar: ${values.message}` : ""
    }`;

    return `https://wa.me/40123456789?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Mulțumim!
              </h1>
              <p className="text-gray-600 mb-6">
                Cererea ta a fost trimisă cu succes. Te vom contacta în scurt
                timp pentru confirmare.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href="/">Înapoi la pagina principală</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full bg-transparent"
                >
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Scrie pe WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Programează o Curățare
            </h1>
            <p className="text-gray-600">
              Completează formularul pentru a programa serviciul dorit
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep
                      ? "bg-brio-blue-dark text-white"
                      : "bg-brio-gray text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      step < currentStep ? "bg-brio-blue-dark" : "bg-brio-gray"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentStep === 1 && "Alege Serviciul"}
                {currentStep === 2 && "Contact & Locație"}
                {currentStep === 3 && "Programare"}
                {currentStep === 4 && "Rezumat & Consimțământ"}
              </CardTitle>
              <CardDescription>Pasul {currentStep} din 4</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <AnimatePresence mode="wait">
                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {/* Service Image Preview */}
                        {selectedService && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6"
                          >
                            <Image
                              src={selectedService.image}
                              alt={selectedService.name}
                              className="w-full h-48 object-contain rounded-lg"
                            />
                          </motion.div>
                        )}
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="space-y-4"
                                >
                                  {services.map((service) => (
                                    <div key={service.id}>
                                      <Label
                                        htmlFor={service.id}
                                        className="cursor-pointer"
                                      >
                                        <Card
                                          className={`transition-all hover:shadow-md ${
                                            field.value === service.id
                                              ? "ring-2 ring-[#1E839C] bg-blue-50"
                                              : "hover:bg-gray-50"
                                          }`}
                                        >
                                          <CardContent className="p-4">
                                            <div className="flex items-center space-x-4">
                                              <RadioGroupItem
                                                value={service.id}
                                                id={service.id}
                                                className="mt-1"
                                              />
                                              <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">
                                                  {service.name}
                                                </h3>
                                                <p className="text-sm font-medium text-brio-blue mt-2">
                                                  {service.description}
                                                </p>
                                              </div>
                                            </div>
                                          </CardContent>
                                        </Card>
                                      </Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 2: Contact & Location */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nume *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Numele tău complet"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon/WhatsApp *</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+40 123 456 789"
                                  {...field}
                                  onChange={(e) => {
                                    const formatted = formatPhoneNumber(
                                      e.target.value
                                    );
                                    field.onChange(formatted);
                                  }}
                                />
                              </FormControl>
                              <FormDescription>
                                Confirmăm pe WhatsApp în max. 2h
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
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
                              <FormDescription>
                                Adresa unde se va efectua serviciul
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 3: Scheduling */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dată *</FormLabel>
                              <FormControl>
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || date.getDay() === 0
                                  } // Disable Sundays
                                  className="rounded-md border"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeSlot"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Interval Orar *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="grid grid-cols-1 gap-3"
                                >
                                  {timeSlots.map((slot) => (
                                    <Label
                                      key={slot.id}
                                      htmlFor={slot.id}
                                      className="cursor-pointer"
                                    >
                                      <Card
                                        className={`transition-all hover:shadow-sm ${
                                          field.value === slot.value
                                            ? "ring-2 ring-[#1E839C] bg-blue-50"
                                            : "hover:bg-gray-50"
                                        }`}
                                      >
                                        <CardContent className="p-3">
                                          <div className="flex items-center space-x-3">
                                            <RadioGroupItem
                                              value={slot.value}
                                              id={slot.id}
                                            />
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="font-medium">
                                              {slot.label}
                                            </span>
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
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mesaj Scurt (opțional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Detalii suplimentare despre serviciul dorit..."
                                  className="min-h-[80px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Orice informații suplimentare care ne-ar ajuta
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 4: Summary & Consent */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        {/* Summary */}
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <h3 className="font-semibold text-gray-900">
                            Rezumatul Programării
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Serviciu:</span>
                              <span className="font-medium">
                                {selectedService?.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Nume:</span>
                              <span className="font-medium">
                                {watch("name")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Telefon:</span>
                              <span className="font-medium">
                                {watch("phone")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Adresă:</span>
                              <span className="font-medium">
                                {watch("address")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Dată:</span>
                              <span className="font-medium">
                                {watch("date")?.toLocaleDateString("ro-RO")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Interval:</span>
                              <span className="font-medium">
                                {
                                  timeSlots.find(
                                    (slot) => slot.value === watch("timeSlot")
                                  )?.label
                                }
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* GDPR Consent */}
                        <FormField
                          control={form.control}
                          name="gdprConsent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  Sunt de acord cu{" "}
                                  <a
                                    href="/termeni"
                                    className="text-[#1E839C] hover:underline"
                                  >
                                    Termenii și Condițiile
                                  </a>{" "}
                                  și{" "}
                                  <a
                                    href="/politica-confidentialitate"
                                    className="text-[#1E839C] hover:underline"
                                  >
                                    Politica de Confidențialitate
                                  </a>
                                  *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="flex items-center bg-transparent"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Înapoi
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center bg-[#1E839C] hover:bg-[#1a7389]"
                      >
                        Următorul
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex items-center bg-[#1E839C] hover:bg-[#1a7389]"
                        disabled={formState.isSubmitting}
                      >
                        {formState.isSubmitting
                          ? "Se trimite..."
                          : "Trimite Cererea"}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Persistent Fallback Actions */}
          <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-40">
            <Button
              size="sm"
              variant="outline"
              className="bg-white shadow-lg"
              asChild
            >
              <a href="tel:+40123456789">
                <Phone className="w-4 h-4 mr-2" />
                Sună Acum
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 shadow-lg"
              asChild
            >
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
