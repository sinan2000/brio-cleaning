import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
