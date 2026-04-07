"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t bg-background px-4 py-3 md:hidden">
      <Button
        variant="outline"
        size="lg"
        className="flex-1"
        render={<a href="tel:+1800000000" />}
      >
        <Phone className="size-4" />
        Call Us
      </Button>
      <Button size="lg" className="flex-1" render={<Link href="/contact" />}>
        Get a Quote
      </Button>
    </div>
  );
}
