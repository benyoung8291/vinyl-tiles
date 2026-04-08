import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: {
    default: "Vinyl Tiles by Premrest | Commercial Vinyl Tile Flooring, Supplied & Installed",
    template: "%s | Vinyl Tiles by Premrest",
  },
  description:
    "Commercial vinyl tile flooring supplied and installed across Australia. LVT, VCT, and vinyl plank from leading manufacturers. One call, sorted.",
  keywords: [
    "vinyl tiles",
    "commercial vinyl flooring",
    "LVT flooring",
    "vinyl plank flooring",
    "commercial flooring Australia",
    "vinyl tile installation",
  ],
  metadataBase: new URL("https://vinyltiles.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://vinyltiles.com.au",
    siteName: "Vinyl Tiles by Premrest",
    title: "Vinyl Tiles by Premrest | Commercial Vinyl Tile Flooring, Supplied & Installed",
    description:
      "Commercial vinyl tile flooring supplied and installed across Australia. LVT, VCT, and vinyl plank from leading manufacturers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl Tiles by Premrest",
    description:
      "Commercial vinyl tile flooring supplied and installed across Australia. One call, sorted.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pt-16 pb-14 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
