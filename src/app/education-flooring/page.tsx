import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("education-flooring");

export const metadata: Metadata = {
  title: solution?.title,
  description:
    "Safe, durable vinyl tile flooring for schools and universities. Acoustic performance, slip safety, and budget-friendly lifecycle cost. Supply and installation Australia-wide.",
};

export default function EducationFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
