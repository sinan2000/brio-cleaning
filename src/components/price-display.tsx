import Link from "next/link";
import { Button } from "./ui/button";
import { normPhone, slugFromHref } from "@/lib/helpers";
import { Check } from "lucide-react";

export default function PriceDisplay({ service }: { service: any }) {
  const prices = service.prices ?? [];
  const addons = service.extensie ?? [];
  const hasAnyPrices = prices.length > 0;

  const getWhatsAppHref = () => {
    const base = `https://wa.me/${normPhone()}?text=salut!%20aș%20dori%20o%20ofertă%20pentru%20${encodeURIComponent(
      (service.title || "serviciu").toLowerCase()
    )}`;
    return base;
  };

  const formatPrice = (i: { p: number | string; unit?: string }) =>
    `${i.p} lei${i.unit ? `/${i.unit}` : ""}`;

  return (
    <section className="mt-12 pt-10 border-t border-border/60">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
        Prețuri
      </h2>

      {service.gratis && (
        <p className="mb-6 text-sm md:text-base text-black leading-relaxed">
          La orice pachet achiziționat, aveți parte de{" "}
          <strong className="font-semibold">
            igienizare cu abur 150&nbsp;°C
          </strong>{" "}
          și{" "}
          <strong className="font-semibold">sterilizare Ozon &amp; UV-C</strong>{" "}
          în mod gratuit.
        </p>
      )}

      {hasAnyPrices && (
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#1ebe57] text-white">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="#ffffff"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Button>
          </Link>

          <Link href={`/programari?s=${slugFromHref(service.href)}`}>
            <Button
              variant="outline"
              className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white hover:text-white"
            >
              Programează-te
            </Button>
          </Link>
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
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#ffffff"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </Button>
            </Link>

            <Link href={`/programari?s=${slugFromHref(service.href)}`}>
              <Button
                variant="outline"
                className="bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white hover:text-white"
              >
                Programează-te
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
