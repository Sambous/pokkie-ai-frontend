"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    id: "beauty",
    label: "Beauty",
    headline: "Keep the chair full — even when you’re mid-blowout",
    points: [
      "Book color, cut, lashes, and spa slots while you’re with a client",
      "Answer after-hours enquiries that usually go to Instagram DMs",
      "Confirm appointments so no-shows drop and walk-ins stay welcome",
    ],
    stat: "+18%",
    statLabel: "avg. more bookings captured",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    headline: "Peak service shouldn’t mean missed tables",
    points: [
      "Take reservations and large-party details during dinner rush",
      "Answer dietary questions without pulling a host off the floor",
      "Send confirmations so guests show up ready",
    ],
    stat: "+15%",
    statLabel: "avg. more covers from calls",
  },
  {
    id: "smb",
    label: "Small businesses",
    headline: "Always open for the call that pays the rent",
    points: [
      "Qualify leads, book appointments, and route urgent calls",
      "Never leave a customer on voicemail after close",
      "Stay personal where it matters — Pokkie handles the rest",
    ],
    stat: "+20%",
    statLabel: "avg. more enquiries answered",
  },
] as const;

export function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="industries" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Made for the businesses that live on bookings
          </h2>
          <p className="mt-3 max-w-xl text-blush-deep/85">
            One Pokkie, tailored tone — whether you cut hair, plate food, or run
            the shop.
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-6 gloss-panel overflow-hidden rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.4fr_0.6fr]"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                {current.headline}
              </h3>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-blush-deep/90 sm:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-bright" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-ink/50 p-6 text-center lg:text-left">
              <p className="font-display text-5xl font-extrabold text-gradient">
                {current.stat}
              </p>
              <p className="mt-2 text-sm text-muted">{current.statLabel}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
