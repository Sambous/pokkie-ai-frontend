import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
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
  title: "Pokkie — AI receptionist for beauty & local businesses",
  description:
    "Pokkie answers every call, books more appointments, and talks to your customers — so beauty salons, restaurants, and small businesses never miss a booking.",
  metadataBase: new URL("https://pokkie.ai"),
  openGraph: {
    title: "Pokkie.ai",
    description:
      "The sexy AI receptionist that takes more bookings for beauty, restaurants, and small businesses.",
    url: "https://pokkie.ai",
    siteName: "Pokkie",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
