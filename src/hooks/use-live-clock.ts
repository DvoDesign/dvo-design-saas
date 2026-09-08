"use client";

import { useEffect, useState } from "react";

export interface LiveClock {
  time: string;
  date: string;
}

const FALLBACK: LiveClock = { time: "9:41am", date: "12 March, 2025" };

const format = (): LiveClock => {
  const now = new Date();
  const hours24 = now.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const meridiem = hours24 < 12 ? "am" : "pm";
  const time = `${hours12}:${minutes}${meridiem}`;

  const day = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  const date = `${day} ${month}, ${year}`;

  return { time, date };
};

/** Live local clock, ticking every second. SSR-safe fallback until mounted. */
export const useLiveClock = (): LiveClock => {
  const [clock, setClock] = useState<LiveClock>(FALLBACK);

  useEffect(() => {
    setClock(format());
    const id = setInterval(() => setClock(format()), 1000);
    return () => clearInterval(id);
  }, []);

  return clock;
};
