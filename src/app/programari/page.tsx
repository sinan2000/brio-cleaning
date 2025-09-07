"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
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
import { Form } from "@/components/ui/form";

import { bookingSchema, type BookingFormData } from "./schema";
import StepService from "@/components/programari/step-1";
import StepContact from "@/components/programari/step-2";
import StepSchedule from "@/components/programari/step-3";
import StepSummary from "@/components/programari/step-4";
import { submitBooking } from "./actions";
import { services, slugFromHref } from "@/lib/constants";

export default function ProgramarePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sp = useSearchParams();
  const preselectedService = sp.get("s") ?? "";

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      service: preselectedService,
      name: "",
      phone: "+40",
      address: "",
      date: undefined,
      timeSlot: "",
      message: "",
      gdprConsent: false,
    },
  });

  const nextStep = async () => {
    const fields: (keyof BookingFormData)[][] = [
      ["service"],
      ["name", "phone", "address"],
      ["date", "timeSlot"],
      [], // summary
    ];
    const ok = await form.trigger(fields[currentStep - 1]);
    if (ok && currentStep < 4) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => setCurrentStep((s) => Math.max(1, s - 1));

  const generateWhatsAppLink = () => {
    const v = form.getValues();
    const s = services.find((x) => slugFromHref(x.href) === v.service);
    const msg = `Bună ziua! Aș dori o ${s?.title.toLowerCase()} pe ${v.date?.toLocaleDateString(
      "ro-RO"
    )} în intervalul ${v.timeSlot}. Nume: ${v.name}, tel: ${v.phone}, adresa: ${
      v.address
    }.${v.message ? " Mesaj: " + v.message : ""}`;
    return `https://wa.me/40123456789?text=${encodeURIComponent(msg)}`;
  };

  const onSubmit = async (data: BookingFormData) => {
    await submitBooking(data);
    setIsSubmitted(true);
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
                Cererea a fost trimisă. Revenim cu confirmarea în scurt timp.
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
                    <MessageCircle className="w-4 h-4 mr-2" /> Scrie pe WhatsApp
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
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Programează o Curățare
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Completează formularul pentru a programa serviciul dorit
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-4 md:mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`h-6 w-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-medium ${
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

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-md sm:text-lg md:text-xl">
                {currentStep === 1 && "Alege Serviciul"}
                {currentStep === 2 && "Contact & Locație"}
                {currentStep === 3 && "Programare"}
                {currentStep === 4 && "Rezumat & Consimțământ"}
              </CardTitle>
              <CardDescription>Pasul {currentStep} din 4</CardDescription>
            </CardHeader>

            <CardContent>
              <FormProvider {...form}>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <AnimatePresence mode="wait">
                      {currentStep === 1 && (
                        <motion.div
                          key="s1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <StepService />
                        </motion.div>
                      )}
                      {currentStep === 2 && (
                        <motion.div
                          key="s2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <StepContact />
                        </motion.div>
                      )}
                      {currentStep === 3 && (
                        <motion.div
                          key="s3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <StepSchedule />
                        </motion.div>
                      )}
                      {currentStep === 4 && (
                        <motion.div
                          key="s4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <StepSummary />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="flex items-center bg-transparent"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Înapoi
                      </Button>
                      {currentStep < 4 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center bg-[#1E839C] hover:bg-[#1a7389]"
                        >
                          Următorul <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="flex items-center bg-[#1E839C] hover:bg-[#1a7389]"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting
                            ? "Se trimite..."
                            : "Trimite Cererea"}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </FormProvider>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
