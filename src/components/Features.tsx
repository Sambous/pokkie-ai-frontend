"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Answers 24/7",
    body: "Rush hour, lunch break, after close — Pokkie picks up instantly so every enquiry gets a human-feeling reply.",
  },
  {
    title: "Books more",
    body: "Captures appointments, confirms details, and follows up so chairs and tables stay full — not voicemails.",
  },
  {
    title: "Sounds human",
    body: "Natural tone, no robotic menus. Guests ask questions, change bookings, and feel looked after.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl">
            Front desk energy.
            <span className="block text-gradient">Zero missed rings.</span>
          </h2>
          <p className="mt-4 text-lg text-blush-deep/85">
            Built for teams that live on the phone — restaurants, salons,
            clinics, and local shops that can&apos;t afford a missed booking.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shine-hover gloss-panel group rounded-3xl p-8 transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose/30 to-champagne/10 font-display text-sm font-bold text-rose-bright ring-1 ring-rose/20">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-cream">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blush-deep/80">
                {f.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
