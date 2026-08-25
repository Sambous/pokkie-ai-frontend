"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import { dictionaries, type Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/site";

export type { Locale, Dictionary };

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * The active locale comes from the `[lang]` route segment rather than component
 * state, so server-rendered HTML already carries the right language. That is
 * what makes both `/nl` and `/en` independently indexable — the previous
 * localStorage toggle only ever shipped Dutch markup to crawlers.
 */
export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ locale, t: dictionaries[locale] }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
