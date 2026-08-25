/**
 * Maps a path from one locale to another when slugs are translated
 * (`/nl/blog/wat-gemiste-oproepen-kosten` ↔ `/en/blog/what-missed-calls-cost`).
 * Locale switching would otherwise land on a 404.
 */

import { BLOG_POSTS } from "@/content/blog";
import { INDUSTRY_PAGES } from "@/content/industries";
import { localePath, type Locale } from "@/lib/site";

export function switchLocalePath(pathname: string, from: Locale, to: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments[0] === from ? segments.slice(1) : segments;

  if (rest[0] === "blog" && rest[1]) {
    const post = BLOG_POSTS.find((entry) => entry.translations[from].slug === rest[1]);
    if (post) return localePath(to, `blog/${post.translations[to].slug}`);
    return localePath(to, "blog");
  }

  if (rest[0] === "ai-receptionist" && rest[1]) {
    const page = INDUSTRY_PAGES.find((entry) => entry.translations[from].slug === rest[1]);
    if (page) return localePath(to, `ai-receptionist/${page.translations[to].slug}`);
    return localePath(to, "ai-receptionist");
  }

  return localePath(to, rest.join("/"));
}
