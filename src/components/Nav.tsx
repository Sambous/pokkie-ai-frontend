"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-cream">
          Pokkie<span className="text-rose-bright">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-blush-deep/90 md:flex">
          <a href="#features" className="transition hover:text-cream">
            Features
          </a>
          <a href="#industries" className="transition hover:text-cream">
            Industries
          </a>
          <a href="#how" className="transition hover:text-cream">
            How it works
          </a>
          <a href="#faq" className="transition hover:text-cream">
            FAQ
          </a>
        </nav>
        <a
          href="#get-a-call"
          className="btn-primary rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
        >
          Get a call
        </a>
      </div>
    </motion.header>
  );
}
