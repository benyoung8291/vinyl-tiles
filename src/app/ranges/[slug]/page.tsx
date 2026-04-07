import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
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

  const introParagraph = range.description[0];
  const bodyParagraphs = range.description.slice(1);

  return (
    <>
      {/* Hero — warm dark with brand glow */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 pt-[72px]">
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[120px]" />

        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <p className="text-editorial-caption text-brand-light mb-6">
                {range.name} Collection
              </p>
              <h1 className="text-editorial-display text-white">
                {range.name}
              </h1>
              <p className="mt-4 text-editorial-subheading bg-gradient-to-r from-stone-400 to-stone-500 bg-clip-text text-transparent">
                {range.tagline}
              </p>
            </div>
            <div className="lg:pt-16">
              <p className="text-lg leading-relaxed text-stone-400">
                {introParagraph}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold tracking-[-0.01em] text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-light hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-stone-400 transition-all hover:border-brand/40 hover:text-white"
                >
                  {range.name} Website
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications — warm cards */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl bg-white p-5 shadow-sm"
              >
                <p className="text-xl font-bold tracking-[-0.02em] text-stone-900 md:text-2xl">
                  {spec.value}
                </p>
                <p className="mt-1 text-xs text-stone-400">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products — the main attraction */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Products
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-6">
            {range.name} LVT Collection
          </h2>
          <p className="mb-16 max-w-2xl text-[0.9375rem] leading-relaxed text-stone-500">
            Explore the full range of {range.name} luxury vinyl tile products available for your commercial project.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {range.products.map((product) => (
              <div
                key={product.slug}
                className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={`${product.name} by ${range.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-800 backdrop-blur-sm">
                      {product.style}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-stone-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-brand/70">
                    {product.format}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">
                    {product.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
                  >
                    Enquire
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand mb-4">
                About {range.name}
              </p>
              <h2 className="text-editorial-heading text-stone-950">
                Why specify
                <br />
                {range.name}?
              </h2>
            </div>

            <div className="space-y-6 border-t border-stone-200/60 pt-8 lg:border-t-0 lg:pt-0">
              {bodyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-editorial-body text-stone-500"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features — warm cards */}
      <section className="bg-gradient-to-b from-brand-50/30 to-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Key Features
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Built for performance.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-bold tracking-[-0.03em] text-stone-900">
                  {spec.value}
                </p>
                <p className="mt-2 text-sm text-stone-500">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find your product */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid items-center gap-8 rounded-2xl border border-stone-200/60 bg-white p-10 shadow-sm lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <h2 className="text-editorial-subheading text-stone-900">
                Can&apos;t find your product?
              </h2>
              <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-stone-500">
                We source any product from any brand. If you need a specific
                vinyl tile product not listed here, get in touch and we&apos;ll
                find it for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand/20 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
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
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">Also explore</p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Other ranges
          </h2>

          <div className="space-y-3">
            {otherRanges.map((other, i) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="group flex items-center justify-between rounded-xl border border-stone-200/60 bg-white px-6 py-5 shadow-sm transition-all hover:shadow-md hover:border-brand/20"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-editorial-caption text-stone-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-brand md:text-2xl">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-400">{other.tagline}</p>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
