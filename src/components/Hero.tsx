"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CallForm } from "./CallForm";

const audiences = [
  "restaurants",
  "beauty salons",
  "hairstylists",
  "spas",
  "clinics",
  "small businesses",
];

function RotatingAudience() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % audiences.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative mt-3 inline-flex min-h-[1.2em] items-center align-middle">
      <span
        aria-hidden
        className="absolute -inset-x-2.5 -inset-y-1 rounded-xl border border-rose/45 bg-rose/15 shadow-[0_0_40px_rgba(214,31,107,0.28)]"
      />
      <span className="relative overflow-hidden px-3 py-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={audiences[index]}
            initial={{ y: "75%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-75%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient inline-block whitespace-nowrap"
          >
            {audiences[index]}
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
  return (
    <section className="hero-mesh relative min-h-[100svh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/55" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-28 lg:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-display text-4xl font-extrabold tracking-tight text-cream sm:text-5xl lg:text-6xl"
          >
            Pokkie<span className="text-rose-bright">.</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            <span className="block">AI receptionist for</span>
            <RotatingAudience />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-blush-deep/90 sm:text-lg"
          >
            Answer every call, take more bookings, and talk to customers —
            without hiring another front desk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#get-a-call"
              className="btn-primary inline-flex rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              Get a call from Pokkie
            </a>
            <a
              href="#how"
              className="text-sm font-medium text-blush-deep underline-offset-4 transition hover:text-cream hover:underline"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-rose/20 blur-3xl" />
          <CallForm />
        </motion.div>
      </div>
    </section>
  );
}
