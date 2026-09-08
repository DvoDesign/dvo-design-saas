"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { PillButton } from "@/components/ui/pill-button";
import { LogoMark, XIcon } from "@/components/ui/icons";
import { stopScroll, startScroll } from "@/utils/scroll-lock";
import { useHomeUI } from "./store";

type Status = "form" | "sending" | "success";

const FIELD_CLASS =
  "w-full rounded-control border border-line bg-surface/50 px-4 py-3 text-sm outline-none focus:border-[#111]/30 focus:bg-white";

export const RequestModal = () => {
  const modalOpen = useHomeUI((state) => state.modalOpen);
  const closeModal = useHomeUI((state) => state.closeModal);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("form");

  useEffect(() => {
    if (modalOpen) {
      setMounted(true);
      stopScroll();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, closeModal]);

  const backdropSpring = useSpring({
    opacity: modalOpen ? 1 : 0,
    config: { tension: 260, friction: 30 },
    onRest: () => {
      if (!modalOpen) {
        setMounted(false);
        startScroll();
        setTimeout(() => setStatus("form"), 300);
      }
    },
  });

  const panelSpring = useSpring({
    transform: modalOpen ? "translateY(0px)" : "translateY(18px)",
    opacity: modalOpen ? 1 : 0,
    config: { tension: 260, friction: 30 },
  });

  if (!mounted) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Stubbed submit — no network call, just a brief pause before success.
    setTimeout(() => setStatus("success"), 700);
  };

  return (
    <animated.div
      style={backdropSpring}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
      className="fixed inset-0 z-[110] flex items-end justify-center bg-[#111]/30 p-4 backdrop-blur-lg sm:items-center"
    >
      <animated.div
        style={panelSpring}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-card bg-white p-6 shadow-2xl ring-1 ring-line sm:p-8"
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 grid size-9 place-items-center rounded-pill bg-surface text-[#111]/60 hover:bg-surface-2 hover:text-[#111]"
        >
          <XIcon />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="grid size-14 place-items-center rounded-pill bg-ink text-2xl text-accent-from">
              <LogoMark />
            </span>
            <h2 className="text-2xl font-semibold">Request received</h2>
            <p className="max-w-[32ch] text-sm text-[#111]/60">
              Thanks for reaching out — we&apos;ll get back to you within one
              business day.
            </p>
            <PillButton variant="dark" onClick={closeModal}>
              Close
            </PillButton>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-1.5">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#111]/60">
                <span className="size-1.5 rounded-full bg-accent" />
                Start a project
              </span>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tell us what you&apos;re building.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-wide text-[#111]/50 uppercase">
                  Name
                </span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={FIELD_CLASS}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-wide text-[#111]/50 uppercase">
                  Email
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={FIELD_CLASS}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-wide text-[#111]/50 uppercase">
                  Project
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder="A few words about your project, timeline, and budget."
                  className={`${FIELD_CLASS} resize-none`}
                />
              </label>

              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="text-xs text-[#111]/45">
                  We reply within one business day.
                </p>
                <PillButton
                  variant="dark"
                  arrow="up-right"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send request"}
                </PillButton>
              </div>
            </form>
          </>
        )}
      </animated.div>
    </animated.div>
  );
};
