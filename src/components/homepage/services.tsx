import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, Car, Building2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Sofa,
      title: "Curățare Tapițerie",
      description:
        "Curățare profesională în profunzime pentru canapele, scaune, saltele și toate mobilierul din țesătură. Restaurăm prospețimea și extindem durata de viață a tapițeriei dumneavoastră.",
      features: [
        "Curățare profundă cu aburi",
        "Îndepărtarea petelor",
        "Protecția țesăturii",
        "Eliminarea mirosurilor",
      ],
      image: "/tapiterii.jpg",
    },
    {
      icon: Car,
      title: "Curățare Auto",
      description:
        "Servicii complete de detailing interior și exterior pentru automobile. De la scaune din piele la covoare, facem ca vehiculul dumneavoastră să arate și să se simtă ca nou.",
      features: [
        "Detalierea interiorului",
        "Tratamentul pielii",
        "Curățarea covoarelor",
        "Protecția vopselei",
      ],
      image: "auto.jpg",
    },
    {
      icon: Building2,
      title: "Servicii HoReCa",
      description:
        "Curățare specializată pentru hoteluri, restaurante și cafenele. Înțelegem standardele unice de igienă necesare în industria ospitalității.",
      features: [
        "Curățare de grad comercial",
        "Conformitate cu normele de sănătate",
        "Programare flexibilă",
        "Servicii de urgență",
      ],
      image: "/horeca.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Soluții complete de curățare adaptate nevoilor dumneavoastră specifice.
            Rezultate profesionale, de fiecare dată.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-brio-blue text-white p-3 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-brio-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brio-blue transition-colors duration-300 bg-transparent"
                >
                  Vezi mai mult
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
