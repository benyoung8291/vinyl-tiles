import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
      {/* Hero with peach background */}
      <section style={{ backgroundColor: "rgb(251, 211, 190)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(93, 82, 75)" }}>
                {range.name} Collection
              </p>
              <h1 className="font-heading text-5xl md:text-6xl tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
                {range.name}
              </h1>
              <p className="mt-6 text-xl leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
                {range.tagline}
              </p>
            </div>
            <div className="lg:pt-12">
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgb(93, 82, 75)" }}>
                {range.description[0]}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "rgb(140, 84, 98)" }}
                >
                  Get a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 py-3 text-base font-medium transition-all hover:opacity-80"
                  style={{ borderColor: "rgb(93, 82, 75)", color: "rgb(93, 82, 75)" }}
                >
                  {range.name} Website
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs section with alternating background */}
      <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-16 md:py-20 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-2xl font-bold" style={{ color: "rgb(93, 82, 75)" }}>
                  {spec.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide" style={{ color: "rgb(140, 84, 98)" }}>
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
            Products
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
            {range.name} LVT Collection
          </h2>
          <p className="mb-16 max-w-3xl text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
            Explore the full range of {range.name} luxury vinyl tile products. Click any product to see all available colourways.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {range.products.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${range.slug}/${product.slug}`}
                className="group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "rgb(245, 238, 224)" }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={`${product.name} by ${range.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading text-xl" style={{ color: "rgb(93, 82, 75)" }}>
                      {product.name}
                    </h3>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: "rgb(251, 211, 190)", color: "rgb(93, 82, 75)" }}
                    >
                      {product.colourways.length} colours
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgb(140, 84, 98)" }}>
                    {product.format}
                  </p>
                  <p className="text-base leading-relaxed mb-6 line-clamp-2" style={{ color: "rgb(93, 82, 75)" }}>
                    {product.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-base font-semibold transition-transform"
                    style={{ color: "rgb(140, 84, 98)" }}
                  >
                    View Colourways
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section style={{ backgroundColor: "rgb(245, 238, 224)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
                About {range.name}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
                Why specify {range.name}?
              </h2>
            </div>
            <div className="space-y-8">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can't find your product */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div
            className="flex flex-col items-start gap-8 rounded-lg p-12 lg:flex-row lg:items-center lg:justify-between"
            style={{ backgroundColor: "rgb(245, 238, 224)" }}
          >
            <div>
              <h2 className="font-heading text-3xl" style={{ color: "rgb(93, 82, 75)" }}>
                Can&apos;t find your product?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
                We source any product from any brand. If you need a specific
                vinyl tile product not listed here, get in touch and we&apos;ll
                find it for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(140, 84, 98)" }}
            >
              Get in Touch
              <ArrowRight className="size-5" />
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
      <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
            Also explore
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
            Other ranges
          </h2>

          <div className="space-y-3">
            {otherRanges.map((other) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="group flex items-center justify-between rounded-lg px-8 py-6 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgb(254, 249, 237)" }}
              >
                <div>
                  <h3 className="font-heading text-xl transition-colors" style={{ color: "rgb(93, 82, 75)" }}>
                    {other.name}
                  </h3>
                  <p className="mt-1 text-base" style={{ color: "rgb(140, 84, 98)" }}>
                    {other.tagline}
                  </p>
                </div>
                <ArrowRight
                  className="size-5 transition-all group-hover:translate-x-1"
                  style={{ color: "rgb(140, 84, 98)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
