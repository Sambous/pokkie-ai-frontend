import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { ContentFaq } from "@/components/ContentFaq";
import { Footer } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { INDUSTRY_PAGES, getIndustryBySlug } from "@/content/industries";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, isLocale, localePath, type Locale } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    INDUSTRY_PAGES.map((page) => ({ lang, industry: page.translations[lang].slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/ai-receptionist/[industry]">): Promise<Metadata> {
  const { lang, industry } = await params;
  if (!isLocale(lang)) return {};

  const page = getIndustryBySlug(lang, industry);
  if (!page) return {};

  const content = page.translations[lang];

  return buildMetadata({
    locale: lang,
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    paths: Object.fromEntries(
      LOCALES.map((code) => [code, `ai-receptionist/${page.translations[code].slug}`]),
    ) as Record<Locale, string>,
  });
}

export default async function IndustryPageView({
  params,
}: PageProps<"/[lang]/ai-receptionist/[industry]">) {
  const { lang, industry } = await params;
  if (!isLocale(lang)) notFound();

  const page = getIndustryBySlug(lang, industry);
  if (!page) notFound();

  const t = getDictionary(lang);
  const content = page.translations[lang];
  const siblings = INDUSTRY_PAGES.filter((entry) => entry.id !== page.id);

  return (
    <div className="noise">
      <JsonLd
        schema={[
          breadcrumbSchema(
            [
              { name: t.nav.home, path: "" },
              { name: t.industryPages.eyebrow, path: "ai-receptionist" },
              { name: content.label, path: `ai-receptionist/${content.slug}` },
            ],
            lang,
          ),
          ...(content.faq ? [faqSchema(content.faq)] : []),
        ]}
      />
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Link
          href={localePath(lang, "ai-receptionist")}
          className="text-sm font-semibold text-rose-bright transition hover:text-cream"
        >
          ← {t.industryPages.viewAll}
        </Link>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-bright">
            {content.label}
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            {content.heroHeadline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-blush/80">{content.heroSubline}</p>
          <a
            href={`${localePath(lang)}#get-a-call`}
            className="btn-primary mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            {t.nav.getCall}
          </a>
        </header>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="font-display text-lg font-bold tracking-tight text-cream">
            {t.industryPages.outcomesTitle}
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {content.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-base leading-relaxed text-blush/85">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-bright" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14">
          <ArticleBody blocks={content.body} />
        </div>

        {content.faq ? <ContentFaq title={t.blog.faqTitle} items={content.faq} /> : null}

        {/* Sibling links keep crawl paths open across the industry set. */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="font-display text-xl font-bold tracking-tight text-cream">
            {t.industryPages.viewAll}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {siblings.map((entry) => {
              const sibling = entry.translations[lang];
              return (
                <Link
                  key={entry.id}
                  href={localePath(lang, `ai-receptionist/${sibling.slug}`)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blush/85 transition hover:border-rose-bright/40 hover:text-cream"
                >
                  {sibling.label}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
