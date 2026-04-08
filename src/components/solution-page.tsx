import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";
import type { Solution } from "@/lib/solutions";
import { solutions } from "@/lib/solutions";

interface SolutionPageProps {
  solution: Solution;
}

export function SolutionPage({ solution }: SolutionPageProps) {
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Sector Solution
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 max-w-3xl md:text-5xl">
            {solution.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
                Overview
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                The right floor for the job.
              </h2>
            </div>
            <div className="space-y-5">
              {solution.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-stone-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Requirements
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-10 md:text-4xl">
            What this sector demands.
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solution.requirements.map((requirement, i) => (
              <div
                key={requirement}
                className="rounded-lg border border-stone-200/60 bg-white p-5"
              >
                <span className="text-xs font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Recommended
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-10 md:text-4xl">
            Products for this sector.
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {solution.recommendedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${product.slug}`}
                className="group rounded-lg border border-stone-200/60 bg-cream/50 p-6 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-brand">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {product.reason}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  View Range
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title={solution.ctaTitle}
        description={solution.ctaDescription}
      />

      {/* Continue Exploring */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Also explore
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-8 md:text-4xl">
            Other sectors
          </h2>

          <div className="space-y-2">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between rounded-lg border border-stone-200/60 bg-white px-5 py-4 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-brand">
                  {other.title.replace(/^Vinyl Tile Flooring for /, "")}
                </h3>
                <ArrowRight className="size-4 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
