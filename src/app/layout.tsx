import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1 pt-14 pb-14 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
