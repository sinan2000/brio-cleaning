import Image, { StaticImageData } from "next/image";

export default function Mosaic({
  media,
  orientation,
}: {
  media: StaticImageData[];
  orientation: ("landscape" | "portrait")[];
}) {
  if (!media.length) return null;
{/* */}
  // CASE 1: Only one image → big hero-like block
  if (media.length === 1) {
    return (
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src={media[0]}
          alt="service image"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  // CASE 2: Two images
  if (media.length === 2) {
    const bothLandscape = media.every(
      (m, ind) => orientation[ind] === "landscape"
    );
    const bothPortrait = media.every(
      (m, ind) => orientation[ind] === "portrait"
    );

    if (bothLandscape) {
      return (
        <div className="grid gap-3 auto-rows-[200px] sm:auto-rows-[250px]">
          {media.map((m, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden">
              <Image
                src={m.src}
                alt={`img ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      );
    }
    if (bothPortrait) {
      return (
        <div className="grid grid-cols-2 gap-3 auto-rows-[300px]">
          {media.map((m, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden">
              <Image
                src={m.src}
                alt={`img ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      );
    }

    // Mixed (portrait + landscape) → stack vertically
    return (
      <div className="grid gap-3">
        {media.map((m, i) => (
          <div
            key={i}
            className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden"
          >
            <Image src={m.src} alt={`img ${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  // CASE 3–4 images → default 2x2 grid
  return (
    <div className="grid grid-cols-2 gap-3 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] rounded-2xl overflow-hidden">
      {media.slice(0, 4).map((m, i) => (
        <div
          key={i}
          className={`relative rounded-lg overflow-hidden bg-muted ${
            i < 2 ? "row-span-1" : "row-span-2"
          }`}
        >
          <Image
            src={m.src}
            alt={`img ${i}`}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      ))}
    </div>
  );
}
