import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/content/blog";
import { INDUSTRY_PAGES } from "@/content/industries";
import { LOCALES, LOCALE_META, absoluteUrl, localePath, type Locale } from "@/lib/site";

/**
 * Every URL is listed once per locale with `alternates.languages` pointing at
 * its translations. That is the sitemap-level equivalent of hreflang tags and
 * gives Google a second, unambiguous signal about which page serves which
 * language — worth having when slugs differ between locales.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const push = (
    paths: Record<Locale, string>,
    options: { priority: number; changeFrequency: Change; lastModified?: string },
  ) => {
    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(localePath(locale, paths[locale])),
        lastModified: options.lastModified ? new Date(options.lastModified) : new Date(),
        changeFrequency: options.changeFrequency,
        priority: options.priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((code) => [
              LOCALE_META[code].hreflang,
              absoluteUrl(localePath(code, paths[code])),
            ]),
          ),
        },
      });
    }
  };

  const samePath = (path: string) =>
    Object.fromEntries(LOCALES.map((code) => [code, path])) as Record<Locale, string>;

  push(samePath(""), { priority: 1, changeFrequency: "weekly" });
  push(samePath("blog"), { priority: 0.7, changeFrequency: "weekly" });
  push(samePath("ai-receptionist"), { priority: 0.8, changeFrequency: "monthly" });

  for (const page of INDUSTRY_PAGES) {
    push(
      Object.fromEntries(
        LOCALES.map((code) => [code, `ai-receptionist/${page.translations[code].slug}`]),
      ) as Record<Locale, string>,
      { priority: 0.8, changeFrequency: "monthly" },
    );
  }

  for (const post of BLOG_POSTS) {
    push(
      Object.fromEntries(
        LOCALES.map((code) => [code, `blog/${post.translations[code].slug}`]),
      ) as Record<Locale, string>,
      {
        priority: 0.6,
        changeFrequency: "monthly",
        lastModified: post.updated ?? post.published,
      },
    );
  }

  return entries;
}

type Change = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
