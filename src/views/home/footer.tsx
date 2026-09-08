"use client";

import TextEngine from "spring-text-engine";
import { easings } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { PillButton } from "@/components/ui/pill-button";
import { AnimatedLink } from "@/components/ui/animated-link";
import { LogoMark } from "@/components/ui/icons";
import { scrollTo } from "@/utils/scroll-to";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICES_LINKS,
  FOOTER_SOCIAL_LINKS,
  FooterLink,
} from "@/data/mocks/home";
import { useHomeUI } from "./store";

const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <p className="text-xs tracking-wide text-white/40 uppercase">{title}</p>
    <ul className="mt-4 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <AnimatedLink
            href={`#${link.id}`}
            className="text-sm"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </AnimatedLink>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  const openModal = useHomeUI((state) => state.openModal);

  return (
    <footer className="relative overflow-hidden rounded-t-card bg-ink text-white">
      <div className="shell relative z-10 px-5 pt-20 pb-10 sm:px-8 lg:pt-24">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <TextEngine
            tag="h2"
            mode="once"
            overflow
            lineIn={{ y: "0%", opacity: 1 }}
            lineOut={{ y: "100%", opacity: 0 }}
            lineStagger={100}
            lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
            className="max-w-[16ch] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Have a project in mind? Let&apos;s get to work.
          </TextEngine>
          <PillButton variant="light" arrow="up-right" onClick={openModal}>
            Start a project
          </PillButton>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <LogoMark />
              DvoDesign
            </div>
            <p className="mt-4 max-w-80 text-sm text-white/55">
              An independent studio building B2B SaaS platforms — architecture,
              fullstack development, and the UI on top.
            </p>
          </div>

          <LinkColumn title="Company" links={FOOTER_COMPANY_LINKS} />
          <LinkColumn title="Services" links={FOOTER_SERVICES_LINKS} />
          <LinkColumn title="Social" links={FOOTER_SOCIAL_LINKS} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            © 2026{" "}
            <a
              href="https://dvo.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Dvo.Design
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-6">
            <AnimatedLink
              href="#privacy"
              from={{ x: 0, opacity: 0.7 }}
              to={{ x: 3, opacity: 1 }}
            >
              Privacy
            </AnimatedLink>
            <AnimatedLink
              href="#terms"
              from={{ x: 0, opacity: 0.7 }}
              to={{ x: 3, opacity: 1 }}
            >
              Terms
            </AnimatedLink>
          </div>
        </div>
      </div>

      <Inview
        tag="p"
        mode="once"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 180, friction: 26 }}
        className="pointer-events-none absolute inset-x-0 -bottom-6 z-0 text-center text-[13rem] leading-none font-bold text-white/5 select-none"
      >
        DVODESIGN
      </Inview>
    </footer>
  );
};
