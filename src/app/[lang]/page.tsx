import { notFound } from "next/navigation";

import { FAQ } from "@/components/FAQ";
import { CallSection } from "@/components/CallSection";
import { Features } from "@/components/Features";
import { FinalCTA, Footer } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Industries } from "@/components/Industries";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { PhoneMock } from "@/components/PhoneMock";
import { Testimonials } from "@/components/Testimonials";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/site";
import { faqSchema, softwareApplicationSchema } from "@/lib/structured-data";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = getDictionary(lang);

  return (
    <div className="noise">
      {/* Homepage FAQ is already public copy — exposing it as schema makes it
          quotable by AI answer engines instead of buried in an accordion. */}
      <JsonLd
        schema={[
          softwareApplicationSchema(lang, t.metaDescription),
          faqSchema(t.faq.items),
        ]}
      />
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
