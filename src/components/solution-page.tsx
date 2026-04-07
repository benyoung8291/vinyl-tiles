import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 pt-[72px]">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px]" />
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <p className="text-editorial-caption text-brand-light mb-6">
            Sector Solution
          </p>
          <h1 className="text-editorial-display text-white max-w-3xl">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-400">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand mb-4">
                Overview
              </p>
              <h2 className="text-editorial-heading text-stone-950">
                The right floor
                <br />
                for the job.
              </h2>
            </div>
            <div className="space-y-6 border-t border-stone-200/60 pt-8 lg:border-t-0 lg:pt-0">
              {solution.content.map((paragraph, index) => (
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

      {/* Key Requirements */}
      <section className="bg-gradient-to-b from-brand-50/50 to-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Requirements
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            What this sector demands.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.requirements.map((requirement, i) => (
              <div
                key={requirement}
                className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone-700">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Recommended
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Products for this sector.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {solution.recommendedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-brand/20 lg:p-10"
              >
                <h3 className="text-xl font-bold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-brand">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {product.reason}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand/60 transition-colors group-hover:text-brand">
                  View Range
                  <ArrowRight className="size-3.5" />
                </div>
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
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Also explore
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Other sectors
          </h2>

          <div className="space-y-3">
            {otherSolutions.map((other, i) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between rounded-xl border border-stone-200/60 bg-white px-6 py-5 shadow-sm transition-all hover:shadow-md hover:border-brand/20"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-editorial-caption text-stone-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-brand md:text-xl">
                    {other.title.replace(/^Vinyl Tile Flooring for /, "")}
                  </h3>
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
