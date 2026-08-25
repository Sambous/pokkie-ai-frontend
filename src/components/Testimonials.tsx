"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="overflow-x-clip border-t border-white/5 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl"
        >
          {t.testimonials.title}
        </motion.h2>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {t.testimonials.items.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gloss-panel flex flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-7"
            >
              <p className="flex-1 text-sm leading-relaxed text-blush sm:text-[15px]">
                “{q.quote}”
              </p>
              <footer className="mt-6 border-t border-white/8 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-cream">
                    {q.name}
                  </span>
                  <span className="text-xs text-muted">{q.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
