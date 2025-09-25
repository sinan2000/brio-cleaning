import { contact } from "@/lib/constants";
import { todayRo } from "@/lib/todayRo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții | BRIO CLEANING",
  description:
    "Termenii și condițiile pentru folosirea site-ului și programările la BRIO CLEANING SRL.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-4 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Termeni și Condiții
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Ultima actualizare: {todayRo}
        </p>

        <h2>1. Cine suntem</h2>
        <p>
          Site-ul aparține <strong>BRIO CLEANING SRL</strong> (denumită în
          continuare „BRIO CLEANING”). Acest document stabilește condițiile în
          care poți utiliza site-ul și serviciile noastre.
        </p>

        <h2>2. Serviciile noastre</h2>
        <p>
          Oferim servicii profesionale de curățare (ex. tapițerii, saltele,
          auto, HoReCa). Descrierile de pe site au caracter informativ; ne
          rezervăm dreptul de a actualiza conținutul și prețurile afișate.
        </p>

        <h2>3. Programări și confirmare</h2>
        <ul>
          <li>
            Programările se pot face prin site (formular), telefon sau WhatsApp.
          </li>
          <li>
            Programarea trimisă prin site reprezintă o <em>solicitare</em>; este
            considerată acceptată doar după confirmarea noastră
            (telefon/SMS/WhatsApp).
          </li>
          <li>
            Intervalele orare sunt orientative; pot apărea decalaje minime din
            motive logistice. Te anunțăm în prealabil dacă apar modificări.
          </li>
        </ul>

        <h2>4. Anulare și reprogramare</h2>
        <p>
          Înțelegem că pot interveni schimbări. Te rugăm să ne anunți cât mai
          devreme posibil pentru anulare sau reprogramare.
        </p>
        <ul>
          <li>
            Recomandat: anunț cu cel puțin <strong>24 de ore</strong>{" "}
            înainte.
          </li>
          <li>
            Pentru absență la programare (<em>no-show</em>) ne rezervăm dreptul
            de a refuza programări viitoare sau de a solicita o confirmare
            fermă.
          </li>
        </ul>

        <h2>5. Prețuri și plăți</h2>
        <ul>
          <li>
            Prețurile sunt exprimate în RON și includ manopera și materialele
            conform descrierilor de pe site, dacă nu se precizează altfel.
          </li>
          <li>
            Prețul final poate varia în funcție de suprafață, material, gradul
            de murdărie sau servicii suplimentare agreate la fața locului.
          </li>
          <li>
            Plata se face după prestarea serviciului (numerar/card/transfer —
            după caz).
          </li>
        </ul>

        <h2>6. Acces, condiții și responsabilități</h2>
        <ul>
          <li>
            Clientul asigură accesul la locație și condiții minime: curent
            electric, apă, spațiu de lucru, parcare rezonabilă (unde este
            cazul).
          </li>
          <li>
            Deși utilizăm echipamente și soluții profesionale, anumite pete
            foarte vechi sau decolorări pot fi imposibil de îndepărtat complet.
          </li>
          <li>
            Pentru materiale sensibile, efectuăm testări discrete; pot exista
            limitări ale intervenției pentru protejarea materialului.
          </li>
        </ul>

        <h2>7. Răspundere</h2>
        <p>
          BRIO CLEANING depune toate diligențele pentru o execuție
          profesionistă. Nu răspundem pentru disfuncționalități tehnice ale
          site-ului sau pentru informații furnizate greșit în formularul de
          programare de către client.
        </p>

        <h2>8. Reclamații și soluționarea disputelor</h2>
        <p>
          Pentru reclamații, ne poți contacta la datele din pagina de Contact.
          Poți apela și la:
        </p>
        <ul>
          <li>ANPC - Autoritatea Națională pentru Protecția Consumatorilor;</li>
          <li>
            Platforma SOL/ODR a Comisiei Europene (Soluționarea Online a
            Litigiilor).
          </li>
        </ul>

        <h2>9. Protecția datelor</h2>
        <p>
          Prelucrarea datelor personale se face conform{" "}
          <a href="/politica-confidentialitate">
            Politicii de confidențialitate
          </a>
          .
        </p>

        <h2>10. Modificări</h2>
        <p>
          Putem actualiza prezentele Termeni și Condiții; versiunea curentă este
          publicată pe această pagină, cu data ultimei actualizări.
        </p>

        <h2>11. Datele companiei</h2>
        <p>
          <strong>BRIO CLEANING SRL</strong> <br />
          Sediu: Sat Pischia, 215 Cod 307325 <br />
          CUI: 52064082 <br />
          Nr. Reg. Com.: J2025047235004 <br />
          Email: {contact.email} &nbsp;|&nbsp; Telefon: {contact.phone}
        </p>
      </div>
    </main>
  );
}
