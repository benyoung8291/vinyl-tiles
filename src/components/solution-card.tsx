import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  href: string;
  description: string;
  features: string[];
}

export function SolutionCard({ title, href, description, features }: SolutionCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {features.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Learn More
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
