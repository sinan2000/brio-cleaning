import {
  WebSite,
  LocalBusiness,
  SiteNavigationElement,
  BreadcrumbList,
  WithContext,
  Service,
  ListItem,
  FAQPage,
} from "schema-dts";
import { contact, services, socialLinks } from "./constants";

export const webSiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Brio Cleaning",
  url: "https://www.briocleaning.ro",
  description:
    "Curățare canapele, igienizare saltele și interior auto în Timișoara. Abur 150 °C, soluții sigure, preț transparent.",
  sameAs: socialLinks.map((s) => s.href),
};

export const businessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.briocleaning.ro#org",
  name: "Brio Cleaning",
  url: "https://www.briocleaning.ro",
  image: "https://www.briocleaning.ro/logo-jsonld.jpg",
  telephone: contact.phone,
  priceRange: "$",
  description:
    "Servicii profesionale de curățare și igienizare textile rezidențial & HoReCa în Timișoara și împrejurimi.",
  currenciesAccepted: "RON",
  paymentAccepted: "Cash",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Timișoara",
    addressRegion: "TM",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "36",
  },
  sameAs: socialLinks.map((s) => s.href),
  areaServed: [
    { "@type": "City", name: "Timișoara" },
    { "@type": "AdministrativeArea", name: "Timiș" },
  ],
  email: contact.email,
  // Optional: add extra semantic hint about niche using productontology
  additionalType: "http://www.productontology.org/id/Carpet_cleaning",
};

export const navSchema: WithContext<SiteNavigationElement> = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  description: "Principal navigation links",
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "Acasă",
      url: "https://www.briocleaning.ro",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Servicii",
      url: "https://www.briocleaning.ro/servicii",
      hasPart: services.map((s) => ({
        "@type": "SiteNavigationElement",
        name: s.title,
        url: `https://www.briocleaning.ro${s.href}`,
      })),
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contact",
      url: "https://www.briocleaning.ro/contact",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Programează acum",
      url: "https://www.briocleaning.ro/programari",
    },
  ],
};

export const generateBreadcrumbsSchema = (
  middle: string,
  service: any
): WithContext<BreadcrumbList> => {
  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "https://www.briocleaning.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: middle,
        item: "https://www.briocleaning.ro/servicii", // middle but to lowercase
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.briocleaning.ro${service.href}`,
      },
    ] as ListItem[],
  };

  return schema;
};

export const serviceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicii Brio Cleaning",
  description:
    "De la tapițerii și auto, până la HoReCa — oferim curățare profesională pentru orice nevoie.",
  url: "https://www.briocleaning.ro/servicii",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.briocleaning.ro",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Categorii de Servicii",
    itemListElement: [
      {
        "@type": "Service",
        name: "Remodelare Corporală",
        url: "https://www.slimandbeauty.ro/servicii/remodelare-corporala",
        description:
          "Tratamente non-invazive pentru remodelarea corporală și eliminarea celulitei.",
      },
      {
        "@type": "Service",
        name: "Dermato Cosmetică",
        url: "https://www.slimandbeauty.ro/servicii/dermato-cosmetica",
        description:
          "Tratamente avansate pentru îngrijirea pielii, corectarea imperfecțiunilor și îmbunătățirea aspectului tenului.",
      },
    ],
  },
};

export const generateServiceSchema = (service: any): WithContext<Service> => {
  const schema: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://www.briocleaning.ro${service.href}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.briocleaning.ro",
    },
    // serviceType: cat.category, what category to put for these service types?
    areaServed: {
      "@type": "Place",
      name: "Timișoara, Romania",
    },
  };

  if (service.prices && service.prices.length) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "RON",
      price: service.prices[0].p,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Brio Cleaning",
        url: "https://www.briocleaning.ro",
      },
    };
  }

  return schema;
};

export const generateFAQSchema = (
  faq: { question: string; answer: string }[]
): WithContext<FAQPage> => {
  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return schema;
};
