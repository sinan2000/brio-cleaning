import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { services } from "@/lib/constants";

function slugFromHref(href: string) {
  return href.split("/").filter(Boolean).pop() ?? "";
}

type Args = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;
  console.log(slug);
  const service = services.find((s) => slugFromHref(s.href) === slug);
  if (!service) return notFound();

  const media = (service.media ?? []).slice(0, 4); // first 4 images only

  return (
    <div className="min-h-screen bg-background">
      {/* HERO — under sticky navbar */}
      <section className="relative h-[70vh] pt-20 md:pt-24 lg:pt-28 flex items-center justify-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-pretty opacity-90">
              {service.description}
            </p>
            <Link href="/programari">
              <Button
                size="lg"
                className="bg-brio-blue hover:bg-brio-blue-dark text-white px-8 py-3"
              >
                Programează-te acum
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* MOSAIC (left) + LONG DESCRIPTION (right) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Mosaic – half screen */}
            <ScrollReveal>
              <div className="grid grid-cols-2 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] gap-3 rounded-2xl overflow-hidden">
                {media.map((img, i) => (
                  <div
                    key={i}
                    className={[
                      "relative rounded-lg overflow-hidden bg-muted",
                      i === 0 ? "row-span-2" : "",
                      i === 3 ? "row-span-2" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={img}
                      alt={`${service.title} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Text + features – other half */}
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Despre serviciu
                </h2>
                {service.longDescription && (
                  <div className="prose prose-neutral max-w-none text-muted-foreground">
                    {/* If longDescription is plain text, just render it; if it's HTML/MD, parse accordingly */}
                    <p className="text-base md:text-lg leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>
                )}

                {/* Features */}
                {service.features?.length ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                    {service.features.map((f: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-brio-blue flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm md:text-base">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* CTA */}
                <div className="pt-2">
                  <Link href="/programari">
                    <Button className="bg-brio-blue hover:bg-brio-blue-dark text-white">
                      Rezervă acum
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ from service.faqs */}
      {service.faqs?.length ? (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
                Întrebări frecvente
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map(
                  (faq: { q: string; a: string }, i: number) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4 text-foreground text-balance">
              Pregătit să îți cureți tapițeria?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Programează o evaluare gratuită și redescoperă confortul casei
              tale.
            </p>
            <Link href="/programari">
              <Button
                size="lg"
                className="bg-brio-blue hover:bg-brio-blue-dark text-white px-8 py-3"
              >
                Fă o programare
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

