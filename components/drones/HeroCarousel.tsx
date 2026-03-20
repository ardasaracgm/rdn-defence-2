"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  label?: string;
};

type Props = {
  items: MediaItem[];
};

export default function HeroCarousel({ items }: Props) {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = items.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((prev) => {
        const prevVid = videoRefs.current[prev];
        if (prevVid) { prevVid.pause(); prevVid.currentTime = 0; }
        return ((idx % total) + total) % total;
      });
    },
    [total],
  );

  /* play video on slide change */
  useEffect(() => {
    const vid = videoRefs.current[current];
    if (vid) vid.play().catch(() => {});
  }, [current]);

  /* auto-advance */
  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, goTo]);

  /* play first video on mount */
  useEffect(() => {
    const vid = videoRefs.current[0];
    if (vid) vid.play().catch(() => {});
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(current + 1), 5000);
  };

  const handleNav = (idx: number) => {
    goTo(idx);
    resetTimer();
  };

  return (
    <div className="relative overflow-hidden bg-[#152844] border border-[rgba(68,153,238,0.25)]"
         style={{ aspectRatio: "16/10" }}>

      {/* Slides */}
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt ?? item.label ?? ""}
              className="h-full w-full object-cover"
              onError={(e) => e.currentTarget.classList.add("hidden")}
            />
          ) : (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              onError={(e) => e.currentTarget.classList.add("hidden")}
            />
          )}

          {/* Fallback overlay (shows when media missing) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(43,127,212,0.14),transparent_70%)]">
            <span className="font-mono text-2xl tracking-[4px] text-[rgba(41,212,255,0.3)]">
              {item.label ?? "MEDIA"}
            </span>
            <span className="font-mono text-[10px] tracking-[2px] text-[rgba(41,212,255,0.18)]">
              {item.src.split("/").pop()}
            </span>
          </div>

          {/* Video badge */}
          {item.type === "video" && (
            <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 border border-[rgba(41,212,255,0.5)] bg-[rgba(13,31,60,0.75)] px-2.5 py-1 text-[10px] font-semibold tracking-[2px] text-[#29d4ff]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M2 1.5l7 3.5-7 3.5V1.5z" />
              </svg>
              VIDEO
            </div>
          )}
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={() => handleNav(current - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[rgba(68,153,238,0.25)] bg-[rgba(13,31,60,0.75)] text-[#eef3ff] transition hover:border-[#29d4ff] hover:text-[#29d4ff]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={() => handleNav(current + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[rgba(68,153,238,0.25)] bg-[rgba(13,31,60,0.75)] text-[#eef3ff] transition hover:border-[#29d4ff] hover:text-[#29d4ff]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => handleNav(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-1.5 rounded-sm transition-all"
            style={{
              width: i === current ? 18 : 6,
              background: i === current ? "#29d4ff" : "rgba(41,212,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-3 right-6 z-10 font-mono text-[11px] tracking-[2px] text-[rgba(238,243,255,0.3)]">
        {current + 1} / {total}
      </div>

      {/* Corner decorations */}
      <svg className="pointer-events-none absolute left-3 top-3 z-10" width="18" height="18" fill="none">
        <path d="M0 18L0 0L18 0" stroke="#29d4ff" strokeWidth="1.5" opacity="0.6" />
      </svg>
      <svg className="pointer-events-none absolute right-3 top-3 z-10" width="18" height="18" fill="none">
        <path d="M0 0L18 0L18 18" stroke="#29d4ff" strokeWidth="1.5" opacity="0.6" />
      </svg>
      <svg className="pointer-events-none absolute bottom-10 left-3 z-10" width="18" height="18" fill="none">
        <path d="M0 0L0 18L18 18" stroke="#29d4ff" strokeWidth="1.5" opacity="0.6" />
      </svg>
      <svg className="pointer-events-none absolute bottom-10 right-3 z-10" width="18" height="18" fill="none">
        <path d="M18 0L18 18L0 18" stroke="#29d4ff" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </div>
  );
}
