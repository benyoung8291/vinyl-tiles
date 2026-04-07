import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("office-flooring");

export const metadata: Metadata = {
  title: solution?.title,
  description:
    "Durable, professional vinyl tile flooring for offices and corporate fitouts. Acoustic performance, design flexibility, and low lifecycle cost. Supply and installation Australia-wide.",
};

export default function OfficeFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
