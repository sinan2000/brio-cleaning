import {
  Sofa,
  Bed,
  Armchair,
  Layers,
  Car,
  Droplet,
  Building2,
  Shield,
  SprayCan,
} from "lucide-react";

import auto from "@/assets/servicii/auto.jpg";
import canapele from "@/assets/servicii/curatare-canapele.jpg";
import fotolii from "@/assets/servicii/curatare-fotolii-scaune.jpg";
import saltele from "@/assets/servicii/curatare-saltele.jpg";
import standard from "@/assets/lol.jpg";
import horeca from "@/assets/servicii/horeca.jpg";

import s1_a from "@/assets/servicii/canapele/img1.jpg";
import s1_b from "@/assets/servicii/canapele/img2.jpg";
import s1_c from "@/assets/servicii/canapele/img3.jpg";
import s1_d from "@/assets/servicii/canapele/img4.jpg";

import s2_a from "@/assets/servicii/saltele/img1.jpg";
import s2_b from "@/assets/servicii/saltele/img2.jpg";

import s3_a from "@/assets/servicii/fotolii/img1.jpg";
import s3_b from "@/assets/servicii/fotolii/img2.jpg";
import s3_c from "@/assets/servicii/fotolii/img3.jpg";
import s3_d from "@/assets/servicii/fotolii/img4.jpg";

import s4_a from "@/assets/servicii/horeca/img1.jpg";
import s4_b from "@/assets/servicii/horeca/img2.jpg";
import s4_c from "@/assets/servicii/horeca/img3.jpg";
import s4_d from "@/assets/servicii/horeca/img4.jpg";

import s5_a from "@/assets/servicii/auto/img1.jpg";
import s5_b from "@/assets/servicii/auto/img2.jpg";
import s5_c from "@/assets/servicii/auto/img3.jpg";
import s5_d from "@/assets/servicii/auto/img4.jpg";

export const menuItems = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: Sofa,
    title: "Curățare și igienizare canapele",
    short: "Curățenie în profunzime, relaxare deplină.",
    seoKicker: "pete & alergeni eliminați",
    description:
      "Redăm confortul și frumusețea canapelei tale printr-o curățare profesională în profunzime.",
    features: [
      "Aspirare cu Kirby - elimină praf, acarieni și alergeni",
      "Dezinfectare cu abur la 150 °C - igienizare totală și mirosuri neutralizate",
      "Soluții ecologice - sigure pentru familie și animale de companie",
      "Îndepărtarea petelor (cafea, suc, ulei, uzură)",
      "Clătire/neutralizare și periere pentru textură uniformă",
    ],
    image: canapele,
    href: "/servicii/curatare-canapele",
    didYouKnow:
      "O canapea poate ascunde milioane de acarieni și bacterii care afectează calitatea aerului din casă și sănătatea familiei. Cu aspirarea profesională și igienizarea cu abur, redăm prospețimea și protecția de care au nevoie cei dragi.",
    benefits: [
      "Redă aspectul și prospețimea canapelei",
      "Elimină petele și mirosurile persistente",
      "Îndepărtează acarienii și alergenii pentru un aer mai sănătos",
      "Prelungește durata de viață a materialului",
      "Siguranță pentru copii și animale de companie",
    ],
    longDescription:
      "Inspecție material și pete, aspirare HEPA, pretratare țintită, extracție cu apă caldă/abur la temperatură controlată, clătire/neutralizare, periere pentru uniformizare, aerare accelerată. La cerere: protecție hidrofobă.",
    faqs: [
      {
        q: "Cât durează intervenția?",
        a: "60-180 minute, în funcție de mărime și gradul de murdărie.",
      },
      {
        q: "În cât timp se usucă?",
        a: "4-6 ore cu ventilație normală (mai mult iarna/umiditate mare).",
      },
      {
        q: "Scoateți toate petele?",
        a: "Majoritatea; coloranții vechi/decolorările pot rămâne palide.",
      },
      {
        q: "Este sigur pentru materiale delicate?",
        a: "Da, ajustăm presiunea/temperatura și testăm pe zonă ascunsă.",
      },
    ],
    media: [s1_a, s1_b, s1_c, s1_d],
    orientation: ["portrait", "landscape", "portrait", "portrait"],
    highlights: [
      { icon: Shield, text: "Eco & sigur pentru copii/pets" },
      { icon: SprayCan, text: "Neutralizare mirosuri" },
    ],
    prices: [
      { label: "Canapea 2 locuri", p: 130 },
      { label: "Colțar 3 locuri", p: 175 },
      { label: "Colțar 4 locuri", p: 220 },
      { label: "Colțar 5 locuri", p: 260 },
      { label: "Colțar 6 locuri", p: 310 },
      { label: "Colțar 7 locuri", p: 410 },
      { label: "Colțar 8 locuri", p: 460 },
    ],
    extensie: [
      { label: "Extensie", p: 50 },
      { label: "Pernă mică", p: 15 },
      { label: "Pernă mare", p: 35 },
    ],
    gratis: true,
  },
  {
    icon: Bed,
    title: "Curățare și igienizare saltele",
    short: "Pentru un somn sănătos și odihnitor.",
    seoKicker: "somn sănătos",
    description: "Un somn odihnitor începe cu o saltea curată și sănătoasă.",
    features: [
      "Eliminarea acarienilor și a pielii moarte",
      "Dezinfectare cu abur la temperaturi înalte",
      "Prospețime și igienă de durată",
    ],
    image: saltele,
    href: "/servicii/curatare-saltele",
    didYouKnow:
      "Saltelele neigienizate pot fi un adevărat cuib de acarieni și bacterii, care perturbă somnul și provoacă alergii. Dezinfectarea cu abur la temperaturi ridicate asigură un somn curat, sănătos și odihnitor pentru întreaga familie.",
    benefits: [
      "Elimină acarienii, bacteriile și pielea moartă",
      "Previne alergiile și problemele respiratorii",
      "Dezinfectare completă cu abur la 150 °C",
      "Îmbunătățește calitatea somnului",
      "Prelungește durata de utilizare a saltelei",
    ],
    longDescription:
      "Aspirare profundă cu filtru HEPA, pretratare pete, igienizare cu abur controlat, neutralizare și aerare pentru uscare rapidă.",
    faqs: [
      {
        q: "Cât durează?",
        a: "30-90 minute pe saltea, în funcție de dimensiune și stare.",
      },
      {
        q: "Se poate dormi în aceeași zi?",
        a: "Da, după uscarea completă (de obicei 4-6 ore cu aerisire).",
      },
      {
        q: "Ajută la alergii?",
        a: "Da, reducerea alergenilor poate ameliora simptomele.",
      },
    ],
    media: [s2_a, s2_b],
    orientation: ["portrait", "portrait"],
    prices: [
      { label: "Saltea 1 persoană (față-verso)", p: 150 },
      { label: "Saltea 2 persoane 140x200 cm", p: 180 },
      { label: "Saltea 2 persoane 200x200 cm", p: 220 },
    ],
    gratis: true,
  },
  {
    icon: Armchair,
    title: "Curățare fotolii și scaune",
    short: "Prospețime pentru fiecare loc de relaxare.",
    seoKicker: "prospețime & igienă",
    description: "Scaunele și fotoliile capătă din nou prospețime și igienă.",
    features: [
      "Curățare în profunzime a țesăturii",
      "Eliminarea petelor și a mirosurilor neplăcute",
      "Protecție delicată pentru material",
    ],
    image: fotolii,
    href: "/servicii/curatare-fotolii-scaune",
    didYouKnow:
      "Chiar dacă arată curate, fotoliile pot ascunde micro-particule invizibile care provoacă alergii. Curățarea profesională le face complet igienice.",
    benefits: [
      "Reîmprospătarea și igienizarea locurilor de relaxare",
      "Înlăturarea murdăriei și petelor dificile",
      "Neutralizarea bacteriilor și a mirosurilor",
      "Menținerea aspectului estetic și a confortului",
      "Prevenirea uzurii premature",
    ],
    longDescription:
      "Aspirare HEPA, pretratare pete, extracție/abur în funcție de material, clătire/neutralizare, periere finală.",
    faqs: [
      {
        q: "Se pot curăța scaune delicate (catifea)?",
        a: "Da, adaptăm soluțiile și presiunea pentru materialele sensibile.",
      },
      {
        q: "Timp de uscare?",
        a: "3-6 ore, în funcție de țesătură și ventilație.",
      },
    ],
    media: [s3_a, s3_b, s3_c, s3_d],
    orientation: ["portrait", "landscape", "portrait", "portrait"],
    prices: [
      { label: "Fotoliu / extensibil", p: 90 },
      { label: "Scaun cu spătar (dimensiune mică)", p: 20 },
      { label: "Scaun cu spătar (dimensiune mare)", p: 30 },
    ],
    gratis: true,
  },
  {
    special: true,
    icon: Building2,
    title: "HoReCa - Curățenie profesională",
    short: "Spații sigure, clienți fericiți.",
    seoKicker: "spații sigure",
    description:
      "La Brio Cleaning, ne ocupăm de igienizarea completă a restaurantelor, cafenelelor, hotelurilor și sălilor de evenimente, astfel încât să oferiți clienților un mediu curat, sigur și plăcut.",
    features: [
      "Igienizare textile, tapițerii și covoare",
      "Curățare/igienizare scaune și mochete",
      "Dezinfectare suprafețe și zone de contact",
      "Eliminare bacterii, viruși și alergeni",
    ],
    image: horeca,
    href: "/servicii/horeca",
    didYouKnowList: [
      "Tapițeriile și mochetele din restaurante, hoteluri sau săli de evenimente pot aduna milioane de bacterii și alergeni, chiar dacă arată curate.",
      "Igienizarea profesională cu abur și aspirarea profesională elimină aceste riscuri, oferind siguranță și confort pentru clienți și angajați.",
    ],
    benefits: [
      "Igienizare profesională a textilelor, tapițeriilor și covoarelor",
      "Curățare și igienizare scaune și mochete",
      "Dezinfectare completă a suprafețelor și zonelor de contact",
      "Eliminarea bacteriilor, virușilor și alergenilor",
      "Proces rapid și eficient, fără a perturba activitatea",
      "Spații sigure și confortabile pentru clienți și personal",
    ],
    longDescription: (
      <div className="space-y-6">
        <p>
          Folosim echipamente profesionale, <b>abur la 150 °C</b> și soluții
          ecologice, sigure pentru angajați, clienți și mediu.
        </p>

        <div>
          <h3 className="text-lg font-semibold">
            Tipuri de spații și servicii
          </h3>

          <div className="mt-3 space-y-4">
            <div>
              <h4 className="font-medium">Restaurant / Cafenea:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Igienizare scaune, banchete și covoare</li>
                <li>Dezinfectarea meselor și suprafețelor de contact</li>
                <li>Neutralizarea mirosurilor neplăcute</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Hotel / Pensiune:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Curățare și igienizare camere, saltele și textile</li>
                <li>Dezinfectarea holurilor, recepției și spațiilor comune</li>
                <li>Menținerea unui mediu sănătos pentru oaspeți</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Săli de evenimente:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Curățare scaune și mochete înainte și după evenimente</li>
                <li>Igienizare completă a suprafețelor de contact</li>
                <li>Eliminarea petelor, mirosurilor și bacteriilor</li>
                <li>Pregătire rapidă a sălii pentru următorul eveniment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    faqs: [
      {
        q: "Deranjați activitatea locației?",
        a: "Nu. Planificăm seara/noaptea sau pe zone, pentru continuitate.",
      },
      {
        q: "Ce zone acoperiți?",
        a: "Săli, recepții, holuri, scaune, mochete, banchete, mese și puncte de contact.",
      },
      {
        q: "Cât durează?",
        a: "În funcție de suprafață: 2-8 h; oferim estimare la inspecție.",
      },
    ],
    media: [s4_a, s4_b, s4_c, s4_d],
    orientation: ["landscape", "landscape", "portrait", "portrait"],
    highlights: [
      { icon: Shield, text: "Siguranță & dezinfectare" },
      { icon: SprayCan, text: "Neutralizare mirosuri" },
    ],
    prices: [],
    gratis: false,
    note: "Ofertă personalizată în funcție de spațiu și suprafață.",
  },
  {
    icon: Layers,
    title: "Curățare mochetă",
    short: "Culori vii și curățenie în profunzime.",
    seoKicker: "culori vii",
    description:
      "Reîmprospătăm țesăturile și culorile, oferind o curățenie profundă.",
    features: [
      "Extracție puternică a murdăriei și prafului",
      "Neutralizarea bacteriilor și a mirosurilor",
      "Uscare rapidă pentru utilizare imediată",
    ],
    image: standard,
    href: "/servicii/curatare-mocheta",
    didYouKnow:
      "Mochetelor li se adună praf, polen și păr de animale invizibil cu ochiul liber. Curățarea profesională le transformă în suprafețe sigure și curate.",
    benefits: [
      "Curățare în profunzime a fibrelor textile",
      "Revitalizarea culorilor și a aspectului inițial",
      "Eliminarea mirosurilor neplăcute și a bacteriilor",
      "Uscare rapidă, fără disconfort",
      "Protecție îndelungată pentru suprafață",
    ],
    longDescription:
      "Aspirare industrială, pretratare pete, spălare/extracție, clătire/neutralizare, uscare accelerată. Opțional: protecție anti-pete.",
    faqs: [
      {
        q: "Se taxează la mp?",
        a: "Da, ofertăm la mp; suprafețe mari au preț preferențial.",
      },
      {
        q: "Se poate face la birou fără a opri activitatea?",
        a: "Da, programăm în afara orelor sau pe segmente.",
      },
    ],
    media: [],
    prices: [{ label: "Curățare mochetă", p: 14, unit: "mp" }],
    gratis: true,
  },
  {
    icon: Car,
    title: "Curățare interior auto",
    short: "Confort și igienă la fiecare drum.",
    seoKicker: "interior impecabil",
    description:
      "O mașină curată înseamnă confort și sănătate la fiecare drum.",
    features: [
      "Curățare tapițerie, plafon și podea",
      "Eliminarea petelor, mirosurilor și bacteriilor",
      "Igienizare cu abur și soluții sigure pentru pasageri",
    ],
    image: auto,
    href: "/servicii/curatare-auto",
    didYouKnow:
      "Interiorul unei mașini poate fi de până la 5 ori mai murdar decât majoritatea suprafețelor din casă. Aspirarea și igienizarea cu abur fac aerul și suprafețele mai sănătoase.",
    benefits: [
      "Igienizare completă a habitaclului (tapițerie, plafon, podea)",
      "Eliminarea bacteriilor, acarienilor și mirosurilor",
      "Îmbunătățirea confortului și a calității aerului",
      "Protejarea și menținerea materialelor interioare",
      "Aspect îngrijit și prospețime la fiecare drum",
    ],
    longDescription:
      "Aspirare detaliată, pretratare pete, extracție pentru textile, curățare delicată + hidratare pentru piele, detaliere bord/volan, igienizare puncte de contact.",
    faqs: [
      { q: "Cât durează?", a: "2-4 ore în funcție de mărime și stare." },
      {
        q: "Rămâne umezeală?",
        a: "Nu—extracție controlată și aerisire; uscarea în câteva ore.",
      },
      {
        q: "Curățați și tavanul?",
        a: "Da, cu umezeală minimă pentru a evita desprinderea materialului.",
      },
    ],
    media: [s5_a, s5_b, s5_c, s5_d],
    orientation: ["landscape", "landscape", "portrait", "portrait"],
    prices: [
      { label: "Pachet Standard (banchetă + scaune)", p: 300 },
      { label: "Pachet Gold (banchetă, scaune, mochetă)", p: 385 },
      {
        label:
          "Pachet Deluxe (banchetă, scaune, mochetă, portbagaj, fețe de uși, preșuri)",
        p: 510,
      },
      { label: "Detailing interior complet", p: 850 },
    ],
    extensie: [
      { label: "Jeep / 4x4 supliment", p: 50 },
      { label: "Tapițerie piele supliment", p: 50 },
    ],
    gratis: true,
  },
  {
    icon: Droplet,
    title: "Îngrijire și curățare piele",
    short: "Eleganță și finețe, redată cu grijă.",
    seoBenefitShort: "aspect premium",
    seoKicker: "",
    description:
      "Menținem aspectul premium al suprafețelor din piele, oferindu-le o nouă viață.",
    features: [
      "Curățare delicată și în profunzime",
      "Hidratare și protecție împotriva crăpării",
      "Redarea aspectului natural și plăcut la atingere",
    ],
    image: standard,
    href: "/servicii/ingrijire-piele",
    didYouKnow:
      "Fără îngrijire regulată, pielea se poate crăpa și își pierde luciul. Tratamentul profesional redă finețea și aspectul elegant pentru mulți ani.",
    benefits: [
      "Îndepărtează murdăria și petele",
      "Hidratare și protecție pentru a preveni crăparea",
      "Redarea aspectului natural și elegant",
      "Păstrarea fineții și a confortului materialului",
      "Prelungirea duratei de viață a suprafețelor din piele",
    ],
    longDescription:
      "Aspirare fină, curățare pH-neutră, tratament punctual al petelor, hidratare și protecție cu balsamuri profesionale.",
    faqs: [
      {
        q: "E potrivit pentru piele naturală și ecologică?",
        a: "Da, adaptăm soluțiile pentru fiecare tip și testăm discret.",
      },
      {
        q: "Lasă luciu sau reziduuri?",
        a: "Nu, finisaj natural, fără pelicule lipicioase.",
      },
    ],
    media: [],
    prices: [],
    gratis: false,
    note: "Preț stabilit în funcție de suprafață și tip de piele",
  },
];

export const TIME_SLOTS = [
  { id: "morning", label: "08:00 - 11:30", value: "08-12" },
  { id: "afternoon", label: "12:00 - 15:30", value: "12-16" },
  { id: "evening", label: "16:00 - 19:30", value: "16-20" },
] as const;

export const socialLinks = [
  {
    name: "TikTok",
    icon: "logos:tiktok-icon",
    href: "https://www.tiktok.com/@briocleaningtimisoara",
  },
  {
    name: "Facebook",
    icon: "logos:facebook",
    href: "https://www.facebook.com/BrioCleaningTm",
  },
  {
    name: "Instagram",
    icon: "skill-icons:instagram",
    href: "https://www.instagram.com/briocleaningtm/",
  },
];

export const contact = {
  phone: "+40 787 675 225",
  email: "contact@briocleaning.ro",
  address: "Timișoara, România",
};
