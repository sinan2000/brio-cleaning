import {
  WebSite,
  LocalBusiness,
  SiteNavigationElement,
  BreadcrumbList,
  WithContext,
  Service,
  ListItem,
  FAQPage,
  OfferCatalog,
  Offer,
} from "schema-dts";
import { contact, services, socialLinks } from "./constants";

type Crumb = { label: string; href?: string };

const ORIGIN = "https://www.briocleaning.ro";

const abs = (pathOrUrl: string) => {
  if (!pathOrUrl) return ORIGIN;
  return pathOrUrl.startsWith("http")
    ? pathOrUrl
    : `${ORIGIN}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

// simple slugify that removes diacritics, lowercases, and hyphenates
const slugify = (label: string) =>
  label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const offerCatalogSchema: WithContext<OfferCatalog> = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Servicii Brio Cleaning",
  itemListElement: services.map((s, i): ListItem => {
    // Build a Service with optional Offers (one per price line)
    const serviceWithOffers = {
      "@type": "Service",
      name: s.title,
      description: s.short ?? s.description,
      url: abs(s.href),
      serviceType: s.seoKicker,
      areaServed: { "@type": "City", name: "Timișoara" },
      provider: { "@type": "LocalBusiness", "@id": `${ORIGIN}#org` },
      ...(s.prices?.length
        ? {
            offers: s.prices.map(
              (p: any): Offer => ({
                "@type": "Offer",
                name: p.label,
                priceCurrency: "RON",
                price: typeof p.p === "number" ? p.p : undefined,
                url: abs(`${s.href}#preturi`),
                // If price per unit (e.g., /mp):
                ...(p.unit
                  ? {
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: typeof p.p === "number" ? p.p : undefined,
                        priceCurrency: "RON",
                        unitText: p.unit, // e.g. "mp"
                      },
                    }
                  : {}),
              })
            ),
          }
        : {}),
    };

    return {
      "@type": "ListItem",
      position: i + 1,
      item: serviceWithOffers as Service,
    };
  }),
};

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
  email: contact.email,
  priceRange: "lei",
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
  // Optional: add extra semantic hint about niche using productontology
  additionalType: "http://www.productontology.org/id/Carpet_cleaning",
  hasOfferCatalog: offerCatalogSchema,
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
  items: any[]
): WithContext<BreadcrumbList> => {
  const list: ListItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Acasă",
      item: ORIGIN,
    },
  ];

  if (!items || items.length < 2) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: list,
    };
  }

  if (items.length === 2) {
    // Only 2 crumbs -> use the 2nd label; URL = origin + /{slug(label)} (unless href exists)
    const second = items[1];
    const name2 = second.label;
    const path2 = second.href ?? `/${slugify(name2)}`;

    list.push({
      "@type": "ListItem",
      position: 2,
      name: name2,
      item: abs(path2),
    });
  } else {
    // 3 (or more) crumbs -> use first three
    const second = items[1];
    const third = items[2];

    // Position 2: label + provided href or slug fallback
    const path2 = second.href ?? `/${slugify(second.label)}`;

    // Position 3: try to resolve by service title; else provided href; else slug fallback
    let path3 = third.href;
    if (!path3) {
      const svc = services.find((s) => s.title === third.label);
      path3 = svc?.href ?? `/${slugify(third.label)}`;
    }

    list.push(
      {
        "@type": "ListItem",
        position: 2,
        name: second.label,
        item: abs(path2),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: third.label,
        item: abs(path3),
      }
    );
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  };
};

export const servicesSchema: WithContext<Service> = {
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
  hasOfferCatalog: offerCatalogSchema,
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
  faq: { q: string; a: string }[]
): WithContext<FAQPage> => {
  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return schema;
};
