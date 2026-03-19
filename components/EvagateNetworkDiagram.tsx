"use client";

export default function EvagateNetworkDiagram() {
  return (
    <section className="section-space bg-slate-950 text-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            System Architecture
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            One platform. Multi-domain control.
          </h2>

          <p className="mt-4 text-slate-300">
            EvaGate connects command centers, mobile units, marine platforms, and
            tactical teams into a single integrated communication ecosystem.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] p-4 md:p-8">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_18%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.08),transparent_18%)]" />
            <div className="evagate-grid absolute inset-0 opacity-30" />

            <svg
              viewBox="0 0 1600 900"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <filter id="evagate-soft-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <radialGradient id="evagate-core-fill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(14,165,233,0.38)" />
                  <stop offset="60%" stopColor="rgba(14,165,233,0.12)" />
                  <stop offset="100%" stopColor="rgba(2,6,23,0.08)" />
                </radialGradient>

                <linearGradient id="evagate-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0)" />
                  <stop offset="50%" stopColor="rgba(125,211,252,1)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                </linearGradient>
              </defs>

              <g filter="url(#evagate-soft-glow)">
                <path
                  id="path-sat"
                  d="M800 450 C640 360, 420 250, 245 170"
                  className="evagate-line-base"
                />
                <path
                  id="path-mobile"
                  d="M800 450 C560 430, 350 470, 180 650"
                  className="evagate-line-base"
                />
                <path
                  id="path-air"
                  d="M800 450 C870 340, 1080 210, 1330 165"
                  className="evagate-line-base"
                />
                <path
                  id="path-marine"
                  d="M800 450 C990 420, 1180 400, 1395 455"
                  className="evagate-line-base"
                />
                <path
                  id="path-portable"
                  d="M800 450 C920 520, 1120 650, 1320 735"
                  className="evagate-line-base"
                />
                <path
                  id="path-hq"
                  d="M800 450 C760 575, 800 690, 800 785"
                  className="evagate-line-base"
                />

                <circle cx="800" cy="450" r="130" className="evagate-rotating-ring" />
                <circle cx="800" cy="450" r="102" className="evagate-core-ring" />
                <circle cx="800" cy="450" r="72" className="evagate-core-ring delay-300" />
                <circle cx="800" cy="450" r="42" fill="url(#evagate-core-fill)" />
              </g>

              <g>
                <circle cx="245" cy="170" r="8" className="evagate-node-dot" />
                <circle cx="180" cy="650" r="8" className="evagate-node-dot delay-150" />
                <circle cx="1330" cy="165" r="8" className="evagate-node-dot delay-300" />
                <circle cx="1395" cy="455" r="8" className="evagate-node-dot delay-500" />
                <circle cx="1320" cy="735" r="8" className="evagate-node-dot delay-700" />
                <circle cx="800" cy="785" r="8" className="evagate-node-dot delay-1000" />
              </g>

              <g>
                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-sat" />
                  </animateMotion>
                </circle>

                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-mobile" />
                  </animateMotion>
                </circle>

                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-air" />
                  </animateMotion>
                </circle>

                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="3.4s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-marine" />
                  </animateMotion>
                </circle>

                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-portable" />
                  </animateMotion>
                </circle>

                <circle r="10" fill="rgba(125,211,252,0.95)" filter="url(#evagate-soft-glow)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#path-hq" />
                  </animateMotion>
                </circle>
              </g>
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-300/30 bg-[radial-gradient(circle,rgba(14,165,233,0.25),rgba(2,6,23,0.85)_72%)] shadow-[0_0_70px_rgba(56,189,248,0.2)]">
              <div className="text-center">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Core System
                </div>
                <div className="mt-2 text-4xl font-bold tracking-tight">EVAGATE</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                  Voice • Data • Video • Radio
                </div>
              </div>
            </div>

            <NodeCard
              title="Satellite / WAN"
              subtitle="Global link"
              className="left-[6%] top-[10%]"
            />
            <NodeCard
              title="Mobile Unit"
              subtitle="Vehicle deployment"
              className="left-[4%] top-[66%]"
            />
            <NodeCard
              title="Airborne / ISR"
              subtitle="Optional integration"
              className="right-[7%] top-[9%]"
            />
            <NodeCard
              title="Marine"
              subtitle="Ship / coastal ops"
              className="right-[3.5%] top-[43%]"
            />
            <NodeCard
              title="Portable Kit"
              subtitle="Tactical team"
              className="right-[8%] top-[75%]"
            />
            <NodeCard
              title="Command Center"
              subtitle="HQ / control room"
              className="left-1/2 top-[82%] -translate-x-1/2"
            />

            <div className="absolute bottom-4 left-4 right-4 z-10 grid gap-3 md:grid-cols-4">
              {[
                "AES-256 Secure VPN",
                "Load Balance & Failover",
                "RoIP / IP PBX / Streaming",
                "One Platform • Total Control",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-10 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(2,6,23,0.35)] ${className}`}
    >
      <div className="text-sm font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-sky-300">
        {subtitle}
      </div>
    </div>
  );
}
