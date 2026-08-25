import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { ContentFaq } from "@/components/ContentFaq";
import { Footer } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { BLOG_POSTS, getPostBySlug, getSortedPosts } from "@/content/blog";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, isLocale, localePath, type Locale } from "@/lib/site";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    BLOG_POSTS.map((post) => ({ lang, slug: post.translations[lang].slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const post = getPostBySlug(lang, slug);
  if (!post) return {};

  const article = post.translations[lang];

  return buildMetadata({
    locale: lang,
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    type: "article",
    publishedTime: post.published,
    // Slugs are translated, so hreflang needs the matching path per locale.
    paths: Object.fromEntries(
      LOCALES.map((code) => [code, `blog/${post.translations[code].slug}`]),
    ) as Record<Locale, string>,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const post = getPostBySlug(lang, slug);
  if (!post) notFound();

  const t = getDictionary(lang);
  const article = post.translations[lang];
  const related = getSortedPosts()
    .filter((entry) => entry.id !== post.id)
    .slice(0, 2);

  return (
    <div className="noise">
      <JsonLd
        schema={[
          articleSchema({
            locale: lang,
            title: article.title,
            description: article.description,
            path: `blog/${article.slug}`,
            published: post.published,
            updated: post.updated,
          }),
          breadcrumbSchema(
            [
              { name: t.nav.home, path: "" },
              { name: t.blog.eyebrow, path: "blog" },
              { name: article.title, path: `blog/${article.slug}` },
            ],
            lang,
          ),
          ...(article.faq ? [faqSchema(article.faq)] : []),
        ]}
      />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-40">
        <Link
          href={localePath(lang, "blog")}
          className="text-sm font-semibold text-rose-bright transition hover:text-cream"
        >
          ← {t.blog.backToBlog}
        </Link>

        <article className="mt-6 sm:mt-8">
          <header>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <time dateTime={post.published}>{formatDate(post.published, lang)}</time>
              <span aria-hidden>·</span>
              <span>
                {post.readingMinutes} {t.blog.readingTime}
              </span>
            </div>
            <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-cream sm:mt-4 sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-blush/80 sm:mt-5 sm:text-lg">{article.description}</p>
          </header>

          <div className="mt-10 sm:mt-12">
            <ArticleBody blocks={article.body} />
          </div>

          {article.faq ? <ContentFaq title={t.blog.faqTitle} items={article.faq} /> : null}
        </article>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-display text-xl font-bold tracking-tight text-cream">
              {t.blog.relatedTitle}
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {related.map((entry) => {
                const translation = entry.translations[lang];
                return (
                  <Link
                    key={entry.id}
                    href={localePath(lang, `blog/${translation.slug}`)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-rose-bright/40 hover:bg-white/[0.06]"
                  >
                    <span className="font-display block text-lg font-semibold text-cream">
                      {translation.title}
                    </span>
                    <span className="mt-1 block text-sm text-blush/70">
                      {translation.description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

function formatDate(value: string, locale: string) {
  return new Date(value).toLocaleDateString(locale === "nl" ? "nl-NL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
