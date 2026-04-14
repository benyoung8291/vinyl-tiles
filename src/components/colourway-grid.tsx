"use client";

import type { Colourway } from "@/lib/ranges";

interface ColourwayGridProps {
  colourways: Colourway[];
}

export function ColourwayGrid({ colourways }: ColourwayGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {colourways.map((colourway) => (
        <div
          key={colourway.name}
          className="group cursor-pointer overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-[rgb(140,84,98)] hover:shadow-md"
        >
          <div className="aspect-square overflow-hidden" style={{ backgroundColor: "rgb(247, 236, 217)" }}>
            <img
              src={colourway.image}
              alt={`${colourway.name} colourway`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-4" style={{ backgroundColor: "rgb(254, 249, 237)" }}>
            <p className="font-semibold" style={{ color: "rgb(93, 82, 75)" }}>
              {colourway.name}
            </p>
            {colourway.code && (
              <p className="mt-1 text-xs" style={{ color: "rgb(140, 84, 98)" }}>
                {colourway.code}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
