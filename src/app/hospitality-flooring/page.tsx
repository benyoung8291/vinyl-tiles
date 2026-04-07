import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("hospitality-flooring");

export const metadata: Metadata = {
  title: solution?.title,
  description:
    "Stylish, durable vinyl tile flooring for hotels, restaurants, and bars. Water-resistant, design-led, and acoustically comfortable. Supply and installation Australia-wide.",
};

export default function HospitalityFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
