import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";
import { selfCanonical } from "@/lib/seo";

const solution = getSolutionBySlug("retail-flooring");

export const metadata: Metadata = {
  title: "Retail Vinyl Tile Flooring Australia | Showroom & Store LVT Supply & Install",
  description:
    "Heavy-commercial vinyl tile flooring for retail stores, showrooms, and supermarkets. Scratch resistant, design-led, fast install. Supply and install across Melbourne, Sydney, and Brisbane.",
  ...selfCanonical("/retail-flooring"),
};

export default function RetailFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
