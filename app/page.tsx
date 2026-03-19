import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

const solutionAreas = [
  {
    title: "Counter-UAV Protection",
    description:
      "Solutions for drone threat suppression, directional denial, airborne overwatch, and tactical RF response.",
  },
  {
    title: "Critical Infrastructure Security",
    description:
      "Protection concepts for airports, energy facilities, communication hubs, and strategic industrial assets.",
  },
  {
    title: "Border & Coastal Operations",
    description:
      "Mission-aligned systems for perimeter control, border monitoring, coastal awareness, and remote deployment.",
  },
];

const trustPoints = [
  "Mission-oriented product positioning",
  "Defense and security deployment focus",
  "Flexible product and solution architecture",
  "Structured consultation and project evaluation",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-glow surface-soft border-b border-slate-200">
        <div className="container-main section-space">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <div className="section-eyebrow">
                Advanced Defense & Security Technologies
              </div>

              <h1 className="hero-heading mt-7 max-w-5xl">
                Electronic warfare, airborne systems, and mission-ready security solutions.
              </h1>

              <p className="hero-copy mt-6 max-w-3xl">
                We position advanced defense technologies for counter-UAV protection,
                airborne ISR and EW missions, secure communication infrastructure, and
                project-based security deployments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                className="btn-primary-premium"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary-premium"
                >
                  Request Consultation
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Focus
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Defense & Security
                  </div>
                </div>

                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Positioning
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Mission-Oriented
                  </div>
                </div>

                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Model
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Product + Solution
                  </div>
                </div>
              </div>
            </div>

           <div className="surface-dark-premium overflow-hidden rounded-3xl text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
              <div className="p-8 md:p-10">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Strategic Capability Areas
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                  Built for organizations operating in high-security and mission-critical environments.
                </h2>

                <div className="mt-8 space-y-4">
                  {trustPoints.map((item) => (
                    <div
                      key={item}
                      className="dark-stat-card"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">
                    Consultation Flow
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Start with product fit, mission scope, and deployment model. We structure
                    discussions around operational context rather than generic catalog selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="section-eyebrow">
              Capability Overview
            </div>
            <h2 className="section-heading mt-3">
              Product and solution structure built around operational use.
            </h2>
            <p className="section-copy mt-5">
              Our portfolio is positioned around real deployment logic including counter-UAV,
              airborne support, infrastructure protection, perimeter security, and tactical
              mission requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutionAreas.map((item) => (
              <div key={item.title} className="card-premium p-7">
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="container-main">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="section-eyebrow">
                Featured Products
              </div>
              <h2 className="section-heading mt-3">
                Systems positioned for real deployment environments.
              </h2>
              <p className="section-copy mt-5">
                Explore selected products structured for perimeter defense, airborne support,
                electronic warfare, and security-sensitive operational scenarios.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              View All Products
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.95fr]">
          <div>
            <div className="section-eyebrow">
              Why Work With Us
            </div>
            <h2 className="section-heading mt-3">
              A structured path from product interest to deployment planning.
            </h2>
            <p className="section-copy mt-5">
              We do not position products as isolated catalog items. We help align capability,
              mission fit, deployment concept, and operational requirements within a clear evaluation process.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Product fit evaluation",
                "Mission and use-case alignment",
                "Deployment model discussion",
                "Project-level consultation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-8 md:p-10">
            <div className="section-eyebrow">
              Start a Discussion
            </div>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Tell us what you are evaluating.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Use the consultation form to share product interest, mission profile, or deployment context.
            </p>

            <form
              action="https://formspree.io/f/mwvralbn"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
              />

              <select
                name="interest"
                defaultValue=""
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
              >
                <option value="">Select interest area</option>
                <option value="VEGA Multi-Band Directional Jammer">
                  VEGA Multi-Band Directional Jammer
                </option>
                <option value="Barracuda VTOL UAS">
                  Barracuda VTOL UAS
                </option>
                <option value="General consultation">General consultation</option>
              </select>

              <textarea
                name="message"
                placeholder="Share your project scope, protection requirement, or mission need..."
                className="min-h-[140px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
              />

              <input type="hidden" name="source" value="homepage" />

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Next Step
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Explore products, compare deployment logic, and start the right conversation.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Whether your focus is counter-UAV, airborne ISR and EW, or infrastructure protection,
                  the next step is to align product fit with mission context.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Browse Products
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
