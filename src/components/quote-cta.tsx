import Link from "next/link";
import { Button } from "@/components/ui/button";

interface QuoteCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function QuoteCta({
  title = "Get Your Free Quote Today",
  description = "Contact our team for expert advice and a no-obligation quote on commercial vinyl tile flooring for your project.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
}: QuoteCtaProps) {
  return (
    <section className="bg-primary px-6 py-16 text-center text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 text-lg text-primary-foreground/90">{description}</p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8 px-8 text-base"
          render={<Link href={buttonHref} />}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
