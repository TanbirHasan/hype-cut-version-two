import Image from "next/image";
import Frameworks from "./Frameworks";

const big =
  "font-display font-bold text-ink text-[clamp(30px,5vw,72px)] leading-[1.0833]";
/** the 74×74 grey rounded placeholder chips that sit inline in the Figma headline */
const chip =
  "inline-block size-[1.03em] shrink-0 rounded-2xl bg-[#d9d9d9] align-bottom";

export default function Approach() {
  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="container-x flex flex-col gap-[clamp(64px,6.25vw,120px)]">
        {/* headline */}
        <div className="relative">
          <div className="pointer-events-none relative hidden h-[135px] md:block">
            <p className="absolute left-[664px] top-0 text-xl font-medium leading-[1.21] tracking-[-0.015em] text-ink/80 max-xl:left-[45%]">
              Hear from our PTYA customers
            </p>
            <Image
              src="/assets/home/arrow-doodle.svg"
              alt=""
              width={95}
              height={110}
              aria-hidden
              className="absolute left-[544px] top-[13.6px] max-w-none max-xl:left-[35%]"
            />
          </div>
          <div className="flex flex-col gap-[clamp(40px,5.56vw,80px)]">
          <div className="flex flex-col gap-3">
            <p className={`${big} flex flex-wrap items-end gap-x-4`}>
              <span>We&apos;ve taught 2</span>
              <span aria-hidden className={chip} />
              <span>over 3,000 creators</span>
            </p>
            <p className={`${big} flex flex-wrap items-end gap-x-4`}>
              <span>how to</span>
              <span aria-hidden className={chip} />
              <span>grow on YouTube.</span>
              <span aria-hidden className={chip} />
            </p>
          </div>
          <p className={big}>Now we can do it for you.</p>
          </div>
        </div>

        <Frameworks />

        {/* closing statement + illustration */}
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="flex max-w-[757px] flex-col gap-[clamp(48px,6.25vw,120px)]">
            <h2 className="font-display text-[clamp(38px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
              It doesn&apos;t matter
              <br /> if you have O
              <br /> subscribers or
              <br /> 1,000,000+
            </h2>
            <p className="font-display text-[clamp(22px,2.78vw,40px)] font-bold leading-[1.2] text-ink lg:whitespace-nowrap">
              We&apos;ll help create valuable content,
              <br className="hidden md:block" /> consistently, that takes your audience to
              <br className="hidden md:block" /> new heights.
            </p>
          </div>
          <Image
            src="/assets/home/thumbs-up-girl.svg"
            alt=""
            width={606}
            height={606}
            className="h-auto w-full max-w-[606px] self-center lg:self-auto"
          />
        </div>
      </div>
    </section>
  );
}
