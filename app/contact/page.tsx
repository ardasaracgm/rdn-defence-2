import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | DefenceTech",
  description:
    "Get in touch for product information, solution discussions, and project-based consultations.",
};

const contactTopics = [
  "Product inquiry",
  "Solution consultation",
  "Project collaboration",
  "Technical discussion",
  "Partnership opportunity",
  "General contact",
];

const focusAreas = [
  "Electronic Warfare",
  "UAV Systems",
  "Airborne Platforms",
  "AI Security",
  "Secure Communication",
  "Command & Control",
];

export default function ContactPage() {
  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Contact & Consultation
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Let’s discuss your operational needs, project scope, or technology requirements.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Contact us for product information, solution architecture, deployment models,
              or project-based evaluations across defense and security technologies.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Fast</div>
              <p className="mt-2 text-sm text-slate-600">
                Clear B2B communication flow
              </p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Flexible</div>
              <p className="mt-2 text-sm text-slate-600">
                Product and solution-based contact
              </p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Structured</div>
              <p className="mt-2 text-sm text-slate-600">
                Ready for project-level discussions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="card-premium p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Send a Message
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Tell us about your requirement.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Share your interest area, project scope, or product need. This form
              is structured for institutional inquiries, solution discussions, and
              technology evaluations.
            </p>

            <form className="mt-10 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Company
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="Company or institution"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    placeholder="+90 ..."
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Topic
                  </label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500">
                    <option>Select a topic</option>
                    {contactTopics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Focus Area
                  </label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500">
                    <option>Select a focus area</option>
                    {focusAreas.map((area) => (
                      <option key={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Message
                </label>
                <textarea
                  className="min-h-[160px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                  placeholder="Share your requirement, project background, or product interest..."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                <p className="max-w-xl text-sm leading-6 text-slate-500">
                  By submitting this form, you provide your contact details for
                  project communication and consultation purposes.
                </p>

                <button
                  type="submit"
                  className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Contact Information
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Corporate communication
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <div className="mt-1">Ankara, Türkiye</div>
                </div>

                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div className="mt-1">info@yourcompany.com</div>
                </div>

                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <div className="mt-1">+90 5xx xxx xx xx</div>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Why Contact Us
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Structured discussions for serious projects.
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Product and portfolio guidance",
                  "Solution architecture discussions",
                  "Deployment and integration evaluation",
                  "Project and partnership conversations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] p-8 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Explore First
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Review our product and solution structure before reaching out.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                You can browse the product portfolio and solution pages to better
                understand our technology positioning before starting a conversation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  View Products
                </Link>

                <Link
                  href="/solutions"
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
