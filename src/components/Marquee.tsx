"use client";

import { useI18n } from "@/lib/i18n";

export function Marquee() {
  const { t } = useI18n();
  const loop = [...t.marquee, ...t.marquee];

  return (
    <div className="relative border-y border-white/5 bg-ink-soft/60 py-5 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      <div className="marquee-track gap-10 px-4">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blush-deep/70 whitespace-nowrap"
          >
            {item}
            <span className="ml-10 text-rose-bright/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
