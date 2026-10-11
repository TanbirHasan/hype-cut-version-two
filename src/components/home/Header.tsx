"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import { WAITLIST_HREF } from "@/lib/links";

const links = [
  { label: "About us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: " Pricing", href: "/#pricing" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container-x relative z-20">
      <div className="flex h-[60px] items-center justify-between">
        <Link href="/" aria-label="Hypecut home" className="shrink-0">
          <Image
            src="/assets/home/logo.svg"
            alt="Hypecut"
            width={193}
            height={30}
            priority
            className="h-auto w-[140px] md:w-[193px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[20px] font-medium leading-6 tracking-[-0.015em] text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={WAITLIST_HREF} className="max-[439px]:hidden md:h-[60px]">
            Join the Waitlist
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-[68px] flex flex-col gap-1 rounded-3xl bg-blush p-4 shadow-[0_12px_40px_rgba(51,18,29,0.15)] lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium text-ink/80 hover:bg-pink/20"
            >
              {l.label}
            </Link>
          ))}
          <Button href={WAITLIST_HREF} className="mt-2 min-[440px]:hidden">
            Join the Waitlist
          </Button>
        </nav>
      )}
    </header>
  );
}
