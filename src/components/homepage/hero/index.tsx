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

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
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
  },
  image: {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
    title: "Dynamic Image Showcase",
    date: "Underwater Adventure",
    scrollToExpand: "Scroll to Expand Demo",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.",
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: "video" | "image" }) => {
  const currentMedia = sampleMediaContent[mediaType];

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

export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const Demo = () => {
  const [mediaType, setMediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType("video")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "video"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType("image")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "image"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as "video" | "image"} />
      </ScrollExpandMedia>
    </div>
  );
};
