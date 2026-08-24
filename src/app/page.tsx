import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCTA, Footer } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Industries } from "@/components/Industries";
import { Nav } from "@/components/Nav";
import { PhoneMock } from "@/components/PhoneMock";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Industries />
        <HowItWorks />
        <PhoneMock />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
