import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { variant?: "solid" | "outline" };

/** Pill button: 32/20 padding, 20px Inter Medium — solid pink or 2px pink outline. */
export default function Button({ variant = "solid", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-4 text-[clamp(16px,1.39vw,20px)] font-medium leading-[1.21] tracking-[-0.015em] text-ink whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 md:px-8 md:py-5";
  const styles =
    variant === "solid" ? "bg-pink" : "border-2 border-pink bg-transparent";
  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}
