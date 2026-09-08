"use client";

import { useEffect, useRef } from "react";

export interface LiquidRevealProps {
  beforeSrc: string;
  afterSrc: string;
  className?: string;
}

const BRUSH_RADIUS = 143;
const DECAY = 0.016;
const FADE_FRAMES = 120;

/**
 * Full-bleed before/after image with a cursor-driven "liquid" brush reveal.
 * `beforeSrc` is the always-visible base image; `afterSrc` is painted onto a
 * canvas layer wherever the pointer has recently moved, then fades back out.
 * Pure canvas drawing, not CSS — outside the "no CSS transitions" hard rule.
 */
export const LiquidReveal = ({
  beforeSrc,
  afterSrc,
  className = "",
}: LiquidRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let coverCanvas = document.createElement("canvas");
    const brushCanvas = document.createElement("canvas");
    const brushCtx = brushCanvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let radius = BRUSH_RADIUS * dpr;
    let idle = 0;
    let last: { x: number; y: number } | null = null;
    let points: { x: number; y: number }[] = [];
    let afterImg: HTMLImageElement | null = null;
    let raf = 0;

    const buildCover = () => {
      if (!afterImg || width === 0 || height === 0) return;
      coverCanvas = document.createElement("canvas");
      coverCanvas.width = width;
      coverCanvas.height = height;
      const coverCtx = coverCanvas.getContext("2d")!;
      const scale = Math.max(
        width / afterImg.naturalWidth,
        height / afterImg.naturalHeight,
      );
      const drawW = afterImg.naturalWidth * scale;
      const drawH = afterImg.naturalHeight * scale;
      const dx = (width - drawW) / 2;
      const dy = (height - drawH) / 2;
      coverCtx.drawImage(afterImg, dx, dy, drawW, drawH);
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      radius = BRUSH_RADIUS * dpr;
      const diam = Math.ceil(radius * 2);
      brushCanvas.width = diam;
      brushCanvas.height = diam;
      buildCover();
    };

    const stamp = (x: number, y: number) => {
      const diam = Math.ceil(radius * 2);
      brushCtx.clearRect(0, 0, diam, diam);
      brushCtx.globalCompositeOperation = "source-over";
      const gradient = brushCtx.createRadialGradient(
        radius,
        radius,
        0,
        radius,
        radius,
        radius,
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.55, "rgba(255,255,255,0.82)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      brushCtx.fillStyle = gradient;
      brushCtx.fillRect(0, 0, diam, diam);

      brushCtx.globalCompositeOperation = "source-in";
      brushCtx.drawImage(
        coverCanvas,
        x - radius,
        y - radius,
        diam,
        diam,
        0,
        0,
        diam,
        diam,
      );

      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(brushCanvas, x - radius, y - radius);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;

      if (x < -radius || x > width + radius || y < -radius || y > height + radius) {
        last = null;
        return;
      }

      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const step = Math.max(radius * 0.3, 1);
        const n = Math.min(Math.ceil(dist / step), 60);
        for (let i = 1; i <= n; i++) {
          points.push({ x: last.x + (dx * i) / n, y: last.y + (dy * i) / n });
        }
      } else {
        points.push({ x, y });
      }
      last = { x, y };
      idle = 0;
    };

    const tick = () => {
      const drawing = points.length > 0;
      if (!drawing) {
        idle += 1;
      }

      if (drawing || idle <= FADE_FRAMES) {
        const fade = drawing ? DECAY : Math.min(DECAY + idle * 0.004, 0.5);
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = `rgba(0,0,0,${fade})`;
        ctx.fillRect(0, 0, width, height);

        if (drawing) {
          for (const p of points) stamp(p.x, p.y);
          points = [];
        }

        if (idle === FADE_FRAMES) {
          ctx.clearRect(0, 0, width, height);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    afterImg = new Image();
    afterImg.crossOrigin = "anonymous";
    afterImg.src = afterSrc;
    afterImg.onload = buildCover;

    window.addEventListener("pointermove", handlePointerMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [afterSrc]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- external CDN, no next/image loader configured */}
      <img
        src={beforeSrc}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full"
      />
    </div>
  );
};
