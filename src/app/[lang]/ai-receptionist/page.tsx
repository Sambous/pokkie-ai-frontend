import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { INDUSTRY_PAGES } from "@/content/industries";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, isLocale, localePath } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/ai-receptionist">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    title: t.industryPages.metaTitle,
    description: t.industryPages.metaDescription,
    path: "ai-receptionist",
  });
}

/**
 * Hub page for the industry set. Each industry page links back here, which
 * concentrates the topical authority of the whole set on one URL that can rank
 * for the unmodified "AI receptionist" query.
 */
export default async function IndustryHub({ params }: PageProps<"/[lang]/ai-receptionist">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = getDictionary(lang);

  return (
    <div className="noise">
      <JsonLd
        schema={breadcrumbSchema(
          [
            { name: t.nav.home, path: "" },
            { name: t.industryPages.eyebrow, path: "ai-receptionist" },
          ],
          lang,
        )}
      />
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-bright">
          {t.industryPages.eyebrow}
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-cream sm:text-5xl">
          {t.industryPages.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-blush/80">{t.industryPages.intro}</p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {INDUSTRY_PAGES.map((industry) => {
            const page = industry.translations[lang];
            return (
              <Link
                key={industry.id}
                href={localePath(lang, `ai-receptionist/${page.slug}`)}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-rose-bright/40 hover:bg-white/[0.06]"
              >
                <span aria-hidden className="text-2xl">
                  {industry.glyph}
                </span>
                <h2 className="font-display mt-3 text-xl font-bold tracking-tight text-cream transition group-hover:text-rose-bright">
                  {page.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-blush/75">{page.description}</p>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
