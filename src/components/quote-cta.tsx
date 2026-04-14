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
    <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-24 lg:px-10">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/60">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 rounded-md bg-[rgb(252,250,245)] px-7 py-3.5 text-[15px] font-semibold text-[rgb(38,35,30)] transition-all duration-200 hover:bg-white flex-shrink-0"
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
