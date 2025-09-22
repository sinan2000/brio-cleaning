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
  {
    icon: Sofa,
    title: "Curățare și igienizare canapele",
    short: "Curățenie în profunzime, relaxare deplină.",
    description:
      "Redăm confortul și frumusețea canapelei tale printr-o curățare profesională în profunzime.",
    features: [
      "Aspirare cu Kirby – elimină praf, acarieni și alergeni",
      "Dezinfectare cu abur la 150 °C – igienizare totală și mirosuri neutralizate",
      "Soluții ecologice – sigure pentru familie și animale de companie",
      "Îndepărtarea petelor (cafea, suc, ulei, uzură)",
      "Clătire/neutralizare și periere pentru textură uniformă",
    ],
    image: tapiterii, // same asset you used for upholstery
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
    fact: "Aspirarea cu filtru HEPA ajută la reducerea alergenilor; extracția cu apă caldă desprinde contaminanții din fibre fără exces de umezeală.",
    longDescription:
      "Începem cu o inspecție rapidă a materialului și a petelor pentru a alege metoda corectă. Aspirăm cu filtru HEPA pentru a îndepărta praful și alergenii, apoi pretratăm țintit petele. Curățarea principală se face prin extracție cu apă caldă și abur la temperatură controlată, astfel încât murdăria să fie desprinsă din fibre fără a le încărca cu umezeală. La final, clătim/neutralizăm detergentul rămas, periem fibrele pentru o textură uniformă și accelerăm uscarea prin aerare locală. La cerere, aplicăm protecție hidrofobă anti-pete.",
    faqs: [
      {
        q: "Cât durează intervenția?",
        a: "De regulă 60-180 minute pentru o canapea, în funcție de mărime și gradul de murdărie. Estimarea exactă o stabilim după evaluare.",
      },
      {
        q: "În cât timp se usucă?",
        a: "De obicei 4-6 ore cu ventilație normală. Iarna sau la umiditate crescută poate dura mai mult; recomandăm aerisire și min. 20 °C.",
      },
      {
        q: "Scoateți toate petele?",
        a: "Majoritatea, da. Pete vechi de colorant/tanin sau decolorările pot rămâne palide. Explicăm realist înainte să începem.",
      },
      {
        q: "Este sigur pentru materiale delicate?",
        a: "Da. Ajustăm presiunea, temperatura și detergenții în funcție de material (catifea, microfibră, amestecuri, piele ecologică). Testăm pe o zonă ascunsă.",
      },
    ],
    media: [img_1a, img_1c, img_1b, img_1d],
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
