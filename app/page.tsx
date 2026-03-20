import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

const categories = [
  {
    label: "Electronic Warfare",
    count: products.filter((p) => p.category === "Electronic Warfare").length,
    desc: "Counter-UAV jammers, directional EW systems, airborne platforms, and RF shielding for fixed and mobile deployments.",
    accent: "#1d4ed8",
    bg: "from-slate-950 to-slate-800",
    tag: "EW",
  },
  {
    label: "Drone Systems",
    count: products.filter((p) => p.category === "Drone Systems").length,
    desc: "Heavy-lift, cargo, FPV strike, fixed-wing VTOL, and tactical reconnaissance UAVs for defense and civil operations.",
    accent: "#29d4ff",
    bg: "from-[#0d1f3c] to-[#1c3357]",
    tag: "UAV",
  },
  {
    label: "Detection Systems",
    count: products.filter((p) => p.category === "Detection Systems").length,
    desc: "Radar, RF spectrum analysis, and AI optical systems for early warning, classification, and tracking of UAV threats.",
    accent: "#00e5b8",
    bg: "from-[#1e3d5c] to-[#2d5c88]",
    tag: "C-UAS",
  },
];

const stats = [
  { value: `${products.length}+`, label: "Products" },
  { value: "3",    label: "Capability Domains" },
  { value: "24/7", label: "Operational Systems" },
  { value: "NATO", label: "Standard Aligned" },
];

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(88,28,216,0.22),transparent)]" />

        <div className="container-main relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Logo in hero */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/rdn-logo.png"
                alt="RDN Technology"
                width={200}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
              Defense &amp; Security Technologies
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl">
              Advanced systems for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                mission-critical
              </span>{" "}
              environments.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Electronic warfare, drone systems, and counter-UAV detection solutions
              engineered for real operational requirements.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Consultation
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-slate-900/80 px-6 py-5 text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITY CATEGORIES ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="max-w-2xl">
            <div className="section-eyebrow">Capability Domains</div>
            <h2 className="section-heading mt-3">
              Three domains. One integrated portfolio.
            </h2>
            <p className="section-copy mt-4">
              Every product is positioned within a specific operational domain — from
              RF suppression and drone platforms to counter-UAV detection and classification.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={`/products?category=${encodeURIComponent(cat.label)}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.bg} p-7 text-white transition hover:scale-[1.02] hover:shadow-xl`}
              >
                <div
                  className="absolute right-5 top-5 rounded-lg px-2.5 py-1 text-[10px] font-bold tracking-[0.15em]"
                  style={{ background: `${cat.accent}22`, color: cat.accent, border: `1px solid ${cat.accent}44` }}
                >
                  {cat.tag}
                </div>

                <div className="text-4xl font-bold" style={{ color: cat.accent }}>
                  {cat.count}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60 mt-0.5">
                  Products
                </div>

                <h3 className="mt-4 text-xl font-bold">{cat.label}</h3>
                <p className="mt-3 text-sm leading-6 opacity-70">{cat.desc}</p>

                <div
                  className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: cat.accent }}
                >
                  View products
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section-space border-t border-slate-200 bg-slate-50/60">
        <div className="container-main">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="section-eyebrow">Featured Products</div>
              <h2 className="section-heading mt-3">Systems ready for deployment.</h2>
              <p className="section-copy mt-4">
                Selected products across electronic warfare, drone operations, and counter-UAV protection.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              View all {products.length} products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK + CONTACT ── */}
      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="section-eyebrow">Our Approach</div>
              <h2 className="section-heading mt-3">
                Mission fit before product selection.
              </h2>
              <p className="section-copy mt-5">
                We structure every engagement around operational context. From initial product fit to
                deployment planning, the process is built around your mission requirements.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { step: "01", title: "Define the mission", desc: "Identify threat environment, deployment constraints, and operational objectives." },
                  { step: "02", title: "Match capability",   desc: "Align specific products and configurations to your operational requirements." },
                  { step: "03", title: "Plan deployment",    desc: "Structure integration, installation, training, and support around your timeline." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company info block */}
              <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-4">
                  Company Information
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <p className="font-medium text-slate-950">
                    RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi
                  </p>
                  <p className="text-slate-500 leading-6">
                    Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />
                    YDA Center D:158 Çankaya / Ankara, Türkiye
                  </p>
                  <div className="pt-2 flex flex-col gap-1.5">
                    <a href="tel:+905364461135" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 2.5A.5.5 0 012.5 2h2a.5.5 0 01.49.4l.5 2.5a.5.5 0 01-.14.46L4.2 6.46a8 8 0 003.34 3.34l1.1-1.06a.5.5 0 01.46-.14l2.5.5a.5.5 0 01.4.49v2a.5.5 0 01-.5.5A10 10 0 012 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      +90 536 446 11 35
                    </a>
                    <a href="mailto:info@rdnsoft.com" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      info@rdnsoft.com
                    </a>
                    <a href="https://www.rdnsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M7 1.5C7 1.5 5 4 5 7s2 5.5 2 5.5M7 1.5C7 1.5 9 4 9 7s-2 5.5-2 5.5M1.5 7h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      www.rdnsoft.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="card-premium p-8 md:p-10">
              <div className="section-eyebrow">Start a Discussion</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Tell us what you are evaluating.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share your product interest, mission profile, or deployment context and we will respond promptly.
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
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
                <input
                  name="organization"
                  type="text"
                  placeholder="Organization / Institution"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
                <select
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                >
                  <option value="">Select interest area</option>
                  <option value="Electronic Warfare">Electronic Warfare Systems</option>
                  <option value="Drone Systems">Drone Systems</option>
                  <option value="Detection Systems">Counter-UAV Detection</option>
                  <option value="General consultation">General Consultation</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Share your project scope, protection requirement, or mission need..."
                  className="min-h-[120px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
                <input type="hidden" name="source" value="homepage" />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                  Next Step
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {products.length}+ products across three capability domains.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Browse the full portfolio, filter by capability domain, and identify
                  the systems aligned to your mission.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
                  Browse Products
                </Link>
                <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
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
