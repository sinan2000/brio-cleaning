import Link from "next/link";
import { Button } from "./ui/button";
import { slugFromHref } from "@/lib/helpers";
import { Check } from "lucide-react";

export default function PriceDisplay({ service }: { service: any }) {
  const prices = service.prices ?? [];
  const addons = service.extensie ?? [];
  const hasAnyPrices = prices.length > 0;

  // ADD: centralize how we open WhatsApp
  const getWhatsAppHref = () => {
    // Prefer explicit phone on the service if you have it, else fall back to env, else a query with service title
    const phone =
      service.whatsappPhone ||
      process.env.NEXT_PUBLIC_WHATSAPP_PHONE || // e.g. "0040740123456"
      "";
    const base = phone
      ? `https://wa.me/${phone.replace(/\D/g, "")}`
      : `https://wa.me/?text=Salut!%20Aș%20dori%20o%20ofertă%20pentru%20${encodeURIComponent(
          service.title || "serviciu"
        )}`;
    const text =
      `Salut! Aș dori o ofertă pentru ${service.title || "serviciu"} – ` +
      `${service.href ? slugFromHref(service.href) : ""}.`;
    return `${base}${base.includes("?") ? "&" : "?"}text=${encodeURIComponent(
      text
    )}`;
  };

  const formatPrice = (i: { p: number | string; unit?: string }) =>
    `${i.p} lei${i.unit ? `/${i.unit}` : ""}`;

  return (
    <section className="mt-12 pt-10 border-t border-border/60">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
        Prețuri
      </h2>

      {service.gratis && (
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black">
            <div className="inline-flex items-center gap-2">
              <p>La orice pachet achiziționat, aveți parte de</p>
              <b>igienizare cu abur 150 °C</b>
              <p>și</p>
              <b>sterilizare Ozon &amp; UV-C</b>
              <p>în mod gratuit.</p>
            </div>
          </div>
        </div>
      )}

      {/* If no structured prices, show note / CTA */}
      {!hasAnyPrices ? (
        <div className="rounded-xl border bg-muted/40 p-5 md:p-6">
          <p className="text-sm md:text-base">
            {service.note ??
              "Ofertă personalizată în funcție de suprafață și specificul lucrării."}
          </p>

          {/* Simple benefits line (optional) */}
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brio-green" />
              Estimare rapidă după o scurtă evaluare
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brio-green" />
              Programare la ore convenabile
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#1ebe57] text-white">
                WhatsApp — Cere ofertă
              </Button>
            </Link>

            <Link href={`/programari?s=${slugFromHref(service.href)}`}>
              <Button variant="outline">Completează formular</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl border overflow-hidden">
              <div className="border-b bg-muted/40 px-4 py-3">
                <h3 className="font-semibold">Pachete</h3>
              </div>
              <ul className="divide-y">
                {prices.map((item: any, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between gap-4 px-4 py-3"
                  >
                    <span className="text-sm md:text-base text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm md:text-base font-semibold text-foreground">
                      {formatPrice(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* tiny trust microcopy */}
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm md:text-base text-foreground">
                <span className="mr-2">💚</span>
                <span className="font-semibold">Promisiunea Brio Cleaning</span>
              </p>
              <p className="mt-1 text-sm md:text-base text-foreground/90">
                Știm cât de neplăcut e să descoperi taxe ascunse. De aceea, la
                noi plătești exact prețul afișat, indiferent de gradul de
                murdărie. Cu noi, surprizele apar doar în rezultat – o curățenie
                impecabilă!
              </p>
            </div>
          </div>

          {/* ADD-ONS */}
          {addons.length > 0 && (
            <div className="lg:col-span-1">
              <div className="rounded-xl border overflow-hidden">
                <div className="border-b bg-muted/40 px-4 py-3">
                  <h3 className="font-semibold">Extensii</h3>
                </div>
                <ul className="divide-y">
                  {addons.map((item: any, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-4 px-4 py-3"
                    >
                      <span className="text-sm md:text-base text-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm md:text-base font-medium text-foreground">
                        + {formatPrice(item)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="px-4 py-2 text-xs text-muted-foreground">
                  Extensiile se adaugă la prețul pachetului ales.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CTA under pricing */}
      {!service.media ? (
        <div className="mt-6">
          <Link href={`/programari?s=${slugFromHref(service.href)}`}>
            <Button className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white">
              Programează-te
            </Button>
          </Link>
        </div>
      ) : null}
    </section>
  );
}
