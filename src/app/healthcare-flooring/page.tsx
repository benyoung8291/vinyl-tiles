import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("healthcare-flooring");

export const metadata: Metadata = {
  title: solution?.title,
  description:
    "Hygienic, slip-resistant vinyl tile flooring for hospitals, aged care, and medical facilities. Infection control compliant. Supply and installation Australia-wide.",
};

export default function HealthcareFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
