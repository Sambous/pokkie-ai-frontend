/**
 * Single source of truth for canonical URLs, brand facts, and locale routing.
 *
 * Everything SEO-related (metadata, sitemap, robots, JSON-LD) reads from here so
 * the production origin is never hardcoded in more than one place. Changing the
 * domain should only require editing `SITE_URL`.
 */

export const SITE_URL = "https://pokkie.ai";

export const SITE_NAME = "Pokkie";

export const CONTACT_EMAIL = "hello@pokkie.ai";

/** NL first — Pokkie sells into the Dutch market before expanding. */
export const LOCALES = ["nl", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "nl";

/** BCP-47 tags for `hreflang` and Open Graph — `og:locale` wants underscores. */
export const LOCALE_META: Record<Locale, { hreflang: string; openGraph: string }> = {
  nl: { hreflang: "nl-NL", openGraph: "nl_NL" },
  en: { hreflang: "en-US", openGraph: "en_US" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Builds a locale-prefixed path. Every public URL carries its locale so each
 * language has its own crawlable, canonical address (`/nl/blog`, `/en/blog`).
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
