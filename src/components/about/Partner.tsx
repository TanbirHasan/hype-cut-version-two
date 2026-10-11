import Image from "next/image";
import Link from "next/link";
import { BOOK_HREF } from "@/lib/links";

/** The mint "Strategy & Growth" card, composed from the Figma vectors (352×496 box). */
function StrategyCard() {
  return (
    <div className="relative h-[496px] w-[352px] shrink-0">
      <Image src="/assets/about/vision-blob-teal.svg" alt="" width={352} height={472} className="absolute left-0 top-[0.2px] max-w-none" />
      <Image src="/assets/about/vision-wave-pink.svg" alt="" width={352} height={245} className="absolute left-0 top-[224.4px] max-w-none" />
      <Image src="/assets/about/vision-wave-mint.svg" alt="" width={352} height={245} className="absolute left-0 top-[228.1px] max-w-none" />
      <Image src="/assets/about/vision-line.svg" alt="" width={2} height={277} className="absolute left-[242.5px] top-[191.7px] max-w-none" />
      <Image src="/assets/about/vision-pin.svg" alt="" width={32} height={32} className="absolute left-[227px] top-[173.2px] max-w-none" />
      <Image src="/assets/about/vision-badge.svg" alt="" width={72} height={72} className="absolute left-[145.5px] top-[426px] max-w-none" />
      <Image src="/assets/about/vision-dot.svg" alt="" width={24} height={24} className="absolute left-[42.9px] top-[68.4px] max-w-none" />
      <div className="absolute left-[79px] top-[64px] w-[256px]">
        <p className="font-display text-2xl font-bold leading-8 tracking-[-0.0133em] text-black">
          Strategy &amp; Growth
        </p>
        <p className="mt-3 text-lg font-medium leading-6 tracking-[-0.015em] text-ink/80">
          Your channel, built with purpose.
        </p>
      </div>
    </div>
  );
}

export default function Partner() {
  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="container-x flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-[clamp(40px,4.17vw,80px)]">
        <div className="flex flex-col gap-12 lg:max-w-[600px]">
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-[clamp(34px,4.375vw,63px)] font-bold leading-[1.143] tracking-[-0.04em] text-plum">
              Your Creative Partner For Building High-Impact YouTube Content
            </h2>
            <p className="text-[clamp(17px,1.67vw,24px)] font-medium leading-[1.5] tracking-[-0.015em] text-ink/80">
              We help creators, founders, and growing brands turn ideas into
              engaging YouTube content that builds audiences, strengthens
              brands, and drives growth.
            </p>
          </div>
          <Link
            href={BOOK_HREF}
            className="inline-flex h-[70px] w-fit items-center justify-center rounded-full bg-[#003e25] px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-white transition-transform hover:-translate-y-0.5"
          >
            Start a Project ↗
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-[420px]:[zoom:0.8]">
          <StrategyCard />
          <div className="flex w-[384px] max-w-full flex-col gap-2">
            <div className="relative h-[430px] w-[384px] max-w-full">
              <Image
                src="/assets/about/portrait-blob.svg"
                alt=""
                width={384}
                height={430}
                aria-hidden
                className="absolute inset-0 max-w-none"
              />
              <Image
                src="/assets/about/hero-portrait.png"
                alt="Hypecut team member"
                width={354}
                height={430}
                className="absolute left-[15px] top-0 max-w-none"
              />
            </div>
            <div className="flex h-[120px] items-center gap-[19px] rounded-[68px] bg-[#d5ccff] p-8">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#003e25]">
                <Image src="/assets/about/whatsapp.svg" alt="" width={24} height={24} />
              </span>
              <div className="flex flex-col gap-[7px]">
                <p className="whitespace-nowrap text-lg font-medium leading-6 tracking-[-0.015em] text-ink/80">
                  Let&apos;s talk about your channel.
                </p>
                <p className="font-display text-2xl font-bold leading-[0.7] tracking-[-0.0133em] text-black">
                  +880 XXX-XXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
