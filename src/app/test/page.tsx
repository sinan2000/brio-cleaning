import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Home, Search, Phone, ArrowLeft } from "lucide-react";
import { contact } from "@/lib/constants";
import { notFoundMeta } from "@/lib/metadatas";
import { normPhone } from "@/lib/helpers";

export const metadata = notFoundMeta;

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-brio-gray)] to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <ScrollReveal delay={200}>
          <div className="relative">
            <h1 className="text-9xl font-bold text-[var(--color-brio-blue)]/20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-[var(--color-brio-blue)] rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <ScrollReveal delay={400}>
          <Card className="border-[var(--color-brio-blue)]/20 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[var(--color-brio-blue-dark)]">
                  Ups! Pagina nu a fost găsită
                </h2>
                <p className="text-lg text-[var(--color-brio-blue-dark)]/70 leading-relaxed">
                  Se pare că această pagină a fost „ștearsă” prea bine. Nu-ți face griji, se mai întâmplă și în cele mai curate case!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[var(--color-brio-blue-dark)]/90 hover:bg-[var(--color-brio-blue-dark)] text-white"
                >
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Înapoi la pagina principală
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--color-brio-blue)] text-white hover:text-white bg-brio-blue/90 hover:bg-[var(--color-brio-blue)]"
                >
                  <Link href="/services">Vezi Serviciile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Footer Message */}
        <ScrollReveal delay={600}>
          <p className="text-sm text-[var(--color-brio-blue-dark)]/50">
            Ai nevoie de ajutor imediat? Sună-ne la{" "}
            <a href={`tel:${normPhone()}`} className="font-semibold text-[var(--color-brio-blue)]">
              {contact.phone}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
