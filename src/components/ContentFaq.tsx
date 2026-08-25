import type { FaqItem } from "@/content/types";

/**
 * FAQ block for content pages.
 *
 * Rendered as plain expanded markup rather than a JS accordion: the answers are
 * the part most likely to be pulled into a rich result or an AI answer, so they
 * belong in the static HTML.
 */
export function ContentFaq({ title, items }: { title: string; items: readonly FaqItem[] }) {
  return (
    <section className="mt-16 border-t border-white/10 pt-10">
      <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
        {title}
      </h2>
      <dl className="mt-8 flex flex-col gap-7">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-lg font-semibold text-cream">{item.q}</dt>
            <dd className="mt-2 text-base leading-relaxed text-blush/80">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
