import Link from "next/link";
import { Check } from "lucide-react";

interface RangeCardProps {
  name: string;
  slug: string;
  description: string;
  features: string[];
}

export function RangeCard({ name, slug, description, features }: RangeCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/ranges/${slug}`}
        className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        View Range
      </Link>
    </div>
  );
}
