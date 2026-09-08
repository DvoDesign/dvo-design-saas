"use client";

import { useRef } from "react";
import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { PillButton } from "@/components/ui/pill-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlobeIcon, XIcon, CircleDotIcon } from "@/components/ui/icons";

const SocialChip = ({
  icon,
  accent,
}: {
  icon: React.ReactNode;
  accent?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span
      ref={ref}
      className={`grid size-9 place-items-center rounded-pill text-sm ${
        accent ? "bg-accent text-white" : "bg-surface text-[#111]/70"
      }`}
    >
      <Hover
        tag="span"
        trigger={ref as React.RefObject<HTMLElement>}
        from={{ scale: 1 }}
        to={{ scale: 1.18 }}
        config={{ tension: 320, friction: 16 }}
        className="grid place-items-center"
      >
        {icon}
      </Hover>
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="shell grid grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="relative min-h-56 sm:min-h-64 lg:min-h-80">
          <GlobeIcon className="absolute top-1/2 -left-4 -translate-y-1/2 text-[12rem] text-[#111]/10 sm:text-[16rem] lg:-left-6 lg:text-[20rem]" />
          <Eyebrow className="relative">The Studio</Eyebrow>
          <Inview
            tag="div"
            mode="once"
            from={{ opacity: 0, transform: "translateY(12px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 200, friction: 24 }}
            className="absolute bottom-0 left-0 flex items-center gap-3 text-sm text-[#111]/70"
          >
            <GlobeIcon className="text-2xl text-foreground" />
            <span className="max-w-56">
              A distributed team building software across every time zone.
            </span>
          </Inview>
        </div>

        <div className="flex flex-col gap-10">
          <TextEngine
            tag="h2"
            mode="once"
            wordIn={{ y: 0, opacity: 1 }}
            wordOut={{ y: 24, opacity: 0 }}
            wordStagger={35}
            wordConfig={{ duration: 700, easing: easings.easeOutQuart }}
            className="text-2xl leading-[1.35] font-medium tracking-tight sm:text-3xl"
          >
            We partner with ambitious B2B teams to ship{" "}
            <span className="text-muted">
              SaaS platforms, the architecture underneath them, and the UI
              that makes them usable.
            </span>
          </TextEngine>

          <Inview
            tag="div"
            mode="once"
            from={{ opacity: 0, transform: "translateY(12px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
            config={{ tension: 200, friction: 24 }}
            delayIn={200}
            className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6"
          >
            <div>
              <p className="mb-3 text-sm text-[#111]/45">Find us online</p>
              <div className="flex gap-2">
                <SocialChip icon={<XIcon />} accent />
                <SocialChip icon={<CircleDotIcon />} />
                <SocialChip icon={<CircleDotIcon />} />
              </div>
            </div>
            <PillButton variant="outline" arrow="right" href="#about">
              About Us
            </PillButton>
          </Inview>
        </div>
      </div>
    </section>
  );
};
