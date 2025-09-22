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
    <section className="pt-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
        Prețuri
      </h2>

      {service.gratis && (
        <div className="mb-8 rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-5 md:p-6 shadow-sm">
          <h3 className="text-sm md:text-base font-semibold text-green-800 mb-3">
            Mereu inclus, fără cost suplimentar:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-green-700">
                Igienizare cu abur 150 °C
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-green-700">
                Sterilizare Ozon & UV-C
              </span>
            </li>
          </ul>
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
