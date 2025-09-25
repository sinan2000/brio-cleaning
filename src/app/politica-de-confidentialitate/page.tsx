import { Metadata } from "next";
import ResetConsentLink from "./helper";
import { todayRo } from "@/lib/todayRo";
import { contact } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Brio Cleaning",
  description:
    "Află cum colectăm, folosim și protejăm datele tale personale la Brio Cleaning SRL.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-24 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl space-y-4 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Politica de Confidențialitate
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Ultima actualizare: {todayRo}
        </p>

        <h2>Cine suntem</h2>
        <p>
          Operator de date: <strong>Brio Cleaning SRL</strong> <br />
          Sediu social: Sat Pischia, 215 Cod 307325 <br />
          CUI: 52064082 <br />
          Nr. Reg. Com.: J2025047235004 <br />
          Email: {contact.email} <br />
          Telefon: {contact.phone}
        </p>

        <h2>Ce date colectăm</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Date introduse de tine în formularul de programare: nume, telefon,
            adresă, serviciul selectat, data și ora dorită, mesaj.
          </li>
          <li>
            Date tehnice prin cookie-uri și Google Analytics: adresa IP
            (anonimizată), tip browser, device, pagini vizitate.
          </li>
        </ul>

        <h2>Cum folosim aceste date</h2>
        <p>Folosim datele tale pentru:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>procesarea și confirmarea programărilor;</li>
          <li>contactarea ta pentru detalii suplimentare sau modificări;</li>
          <li>comunicare directă prin telefon / WhatsApp dacă este necesar;</li>
          <li>analiza traficului pe site (Google Analytics).</li>
        </ul>
        <p>
          <strong>Temeiuri legale GDPR:</strong> art. 6(1)(b) și art. 6(1)(f).
        </p>

        <h2>Cine are acces la date</h2>
        <p>
          Angajații Brio Cleaning SRL, furnizori de servicii IT/hosting, Google
          Ireland Limited (Google Analytics). Nu vindem și nu închiriem datele
          tale către terți.
        </p>

        <h2>Cât timp păstrăm datele</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Datele din formular: maxim 2 ani de la ultima interacțiune.</li>
          <li>Datele Analytics: conform setărilor Google (14 luni).</li>
        </ul>

        <h2>Drepturile tale</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>acces la datele tale;</li>
          <li>rectificare sau ștergere;</li>
          <li>restricționare sau opoziție la prelucrare;</li>
          <li>portabilitatea datelor;</li>
          <li>
            plângere la ANSPDCP (www.dataprotection.ro) dacă drepturile îți sunt
            încălcate.
          </li>
        </ul>

        <h2>Cookie-uri</h2>
        <p>
          Site-ul folosește cookie-uri pentru funcționalități esențiale și, doar
          după consimțământul tău, pentru Google Analytics. Poți modifica
          opțiunea oricând: <ResetConsentLink />.
        </p>

        <h2>Contact</h2>
        <p>
          Pentru orice întrebări legate de protecția datelor:
          <br />
          {contact.email} sau {contact.phone}
        </p>
      </div>
    </main>
  );
}
