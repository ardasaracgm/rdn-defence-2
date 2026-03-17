import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | DefenceTech",
  description:
    "Corporate profile, technology positioning, and integrated defense and security capabilities.",
};

const capabilities = [
  {
    title: "Electronic Warfare",
    text: "Advanced RF suppression, counter-UAV systems, directional jammers, and tactical protection technologies.",
  },
  {
    title: "UAV & Airborne Platforms",
    text: "Mission-ready unmanned systems for ISR, tactical deployment, airborne EW, and platform-based operations.",
  },
  {
    title: "AI Security Systems",
    text: "Biometric recognition, AI-supported monitoring, and real-time situational awareness technologies.",
  },
  {
    title: "Secure Communication & C4I",
    text: "Integrated voice, data, radio, and video communication systems for mobile, fixed, and tactical environments.",
  },
];

const values = [
  {
    title: "Integrated Thinking",
    text: "We position our capabilities as part of a unified technology ecosystem rather than isolated products.",
  },
  {
    title: "Operational Relevance",
    text: "Our focus is on technologies that support real deployment scenarios, mission continuity, and field performance.",
  },
  {
    title: "Scalable Architecture",
    text: "The portfolio is structured to grow over time while staying clear, manageable, and commercially strong.",
  },
];

const sectors = [
  "Defense and military institutions",
  "Public security and law enforcement",
  "Critical infrastructure operators",
  "Industrial and strategic facilities",
  "Mobile command and emergency units",
  "Government and institutional projects",
];

export default function AboutPage() {
  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Corporate Profile
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              A structured defense and security technology platform for modern operational needs.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              We bring together electronic warfare, unmanned systems, AI-enabled security,
              and secure communication under one premium and scalable technology framework.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Integrated</div>
              <p className="mt-2 text-sm text-slate-600">
                Cross-domain technology positioning
              </p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Premium</div>
              <p className="mt-2 text-sm text-slate-600">
                Institutional and B2B presentation
              </p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Scalable</div>
              <p className="mt-2 text-sm text-slate-600">
                Structured product and solution architecture
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Who We Are
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              More than a product showcase — a coherent technology structure.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our positioning is built around a simple principle: modern defense and
              security environments require integrated capabilities, not fragmented tools.
              For that reason, we present our portfolio as a connected system of
              technologies covering electronic warfare, UAV platforms, AI-supported
              monitoring, and secure communication.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This approach creates stronger institutional perception, clearer commercial
              communication, and a more scalable digital foundation for future expansion.
            </p>
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Positioning
            </div>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Advanced Defense & Security Technologies
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The platform is designed to communicate technological depth, operational
              credibility, and premium B2B value in one unified corporate language.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Electronic Warfare",
                "UAV Systems",
                "Airborne Platforms",
                "AI Security",
                "Secure Communication",
                "Command & Control",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-slate-200 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Core Capability Areas
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              A portfolio built around defense, security, and mission continuity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our capability areas are structured to support both product-level visibility
              and solution-level positioning across demanding institutional use cases.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item.title} className="card-premium p-7">
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Our Approach
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Institutional clarity, operational relevance, and long-term scalability.
            </h2>

            <div className="mt-10 space-y-8">
              {values.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Sectors & Environments
            </div>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Relevant across public, defense, and critical infrastructure contexts.
            </h3>

            <div className="mt-8 grid gap-4">
              {sectors.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
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
                  Let’s Connect
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Discuss your project, mission needs, or solution architecture.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Whether you are evaluating a product, a solution area, or a broader
                  technology structure, we can help you shape the right direction.
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
                  href="/solutions"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
