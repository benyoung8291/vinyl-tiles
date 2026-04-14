"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-stone-200/60 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href="tel:1300207915"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-stone-200/80 py-3 text-sm font-medium transition-all duration-500"
        style={{ color: 'rgb(140, 84, 98)' }}
      >
        <Phone className="size-4" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all duration-500 hover:shadow-lg"
        style={{ backgroundColor: 'rgb(140, 84, 98)' }}
      >
        Get a Quote
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
