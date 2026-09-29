import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Brands from "@/components/home/Brands";
import AboutHero from "@/components/about/AboutHero";
import Partner from "@/components/about/Partner";
import Vision from "@/components/about/Vision";

export const metadata: Metadata = {
  title: "About us — Hypecut",
  description:
    "Hypecut is a YouTube content and growth agency helping creators, founders, and brands turn their ideas into meaningful, engaging, and high-performing content.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="bg-blush pt-6 pb-[clamp(56px,6.25vw,120px)]">
          <div className="flex flex-col gap-[clamp(64px,9.72vw,140px)]">
            <Header />
            <AboutHero />
          </div>
        </div>
        <Partner />
        <Vision />
        <Testimonials />
        <Faq />
        <Brands />
      </main>
      <Footer />
    </>
  );
}
