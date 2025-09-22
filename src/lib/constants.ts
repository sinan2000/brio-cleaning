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

import horeca from "@/assets/services/horeca.jpg";

import img_1a from "@/assets/services/tapiterii/img1.jpg";
import img_1b from "@/assets/services/tapiterii/img2.jpg";
import img_1c from "@/assets/services/tapiterii/img3.jpg";
import img_1d from "@/assets/services/tapiterii/img4.jpg";

import img_2a from "@/assets/services/auto/img1.jpg";
import img_2b from "@/assets/services/auto/img2.jpg";
import img_2c from "@/assets/services/auto/img3.jpg";
import img_2d from "@/assets/services/auto/img4.jpg";

import img_3a from "@/assets/services/horeca/img1.jpg";
import img_3b from "@/assets/services/horeca/img2.jpg";
import img_3c from "@/assets/services/horeca/img3.jpg";
import img_3d from "@/assets/services/horeca/img4.jpg";

export const menuItems = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+40 787 675 225",
  email: "contact@briocleaning.ro",
  address: "Timișoara, România",
};

export const normPhone = () => contact.phone.replace(/[\s+]/g, "");

export const services = [
  // 1) CANAPELE
  {
    icon: Sofa,
    title: "Curățare și igienizare canapele",
    short: "Curățenie în profunzime, relaxare deplină.",
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
      "O canapea poate ascunde milioane de acarieni și bacterii care afectează calitatea aerului din casă și sănătatea familiei.",
    benefits: [
      "Redă aspectul și prospețimea canapelei",
      "Elimină petele și mirosurile persistente",
      "Îndepărtează acarienii și alergenii pentru un aer mai sănătos",
      "Prelungește durata de viață a materialului",
      "Siguranță pentru copii și animale de companie",
    ],
    fact: "Aspirarea cu filtru HEPA reduce alergenii; extracția cu apă caldă desprinde contaminanții fără exces de umezeală.",
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
    media: [],
    highlights: [
      { icon: Shield, text: "Eco & sigur pentru copii/pets" },
      { icon: SprayCan, text: "Neutralizare mirosuri" },
    ],
  },

  // 2) SALTELE
  {
    icon: Bed,
    title: "Curățare și igienizare saltele",
    short: "Pentru un somn sănătos și odihnitor.",
    description: "Un somn odihnitor începe cu o saltea curată și sănătoasă.",
    features: [
      "Eliminarea acarienilor și a pielii moarte",
      "Dezinfectare cu abur la temperaturi înalte",
      "Prospețime și igienă de durată",
    ],
    image: saltele,
    href: "/servicii/curatare-saltele",
    didYouKnow:
      "Saltelele neigienizate adună alergeni și bacterii care perturbă somnul; aburul la 150 °C dezinfectează profund.",
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
    media: [],
  },

  // 3) FOTOLII & SCAUNE
  {
    icon: Armchair,
    title: "Curățare fotolii și scaune",
    short: "Prospețime pentru fiecare loc de relaxare.",
    description: "Scaunele și fotoliile capătă din nou prospețime și igienă.",
    features: [
      "Curățare în profunzime a țesăturii",
      "Eliminarea petelor și a mirosurilor neplăcute",
      "Protecție delicată pentru material",
    ],
    image: fotolii,
    href: "/servicii/curatare-fotolii-scaune",
    didYouKnow:
      "Chiar dacă arată curate, fotoliile pot ascunde microparticule invizibile care provoacă alergii.",
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
    media: [],
  },

  // 4) MOCHETĂ
  {
    icon: Layers,
    title: "Curățare mochetă",
    short: "Culori vii și curățenie în profunzime.",
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
      "Mochetele acumulează praf, polen și păr de animale invizibil cu ochiul liber; curățarea profesională le face sigure și curate.",
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
  },

  // 5) INTERIOR AUTO
  {
    icon: Car,
    title: "Curățare interior auto",
    short: "Confort și igienă la fiecare drum.",
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
      "Interiorul unei mașini poate fi de până la 5 ori mai murdar decât suprafețe uzuale din casă.",
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
    media: [],
  },

  // 6) PIELE
  {
    icon: Droplet,
    title: "Îngrijire și curățare piele",
    short: "Eleganță și finețe, redată cu grijă.",
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
      "Fără îngrijire regulată, pielea se usucă și se poate crăpa; tratamentul profesional îi păstrează elasticitatea.",
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
  },
];

export const priceList = [
  {
    group: "Incluse în orice serviciu",
    includes: [
      "Igienizare cu abur la 150°C - elimină bacteriile, acarienii și alergenii",
      "Sterilizare cu ozon & lampă UV-C - aer curat și mirosuri neutralizate",
      "Soluții ecologice - sigure pentru copii și animale de companie",
      "Rezultate vizibile de la prima curățare",
    ],
    items: [],
  },
  {
    group: "Scaune & Fotolii",
    items: [
      { name: "Curățare fotoliu / extensibil", price: 90, unit: "lei" },
      {
        name: "Curățare scaun cu spătar",
        price: "20-30",
        unit: "lei",
        note: "în funcție de dimensiune",
      },
      { name: "Dezinfectare cu abur", price: "GRATUIT" },
      { name: "Sterilizare cu ozon & UV-C", price: "GRATUIT" },
    ],
  },
  {
    group: "Saltele",
    items: [
      { name: "Saltea 1 persoană (față-verso)", price: 150, unit: "lei" },
      {
        name: "Saltea 2 pers. (față-verso) 140×200 cm",
        price: 180,
        unit: "lei",
      },
      {
        name: "Saltea 2 pers. (față-verso) 200×200 cm",
        price: 220,
        unit: "lei",
      },
      { name: "Dezinfectare cu abur", price: "GRATUIT" },
      { name: "Sterilizare cu ozon & UV-C", price: "GRATUIT" },
    ],
  },
  {
    group: "Canapele & Colțare",
    items: [
      { name: "Canapea 2 locuri", price: 130, unit: "lei" },
      { name: "Colțar 3 locuri", price: 175, unit: "lei" },
      { name: "Colțar 4 locuri", price: 220, unit: "lei" },
      { name: "Colțar 5 locuri", price: 260, unit: "lei" },
      { name: "Colțar 6-8 locuri", price: 310, unit: "lei" },
      { name: "Colțar 7 locuri", price: 410, unit: "lei" },
      { name: "Colțar 8 locuri", price: 460, unit: "lei" },
      { name: "Extensie", price: 50, unit: "lei" },
      { name: "Pernă mică", price: 15, unit: "lei" },
      { name: "Pernă mare", price: 35, unit: "lei" },
      { name: "Dezinfectare cu abur", price: "GRATUIT" },
      { name: "Sterilizare cu ozon & UV-C", price: "GRATUIT" },
    ],
  },
  {
    group: "Tapițerie auto",
    items: [
      { name: "Pachet Standard (banchetă + scaune)", price: 300, unit: "lei" },
      {
        name: "Pachet Gold (banchetă, scaune, mochetă)",
        price: 385,
        unit: "lei",
      },
      {
        name: "Pachet Deluxe (banchetă, scaune, mochetă, portbagaj, fețe uși, preșuri textile)",
        price: 510,
        unit: "lei",
      },
      { name: "Detailing interior complet", price: 850, unit: "lei" },
      { name: "Jeep/4x4 (supliment)", price: 50, unit: "lei" },
      { name: "Tapițerie piele (supliment)", price: 50, unit: "lei" },
      { name: "Dezinfectare cu abur", price: "GRATUIT" },
      { name: "Sterilizare cu ozon & UV-C", price: "GRATUIT" },
    ],
  },
  {
    group: "Covoare & Mochete",
    items: [
      { name: "Curățare mochetă", price: 14, unit: "lei/mp" },
      { name: "Dezinfectare cu abur", price: "GRATUIT" },
      { name: "Sterilizare cu ozon & UV-C", price: "GRATUIT" },
    ],
  },
  {
    group: "Mențiuni",
    items: [
      {
        name: "Autoutilitare, microbuze, autobuze, autocare",
        price: "Ofertă personalizată",
      },
    ],
  },
];

export function slugFromHref(href: string) {
  return href.split("/").filter(Boolean).pop() ?? "";
}

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
    icon: "simple-icons:instagram",
    href: "https://www.instagram.com/briocleaningtm/",
  },
];

export const TIME_SLOTS = [
  { id: "morning", label: "09:00 - 12:00", value: "09-12" },
  { id: "afternoon", label: "12:00 - 15:00", value: "12-15" },
  { id: "evening", label: "15:00 - 18:00", value: "15-18" },
] as const;

export function timeAgo(dateString: string): string {
  const now = new Date();
  const then = new Date(dateString);

  const diffMonths =
    (now.getFullYear() - then.getFullYear()) * 12 +
    (now.getMonth() - then.getMonth());

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
  }

  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
}
