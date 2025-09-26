import type { Metadata } from "next";
import { services } from "./constants";
import { notFound } from "next/navigation";
import { serpTruncate, serviceMetaTitle } from "./meta-helpers";
import { slugFromHref } from "./helpers";
import { getMetadataImage } from "./meta-images";

const metadataBase = new URL("https://www.briocleaning.ro");
const abs = (path: string) => new URL(path, metadataBase).href;

function generateOG(
  title: string,
  description: string,
  url?: string,
  photo?: string,
  alt?: string
) {
  return {
    siteName: "Brio Cleaning",
    title,
    description,
    url: url || metadataBase.href,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: photo || "/logo-og.jpg",
        alt: alt ? "Photo of " + alt : "Brio Cleaning Poster",
        width: 1200,
        height: 630,
      },
    ],
  };
}

export const rootMeta: Metadata = {
  metadataBase,
  keywords: [],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  authors: [{ name: "Brio Cleaning", url: metadataBase.href }],
  creator: "Brio Cleaning",
  publisher: "Brio Cleaning",
  applicationName: "Brio Cleaning",
  appleWebApp: {
    title: "Brio Cleaning",
    statusBarStyle: "default",
    capable: true,
  },
};

export const homePageMeta: Metadata = {
  title: serpTruncate(
    "Curățare canapele & igienizare saltele Timișoara | Brio Cleaning"
  ),
  description: serpTruncate(
    "Curățare canapele, igienizare saltele și interior auto în Timișoara. Abur 150 °C, soluții sigure, preț transparent. Programează online și redescoperă confortul.",
    160
  ),
  openGraph: generateOG(
    serpTruncate(
      "Curățare canapele & igienizare saltele Timișoara | Brio Cleaning"
    ),
    serpTruncate(
      "Curățare canapele, igienizare saltele și interior auto în Timișoara. Abur 150 °C, soluții sigure, preț transparent. Programează online și redescoperă confortul.",
      160
    )
  ),
  alternates: {
    canonical: metadataBase.href,
  },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate(
      "Curățare canapele & igienizare saltele Timișoara | Brio Cleaning"
    ),
    description: serpTruncate(
      "Curățare canapele, igienizare saltele și interior auto în Timișoara. Abur 150 °C, soluții sigure, preț transparent. Programează online și redescoperă confortul.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const servicesPageMeta: Metadata = {
  title: serpTruncate(
    "Servicii de curățare în Timișoara - canapele, saltele, auto | Brio Cleaning"
  ),
  description: serpTruncate(
    "Toate serviciile Brio Cleaning: curățare canapele, igienizare saltele, interior auto, mochetă, piele, HoReCa. Rezultate profesionale, programări rapide.",
    160
  ),
  openGraph: generateOG(
    serpTruncate(
      "Servicii de curățare în Timișoara - canapele, saltele, auto | Brio Cleaning"
    ),
    serpTruncate(
      "Toate serviciile Brio Cleaning: curățare canapele, igienizare saltele, interior auto, mochetă, piele, HoReCa. Rezultate profesionale, programări rapide.",
      160
    ),
    abs("/servicii")
  ),
  alternates: { canonical: abs("/servicii") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate(
      "Servicii de curățare în Timișoara - canapele, saltele, auto | Brio Cleaning"
    ),
    description: serpTruncate(
      "Toate serviciile Brio Cleaning: curățare canapele, igienizare saltele, interior auto, mochetă, piele, HoReCa. Rezultate profesionale, programări rapide.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export async function detailPageMeta({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const serviceData = services.find((s) => slugFromHref(s.href) === slug);

  if (!serviceData) {
    notFound();
  }

  const title = serviceMetaTitle(serviceData.title, serviceData.seoKicker);
  const description = serpTruncate(
    (typeof serviceData.longDescription === "string"
      ? serviceData.longDescription
      : serviceData.description) + " Programează-te acum la Brio Cleaning!",
    160
  );
  return {
    title,
    description,
    openGraph: generateOG(
      title,
      description,
      abs(`/servicii/${slug}`),
      getMetadataImage(serviceData.media),
      serviceData.title
    ),
    alternates: { canonical: abs(`/servicii/${slug}`) },
    twitter: {
      card: "summary_large_image",
      title: serpTruncate(title),
      description: serpTruncate(description, 160),
      images: [getMetadataImage(serviceData.media)],
    },
  };
}

export const notFoundMeta: Metadata = {
  title: "404 - Pagina nu a fost găsită | Brio Cleaning",
  description:
    "Pagina pe care o căutați nu a fost găsită. Vă rugăm să verificați URL-ul și să încercați din nou.",
  openGraph: generateOG(
    "404 - Pagina nu a fost găsită | Brio Cleaning",
    "Pagina pe care o căutați nu a fost găsită. Vă rugăm să verificați URL-ul și să încercați din nou.",
    abs("/404")
  ),
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: abs("/404") },
  twitter: {
    card: "summary_large_image",
    title: "404 - Pagina nu a fost găsită | Brio Cleaning",
    description: "Pagina pe care o căutați nu a fost găsită.",
    images: ["/logo-og.jpg"],
  },
};

export const contactPageMeta: Metadata = {
  title: serpTruncate("Contact Brio Cleaning Timișoara - programări & oferte"),
  description: serpTruncate(
    "Suntem aici pentru întrebări și oferte: telefon, WhatsApp și email. Servicii de curățare profesionale în Timișoara și împrejurimi.",
    160
  ),
  openGraph: generateOG(
    serpTruncate("Contact Brio Cleaning Timișoara - programări & oferte"),
    serpTruncate(
      "Suntem aici pentru întrebări și oferte: telefon, WhatsApp și email. Servicii de curățare profesionale în Timișoara și împrejurimi.",
      160
    ),
    abs("/contact")
  ),
  alternates: { canonical: abs("/contact") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate(
      "Contact Brio Cleaning Timișoara - programări & oferte"
    ),
    description: serpTruncate(
      "Suntem aici pentru întrebări și oferte: telefon, WhatsApp și email.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const cookiesPolicyMeta: Metadata = {
  title: serpTruncate("Politica de Cookie-uri | Brio Cleaning"),
  description: serpTruncate(
    "Ce cookie-uri folosim și cum îți poți gestiona preferințele. Consimțământ pentru analitice și modul de dezactivare.",
    160
  ),
  robots: { index: false, follow: true },
  openGraph: generateOG(
    serpTruncate("Politica de Cookie-uri | Brio Cleaning"),
    serpTruncate(
      "Ce cookie-uri folosim și cum îți poți gestiona preferințele. Consimțământ pentru analitice și modul de dezactivare.",
      160
    ),
    abs("/politica-cookies")
  ),
  alternates: { canonical: abs("/politica-cookies") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate("Politica de Cookie-uri | Brio Cleaning"),
    description: serpTruncate(
      "Ce cookie-uri folosim și cum îți poți gestiona preferințele.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const termsMeta: Metadata = {
  title: serpTruncate("Termeni și condiții | Brio Cleaning"),
  description: serpTruncate(
    "Condițiile de utilizare a site-ului și serviciilor Brio Cleaning. Informații despre programări, prețuri și responsabilități.",
    160
  ),
  openGraph: generateOG(
    serpTruncate("Termeni și condiții | Brio Cleaning"),
    serpTruncate(
      "Condițiile de utilizare a site-ului și serviciilor Brio Cleaning. Informații despre programări, prețuri și responsabilități.",
      160
    ),
    abs("/termeni")
  ),
  robots: { index: false, follow: true },
  alternates: { canonical: abs("/termeni") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate("Termeni și condiții | Brio Cleaning"),
    description: serpTruncate(
      "Condițiile de utilizare a site-ului și serviciilor Brio Cleaning.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const confidentialityMeta: Metadata = {
  title: serpTruncate("Politica de Confidențialitate | Brio Cleaning"),
  description: serpTruncate(
    "Află cum colectăm, folosim și protejăm datele tale personale. Drepturile tale și datele de contact.",
    160
  ),
  robots: { index: false, follow: true },
  openGraph: generateOG(
    serpTruncate("Politica de Confidențialitate | Brio Cleaning"),
    serpTruncate(
      "Află cum colectăm, folosim și protejăm datele tale personale. Drepturile tale și datele de contact.",
      160
    ),
    abs("/politica-de-confidentialitate")
  ),
  alternates: { canonical: abs("/politica-de-confidentialitate") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate("Politica de Confidențialitate | Brio Cleaning"),
    description: serpTruncate(
      "Află cum colectăm, folosim și protejăm datele tale personale.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const bookingMeta: Metadata = {
  title: serpTruncate("Programări curățare în Timișoara | Brio Cleaning"),
  description: serpTruncate(
    "Rezervă online curățare canapele, igienizare saltele, interior auto sau mochetă în Timișoara. Confirmare rapidă și prețuri clare.",
    160
  ),
  openGraph: generateOG(
    serpTruncate("Programări curățare în Timișoara | Brio Cleaning"),
    serpTruncate(
      "Rezervă online curățare canapele, igienizare saltele, interior auto sau mochetă în Timișoara. Confirmare rapidă și prețuri clare.",
      160
    ),
    abs("/programari")
  ),
  alternates: { canonical: abs("/programari") },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate("Programări curățare în Timișoara | Brio Cleaning"),
    description: serpTruncate(
      "Rezervă online curățare canapele, igienizare saltele, interior auto sau mochetă.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};

export const successMeta: Metadata = {
  title: serpTruncate("Programare trimisă – îți mulțumim! | Brio Cleaning"),
  description: serpTruncate(
    "Cererea ta de programare a fost trimisă. Îți confirmăm telefonic sau pe WhatsApp în cel mai scurt timp.",
    160
  ),
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.briocleaning.ro/programari/succes",
  },
  openGraph: {
    siteName: "Brio Cleaning",
    title: serpTruncate("Programare trimisă – îți mulțumim! | Brio Cleaning"),
    description: serpTruncate(
      "Cererea ta de programare a fost trimisă. Îți confirmăm telefonic sau pe WhatsApp în cel mai scurt timp.",
      160
    ),
    url: "https://www.briocleaning.ro/programari/succes",
    type: "website",
    locale: "ro_RO",
    images: [
      {
        url: "/logo-og.jpg", // relative ok if metadataBase is set globally
        width: 1200,
        height: 630,
        alt: "Brio Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: serpTruncate("Programare trimisă – îți mulțumim! | Brio Cleaning"),
    description: serpTruncate(
      "Cererea ta de programare a fost trimisă. Îți confirmăm telefonic sau pe WhatsApp în cel mai scurt timp.",
      160
    ),
    images: ["/logo-og.jpg"],
  },
};
