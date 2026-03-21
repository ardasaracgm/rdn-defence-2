import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products | RDN Technology",
  description: "Browse all RDN Technology defense and security products — electronic warfare, drone systems, and counter-UAV detection.",
};

const categories = [
  "All",
  "Electronic Warfare",
  "Drone Systems",
  "Detection Systems",
  "AI Systems",
  "Secure Communication",
];

export default function ProductsPage() {
  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Product Portfolio
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              All systems.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Browse the full portfolio across electronic warfare, drone systems, and counter-UAV detection.
            </p>
          </div>

          {/* Category filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/products" : `/products?category=${encodeURIComponent(cat)}`}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-2 text-xs text-slate-400">
                    {products.filter((p) => p.category === cat).length}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
