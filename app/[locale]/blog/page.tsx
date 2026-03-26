import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Defense Technology Insights",
  description:
    "Technical articles and industry analysis on electronic warfare, counter-UAV systems, drone technology, and defense security from RDN Technology.",
  alternates: { canonical: "https://www.rdnsoft.com/blog" },
};

const categoryColors: Record<string, string> = {
  "Electronic Warfare": "bg-blue-50 text-blue-700 border-blue-100",
  "Drone Systems":      "bg-sky-50 text-sky-700 border-sky-100",
  "Detection Systems":  "bg-teal-50 text-teal-700 border-teal-100",
  "Secure Communication": "bg-purple-50 text-purple-700 border-purple-100",
  "Industry":           "bg-slate-100 text-slate-700 border-slate-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Insights
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Defense Technology Insights
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Technical articles, operational guides, and industry analysis on electronic warfare,
              counter-UAV systems, drone technology, and defense security.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-8">
            Featured Article
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:border-slate-300"
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              {/* Left — dark accent panel */}
              <div className="relative flex flex-col justify-between bg-slate-950 p-10 md:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                      categoryColors[featured.category] ?? categoryColors["Industry"]
                    }`}
                  >
                    {featured.category}
                  </span>
                  <h2 className="mt-6 text-2xl font-bold leading-snug text-white md:text-3xl group-hover:text-sky-200 transition">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{featured.excerpt}</p>
                </div>
                <div className="relative z-10 mt-10 flex items-center gap-6 text-xs text-slate-500">
                  <span>{formatDate(featured.date)}</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>

              {/* Right — tags + CTA */}
              <div className="flex flex-col justify-between p-10 md:p-12">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-4">
                    Topics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-slate-950 group-hover:text-blue-700 transition">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section className="section-space border-t border-slate-200 bg-slate-50/60">
        <div className="container-main">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-8">
            All Articles
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-premium flex flex-col justify-between p-8 transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                        categoryColors[post.category] ?? categoryColors["Industry"]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime} min read</span>
                  </div>
                  <h2 className="mt-5 text-xl font-bold leading-snug text-slate-950 group-hover:text-blue-700 transition">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-950 group-hover:text-blue-700 transition">
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

      {/* ── CTA ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Products
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Explore our defense technology portfolio.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  33+ systems across electronic warfare, drone platforms, and counter-UAV detection.
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
