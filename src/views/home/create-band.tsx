"use client";

import { useRef } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { ArrowRight } from "@/components/ui/icons";

interface Tile {
  content: React.ReactNode;
  variant: "light" | "accent" | "dark" | "ghost";
}

const TILE_STYLES: Record<Tile["variant"], string> = {
  light: "bg-surface text-foreground",
  accent: "bg-linear-to-br from-accent-from to-accent-to text-white",
  dark: "bg-ink text-white",
  ghost: "bg-surface/60 text-[#111]/35",
};

const tiles: Tile[] = [
  { content: "We", variant: "light" },
  { content: "Build", variant: "accent" },
  { content: <ArrowRight className="text-4xl sm:text-5xl" />, variant: "dark" },
  { content: "Systems", variant: "ghost" },
];

const Tile = ({ tile, index }: { tile: Tile; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: "translateY(28px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 200, friction: 22 }}
      delayIn={index * 120}
      className="flex-1"
    >
      <div ref={ref}>
        <Hover
          tag="div"
          trigger={ref as React.RefObject<HTMLElement>}
          from={{ scale: 1 }}
          to={{ scale: 1.03 }}
          config={{ tension: 300, friction: 18 }}
          className={`grid h-24 place-items-center rounded-pill text-3xl font-medium sm:h-40 sm:text-4xl ${TILE_STYLES[tile.variant]}`}
        >
          {tile.content}
        </Hover>
      </div>
    </Inview>
  );
};

export const CreateBand = () => {
  return (
    <section className="bg-white">
      <ul className="shell flex flex-col gap-3 px-5 py-10 sm:flex-row sm:gap-4 sm:px-8">
        {tiles.map((tile, i) => (
          <Tile key={i} tile={tile} index={i} />
        ))}
      </ul>
    </section>
  );
};
