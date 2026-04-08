import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QuoteCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function QuoteCta({
  title = "Let\u2019s sort your floor out.",
  description = "Tell us what you need. We\u2019ll come back with a quote and a plan.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
}: QuoteCtaProps) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-50"
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
