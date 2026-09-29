"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Only the first answer exists in the Figma file; the rest render as non-expanding rows until copy is supplied. */
const items: { q: string; a?: string }[] = [
  {
    q: "What does Hypecut do?",
    a: "Hypecut is a YouTube content and growth agency. We help creators, founders, and brands with strategy, concepts, scripting, editing, animation, thumbnails, and content optimization.",
  },
  { q: "Can you work with a new YouTube channel?" },
  { q: "Do you come up with video ideas?" },
  { q: "Do I need to film the videos myself?" },
  { q: "How long does a video take?" },
  { q: "How do I get started?" },
];

const ring =
  "absolute rounded-full border-[21px] border-[#ffb8d3] size-[636px]";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,623px)_minmax(0,697px)] lg:justify-between lg:gap-[clamp(32px,6.25vw,120px)]">
        <div className="flex min-w-0 flex-col gap-[clamp(40px,4.17vw,80px)]">
          <h2 className="font-display text-[clamp(38px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum lg:whitespace-nowrap">
            Questions? We&apos;ve
            <br /> got answers.
          </h2>

          <div className="relative h-[380px] w-full max-w-[432px] overflow-hidden rounded-2xl bg-[#ffd3e4]">
            <span aria-hidden className={`${ring} left-[-441.5px] top-[-88.5px]`} />
            <span aria-hidden className={`${ring} left-[-261.5px] top-[-388.5px]`} />
            <div className="absolute left-1/2 top-[43px] flex w-[296px] -translate-x-1/2 flex-col items-center gap-8">
              <span aria-hidden className="size-20 rounded-full bg-[#d9d9d9]" />
              <p className="w-full font-display text-[36px] font-bold leading-[1.111] tracking-[-0.015em] text-ink">
                Get started with a<br /> free strategy call!
              </p>
              <Link
                href="#book"
                className="inline-flex h-[70px] items-center justify-center rounded-full bg-[#003e25] px-8 text-[20px] font-medium leading-[1.21] tracking-[-0.015em] text-white transition-transform hover:-translate-y-0.5"
              >
                Book an Intro Call
              </Link>
            </div>
          </div>
        </div>

        <ul className="flex min-w-0 flex-col gap-2">
          {items.map((it, i) => {
            const isOpen = open === i && !!it.a;
            return (
              <li
                key={it.q}
                className={`relative rounded-3xl px-6 py-6 md:px-8 ${isOpen ? "bg-[#ffd3e4]" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  disabled={!it.a}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left disabled:cursor-default"
                >
                  <span className="font-display text-[clamp(20px,1.94vw,28px)] font-bold leading-[1.286] tracking-[-0.015em] text-ink min-[1800px]:whitespace-nowrap">
                    {it.q}
                  </span>
                  <Image
                    src={`/assets/home/faq-${isOpen ? "minus" : "plus"}.svg`}
                    alt=""
                    width={48}
                    height={48}
                    className={isOpen ? "absolute right-6 top-6 md:right-8" : "shrink-0"}
                  />
                </button>
                {isOpen && (
                  <p className="mt-6 max-w-[553px] text-[clamp(16px,1.39vw,20px)] leading-8 tracking-[-0.015em] text-ink/80">
                    {it.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
