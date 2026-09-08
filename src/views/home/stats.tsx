"use client";

import { useRef, useState } from "react";
import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { ProgressTrigger } from "@/components/animation/springs/progress-trigger";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StatItem } from "@/data/mocks/home";

const Stat = ({ stat, index }: { stat: StatItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: "translateY(20px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 200, friction: 24 }}
      delayIn={index * 90}
    >
      <div ref={ref}>
        <ProgressTrigger
          trigger={ref as React.RefObject<HTMLElement>}
          start="top bottom"
          end="center center"
          frameInterval={30}
          onChange={({ progress }) =>
            setValue(Math.round(progress * stat.value))
          }
        >
          <span className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            {value}
            {stat.suffix}
          </span>
        </ProgressTrigger>
        <p className="mt-3 text-sm text-white/55">{stat.label}</p>
      </div>
    </Inview>
  );
};

export interface StatsProps {
  items: StatItem[];
}

export const Stats = ({ items }: StatsProps) => {
  return (
    <section className="bg-white">
      <div className="shell px-5 pb-20 sm:px-8 lg:pb-28">
        <Inview
          tag="div"
          mode="once"
          from={{ opacity: 0, transform: "translateY(40px) scale(0.99)" }}
          to={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          config={{ tension: 180, friction: 26 }}
          className="rounded-card bg-ink px-6 py-12 text-white sm:px-8 sm:py-16 md:px-16"
        >
          <Eyebrow tone="light">By the numbers</Eyebrow>

          <TextEngine
            tag="h2"
            mode="once"
            overflow
            lineIn={{ y: "0%", opacity: 1 }}
            lineOut={{ y: "100%", opacity: 0 }}
            lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
            delayIn={120}
            className="mt-4 max-w-[20ch] text-3xl font-medium tracking-tight md:text-4xl"
          >
            Proof in the work, not the words.
          </TextEngine>

          <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {items.map((stat, i) => (
              <Stat key={stat.label} stat={stat} index={i} />
            ))}
          </ul>
        </Inview>
      </div>
    </section>
  );
};
