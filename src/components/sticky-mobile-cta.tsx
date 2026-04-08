"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 border-t border-stone-200/60 bg-cream/95 px-3 py-2 backdrop-blur-md md:hidden">
      <a
        href="tel:1300207915"
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-stone-200 py-2.5 text-sm font-medium text-stone-600"
      >
        <Phone className="size-4" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-brand py-2.5 text-sm font-semibold text-white"
      >
        Get a Quote
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
