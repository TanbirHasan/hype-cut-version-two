import Image from "next/image";
import Link from "next/link";
import { BOOK_HREF } from "@/lib/links";

const columns = [
  {
    title: "Quick Links",
    links: [
      ["About Us", "/about"],
      ["Projects", "/portfolio"],
      ["Services", "/#how-it-works"],
      ["Blogs", "#"],
      ["Contact", "#"],
      ["Careers", "#"],
    ],
  },
  {
    title: "Services",
    links: [
      ["UXUI Design", "#"],
      ["Website Development", "#"],
      ["Webflow Design", "#"],
      ["Framer Design", "#"],
      ["Brand Design", "#"],
    ],
  },
  {
    title: "Platforms",
    links: [
      ["Webflow", "#"],
      ["Framer", "#"],
      ["Behance", "#"],
      ["Dribbble", "#"],
    ],
  },
];

const socials = [
  ["facebook", "Facebook"],
  ["instagram", "Instagram"],
  ["x", "X"],
  ["linkedin", "LinkedIn"],
];

const legal = ["Terms & Conditions", "Privacy Policy", "Cookies Policy"];

const linkCls =
  "text-[clamp(16px,1.39vw,20px)] leading-8 tracking-[-0.015em] text-white/80 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-blush pt-[clamp(40px,6.77vw,130px)]">
      <div className="relative overflow-hidden bg-[#001a0f] pb-[clamp(120px,16.67vw,320px)]">
        {/* blurred green / blue glow band, exactly as exported from Figma (1920×443) */}
        <Image
          src="/assets/home/footer-glow.png"
          alt=""
          width={1920}
          height={443}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"
        />

        <div className="container-x relative">
          <div className="grid gap-12 pt-[70px] lg:grid-cols-[610px_137px_137px_137px] lg:gap-x-[100px] max-xl:lg:grid-cols-[1fr_137px_137px_137px] max-xl:lg:gap-x-10">
            <div className="flex flex-col">
              <Image
                src="/assets/home/logo-white.svg"
                alt="Hypecut"
                width={193}
                height={30}
              />
              <p className="max-w-[389px] py-[30px] text-[clamp(16px,1.39vw,20px)] leading-8 tracking-[-0.015em] text-white/80">
                We help creators, founders, and brands turn ideas into
                high-performing YouTube content.
              </p>
              <Link
                href={BOOK_HREF}
                className="inline-flex h-[70px] w-fit items-center justify-center rounded-full bg-[#ffd3e4] px-8 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-black transition-transform hover:-translate-y-0.5"
              >
                Book an Intro Call
              </Link>
            </div>

            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title} className="flex flex-col gap-6 lg:h-[302px]">
                <p className="whitespace-nowrap font-display text-[clamp(22px,1.94vw,28px)] font-bold leading-[1.286] tracking-[-0.015em] text-white">
                  {c.title}
                </p>
                <ul className="flex flex-col gap-4">
                  {c.links.map(([label, href]) => (
                    <li key={label} className={label === "Website Development" ? "h-14" : "h-7"}>
                      <Link href={href} className={`${linkCls} block ${label === "Website Development" ? "" : "whitespace-nowrap"}`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-[45px] flex flex-col items-start justify-between gap-6 border-t border-white/[0.24] pb-10 pt-[35px] lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <ul className="flex gap-[11px]">
                {socials.map(([f, label]) => (
                  <li key={f}>
                    <Link
                      href="#"
                      aria-label={label}
                      className="grid size-[42px] place-items-center rounded-full bg-[#213934] shadow-[inset_0_0_55px_rgba(199,199,199,0.09)] transition-colors hover:bg-[#2c4a44]"
                    >
                      <Image
                        src={`/assets/home/social-${f}.svg`}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className={linkCls}>© 2026 All rights reserved Olynex.</p>
            </div>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {legal.map((l) => (
                <li key={l}>
                  <Link href="#" className={linkCls}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p
            aria-hidden
            className="mt-8 select-none lg:absolute lg:inset-x-0 lg:top-[clamp(300px,27.86vw,535px)] lg:mt-0 whitespace-nowrap text-center font-bold uppercase leading-[0.93] tracking-[-0.053em] text-[#213934] [font-family:var(--font-inter-display),Inter,Arial,sans-serif] [font-size:clamp(64px,15.78vw,303px)] xl:text-left"
          >
            Hypecut
          </p>
        </div>
      </div>
    </footer>
  );
}
