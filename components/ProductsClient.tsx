"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  "Electronic Warfare",
  "Drone Systems",
  "Airborne Systems",
  "Detection Systems",
  "AI Systems",
  "Secure Communication",
  "Ammunition Systems",
] as const;

type Category = (typeof CATEGORIES)[number] | "All";

export default function ProductsClient() {
  const t = useTranslations("products");
  const [active, setActive] = useState<Category>("All");
  const [, startTransition] = useTransition();

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  const counts = Object.fromEntries(
    CATEGORIES.map((cat) => [
      cat,
      products.filter((p) => p.category === cat).length,
    ])
  );

  const handleSelect = (cat: Category) => {
    startTransition(() => setActive(cat));
  };

  const btnClass = (cat: Category) =>
    cat === active
      ? "rounded-xl border border-slate-950 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition"
      : "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50";

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              {t("badge")}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t("subtitle")}
            </p>
          </div>

          {/* ── FILTER BUTTONS ── */}
          <div className="mt-10 flex flex-wrap gap-2">
            {/* All */}
            <button
              onClick={() => handleSelect("All")}
              className={btnClass("All")}
            >
              {t("all")}
              <span className="ml-2 text-xs opacity-60">{products.length}</span>
            </button>

            {/* Categories */}
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelect(cat)}
                className={btnClass(cat)}
              >
                {cat}
                <span className="ml-2 text-xs opacity-60">{counts[cat]}</span>
              </button>
            ))}
          </div>

          {/* Active category label */}
          {active !== "All" && (
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <span>{filtered.length} products in</span>
              <span className="font-semibold text-slate-950">{active}</span>
              <button
                onClick={() => handleSelect("All")}
                className="ml-1 text-xs text-slate-400 underline hover:text-slate-600"
              >
                clear
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="section-space">
        <div className="container-main">
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-slate-950">No products found</h3>
              <p className="mt-2 text-sm text-slate-500">Try selecting a different category.</p>
              <button
                onClick={() => handleSelect("All")}
                className="mt-6 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {t("all")}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
