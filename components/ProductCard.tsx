import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group card-premium overflow-hidden transition hover:-translate-y-1"
    >
      <div className="aspect-[16/10] bg-slate-200">
        <img
          src={product.cover}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          {product.category}
        </div>

        <h3 className="mt-3 text-xl font-semibold text-slate-950">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-5 text-sm font-semibold text-slate-950">
          View product →
        </div>
      </div>
    </Link>
  );
}
