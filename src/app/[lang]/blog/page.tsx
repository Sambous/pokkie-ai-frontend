import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { getSortedPosts } from "@/content/blog";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, isLocale, localePath } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
    path: "blog",
  });
}

export default async function BlogIndex({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = getDictionary(lang);
  const posts = getSortedPosts();

  return (
    <div className="noise">
      <JsonLd
        schema={breadcrumbSchema(
          [
            { name: t.nav.home, path: "" },
            { name: t.blog.eyebrow, path: "blog" },
          ],
          lang,
        )}
      />
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-bright">
          {t.blog.eyebrow}
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-cream sm:text-5xl">
          {t.blog.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-blush/80">{t.blog.intro}</p>

        <div className="mt-14 flex flex-col gap-4">
          {posts.map((post) => {
            const article = post.translations[lang];
            return (
              <Link
                key={post.id}
                href={localePath(lang, `blog/${article.slug}`)}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-rose-bright/40 hover:bg-white/[0.06] sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <time dateTime={post.published}>
                    {formatDate(post.published, lang)}
                  </time>
                  <span aria-hidden>·</span>
                  <span>
                    {post.readingMinutes} {t.blog.readingTime}
                  </span>
                </div>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-cream transition group-hover:text-rose-bright sm:text-3xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-blush/75">
                  {article.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-rose-bright">
                  {t.blog.readMore} →
                </span>
              </Link>
            );
          })}
        </div>
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
