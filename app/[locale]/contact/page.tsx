import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | RDN Technology",
  description:
    "Contact RDN Technology for product information, solution consultations, and project-based evaluations. Based in Ankara, Turkey.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "+90 536 446 11 35",
    href: "tel:+905364461135",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 3.5A.5.5 0 013.5 3h2.5a.5.5 0 01.49.4l.75 3.5a.5.5 0 01-.14.47L5.6 8.84a11 11 0 004.56 4.56l1.47-1.47a.5.5 0 01.47-.14l3.5.75a.5.5 0 01.4.49V15.5a.5.5 0 01-.5.5A13.5 13.5 0 013 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Fax",
    value: "+90 302 302 48 15",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 6V4a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 12h6M7 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@rdnsoft.com",
    href: "mailto:info@rdnsoft.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Website",
    value: "www.rdnsoft.com",
    href: "https://www.rdnsoft.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 2.5C10 2.5 7 6 7 10s3 7.5 3 7.5M10 2.5C10 2.5 13 6 13 10s-3 7.5-3 7.5M2.5 10h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158 Çankaya / Ankara, Türkiye",
    href: "https://maps.google.com/?q=YDA+Center+Ankara",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const focusAreas = [
  "Electronic Warfare Systems",
  "Drone & UAV Platforms",
  "Counter-UAV Detection",
  "AI Security Systems",
  "Secure Communication & C4I",
  "General Consultation",
];

export default function ContactPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Contact &amp; Consultation
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Let's discuss your operational requirements.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              Contact RDN Technology for product information, solution architecture,
              deployment models, or project-based evaluations across defense and security technologies.
            </p>
          </div>

          {/* Contact detail cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item) => (
              <div key={item.label} className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-slate-900 leading-6 hover:text-blue-700 transition"
                      >
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

      {/* ── FORM + INFO ── */}
      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">

          {/* Form */}
          <div className="card-premium p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Send a Message
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Tell us what you are evaluating.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share your project scope, product interest, or mission requirement and we will respond promptly.
            </p>

            <form
              action="https://formspree.io/f/mwvralbn"
              method="POST"
              className="mt-7 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Organization
                  </label>
                  <input
                    name="organization"
                    type="text"
                    placeholder="Your organization"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Phone (optional)
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+90 5xx xxx xx xx"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Area of Interest
                </label>
                <select
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                >
                  <option value="">Select interest area</option>
                  {focusAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Share your project scope, protection requirement, or mission need..."
                  required
                  className="min-h-[140px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                />
              </div>

              <input type="hidden" name="source" value="contact-page" />

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right column — company + topics */}
          <div className="space-y-6">
            {/* Company info */}
            <div className="card-premium p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-4">
                Company
              </div>
              <p className="text-base font-semibold text-slate-950 leading-6">
                RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-6">
                Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />
                YDA Center D:158 Çankaya / Ankara, Türkiye
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex gap-2">
                  <span className="text-slate-400 w-28 shrink-0">Tax Office</span>
                  <span>Çankaya Vergi Dairesi</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-400 w-28 shrink-0">Tax Number</span>
                  <span>7342274416</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-400 w-28 shrink-0">Trade Register</span>
                  <span>465313</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-400 w-28 shrink-0">Mersis</span>
                  <span>0734227441600001</span>
                </div>
              </div>
            </div>

            {/* Contact topics */}
            <div className="card-premium p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-4">
                We Can Help With
              </div>
              <div className="space-y-2">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-2xl bg-slate-950 p-7 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 mb-3">
                Response Time
              </div>
              <p className="text-sm leading-7 text-slate-300">
                We typically respond to all inquiries within <strong className="text-white">1 business day</strong>. For urgent project evaluations, please indicate your timeline in the message.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
