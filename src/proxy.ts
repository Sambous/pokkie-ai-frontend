import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/site";

/**
 * Sends locale-less URLs to a locale-prefixed one so every page has exactly one
 * crawlable address. `Accept-Language` picks the target, defaulting to Dutch.
 *
 * The redirect is a 307 (temporary) on purpose: the browser language decides the
 * destination, so caching `/` → `/nl` permanently would pin English visitors to
 * the Dutch site.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${resolveLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

/** Picks the first supported language from `Accept-Language`, else Dutch. */
function resolveLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), quality: quality ? Number(quality) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of preferred) {
    const match = LOCALES.find((locale) => tag === locale || tag.startsWith(`${locale}-`));
    if (match) return match;
  }

  return DEFAULT_LOCALE;
}

export const config = {
  // Skip Next internals and anything with a file extension (favicon, og images,
  // robots.txt, sitemap.xml) — those must stay at the root, unprefixed.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
