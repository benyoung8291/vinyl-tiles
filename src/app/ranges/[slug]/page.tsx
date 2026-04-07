import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpecBadge } from "@/components/spec-badge";
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

  return (
    <>
      {/* Hero */}
      <section className="bg-muted px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {range.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{range.tagline}</p>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {range.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Technical Specifications
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <SpecBadge
                key={spec.label}
                label={spec.label}
                value={spec.value}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Link */}
      <section className="px-6 py-12 text-center">
        <Button
          variant="outline"
          size="lg"
          className="gap-2 px-6 text-base"
          render={
            <a
              href={range.manufacturerUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Visit {range.name} Website
          <ExternalLink className="size-4" />
        </Button>
      </section>

      {/* Can't find your product? */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-lg border bg-background p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Can&apos;t find your product?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We source any product from any brand. If you need a specific vinyl
            tile product, get in touch and we&apos;ll find it for you.
          </p>
          <Button
            size="lg"
            className="mt-6 px-8 text-base"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta />

      {/* Explore Other Ranges */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Explore Other Ranges
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {otherRanges.map((other) => (
              <Link
                key={other.slug}
                href={`/ranges/${other.slug}`}
                className="rounded-lg border bg-background p-6 text-center transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{other.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
