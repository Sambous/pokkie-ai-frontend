"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { CallForm } from "./CallForm";

export function CallSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-rose/20 blur-[100px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
            {t.callSection.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {t.callSection.title}
          </h2>
          <p className="mt-4 max-w-md text-blush-deep/90">{t.callSection.body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <CallForm />
        </motion.div>
      </div>
    </section>
  );
}
