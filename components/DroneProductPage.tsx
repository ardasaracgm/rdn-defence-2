"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";
import HeroCarousel from "@/components/drones/HeroCarousel";
import PDFDownloadButton from "@/components/drones/PDFDownloadButton";

type Props = { product: Product };

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
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-[rgba(238,243,255,0.6)]">{p.name}</span>
            <span className="font-['Rajdhani',sans-serif] text-lg font-bold text-[#eef3ff]">
              {p.value} <small className="text-[13px] font-normal text-[rgba(238,243,255,0.6)]">{p.unit}</small>
            </span>
          </div>
          <div className="h-[3px] overflow-hidden bg-[rgba(238,243,255,0.1)]">
            <div
              className="h-full bg-gradient-to-r from-[#2b7fd4] to-[#29d4ff] transition-all duration-700"
              style={{ width: visible ? `${p.fillPercent}%` : "0%", transitionDelay: `${i * 0.1}s` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main drone page layout ── */
export default function DroneProductPage({ product }: Props) {
  /* Build carousel items from media */
  const carouselItems = [
    ...(product.media.videos?.find(v => v.isHero)
      ? [{ type: "video" as const, src: product.media.videos!.find(v => v.isHero)!.file, label: "HERO VIDEO" }]
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
      style={{
        background: "#0d1f3c",
        color: "#eef3ff",
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 300,
      }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(68,153,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(68,153,238,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(43,127,212,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(41,212,255,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — text */}
            <div className="max-w-lg">
              <div
                className="mb-7 inline-flex items-center gap-2 border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[3px]"
                style={{ color: "#29d4ff", borderColor: "rgba(41,212,255,0.5)" }}
              >
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ background: "#29d4ff" }}
                />
                RDN Technology · {product.productType}
              </div>

              <h1
                className="mb-2 leading-none tracking-[-2px]"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(72px,10vw,110px)", fontWeight: 700 }}
              >
                {product.name}
              </h1>

              <p
                className="mb-6 text-base uppercase tracking-[4px]"
                style={{ color: "#4499ee" }}
              >
                {product.tagline}
              </p>

              <p className="mb-10 max-w-md text-[16px] leading-[1.75]" style={{ color: "rgba(238,243,255,0.65)" }}>
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <PDFDownloadButton product={product} />
                <a
                  href="/contact"
                  className="inline-flex items-center border px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] transition"
                  style={{
                    color: "rgba(238,243,255,0.7)",
                    borderColor: "rgba(68,153,238,0.3)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#29d4ff";
                    (e.currentTarget as HTMLElement).style.color = "#29d4ff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(68,153,238,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(238,243,255,0.7)";
                  }}
                >
                  Request Demo
                </a>
              </div>
            </div>

            {/* Right — carousel */}
            <div>
              <HeroCarousel items={carouselItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      {product.droneQuickStats?.length ? (
        <div
          className="relative z-10 border-y"
          style={{ background: "#152844", borderColor: "rgba(68,153,238,0.25)" }}
        >
          <div className="mx-auto grid max-w-7xl px-6 md:px-12"
               style={{ gridTemplateColumns: `repeat(${product.droneQuickStats.length}, 1fr)` }}>
            {product.droneQuickStats.map((s, i) => (
              <div
                key={i}
                className="relative px-6 py-7 transition hover:bg-[rgba(41,212,255,0.04)]"
                style={{ borderRight: i < product.droneQuickStats!.length - 1 ? "1px solid rgba(68,153,238,0.25)" : "none" }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-[2px] opacity-0 transition-opacity hover:opacity-100"
                  style={{ background: "#29d4ff" }}
                />
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[3px]" style={{ color: "#4499ee" }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 36, fontWeight: 700, lineHeight: 1 }}>
                  {s.value}
                  <span className="ml-1 font-mono text-[13px] font-normal" style={{ color: "rgba(238,243,255,0.6)" }}>
                    {s.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* ── MISSION PROFILES ── */}
      {product.droneMissions?.length ? (
        <section className="relative z-10 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: "#29d4ff" }}>
              Mission Profiles
              <span className="h-px w-14 bg-[#29d4ff] opacity-40" />
            </div>
            <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              Built for {product.droneMissions.length} critical missions.
            </h2>
            <p className="mb-14 max-w-lg text-base leading-[1.7]" style={{ color: "rgba(238,243,255,0.65)" }}>
              {product.name} eliminates human exposure in high-risk scenarios. One platform, multiple configurations, zero compromise.
            </p>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${product.droneMissions.length}, 1fr)`,
                gap: "1px",
                background: "rgba(68,153,238,0.25)",
                border: "1px solid rgba(68,153,238,0.25)",
              }}
            >
              {product.droneMissions.map((m, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden p-8 transition"
                  style={{ background: "#152844" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#1c3357"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#152844"}
                >
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "#29d4ff" }}
                  />
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[3px]" style={{ color: "#4499ee" }}>
                    {m.number} / {m.tag}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700 }}>
                    {m.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(238,243,255,0.65)" }}>
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── FLIGHT PARAMETERS ── */}
      {product.droneFlightParams?.length ? (
        <section className="relative z-10 py-20 md:py-24" style={{ background: "#152844" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: "#29d4ff" }}>
                  Flight Envelope
                  <span className="h-px w-14 bg-[#29d4ff] opacity-40" />
                </div>
                <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
                  Performance<br />parameters.
                </h2>
                <p className="text-base leading-[1.7]" style={{ color: "rgba(238,243,255,0.65)" }}>
                  Each parameter is calibrated for operational requirements. Heavy payload capacity with controlled altitude and extended range for sustained mission cycles.
                </p>
              </div>
              <FlightParams params={product.droneFlightParams} />
            </div>
          </div>
        </section>
      ) : null}

      {/* ── PAYLOAD OPTIONS ── */}
      {product.dronePayloads?.length ? (
        <section className="relative z-10 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: "#29d4ff" }}>
              Payload Configurations
              <span className="h-px w-14 bg-[#29d4ff] opacity-40" />
            </div>
            <h2 className="mb-4 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              {product.dronePayloads.length} active payload systems.
            </h2>
            <p className="mb-14 max-w-lg text-base leading-[1.7]" style={{ color: "rgba(238,243,255,0.65)" }}>
              {product.name} accepts modular payload configurations for rapid mission reconfiguration in the field.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {product.dronePayloads.map((p, i) => (
                <div
                  key={i}
                  className="border p-8 transition"
                  style={{ background: "#152844", borderColor: "rgba(68,153,238,0.25)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(41,212,255,0.5)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(68,153,238,0.25)"}
                >
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#29d4ff", marginBottom: 4 }}>
                    {p.capacity}
                  </div>
                  <div className="mb-5 font-mono text-[11px] uppercase tracking-[2px]" style={{ color: "rgba(238,243,255,0.6)" }}>
                    {p.unit}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700 }}>
                    {p.name}
                  </h3>
                  <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(238,243,255,0.65)" }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── SPECIFICATIONS ── */}
      {product.specifications?.length ? (
        <section className="relative z-10 py-20 md:py-24" style={{ background: "#152844" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[4px]" style={{ color: "#29d4ff" }}>
              Technical Specifications
              <span className="h-px w-14 bg-[#29d4ff] opacity-40" />
            </div>
            <h2 className="mb-12 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700 }}>
              Full data sheet.
            </h2>

            <div
              className="grid gap-[2px]"
              style={{ gridTemplateColumns: "1fr 1fr", background: "rgba(68,153,238,0.25)", border: "1px solid rgba(68,153,238,0.25)" }}
            >
              {product.specifications.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-6 px-6 py-[18px] transition"
                  style={{ background: "#152844" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#1c3357"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#152844"}
                >
                  <span className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[2px]" style={{ color: "#4499ee" }}>
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
        style={{ background: "#1c3357", borderColor: "rgba(68,153,238,0.25)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10 px-6 py-20 md:px-12">
          <h2 className="max-w-xl leading-none" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 42, fontWeight: 700, lineHeight: 1 }}>
            Request a mission<br />
            <span style={{ color: "#29d4ff" }}>briefing today.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center bg-[#29d4ff] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] text-[#0d1f3c] transition hover:bg-[#66b3ff]"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
            >
              Contact RDN
            </a>
            <a
              href="/products"
              className="inline-flex items-center border px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] transition"
              style={{ color: "rgba(238,243,255,0.7)", borderColor: "rgba(68,153,238,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#29d4ff"; (e.currentTarget as HTMLElement).style.color = "#29d4ff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(68,153,238,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(238,243,255,0.7)"; }}
            >
              All Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
