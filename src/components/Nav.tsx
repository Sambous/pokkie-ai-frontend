"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { switchLocalePath } from "@/lib/translated-paths";

export function Nav() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const home = localePath(locale);
  const onHome = pathname === home || pathname === `${home}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionHref = (hash: string) => (onHome ? `#${hash}` : `${home}#${hash}`);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-18 sm:px-8">
        <Link href={home} className="font-display text-xl font-bold tracking-tight text-cream">
          Pokkie<span className="text-rose-bright">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-blush-deep/90 md:flex">
          <a href={sectionHref("features")} className="transition hover:text-cream">
            {t.nav.features}
          </a>
          <Link href={localePath(locale, "ai-receptionist")} className="transition hover:text-cream">
            {t.nav.industries}
          </Link>
          <a href={sectionHref("how")} className="transition hover:text-cream">
            {t.nav.how}
          </a>
          <Link href={localePath(locale, "blog")} className="transition hover:text-cream">
            {t.nav.blog}
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px] font-semibold"
            role="group"
            aria-label="Language"
          >
            {(["nl", "en"] as const).map((code) => (
              <Link
                key={code}
                href={switchLocalePath(pathname, locale, code)}
                className={`rounded-full px-2.5 py-1 transition ${
                  locale === code ? "bg-rose text-white" : "text-blush-deep hover:text-cream"
                }`}
                aria-current={locale === code ? "page" : undefined}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href={sectionHref("get-a-call")}
            className="btn-primary rounded-full px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
          >
            {t.nav.getCall}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
