"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";
import HeroCarousel from "@/components/drones/HeroCarousel";
import PDFDownloadButton from "@/components/drones/PDFDownloadButton";

type Props = { product: Product };

/*
  Detection theme — 5-6 tones lighter than drone navy (#0d1f3c)
  Drone:     #0d1f3c  #152844  #1c3357
  Detection: #1e3d5c  #264d72  #2d5c88   accent: #00e5b8 (teal-cyan)
*/
const t = {
  bg:       "#1e3d5c",
  surface:  "#264d72",
  surfaceL: "#2d5c88",
  accent:   "#00e5b8",
  accentDim:"rgba(0,229,184,0.15)",
  border:   "rgba(0,229,184,0.22)",
  borderBr: "rgba(0,229,184,0.55)",
  white:    "#e8f4ff",
  dim:      "rgba(232,244,255,0.62)",
  grid:     "rgba(0,229,184,0.06)",
};

/* ── Animated flight param bars ── */
function FlightParams({ params }: { params: NonNullable<Product["droneFlightParams"]> }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-7">
      {params.map((p, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[2px]" style={{ color: t.dim }}>{p.name}</span>
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 18, fontWeight: 700, color: t.white }}>
              {p.value} <small style={{ fontSize: 13, fontWeight: 400, color: t.dim }}>{p.unit}</small>
            </span>
          </div>
          <div className="h-[3px] overflow-hidden" style={{ background: "rgba(232,244,255,0.1)" }}>
            <div
              className="h-full transition-all duration-700"
              style={{
                width: visible ? `${p.fillPercent}%` : "0%",
                background: `linear-gradient(90deg, #0099cc, ${t.accent})`,
                transitionDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DetectionProductPage({ product }: Props) {
  /* Build carousel items */
  const carouselItems = [
    ...(product.media.videos?.find(v => v.isHero)
      ? [{ type: "video" as const, src: product.media.videos!.find(v => v.isHero)!.file, label: "OVERVIEW" }]
      : [{ type: "image" as const, src: product.media.hero, alt: product.media.heroAlt, label: "OVERVIEW" }]
    ),
    ...((product.media.videos ?? [])
      .filter(v => !v.isHero)
      .map(v => ({ type: "video" as const, src: v.file, label: v.title.toUpperCase() }))
    ),
    ...(product.media.gallery.map(g => ({ type: "image" as const, src: g.src, alt: g.alt, label: g.alt.toUpperCase() }))),
  ];

  return (
    <main
      className="relative overflow-x-hidden"
      style={{ background: t.bg, color: t.white, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(${t.grid} 1px, transparent 1px), linear-gradient(90deg, ${t.grid} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 70% 50%, rgba(0,153,200,0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,229,184,0.06) 0%, transparent 60%)` }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-lg">
              <div
                className="mb-7 inline-flex items-center gap-2 border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[3px]"
                style={{ color: t.accent, borderColor: t.borderBr }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: t.accent }} />
                RDN Technology · {product.productType}
              </div>

              <h1
                className="mb-2 leading-none"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(52px,7vw,90px)", fontWeight: 700, letterSpacing: "-1px" }}
              >
                {product.name}
              </h1>

              <p className="mb-6 text-base uppercase tracking-[4px]" style={{ color: "#5bbcd6" }}>
                {product.tagline}
              </p>

              <p className="mb-10 max-w-md text-[16px] leading-[1.75]" style={{ color: t.dim }}>
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <PDFDownloadButton product={product} />
                <a
                  href="/contact"
                  className="inline-flex items-center border px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] transition"
                  style={{ color: t.dim, borderColor: "rgba(0,229,184,0.25)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = t.accent; (e.currentTarget as HTMLElement).style.color = t.accent; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,184,0.25)"; (e.currentTarget as HTMLElement).style.color = t.dim; }}
                >
                  Request Demo
                </a>
              </div>
            </div>

            <div><HeroCarousel items={carouselItems} /></div>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      {product.droneQuickStats?.length ? (
        <div className="relative z-10 border-y" style={{ background: t.surface, borderColor: t.border }}>
          <div
            className="mx-auto grid max-w-7xl px-6 md:px-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          >
            {product.droneQuickStats.map((s, i) => (
              <div
                key={i}
                className="relative px-6 py-7 transition"
                style={{ borderRight: i < product.droneQuickStats!.length - 1 ? `1px solid ${t.border}` : "none" }}
              >
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[3px]" style={{ color: "#5bbcd6" }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 34, fontWeight: 700, lineHeight: 1 }}>
                  {s.value}
                  <span className="ml-1 font-mono text-[12px] font-normal" style={{ color: t.dim }}>{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* ── CAPABILITY PROFILES ── */}
      {product.droneMissions?.length ? (
        <section className="relative z-10 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: t.accent }}>
              Capability Profiles
              <span className="h-px w-14 opacity-40" style={{ background: t.accent }} />
            </div>
            <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              {product.droneMissions.length} core capabilities.
            </h2>
            <p className="mb-14 max-w-lg text-base leading-[1.7]" style={{ color: t.dim }}>
              {product.name} delivers layered counter-UAV protection across detection, classification, and neutralization functions.
            </p>

            <div
              className="grid"
              className="grid-cols-1 md:grid-cols-3"
              style={{
                gap: "1px", background: t.border, border: `1px solid ${t.border}` }}
            >
              {product.droneMissions.map((m, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden p-8 transition"
                  style={{ background: t.surface }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = t.surfaceL}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = t.surface}
                >
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: t.accent }}
                  />
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[3px]" style={{ color: "#5bbcd6" }}>
                    {m.number} / {m.tag}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700 }}>
                    {m.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7]" style={{ color: t.dim }}>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── SYSTEM PARAMETERS ── */}
      {product.droneFlightParams?.length ? (
        <section className="relative z-10 py-20 md:py-24" style={{ background: t.surface }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: t.accent }}>
                  System Parameters
                  <span className="h-px w-14 opacity-40" style={{ background: t.accent }} />
                </div>
                <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
                  Detection<br />performance.
                </h2>
                <p className="text-base leading-[1.7]" style={{ color: t.dim }}>
                  System parameters calibrated for operational counter-UAV environments. Coverage, classification speed, and integration capability optimized for real-world deployment.
                </p>
              </div>
              <FlightParams params={product.droneFlightParams} />
            </div>
          </div>
        </section>
      ) : null}

      {/* ── SYSTEM MODULES ── */}
      {product.dronePayloads?.length ? (
        <section className="relative z-10 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: t.accent }}>
              System Modules
              <span className="h-px w-14 opacity-40" style={{ background: t.accent }} />
            </div>
            <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              {product.dronePayloads.length} integrated modules.
            </h2>
            <p className="mb-14 max-w-lg text-base leading-[1.7]" style={{ color: t.dim }}>
              Modular system architecture enables tailored deployment configurations for specific operational environments.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {product.dronePayloads.map((p, i) => (
                <div
                  key={i}
                  className="border p-8 transition"
                  style={{ background: t.surface, borderColor: t.border }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = t.borderBr}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = t.border}
                >
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 48, fontWeight: 700, lineHeight: 1, color: t.accent, marginBottom: 4 }}>
                    {p.capacity}
                  </div>
                  <div className="mb-5 font-mono text-[10px] uppercase tracking-[2px]" style={{ color: t.dim }}>
                    {p.unit}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700 }}>
                    {p.name}
                  </h3>
                  <p className="text-[13px] leading-[1.65]" style={{ color: t.dim }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── SPECIFICATIONS ── */}
      {product.specifications?.length ? (
        <section className="relative z-10 py-20 md:py-24" style={{ background: t.surface }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: t.accent }}>
              Technical Specifications
              <span className="h-px w-14 opacity-40" style={{ background: t.accent }} />
            </div>
            <h2 className="mb-12 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              Full data sheet.
            </h2>

            <div
              className="grid gap-[2px]"
              style={{ background: "#264d72", border: `1px solid ${t.border}` }}
            >
              {product.specifications.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-6 px-6 py-[18px] transition"
                  style={{ background: t.surface }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = t.surfaceL}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = t.surface}
                >
                  <span className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[2px]" style={{ color: "#5bbcd6" }}>
                    {s.label}
                  </span>
                  <span className="text-right" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, fontWeight: 600 }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── CTA ── */}
      <section
        className="relative z-10 border-y"
        style={{ background: t.surfaceL, borderColor: t.border }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10 px-6 py-20 md:px-12">
          <h2 className="max-w-xl" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 42, fontWeight: 700, lineHeight: 1 }}>
            Request a system<br />
            <span style={{ color: t.accent }}>demonstration today.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] transition"
              style={{
                background: t.accent,
                color: "#0d2a1a",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#33f0cc"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = t.accent}
            >
              Contact RDN
            </a>
            <a
              href="/products"
              className="inline-flex items-center border px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] transition"
              style={{ color: t.dim, borderColor: "rgba(0,229,184,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = t.accent; (e.currentTarget as HTMLElement).style.color = t.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,184,0.3)"; (e.currentTarget as HTMLElement).style.color = t.dim; }}
            >
              All Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
