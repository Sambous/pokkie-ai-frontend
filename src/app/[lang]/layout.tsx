import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { LOCALES, isLocale } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import "../globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Pre-renders both language trees at build time so neither depends on a request. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    title: t.metaTitle,
    description: t.metaDescription,
  });
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd schema={[organizationSchema(), websiteSchema(lang)]} />
        <Providers locale={lang}>{children}</Providers>
      </body>
    </html>
  );
}
