"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import { products, type ProductCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import ProductHeroMedia from "@/components/ProductHeroMedia";

const categories: Array<"All" | ProductCategory> = [
  "All",
  "Electronic Warfare",
  "Drone Systems",
  "Airborne Systems",
  "Detection Systems",
  "Secure Communication",
  "AI Systems",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Product Portfolio
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Defense and security technologies structured in one unified portfolio.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Explore our product architecture across electronic warfare, UAV systems,
              airborne platforms, AI-enabled security, and secure communication solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">{products.length}</div>
              <p className="mt-2 text-sm text-slate-600">Products in portfolio</p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">6</div>
              <p className="mt-2 text-sm text-slate-600">Core technology categories</p>
            </div>

            <div className="card-premium p-5">
              <div className="text-3xl font-bold text-slate-950">Land · Air · Mobile</div>
              <p className="mt-2 text-sm text-slate-600">Deployment environments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionTitle
            eyebrow="Filter by Category"
            title="Find products by operational domain."
            description="Use category filters to navigate the portfolio faster and focus on the systems most relevant to your mission or project."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span>{" "}
              product{filteredProducts.length === 1 ? "" : "s"}
            </p>

            <div className="text-sm text-slate-500">
              Active filter:{" "}
              <span className="font-semibold text-slate-900">{activeCategory}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">
                No products found in this category.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Try another category to explore the rest of the portfolio.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Structured Product System
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                All products are managed from one data architecture, making the site scalable and easy to expand.
              </p>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Premium Institutional Positioning
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Product presentation is designed to support strong B2B, defense, and high-technology perception.
              </p>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Mission-Oriented Navigation
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Categories help users move from broad capability areas to specific products more quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
