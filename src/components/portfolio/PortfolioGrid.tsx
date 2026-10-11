"use client";

import Image from "next/image";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Reels — Figma "Portfolio" frame 1 (4083:12806)                      */
/* 3 columns of 464×700 portrait cards, title overlaid on the photo.   */
/* The photo is a bigger rect than the card (clipped), given in % of   */
/* the card: [left, top, width, height]. A flat 20% black wash on top. */
/* ------------------------------------------------------------------ */
const A = { title: ["How We Built a", "Million-Dollar Business"], tags: "Strategy · Editing · Packaging" };
const B = { title: ["The Truth About Growing on YouTube"], tags: "Concept · Scripting · Editing" };
const C = { title: ["Building a Brand From Zero"], tags: "Strategy · Production · Animation" };

const reels = [
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

/* ------------------------------------------------------------------ */
/* YT Videos — Portfolio frame 2 (4099:15173)                          */
/* Saas Videos — Portfolio frame 3 (4099:15442)                        */
/* 2 columns of 708×450 landscape thumbnails, title + tags below.      */
/* Every thumbnail uses the same crop (806×468 photo in a 708×450      */
/* frame, 20% wash).                                                   */
/* ------------------------------------------------------------------ */
type Video = { src: string; title: string; tags: string };

const ytVideos: Video[] = [
  { src: "/assets/portfolio/yt-1.webp", title: "Making Every Family Trip Worth Remembering", tags: "Strategy · Editing · Storytelling" },
  { src: "/assets/portfolio/yt-2.webp", title: "A Day You’ll Wish You Could Relive", tags: "Concept · Editing · Color Grading" },
  { src: "/assets/portfolio/yt-3.webp", title: "Built for the Road. Made for the Adventure.", tags: "Production · Editing · Motion Design" },
  { src: "/assets/portfolio/yt-4.webp", title: "Chasing Waves. Pushing Limits.", tags: "Strategy · Editing · Action Storytelling" },
  { src: "/assets/portfolio/yt-5.webp", title: "From Fresh Ingredients to Something Delicious", tags: "Concept · Food Video · Editing" },
  { src: "/assets/portfolio/yt-6.webp", title: "The Moments That Make the Journey", tags: "Production · Editing · Color Grading" },
];

const saasVideos: Video[] = [
  { src: "/assets/portfolio/saas-1.webp", title: "How We Turned a Simple Idea Into a High-Performing Video", tags: "Strategy · Editing · Packaging" },
  { src: "/assets/portfolio/saas-2.webp", title: "Building a Product Story People Actually Want to Watch", tags: "Concept · Scriptwriting · Motion Design" },
  { src: "/assets/portfolio/saas-3.webp", title: "From Raw Footage to a Finished YouTube Story", tags: "Video Editing · Animation · Sound Design" },
  { src: "/assets/portfolio/saas-4.webp", title: "Making Complex Ideas Simple Through Video", tags: "Creative Strategy · Editing · Visual Storytelling" },
  { src: "/assets/portfolio/saas-5.webp", title: "A Better Way to Explain Your Product", tags: "SaaS Video · Motion Design · Storytelling" },
  { src: "/assets/portfolio/saas-6.webp", title: "Turning Product Features Into Stories", tags: "Concept · Animation · Video Production" },
];

const tabs = ["Reels", "YT Videos", "Saas Videos"];
const pages = ["01", "02", "03"];

const pill =
  "inline-flex h-[clamp(52px,4.86vw,70px)] items-center justify-center rounded-full text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] transition-colors";

function ReelCard({ c }: { c: (typeof reels)[number] }) {
  return (
    <li className="group relative mx-auto aspect-[464/700] w-full max-w-[464px] overflow-hidden rounded-3xl bg-white [container-type:inline-size]">
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
        <Image src="/assets/portfolio/play-icon.svg" alt="" width={21} height={24} className="w-[4.53cqw]" />
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
  );
}

function VideoCard({ v }: { v: Video }) {
  return (
    <li className="group flex flex-col gap-4">
      <div className="relative aspect-[708/450] w-full overflow-hidden rounded-3xl bg-white [container-type:inline-size]">
        {/* photo rect: -49,-9 · 806×468 inside the 708×450 frame */}
        <div className="absolute left-[-6.92%] top-[-2%] h-[104%] w-[113.84%]">
          <Image
            src={v.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <button
          type="button"
          aria-label={`Play: ${v.title}`}
          className="absolute left-[46.05%] top-[43.78%] grid size-[9.89cqw] min-h-12 min-w-12 place-items-center rounded-full bg-white pl-[0.56cqw] transition-transform hover:scale-110"
        >
          <Image src="/assets/portfolio/play-icon.svg" alt="" width={21} height={24} className="w-[2.97cqw] min-w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display text-[clamp(22px,2.22vw,32px)] font-bold leading-[1.25] tracking-[-0.04em] text-plum">
          {v.title}
        </h3>
        <p className="text-[clamp(15px,1.25vw,18px)] font-medium leading-[1.333] tracking-[-0.015em] text-ink/60">
          {v.tags}
        </p>
      </div>
    </li>
  );
}

export default function PortfolioGrid() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);

  const selectTab = (i: number) => {
    setTab(i);
    setPage(0);
  };

  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="container-x flex flex-col gap-[clamp(40px,4.17vw,80px)]">
        <div role="tablist" aria-label="Portfolio categories" className="flex flex-wrap gap-3">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              id={`portfolio-tab-${i}`}
              aria-selected={tab === i}
              aria-controls="portfolio-panel"
              onClick={() => selectTab(i)}
              className={`${pill} min-w-[clamp(130px,13.6vw,196px)] px-8 text-plum ${
                tab === i ? "bg-pink" : "bg-white hover:bg-pink/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div id="portfolio-panel" role="tabpanel" aria-labelledby={`portfolio-tab-${tab}`}>
          {tab === 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((c, i) => (
                <ReelCard key={i} c={c} />
              ))}
            </ul>
          ) : (
            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
              {(tab === 1 ? ytVideos : saasVideos).map((v) => (
                <VideoCard key={v.src} v={v} />
              ))}
            </ul>
          )}
        </div>

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
