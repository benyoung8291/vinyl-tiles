import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";
import { selfCanonical } from "@/lib/seo";

const solution = getSolutionBySlug("healthcare-flooring");

export const metadata: Metadata = {
  title: "Healthcare & Aged Care Vinyl Flooring Australia | Hospital LVT Supply & Install",
  description:
    "Slip-rated, hygienic vinyl tile flooring for hospitals, aged care, and medical centres. Heat-welded seams, R10/R11 compliance, comfort underfoot. Supply and install across Melbourne, Sydney, and Brisbane.",
  ...selfCanonical("/healthcare-flooring"),
};

export default function HealthcareFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
