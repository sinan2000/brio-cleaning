import {
  Sparkles,
  Car,
  Building2,
  Sofa,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Sofa className="w-8 h-8 text-primary" />,
      title: "Curățare Tapițerii",
      description:
        "Redăm prospețimea canapelelor, fotoliilor și scaunelor tapițate cu echipamente profesionale și produse ecologice.",
      features: [
        "Eliminarea petelor",
        "Dezinfectare completă",
        "Uscare rapidă",
        "Protecție anti-pete",
      ],
      image: "/hero/poster.jpg",
      slug: "tapiterie",
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Curățare Auto",
      description:
        "Servicii complete de curățare interioară și exterioară pentru vehicule, inclusiv tapițeria auto și covoarele.",
      features: [
        "Aspirare profesională",
        "Curățare tapițerie auto",
        "Tratament piele",
        "Dezodorizare",
      ],
      image: "/hero/poster.jpg",
      slug: "auto",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Servicii HoReCa",
      description:
        "Soluții specializate pentru hoteluri, restaurante și cafenele - menținerea standardelor înalte de curățenie.",
      features: [
        "Curățare mobilier comercial",
        "Dezinfectare profesională",
        "Program de întreținere",
        "Certificări de calitate",
      ],
      image: "/hero/poster.jpg",
      slug: "horeca",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Serviciile Noastre
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          De la tapițerii și auto, până la HoReCa — oferim curățare profesională
          pentru orice nevoie.
        </p>
      </section>

      {/* Staggered Story Layout */}
      <section className="py-16">
        <div className="space-y-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="min-h-[600px] flex items-center">
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
                        } relative group`}
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`${
                          isEven ? "lg:order-2" : "lg:order-1"
                        } space-y-6`}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            {service.icon}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Link href={`/${service.slug}`}>
                            <Button size="lg" className="text-lg px-8 py-3">
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
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
              Rezultatele se văd de la prima curățare
            </h2>
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Îți redăm prospețimea și confortul cu echipamente profesionale și
            produse de cea mai înaltă calitate.
          </p>
        </div>
      </section>
    </div>
  );
}
