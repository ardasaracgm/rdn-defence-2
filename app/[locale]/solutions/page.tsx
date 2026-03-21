import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("solutions");
  return {
    title: `${t("badge")} | RDN Technology`,
    description: t("subtitle"),
  };
}

export default async function SolutionsPage() {
  const t = await getTranslations("solutions");

  const solutions = [
    {
      title: t("sol1_title"), text: t("sol1_text"),
      points: [t("sol1_p1"), t("sol1_p2"), t("sol1_p3")],
    },
    {
      title: t("sol2_title"), text: t("sol2_text"),
      points: [t("sol2_p1"), t("sol2_p2"), t("sol2_p3")],
    },
    {
      title: t("sol3_title"), text: t("sol3_text"),
      points: [t("sol3_p1"), t("sol3_p2"), t("sol3_p3")],
    },
    {
      title: t("sol4_title"), text: t("sol4_text"),
      points: [t("sol4_p1"), t("sol4_p2"), t("sol4_p3")],
    },
    {
      title: t("sol5_title"), text: t("sol5_text"),
      points: [t("sol5_p1"), t("sol5_p2"), t("sol5_p3")],
    },
    {
      title: t("sol6_title"), text: t("sol6_text"),
      points: [t("sol6_p1"), t("sol6_p2"), t("sol6_p3")],
    },
  ];

  const sectors = [
    t("sector1"), t("sector2"), t("sector3"),
    t("sector4"), t("sector5"), t("sector6"),
  ];

  const advantages = [
    { title: t("adv1_title"), text: t("adv1_text") },
    { title: t("adv2_title"), text: t("adv2_text") },
    { title: t("adv3_title"), text: t("adv3_text") },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              {t("badge")}
            </div>
            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                {t("cta_contact")}
              </Link>
              <Link href="/products" className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                {t("cta_products")}
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">6</div>
              <p className="mt-2 text-sm text-slate-600">{t("stat1")}</p>
            </div>
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">{t("stat2_val")}</div>
              <p className="mt-2 text-sm text-slate-600">{t("stat2")}</p>
            </div>
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Land · Air · Mobile</div>
              <p className="mt-2 text-sm text-slate-600">{t("stat3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION CARDS ── */}
      <section className="section-space">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("portfolio_badge")}</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("portfolio_title")}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t("portfolio_sub")}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="card-premium p-7">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS + ADVANTAGES ── */}
      <section className="section-space border-y border-slate-200 bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("sectors_badge")}</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("sectors_title")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t("sectors_sub")}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {sectors.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">{item}</div>
              ))}
            </div>
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("why_badge")}</div>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">{t("why_title")}</h3>
            <div className="mt-8 space-y-6">
              {advantages.map((item) => (
                <div key={item.title}>
                  <h4 className="text-lg font-semibold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
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
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{t("cta_eyebrow")}</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t("cta_title")}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{t("cta_sub")}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">{t("cta_contact")}</Link>
                <Link href="/products" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{t("cta_products")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
