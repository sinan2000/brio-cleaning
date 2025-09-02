import Link from "next/link";
import Image from "next/image";
import LogoAnimated from "../Logo/Animated";
import { menuItems } from "@/lib/constants";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import WhatsAppButton from "../WhatsApp";
import { Calendar } from "lucide-react";
import background from "@/assets/mobilemenu.jpg";

const listStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MobileOverlay({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] md:hidden bg-white/90 backdrop-blur-sm flex flex-col min-h-dvh"
    >
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
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-center">
        <motion.nav
          className="w-full flex flex-col items-center text-center"
          variants={listStagger}
          initial="hidden"
          animate="show"
        >
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={fadeUp as any} className="w-full">
              <Link
                href={item.href}
                className="block px-3 py-3 text-xl font-medium text-gray-800 hover:text-brio-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="h-[2px] w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-brio-blue-dark to-transparent"
            initial={{ scaleX: 0, opacity: 0.6, transformOrigin: "center" }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Mobile CTAs */}
          <div className="mt-4 flex flex-col items-center gap-3 w-full">
            <WhatsAppButton />

            <Link
              href="/programari"
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full bg-brio-blue-dark hover:bg-brio-blue text-white">
                <Calendar size={16} />
                Programează acum
              </Button>
            </Link>
          </div>
        </motion.nav>
      </div>

      {/* 4) Bottom footer with year + policy links */}
      <div className="shrink-0 border-t border-gray-200 bg-white/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
            <span>
              © {new Date().getFullYear()} Brio Cleaning. Toate drepturile
              rezervate.
            </span>
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
    </motion.div>
  );
}
