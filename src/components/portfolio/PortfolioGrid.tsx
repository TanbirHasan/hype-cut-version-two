"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Card is 464×700 in Figma. The photo is a bigger rect than the card (clipped), given in % of the card:
 * [left, top, width, height]. A flat 20% black wash sits on the photo.
 */
const A = { title: ["How We Built a", "Million-Dollar Business"], tags: "Strategy · Editing · Packaging" };
const B = { title: ["The Truth About Growing on YouTube"], tags: "Concept · Scripting · Editing" };
const C = { title: ["Building a Brand From Zero"], tags: "Strategy · Production · Animation" };

const cards = [
  { ...A, src: "/assets/portfolio/work-1.webp", rect: [-2.59, -12.0, 105.17, 124.14] },
  { ...B, src: "/assets/portfolio/work-2.webp", rect: [-6.47, -13.43, 107.76, 127] },
  { ...C, src: "/assets/portfolio/work-3.webp", rect: [-1.72, -11.14, 103.66, 122.43] },
  { ...A, src: "/assets/portfolio/work-4.webp", rect: [-2.59, -12.0, 105.17, 124.14] },
  { ...B, src: "/assets/portfolio/work-5.webp", rect: [-6.47, -4.86, 107.76, 127] },
  { ...C, src: "/assets/portfolio/work-6.webp", rect: [-1.72, -11.14, 103.66, 122.43] },
  { ...A, src: "/assets/portfolio/work-7.webp", rect: [-2.59, -12.14, 105.39, 124.57] },
  { ...B, src: "/assets/portfolio/work-8.webp", rect: [-6.47, -13.43, 107.76, 127] },
  { ...C, src: "/assets/portfolio/work-9.webp", rect: [-1.72, -11.14, 103.66, 122.43] },
];

const tabs = ["Reels", "YT Videos", "Saas Videos"];
const pages = ["01", "02", "03"];

const pill =
  "inline-flex h-[clamp(52px,4.86vw,70px)] items-center justify-center rounded-full text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] transition-colors";

export default function PortfolioGrid() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);

  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="container-x flex flex-col gap-[clamp(40px,4.17vw,80px)]">
        <div role="tablist" className="flex flex-wrap gap-3">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`${pill} min-w-[clamp(130px,13.6vw,196px)] px-8 text-plum ${
                tab === i ? "bg-pink" : "bg-white hover:bg-pink/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <li
              key={i}
              className="group relative mx-auto aspect-[464/700] w-full max-w-[464px] overflow-hidden rounded-3xl bg-white [container-type:inline-size]"
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
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <button
                type="button"
                aria-label={`Play: ${c.title.join(" ")}`}
                className="absolute left-1/2 top-[45%] grid size-[15.09cqw] -translate-x-1/2 place-items-center rounded-[56px] bg-white pl-[0.9cqw] transition-transform hover:scale-110"
              >
                <Image
                  src="/assets/portfolio/play-icon.svg"
                  alt=""
                  width={21}
                  height={24}
                  className="w-[4.53cqw]"
                />
              </button>

              <div className="absolute left-[5.39%] top-[77.14%] flex w-[84.05%] flex-col gap-[2.59cqw]">
                <h3 className="font-display text-[8.62cqw] font-bold leading-[1.1] tracking-[-0.04em] text-[#f6eb6b]">
                  {c.title.map((l, k) => (
                    <span key={k} className={`block ${c.title.length > 1 ? "whitespace-nowrap" : ""}`}>
                      {l}
                    </span>
                  ))}
                </h3>
                <p className="text-[4.31cqw] leading-[1.8] tracking-[-0.015em] text-white">{c.tags}</p>
              </div>
            </li>
          ))}
        </ul>

        <nav aria-label="Pagination" className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`${pill} bg-white px-10 text-plum hover:bg-pink/40 disabled:pointer-events-none disabled:text-plum/30`}
          >
            Back
          </button>
          {pages.map((n, i) => (
            <button
              key={n}
              onClick={() => setPage(i)}
              aria-current={page === i ? "page" : undefined}
              className={`${pill} px-8 text-plum ${page === i ? "bg-pink" : "bg-white hover:bg-pink/40"}`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            className={`${pill} bg-[#003e25] px-10 text-white hover:bg-[#0a5233]`}
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
