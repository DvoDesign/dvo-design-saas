"use client";

import { useRef } from "react";
import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TagChip } from "@/components/ui/tag-chip";
import { LogoMark, ArrowUpRight } from "@/components/ui/icons";
import { PortfolioItem } from "@/data/mocks/home";

const Card = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const cardRef = useRef<HTMLElement>(null);

  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: "translateY(48px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 180, friction: 26 }}
      delayIn={index * 90}
    >
      <a href="#" className="block">
        <Hover
          tag="article"
          trigger={cardRef as React.RefObject<HTMLElement>}
          from={{ transform: "translateY(0px) scale(1)" }}
          to={{ transform: "translateY(-8px) scale(1.012)" }}
          config={{ tension: 260, friction: 22 }}
          ref={cardRef}
          className="relative min-h-88 overflow-hidden rounded-card bg-ink p-6 text-white ring-1 ring-white/5 sm:min-h-104 sm:p-8"
        >
          <div className="flex justify-between text-xs tracking-wide text-white/45 uppercase">
            <span>
              {item.category} — {item.year}
            </span>
            <Hover
              tag="span"
              trigger={cardRef as React.RefObject<HTMLElement>}
              from={{ transform: "rotate(0deg) scale(1)" }}
              to={{ transform: "rotate(45deg) scale(1.08)" }}
              config={{ tension: 280, friction: 18 }}
              className="grid size-11 place-items-center rounded-pill bg-white/10 text-white ring-1 ring-white/15"
            >
              <ArrowUpRight />
            </Hover>
          </div>

          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="flex items-start gap-1">
              <LogoMark className="text-[4.5rem] text-white/90" />
              <span className="text-xs text-white/60">®</span>
            </span>
          </div>

          <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {item.name}
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/55">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <TagChip key={tag}>{tag}</TagChip>
              ))}
            </div>
          </div>
        </Hover>
      </a>
    </Inview>
  );
};

export interface PortfolioProps {
  items: PortfolioItem[];
}

export const Portfolio = ({ items }: PortfolioProps) => {
  return (
    <section id="works" className="bg-white">
      <div className="shell px-5 pt-10 pb-20 sm:px-8 lg:pb-28">
        <div className="flex flex-col items-center gap-5 text-center">
          <Inview
            tag="div"
            mode="once"
            from={{ opacity: 0, transform: "translateY(10px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 200, friction: 24 }}
          >
            <Eyebrow className="rounded-pill border border-line px-4 py-1.5">
              Portfolio
            </Eyebrow>
          </Inview>

          <TextEngine
            tag="h2"
            mode="once"
            overflow
            lineIn={{ y: "0%", opacity: 1 }}
            lineOut={{ y: "100%", opacity: 0 }}
            lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
            delayIn={120}
            className="w-fit text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Selected Work
          </TextEngine>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Card key={item.name} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};
