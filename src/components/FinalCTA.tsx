"use client";

import Link from "next/link";

import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { CallForm } from "./CallForm";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="overflow-x-clip pb-16 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 px-5 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-rose/40 via-ink-soft to-ink" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-champagne/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-rose-bright/20 blur-[80px]" />
          <div className="relative grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
                {t.finalCta.title}
                <span className="block text-gradient">{t.finalCta.titleAccent}</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-blush/90 sm:mt-5 sm:text-lg">{t.finalCta.body}</p>
            </div>
            <CallForm id="get-a-call-footer" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl font-bold text-cream">
            Pokkie<span className="text-rose-bright">.</span>
          </p>
          <p className="mt-1 text-xs text-muted">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-muted">
          <Link href={localePath(locale, "blog")} className="transition hover:text-cream">
            {t.nav.blog}
          </Link>
          <a href={localePath(locale) + "#plugins"} className="transition hover:text-cream">
            {t.nav.plugins}
          </a>
          <Link href={localePath(locale, "ai-receptionist")} className="transition hover:text-cream">
            {t.nav.industries}
          </Link>
          <a href="mailto:hello@pokkie.ai" className="transition hover:text-cream">
            hello@pokkie.ai
          </a>
          <span>© {new Date().getFullYear()} Pokkie</span>
        </div>
      </div>
    </footer>
  );
}
