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

  // Extract the first paragraph as the intro, rest as body
  const introParagraph = range.description[0];
  const bodyParagraphs = range.description.slice(1);

  return (
    <>
      {/* Hero — dark editorial with brand accent */}
      <section className="bg-stone-950 pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <p className="text-editorial-caption text-brand-light mb-6">
                {range.name} Collection
              </p>
              <h1 className="text-editorial-display text-white">
                {range.name}
              </h1>
              <p className="mt-4 text-editorial-subheading text-stone-500">
                {range.tagline}
              </p>
            </div>
            <div className="lg:pt-16">
              <p className="text-[1.0625rem] leading-relaxed text-stone-400">
                {introParagraph}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-stone-950 transition-colors hover:bg-brand hover:text-white"
                >
                  Get a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-stone-700 px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-stone-400 transition-colors hover:border-stone-500 hover:text-white"
                >
                  {range.name} Website
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications — prominent strip */}
      <section className="border-b border-stone-200/60 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
            {range.specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`py-8 ${i > 0 ? "border-l border-stone-200/60 pl-5 sm:pl-6" : ""}`}
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

      {/* Editorial Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            {/* Sidebar heading */}
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

            {/* Body content — editorial prose */}
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

      {/* Key Features — extracted highlights */}
      <section className="bg-stone-50 border-y border-stone-200/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Key Features
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Built for performance.
          </h2>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="border-t border-stone-200 py-8 pr-8"
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

      {/* Can't find your product — editorial card */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid items-center gap-8 border border-stone-200/80 bg-stone-50/50 p-10 lg:grid-cols-[1fr_auto] lg:p-14">
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
              className="inline-flex items-center gap-2 self-start bg-stone-950 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
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
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">Also explore</p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Other ranges
          </h2>

          <div className="grid gap-0 divide-y divide-stone-200/80">
            {otherRanges.map((other, i) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="group flex items-center justify-between py-8"
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
