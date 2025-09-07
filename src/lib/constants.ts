import { Building2, Car, Sofa } from "lucide-react";
import tapiterii from "@/assets/services/tapiterii.jpg";
import auto from "@/assets/services/auto.jpg";
import horeca from "@/assets/services/horeca.jpg";

import img_1a from "@/assets/services/tapiterii/img1.jpg";
import img_1b from "@/assets/services/tapiterii/img2.jpg";
import img_1c from "@/assets/services/tapiterii/img3.jpg";
import img_1d from "@/assets/services/tapiterii/img4.jpg";

import img_2a from "@/assets/services/auto/img1.jpg";
import img_2b from "@/assets/services/auto/img2.jpg";
import img_2c from "@/assets/services/auto/img3.jpg";
import img_2d from "@/assets/services/auto/img4.jpg";

import img_3a from "@/assets/services/horeca/img1.jpg"
import img_3b from "@/assets/services/horeca/img2.jpg"
import img_3c from "@/assets/services/horeca/img3.jpg"
import img_3d from "@/assets/services/horeca/img4.jpg"

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
  {
    icon: Sofa,
    title: "Curățare Tapițerie",
    description:
      "Curățare profesională în profunzime pentru canapele, scaune, saltele și toate mobilierul din țesătură. Restaurăm prospețimea și extindem durata de viață a tapițeriei dumneavoastră.",
    features: [
      "Curățare profundă cu aburi",
      "Îndepărtarea petelor",
      "Protecția țesăturii",
      "Eliminarea mirosurilor",
    ],
    image: tapiterii,
    href: "/servicii/curatare-tapiterie",
    fact: "Aspirarea cu filtru HEPA pe textile ajută la reducerea alergenilor din praf; iar curățarea prin extracție cu apă caldă contribuie la îndepărtarea contaminanților din țesături.",
    longDescription:
      "Începem cu o inspecție rapidă a materialului și a tipului de pete pentru a alege metoda corectă. Aspirăm cu filtru HEPA pentru a îndepărta praful și alergenii, apoi aplicăm pretratare țintită pe pete (cafea, suc, ulei, urme de uzură). Curățarea principală se face prin extracție cu apă caldă/abur la temperatură controlată, astfel încât murdăria să fie desprinsă din fibre fără a le încărca cu umezeală. La final, clătim/neutralizăm detergentul rămas, periem fibrele pentru o textură uniformă și accelerăm uscarea cu aerare locală. La cerere, aplicăm protecție hidrofobă anti-pete pentru a prelungi rezultatul.",
    faqs: [
      {
        q: "Cât durează intervenția?",
        a: "În general 60-180 minute pentru o canapea, în funcție de mărime și gradul de murdărie. Estimarea exactă o stabilim după evaluare.",
      },
      {
        q: "În cât timp se usucă?",
        a: "De regulă 4-6 ore în condiții normale de ventilație. Iarna sau la umiditate crescută poate dura mai mult; recomandăm aerisire și o temperatură de min. 20°C.",
      },
      {
        q: "Puteți scoate toate petele?",
        a: "Majoritatea, da. Pete vechi de colorant/tanin sau cele care au decolorat fibra pot rămâne palide. Întotdeauna explicăm realist înainte să începem.",
      },
      {
        q: "Este sigur pentru materiale delicate?",
        a: "Da, ajustăm presiunea, temperatura și detergenții în funcție de material (catifea, microfibră, amestecuri, piele ecologică). Testăm pe o zonă ascunsă.",
      },
      {
        q: "Îndepărtați mirosurile?",
        a: "Da. Extracția profundă + agenți enzimatici ajută la neutralizarea mirosurilor de lichide vărsate, fum, animale. Pentru cazuri severe putem recomanda tratament suplimentar.",
      },
      {
        q: "Trebuie să mut mobilierul?",
        a: "Ideal, zona să fie eliberată în jurul pieselor ce se curăță. La nevoie vă ajutăm să le repoziționăm în siguranță.",
      },
    ],
    media: [img_1a, img_1c, img_1b, img_1d],
  },
  {
    icon: Car,
    title: "Curățare Auto",
    description:
      "Servicii complete de detailing interior și exterior pentru automobile. De la scaune din piele la covoare, facem ca vehiculul dumneavoastră să arate și să se simtă ca nou.",
    features: [
      "Detalierea interiorului",
      "Tratamentul pielii",
      "Curățarea covoarelor",
      "Protecția vopselei",
    ],
    image: auto,
    href: "/servicii/curatare-auto",
    fact: "Volanul unei mașini poate adăposti de până la 9x mai mulți germeni decât un capac de toaletă; curățarea regulată a interiorului are impact real.",
    longDescription:
      "Curățarea interioară începe cu o aspirare temeinică (inclusiv spații înguste), urmată de pretratarea petelor și curățarea materialelor: extracție pentru textile, curățare blândă + hidratare pentru piele, detaliere a plasticelor/consolei/volanului. Dezinfectăm punctele atinse frecvent și, la cerere, aplicăm neutralizare de mirosuri. Scopul: suprafețe curate, igienizate și un habitaclu care arată și se simte ca nou.",
    faqs: [
      {
        q: "Cât durează o curățare interioară?",
        a: "De la 2 la 4 ore în funcție de mărime și starea habitaclului. Adăugați timp dacă doriți și portbagaj sau scaune demontabile pentru copii.",
      },
      {
        q: "Se pot curăța scaunele din piele?",
        a: "Da. Folosim soluții pH-neutre și conditioner pentru a menține suplețea fără a încărca suprafața cu luciu artificial.",
      },
      {
        q: "Rămâne umezeală în mașină?",
        a: "Nu. Folosim extracție controlată și aerisire; textilele rămân ușor umede și se usucă în câteva ore cu geamurile întredeschise.",
      },
      {
        q: "Scoateți mirosurile neplăcute?",
        a: "Neutralizăm mirosurile uzuale (alimente, băuturi, umezeală ușoară). Pentru mucegai sau fum persistent putem propune tratamente dedicate.",
      },
      {
        q: "Curățați și tavanul?",
        a: "Da, dar lucrăm cu presiune și umezeală minimă pentru a evita desprinderea materialului. Dacă lipiciul este degradat, recomandăm precauție.",
      },
      {
        q: "Trebuie să scot obiectele din mașină?",
        a: "Da, pentru eficiență și protecție. Vă rugăm să goliți torpedo/portbagajul de obiecte personale înainte de programare.",
      },
    ],
    media: [img_2a, img_2b, img_2c, img_2d],
  },
  {
    icon: Building2,
    title: "Servicii HoReCa",
    description:
      "Curățare specializată pentru hoteluri, restaurante și cafenele. Înțelegem standardele unice de igienă necesare în industria ospitalității.",
    features: [
      "Curățare de grad comercial",
      "Conformitate cu normele de sănătate",
      "Programare flexibilă",
      "Servicii de urgență",
    ],
    image: horeca,
    href: "/servicii/curatare-horeca",
    fact: "Spălarea textilelor la ≥71°C pentru un interval adecvat este eficientă în distrugerea microorganismelor; bună practică pentru textilele din HoReCa.",
    longDescription:
      "Oferim programe de întreținere pentru scaune, canapele, banchete și textile din zona de servire/recepție, cu intervenții planificate off-hours ca să nu întrerupem activitatea. Folosim proceduri standardizate: audit rapid al materialelor, pretratare pe tip de pată, curățare prin extracție/abur la parametri controlați, clătire/neutralizare și accelerarea uscării. Respectăm cerințele de igienă din ospitalitate și păstrăm trasabilitatea produselor folosite. Putem integra periodic protecții împotriva petelor pentru a menține aspectul mai mult timp.",
    faqs: [
      {
        q: "Puteți lucra în afara programului?",
        a: "Da, planificăm intervenții noaptea sau dimineața devreme ca spațiul să fie uscat și gata pentru deschidere.",
      },
      {
        q: "Cât de des recomandați curățarea?",
        a: "Pentru trafic mediu: la 2-3 luni pentru scaune/banchete. Pentru zone premium sau trafic intens, lunar sau la nevoie.",
      },
      {
        q: "Este sigur pentru textilele colorate?",
        a: "Da. Folosim detergenți compatibili cu materialul și facem test de stabilitate a culorii înainte de tratament.",
      },
      {
        q: "Cât durează uscarea?",
        a: "De obicei 3-6 ore, în funcție de material și ventilație. Putem folosi ventilatoare pentru a accelera procesul.",
      },
      {
        q: "Cum se calculează prețul?",
        a: "În funcție de numărul de locuri, suprafață, tip material și frecvență (contracte de întreținere au discount). Oferim ofertă scrisă după vizită.",
      },
    ],
    media: [img_3a, img_3b, img_3c, img_3d],
  },
];

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
