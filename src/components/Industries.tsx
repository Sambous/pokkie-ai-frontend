"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Industries() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const industries = t.industries.items;
  const current = industries[active] ?? industries[0];

  return (
    <section id="industries" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl">
            {t.industries.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-blush-deep/85">
            {t.industries.intro}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === i
                  ? "bg-rose text-white shadow-lg shadow-rose/30"
                  : "border border-white/10 bg-white/5 text-blush-deep hover:border-white/20 hover:text-cream"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-2"
          >
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={current.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/40" />
            </div>
            <div className="gloss-panel flex flex-col justify-center rounded-none border-0 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                {current.headline}
              </h3>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm text-blush-deep/90 sm:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-bright" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display text-5xl font-extrabold text-gradient">
                  {current.stat}
                </p>
                <p className="mt-2 text-sm text-muted">{current.statLabel}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
