import type { Metadata } from "next";

/**
 * Required App Router root. The real `<html>` / `<body>` live in
 * `app/[lang]/layout.tsx` so each locale can set `lang` correctly.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://pokkie.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
