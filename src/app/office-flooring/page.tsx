import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import { SolutionPage } from "@/components/solution-page";
import { notFound } from "next/navigation";

const solution = getSolutionBySlug("office-flooring");

export const metadata: Metadata = {
  title: "Office Vinyl Tile Flooring Melbourne, Sydney & Brisbane | Commercial LVT",
  alternates: { canonical: "/office-flooring" },
  description:
    "Acoustic, durable vinyl tile flooring for offices and corporate fitouts. Supply and install across Melbourne, Sydney, and Brisbane. Free site inspection on every quote.",
};

export default function OfficeFlooringPage() {
  if (!solution) return notFound();
  return <SolutionPage solution={solution} />;
}
