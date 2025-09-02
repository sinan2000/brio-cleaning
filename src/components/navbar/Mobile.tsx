import Link from "next/link";
import Image from "next/image";
import LogoAnimated from "../Logo/Animated";
import { menuItems } from "@/lib/constants";
import { Button } from "../ui/button";
import WhatsAppButton from "../WhatsApp";
import { Calendar } from "lucide-react";
import background from "@/assets/mobilemenu.jpg";

export default function MobileOverlay({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="inset-0 z-[60] md:hidden fixed bg-white/95 backdrop-blur-sm flex flex-col">
      <Image
        src={background}
        alt="Background Image"
        fill
        className="object-cover opacity-20 -z-10 pointer-events-none select-none"
      />

      <div className="h-16 border-b border-gray-200 flex items-center justify-center px-4">
        <LogoAnimated className="h-10" />
      </div>

      {/* Menu content */}
      <div className="flex-1 overflow-y-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <nav className="flex flex-col items-center text-center space-y-2">
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

          {/* Mobile CTAs */}
          <div className="mt-4 flex flex-col items-center gap-3 w-full">
            <WhatsAppButton />
            <Link href="/programari" onClick={() => setIsMenuOpen(false)} className="w-full">
              <Button className="w-full bg-brio-blue-dark hover:bg-brio-blue text-white">
                <Calendar size={16} />
                Programează acum
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* 4) Bottom footer with year + policy links */}
      <div className="shrink-0 border-t border-gray-200 bg-white/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
            <span>© 2025 Brio Cleaning. Toate drepturile rezervate.</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-3">
              <Link
                href="/politica-de-confidentialitate"
                className="underline hover:text-brio-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Politica de confidențialitate
              </Link>
              <span className="sm:hidden">•</span>
              <Link
                href="/termeni-si-conditii"
                className="underline hover:text-brio-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}