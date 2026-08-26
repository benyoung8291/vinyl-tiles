import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";
import { selfCanonical } from "@/lib/seo";

const solution = getSolutionBySlug("education-flooring");

export const metadata: Metadata = {
  title: "School & University Vinyl Tile Flooring Australia | Education LVT Supply & Install",
  description:
    "Heavy-commercial vinyl tile flooring for schools, universities, and TAFEs. Acoustic backing, R10 slip rating, low lifecycle cost. Supply and install across Melbourne, Sydney, and Brisbane.",
  ...selfCanonical("/education-flooring"),
};

export default function EducationFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
