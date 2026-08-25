/**
 * JSON-LD builders.
 *
 * Structured data is what lets answer engines (Google AI Overviews, ChatGPT,
 * Perplexity) quote the site directly rather than guessing from prose. FAQ and
 * Article schemas are the two that consistently earn rich results for this
 * category, so every content page emits at least one.
 */

import {
  CONTACT_EMAIL,
  LOCALE_META,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  localePath,
  type Locale,
} from "@/lib/site";

type JsonLd = Record<string, unknown>;

const ORGANISATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANISATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: absoluteUrl("/opengraph-image"),
    description:
      "Pokkie is an AI receptionist that answers every call, books appointments, and talks to customers for restaurants, beauty salons, and small businesses.",
    areaServed: "NL",
  };
}

export function websiteSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: absoluteUrl(localePath(locale)),
    inLanguage: LOCALE_META[locale].hreflang,
    publisher: { "@id": ORGANISATION_ID },
  };
}

/**
 * Describes Pokkie as a product so comparison and "best AI receptionist"
 * queries can surface pricing-free product facts.
 */
export function softwareApplicationSchema(locale: Locale, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: absoluteUrl(localePath(locale)),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    featureList: [
      "24/7 AI receptionist",
      "Appointment booking",
      "Zenchef plugin",
      "Google Calendar plugin",
      "WhatsApp plugin",
    ],
    description,
    provider: { "@id": ORGANISATION_ID },
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema({
  locale,
  title,
  description,
  path,
  published,
  updated,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
}): JsonLd {
  const url = absoluteUrl(localePath(locale, path));

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    inLanguage: LOCALE_META[locale].hreflang,
    datePublished: published,
    dateModified: updated ?? published,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: absoluteUrl("/opengraph-image"),
    author: { "@id": ORGANISATION_ID },
    publisher: { "@id": ORGANISATION_ID },
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[],
  locale: Locale,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localePath(locale, crumb.path)),
    })),
  };
}
