// components/BeforeAfterMasonry.tsx
"use client";
import Image, { StaticImageData } from "next/image";

type BAImage = {
  src: StaticImageData;
  alt: string;
};

export default function BeforeAfterMasonry({ items }: { items: BAImage[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 columns-2 md:columns-3 gap-6 [column-fill:_balance]">
      {items.map((img, i) => (
        <figure key={i} className="mb-6 break-inside-avoid">
          <Image
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200 bg-white"
            sizes="(min-width:1280px) 32vw, (min-width:640px) 48vw, 100vw"
          />
          {/* optional tiny caption */}
          <figcaption className="mt-2 text-xs text-gray-600">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
