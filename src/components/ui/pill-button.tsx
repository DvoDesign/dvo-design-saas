// 📖 Docs: obsidian/frontend/design-system.md

"use client";

import { useRef } from "react";
import { Hover } from "@/components/animation/springs/hover";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

export interface PillButtonProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
  arrow?: "right" | "up-right" | "none";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const VARIANT_STYLES: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  dark: "bg-ink text-white",
  light: "bg-surface text-foreground",
  outline: "border border-line bg-transparent text-foreground",
};

const BADGE_STYLES: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  dark: "bg-white text-ink",
  light: "bg-ink text-white",
  outline: "bg-ink text-white",
};

/** The pill CTA used throughout the page — hero, footer, and modal all reuse this. */
export const PillButton = ({
  children,
  variant = "dark",
  arrow = "none",
  onClick,
  href,
  type = "button",
  className = "",
  disabled = false,
}: PillButtonProps) => {
  const rootRef = useRef<HTMLElement>(null);
  const Tag = href ? "a" : "button";
  const hasArrow = arrow !== "none";
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  const arrowTo =
    arrow === "up-right"
      ? { transform: "translate(2px, -2px)" }
      : { transform: "translate(3px, 0)" };

  return (
    <Hover
      tag={Tag as never}
      // @ts-expect-error — href/type only apply per Tag
      href={href}
      type={Tag === "button" ? type : undefined}
      onClick={onClick}
      disabled={Tag === "button" ? disabled : undefined}
      ref={rootRef as never}
      from={{ scale: 1 }}
      to={{ scale: 1.04 }}
      config={{ tension: 320, friction: 18 }}
      className={`inline-flex items-center gap-3 rounded-pill text-sm font-medium ${VARIANT_STYLES[variant]} ${hasArrow ? "py-1.5 pr-1.5 pl-6" : "py-3.5 px-7"} ${className}`}
      style={{ transformOrigin: "center" }}
    >
      {children}
      {hasArrow && (
        <Hover
          tag="span"
          trigger={rootRef as React.RefObject<HTMLElement>}
          from={{ transform: "translate(0px, 0px)" }}
          to={arrowTo}
          config={{ tension: 320, friction: 18 }}
          className={`grid size-9 place-items-center rounded-pill text-base ${BADGE_STYLES[variant]}`}
        >
          <Icon />
        </Hover>
      )}
    </Hover>
  );
};
