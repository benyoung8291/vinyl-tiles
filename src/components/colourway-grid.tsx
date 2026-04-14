"use client";

import type { Colourway } from "@/lib/ranges";

interface ColourwayGridProps {
  colourways: Colourway[];
}

export function ColourwayGrid({ colourways }: ColourwayGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {colourways.map((colourway) => (
        <div
          key={colourway.name}
          className="group cursor-pointer overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(55,50,45)] hover:shadow-sm"
        >
          <div className="aspect-square overflow-hidden" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
            <img
              src={colourway.image}
              alt={`${colourway.name} colourway`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-3.5" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
            <p className="text-[13px] font-semibold" style={{ color: "rgb(38, 35, 30)" }}>
              {colourway.name}
            </p>
            {colourway.code && (
              <p className="mt-0.5 text-[11px]" style={{ color: "rgb(120, 110, 100)" }}>
                {colourway.code}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
