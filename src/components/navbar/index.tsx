"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import WhatsAppButton from "../WhatsApp";
import { menuItems } from "@/lib/constants";
import MobileOverlay from "./Mobile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            const isActive = pathname === '/servicii/horeca' || pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 text-sm lg:text-base xl:text-lg font-medium transition-colors ${
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
          <WhatsAppButton />

          <Link href="/programari">
            <Button className="bg-brio-orange/90 hover:bg-brio-orange text-white">
              <Calendar size={16} />
              Programează acum
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden z-[100]">
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
        <MobileOverlay setIsMenuOpen={setIsMenuOpen} />
      )}
    </nav>
  );
}
