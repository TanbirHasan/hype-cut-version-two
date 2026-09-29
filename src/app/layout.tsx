import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// "Inter Display" cut (optical size axis) for the giant footer wordmark
const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Hypecut — Turn your ideas into videos people can't ignore",
  description:
    "Hypecut helps creators, founders, and brands grow on YouTube with strategy, storytelling, editing, animation, and high-performing content.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
