import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const previewFeatures = product.features?.slice(0, 2) || [];

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <article className="card-premium flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
          <img
            src={product.media.hero}
            alt={product.media.heroAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />

          <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900 backdrop-blur">
            {product.category}
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-white p-6">
          <div>
            <h3 className="text-xl font-semibold leading-snug text-slate-950 transition group-hover:text-blue-700">
              {product.name}
            </h3>

            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
              {product.tagline}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {product.shortDescription}
            </p>
          </div>

          {previewFeatures.length ? (
            <div className="mt-6 space-y-3">
              {previewFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </div>
                  <div className="mt-1 text-xs leading-6 text-slate-600">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
            <span className="text-sm font-medium text-slate-500">
              View details
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition group-hover:bg-blue-700">
              Explore
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
