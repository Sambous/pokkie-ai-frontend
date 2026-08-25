import type { Block } from "@/content/types";

/**
 * Renders structured content blocks as semantic HTML.
 *
 * Headings stay `h2`/`h3` under the page's single `h1` so the document outline
 * is unambiguous — crawlers and answer engines use that hierarchy to work out
 * which passage answers a query.
 */
export function ArticleBody({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-display mt-6 text-2xl font-bold tracking-tight text-cream sm:text-3xl">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-cream">
          {block.text}
        </h3>
      );

    case "paragraph":
      return <p className="text-base leading-relaxed text-blush/85 sm:text-lg">{block.text}</p>;

    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-blush/85">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-bright" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="flex flex-col gap-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-blush/85">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/20 text-xs font-semibold text-rose-bright">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-rose-bright/60 pl-5">
          <p className="font-display text-lg font-medium leading-snug text-cream sm:text-xl">
            {block.text}
          </p>
          {block.cite ? <cite className="mt-2 block text-xs not-italic text-muted">{block.cite}</cite> : null}
        </blockquote>
      );

    case "callout":
      return (
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-blush/90">
          {block.text}
        </aside>
      );
  }
}
