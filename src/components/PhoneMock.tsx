"use client";

import { motion } from "framer-motion";

const lines = [
  { who: "Caller", text: "Hi, do you have anything tomorrow after 4?" },
  {
    who: "Pokkie",
    text: "Absolutely — I have 4:30 and 5:15 for a cut & blow. Which feels better?",
  },
  { who: "Caller", text: "4:30 please. Under Maya." },
  {
    who: "Pokkie",
    text: "You’re booked, Maya. I’ll text a confirmation. Anything else?",
  },
];

export function PhoneMock() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Meet Pokkie on the line
          </h2>
          <p className="mt-4 max-w-md text-blush-deep/85">
            Natural turn-taking, booking logic, and a voice that fits a beauty
            brand — not a call centre script.
          </p>
          <a
            href="#get-a-call"
            className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Get a call from Pokkie
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/40 pulse-ring" />

          <div className="float-y gloss-panel overflow-hidden rounded-[2rem] p-1 shadow-2xl shadow-rose/20">
            <div className="rounded-[1.85rem] bg-ink-soft px-5 pb-6 pt-4">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-bright to-rose font-display text-sm font-bold text-white">
                    P
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-ink-soft bg-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream">Pokkie</p>
                    <p className="text-xs text-muted">On a call · 0:42</p>
                  </div>
                </div>
                <span className="rounded-full bg-rose/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-rose-bright">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {lines.map((line, i) => (
                  <motion.div
                    key={line.text}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12 }}
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                      line.who === "Pokkie"
                        ? "ml-auto bg-rose/90 text-white"
                        : "bg-white/8 text-blush"
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
