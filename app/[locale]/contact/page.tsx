import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const BASE_URL = "https://www.rdnsoft.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: { canonical: `${BASE_URL}/contact` },
  };
}

function ContactJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact RDN Technology",
    url: `${BASE_URL}/contact`,
    description:
      "Contact RDN Technology for defense and security system inquiries, technical information, and pricing.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "RDN Technology",
      legalName:
        "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
      url: BASE_URL,
      logo: `${BASE_URL}/rdn-logo.png`,
      image: `${BASE_URL}/rdn-logo.png`,
      description:
        "Advanced defense and security technologies — electronic warfare, drone systems, counter-UAV detection, and AI security solutions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158",
        addressLocality: "Çankaya",
        addressRegion: "Ankara",
        addressCountry: "TR",
      },
      telephone: "+90-536-446-11-35",
      faxNumber: "+90-302-302-48-15",
      email: "info@rdnsoft.com",
      taxID: "7342274416",
      areaServed: { "@type": "Place", name: "Worldwide" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90-536-446-11-35",
          contactType: "sales",
          email: "info@rdnsoft.com",
          availableLanguage: ["English", "Turkish", "Arabic", "Russian"],
        },
      ],
      knowsAbout: [
        "Electronic Warfare",
        "Counter-UAV Systems",
        "Drone Jammer",
        "UAV Detection",
        "Defense Technology",
        "C4I Systems",
        "Tactical Drones",
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

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 3.5A.5.5 0 013.5 3h2.5a.5.5 0 01.49.4l.75 3.5a.5.5 0 01-.14.47L5.6 8.84a11 11 0 004.56 4.56l1.47-1.47a.5.5 0 01.47-.14l3.5.75a.5.5 0 01.4.49V15.5a.5.5 0 01-.5.5A13.5 13.5 0 013 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const FaxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="6" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M6 6V4a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7 12h6M7 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M10 2.5C10 2.5 7 6 7 10s3 7.5 3 7.5M10 2.5C10 2.5 13 6 13 10s-3 7.5-3 7.5M2.5 10h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);

export default async function ContactPage() {
  const t = await getTranslations("contact");

  const contactDetails = [
    { labelKey: "phone",   value: "+90 536 446 11 35",    href: "tel:+905364461135",                        Icon: PhoneIcon },
    { labelKey: "fax",     value: "+90 302 302 48 15",    href: null,                                        Icon: FaxIcon },
    { labelKey: "email",   value: "info@rdnsoft.com",      href: "mailto:info@rdnsoft.com",                  Icon: EmailIcon },
    { labelKey: "website", value: "www.rdnsoft.com",       href: "https://www.rdnsoft.com",                  Icon: WebIcon },
    { labelKey: "address", value: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158 Çankaya / Ankara, Türkiye", href: "https://maps.google.com/?q=YDA+Center+Ankara", Icon: PinIcon },
  ] as const;

  const focusAreas = [
    t("interest_ew"), t("interest_drone"), t("interest_detect"),
    t("interest_ai"), t("interest_c4i"), t("interest_general"),
  ];

  return (
    <>
      <ContactJsonLd />
      <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{t("badge")}</div>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">{t("subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item) => (
              <div key={item.labelKey} className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <item.Icon />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 mb-1">{t(item.labelKey)}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-slate-900 leading-6 hover:text-blue-700 transition">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-900 leading-6">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          {/* Form */}
          <div className="card-premium p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("form_badge")}</div>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">{t("form_title")}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t("form_sub")}</p>

            <form action="https://formspree.io/f/mwvralbn" method="POST" className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("full_name")}</label>
                  <input name="name" type="text" placeholder={t("name_placeholder")} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("organization")}</label>
                  <input name="organization" type="text" placeholder={t("org_placeholder")} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("email_label")}</label>
                <input name="email" type="email" placeholder={t("email_placeholder")} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("phone_label")}</label>
                <input name="phone" type="tel" placeholder={t("phone_placeholder")} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("interest_label")}</label>
                <select name="interest" defaultValue="" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500">
                  <option value="">{t("select")}</option>
                  {focusAreas.map((area) => <option key={area} value={area}>{area}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{t("message_label")}</label>
                <textarea name="message" placeholder={t("message_placeholder")} required className="min-h-[140px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500" />
              </div>
              <input type="hidden" name="source" value="contact-page" />
              <button type="submit" className="w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">{t("submit")}</button>
            </form>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="card-premium p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-4">{t("company_label")}</div>
              <p className="text-base font-semibold text-slate-950 leading-6">RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi</p>
              <p className="mt-2 text-sm text-slate-500 leading-6">Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />YDA Center D:158 Çankaya / Ankara, Türkiye</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex gap-2"><span className="text-slate-400 w-28 shrink-0">{t("info_tax_office")}</span><span>Çankaya Vergi Dairesi</span></div>
                <div className="flex gap-2"><span className="text-slate-400 w-28 shrink-0">{t("info_tax_no")}</span><span>7342274416</span></div>
                <div className="flex gap-2"><span className="text-slate-400 w-28 shrink-0">{t("info_trade")}</span><span>465313</span></div>
                <div className="flex gap-2"><span className="text-slate-400 w-28 shrink-0">Mersis</span><span>0734227441600001</span></div>
              </div>
            </div>

            <div className="card-premium p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-4">{t("can_help")}</div>
              <div className="space-y-2">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-7 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 mb-3">{t("response_eyebrow")}</div>
              <p className="text-sm leading-7 text-slate-300">{t("response_text")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
