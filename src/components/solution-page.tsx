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
      <section className="bg-stone-950 pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <p className="text-editorial-caption text-brand-light mb-6">
            Sector Solution
          </p>
          <h1 className="text-editorial-display text-white max-w-3xl">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-stone-400">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Content — editorial layout */}
      <section className="bg-white">
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
      <section className="border-y border-stone-200/60 bg-stone-50">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Requirements
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            What this sector demands.
          </h2>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {solution.requirements.map((requirement, i) => (
              <div
                key={requirement}
                className="border-t border-stone-200 py-6 pr-8"
              >
                <span className="text-editorial-caption text-stone-300">
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
      <section className="bg-white">
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
                className="group border border-stone-200/80 p-8 transition-all hover:border-brand/20 hover:bg-brand-50 lg:p-10"
              >
                <h3 className="text-xl font-bold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-brand">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {product.reason}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 transition-colors group-hover:text-brand">
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
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Also explore
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Other sectors
          </h2>

          <div className="grid gap-0 divide-y divide-stone-200/80">
            {otherSolutions.map((other, i) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between py-8"
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
