"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const dayName = days[time.getDay()];
  const dateStr = `${time.getDate().toString().padStart(2, "0")} / ${(time.getMonth() + 1).toString().padStart(2, "0")} / ${time.getFullYear()}`;
  const timeStr = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;

  return (
    <div className="fixed top-6 right-6 z-40 text-right flex flex-col font-mono text-sm tracking-widest text-p3-cyan">
      <span className="font-bold">{dayName}</span>
      <span>{dateStr}</span>
      <span className="text-xl font-bold mt-1 text-p3-white">{timeStr}</span>
    </div>
  );
}
