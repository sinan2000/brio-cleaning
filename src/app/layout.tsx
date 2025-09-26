import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SNSFooter from "@/components/sns/footer-client";
import { GoogleTagManager } from "@next/third-parties/google";
import GTMWithConsent from "@/components/privacy/GTMWithConsent";
import CookieConsent from "@/components/privacy/CookieConsent";
import { rootMeta } from "@/lib/metadatas";
import { businessSchema, navSchema, webSiteSchema } from "@/lib/jsonLd";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = rootMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        <script
          id="nav-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />

        <Navbar />
        <GTMWithConsent gtmId="GTM-MNK9QBS2" />
        {children}
        <Footer />
        <SNSFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
