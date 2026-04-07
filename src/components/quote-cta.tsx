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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark">
      {/* Decorative warm glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-brand-light/20 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-white/5 blur-[60px]" />

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
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-[-0.01em] text-stone-950 shadow-lg shadow-black/10 transition-all hover:bg-stone-50 hover:-translate-y-0.5 hover:shadow-xl lg:self-center"
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
