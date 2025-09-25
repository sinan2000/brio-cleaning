import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { getPriceText } from "@/lib/helpers";
import { Reveal } from "../reveal";
import { ScrollReveal } from "../scroll-reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-brio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal threshold={0.3} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-base md:text-lg text-gray-900 max-w-2xl mx-auto text-pretty">
            Soluții complete de curățare adaptate nevoilor dumneavoastră
            specifice. Rezultate profesionale, de fiecare dată.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service, index) => {
            const isHoreca = index === 3; // or check service.href === "/servicii/horeca"

            return (
              <ScrollReveal
                key={index}
                delay={index * 60}
                className={`h-full ${isHoreca ? "md:col-span-3" : ""}`}
              >
                {isHoreca ? (
                  <Card
                    key={index}
                    className="group overflow-hidden flex flex-col md:flex-row
             md:items-stretch md:min-h-[240px] lg:min-h-[280px] py-0 gap-0"
                  >
                    {/* IMAGE LEFT */}
                    <div className="relative md:w-2/5 h-48 md:h-auto md:self-stretch overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={60}
                        sizes="(min-width:1024px) 40vw, 100vw"
                      />
                      <div className="absolute top-4 left-4 bg-brio-blue-dark text-white p-3 rounded-full">
                        <service.icon className="h-6 w-6 md:h-7 md:w-7" />
                      </div>
                    </div>

                    {/* CONTENT RIGHT */}
                    <div className="flex-1 flex flex-col">
                      <CardHeader className="pt-4 pb-2 md:pt-5 md:pb-2">
                        <CardTitle className="text-lg md:text-xl text-gray-900">
                          {service.title}
                        </CardTitle>

                        <span className="text-xs md:text-sm py-1 text-brio-blue-dark">
                          {getPriceText(service)}
                        </span>
                      </CardHeader>

                      <CardContent className="pt-0 px-4 md:px-6 pb-4 md:pb-7 space-y-3 flex-1 flex flex-col">
                        <p className="text-gray-700 text-sm">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-brio-blue rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto">
                          <Link href={service.href}>
                            <Button
                              variant="outline"
                              className="group w-full h-10 md:h-11 text-sm md:text-base
                             group-hover:bg-brio-blue-dark group-hover:text-white
                             hover:bg-brio-blue-dark hover:text-white transition-colors duration-300"
                            >
                              Vezi mai mult
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ) : (
                  // your existing vertical card
                  <Card
                    key={index}
                    className="pt-0 group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col gap-0"
                  >
                    <div className="relative overflow-hidden rounded-t-xl h-48 md:h-56 lg:h-60 xl:h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={60}
                        sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                      />
                      <div className="absolute top-4 left-4 bg-brio-blue-dark text-white p-3 rounded-full">
                        <service.icon className="h-6 w-6 md:h-7 md:w-7" />
                      </div>
                    </div>

                    <CardHeader className="pt-4 pb-2">
                      <CardTitle className="text-lg md:text-xl text-gray-900">
                        {service.title}
                      </CardTitle>

                      <span className="text-sm py-1 text-brio-blue-dark">
                        {getPriceText(service)}
                      </span>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4 flex-1 flex flex-col">
                      <p className="text-gray-700 text-sm">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-brio-blue rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                      </ul>

                      <div className="mt-auto">
                        <Link href={service.href}>
                          <Button
                            variant="outline"
                            className="group w-full h-10 md:h-11 lg:h-12 text-sm md:text-base
                           group-hover:bg-brio-blue-dark group-hover:text-white
                           hover:bg-brio-blue-dark hover:text-white transition-colors duration-300 bg-transparent"
                          >
                            Vezi mai mult
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
