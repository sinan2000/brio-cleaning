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
