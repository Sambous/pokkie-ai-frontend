"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is Pokkie?",
    a: "Pokkie is an AI receptionist for beauty studios, restaurants, and small businesses. She answers calls, books appointments, and talks to customers so you never miss a booking.",
  },
  {
    q: "Does she sound robotic?",
    a: "No. Pokkie is tuned for natural conversation — warm, clear, and on-brand for hospitality and beauty. Guests can ask questions, change times, and book without menu hell.",
  },
  {
    q: "How fast can we go live?",
    a: "Most businesses forward their number, set services and hours, and start taking calls within a day. No heavy integration required to try her.",
  },
  {
    q: "Is this the same as Superb Call?",
    a: "Superb Call focuses on medical. Pokkie is the brand for beauty, restaurants, and local businesses — same ambition to automate reception, different vibe and playbook.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-cream">
                    {item.q}
                  </span>
                  <span
                    className={`text-rose-bright transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-blush-deep/85">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
