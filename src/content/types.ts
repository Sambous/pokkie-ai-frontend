/**
 * Content schema for the blog and industry landing pages.
 *
 * Article bodies are structured blocks rather than raw HTML or markdown. That
 * costs a little authoring convenience and buys three things that matter here:
 * every page renders with consistent semantic headings, FAQ sections can be
 * lifted straight into `FAQPage` JSON-LD, and a missing translation is a type
 * error instead of a silently untranslated page.
 */

import type { Locale } from "@/lib/site";

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export type FaqItem = { q: string; a: string };

export type ArticleTranslation = {
  /** Translated slug — keeps the target keyword inside the URL. */
  slug: string;
  title: string;
  /** Doubles as the meta description, so keep it under ~155 characters. */
  description: string;
  keywords: string[];
  body: Block[];
  faq?: FaqItem[];
};

export type BlogPost = {
  /** Stable identifier used to pair translations across locales. */
  id: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  translations: Record<Locale, ArticleTranslation>;
};

export type IndustryPage = {
  id: string;
  /** Lucide-free inline emoji/glyph used in listings — no icon dependency. */
  glyph: string;
  translations: Record<
    Locale,
    ArticleTranslation & {
      /** Short label for cards and internal links. */
      label: string;
      heroHeadline: string;
      heroSubline: string;
      outcomes: string[];
    }
  >;
};
