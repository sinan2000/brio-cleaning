// app/programari/succes/page.tsx
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, slugFromHref } from "@/lib/constants";

type PageProps = {
  searchParams: Promise<Record<string, string | undefined>>;
};

function formatDMY(iso?: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

export default async function SuccessPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const slug = sp.s ?? "";
  const dateIso = sp.d; // YYYY-MM-DD
  const time = sp.t ?? "";
  const firstName = sp.n ?? "Mulțumim";

  const svc = services.find((x) => slugFromHref(x.href) === slug);

  // Optional: guard if someone visits directly
  const hasCore = slug && dateIso && time;

  const waMsg =
    `Bună! Confirm programarea pentru ${svc?.title ?? "serviciu"} ` +
    `pe ${formatDMY(dateIso)} (${time}).`;
  const waHref = `https://wa.me/40123456789?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {firstName}, cererea ta a fost trimisă!
          </h1>

          {hasCore ? (
            <p className="text-gray-600 mb-6">
              {svc?.title ?? "Serviciu"} – {formatDMY(dateIso)} • {time}
            </p>
          ) : (
            <p className="text-gray-600 mb-6">
              Îți mulțumim! Te contactăm în scurt timp pentru confirmare.
            </p>
          )}

          <div className="space-y-3">
            <Button asChild className="w-full">
              <a href="/">Înapoi la pagina principală</a>
            </Button>
            <Button variant="outline" asChild className="w-full bg-transparent">
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Scrie pe WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
