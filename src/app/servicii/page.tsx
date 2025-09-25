import { Check, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { services } from "@/lib/constants";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { getPriceText } from "@/lib/helpers";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 md:pt-24 lg:pt-28 pb-12 text-center">
        <Breadcrumbs
          items={[{ label: "Acasă", href: "/" }, { label: "Servicii" }]}
          className="sr-only mb-3 flex justify-center md:justify-start"
        />
        <h1 className="text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Serviciile Noastre
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto text-pretty">
          De la tapițerii și auto, până la HoReCa — oferim curățare profesională
          pentru orice nevoie.
        </p>
      </section>

      {/* Staggered Story Layout */}
      <section className="py-16">
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={index}>
                <div className="min-h-[480px] md:min-h-[560px] lg:min-h-[600px] flex items-center">
                  <div className="container mx-auto px-4">
                    <div
                      className={`grid lg:grid-cols-2 gap-12 items-center ${
                        isEven ? "" : "lg:grid-flow-col-dense"
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`${
                          isEven ? "lg:order-1" : "lg:order-2"
                        } relative`}
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <Image
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                          {/* PRICE BADGE */}
                          <span
                            className="absolute top-4 right-4 bg-brio-blue-dark text-white
                 text-xs sm:text-sm md:text-base font-semibold
                 px-3 py-1.5 rounded-full shadow-lg"
                          >
                            {getPriceText(service)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`${
                          isEven ? "lg:order-2" : "lg:order-1"
                        } space-y-6`}
                      >
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-brio-blue/10 text-brio-blue-dark">
                            <service.icon className="h-6 w-6" />{" "}
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
                            {service.title ?? ""}
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
                          {service.description ?? ""}
                        </p>

                        <aside className="mt-3 rounded-xl border border-brio-green/30 bg-brio-green/5 p-4 flex gap-3 items-start">
                          <InfoIcon className="w-5 h-5 text-brio-green mt-0.5 shrink-0" />
                          <p className="text-sm md:text-base text-foreground">
                            <span className="font-semibold">Știați că? </span>
                            {service.fact}
                          </p>
                        </aside>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          {service.features
                            .slice(0, 4)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-3"
                              >
                                <Check className="w-5 h-5 text-brio-blue flex-shrink-0" />
                                <span className="text-foreground font-medium text-sm md:text-base">
                                  {feature}
                                </span>
                              </div>
                            ))}
                        </div>

                        <div className="pt-4">
                          <Link href={service.href}>
                            <Button
                              size="lg"
                              className="text-base md:text-lg px-6 md:px-8 py-3 bg-brio-blue-dark/90 hover:bg-brio-blue-dark"
                            >
                              Vezi Detalii
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="bg-brio-green py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
              Prospețime vizibilă. Igienă garantată.
            </h2>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Indiferent că este vorba de casa ta, biroul, restaurantul sau sala
            de evenimente, serviciile Brio Cleaning aduc confort și siguranță
            pentru oameni și spații.
          </p>
          <div className="mt-6">
            <Link
              href="/programari"
              className="inline-block underline underline-offset-4 text-primary-foreground"
            >
              Fă-ți o programare acum și redescoperă prospețimea!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
