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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
                {range.name} Collection
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
                {range.name}
              </h1>
              <p className="mt-3 text-lg text-stone-500">
                {range.tagline}
              </p>
            </div>
            <div className="lg:pt-8">
              <p className="text-base leading-relaxed text-stone-500">
                {range.description[0]}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Get a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900"
                >
                  {range.name} Website
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-y border-stone-200/60 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-4 lg:px-8">
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {range.specs.map((spec) => (
              <div key={spec.label} className="flex items-baseline gap-2">
                <span className="text-base font-bold text-stone-900">{spec.value}</span>
                <span className="text-xs text-stone-400">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Products</p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3 md:text-4xl">
            {range.name} LVT Collection
          </h2>
          <p className="mb-12 max-w-2xl text-sm leading-relaxed text-stone-500">
            Explore the full range of {range.name} luxury vinyl tile products. Click any product to see all available colourways.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {range.products.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${range.slug}/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-stone-200/60 bg-white transition-all hover:border-brand/30 hover:shadow-md"
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
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-stone-900 transition-colors group-hover:text-brand">
                      {product.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-[0.6875rem] font-medium text-stone-500">
                      {product.colourways.length} colours
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-stone-400">{product.format}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    View Colourways
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
                About {range.name}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Why specify {range.name}?
              </h2>
            </div>
            <div className="space-y-5">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-stone-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can't find your product */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-lg border border-stone-200/60 bg-white p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                Can&apos;t find your product?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-500">
                We source any product from any brand. If you need a specific
                vinyl tile product not listed here, get in touch and we&apos;ll
                find it for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Also explore</p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-8 md:text-4xl">
            Other ranges
          </h2>

          <div className="space-y-2">
            {otherRanges.map((other) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="group flex items-center justify-between rounded-lg border border-stone-200/60 bg-white px-5 py-4 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-brand">
                    {other.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-stone-400">{other.tagline}</p>
                </div>
                <ArrowRight className="size-4 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
