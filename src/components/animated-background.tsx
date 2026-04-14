"use client";

import { useRef, useEffect } from "react";

/**
 * Animated gradient blob background inspired by microsoft.ai.
 * Renders warm organic gradient blobs on a low-res canvas with CSS blur,
 * creating a dreamy, flowing effect that reacts to mouse movement.
 */

type BlobDef = {
  readonly x: number;
  readonly y: number;
  readonly r: number;
  readonly color: readonly [number, number, number];
  readonly alpha: number;
  readonly fx: number;
  readonly fy: number;
  readonly ax: number;
  readonly ay: number;
};

const WARM_BLOBS: readonly BlobDef[] = [
  // Large warm peach – anchors the center-left
  { x: 0.25, y: 0.3, r: 0.55, color: [242, 185, 158], alpha: 0.72, fx: 0.13, fy: 0.10, ax: 0.09, ay: 0.07 },
  // Deep coral – top-right warmth
  { x: 0.78, y: 0.18, r: 0.42, color: [212, 142, 132], alpha: 0.62, fx: 0.10, fy: 0.16, ax: 0.07, ay: 0.10 },
  // Pale cream highlight – center glow
  { x: 0.52, y: 0.50, r: 0.58, color: [248, 212, 192], alpha: 0.50, fx: 0.08, fy: 0.07, ax: 0.11, ay: 0.08 },
  // Deep rose – bottom-left shadow
  { x: 0.12, y: 0.72, r: 0.38, color: [192, 122, 118], alpha: 0.56, fx: 0.16, fy: 0.12, ax: 0.06, ay: 0.09 },
  // Warm salmon – right side fill
  { x: 0.88, y: 0.58, r: 0.44, color: [232, 172, 152], alpha: 0.52, fx: 0.07, fy: 0.14, ax: 0.10, ay: 0.06 },
  // Mauve shadow – left edge depth
  { x: 0.04, y: 0.42, r: 0.36, color: [182, 118, 114], alpha: 0.42, fx: 0.12, fy: 0.09, ax: 0.08, ay: 0.11 },
  // Light highlight – top accent
  { x: 0.62, y: 0.08, r: 0.32, color: [248, 218, 198], alpha: 0.48, fx: 0.18, fy: 0.11, ax: 0.06, ay: 0.07 },
  // Subtle warm center – adds body
  { x: 0.45, y: 0.82, r: 0.40, color: [228, 168, 148], alpha: 0.44, fx: 0.09, fy: 0.17, ax: 0.08, ay: 0.05 },
] as const;

const DARK_BLOBS: readonly BlobDef[] = [
  { x: 0.30, y: 0.25, r: 0.50, color: [110, 75, 68], alpha: 0.65, fx: 0.10, fy: 0.08, ax: 0.08, ay: 0.06 },
  { x: 0.72, y: 0.20, r: 0.40, color: [130, 85, 78], alpha: 0.55, fx: 0.08, fy: 0.12, ax: 0.07, ay: 0.09 },
  { x: 0.50, y: 0.55, r: 0.52, color: [95, 68, 62], alpha: 0.50, fx: 0.06, fy: 0.05, ax: 0.10, ay: 0.07 },
  { x: 0.15, y: 0.70, r: 0.36, color: [120, 80, 72], alpha: 0.48, fx: 0.13, fy: 0.10, ax: 0.06, ay: 0.08 },
  { x: 0.85, y: 0.60, r: 0.42, color: [105, 72, 65], alpha: 0.45, fx: 0.06, fy: 0.11, ax: 0.09, ay: 0.05 },
  { x: 0.40, y: 0.85, r: 0.38, color: [140, 92, 85], alpha: 0.40, fx: 0.09, fy: 0.14, ax: 0.07, ay: 0.06 },
] as const;

const BRAND_BLOBS: readonly BlobDef[] = [
  { x: 0.25, y: 0.30, r: 0.50, color: [165, 95, 108], alpha: 0.60, fx: 0.11, fy: 0.09, ax: 0.08, ay: 0.07 },
  { x: 0.75, y: 0.25, r: 0.42, color: [180, 110, 120], alpha: 0.50, fx: 0.08, fy: 0.13, ax: 0.07, ay: 0.10 },
  { x: 0.50, y: 0.55, r: 0.55, color: [150, 85, 98], alpha: 0.48, fx: 0.07, fy: 0.06, ax: 0.10, ay: 0.08 },
  { x: 0.10, y: 0.65, r: 0.36, color: [195, 130, 140], alpha: 0.45, fx: 0.14, fy: 0.10, ax: 0.06, ay: 0.09 },
  { x: 0.88, y: 0.58, r: 0.40, color: [160, 92, 105], alpha: 0.42, fx: 0.06, fy: 0.12, ax: 0.09, ay: 0.05 },
  { x: 0.42, y: 0.82, r: 0.38, color: [175, 105, 115], alpha: 0.38, fx: 0.10, fy: 0.15, ax: 0.07, ay: 0.06 },
] as const;

const PRESETS = {
  warm:  { blobs: WARM_BLOBS,  base: "rgb(218,168,148)" },
  dark:  { blobs: DARK_BLOBS,  base: "rgb(75,60,55)" },
  brand: { blobs: BRAND_BLOBS, base: "rgb(130,78,90)" },
} as const;

type Variant = keyof typeof PRESETS;

export function AnimatedBackground({ className, variant = "warm" }: { className?: string; variant?: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Render at quarter resolution – the CSS blur hides any pixelation
    const SCALE = 0.25;
    let cw = 1;
    let ch = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      cw = Math.round(parent.clientWidth * SCALE);
      ch = Math.round(parent.clientHeight * SCALE);
      canvas.width = cw;
      canvas.height = ch;
    };

    const onPointerMove = (e: PointerEvent) => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };

    const onPointerLeave = () => {
      // Drift back to center when pointer leaves
      mouseRef.current.x = 0.5;
      mouseRef.current.y = 0.5;
    };

    const preset = PRESETS[variant];

    const draw = (time: number) => {
      const t = time * 0.001; // seconds

      // Smooth lerp toward actual mouse (creates soft, delayed response)
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.025;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.025;

      // Base fill
      ctx.fillStyle = preset.base;
      ctx.fillRect(0, 0, cw, ch);

      const mx = smoothRef.current.x;
      const my = smoothRef.current.y;
      const maxDim = Math.max(cw, ch);

      for (let i = 0; i < preset.blobs.length; i++) {
        const b = preset.blobs[i];
        const phase = i * 1.618; // golden-ratio phase offset

        // Autonomous organic oscillation
        const bx = b.x + Math.sin(t * b.fx + phase) * b.ax;
        const by = b.y + Math.cos(t * b.fy + phase * 0.73) * b.ay;

        // Mouse influence – blobs gently drift toward the pointer
        const dx = mx - bx;
        const dy = my - by;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        const pull = Math.max(0, 1 - dist / 0.8) * 0.07;

        const px = (bx + dx * pull) * cw;
        const py = (by + dy * pull) * ch;
        const radius = b.r * maxDim;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        const [cr, cg, cb] = b.color;
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},${b.alpha})`);
        grad.addColorStop(0.45, `rgba(${cr},${cg},${cb},${b.alpha * 0.38})`);
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, cw, ch);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();

    // Attach listeners
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      style={{ filter: "blur(50px)" }}
    />
  );
}
