"use client";

import { useRef } from "react";
import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Spring } from "@/components/animation/springs/spring";
import { Hover } from "@/components/animation/springs/hover";
import { PillButton } from "@/components/ui/pill-button";
import { CircleDotIcon } from "@/components/ui/icons";
import { scrollTo } from "@/utils/scroll-to";
import { HERO_IMAGES, HERO_CARD_ITEMS, PARTNERS } from "@/data/mocks/home";
import { LiquidReveal } from "./liquid-reveal";
import { HeroCard } from "./hero-card";
import { useHomeUI } from "./store";

const PartnerItem = ({ name }: { name: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span ref={ref} className="inline-block">
      <Hover
        tag="span"
        trigger={ref as React.RefObject<HTMLElement>}
        from={{ transform: "translateY(0px)", opacity: 0.7 }}
        to={{ transform: "translateY(-2px)", opacity: 1 }}
        config={{ tension: 320, friction: 20 }}
        className="flex items-center gap-1.5 text-xs text-[#111]/70"
      >
        <CircleDotIcon className="text-sm text-[#111]/40" />
        {name}
      </Hover>
    </span>
  );
};

export const Hero = () => {
  const introReady = useHomeUI((state) => state.introReady);
  const openModal = useHomeUI((state) => state.openModal);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden rounded-b-card bg-hero-to"
    >
      <LiquidReveal
        beforeSrc={HERO_IMAGES.beforeSrc}
        afterSrc={HERO_IMAGES.afterSrc}
        className="z-0"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-white/35 via-transparent to-white/35" />

      <Spring
        tag="p"
        enabled={introReady}
        mode="once"
        from={{ opacity: 0, transform: "translateY(20px)" }}
        to={{ opacity: 0.4, transform: "translateY(0px)" }}
        config={{ tension: 120, friction: 30 }}
        delayIn={300}
        className="pointer-events-none absolute inset-x-0 bottom-28 z-[1] text-center text-[13rem] leading-none font-bold text-white select-none"
      >
        DVODESIGN
      </Spring>

      <div className="shell relative z-20 flex flex-col gap-8 px-5 pt-28 pb-20 sm:px-8 lg:grid lg:min-h-lvh lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-36 lg:pb-28">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <Spring
            tag="span"
            enabled={introReady}
            mode="once"
            from={{ opacity: 0, transform: "translateY(10px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 210, friction: 26 }}
            delayIn={200}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111]/70"
          >
            <span className="size-1.5 rounded-full bg-[#111]/50" />
            B2B SaaS Studio
          </Spring>

          <TextEngine
            tag="h1"
            mode="once"
            enabled={introReady}
            overflow
            lineIn={{ y: "0%", opacity: 1 }}
            lineOut={{ y: "100%", opacity: 0 }}
            lineStagger={120}
            lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
            className="max-w-[18ch] text-4xl leading-[0.98] font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Software architecture, built to scale
          </TextEngine>

          <Spring
            tag="div"
            enabled={introReady}
            mode="once"
            from={{ opacity: 0, transform: "translateY(10px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 210, friction: 26 }}
            delayIn={750}
            className="flex flex-wrap gap-3"
          >
            <PillButton variant="dark" arrow="right" onClick={openModal}>
              Let&apos;s Talk
            </PillButton>
            <PillButton variant="outline" onClick={() => scrollTo("works")}>
              View Work
            </PillButton>
          </Spring>
        </div>

        <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:items-end">
          <Spring
            tag="div"
            enabled={introReady}
            mode="once"
            from={{ opacity: 0, transform: "translateY(16px) scale(0.96)" }}
            to={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            config={{ tension: 200, friction: 24 }}
            delayIn={400}
            className="w-full max-w-96 lg:w-76"
          >
            <HeroCard items={HERO_CARD_ITEMS} />
          </Spring>

          <Spring
            tag="div"
            enabled={introReady}
            mode="once"
            from={{ opacity: 0, transform: "translateY(14px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 200, friction: 24 }}
            delayIn={550}
            className="w-full max-w-96 lg:w-76"
          >
            <p className="mb-3 text-left text-xs font-medium text-[#111]/45 lg:text-right">
              Built for
            </p>
            <ul className="grid grid-cols-4 gap-x-4 gap-y-3">
              {PARTNERS.map((name) => (
                <li key={name}>
                  <PartnerItem name={name} />
                </li>
              ))}
            </ul>
          </Spring>
        </div>

        <Spring
          tag="div"
          enabled={introReady}
          mode="once"
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ tension: 210, friction: 26 }}
          delayIn={900}
          className="col-span-12 flex items-center justify-between gap-3 border-t border-[#111]/10 pt-5 text-xs font-medium tracking-wide text-[#111]/60 uppercase"
        >
          <span>Architecture &amp; fullstack</span>
          <span className="hidden sm:inline">Remote-first, worldwide</span>
          <span className="inline-flex items-center gap-2">
            Scroll to explore <span aria-hidden="true">↓</span>
          </span>
        </Spring>
      </div>
    </section>
  );
};
