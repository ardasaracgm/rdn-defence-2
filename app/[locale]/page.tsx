import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import ProductCard from "@/components/ProductCard";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  return {
    title: "RDN Technology — Defense & Security Systems",
    description: t("subheadline"),
  };
}

const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

const categoryData = [
  {
    label: "Electronic Warfare",
    count: products.filter((p) => p.category === "Electronic Warfare").length,
    accent: "#1d4ed8",
    bg: "from-slate-950 to-slate-800",
    tagKey: "domain_ew_tag" as const,
    descKey: "domain_ew_desc" as const,
  },
  {
    label: "Drone Systems",
    count: products.filter((p) => p.category === "Drone Systems").length,
    accent: "#29d4ff",
    bg: "from-[#0d1f3c] to-[#1c3357]",
    tagKey: "domain_drone_tag" as const,
    descKey: "domain_drone_desc" as const,
  },
  {
    label: "Detection Systems",
    count: products.filter((p) => p.category === "Detection Systems").length,
    accent: "#00e5b8",
    bg: "from-[#1e3d5c] to-[#2d5c88]",
    tagKey: "domain_detect_tag" as const,
    descKey: "domain_detect_desc" as const,
  },
];

const stats = [
  { value: `${products.length}+`, key: "stats_products" as const },
  { value: "3",    key: "stats_domains" as const },
  { value: "24/7", key: "stats_ops" as const },
  { value: "NATO", key: "stats_nato" as const },
];

const steps = [
  { num: "01", titleKey: "step1_title" as const, descKey: "step1_desc" as const },
  { num: "02", titleKey: "step2_title" as const, descKey: "step2_desc" as const },
  { num: "03", titleKey: "step3_title" as const, descKey: "step3_desc" as const },
];

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RDN Technology",
    legalName: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
    url: "https://www.rdnsoft.com",
    logo: "https://www.rdnsoft.com/rdn-logo.png",
    image: "https://www.rdnsoft.com/rdn-logo.png",
    description:
      "RDN Technology delivers advanced defense and security solutions including electronic warfare, counter-UAV drone systems, UAV detection, and AI security technologies.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158",
      addressLocality: "Çankaya",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-536-446-11-35",
      contactType: "sales",
      email: "info@rdnsoft.com",
      availableLanguage: ["English", "Turkish", "Arabic", "Russian"],
    },
    sameAs: ["https://www.rdnsoft.com"],
    taxID: "7342274416",
    knowsAbout: [
      "Electronic Warfare",
      "Counter-UAV Systems",
      "Drone Jammer",
      "UAV Detection",
      "Defense Technology",
      "Tactical Drones",
      "RF Jamming",
      "C4I Systems",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Defense & Security Systems",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Electronic Warfare Systems" },
        { "@type": "OfferCatalog", name: "Drone Systems" },
        { "@type": "OfferCatalog", name: "Counter-UAV Detection Systems" },
        { "@type": "OfferCatalog", name: "AI Security Systems" },
        { "@type": "OfferCatalog", name: "Secure Communication & C4I" },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      <OrganizationJsonLd />
      <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(88,28,216,0.22),transparent)]" />

        <div className="container-main relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Image src="/rdn-logo.png" alt="RDN Technology" width={200} height={60}
                className="h-14 w-auto object-contain brightness-0 invert" priority />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
              {t("badge")}
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl">
              {t("headline").split(" ").slice(0, -2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t("headline").split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {t("subheadline")}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/products" className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                {t("cta_products")}
              </Link>
              <Link href="/contact" className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                {t("cta_contact")}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key} className="bg-slate-900/80 px-6 py-5 text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">{t(s.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITY CATEGORIES ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="max-w-2xl">
            <div className="section-eyebrow">{t("domains_title").split(".")[0]}</div>
            <h2 className="section-heading mt-3">{t("domains_title")}</h2>
            <p className="section-copy mt-4">{t("domains_sub")}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categoryData.map((cat) => (
              <Link
                key={cat.label}
                href={`/products?category=${encodeURIComponent(cat.label)}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.bg} p-7 text-white transition hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="absolute right-5 top-5 rounded-lg px-2.5 py-1 text-[10px] font-bold tracking-[0.15em]"
                  style={{ background: `${cat.accent}22`, color: cat.accent, border: `1px solid ${cat.accent}44` }}>
                  {t(cat.tagKey)}
                </div>
                <div className="text-4xl font-bold" style={{ color: cat.accent }}>{cat.count}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60 mt-0.5">{t("stats_products")}</div>
                <h3 className="mt-4 text-xl font-bold">{cat.label}</h3>
                <p className="mt-3 text-sm leading-6 opacity-70">{t(cat.descKey)}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: cat.accent }}>
                  {t("view_products")}
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
              <div className="section-eyebrow">{t("featured_badge")}</div>
              <h2 className="section-heading mt-3">{t("featured_title")}</h2>
              <p className="section-copy mt-4">{t("featured_sub")}</p>
            </div>
            <Link href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
              {t("view_all", { count: products.length })}
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

      {/* ── APPROACH + FORM ── */}
      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="section-eyebrow">{t("approach_badge")}</div>
              <h2 className="section-heading mt-3">{t("approach_title")}</h2>
              <p className="section-copy mt-5">{t("approach_sub")}</p>

              <div className="mt-10 space-y-4">
                {steps.map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white">
                      {item.num}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">{t(item.titleKey)}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">{t(item.descKey)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-4">{t("company_info")}</div>
                <div className="space-y-2 text-sm text-slate-700">
                  <p className="font-medium text-slate-950">RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi</p>
                  <p className="text-slate-500 leading-6">Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />YDA Center D:158 Çankaya / Ankara, Türkiye</p>
                  <div className="pt-2 flex flex-col gap-1.5">
                    <a href="tel:+905364461135" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2.5A.5.5 0 012.5 2h2a.5.5 0 01.49.4l.5 2.5a.5.5 0 01-.14.46L4.2 6.46a8 8 0 003.34 3.34l1.1-1.06a.5.5 0 01.46-.14l2.5.5a.5.5 0 01.4.49v2a.5.5 0 01-.5.5A10 10 0 012 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      +90 536 446 11 35
                    </a>
                    <a href="mailto:info@rdnsoft.com" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      info@rdnsoft.com
                    </a>
                    <a href="https://www.rdnsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-950">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M7 1.5C7 1.5 5 4 5 7s2 5.5 2 5.5M7 1.5C7 1.5 9 4 9 7s-2 5.5-2 5.5M1.5 7h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      www.rdnsoft.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="card-premium p-8 md:p-10">
              <div className="section-eyebrow">{t("form_badge")}</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{t("form_title")}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t("form_sub")}</p>

              <form action="https://formspree.io/f/mwvralbn" method="POST" className="mt-6 space-y-4">
                <input name="name" type="text" placeholder={t("form_name")}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                <input name="organization" type="text" placeholder={t("form_org")}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                <input name="email" type="email" placeholder={t("form_email")}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                <select name="interest" defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500">
                  <option value="">{t("form_select")}</option>
                  <option value="Electronic Warfare">{t("form_interest_ew")}</option>
                  <option value="Drone Systems">{t("form_interest_drone")}</option>
                  <option value="Detection Systems">{t("form_interest_detect")}</option>
                  <option value="General consultation">{t("form_interest_general")}</option>
                </select>
                <textarea name="message" placeholder={t("form_message")}
                  className="min-h-[120px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                <input type="hidden" name="source" value="homepage" />
                <button type="submit"
                  className="w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                  {t("form_submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG / INSIGHTS ── */}
      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="section-eyebrow">Insights</div>
              <h2 className="section-heading mt-3">Defense Technology Articles</h2>
              <p className="section-copy mt-4">
                Technical guides and industry analysis on electronic warfare, counter-UAV systems, and defense technology.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              All articles
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-premium flex flex-col justify-between p-7 transition hover:shadow-md"
              >
                <div>
                  <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug text-slate-950 group-hover:text-blue-700 transition">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.readTime} min read</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-950 group-hover:text-blue-700 transition">
                    Read
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">{t("cta_banner_eyebrow")}</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {t("cta_banner_title", { count: products.length })}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{t("cta_banner_sub")}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
                  {t("browse_products")}
                </Link>
                <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {t("contact_us")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
