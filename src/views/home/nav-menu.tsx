"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { LogoMark, XIcon } from "@/components/ui/icons";
import { useLiveClock } from "@/hooks/use-live-clock";
import { scrollTo } from "@/utils/scroll-to";
import { stopScroll, startScroll } from "@/utils/scroll-lock";
import { NAV_ITEMS } from "@/data/mocks/home";
import { useHomeUI } from "./store";

const NavItemRow = ({
  label,
  index,
  open,
  onSelect,
}: {
  label: string;
  index: number;
  open: boolean;
  onSelect: () => void;
}) => {
  const spring = useSpring({
    transform: open ? "translateY(0rem)" : "translateY(1rem)",
    opacity: open ? 1 : 0,
    delay: open ? index * 45 + 80 : 0,
    config: { tension: 210, friction: 26 },
  });

  return (
    <li>
      <animated.button
        onClick={onSelect}
        style={spring}
        className="group flex gap-4 py-2 text-left text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        <span className="text-base font-normal text-white/30 group-hover:text-accent-from">
          0{index + 1}
        </span>
        <span className="text-white/70 group-hover:text-white">{label}</span>
      </animated.button>
    </li>
  );
};

export const NavMenu = () => {
  const menuOpen = useHomeUI((state) => state.menuOpen);
  const closeMenu = useHomeUI((state) => state.closeMenu);
  const openModal = useHomeUI((state) => state.openModal);
  const clock = useLiveClock();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMounted(true);
      stopScroll();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const overlaySpring = useSpring({
    opacity: menuOpen ? 1 : 0,
    config: { tension: 280, friction: 32 },
    onRest: () => {
      if (!menuOpen) {
        setMounted(false);
        startScroll();
      }
    },
  });

  if (!mounted) return null;

  const handleSelect = (id: string, isContact?: boolean) => {
    closeMenu();
    if (isContact) {
      openModal();
      return;
    }
    scrollTo(id);
  };

  return (
    <animated.div
      style={overlaySpring}
      className="fixed inset-0 z-[115] flex flex-col bg-ink text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div className="shell flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <LogoMark className="text-xl text-accent-from" />
          DvoDesign
        </div>
        <button
          onClick={closeMenu}
          className="inline-flex items-center gap-2 rounded-control border border-white/15 px-4 py-2 text-xs font-medium tracking-wide text-white/70 uppercase hover:border-white/40 hover:text-white"
        >
          <XIcon className="text-sm" />
          Close
        </button>
      </div>

      <nav
        aria-label="Menu"
        className="shell flex flex-1 flex-col justify-center"
      >
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => (
            <NavItemRow
              key={item.id}
              label={item.label}
              index={i}
              open={menuOpen}
              onSelect={() => handleSelect(item.id, item.isContact)}
            />
          ))}
        </ul>
      </nav>

      <div className="shell flex flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs tracking-wide text-white/45 uppercase sm:flex-row sm:justify-between sm:px-8">
        <span>Local time — {clock.time}</span>
        <button
          onClick={() => {
            closeMenu();
            openModal();
          }}
          className="text-white/70 hover:text-white hover:underline"
        >
          Start a project →
        </button>
      </div>
    </animated.div>
  );
};
