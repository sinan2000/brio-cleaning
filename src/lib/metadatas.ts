import type { Metadata } from "next";
import { services } from "./constants";
import { notFound } from "next/navigation";
import { serpTruncate, serviceMetaTitle } from "./meta-helpers";
import { slugFromHref } from "./helpers";
import { getMetadataImage } from "./meta-images";

const metadataBase = new URL("https://www.briocleaning.ro");

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
    url: url || "metadataBase",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: photo || "metadataBase/logo-og.png",
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
  authors: [{ name: "Brio Cleaning", url: "metadataBase" }],
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
    canonical: "metadataBase",
  },
};

export const servicesPageMeta: Metadata = {
  title: serpTruncate(
    "Servicii de curățare în Timișoara – canapele, saltele, auto | Brio Cleaning"
  ),
  description: serpTruncate(
    "Toate serviciile Brio Cleaning: curățare canapele, igienizare saltele, interior auto, mochetă, piele, HoReCa. Rezultate profesionale, programări rapide.",
    160
  ),
  openGraph: generateOG(
    serpTruncate(
      "Servicii de curățare în Timișoara – canapele, saltele, auto | Brio Cleaning"
    ),
    serpTruncate(
      "Toate serviciile Brio Cleaning: curățare canapele, igienizare saltele, interior auto, mochetă, piele, HoReCa. Rezultate profesionale, programări rapide.",
      160
    ),
    "metadataBase/servicii"
  ),
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

  return {
    title: serviceMetaTitle(serviceData.title, serviceData.seoKicker),
    description: serpTruncate(
      (typeof serviceData.longDescription === "string"
        ? serviceData.longDescription
        : serviceData.description) + " Programează-te acum la Brio Cleaning!",
      160
    ),
    openGraph: generateOG(
      serviceMetaTitle(serviceData.title, serviceData.seoKicker),
      serpTruncate(
        (typeof serviceData.longDescription === "string"
          ? serviceData.longDescription
          : serviceData.description) + " Programează-te acum la Brio Cleaning!",
        160
      ),
      `metadataBase/servicii/${slug}`,
      getMetadataImage(serviceData.media),
      serviceData.title
    ),
  };
}

export const notFoundMeta: Metadata = {
  title: "404 - Pagina nu a fost găsită | Brio Cleaning",
  description:
    "Pagina pe care o căutați nu a fost găsită. Vă rugăm să verificați URL-ul și să încercați din nou.",
  openGraph: generateOG(
    "404 - Pagina nu a fost găsită | Brio Cleaning",
    "Pagina pe care o căutați nu a fost găsită. Vă rugăm să verificați URL-ul și să încercați din nou."
  ),
  robots: {
    index: false,
    follow: false,
  },
};

export const contactPageMeta: Metadata = {};

export const cookiesPolicyMeta: Metadata = {};

export const termsMeta: Metadata = {};

export const confidentialityMeta: Metadata = {};

export const bookingMeta: Metadata = {};
