"use client";

import { useEffect, useRef, useState } from "react";
import { easings, useSpring, animated } from "@react-spring/web";
import { LogoMark } from "@/components/ui/icons";
import { useHomeUI } from "./store";
import { stopScroll, startScroll } from "@/utils/scroll-lock";

const FILL_MS = 1300;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Full-screen dark intro loader. Counts 000 → 100 over FILL_MS, then slides
 * up and unmounts, flipping the global `introReady` flag that gates every
 * above-the-fold reveal on the page.
 */
export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);
  const setIntroReady = useHomeUI((state) => state.setIntroReady);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    stopScroll();
    let raf = 0;

    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(elapsed / FILL_MS, 1);
      setProgress(Math.round(easeInOutCubic(t) * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const exitSpring = useSpring({
    transform: exiting ? "translateY(-100%)" : "translateY(0%)",
    config: { tension: 220, friction: 30 },
    onRest: () => {
      if (exiting) {
        setIntroReady(true);
        startScroll();
        setMounted(false);
      }
    },
  });

  const contentSpring = useSpring({
    opacity: exiting ? 0 : 1,
    transform: exiting ? "translateY(-12px)" : "translateY(0px)",
    config: { tension: 260, friction: 26 },
  });

  if (!mounted) return null;

  return (
    <animated.div
      style={exitSpring}
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center gap-8 rounded-b-card bg-ink text-white"
    >
      <animated.div
        style={contentSpring}
        className="flex flex-col items-center gap-5 text-center"
      >
        <div className="flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
          <LogoMark className="text-[1.875rem] text-accent-from" />
          DvoDesign
        </div>
        <p className="max-w-[24ch] text-sm text-white/55">
          Software architecture, built to scale.
        </p>
      </animated.div>

      <animated.div style={contentSpring} className="w-[min(22rem,72vw)] flex flex-col gap-3">
        <div className="h-px w-full bg-white/15">
          <div
            className="h-full bg-accent-from"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs font-medium tracking-wide text-white/45 uppercase">
          <span>Loading</span>
          <span className="tabular-nums text-white/80">
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </animated.div>
    </animated.div>
  );
};
