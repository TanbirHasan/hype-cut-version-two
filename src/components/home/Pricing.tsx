import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BOOK_HREF, WAITLIST_HREF } from "@/lib/links";

type Item = { t: string; icon: "check" | "plus" };

/** Text with the Figma hard line breaks, honoured from lg up (fluid wrapping below). */
function Lines({
  children,
  wide = false,
}: {
  children: string;
  /** true = break from lg up (narrow blocks); false = only on very wide screens where the plan cards are 712px */
  wide?: boolean;
}) {
  const lines = children.split("\n");
  return (
    <>
      {lines.map((l, i) => (
        <span
          key={i}
          className={
            wide
              ? "lg:block lg:whitespace-nowrap"
              : "min-[1800px]:block min-[1800px]:whitespace-nowrap"
          }
        >
          {l}
          {i < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function Feature({ item, gap }: { item: Item; gap?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${gap ?? ""}`}>
      <Image
        src={`/assets/home/icon-${item.icon}.svg`}
        alt=""
        width={22}
        height={22}
        className="shrink-0"
      />
      <span>{item.t}</span>
    </span>
  );
}

const c = (t: string): Item => ({ t, icon: "check" });
const p = (t: string): Item => ({ t, icon: "plus" });

function FeatureList({ rows, gap }: { rows: Item[][]; gap: string }) {
  return (
    <ul className="flex flex-col gap-1 text-[clamp(16px,1.39vw,20px)] font-semibold leading-8 tracking-[-0.015em] text-ink">
      {rows.map((row, i) => (
        <li key={i} className={`flex flex-wrap items-center ${gap}`}>
          {row.map((it) => (
            <Feature key={it.t} item={it} />
          ))}
        </li>
      ))}
    </ul>
  );
}

const title = "font-display font-bold text-ink";
const sub =
  "font-display text-[clamp(22px,2.22vw,32px)] font-bold leading-tight text-ink";
const desc =
  "text-[clamp(16px,1.39vw,20px)] font-semibold leading-8 tracking-[-0.015em] text-ink/80";

function Header({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-2">
      <h3 className={`${title} text-[clamp(30px,3.33vw,48px)] leading-none`}>
        {name}
      </h3>
      <p className={`${title} text-[clamp(22px,2.5vw,36px)] leading-[0.89]`}>
        {price}
      </p>
    </div>
  );
}

function PlanCta({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="flex h-[72px] w-full items-center justify-center rounded-full bg-pink text-base font-semibold leading-[1.21] tracking-[-0.015em] text-ink transition-transform hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

const steps = [
  {
    n: 1,
    title: "It starts with strategy.",
    body: 'We dive headfirst into your brand, content, and goals. Our team will\ndig up all the "competing" channels and see what videos have been\nworking for them. This helps us understand how to make your\nchannel uniquely yours.',
  },
  {
    n: 2,
    title: "We create concepts and then scripts. If you\nneed them.",
    body: "We generate endless content ideas based on your channel strategy.\nWe work with you to narrow down to the ideas that will perform the\nbest and create scripts for your voice & tone.",
  },
  {
    n: 3,
    title: "You film. We edit. It's magic.",
    body: "All you have to do is press record. We take the video and turn it into\nthe perfectly paced, edited, and animated YouTube video. This is\nwhat we're best at.",
  },
  {
    n: 4,
    title: "Then it's Perfectly Packaged and ready for\npublishing",
    body: "We design the perfect thumbnail, write an SEO-rich description,\ncreate all the right cards and end screen, and all the meta data the\nYouTube engine desires. Perfectly Packaged and Published!",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-blush px-[clamp(12px,2.08vw,40px)] py-[clamp(48px,6.25vw,120px)]"
    >
      <div className="mx-auto flex max-w-[1840px] flex-col items-center gap-[clamp(56px,6.94vw,100px)] rounded-3xl bg-[#003e25] px-[clamp(20px,6.25vw,120px)] py-[clamp(56px,10.28vw,148px)]">
        <h2 className="relative text-center font-display text-[clamp(32px,5vw,72px)] font-bold leading-[1.083] text-white/90">
          Get a world-class YouTube
          <br /> team starting at $4,999/mo
          <Image
            src="/assets/home/price-arc.svg"
            alt=""
            width={317}
            height={91}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[73px] hidden max-w-none translate-x-[119px] xl:block"
          />
        </h2>

        <div className="flex w-full max-w-[1600px] flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Starter */}
            <article className="flex flex-col justify-between gap-9 rounded-3xl bg-blush p-6 md:p-10 lg:min-h-[764px]">
              <div className="flex flex-col gap-9">
                <Header name="Starter" price="$4,999/mo" />
                <p className={sub}>Get 20 editing hours per week</p>
                <p className={desc}>
                  <Lines>
                    {
                      "Get access to one of our editors for 20 hours per week. One\nvideo request at a time."
                    }
                  </Lines>
                </p>
                <FeatureList
                  gap="gap-[10px]"
                  rows={[
                    [c("Video Editing")],
                    [c("Expert YouTube Producer")],
                    [c("Slack Access")],
                    [c("No Contracts")],
                    [c("Pause or Cancel Anytime")],
                  ]}
                />
              </div>
              <div className="flex flex-col gap-[72px]">
                <p className={desc}>
                  Additional services available à la carte.
                </p>
                <PlanCta href={WAITLIST_HREF}>Join the Waitlist</PlanCta>
              </div>
            </article>

            {/* Creator */}
            <article className="flex flex-col justify-between gap-9 rounded-3xl bg-blush p-6 md:p-10 lg:min-h-[764px]">
              <div className="flex flex-col gap-9">
                <Header name="Creator" price="$10,000/mo" />
                <p className={sub}>Get up to 6 videos per month</p>
                <p className={desc}>
                  <Lines>
                    {
                      "Work with our entire YouTube team to create up to 6 videos per\nmonth. Go from idea generation, to scriptwriting, to editing, and\nthen packaging."
                    }
                  </Lines>
                </p>
                <FeatureList
                  gap="gap-[10px]"
                  rows={[
                    [p("Dedicated Video Editor")],
                    [p("Animation")],
                    [p("Script Writing")],
                    [p("Perfect Packaging Process")],
                    [p("Thumbnail Design"), p("Titles"), p("Packaging")],
                    [p("24/7 Support")],
                    [c("Expert YouTube Producer")],
                    [c("Pause or Cancel Anytime")],
                  ]}
                />
              </div>
              <PlanCta href={WAITLIST_HREF}>Join the Waitlist</PlanCta>
            </article>
          </div>

          {/* The Studio */}
          <article className="relative flex flex-col gap-12 rounded-3xl bg-blush p-6 md:p-10 min-[1500px]:min-h-[702px]">
            <div className="flex flex-col gap-9">
              <Header name="The Studio" price="Starts at $14,000/mo" />
              <p className={sub}>Get your own YouTube team</p>
              <p className={desc}>
                <Lines>
                  {
                    "No gimmicks here. We'll build you an entire YouTube team\nthat's expertly managed by us. This is the ultimate \"done\nfor you\" service available for YouTube."
                  }
                </Lines>
              </p>
              <FeatureList
                gap="gap-2"
                rows={[
                  [p("Youtube Growth Strategy")],
                  [p("Weekly Consulting Calls"), p("Full-time Video Editors")],
                  [p("Script Writing"), p("Perfect Packaging Process")],
                  [c("Thumbnail Design"), c("Titles"), c("Packaging")],
                  [c("No Contracts")],
                  [c("24/7 Support"), c("Expert YouTube Producer")],
                ]}
              />
            </div>
            <Link
              href={BOOK_HREF}
              className="inline-flex h-[70px] w-fit items-center justify-center rounded-full bg-pink px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Book a call
            </Link>
            <Image
              src="/assets/home/studio-team.png"
              alt=""
              width={586}
              height={450}
              className="mx-auto h-auto w-full max-w-[586px] min-[1500px]:absolute min-[1500px]:right-[184px] min-[1500px]:top-[140px] min-[1500px]:mx-0"
            />
          </article>
        </div>

        {/* process */}
        <ol className="flex flex-col items-center gap-[clamp(48px,6.94vw,100px)]">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col items-center gap-6 text-center"
            >
              <Image
                src={`/assets/home/step-${s.n}.svg`}
                alt={String(s.n)}
                width={77}
                height={71}
                className="-my-[2.5px]"
              />
              <h3 className="font-display text-[clamp(24px,2.78vw,40px)] font-bold leading-[1.2] text-[#f5f5dc]">
                <Lines wide>{s.title}</Lines>
              </h3>
              <p className="text-[clamp(16px,1.67vw,24px)] font-medium leading-[1.33] tracking-[-0.015em] text-[#ffebf2]/70">
                <Lines wide>{s.body}</Lines>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
