import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Showcase from "@/components/home/Showcase";
import Doodles from "@/components/home/Doodles";
import DoneForYou from "@/components/home/DoneForYou";
import Features from "@/components/home/Features";
import Works from "@/components/home/Works";
import Testimonials from "@/components/home/Testimonials";
import Approach from "@/components/home/Approach";
import Pricing from "@/components/home/Pricing";
import Brands from "@/components/home/Brands";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* Section 1 — 1920×4980, blush background */}
        <div className="relative overflow-hidden bg-blush pt-6 pb-[clamp(56px,6.04vw,116px)]">
          <div className="flex flex-col gap-[clamp(80px,11.46vw,220px)]">
            <div className="flex flex-col gap-[clamp(64px,9.72vw,140px)]">
              <Header />
              <Hero />
            </div>
            <Showcase />
            <Doodles />
            <DoneForYou />
          </div>
        </div>
        <Features />
        <Works />
        <Testimonials />
        <Approach />
        <Pricing />
        <Brands />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
