// 📖 Docs: obsidian/frontend/design-system.md

"use client";

import { useRef } from "react";
import { Hover } from "@/components/animation/springs/hover";

export interface AnimatedLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  from?: { x?: number; opacity?: number };
  to?: { x?: number; opacity?: number };
}

/** Link/button whose label shifts + brightens on hover, spring-driven. */
export const AnimatedLink = ({
  children,
  href,
  onClick,
  className = "",
  from = { x: 0, opacity: 0.65 },
  to = { x: 4, opacity: 1 },
}: AnimatedLinkProps) => {
  const triggerRef = useRef<HTMLElement>(null);
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      onClick={onClick}
      ref={triggerRef as never}
      className={`inline-flex ${className}`}
    >
      <Hover
        tag="span"
        trigger={triggerRef as React.RefObject<HTMLElement>}
        from={{ transform: `translateX(${from.x}px)`, opacity: from.opacity }}
        to={{ transform: `translateX(${to.x}px)`, opacity: to.opacity }}
        config={{ tension: 320, friction: 22 }}
      >
        {children}
      </Hover>
    </Tag>
  );
};
