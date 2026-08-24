import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Pokkie — AI-receptionist voor restaurants, beauty & meer",
  description:
    "Pokkie neemt elke call aan, boekt meer afspraken en praat met je klanten — voor restaurants, beauty salons, kappers en kleine bedrijven.",
  metadataBase: new URL("https://pokkie.ai"),
  openGraph: {
    title: "Pokkie.ai",
    description:
      "AI-receptionist die meer bookings binnenhaalt voor restaurants, beauty en lokale bedrijven.",
    url: "https://pokkie.ai",
    siteName: "Pokkie",
    type: "website",
    locale: "nl_NL",
    alternateLocale: ["en_US"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
