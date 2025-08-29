import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/comps/footer";
import Navbar from "@/comps/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "BrioCleaning - Servicii profesionale de curățare în Timișoara",
  description:
    "Servicii profesionale de curățare a tapițeriei, auto și HoReCa în Timișoara. Aducem strălucire fiecărei suprafețe cu produse ecologice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
