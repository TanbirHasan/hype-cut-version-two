"use client";

import Image from "next/image";
import { useRef } from "react";

const cards = [
  {
    bg: "bg-[#f6eb6b]",
    icon: "/assets/home/icon-search.svg",
    title: "The Idea",
    body: ["We find the topics, angles, and hooks", "that make your content relevant before", "production even begins."],
  },
  {
    bg: "bg-pink",
    icon: "/assets/home/icon-package.svg",
    title: "The Experience",
    body: ["Strong storytelling, pacing, editing, and", "visual design keep viewers engaged from", "the opening frame to the final moment."],
  },
  {
    bg: "bg-[#c2efbe]",
    icon: "/assets/home/icon-flow.svg",
    title: "The Packaging",
    body: ["Titles and thumbnails are designed", "together with the content to turn", "impressions into clicks."],
  },
];

export default function Frameworks() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="flex w-full flex-col gap-[clamp(32px,5vw,72px)]">
      <div className="flex items-center justify-between gap-x-6 gap-y-4 max-sm:flex-wrap lg:gap-x-[72px]">
        <h3 className="font-display text-[clamp(26px,2.78vw,40px)] font-bold leading-[1.2] text-ink">
          Frameworks
          <br /> powering our approach:
        </h3>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
            className="grid h-14 w-16 place-items-center rounded-full bg-[#ffd3e4]/20 transition-colors hover:bg-[#ffd3e4]/60"
          >
            <Image src="/assets/home/arrow-prev.svg" alt="" width={36} height={36} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="grid h-14 w-16 place-items-center rounded-full bg-pink transition-transform hover:scale-105"
          >
            <Image src="/assets/home/arrow-next.svg" alt="" width={36} height={36} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x gap-6 overflow-x-auto px-5 md:mx-0 md:px-0"
      >
        {cards.map((c) => (
          <li
            key={c.title}
            className={`${c.bg} flex min-h-[336px] w-[min(464px,82vw)] shrink-0 snap-start flex-col gap-8 rounded-3xl p-[clamp(24px,2.78vw,40px)] md:w-auto md:min-w-[300px] md:flex-1`}
          >
            <Image src={c.icon} alt="" width={48} height={48} />
            <h4 className="font-display text-[clamp(26px,2.78vw,40px)] font-bold leading-[1.2] text-ink">
              {c.title}
            </h4>
            <p className="text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.6] tracking-[-0.015em] text-ink/80 min-[1800px]:whitespace-nowrap">
              {c.body.map((l, i) => (
                <span key={i} className="min-[1800px]:block">
                  {l}{" "}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
