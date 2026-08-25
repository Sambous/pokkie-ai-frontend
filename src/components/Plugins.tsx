"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

function ZenchefMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M16 4c-2.4 0-4.4 1.6-5.1 3.8C8.2 8.4 6.5 10.6 6.5 13.2c0 2.3 1.4 4.3 3.5 5.2V26c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7.6c2.1-.9 3.5-2.9 3.5-5.2 0-2.6-1.7-4.8-4.4-5.4C20.4 5.6 18.4 4 16 4Zm-3 20v-5.2c.9.3 1.9.5 3 .5s2.1-.2 3-.5V24h-6Z"
      />
    </svg>
  );
}

function GoogleCalendarMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="5" y="7" width="22" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="currentColor" d="M5 11h22v3H5z" />
      <rect x="10" y="4" width="2.2" height="6" rx="1" fill="currentColor" />
      <rect x="20" y="4" width="2.2" height="6" rx="1" fill="currentColor" />
      <circle cx="12" cy="20" r="1.6" fill="currentColor" />
      <circle cx="16.5" cy="20" r="1.6" fill="currentColor" />
      <circle cx="21" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.9.5 3.7 1.4 5.3L5 27l5.8-1.8c1.5.8 3.3 1.3 5.2 1.3 5.8 0 10.5-4.7 10.5-10.5S21.8 5.5 16 5.5Zm5.4 13.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.4-.5-2.5-1.1-4.1-3.6-4.2-3.8-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.3c.2-.2.5-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.3 2.5 1.4.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.2.7-.1.3.1 1.8.8 2.1 1 .3.1.5.2.6.4.1.3 0 .8-.2 1.4Z"
      />
    </svg>
  );
}

const ICONS: Record<string, typeof ZenchefMark> = {
  zenchef: ZenchefMark,
  googleCalendar: GoogleCalendarMark,
  whatsapp: WhatsAppMark,
};

export function Plugins() {
  const { t } = useI18n();

  return (
    <section
      id="plugins"
      className="relative scroll-mt-20 overflow-x-clip border-t border-white/5 py-16 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-bright/80">
            {t.plugins.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl">
            {t.plugins.title}
            <span className="block text-gradient">{t.plugins.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-blush-deep/85 sm:text-lg">{t.plugins.intro}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
          {t.plugins.items.map((plugin, i) => {
            const Icon = ICONS[plugin.id] ?? ZenchefMark;
            return (
              <motion.article
                key={plugin.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="shine-hover gloss-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose/30 to-champagne/10 text-cream ring-1 ring-rose/20">
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  {plugin.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blush-deep/80">
                  {plugin.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-blush-deep/70">
          {t.plugins.more}
        </p>
      </div>
    </section>
  );
}
