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
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/constants";
import { slugFromHref } from "@/lib/helpers";
import Breadcrumbs from "@/components/breadcrumbs";
import PriceDisplay from "@/components/price-display";
import Mosaic from "@/components/mosaic";
import { detailPageMeta } from "@/lib/metadatas";

type Args = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params: paramsPromise }: Args) {
  return detailPageMeta({ params: paramsPromise });
}

export default async function ServicePage({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;

  const service = services.find((s) => slugFromHref(s.href) === slug);
  if (!service) return notFound();

  const media = (service.media ?? []).slice(0, 4); // first 4 images only

  return (
    <div className="min-h-screen bg-background">
      {/* HERO — under sticky navbar */}
      <section className="relative h-[60vh] pt-20 md:pt-24 lg:pt-28 flex items-center justify-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          placeholder="blur"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-pretty opacity-90">
              {service.description}
            </p>
            <Link href={`/programari?s=${slug}`}>
              <Button
                size="lg"
                className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white px-8 py-3"
              >
                Programează-te acum
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-background/90 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Servicii", href: "/servicii" },
              { label: service.title },
            ]}
            className="py-3 text-sm sm:text-base"
          />
        </div>
      </section>

      {/* MOSAIC (left) + LONG DESCRIPTION (right) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text first on mobile, mosaic second; reverse on desktop */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* TEXT COLUMN */}
            <Reveal>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Despre serviciu
                </h2>
                {typeof service.longDescription === "string" ? (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {service.longDescription}
                  </p>
                ) : (
                  <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {service.longDescription /* JSX fragment from HoReCa */}
                  </div>
                )}

                {/* Știați că? */}
                {Array.isArray((service as any).didYouKnowList) ? (
                  <aside className="rounded-xl border border-brio-green/30 bg-brio-green/5 p-4">
                    <div className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mt-0.5 shrink-0 text-brio-green"
                        aria-hidden
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          className="fill-current/10"
                        />
                        <path
                          d="M12 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-1.1 2.2a1.1 1.1 0 0 1 2.2 0v6.1h-2.2v-6.1Z"
                          className="fill-current"
                        />
                      </svg>
                      <div>
                        <p className="text-xs sm:text-sm md:text-base text-foreground font-semibold">
                          Știați că?
                        </p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-xs sm:text-sm md:text-base text-foreground">
                          {(service as any).didYouKnowList.map(
                            (item: string, i: number) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </aside>
                ) : service.fact ? (
                  <aside className="rounded-xl border border-brio-green/30 bg-brio-green/5 p-4 flex gap-3 items-start">
                    {/* existing single-fact icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mt-0.5 shrink-0 text-brio-green"
                      aria-hidden
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-current/10"
                      />
                      <path
                        d="M12 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-1.1 2.2a1.1 1.1 0 0 1 2.2 0v6.1h-2.2v-6.1Z"
                        className="fill-current"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm md:text-base text-foreground">
                      <span className="font-semibold">Știați că? </span>
                      {service.fact}
                    </p>
                  </aside>
                ) : null}

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                  {" "}
                  {service.features.map((f: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      {" "}
                      <Check className="w-5 h-5 text-brio-blue flex-shrink-0" />{" "}
                      <span className="text-foreground font-medium text-sm sm:text-[15px] md:text-base">
                        {" "}
                        {f}{" "}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>
              </div>
            </Reveal>

            {/* MOSAIC COLUMN */}
            <Reveal>
              <div className="order-2 lg:order-1">
                <Mosaic
                  media={service.media}
                  orientation={service.orientation ?? ([] as any)}
                />
              </div>
            </Reveal>
          </div>

          <hr className="my-12 border-t border-gray-200" />

          <PriceDisplay service={service} />
        </div>
      </section>

      {/* FAQ from service.faqs */}
      {service.faqs?.length ? (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
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
                      <AccordionContent className="text-gray-800 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground text-balance">
              Pregătit să îți cureți tapițeria?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 text-balance">
              Programează o evaluare gratuită și redescoperă confortul casei
              tale.
            </p>
            <Link href={`/programari?s=${slug}`}>
              <Button
                size="lg"
                className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white px-8 py-3"
              >
                Fă o programare
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: slugFromHref(s.href) }));
}
