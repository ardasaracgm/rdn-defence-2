import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | RDN Technology",
  description: "Defense and security solutions from RDN Technology.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Solutions
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Mission-aligned solutions.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              End-to-end capability packages structured around your operational requirements.
            </p>
            <div className="mt-8">
              <Link href="/products" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
