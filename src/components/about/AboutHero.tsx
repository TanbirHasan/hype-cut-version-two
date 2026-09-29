import Image from "next/image";

const photos = [
  { src: "/assets/about/hero-office-1.png", w: 783, h: 742 },
  { src: "/assets/about/hero-office-2.png", w: 1170, h: 742 },
  { src: "/assets/about/hero-office-3.png", w: 783, h: 742 },
];

/** Shared inner-page hero (breadcrumb pill, headline, intro). `photos` adds the blob-masked office row (About only). */
export default function AboutHero({
  crumb = "Home / About us",
  photos: showPhotos = true,
}: {
  crumb?: string;
  photos?: boolean;
}) {
  return (
    <section className="container-x flex flex-col items-center gap-10 text-center md:gap-14">
      <p className="flex h-12 items-center rounded-full bg-[#acd8d5] px-5 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-ink">
        {crumb}
      </p>

      <div className="flex flex-col items-center gap-8 md:gap-12">
        <h1 className="max-w-[968px] font-display text-[clamp(38px,6.94vw,100px)] font-bold leading-none tracking-[-0.04em] text-plum">
          We build YouTube
          <br className="hidden min-[1800px]:block" /> content people want
          <br className="hidden min-[1800px]:block" /> to watch.
        </h1>
        <p className="max-w-[934px] text-[clamp(17px,1.67vw,24px)] font-medium leading-[1.5] tracking-[-0.015em] text-ink/80">
          Hypecut is a YouTube content and growth agency helping creators,
          founders, and brands turn their ideas into meaningful, engaging, and
          high-performing content.
        </p>
      </div>

      {/* Blob-masked office photos, 2× exports of the Figma mask groups */}
      {showPhotos && (
        <div className="grid w-full max-w-[1416px] gap-6 md:grid-cols-[391.5fr_585fr_391.5fr] md:items-center">
          {photos.map((p, i) => (
            <Image
              key={p.src}
              src={p.src}
              alt=""
              width={p.w}
              height={p.h}
              priority={i === 1}
              className={`mx-auto h-auto w-full ${i === 1 ? "max-w-[585px]" : "max-w-[392px] max-md:hidden"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
