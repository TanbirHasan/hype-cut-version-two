import Image from "next/image";
import Link from "next/link";
import { BOOK_HREF } from "@/lib/links";

const rows = [
  {
    n: "01",
    title: "Strategy & Producing",
    heading: ["Build a smarter", "content strategy."],
    body: "We research your audience, niche, competitors, and goals to create a clear content direction—and manage the process from idea to delivery.",
    img: "/assets/home/feat-1.svg",
  },
  {
    n: "02",
    title: "Concepts & Scripting",
    heading: ["Ideas worth clicking on."],
    body: "We develop original video concepts, hooks, and scripts designed to capture attention and keep your audience watching.",
    img: "/assets/home/feat-2.svg",
  },
  {
    n: "03",
    title: "Video Editing & Animation",
    heading: ["Turn footage into stories."],
    body: "Our editors transform raw footage into engaging videos using pacing, motion graphics, animation, sound design, and visual storytelling.",
    img: "/assets/home/feat-3.svg",
  },
  {
    n: "04",
    title: "Thumbnail Design & Optimization",
    heading: ["Make the click count."],
    body: "We create attention-grabbing thumbnails and optimize your video packaging to help your content compete in a crowded YouTube feed.",
    img: "/assets/home/feat-4.svg",
  },
];

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="bg-blush px-[clamp(12px,2.08vw,40px)] py-[clamp(12px,2.08vw,40px)]"
    >
      <div className="mx-auto flex max-w-[1840px] flex-col items-center gap-[clamp(64px,8.33vw,120px)] rounded-3xl bg-pink px-[clamp(20px,6.25vw,120px)] py-[clamp(56px,10.28vw,148px)]">
        {/* intro */}
        <div className="flex max-w-[856px] flex-col items-center gap-[clamp(40px,5.56vw,80px)] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
              Everything behind a video that performs.
            </h2>
            <p className="text-[clamp(17px,1.67vw,24px)] font-medium leading-[1.5] tracking-[-0.015em] text-ink/80">
              From the first idea to the final upload, we handle the creative
              work that turns your YouTube channel into a serious growth engine.
            </p>
          </div>
          <Link
            href={BOOK_HREF}
            className="inline-flex h-[70px] items-center justify-center rounded-full bg-[#003e25] px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-white transition-transform hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        {/* feature rows */}
        <div className="flex w-full max-w-[1600px] flex-col gap-[clamp(64px,8.33vw,120px)]">
          {rows.map((r, i) => (
            <article
              key={r.n}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-[clamp(48px,8.33vw,120px)]"
            >
              <div
                className={`flex flex-col justify-center gap-[clamp(32px,3.89vw,56px)] ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-[clamp(16px,2.22vw,32px)]">
                  <span className="relative grid size-[clamp(64px,6.94vw,100px)] shrink-0 place-items-center">
                    <Image
                      src="/assets/home/star.svg"
                      alt=""
                      fill
                      aria-hidden
                      className="object-contain"
                    />
                    <span className="relative font-display text-[clamp(20px,2.22vw,32px)] font-bold leading-[1.125] text-white">
                      {r.n}
                    </span>
                  </span>
                  <h3 className="font-display text-[clamp(24px,2.78vw,40px)] font-bold leading-[1.2] text-ink min-[1800px]:whitespace-nowrap">
                    {r.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-display text-[clamp(34px,4.44vw,64px)] font-semibold leading-none tracking-[-0.04em] text-plum">
                    {r.heading.map((line, k) => (
                      <span key={k} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="text-[clamp(16px,1.67vw,24px)] font-medium leading-[1.33] tracking-[-0.015em] text-ink/80">
                    {r.body}
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex h-[70px] w-fit items-center justify-center rounded-full bg-[#ffd3e4] px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-[#28213d] transition-transform hover:-translate-y-0.5"
                >
                  Learn More →
                </Link>
              </div>
              <div className={`${i % 2 ? "lg:order-1" : ""}`}>
                <Image
                  src={r.img}
                  alt=""
                  width={740}
                  height={740}
                  className="mx-auto h-auto w-full max-w-[740px]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
