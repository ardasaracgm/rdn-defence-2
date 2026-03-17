import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | DefenceTech",
  description:
    "Mission-oriented defense and security solutions for counter-UAV, electronic warfare, AI-enabled surveillance, and secure communication environments.",
};

const solutions = [
  {
    title: "Critical Infrastructure Protection",
    text: "Integrated protection architecture for airports, energy facilities, public institutions, industrial zones, and other high-value assets requiring layered security.",
    points: [
      "Counter-UAV protection",
      "AI-enabled surveillance",
      "Secure communication backbone",
    ],
  },
  {
    title: "Counter-UAV Operations",
    text: "Mission-ready electronic warfare and detection systems designed to identify, disrupt, and neutralize hostile UAV activity across static and mobile scenarios.",
    points: [
      "Detection and tracking support",
      "Wide-area RF denial",
      "Fixed and mobile deployment",
    ],
  },
  {
    title: "Mobile Tactical Command",
    text: "Field-capable communication and command infrastructure for operational teams, tactical vehicles, and mobile command environments.",
    points: [
      "Resilient field communication",
      "Radio / phone / video integration",
      "Vehicle and portable configurations",
    ],
  },
  {
    title: "AI-Enhanced Surveillance",
    text: "Advanced biometric recognition and AI-supported monitoring systems designed for identity verification, alerting, and situational awareness.",
    points: [
      "Facial recognition workflows",
      "Watchlist-based alerting",
      "Security-sensitive area monitoring",
    ],
  },
  {
    title: "Secure Field Communication",
    text: "End-to-end communication infrastructure for mission-critical use where continuity, redundancy, and secure interoperability are essential.",
    points: [
      "Encrypted communication layers",
      "WAN redundancy and failover",
      "Unified communication architecture",
    ],
  },
  {
    title: "Integrated Defense Technology Stack",
    text: "A structured ecosystem approach that combines unmanned systems, RF suppression, AI security, and secure communication under one technology framework.",
    points: [
      "Cross-domain integration",
      "Scalable system architecture",
      "Project-oriented configuration",
    ],
  },
];

const sectors = [
  "Defense and military operations",
  "Border and coastal security",
  "Critical infrastructure and utilities",
  "Public safety and law enforcement",
  "Industrial and strategic facilities",
  "Mobile field and emergency operations",
];

const advantages = [
  {
    title: "Mission-Oriented Approach",
    text: "We position technology around operational needs rather than isolated products, allowing decision-makers to evaluate solutions based on real mission scenarios.",
  },
  {
    title: "Integrated System Thinking",
    text: "Electronic warfare, UAV systems, AI-enabled monitoring, and communication infrastructure are presented as complementary layers of one solution architecture.",
  },
  {
    title: "Scalable Product Foundation",
    text: "The solution portfolio is supported by a structured product system that allows flexible expansion, clearer communication, and easier future growth.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Operational Solution Areas
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Technology solutions aligned with real operational requirements.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Our solutions combine electronic warfare, unmanned systems, AI-supported
              security, and secure communication into structured capability layers for
              defense, public security, and critical infrastructure environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request Consultation
              </Link>

              <Link
                href="/products"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">6</div>
              <p className="mt-2 text-sm text-slate-600">Core solution areas</p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Integrated</div>
              <p className="mt-2 text-sm text-slate-600">Cross-domain architecture</p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Land · Air · Mobile</div>
              <p className="mt-2 text-sm text-slate-600">Deployment environments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Solution Portfolio
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Capability blocks designed around needs, not just products.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These solution areas help organizations understand how different
              technologies work together to support security, operational continuity,
              and mission readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="card-premium p-7">
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-slate-200 bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Target Environments
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Suitable for demanding operational and institutional contexts.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The portfolio is designed to support both public-sector and
              mission-critical organizations where layered protection, communication
              continuity, and operational responsiveness are essential.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {sectors.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Why This Approach
            </div>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Stronger positioning through integrated capability design.
            </h3>

            <div className="mt-8 space-y-6">
              {advantages.map((item) => (
                <div key={item.title}>
                  <h4 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Build the Right Solution
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Let’s shape the right technology stack for your operational needs.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  We can help you evaluate solution fit, architecture scope, deployment
                  model, and integration priorities across defense and security use cases.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Contact Us
                </Link>

                <Link
                  href="/products"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Product Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
