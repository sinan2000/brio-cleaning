import { Building2, Car, Sofa } from "lucide-react";
import tapiterii from "@/assets/services/tapiterii.jpg";
import auto from "@/assets/services/auto.jpg";
import horeca from "@/assets/services/horeca.jpg";

export const menuItems = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+40 787 675 225",
  email: "contact@briocleaning.ro",
  address: "Timișoara, România"
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
    icon: "logos:instagram-icon",
    href: "https://www.instagram.com/briocleaningtm/",
  },
];
