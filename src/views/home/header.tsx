"use client";

import { useRef } from "react";
import { Spring } from "@/components/animation/springs/spring";
import { Hover } from "@/components/animation/springs/hover";
import { GridIcon, LogoMark } from "@/components/ui/icons";
import { useLiveClock } from "@/hooks/use-live-clock";
import { scrollTo } from "@/utils/scroll-to";
import { NAV_ITEMS } from "@/data/mocks/home";
import { useHomeUI } from "./store";

const NAV_LINK_SPRING = { tension: 320, friction: 22 };

const NavLink = ({
  label,
  isCurrent,
  onSelect,
}: {
  label: string;
  isCurrent?: boolean;
  onSelect: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <li>
      <button
        ref={ref}
        onClick={onSelect}
        aria-current={isCurrent ? "page" : undefined}
        className="inline-block"
      >
        <Hover
          tag="span"
          trigger={ref as React.RefObject<HTMLElement>}
          from={{ transform: "translateY(0px)", opacity: 0.8 }}
          to={{ transform: "translateY(-2px)", opacity: 1 }}
          config={NAV_LINK_SPRING}
        >
          {label}
        </Hover>
      </button>
    </li>
  );
};

export const Header = () => {
  const introReady = useHomeUI((state) => state.introReady);
  const openMenu = useHomeUI((state) => state.openMenu);
  const openModal = useHomeUI((state) => state.openModal);
  const clock = useLiveClock();
  const logoRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const handleNav = (id: string, isContact?: boolean) => {
    if (isContact) {
      openModal();
      return;
    }
    scrollTo(id);
  };

  return (
    <Spring
      tag="header"
      enabled={introReady}
      mode="once"
      from={{ opacity: 0, transform: "translateY(-14px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 210, friction: 26 }}
      delayIn={150}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="shell flex items-center justify-between gap-6 px-5 py-5 sm:px-8 sm:py-6">
        <button ref={logoRef} onClick={() => scrollTo("home")}>
          <Hover
            tag="span"
            trigger={logoRef as React.RefObject<HTMLElement>}
            from={{ scale: 1 }}
            to={{ scale: 1.04 }}
            config={{ tension: 320, friction: 18 }}
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <LogoMark className="text-xl text-accent" />
            DvoDesign
          </Hover>
        </button>

        <nav aria-label="Primary" className="hidden lg:flex">
          <ul className="flex gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                isCurrent={item.id === "home"}
                onSelect={() => handleNav(item.id, item.isContact)}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 rounded-control border border-line/80 bg-white/40 px-3 py-2 text-xs text-[#111]/70 backdrop-blur">
            <span className="text-[#111]/45">Local time</span>
            <span className="min-w-14 font-medium tabular-nums text-[#111]">
              {clock.time}
            </span>
            <span className="text-[#111]/30">•</span>
            <span className="font-medium">{clock.date}</span>
          </div>

          <button
            ref={menuBtnRef}
            onClick={openMenu}
            className="rounded-control border border-line/80 bg-white/40 backdrop-blur hover:bg-white/70"
          >
            <Hover
              tag="span"
              trigger={menuBtnRef as React.RefObject<HTMLElement>}
              from={{ scale: 1 }}
              to={{ scale: 1.05 }}
              config={{ tension: 320, friction: 18 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide uppercase"
            >
              <GridIcon className="text-sm" />
              <span className="hidden sm:inline">Menu</span>
            </Hover>
          </button>
        </div>
      </div>
    </Spring>
  );
};
