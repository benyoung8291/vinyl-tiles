"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-[rgb(230,225,215)] bg-[rgb(252,250,245)]/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <a
        href="tel:1300207915"
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[rgb(230,225,215)] py-3 text-sm font-medium text-[rgb(55,50,45)] transition-all duration-200"
      >
        <Phone className="size-4" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[rgb(55,50,45)] py-3 text-sm font-semibold text-[rgb(252,250,245)] transition-all duration-200 hover:bg-[rgb(38,35,30)]"
      >
        Get a Quote
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
