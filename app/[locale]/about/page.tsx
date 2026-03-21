import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return { title: `${t("badge")} | RDN Technology`, description: t("desc1") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  const capabilities = [
    { title: "Electronic Warfare",          text: t("cap_ew") },
    { title: "Drone Systems",               text: t("cap_drone") },
    { title: "Detection Systems",           text: t("cap_detect") },
    { title: "AI Security Systems",         text: t("cap_ai") },
    { title: "Secure Communication & C4I",  text: t("cap_c4i") },
  ];
  const values = [
    { title: t("val1_title"), text: t("val1_text") },
    { title: t("val2_title"), text: t("val2_text") },
    { title: t("val3_title"), text: t("val3_text") },
  ];
  const sectors = [t("sector1"),t("sector2"),t("sector3"),t("sector4"),t("sector5"),t("sector6")];
  const companyInfo: { label: string; value: string; href?: string }[] = [
    { label: t("info_company"),    value: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi" },
    { label: t("info_gm"),         value: "Arda Saraç" },
    { label: t("info_address"),    value: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158 Çankaya / Ankara, Türkiye" },
    { label: t("info_phone"),      value: "+90 536 446 11 35",  href: "tel:+905364461135" },
    { label: t("info_email"),      value: "info@rdnsoft.com",    href: "mailto:info@rdnsoft.com" },
    { label: t("info_website"),    value: "www.rdnsoft.com",     href: "https://www.rdnsoft.com" },
    { label: t("info_tax_office"), value: "Çankaya Vergi Dairesi" },
    { label: t("info_tax_no"),     value: "7342274416" },
    { label: t("info_trade"),      value: "465313" },
    { label: t("info_mersis"),     value: "0734227441600001" },
  ];

  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{t("badge")}</div>
              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">{t("title")}</h1>
              <p className="mt-4 text-lg font-medium text-slate-600">{t("subtitle")}</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t("desc1")}</p>
              <p className="mt-4 text-lg leading-8 text-slate-600">{t("desc2")}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/products" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">{t("cta_products")}</Link>
                <Link href="/contact" className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">{t("cta_contact")}</Link>
              </div>
            </div>
            <div className="card-premium overflow-hidden">
              <div className="bg-slate-950 px-7 py-5">
                <Image src="/rdn-logo.png" alt="RDN Technology" width={140} height={42} className="h-9 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="divide-y divide-slate-100">
                {companyInfo.map((item) => (
                  <div key={item.label} className="grid gap-1 px-7 py-4 md:grid-cols-[140px_1fr]">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{item.label}</div>
                    <div className="text-sm font-medium text-slate-800 leading-6">
                      {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-blue-700 transition">{item.value}</a> : item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t("capabilities_badge")}</div>
            <h2 className="section-heading mt-3">{t("capabilities_title")}</h2>
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

      <section className="section-space border-t border-slate-200 bg-slate-50/60">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t("values_badge")}</div>
            <h2 className="section-heading mt-3">{t("values_title")}</h2>
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

      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="section-eyebrow">{t("sectors_badge")}</div>
              <h2 className="section-heading mt-3">{t("sectors_title")}</h2>
              <p className="section-copy mt-4">{t("sectors_desc")}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {sectors.map((s) => <div key={s} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">{s}</div>)}
            </div>
          </div>
        </div>
      </section>

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
