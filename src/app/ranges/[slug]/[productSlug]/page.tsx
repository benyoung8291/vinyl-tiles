import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
import { ColourwayGrid } from "@/components/colourway-grid";
import { ranges, getProductBySlug } from "@/lib/ranges";

interface ProductPageProps {
  params: Promise<{ slug: string; productSlug: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; productSlug: string }[] = [];
  for (const range of ranges) {
    for (const product of range.products) {
      params.push({ slug: range.slug, productSlug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const result = getProductBySlug(slug, productSlug);

  if (!result) {
    return { title: "Product Not Found" };
  }

  const { range, product } = result;

  return {
    title: `${product.name} by ${range.name} | Colourways & Specs`,
    description: `${product.name} ${product.style} vinyl flooring by ${range.name}. ${product.colourways.length} colourways available. ${product.description}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, productSlug } = await params;
  const result = getProductBySlug(slug, productSlug);

  if (!result) {
    notFound();
  }

  const { range, product } = result;
  const otherProducts = range.products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "rgb(93, 82, 75)" }}>
            <Link href="/" className="transition-opacity hover:opacity-70">
              Home
            </Link>
            <span>/</span>
            <Link href={`/ranges/${range.slug}`} className="transition-opacity hover:opacity-70">
              {range.name}
            </Link>
            <span>/</span>
            <span className="font-semibold">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product header */}
      <section style={{ backgroundColor: "rgb(251, 211, 190)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <Link
            href={`/ranges/${range.slug}`}
            className="mb-8 inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgb(93, 82, 75)" }}
          >
            <ArrowLeft className="size-4" />
            Back to {range.name}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Hero image */}
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={`${product.name} by ${range.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
                {range.name}
              </p>
              <h1 className="font-heading text-5xl md:text-6xl tracking-tight mb-6" style={{ color: "rgb(93, 82, 75)" }}>
                {product.name}
              </h1>

              <div className="mb-8 flex flex-wrap gap-3">
                <span
                  className="rounded-sm px-4 py-2 text-sm font-medium"
                  style={{ backgroundColor: "rgb(245, 238, 224)", color: "rgb(93, 82, 75)" }}
                >
                  {product.style}
                </span>
                <span
                  className="rounded-sm px-4 py-2 text-sm font-medium"
                  style={{ backgroundColor: "rgb(245, 238, 224)", color: "rgb(93, 82, 75)" }}
                >
                  {product.format}
                </span>
                <span
                  className="rounded-sm px-4 py-2 text-sm font-medium"
                  style={{ backgroundColor: "rgb(140, 84, 98)", color: "white" }}
                >
                  {product.colourways.length} colourways
                </span>
              </div>

              <p className="mb-8 text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "rgb(140, 84, 98)" }}
                >
                  Request a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 py-3 text-base font-medium transition-all hover:opacity-80"
                  style={{ borderColor: "rgb(93, 82, 75)", color: "rgb(93, 82, 75)" }}
                >
                  View on {range.name}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colourways grid */}
      <section style={{ backgroundColor: "rgb(245, 238, 224)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div className="mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
              Colourways
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
              {product.colourways.length} colours available
            </h2>
            <p className="text-lg" style={{ color: "rgb(93, 82, 75)" }}>
              Click any colourway for a closer look. Contact us for samples.
            </p>
          </div>

          <ColourwayGrid colourways={product.colourways} />
        </div>
      </section>

      {/* Technical Specifications */}
      <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
            Specifications
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
            Technical Details
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg p-6"
                style={{ backgroundColor: "rgb(254, 249, 237)" }}
              >
                <p className="text-3xl font-bold" style={{ color: "rgb(93, 82, 75)" }}>
                  {spec.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-wide" style={{ color: "rgb(140, 84, 98)" }}>
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request sample CTA */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div
            className="flex flex-col items-start gap-8 rounded-lg p-12 lg:flex-row lg:items-center lg:justify-between"
            style={{ backgroundColor: "rgb(245, 238, 224)" }}
          >
            <div>
              <h2 className="font-heading text-3xl mb-4" style={{ color: "rgb(93, 82, 75)" }}>
                Need a sample?
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
                We can send you physical samples of {product.name} to help you make the right decision. Just let us know which colourways you&apos;re interested in.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "rgb(140, 84, 98)" }}
            >
              Request Samples
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title={`Specify ${product.name} for your project`}
        description={`Get expert advice and a no-obligation quote for ${product.name} by ${range.name}.`}
      />

      {/* Other products in this range */}
      {otherProducts.length > 0 && (
        <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
          <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>
              Also in {range.name}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-tight" style={{ color: "rgb(93, 82, 75)" }}>
              Other products
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.slice(0, 6).map((other) => (
                <Link
                  key={other.slug}
                  href={`/ranges/${range.slug}/${other.slug}`}
                  className="group flex items-center gap-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "rgb(254, 249, 237)" }}
                >
                  <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={other.image}
                      alt={other.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg transition-colors group-hover:" style={{ color: "rgb(93, 82, 75)" }}>
                      {other.name}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: "rgb(140, 84, 98)" }}>
                      {other.colourways.length} colourways
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
