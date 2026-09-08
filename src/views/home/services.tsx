"use client";

import { useRef } from "react";
import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowUpRight } from "@/components/ui/icons";
import { ServiceItem } from "@/data/mocks/home";

const Row = ({
  service,
  index,
  isFirst,
}: {
  service: ServiceItem;
  index: number;
  isFirst: boolean;
}) => {
  const rowRef = useRef<HTMLAnchorElement>(null);

  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: "translateY(24px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 200, friction: 24 }}
      delayIn={index * 80}
      className={isFirst ? "" : "border-t border-line"}
    >
      <Hover
        tag="a"
        // @ts-expect-error — href only applies when tag is "a"
        href="#"
        ref={rowRef}
        from={{
          backgroundColor: "rgba(241,240,238,0)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        to={{
          backgroundColor: "rgba(241,240,238,1)",
          paddingLeft: "2rem",
          paddingRight: "1.25rem",
        }}
        config={{ tension: 240, friction: 26 }}
        className="flex items-center gap-4 rounded-card-sm py-6 sm:gap-6 sm:py-8"
      >
        <span className="w-7 text-sm font-medium text-[#111]/40 sm:w-10">
          {service.index}
        </span>
        <h3 className="flex-1 text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          {service.title}
        </h3>
        <p className="hidden max-w-80 text-sm text-[#111]/55 lg:block">
          {service.description}
        </p>
        <Hover
          tag="span"
          trigger={rowRef as React.RefObject<HTMLElement>}
          from={{ transform: "translateX(0px)" }}
          to={{ transform: "translateX(5px)" }}
          config={{ tension: 300, friction: 18 }}
          className="grid size-10 place-items-center rounded-pill bg-ink text-white sm:size-12"
        >
          <ArrowUpRight />
        </Hover>
      </Hover>
    </Inview>
  );
};

export interface ServicesProps {
  items: ServiceItem[];
}

export const Services = ({ items }: ServicesProps) => {
  return (
    <section id="services" className="bg-white">
      <div className="shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview
          tag="div"
          mode="once"
          from={{ opacity: 0, transform: "translateY(10px)" }}
          to={{ opacity: 1, transform: "translateY(0px)" }}
          config={{ tension: 200, friction: 24 }}
        >
          <Eyebrow>Services</Eyebrow>
        </Inview>

        <TextEngine
          tag="h2"
          mode="once"
          overflow
          lineIn={{ y: "0%", opacity: 1 }}
          lineOut={{ y: "100%", opacity: 0 }}
          lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
          delayIn={120}
          className="mt-5 mb-12 max-w-[16ch] text-4xl font-semibold tracking-tight sm:mb-14 sm:text-5xl"
        >
          What we do best
        </TextEngine>

        <ul>
          {items.map((service, i) => (
            <Row
              key={service.index}
              service={service}
              index={i}
              isFirst={i === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
