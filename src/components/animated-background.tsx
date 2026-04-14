"use client";

/**
 * Subtle decorative background — microsoft.ai inspired.
 * Replaces heavy canvas animation with clean, static gradient overlays
 * and faint geometric line patterns for a refined, minimal feel.
 */

const PRESETS = {
  warm: {
    base: "rgb(242, 238, 228)",
    gradient: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(240,228,210,0.6) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 75% 60%, rgba(235,230,218,0.5) 0%, transparent 70%)",
  },
  dark: {
    base: "rgb(55, 50, 45)",
    gradient: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(82,75,68,0.4) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 75% 60%, rgba(70,64,58,0.3) 0%, transparent 70%)",
  },
  brand: {
    base: "rgb(82, 75, 68)",
    gradient: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(100,92,82,0.4) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 75% 60%, rgba(90,82,74,0.3) 0%, transparent 70%)",
  },
} as const;

type Variant = keyof typeof PRESETS;

export function AnimatedBackground({ className, variant = "warm" }: { className?: string; variant?: Variant }) {
  const preset = PRESETS[variant];
  const isDark = variant === "dark" || variant === "brand";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: preset.base }}
    >
      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: preset.gradient }}
      />
      {/* Subtle geometric line pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.03)" : "rgba(200,190,175,0.08)"} 1px, transparent 1px),
            linear-gradient(0deg, ${isDark ? "rgba(255,255,255,0.02)" : "rgba(200,190,175,0.05)"} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Faint diagonal accent lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 120px,
            ${isDark ? "rgba(255,255,255,0.02)" : "rgba(200,190,175,0.04)"} 120px,
            ${isDark ? "rgba(255,255,255,0.02)" : "rgba(200,190,175,0.04)"} 121px
          )`,
        }}
      />
    </div>
  );
}
