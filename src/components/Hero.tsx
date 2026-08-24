"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    label: "restaurants",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80",
  },
  {
    label: "beauty salons",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2400&q=80",
  },
  {
    label: "hairstylists",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2400&q=80",
  },
  {
    label: "spas",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=80",
  },
  {
    label: "clinics",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=80",
  },
  {
    label: "small businesses",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=80",
  },
];

function RotatingAudience({ index }: { index: number }) {
  return (
    <span className="relative mt-4 inline-flex min-h-[1.25em] min-w-[12ch] items-center sm:min-w-[14ch]">
      <span aria-hidden className="audience-frame absolute -inset-x-3 -inset-y-1.5 rounded-2xl" />
      <span className="relative overflow-hidden px-4 py-1.5">
        <AnimatePresence mode="wait">
          <motion.span
            key={slides[index].label}
            initial={{ y: "80%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-80%", opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient inline-block whitespace-nowrap"
          >
            {slides[index].label}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only">
        restaurants, beauty salons, hairstylists, and more
      </span>
    </span>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero-mesh relative min-h-[100svh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[index].image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt=""
              fill
              priority
              className="object-cover object-center opacity-45"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 pb-28 pt-20 sm:px-8 lg:pb-36 lg:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-display text-5xl font-extrabold tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Pokkie<span className="text-rose-bright">.</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-cream sm:text-4xl lg:text-5xl"
        >
          <span className="block text-blush-deep/95">AI receptionist for</span>
          <RotatingAudience index={index} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-7 max-w-lg text-base leading-relaxed text-blush/85 sm:text-lg"
        >
          Answer every call, take more bookings, and talk to customers — without
          hiring another front desk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#get-a-call"
            className="btn-primary inline-flex rounded-full px-8 py-4 text-sm font-semibold text-white"
          >
            Get a call from Pokkie
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-blush backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 hover:text-cream"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-14 flex gap-2"
          aria-hidden
        >
          {slides.map((s, i) => (
            <span
              key={s.label}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-rose-bright" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
