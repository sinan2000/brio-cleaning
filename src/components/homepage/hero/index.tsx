// https://21st.dev/arunachalam0606/scroll-expansion-hero/default
"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "./client";
import AboutUs from "../about";
import background from "@/assets/hero/background.jpg";
import { StaticImageData } from "next/image";

interface MediaAbout {
  overview: string;
}

interface MediaContent {
  src: string;
  mobileMediaSrc?: string;
  poster: string;
  background: StaticImageData;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

const sampleMediaContent: MediaContent = {
  src: "/hero/desktop.mp4",
  mobileMediaSrc: "/hero/mobile.mp4",
  background: background,
  poster: "/hero/poster.jpg",
  title: "Curățare Cu Brio",
  date: "Noi ne ocupăm de pete",
  scrollToExpand: "Ca tu să fii liniștit",
  about: {
    overview:
      "La Brio Cleaning credem că un spațiu curat înseamnă sănătate, confort și voie bună. Suntem specializați în curățarea și igienizarea canapelelor, fotoliilor, saltelelor, mochetelor, interior auto si suprafețelor din piele.",
  },
};

const MediaContent = () => {
  const currentMedia = sampleMediaContent;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Cine suntem noi?
      </h2>
      <p className="text-lg mb-8 text-black dark:text-white">
        {currentMedia.about.overview}
      </p>

      <AboutUs />
    </div>
  );
};

export const VideoExpansion = () => {
  const currentMedia = sampleMediaContent;
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaSrc={currentMedia.src}
        mobileMediaSrc={currentMedia.mobileMediaSrc}
        posterSrc={currentMedia.poster!}
        bgImageSrc={currentMedia.background!}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};
