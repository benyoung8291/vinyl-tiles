import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
      <section className="bg-primary px-6 py-20 text-center text-primary-foreground md:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {solution.title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6">
          {solution.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Key Requirements */}
      <section className="bg-muted px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Key Requirements
          </h2>
          <ul className="mt-10 space-y-4">
            {solution.requirements.map((requirement) => (
              <li key={requirement} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-base text-muted-foreground">
                  {requirement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Recommended Products
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {solution.recommendedProducts.map((product) => (
              <div
                key={product.slug}
                className="rounded-lg border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.reason}
                </p>
                <Link
                  href={`/ranges/${product.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View Range
                  <ArrowRight className="size-4" />
                </Link>
              </div>
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
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Continue Exploring
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Discover vinyl tile flooring solutions for other commercial sectors.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="rounded-lg border bg-background p-6 text-center transition-shadow hover:shadow-lg"
              >
                <h3 className="text-base font-semibold">{other.title.replace(/^Vinyl Tile Flooring for /, "")}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
