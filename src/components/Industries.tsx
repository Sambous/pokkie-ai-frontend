"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const industries = [
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
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "beauty",
    label: "Beauty",
    headline: "Keep the chair full — even mid-appointment",
    points: [
      "Book color, cut, lashes, and spa slots while you’re with a client",
      "Answer after-hours enquiries that usually go to Instagram DMs",
      "Confirm appointments so no-shows drop and walk-ins stay welcome",
    ],
    stat: "+18%",
    statLabel: "avg. more bookings captured",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

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
            Made for businesses that live on bookings
          </h2>
          <p className="mt-4 max-w-xl text-lg text-blush-deep/85">
            One Pokkie, tailored tone — whether you plate food, cut hair, or run
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
