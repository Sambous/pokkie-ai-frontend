"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CallForm } from "./CallForm";

export function Hero() {
  return (
    <section className="hero-mesh relative min-h-[100svh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%] opacity-35 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-28 lg:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne"
          >
            AI receptionist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-cream">Pokkie</span>
            <span className="mt-2 block text-gradient text-[0.72em] font-bold leading-[1.1]">
              answers every call.
              <br />
              Books more.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-blush-deep/90 sm:text-lg"
          >
            The AI front desk for beauty studios, restaurants, and small
            businesses — natural conversations that turn missed rings into
            booked appointments.
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
