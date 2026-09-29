"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Card geometry comes straight from Figma (card 439×700). The photo is a larger rect than the card
 * (overflow clipped), so it's positioned in % of the card: [left, top, width, height].
 */
const cards = [
  {
    src: "/assets/home/work-1.png",
    rect: [-2.73, -8.86, 105.47, 117.86],
    title: ["How We Built a", "Million-Dollar Business"],
    tags: "Strategy · Editing · Packaging",
  },
  {
    src: "/assets/home/work-2.png",
    rect: [-2.28, -8.29, 104.56, 116.71],
    title: ["How We Built a", "Million-Dollar Business"],
    tags: "Strategy · Editing · Packaging",
  },
  {
    src: "/assets/home/work-3.png",
    rect: [-7.06, -13.43, 113.9, 127],
    title: ["The Truth About Growing on YouTube"],
    tags: "Concept · Scripting · Editing",
  },
  {
    src: "/assets/home/work-4.png",
    rect: [-4.78, -11.14, 109.57, 122.43],
    title: ["Building a Brand From Zero"],
    tags: "Strategy · Production · Animation",
  },
  {
    src: "/assets/home/work-5.png",
    rect: [-6.38, -12.71, 112.53, 125.43],
    title: ["What Nobody Tells You About Business"],
    tags: "Editing · Motion Design · Thumbnail CTA",
  },
];

const tabs = ["Reels", "YT Videos", "Saas Videos"];

export default function Works() {
  const [tab, setTab] = useState(0);

  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="flex flex-col items-center gap-[clamp(48px,6.25vw,120px)]">
        <div className="container-x flex flex-col items-center gap-8 text-center">
          <div className="flex max-w-[856px] flex-col items-center gap-8">
            <h2 className="font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
              Made to be watched.
            </h2>
            <p className="max-w-[664px] text-[clamp(17px,1.67vw,24px)] font-medium leading-[1.5] tracking-[-0.015em] text-ink/80">
              Take a look at some of the content we&apos;ve created for creators,
              brands, and businesses.
            </p>
          </div>
          <div role="tablist" className="flex flex-wrap justify-center gap-3">
            {tabs.map((t, i) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`h-[clamp(52px,4.86vw,70px)] min-w-[clamp(130px,13.6vw,196px)] rounded-full px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-plum transition-colors ${
                  tab === i ? "bg-pink" : "bg-white hover:bg-pink/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* strip is 2291px wide in the design and centred, bleeding off both edges */}
        <div className="no-scrollbar w-full snap-x overflow-x-auto xl:overflow-hidden">
          <ul className="flex w-max gap-6 px-5 xl:relative xl:left-1/2 xl:-translate-x-1/2 xl:px-0">
            {cards.map((c, i) => (
              <li
                key={i}
                className="relative aspect-[439/700] w-[min(439px,78vw)] shrink-0 snap-center overflow-hidden rounded-3xl bg-white [container-type:inline-size]"
              >
                <div
                  className="absolute"
                  style={{
                    left: `${c.rect[0]}%`,
                    top: `${c.rect[1]}%`,
                    width: `${c.rect[2]}%`,
                    height: `${c.rect[3]}%`,
                  }}
                >
                  <Image
                    src={c.src}
                    alt=""
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(102,102,102,0)_43.7%,#000_95.6%)] opacity-50" />
                </div>
                <div className="absolute left-[5.47%] top-[77.14%] flex w-[88.84%] flex-col gap-[2.73cqw]">
                  <h3 className="font-display text-[9.11cqw] font-bold leading-[1.1] tracking-[-0.04em] text-[#f6eb6b]">
                    {c.title.map((l, k) => (
                      <span key={k} className="block whitespace-nowrap">
                        {l}
                      </span>
                    ))}
                  </h3>
                  <p className="text-[4.56cqw] leading-[1.8] tracking-[-0.015em] text-white">
                    {c.tags}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex h-[70px] items-center justify-center rounded-full bg-[#003e25] px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-white transition-transform hover:-translate-y-0.5"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
