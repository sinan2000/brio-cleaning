import Link from "next/link";
import LogoAnimated from "../Logo/Animated";
import { menuItems } from "@/lib/constants";
import { Button } from "../ui/button";
import WhatsAppButton from "../WhatsApp";
import { Calendar } from "lucide-react";

export default function MobileOverlay({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  return (
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
            <WhatsAppButton />

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
  );
}
