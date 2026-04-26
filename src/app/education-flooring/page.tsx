import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("education-flooring");

export const metadata: Metadata = {
  title: "School & University Vinyl Tile Flooring Australia | Education LVT Supply & Install",
  alternates: { canonical: "/education-flooring" },
  description:
    "Heavy-commercial vinyl tile flooring for schools, universities, and TAFEs. Acoustic backing, R10 slip rating, low lifecycle cost. Supply and install across Melbourne, Sydney, and Brisbane.",
};

export default function EducationFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
