/**
 * Metadata builders shared by every page.
 *
 * Two things matter for ranking a bilingual site and both are easy to get wrong
 * by hand, so they are centralised here:
 *
 * 1. **Canonical** — each page declares itself the original, preventing `/nl/x`
 *    and `/en/x` from competing as duplicates.
 * 2. **hreflang** — each page lists every translation plus `x-default`, so Google
 *    serves Dutch to Dutch searchers instead of picking one arbitrarily.
 */

import type { Metadata } from "next";

import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  localePath,
  type Locale,
} from "@/lib/site";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Locale-less path, e.g. `"blog"`. Ignored when `paths` is supplied. */
  path?: string;
  /**
   * Per-locale paths, for pages whose slug is translated
   * (`/nl/blog/gemiste-oproepen` ↔ `/en/blog/missed-calls`). Keeping the
   * keyword in the URL is worth the extra bookkeeping for search intent.
   */
  paths?: Record<Locale, string>;
  /** Absolute or root-relative image used for social previews. */
  image?: string;
  /** Set for blog posts so Open Graph reports an article instead of a page. */
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  paths,
  image = "/opengraph-image",
  type = "website",
  publishedTime,
  keywords,
}: PageMetadataInput): Metadata {
  const pathFor = (code: Locale) => paths?.[code] ?? path;
  const canonical = localePath(locale, pathFor(locale));

  const languages = Object.fromEntries(
    LOCALES.map((code) => [LOCALE_META[code].hreflang, localePath(code, pathFor(code))]),
  );

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: { ...languages, "x-default": localePath(DEFAULT_LOCALE, pathFor(DEFAULT_LOCALE)) },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      siteName: SITE_NAME,
      type,
      locale: LOCALE_META[locale].openGraph,
      alternateLocale: LOCALES.filter((code) => code !== locale).map(
        (code) => LOCALE_META[code].openGraph,
      ),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
