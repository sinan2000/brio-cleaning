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
    description:
      "Redăm confortul și frumusețea canapelei tale printr-o curățare profesională în profunzime.",
    features: [
      "Aspirare cu Kirby - elimină praf, acarieni și alergeni",
      "Dezinfectare cu abur la 150 °C - igienizare `totală și mirosuri neutralizate",
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
    fact: "Aspirarea profundă HEPA combinată cu abur controlat ajută la reducerea alergenilor din stratul superior al saltelei fără a o îmbiba.",
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
    fact: "Uleiurile de piele și praful se fixează în fibrele zonelor de contact; pretratarea țintită + extracția controlează re-depunerea.",
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
    description:
      "Igienizare completă pentru restaurante, cafenele, hoteluri și săli de evenimente — curat, sigur și plăcut pentru clienți și personal.",
    features: [
      "Igienizare textile, tapițerii și covoare",
      "Curățare/igienizare scaune și mochete",
      "Dezinfectare suprafețe și zone de contact",
      "Eliminare bacterii, viruși și alergeni",
      "Proces rapid, fără întreruperea activității",
    ],
    image: horeca,
    href: "/servicii/horeca",
    didYouKnow:
      "Tapițeriile și mochetele pot aduna milioane de bacterii și alergeni chiar dacă arată curate. Igienizarea profesională cu abur le elimină eficient.",
    benefits: [
      "Mediu sigur pentru clienți și angajați",
      "Eliminarea mirosurilor și a riscurilor microbiologice",
      "Reducerea alergenilor și îmbunătățirea calității aerului",
      "Intervenție rapidă, programabilă off-hours",
      "Imagine impecabilă pentru locație",
    ],
    fact: "Aburul la ~150 °C dezinfectează în profunzime, iar aspirarea profesională extrage particulele fine fără exces de umezeală.",
    longDescription:
      "Inspecție spații (front of house / back of house), aspirare industrială HEPA, pretratare pete, igienizare cu abur a textilelor și suprafețelor de contact, extracție/neutralizare, uscare accelerată. La cerere: protecție anti-pete / plan recurent.",
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
    media: [],
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
    fact: "Mocheta reține praful fin în suportul textil; extracția profesională desprinde particulele pe care aspirarea casnică nu le poate scoate.",
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
    fact: "Aburul la temperatură înaltă neutralizează mirosurile din textile fără parfumuri puternice și reduce biofilmul de pe zonele de contact.",
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
    fact: "Curățarea pH-neutră urmată de hidratare previne uscarea și microfisurarea pielii, menținându-i elasticitatea și aspectul natural.",
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
  { id: "morning", label: "09:00 - 12:00", value: "09-12" },
  { id: "afternoon", label: "12:00 - 15:00", value: "12-15" },
  { id: "evening", label: "15:00 - 18:00", value: "15-18" },
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
