import { useScroll } from "@/hooks/smooth-scroll/use-scroll";

/** Stops Lenis + native scroll. Used by the loader, nav overlay, and modal. */
export const stopScroll = () => useScroll.getState().stop();

/** Resumes Lenis + native scroll. */
export const startScroll = () => useScroll.getState().start();
