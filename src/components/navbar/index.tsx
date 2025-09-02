"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import WhatsAppButton from "../WhatsApp";
import LogoAnimated from "../LogoAnimated";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brio-blue-dark underline underline-offset-4"
                    : "text-gray-700 hover:text-brio-blue"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA on desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* WhatsApp secondary CTA */}
          <Link
            href="https://wa.me/40732405829?text=Buna!%20As%20dori%20o%20programare%20pentru%20curatare."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scrie-ne pe WhatsApp"
            className="inline-flex"
          >
            <WhatsAppButton />
          </Link>

          <Link href="/programari">
            <Button className="bg-brio-blue-dark hover:bg-brio-blue text-white">
              <Calendar size={16} />
              Programează acum
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden z-100">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-brio-blue p-2"
            aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm md:hidden">
          <div className="pt-2 px-4 flex justify-center">
            <LogoAnimated key="logo-anim-open" />
          </div>
          {/* Menu content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-brio-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* (Optional) mobile CTAs inside overlay */}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="https://wa.me/40732405829?text=Buna!%20As%20dori%20o%20programare%20pentru%20curatare."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Scrie-ne pe WhatsApp"
                  className="inline-flex"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full border-brio-blue-dark text-brio-blue-dark hover:bg-brio-gray"
                  >
                    <WhatsAppButton />
                    WhatsApp
                  </Button>
                </Link>

                <Link href="/programari" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brio-blue-dark hover:bg-brio-blue text-white">
                    <Calendar size={16} />
                    Programează acum
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
