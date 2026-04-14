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
    <section style={{ backgroundColor: 'rgb(140, 84, 98)' }}>
      <div className="mx-auto max-w-[1728px] px-6 py-20 md:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-base font-semibold text-stone-900 transition-all duration-500 hover:shadow-lg hover:scale-105 flex-shrink-0"
          >
            {buttonText}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
