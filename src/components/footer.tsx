import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { menuItems, services, contact, socialLinks } from "@/lib/constants";
import anpcSal from "@/assets/anpc-sal.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { normPhone } from "@/lib/helpers";

export default function Footer() {
  const quickLinks = [
    ...menuItems,
    { name: "Programări", href: "/programari" },
  ];

  // Timisoara city link
  const addressHref = "https://maps.app.goo.gl/5ULUo2JFCpUDB6DC6";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 text-sm text-pretty">
              Curățenie profesională în Timișoara, sigură pentru oameni și
              mediu. Aducem prospețime și strălucire fiecărei suprafețe.
            </p>
            <div className="pt-1 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <Icon icon={s.icon} className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
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
              <a
                href={`tel:${normPhone()}`}
                className="group flex items-center gap-3"
                aria-label={`Sună ${contact.phone}`}
              >
                <Phone className="h-4 w-4 text-gray-300 group-hover:text-brio-blue transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-brio-blue transition-colors">
                  {contact.phone}
                </span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3"
                aria-label={`Trimite email la ${contact.email}`}
              >
                <Mail className="h-4 w-4 text-gray-300 group-hover:text-brio-blue transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-brio-blue transition-colors">
                  {contact.email}
                </span>
              </a>
              <a
                href={addressHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
                aria-label="Vezi harta unde livram serviciile, in Timisoara"
              >
                <MapPin className="h-4 w-4 mt-0.5 text-gray-300 group-hover:text-brio-blue transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-brio-blue transition-colors">
                  {contact.address}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          {/* Mobile: stacks in DOM order (©, links, ANPC)
       LG: 2 columns → © left (row1 col1), ANPC right (row1 col2), links under © (row2 col1) */}
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            {/* © text */}
            <p className="text-gray-400 text-sm text-center lg:text-left lg:row-start-1 lg:col-start-1">
              © {new Date().getFullYear()} BrioCleaning. Toate drepturile
              rezervate. Servicii de curățare profesionale în Timișoara
            </p>

            {/* Policy links (under © on large screens) */}
            <div className="flex items-center justify-center gap-3 text-sm lg:justify-start lg:row-start-2 lg:col-start-1">
              <Link
                href="/termeni"
                className="text-gray-300 underline hover:text-brio-blue transition-colors"
              >
                Termeni și condiții
              </Link>
              <span className="hidden sm:inline text-gray-600">•</span>
              <Link
                href="/politica-de-confidentialitate"
                className="text-gray-300 underline hover:text-brio-blue transition-colors"
              >
                Politica de confidențialitate
              </Link>
              <span className="hidden sm:inline text-gray-600">•</span>
              <Link
                href="/politica-cookies"
                className="text-gray-300 underline hover:text-brio-blue transition-colors"
              >
                Politica Cookies
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
