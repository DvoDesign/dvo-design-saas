"use client";

import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Hover } from "@/components/animation/springs/hover";
import { LogoMark, ArrowRight } from "@/components/ui/icons";
import { HeroCardItem } from "@/data/mocks/home";

export interface HeroCardProps {
  items: HeroCardItem[];
}

export const HeroCard = ({ items }: HeroCardProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const rootRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const advance = (step: number) => {
    setDirection(step);
    setIndex((i) => (i + step + items.length) % items.length);
  };

  const swap = useSpring({
    key: index,
    from: { transform: `translateY(${direction * 14}px)`, opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 300, friction: 28 },
  });

  const active = items[index];

  return (
    <div
      ref={rootRef}
      className="w-full max-w-96 rounded-card-sm bg-white/70 p-2 shadow-sm ring-1 ring-line/70 backdrop-blur-md lg:w-76"
    >
      <button
        onClick={() => advance(1)}
        className="flex w-full gap-2 rounded-control text-left"
        aria-label="Next"
      >
        <span className="grid aspect-square w-24 place-items-center rounded-control bg-ink text-3xl text-accent-from">
          <LogoMark />
        </span>
        <span className="flex flex-1 flex-col justify-between rounded-control bg-surface/70 p-3">
          <span className="relative block min-h-13 overflow-hidden">
            <animated.span style={swap} className="block">
              <span className="block text-[0.65rem] font-medium tracking-wide text-[#111]/45 uppercase">
                {active.caption}
              </span>
              <span className="mt-1 block max-w-32 text-sm leading-snug font-medium">
                {active.title}
              </span>
            </animated.span>
          </span>

          <span className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-pill ${
                    i === index ? "w-4 bg-[#111]/70" : "w-1.5 bg-[#111]/20"
                  }`}
                />
              ))}
            </span>
            <span className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              <button
                ref={prevRef}
                onClick={(e) => {
                  e.stopPropagation();
                  advance(-1);
                }}
                aria-label="Previous"
              >
                <Hover
                  tag="span"
                  trigger={prevRef as React.RefObject<HTMLElement>}
                  from={{ scale: 1 }}
                  to={{ scale: 1.08 }}
                  config={{ tension: 320, friction: 18 }}
                  className="grid size-7 rotate-180 place-items-center rounded-pill bg-white text-[#111]/70 ring-1 ring-line"
                >
                  <ArrowRight />
                </Hover>
              </button>
              <button
                ref={nextRef}
                onClick={(e) => {
                  e.stopPropagation();
                  advance(1);
                }}
                aria-label="Next"
              >
                <Hover
                  tag="span"
                  trigger={nextRef as React.RefObject<HTMLElement>}
                  from={{ scale: 1 }}
                  to={{ scale: 1.08 }}
                  config={{ tension: 320, friction: 18 }}
                  className="grid size-7 place-items-center rounded-pill bg-white text-[#111]/70 ring-1 ring-line"
                >
                  <ArrowRight />
                </Hover>
              </button>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
};
