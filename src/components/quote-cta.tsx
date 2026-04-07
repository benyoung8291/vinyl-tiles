import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QuoteCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function QuoteCta({
  title = "Start your project",
  description = "Expert advice and a no-obligation quote for commercial vinyl tile flooring.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
}: QuoteCtaProps) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-editorial-heading text-white">{title}</h2>
            <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-white/70">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 self-start bg-white px-8 py-4 text-sm font-semibold tracking-[-0.01em] text-stone-950 transition-colors hover:bg-stone-100 lg:self-center"
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      {/* Decorative brand gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-dark/30 to-transparent" />
    </section>
  );
}
