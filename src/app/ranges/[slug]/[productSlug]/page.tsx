import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
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
      <section className="border-b border-stone-200/60 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-3 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-stone-400">
            <Link href="/" className="transition-colors hover:text-stone-700">Home</Link>
            <span>/</span>
            <Link href={`/ranges/${range.slug}`} className="transition-colors hover:text-stone-700">{range.name}</Link>
            <span>/</span>
            <span className="text-stone-700">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16 lg:px-8">
          <Link
            href={`/ranges/${range.slug}`}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to {range.name}
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Hero image */}
            <div className="overflow-hidden rounded-lg bg-stone-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={`${product.name} by ${range.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
                {range.name}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                  {product.style}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                  {product.format}
                </span>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {product.colourways.length} colourways
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Request a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900"
                >
                  View on {range.name}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colourways grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">Colourways</p>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
              {product.colourways.length} colours available
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Click any colourway for a closer look. Contact us for samples.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {product.colourways.map((colourway) => (
              <div
                key={colourway.name}
                className="group cursor-pointer overflow-hidden rounded-lg border border-stone-200/60 bg-cream/50 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={colourway.image}
                    alt={`${colourway.name} colourway`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-stone-800">{colourway.name}</p>
                  {colourway.code && (
                    <p className="text-xs text-stone-400">{colourway.code}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="border-t border-stone-200/60 bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">Specifications</p>
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 mb-8 md:text-3xl">
            Technical Details
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-stone-200/60 bg-white p-4"
              >
                <p className="text-lg font-bold text-stone-900">{spec.value}</p>
                <p className="mt-0.5 text-xs text-stone-400">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request sample CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-lg border border-stone-200/60 bg-cream p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                Need a sample?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-500">
                We can send you physical samples of {product.name} to help you make the right decision. Just let us know which colourways you&apos;re interested in.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Request Samples
              <ArrowRight className="size-4" />
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
        <section className="bg-cream">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">Also in {range.name}</p>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 mb-8 md:text-3xl">
              Other products
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.slice(0, 6).map((other) => (
                <Link
                  key={other.slug}
                  href={`/ranges/${range.slug}/${other.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-stone-200/60 bg-white p-4 transition-all hover:border-brand/30 hover:shadow-md"
                >
                  <div className="size-16 shrink-0 overflow-hidden rounded-md bg-stone-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={other.image}
                      alt={other.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-stone-900 transition-colors group-hover:text-brand">
                      {other.name}
                    </h3>
                    <p className="text-xs text-stone-400">{other.colourways.length} colourways</p>
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
