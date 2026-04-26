import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("hospitality-flooring");

export const metadata: Metadata = {
  title: "Hotel, Restaurant & Bar Vinyl Tile Flooring Australia | Hospitality LVT Supply & Install",
  alternates: { canonical: "/hospitality-flooring" },
  description:
    "Designer vinyl tile flooring for hotels, restaurants, bars, and resorts. Waterproof, slip-rated, and acoustically comfortable. Supply and install across Melbourne, Sydney, and Brisbane.",
};

export default function HospitalityFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
