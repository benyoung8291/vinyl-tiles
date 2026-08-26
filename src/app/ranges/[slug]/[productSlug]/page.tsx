import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
import { ColourwayGrid } from "@/components/colourway-grid";
import { ranges, getProductBySlug } from "@/lib/ranges";
import { selfCanonical } from "@/lib/seo";

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
    title: `${product.name} by ${range.name} | ${product.colourways.length} Colourways | LVT Supply & Install`,
    description: `${product.name} ${product.style.toLowerCase()} vinyl tile flooring by ${range.name}. ${product.colourways.length} colourways. Commercial supply and install across Melbourne, Sydney, and Brisbane. ${product.description}`,
    ...selfCanonical(`/ranges/${range.slug}/${product.slug}`),
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
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-4 lg:px-10">
          <nav className="flex items-center gap-2 text-[13px]" style={{ color: "rgb(120, 110, 100)" }}>
            <Link href="/" className="transition-colors hover:text-[rgb(55,50,45)]">
              Home
            </Link>
            <span>/</span>
            <Link href={`/ranges/${range.slug}`} className="transition-colors hover:text-[rgb(55,50,45)]">
              {range.name}
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: "rgb(55, 50, 45)" }}>{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product header */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 md:pb-24 lg:px-10">
          <Link
            href={`/ranges/${range.slug}`}
            className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[rgb(38,35,30)]"
            style={{ color: "rgb(82, 75, 68)" }}
          >
            <ArrowLeft className="size-3.5" />
            Back to {range.name}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Hero image */}
            <div className="overflow-hidden rounded-lg border border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
              <img
                src={product.image}
                alt={`${product.name} by ${range.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                {range.name}
              </p>
              <h1
                className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-5"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                {product.name}
              </h1>

              <div className="mb-6 flex flex-wrap gap-2">
                <span
                  className="rounded-md border border-[rgb(230,225,215)] px-3 py-1.5 text-[12px] font-medium"
                  style={{ color: "rgb(82, 75, 68)" }}
                >
                  {product.style}
                </span>
                <span
                  className="rounded-md border border-[rgb(230,225,215)] px-3 py-1.5 text-[12px] font-medium"
                  style={{ color: "rgb(82, 75, 68)" }}
                >
                  {product.format}
                </span>
                <span
                  className="rounded-md bg-[rgb(55,50,45)] px-3 py-1.5 text-[12px] font-medium text-[rgb(252,250,245)]"
                >
                  {product.colourways.length} colourways
                </span>
              </div>

              <p className="mb-7 text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/contact?product=${product.slug}&range=${range.slug}`}
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Request a Quote
                </Link>
                <a
                  href={range.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[rgb(230,225,215)] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                  style={{ color: "rgb(55, 50, 45)" }}
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
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
              Colourways
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-4"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              {product.colourways.length} colours available
            </h2>
            <p className="text-[15px]" style={{ color: "rgb(82, 75, 68)" }}>
              Click any colourway for a closer look. Contact us for samples.
            </p>
          </div>

          <ColourwayGrid colourways={product.colourways} />
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
            Specifications
          </p>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-10"
            style={{ color: "rgb(38, 35, 30)" }}
          >
            Technical Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {range.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-[rgb(230,225,215)] p-6"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <p className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                  {spec.value}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-wide" style={{ color: "rgb(120, 110, 100)" }}>
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request sample CTA */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div
            className="flex flex-col items-start gap-7 rounded-lg border border-[rgb(230,225,215)] p-10 lg:flex-row lg:items-center lg:justify-between"
            style={{ backgroundColor: "rgb(248, 245, 237)" }}
          >
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Need a sample?
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                We can send you physical samples of {product.name} to help you make the right decision. Just let us know which colourways you&apos;re interested in.
              </p>
            </div>
            <Link
              href={`/contact?product=${product.slug}&range=${range.slug}&intent=samples`}
              className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
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
        description={`Submit an enquiry. We'll send samples and a written quote for ${product.name} by ${range.name}, with a free site inspection across Melbourne, Sydney, or Brisbane.`}
        buttonText="Submit an Enquiry"
        buttonHref={`/contact?product=${product.slug}&range=${range.slug}`}
      />

      {/* Other products in this range */}
      {otherProducts.length > 0 && (
        <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
              Also in {range.name}
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-10"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Other products
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.slice(0, 6).map((other) => (
                <Link
                  key={other.slug}
                  href={`/ranges/${range.slug}/${other.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-[rgb(230,225,215)] p-5 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                  style={{ backgroundColor: "rgb(252, 250, 245)" }}
                >
                  <div className="size-16 shrink-0 overflow-hidden rounded-md border border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
                    <img
                      src={other.image}
                      alt={other.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                      {other.name}
                    </h3>
                    <p className="mt-1 text-[12px]" style={{ color: "rgb(120, 110, 100)" }}>
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
