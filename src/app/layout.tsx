import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Commercial Vinyl Tile Flooring Australia | LVT Supply & Install | Vinyl Tiles",
    template: "%s | Vinyl Tiles Australia",
  },
  description:
    "Commercial vinyl tile flooring supplied and installed across Melbourne, Sydney, and Brisbane. Premium LVT, vinyl plank, and VCT from Interface, Karndean, Armstrong, and Tarkett. Free site inspection on every quote.",
  keywords: [
    "commercial vinyl tiles",
    "commercial vinyl flooring Australia",
    "LVT flooring Australia",
    "luxury vinyl tile",
    "vinyl plank flooring commercial",
    "vinyl tile installation Melbourne",
    "vinyl tile installation Sydney",
    "vinyl tile installation Brisbane",
    "Interface LVT",
    "Karndean LVT",
    "Armstrong vinyl flooring",
    "Tarkett iD Inspiration",
  ],
  metadataBase: new URL("https://www.vinyltiles.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.vinyltiles.com.au",
    siteName: "Vinyl Tiles Australia",
    title: "Commercial Vinyl Tile Flooring Australia | LVT Supply & Install",
    description:
      "Premium commercial LVT and vinyl plank supplied and installed across Melbourne, Sydney, and Brisbane. Interface, Karndean, Armstrong, Tarkett.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Vinyl Tile Flooring Australia",
    description:
      "Premium LVT supply and install across Melbourne, Sydney, and Brisbane. Free site inspection on every quote.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FlooringContractor",
  name: "Vinyl Tiles Australia",
  alternateName: "Vinyl Tiles by Premrest",
  url: "https://www.vinyltiles.com.au",
  logo: "https://www.vinyltiles.com.au/images/brand/premrest-logo.svg",
  telephone: "+61-1300-207-915",
  email: "office@premrest.com.au",
  description:
    "Commercial vinyl tile flooring supplied and installed across Australia. Premium LVT, vinyl plank, and VCT from Interface, Karndean, Armstrong, and Tarkett.",
  parentOrganization: {
    "@type": "Organization",
    name: "Premrest",
    url: "https://www.premrest.com.au",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Sydney" },
    { "@type": "City", name: "Brisbane" },
    { "@type": "Country", name: "Australia" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Vinyl Tile Ranges",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interface LVT Supply & Installation",
          serviceType: "Commercial Flooring Supply and Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Karndean LVT Supply & Installation",
          serviceType: "Commercial Flooring Supply and Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Armstrong Vinyl Flooring Supply & Installation",
          serviceType: "Commercial Flooring Supply and Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tarkett iD Collection Supply & Installation",
          serviceType: "Commercial Flooring Supply and Installation",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-14 pb-14 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
