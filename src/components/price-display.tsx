import Link from "next/link";
import { Button } from "./ui/button";
import { slugFromHref } from "@/lib/helpers";
import { Check } from "lucide-react";

export default function PriceDisplay({ service }: { service: any }) {
  const prices = service.prices ?? [];

  const formatPrice = (i: { p: number | string; unit?: string }) =>
    `${i.p} lei${i.unit ? `/${i.unit}` : ""}`;

  const addons = service.extensie ?? [];

  const hasAnyPrices = prices.length > 0;

  return (
    <section className="mt-12 pt-10 border-t border-border/60">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
        Prețuri
      </h2>

      {service.gratis && (
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black">
            <div className="inline-flex items-center gap-2">
              <p>La orice pachet achiziționat, aveți parte de </p>
              <b>Igienizare cu abur 150 °C</b>
              <p>și</p>
              <b>Sterilizare Ozon &amp; UV-C</b>
              <p>în mod gratuit.</p>
            </div>
          </div>
        </div>
      )}

      {/* If no structured prices, show note / CTA */}
      {!hasAnyPrices ? (
        <div className="rounded-xl border bg-muted/40 p-5 md:p-6">
          <p className="text-sm md:text-base text-muted-foreground">
            {service.note ??
              "Ofertă personalizată în funcție de suprafață și specificul lucrării."}
          </p>
          <div className="mt-4">
            <Link href="/programari">
              <Button className="bg-brio-blue hover:bg-brio-blue-dark text-white">
                Cere ofertă
              </Button>
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
            <p className="mt-2 text-xs text-muted-foreground">
              Fără costuri ascunse. Prețurile includ manoperă și materiale.
            </p>
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
      <div className="mt-6">
        <Link href={`/programari?s=${slugFromHref(service.href)}`}>
          <Button className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white">
            Programează-te
          </Button>
        </Link>
      </div>
    </section>
  );
}
