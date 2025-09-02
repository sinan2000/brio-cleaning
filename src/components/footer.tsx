import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { menuItems, services, contact } from "@/lib/constants";
import anpcSal from "@/assets/anpc-sal.png";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    ...menuItems,
    { name: "Programări", href: "/programari" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 text-sm text-pretty">
              Servicii profesionale de curățare în Timișoara. Aducem strălucire
              fiecărei suprafețe cu produse ecologice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legături rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brio-blue transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-brio-blue transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Informații de contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brio-blue" />
                <span className="text-gray-300 text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brio-blue" />
                <span className="text-gray-300 text-sm">{contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brio-blue mt-0.5" />
                <span className="text-gray-300 text-sm">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

 <div className="border-t border-gray-800 mt-8 pt-6">
   {/* Mobile: stacks in DOM order (©, links, ANPC)
       LG: 2 columns → © left (row1 col1), ANPC right (row1 col2), links under © (row2 col1) */}
   <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
     {/* © text */}
     <p className="text-gray-400 text-sm text-center lg:text-left lg:row-start-1 lg:col-start-1">
       © {new Date().getFullYear()} BrioCleaning. Toate drepturile rezervate. Servicii de curățare profesionale în Timișoara
     </p>

     {/* Policy links (under © on large screens) */}
     <div className="flex items-center justify-center gap-3 text-sm lg:justify-start lg:row-start-2 lg:col-start-1">
       <Link href="/termeni-si-conditii" className="text-gray-300 underline hover:text-brio-blue transition-colors">
         Termeni și condiții
       </Link>
       <span className="hidden sm:inline text-gray-600">•</span>
       <Link href="/politica-de-confidentialitate" className="text-gray-300 underline hover:text-brio-blue transition-colors">
         Politica de confidențialitate
       </Link>
     </div>

     {/* ANPC at the end of the first row on large screens */}
     <a
       href="https://anpc.ro/"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex justify-self-center lg:justify-self-end lg:row-start-1 lg:col-start-2"
       aria-label="ANPC – Autoritatea Națională pentru Protecția Consumatorilor"
     >
       <Image
         src={anpcSal}
         alt="ANPC"
         className="h-10 w-auto opacity-90 hover:opacity-100 transition"
       />
     </a>
   </div>
 </div>
      </div>
    </footer>
  );
}
