import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

const featuredProducts = products.filter((item) => item.featured).slice(0, 4);

const categories = [
  {
    title: "Electronic Warfare",
    text: "Ground-based and directional RF suppression systems for counter-UAV, RF denial, and tactical protection.",
  },
  {
    title: "UAV Systems",
    text: "Mission-ready unmanned platforms for ISR, tactical deployment, payload delivery, and autonomous operations.",
  },
  {
    title: "AI Security",
    text: "Biometric identification, advanced analytics, and real-time situational awareness tools.",
  },
  {
    title: "Secure Communication",
    text: "Integrated C4I, secure networking, voice, radio, and video communication infrastructure.",
  },
];

const solutions = [
  "Critical Infrastructure Protection",
  "Border & Facility Security",
  "Counter-UAV Operations",
  "Mobile Tactical Command",
  "Secure Field Communication",
  "AI-Enhanced Surveillance",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-glow grid-lines relative overflow-hidden border-b border-slate-200">
        <div className="container-main section-space grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Advanced Defense & Security Technologies
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Integrated solutions for electronic warfare, UAV systems, AI
              security, and secure communication.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              We deliver high-technology defense and security solutions
              designed for operational resilience, situational awareness, and
              mission-critical performance across land, air, and mobile
              environments.
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
                Request Consultation
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="card-premium p-5">
                <div className="text-3xl font-bold text-slate-950">6+</div>
                <p className="mt-2 text-sm text-slate-600">
                  Core technology categories
                </p>
              </div>

              <div className="card-premium p-5">
                <div className="text-3xl font-bold text-slate-950">
                  Land · Air · Mobile
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Operational deployment domains
                </p>
              </div>

              <div className="card-premium p-5">
                <div className="text-3xl font-bold text-slate-950">
                  AI + RF + C4I
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Integrated mission capability
                </p>
              </div>
            </div>
          </div>

          <div className="card-premium overflow-hidden">
            <div className="aspect-[4/5] bg-[linear-gradient(135deg,#eff6ff,#ffffff_45%,#e2e8f0)] p-8">
              <div className="flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Operational Focus
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-950">
                    Mission-ready systems for modern defense and security
                    environments.
                  </h2>
                </div>

                <div className="grid gap-4">
                  {[
                    "Electronic Warfare",
                    "Counter-UAV",
                    "Airborne EW",
                    "Secure Communication",
                    "AI Recognition",
                    "Command & Control",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionTitle
            eyebrow="Core Capability Areas"
            title="A structured technology portfolio built for defense, security, and critical operations."
            description="Our portfolio brings together advanced RF suppression, UAV systems, AI-based security, and secure communication infrastructure under one integrated technology framework."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
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

      <section className="section-space border-y border-slate-200 bg-white">
        <div className="container-main">
          <SectionTitle
            eyebrow="Featured Products"
            title="Selected systems from our defense and security portfolio."
            description="Each product is designed to support mission continuity, field reliability, and technology integration across demanding operational environments."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/products"
              className="inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionTitle
              eyebrow="Solutions"
              title="Technology aligned to operational needs."
              description="Beyond individual products, our systems support complete security and mission solutions for public security, defense, mobility, and critical infrastructure protection."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Why This Platform
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-950">
              A unified approach to defense technology.
            </h3>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Integrated Portfolio",
                  text: "Electronic warfare, UAV systems, AI security, and communication systems are positioned as one coherent technology ecosystem.",
                },
                {
                  title: "Operational Flexibility",
                  text: "Solutions are adaptable to fixed, mobile, tactical, and maritime deployment scenarios.",
                },
                {
                  title: "Scalable Product Architecture",
                  text: "The site is built on a single product structure, making it easy to add and manage new systems without rebuilding pages.",
                },
              ].map((item) => (
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
                  Contact & Consultation
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Build the right technology stack for your mission
                  requirements.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  From counter-UAV and electronic warfare systems to AI-powered
                  surveillance and secure communication infrastructure, we can
                  help you shape the right solution architecture.
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
