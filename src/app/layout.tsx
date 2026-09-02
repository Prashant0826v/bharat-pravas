import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BharatPravas — Offbeat. Authentic. Yours. | Premium Maharashtra Travel",
  description:
    "Discover curated group trips, weekend treks, and women-only experiences across Maharashtra. Small groups, authentic local experiences, and safety-first travel with BharatPravas.",
  keywords: [
    "Maharashtra travel",
    "offbeat trips",
    "women-only tours",
    "Western Ghats treks",
    "group travel Maharashtra",
    "BharatPravas",
  ],
  openGraph: {
    title: "BharatPravas — Premium Offbeat Travel in Maharashtra",
    description:
      "Curated small-group trips, treks and women-only experiences across Maharashtra's most extraordinary landscapes.",
    type: "website",
    locale: "en_IN",
    siteName: "BharatPravas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
