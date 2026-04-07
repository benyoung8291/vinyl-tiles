import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("retail-flooring");

export const metadata: Metadata = {
  title: solution?.title,
  description:
    "High-traffic vinyl tile flooring for retail stores and showrooms. Scratch-resistant, design-led, and quick to install. Commercial supply and installation Australia-wide.",
};

export default function RetailFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
