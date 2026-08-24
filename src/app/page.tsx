import { FAQ } from "@/components/FAQ";
import { CallSection } from "@/components/CallSection";
import { Features } from "@/components/Features";
import { FinalCTA, Footer } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Industries } from "@/components/Industries";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { PhoneMock } from "@/components/PhoneMock";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="noise">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <CallSection />
        <Features />
        <Industries />
        <HowItWorks />
        <PhoneMock />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
