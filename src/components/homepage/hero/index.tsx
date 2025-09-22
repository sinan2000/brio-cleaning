// https://21st.dev/arunachalam0606/scroll-expansion-hero/default
"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "./client";
import background from "@/assets/hero/background.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { CheckCircle, ThermometerSun, Timer, Wind } from "lucide-react";
import photo from "@/assets/hero/about-us.jpg";
import { Reveal } from "@/components/reveal";

interface MediaAbout {
  overview: string;
}

interface MediaData {
  src: string;
  mobileMediaSrc?: string;
  poster: string;
  background: StaticImageData;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

const sampleMediaContent: MediaData = {
  src: "/hero/desktop.mp4",
  mobileMediaSrc: "/hero/mobile.mp4",
  background,
  poster: "/hero/poster.jpg",
  title: "Curățare Cu Brio",
  date: "Noi ne ocupăm de pete",
  scrollToExpand: "Ca tu să fii liniștit",
  about: {
    overview:
      "La Brio Cleaning credem că un spațiu curat înseamnă sănătate, confort și voie bună. Suntem specializați în curățarea și igienizarea canapelelor, fotoliilor, saltelelor, mochetelor, interior auto și suprafețelor din piele. Folosim echipamente profesionale și soluții sigure pentru familie și animale de companie, oferind mereu rezultate vizibile și de durată. Brio Cleaning – curățenie cu grijă pentru tine și casa ta.",
  },
};

const MediaSection = () => {
  const currentMedia = sampleMediaContent;

  return (
    <Reveal className="max-w-4xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-4 text-foreground">
        Cine suntem noi?
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
        {currentMedia.about.overview}
      </p>

      {/* Secțiunea 2: Igienizăm, dezinfectăm, protejăm */}
      <div className="mt-10 rounded-2xl border bg-card text-card-foreground shadow-sm">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Igienizăm, dezinfectăm, protejăm
          </h3>

          {/* ROW 1: Image + Description (stacked; image first on mobile, text first on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Image
              src={photo}
              alt="BrioCleaning la lucru"
              className="rounded-xl shadow-lg w-full h-auto order-2 md:order-1"
              priority
            />

            <div className="order-1 md:order-2">
              <p className="text-muted-foreground text-base md:text-lg">
                La Brio Cleaning spălăm, igienizăm și dezinfectăm canapele,
                saltele, fotolii și toate textilele din casa sau mașina ta,
                readucând prospețimea și confortul în fiecare colț.
              </p>
              <p className="text-muted-foreground mt-3 text-base md:text-lg">
                Folosim echipamente profesionale, <b>abur la 150&nbsp;°C</b> și
                soluții ecologice, sigure pentru întreaga familie și animale de
                companie.
              </p>
            </div>
          </div>

          {/* ROW 2: Checks + Beneficii */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ul className="space-y-3">
              {[
                "Profesioniști dedicați și cu experiență",
                "Soluții sigure și prietenoase cu mediul",
                "Echipamente de ultimă generație",
                "Rezultate garantate",
                "Igienizare completă fără chimicale",
                "Protecție pentru tine, familia și animalele tale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-brio-green" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-4 md:p-5 bg-muted/60">
              <h4 className="font-semibold mb-3">Beneficii</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Wind className="h-5 w-5 shrink-0 text-brio-blue" />
                  <span>
                    <span className="font-medium">Filtrare HEPA</span> — elimină
                    particule fine, acarieni și alergeni
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ThermometerSun className="h-5 w-5 shrink-0 text-brio-blue" />
                  <span>
                    <span className="font-medium">Abur la 150&nbsp;°C</span> —
                    dezinfectare profundă fără chimicale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Timer className="h-5 w-5 shrink-0 text-brio-blue" />
                  <span>
                    <span className="font-medium">Rapid și eficient</span> —
                    rezultate vizibile, timp de uscare scurt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const VideoExpansion = () => {
  const currentMedia = sampleMediaContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaSrc={currentMedia.src}
        mobileMediaSrc={currentMedia.mobileMediaSrc}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaSection />
      </ScrollExpandMedia>
    </div>
  );
};
