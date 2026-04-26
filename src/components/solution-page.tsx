import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
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
      {/* Hero Section with image */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-28 md:pt-36 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-end">
            <div className="pb-16 md:pb-20 lg:pb-28">
              <p
                className="text-[11px] font-medium uppercase tracking-widest mb-4"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Flooring Solution
              </p>
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-5"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                {solution.title.replace(/^Vinyl Tile Flooring for /, "")}
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgb(82, 75, 68)" }}>
                {solution.subtitle}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
              >
                Book a Site Inspection
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[rgb(215,208,198)] to-transparent" />
      </section>

      {/* Intro Content Section */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-widest mb-4"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Why This Matters
              </p>
              <h2
                className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                The right floor for the job.
              </h2>
            </div>
            <div className="space-y-6">
              {solution.content.map((paragraph, index) => (
                <p key={index} className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges/Requirements Section */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Key Demands
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              What this sector requires.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solution.requirements.map((requirement, i) => (
              <div
                key={requirement}
                className="rounded-lg border border-[rgb(230,225,215)] p-7 transition-all duration-200 hover:border-[rgb(200,195,185)]"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <span className="text-[12px] font-semibold" style={{ color: "rgb(120, 110, 100)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "rgb(55, 50, 45)" }}>
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline enquiry strip */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-10 md:py-12 lg:px-10">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "rgb(120, 110, 100)" }}>
                Specifying for {solution.title.replace(/^Vinyl Tile Flooring for /, "").toLowerCase()}?
              </p>
              <p className="text-[16px] font-semibold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Tell us the building, the brief, the timeline. We respond within one business day.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:1300207915"
                className="inline-flex items-center gap-2 rounded-md border border-[rgb(230,225,215)] px-5 py-2.5 text-[13px] font-medium transition-colors hover:bg-[rgb(248,245,237)]"
                style={{ color: "rgb(55, 50, 45)" }}
              >
                <Phone className="size-3.5" />
                1300 207 915
              </a>
              <Link
                href={`/contact?sector=${solution.slug}`}
                className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-5 py-2.5 text-[13px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
              >
                Submit an Enquiry
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Solutions
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Recommended products.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.recommendedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/ranges/${product.slug}`}
                className="group rounded-lg border border-[rgb(230,225,215)] p-7 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <h3 className="text-lg font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                  {product.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  {product.reason}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
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
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Explore More
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Other sectors
            </h2>
          </div>

          <div className="space-y-3">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between rounded-lg border border-[rgb(230,225,215)] px-7 py-5 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <h3 className="text-[15px] font-semibold" style={{ color: "rgb(38, 35, 30)" }}>
                  {other.title.replace(/^Vinyl Tile Flooring for /, "")}
                </h3>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" style={{ color: "rgb(82, 75, 68)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
