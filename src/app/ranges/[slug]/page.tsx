import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
import { ranges, getRangeBySlug } from "@/lib/ranges";

interface RangePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ranges.map((range) => ({
    slug: range.slug,
  }));
}

export async function generateMetadata({
  params,
}: RangePageProps): Promise<Metadata> {
  const { slug } = await params;
  const range = getRangeBySlug(slug);

  if (!range) {
    return { title: "Range Not Found" };
  }

  return {
    title: `${range.name} Commercial Vinyl Flooring`,
    description: `${range.name} luxury vinyl tile flooring — ${range.tagline} Explore specs, features, and get a free quote for your commercial project.`,
  };
}

export default async function RangePage({ params }: RangePageProps) {
  const { slug } = await params;
  const range = getRangeBySlug(slug);

  if (!range) {
    notFound();
  }

  const otherRanges = ranges.filter((r) => r.slug !== range.slug);
  const bodyParagraphs = range.description.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                {range.name} Collection
              </p>
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                {range.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                {range.tagline}
              </p>
            </div>
            <div className="lg:pt-10">
              <p className="text-[16px] leading-relaxed mb-7" style={{ color: "rgb(82, 75, 68)" }}>
                {range.description[0]}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Get a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[rgb(230,225,215)] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  {range.name} Website
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:py-14 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                  {spec.value}
                </p>
                <p className="mt-1.5 text-[12px] uppercase tracking-wide" style={{ color: "rgb(120, 110, 100)" }}>
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
            Products
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-6" style={{ color: "rgb(38, 35, 30)" }}>
            {range.name} LVT Collection
          </h2>
          <p className="mb-14 max-w-3xl text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
            Explore the full range of {range.name} luxury vinyl tile products. Click any product to see all available colourways.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {range.products.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${range.slug}/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[rgb(242,238,228)]">
                  <img
                    src={product.image}
                    alt={`${product.name} by ${range.name}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                      {product.name}
                    </h3>
                    <span
                      className="shrink-0 rounded-full border border-[rgb(230,225,215)] px-2.5 py-0.5 text-[11px] font-medium"
                      style={{ color: "rgb(120, 110, 100)" }}
                    >
                      {product.colourways.length} colours
                    </span>
                  </div>
                  <p className="text-[12px] mb-3" style={{ color: "rgb(120, 110, 100)" }}>
                    {product.format}
                  </p>
                  <p className="text-[14px] leading-relaxed mb-5 line-clamp-2" style={{ color: "rgb(82, 75, 68)" }}>
                    {product.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-[13px] font-semibold"
                    style={{ color: "rgb(55, 50, 45)" }}
                  >
                    View Colourways
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                About {range.name}
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Why specify {range.name}?
              </h2>
            </div>
            <div className="space-y-6">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can't find your product */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div
            className="flex flex-col items-start gap-7 rounded-lg border border-[rgb(230,225,215)] p-10 lg:flex-row lg:items-center lg:justify-between"
            style={{ backgroundColor: "rgb(248, 245, 237)" }}
          >
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Can&apos;t find your product?
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                We source any product from any brand. If you need a specific
                vinyl tile product not listed here, get in touch and we&apos;ll
                find it for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title={`Specify ${range.name} for your project`}
        description={`Get expert advice and a no-obligation quote for ${range.name} commercial vinyl tile flooring.`}
      />

      {/* Explore Other Ranges */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
            Also explore
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-10" style={{ color: "rgb(38, 35, 30)" }}>
            Other ranges
          </h2>

          <div className="space-y-3">
            {otherRanges.map((other) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="group flex items-center justify-between rounded-lg border border-[rgb(230,225,215)] px-7 py-5 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <div>
                  <h3 className="text-[15px] font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    {other.name}
                  </h3>
                  <p className="mt-1 text-[13px]" style={{ color: "rgb(120, 110, 100)" }}>
                    {other.tagline}
                  </p>
                </div>
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  style={{ color: "rgb(82, 75, 68)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
