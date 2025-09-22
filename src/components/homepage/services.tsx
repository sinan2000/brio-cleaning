import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-brio-gray">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Soluții complete de curățare adaptate nevoilor dumneavoastră
            specifice. Rezultate profesionale, de fiecare dată.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="pt-0 group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col gap-0"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="block w-full h-48 md:h-56 lg:h-60 xl:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-brio-blue-dark text-white p-3 rounded-full">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>

              <CardHeader className="pt-4 pb-2">
                {/* Card title: step up on md */}
                <CardTitle className="text-lg md:text-xl lg:text-2xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 space-y-4 flex-1 flex flex-col">
                {/* Description: keep readable */}
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm md:text-base text-gray-700"
                    >
                      <div className="w-2 h-2 bg-brio-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href={service.href}>
                    {/* Button: solid hover, better tap targets */}
                    <Button
                      variant="outline"
                      className="group w-full h-10 md:h-11 lg:h-12 text-sm md:text-base group-hover:bg-brio-blue group-hover:text-white hover:bg-brio-blue-dark hover:text-white transition-colors duration-300 bg-transparent"
                    >
                      Vezi mai mult
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
