"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl"
        >
          {t.how.title}
        </motion.h2>
        <p className="mt-4 max-w-lg text-lg text-blush-deep/85">{t.how.intro}</p>

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="font-display text-7xl font-extrabold leading-none text-white/[0.05]">
                {i + 1}
              </span>
              <h3 className="-mt-10 font-display text-xl font-semibold text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blush-deep/80">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
