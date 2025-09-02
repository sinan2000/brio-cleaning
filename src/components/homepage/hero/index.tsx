// https://21st.dev/arunachalam0606/scroll-expansion-hero/default
"use client";

import { useState, useEffect } from "react";
import ScrollExpandMedia from "./client";
import AboutUs from "../about";

interface MediaAbout {
  overview: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

const sampleMediaContent: MediaContent = {
  src: "/hero.mp4",
  poster: "/poster.jpg",
  background: "/hero.jpg",
  title: "Curățare Cu Brio",
  date: "Noi ne ocupăm de pete",
  scrollToExpand: "Ca tu să fii liniștit",
  about: {
    overview:
      "BrioCleaning este serviciul de curățare de top din Timișoara, specializat în curățarea tapițeriei, auto și comercială. Combinăm ani de experiență cu tehnici de vârf pentru a oferi rezultate excepționale care depășesc așteptările.",
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
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};
