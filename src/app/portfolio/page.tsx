import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Hypecut",
  description:
    "Browse YouTube content created by Hypecut for creators, brands, and businesses.",
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        <div className="bg-blush pt-6 pb-[clamp(56px,6.25vw,120px)]">
          <div className="flex flex-col gap-[clamp(64px,9.72vw,140px)]">
            <Header />
            <AboutHero crumb="Home / Portfolio" photos={false} />
          </div>
        </div>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
