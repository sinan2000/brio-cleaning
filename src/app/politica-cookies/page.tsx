import { cookiesPolicyMeta } from "@/lib/metadatas";
import { todayRo } from "@/lib/todayRo";
import { Metadata } from "next";

export const metadata = cookiesPolicyMeta

export default function CookiesPolicyPage() {

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-4 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Politica de Cookie-uri
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Ultima actualizare: {todayRo}
        </p>

        <h2>1. Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău
          atunci când vizitezi un site. Ele permit funcționarea corectă a
          site-ului și ajută la înțelegerea modului în care este utilizat.
        </p>

        <h2>2. Ce cookie-uri folosim</h2>
        <p>Folosim două categorii principale:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Esențiale</strong> – necesare pentru funcționarea site-ului
            (ex. preferințe tehnice de sesiune).
          </li>
          <li>
            <strong>Analitice (Google Analytics)</strong> – pentru statistici
            anonimizate privind traficul și utilizarea site-ului.
          </li>
        </ul>
        <p>
          Folosim și <strong>Google Tag Manager (GTM)</strong> pentru a gestiona
          etichetele de pe site. GTM nu plasează cookie-uri de urmărire; el doar
          încarcă etichetele (de exemplu, Google Analytics) după ce îți exprimi
          consimțământul.
        </p>

        <h3>Google Analytics</h3>
        <p>
          Utilizăm Google Analytics cu IP anonimizat pentru a măsura vizitele și
          a îmbunătăți experiența utilizatorilor. Informațiile pot fi prelucrate
          de Google Ireland Limited și, în anumite condiții, transferate în
          afara SEE pe baza clauzelor contractuale standard.
        </p>

        <h2>3. Exemple de cookie-uri</h2>
        <h3 className="mt-4">Esențiale</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left border-b py-2">Nume</th>
              <th className="text-left border-b py-2">Scop</th>
              <th className="text-left border-b py-2">Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>brio_consent</code>
              </td>
              <td>Reține opțiunea ta (Accept/Refuz pentru analytics)</td>
              <td>12 luni</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-6">Analitice</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left border-b py-2">Nume</th>
              <th className="text-left border-b py-2">Scop</th>
              <th className="text-left border-b py-2">Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>_ga</code>
              </td>
              <td>Distinge utilizatorii (statistici agregate)</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>
                <code>_ga_XXXXX</code>
              </td>
              <td>Menține sesiunea/parametrii pentru proprietatea GA</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>
                <code>_gid</code>
              </td>
              <td>Distinge utilizatorii la nivel de sesiune</td>
              <td>24 de ore</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-muted-foreground">
          *Denumirile pot varia în funcție de configurația Google Analytics
          (GA4).
        </p>

        <h2>4. Consimțământ și administrarea cookie-urilor</h2>
        <ul className="list-disc pl-6">
          <li>
            Pentru cookie-urile analitice, solicităm consimțământul tău prin
            bannerul de pe site.
          </li>
          <li>
            În lipsa unei alegeri, <strong>nu încărcăm Google Analytics</strong>
            . Etichetele analitice sunt încărcate doar după ce apeși „Accept”.
            Dacă alegi „Refuz”, nu încărcăm Google Analytics.
          </li>
          <li>
            Îți poți modifica opțiunile oricând (de exemplu, din linkul „Schimbă
            preferințele cookie” din subsolul site-ului).
          </li>
          <li>
            Poți bloca sau șterge cookie-urile din setările browserului și poți
            folosi extensia oficială Google „Google Analytics Opt-out”.
          </li>
        </ul>

        <h2>5. Date personale și cookie-uri</h2>
        <p>
          Pentru detalii privind prelucrarea datelor personale, te rugăm să
          consulți{" "}
          <a href="/politica-confidentialitate" className="underline">
            Politica de confidențialitate
          </a>
          .
        </p>

        <h2>6. Actualizări</h2>
        <p>
          Putem actualiza această politică periodic; orice modificare va fi
          publicată pe această pagină.
        </p>
      </div>
    </main>
  );
}
