import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookie-uri | BRIO CLEANING",
  description:
    "Află ce cookie-uri folosim pe site-ul BRIO CLEANING SRL și cum îți poți gestiona preferințele.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-4 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Politica de Cookie-uri
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Ultima actualizare: 22 Septembrie 2025
        </p>

        <h2>1. Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău
          atunci când vizitezi un site. Ele permit funcționarea corectă a
          site-ului și ajută la înțelegerea modului în care este utilizat.
        </p>

        <h2>2. Ce cookie-uri folosim</h2>
        <p>Folosim două categorii principale:</p>
        <ul>
          <li>
            <strong>Esențiale</strong> – necesare pentru funcționarea site-ului
            (ex. preferințe tehnice de sesiune).
          </li>
          <li>
            <strong>Analitice (Google Analytics)</strong> – pentru statistici
            anonimizate privind traficul și utilizarea site-ului.
          </li>
        </ul>

        <h3>Google Analytics</h3>
        <p>
          Utilizăm Google Analytics cu IP anonimizat pentru a măsura vizitele și
          a îmbunătăți experiența utilizatorilor. Informațiile pot fi prelucrate
          de Google Ireland Limited și, în anumite condiții, transferate în
          afara SEE pe baza clauzelor contractuale standard.
        </p>

        <h2>3. Exemple de cookie-uri analitice</h2>
        <table>
          <thead>
            <tr>
              <th>Nume</th>
              <th>Scop</th>
              <th>Durată</th>
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
        <ul>
          <li>
            Pentru cookie-urile analitice, solicităm consimțământul tău prin
            bannerul de pe site. Îți poți modifica opțiunile oricând.
          </li>
          <li>Poți bloca sau șterge cookie-urile din setările browserului.</li>
          <li>
            Poți folosi și extensia oficială Google pentru opt-out: „Google
            Analytics Opt-out”.
          </li>
        </ul>

        <h2>5. Date personale și cookie-uri</h2>
        <p>
          Pentru detalii privind prelucrarea datelor personale, te rugăm să
          consulți{" "}
          <a href="/politica-confidentialitate">
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
