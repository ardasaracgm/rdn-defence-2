import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | DefenceTech`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="section-space">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {product.category}
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request Information
              </a>
              <a
                href="/products"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Back to Products
              </a>
            </div>
          </div>

          <div className="card-premium overflow-hidden">
            <div className="aspect-[16/10] bg-slate-200">
              <img
                src={product.cover}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {product.features?.length ? (
          <section className="mt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Key Features
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Core product capabilities and operational highlights.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {product.features.map((feature) => (
                <div key={feature} className="card-premium p-6">
                  <div className="text-sm font-medium leading-7 text-slate-700">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
