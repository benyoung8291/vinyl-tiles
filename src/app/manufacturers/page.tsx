import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
import { manufacturers } from "@/lib/manufacturers";

export const metadata: Metadata = {
  title: "Vinyl Flooring Manufacturers in Australia | Full Brand Directory",
  alternates: { canonical: "/manufacturers" },
  description:
    "Directory of vinyl flooring manufacturers available in Australia — Interface, Karndean, Armstrong, Tarkett, Shaw Contract, Forbo, Polyflor, Gerflor, Amtico, Mannington, Altro, Bolon and more. We supply and install from any brand across Melbourne, Sydney, and Brisbane.",
};

export default function ManufacturersPage() {
  const featured = manufacturers.filter((m) => m.rangeSlug);
  const directory = manufacturers.filter((m) => !m.rangeSlug);

  return (
    <>
      {/* Hero */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                Manufacturer Directory
              </p>
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                Every vinyl manufacturer worth specifying in Australia.
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                We supply and install from any vinyl manufacturer available in Australia. Below is the directory we work from — global majors, local distributors, and specialist brands across LVT, sheet vinyl, hybrid, and safety flooring.
              </p>
            </div>
            <div className="lg:pt-10">
              <p className="text-[16px] leading-relaxed mb-7" style={{ color: "rgb(82, 75, 68)" }}>
                The four ranges in our featured collection are the products we install most often, with detailed colourways and specifications. The wider directory covers the rest of the Australian market — if you have a brand in mind, we will source it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="#directory"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[rgb(230,225,215)] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  Browse Directory
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured ranges */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
            Featured Ranges
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-6" style={{ color: "rgb(38, 35, 30)" }}>
            What we install most often
          </h2>
          <p className="mb-14 max-w-3xl text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
            These manufacturers cover the bulk of our commercial fitouts. Each has a dedicated range page with products and colourways.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {featured.map((m) => (
              <ManufacturerCard key={m.slug} manufacturer={m} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Wider directory */}
      <section id="directory" className="border-t border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
            Full Directory
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-6" style={{ color: "rgb(38, 35, 30)" }}>
            Other manufacturers we source from
          </h2>
          <p className="mb-14 max-w-3xl text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
            From sheet-vinyl healthcare specialists to woven-vinyl architectural products, the brands below cover specialist briefs we are happy to spec into a project.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {directory.map((m) => (
              <ManufacturerCard key={m.slug} manufacturer={m} variant="directory" />
            ))}
          </div>
        </div>
      </section>

      {/* Note about sourcing */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div
            className="flex flex-col items-start gap-7 rounded-lg border border-[rgb(230,225,215)] p-10 lg:flex-row lg:items-center lg:justify-between"
            style={{ backgroundColor: "rgb(248, 245, 237)" }}
          >
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Brand not on the list?
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                The Australian vinyl market shifts year to year as distributors and brands change. If the manufacturer you want is not here, get in touch — we will track down stock, samples, and pricing.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
            >
              Submit an Enquiry
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCta
        title="Specify any vinyl manufacturer for your project"
        description="Tell us the brand, the product, and the site. We will quote supply and install across Melbourne, Sydney, or Brisbane after a free site inspection."
        buttonText="Book a Site Inspection"
        buttonHref="/contact"
      />
    </>
  );
}

function ManufacturerCard({
  manufacturer,
  variant,
}: {
  manufacturer: (typeof manufacturers)[number];
  variant: "featured" | "directory";
}) {
  const cardBg = variant === "featured" ? "rgb(248, 245, 237)" : "rgb(252, 250, 245)";

  return (
    <article
      className="flex flex-col rounded-lg border border-[rgb(230,225,215)] p-7 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
      style={{ backgroundColor: cardBg }}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
          {manufacturer.name}
        </h3>
        <span
          className="shrink-0 rounded-full border border-[rgb(230,225,215)] px-2.5 py-0.5 text-[11px] font-medium"
          style={{ color: "rgb(120, 110, 100)" }}
        >
          {manufacturer.origin}
        </span>
      </div>

      <p className="mb-5 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
        {manufacturer.summary}
      </p>

      <div className="mb-5">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
          Product lines
        </p>
        <ul className="space-y-1">
          {manufacturer.productLines.map((line) => (
            <li key={line} className="text-[13px]" style={{ color: "rgb(82, 75, 68)" }}>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {manufacturer.strengths.map((strength) => (
          <span
            key={strength}
            className="rounded-full border border-[rgb(230,225,215)] bg-[rgb(252,250,245)] px-2.5 py-0.5 text-[11px]"
            style={{ color: "rgb(82, 75, 68)" }}
          >
            {strength}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 border-t border-[rgb(230,225,215)] pt-5">
        {manufacturer.rangeSlug && (
          <Link
            href={`/ranges/${manufacturer.rangeSlug}`}
            className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-[rgb(38,35,30)]"
            style={{ color: "rgb(55, 50, 45)" }}
          >
            View Range
            <ArrowRight className="size-3.5" />
          </Link>
        )}
        <a
          href={manufacturer.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[rgb(38,35,30)]"
          style={{ color: "rgb(82, 75, 68)" }}
        >
          {manufacturer.rangeSlug ? "Manufacturer Site" : "Visit Site"}
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
