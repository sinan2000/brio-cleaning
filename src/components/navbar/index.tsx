"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Contact", href: "/#contact" },
    { name: "Programări", href: "/#programari", icon: Calendar },
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
                {item.icon && <item.icon size={16} />}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA on desktop */}
        <div className="hidden md:block">
          <Link href="/#programari">
            <Button className="bg-brio-blue hover:bg-brio-blue-dark text-white">
              Rezervă acum
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-brio-blue p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 bg-white border-t border-gray-200 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brio-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
