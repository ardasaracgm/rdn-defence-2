import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DefenceTech",
  description: "Get in touch for product information, project discussions, and consultations.",
};

export default function ContactPage() {
  return (
    <main className="section-space">
      <div className="container-main max-w-3xl">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Share your requirements and our team will get back to you for product,
          solution, or project-based discussions.
        </p>

        <div className="mt-10 card-premium p-8">
          <form className="grid gap-5">
            <input
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              placeholder="Full Name"
            />
            <input
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              placeholder="Email"
            />
            <input
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              placeholder="Company"
            />
            <textarea
              className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
              placeholder="Your message"
            />
            <button
              type="submit"
              className="w-fit rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
