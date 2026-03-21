import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | RDN Technology",
  description:
    "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi — advanced defense and security technologies based in Ankara, Turkey.",
};

const capabilities = [
  {
    title: "Electronic Warfare",
    text: "Advanced RF suppression, counter-UAV jammers, directional EW systems, airborne platforms, and tactical protection technologies for fixed and mobile deployments.",
  },
  {
    title: "Drone Systems",
    text: "Heavy-lift cargo drones, tactical FPV platforms, fixed-wing VTOL UAVs, and reconnaissance systems for defense, logistics, and civil operations.",
  },
  {
    title: "Detection Systems",
    text: "Radar, RF spectrum analysis, and AI optical UAV detection systems providing early warning, automatic classification, and 24/7 surveillance coverage.",
  },
  {
    title: "AI Security Systems",
    text: "Biometric recognition, AI-supported monitoring, and real-time situational awareness technologies for perimeter and access control.",
  },
  {
    title: "Secure Communication & C4I",
    text: "Integrated voice, data, radio, and video communication systems for mobile, fixed, and tactical operational environments.",
  },
];

const values = [
  {
    title: "Mission-Oriented Positioning",
    text: "Every product is structured around real operational requirements — not generic catalog listings.",
  },
  {
    title: "Integrated Technology",
    text: "Our portfolio spans electronic warfare, drone systems, and counter-UAV detection as a unified capability ecosystem.",
  },
  {
    title: "Scalable Architecture",
    text: "Systems designed to grow with mission requirements while remaining deployable, maintainable, and field-ready.",
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

const companyInfo = [
  { label: "Company",  value: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi" },
  { label: "General Manager", value: "Arda Saraç" },
  { label: "Address", value: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158 Çankaya / Ankara, Türkiye" },
  { label: "Phone",   value: "+90 536 446 11 35" },
  { label: "Email",   value: "info@rdnsoft.com" },
  { label: "Website", value: "www.rdnsoft.com" },
  { label: "Tax Office",   value: "Çankaya Vergi Dairesi" },
  { label: "Tax Number",   value: "7342274416" },
  { label: "Trade Register", value: "465313" },
  { label: "Mersis No",    value: "0734227441600001" },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Corporate Profile
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                RDN Technology
              </h1>

              <p className="mt-4 text-lg font-medium text-slate-600">
                RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Based in Ankara, Turkey, RDN Technology develops and positions advanced defense
                and security systems — from electronic warfare and counter-UAV platforms to
                detection systems and AI-based security technologies.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                We work with defense institutions, security organizations, and critical
                infrastructure operators to align technology capability with real operational
                requirements — from initial product fit to full deployment planning.
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

            {/* Company info card */}
            <div className="card-premium overflow-hidden">
              <div className="bg-slate-950 px-7 py-5">
                <Image
                  src="/rdn-logo.png"
                  alt="RDN Technology"
                  width={140}
                  height={42}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="divide-y divide-slate-100">
                {companyInfo.map((item) => (
                  <div key={item.label} className="grid gap-1 px-7 py-4 md:grid-cols-[140px_1fr]">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-slate-800 leading-6">
                      {item.label === "Email" ? (
                        <a href={`mailto:${item.value}`} className="hover:text-blue-700">{item.value}</a>
                      ) : item.label === "Phone" ? (
                        <a href={`tel:${item.value.replace(/\s/g, "")}`} className="hover:text-blue-700">{item.value}</a>
                      ) : item.label === "Website" ? (
                        <a href={`https://${item.value}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="section-eyebrow">Capability Areas</div>
            <h2 className="section-heading mt-3">
              Five integrated technology domains.
            </h2>
            <p className="section-copy mt-4">
              Our portfolio is structured around operational logic — each domain addresses
              a distinct mission requirement within the broader defense and security environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-premium p-7">
                <h3 className="text-lg font-semibold text-slate-950">{cap.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-space border-t border-slate-200 bg-slate-50/60">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="section-eyebrow">Our Approach</div>
            <h2 className="section-heading mt-3">
              How we work with clients.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card-premium p-7">
                <h3 className="text-lg font-semibold text-slate-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="section-eyebrow">Target Sectors</div>
              <h2 className="section-heading mt-3">
                Who we work with.
              </h2>
              <p className="section-copy mt-4">
                RDN Technology serves organizations operating in security-sensitive and
                mission-critical environments where technology performance and operational
                fit are essential.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {sectors.map((s) => (
                <div
                  key={s}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Get in Touch
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Discuss your requirements with our team.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  From product fit to full deployment planning — contact us to start the right conversation.
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
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
