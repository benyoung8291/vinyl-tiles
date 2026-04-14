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
      {/* Hero Section */}
      <section style={{ backgroundColor: 'rgb(254, 249, 237)' }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-32 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(140, 84, 98)' }}>
              Flooring Solution
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: 'rgb(93, 82, 75)' }}>
              {solution.title.replace(/^Vinyl Tile Flooring for /, "")}
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl" style={{ color: 'rgb(93, 82, 75)' }}>
              {solution.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-32 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(140, 84, 98)' }}>
                Why This Matters
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'rgb(93, 82, 75)' }}>
                The right floor for the job.
              </h2>
            </div>
            <div className="space-y-7">
              {solution.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed" style={{ color: 'rgb(93, 82, 75)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges/Requirements Section */}
      <section style={{ backgroundColor: 'rgb(254, 249, 237)' }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-32 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(140, 84, 98)' }}>
              Key Demands
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'rgb(93, 82, 75)' }}>
              What this sector requires.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.requirements.map((requirement, i) => (
              <div
                key={requirement}
                className="rounded-xl p-8 border border-stone-200/40 transition-all duration-500 hover:shadow-md bg-white"
              >
                <span className="text-sm font-semibold" style={{ color: 'rgb(140, 84, 98)' }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgb(93, 82, 75)' }}>
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-32 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(140, 84, 98)' }}>
              Solutions
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'rgb(93, 82, 75)' }}>
              Recommended products.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solution.recommendedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${product.slug}`}
                className="group rounded-xl border border-stone-200/40 p-8 transition-all duration-500 hover:shadow-lg hover:border-stone-200/80 bg-white"
              >
                <h3 className="font-heading text-2xl font-bold transition-colors duration-500" style={{ color: 'rgb(93, 82, 75)' }}>
                  {product.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgb(93, 82, 75)' }}>
                  {product.reason}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-500 group-hover:gap-3" style={{ color: 'rgb(140, 84, 98)' }}>
                  View Range
                  <ArrowRight className="size-4" />
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

      {/* Explore Other Sectors */}
      <section style={{ backgroundColor: 'rgb(254, 249, 237)' }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-32 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(140, 84, 98)' }}>
              Explore More
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'rgb(93, 82, 75)' }}>
              Other sectors
            </h2>
          </div>

          <div className="space-y-3">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between rounded-lg border border-stone-200/40 bg-white px-8 py-5 transition-all duration-500 hover:border-stone-200/80 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold transition-colors duration-500" style={{ color: 'rgb(93, 82, 75)' }}>
                  {other.title.replace(/^Vinyl Tile Flooring for /, "")}
                </h3>
                <ArrowRight className="size-5 transition-all duration-500 group-hover:translate-x-1" style={{ color: 'rgb(140, 84, 98)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
