import Image from "next/image";

/** Big video still + the "great systems" statement. Pink curve runs behind the video. */
export default function Showcase() {
  return (
    <div className="relative">
      <div className="container-x relative flex flex-col items-center gap-16 md:gap-[clamp(120px,17.19vw,330px)]">
        <div className="relative w-full">
          <Image
            src="/assets/home/curve-video.svg"
            alt=""
            width={1282}
            height={1650}
            aria-hidden
            className="pointer-events-none absolute left-[174px] top-[-114px] z-0 hidden max-w-none xl:block"
          />
          <div className="relative z-10 aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl">
            <Image
              src="/assets/home/video-thumb.png"
              alt="Hypecut showreel"
              fill
              sizes="(min-width: 1440px) 1440px, 100vw"
              className="object-cover"
              priority
            />
            <button
              type="button"
              aria-label="Play showreel"
              className="absolute left-1/2 top-[47.8%] w-[clamp(140px,21.4%,308px)] -translate-x-1/2 transition-transform hover:scale-105"
            >
              <Image
                src="/assets/home/video-play-overlay.svg"
                alt=""
                width={308}
                height={108}
                className="h-auto w-full"
              />
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[949px]">
          <h2 className="text-center font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
            Great channels are built with great systems.
          </h2>
          <Image
            src="/assets/home/underline-systems.svg"
            alt=""
            width={571}
            height={31}
            aria-hidden
            className="pointer-events-none absolute left-[calc(50%-340px)] top-[161px] hidden max-w-none lg:block"
          />
        </div>
      </div>
    </div>
  );
}
