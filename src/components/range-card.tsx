import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RangeCardProps {
  name: string;
  slug: string;
  description: string;
  features: string[];
}

export function RangeCard({ name, slug, description, features }: RangeCardProps) {
  return (
    <div
      className="rounded-lg p-8 transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: "rgb(245, 238, 224)" }}
    >
      <h3 className="font-heading text-2xl" style={{ color: "rgb(93, 82, 75)" }}>
        {name}
      </h3>
      <p className="mt-4 text-lg leading-relaxed" style={{ color: "rgb(93, 82, 75)" }}>
        {description}
      </p>
      {features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className="mt-1 size-5 shrink-0 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "rgb(140, 84, 98)" }}
              >
                +
              </div>
              <span className="text-base" style={{ color: "rgb(93, 82, 75)" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/ranges/${slug}`}
        className="mt-8 inline-flex items-center gap-2 text-base font-semibold transition-transform group hover:gap-3"
        style={{ color: "rgb(140, 84, 98)" }}
      >
        View Range
        <ArrowRight className="size-5 transition-transform" />
      </Link>
    </div>
  );
}
