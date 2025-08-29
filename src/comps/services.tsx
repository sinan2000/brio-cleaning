import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, Car, Building2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Sofa,
      title: "Upholstery Cleaning",
      description:
        "Professional deep cleaning for sofas, chairs, mattresses, and all fabric furniture. We restore freshness and extend the life of your upholstery.",
      features: [
        "Deep steam cleaning",
        "Stain removal",
        "Fabric protection",
        "Odor elimination",
      ],
      image: "/tapiterii.jpg",
    },
    {
      icon: Car,
      title: "Automotive Cleaning",
      description:
        "Complete interior and exterior car detailing services. From leather seats to carpets, we make your vehicle look and feel like new.",
      features: [
        "Interior detailing",
        "Leather treatment",
        "Carpet cleaning",
        "Paint protection",
      ],
      image: "auto.jpg",
    },
    {
      icon: Building2,
      title: "HoReCa Services",
      description:
        "Specialized cleaning for hotels, restaurants, and cafes. We understand the unique hygiene standards required in the hospitality industry.",
      features: [
        "Commercial grade cleaning",
        "Health compliance",
        "Flexible scheduling",
        "Emergency services",
      ],
      image: "/horeca.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Comprehensive cleaning solutions tailored to your specific needs.
            Professional results, every time.
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
                  className="w-full group-hover:bg-brio-blue group-hover:text-white transition-colors duration-300 bg-transparent"
                >
                  See More
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
