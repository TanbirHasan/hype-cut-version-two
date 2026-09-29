import Image from "next/image";
import Button from "../Button";

/** Faro 700, 100px / 100px, -4% tracking (fluid: hits 100px at a 1440px viewport). */
const h1 =
  "font-display font-bold text-plum text-[clamp(32px,6.94vw,100px)] leading-none tracking-[-0.04em]";

export default function Hero() {
  return (
    <section className="container-x flex flex-col items-center gap-10 text-center md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <h1 className={`${h1} flex flex-col items-center gap-[2px]`}>
          <span>Turn your ideas</span>
          <span className="flex flex-wrap items-center justify-center gap-x-[0.24em]">
            <span>into videos</span>
            <Image
              src="/assets/home/video-thumb.png"
              alt=""
              width={138}
              height={100}
              className="h-[1em] w-[1.38em] rounded-[0.32em] object-cover"
            />
            <span>people</span>
          </span>
          <span>can&apos;t ignore.</span>
        </h1>
        <p className="max-w-[934px] text-[clamp(17px,1.67vw,24px)] font-medium leading-[1.5] tracking-[-0.015em] text-ink/80">
          Hypecut helps creators, founders, and brands grow on YouTube with
          strategy, storytelling, editing, animation, and high-performing
          content.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="#book" className="min-w-[252px] md:h-[70px]">
          Book a Strategy Call
        </Button>
        <Button href="/portfolio" variant="outline" className="min-w-[252px] md:h-[70px]">
          Explore Our Work
        </Button>
      </div>
    </section>
  );
}
