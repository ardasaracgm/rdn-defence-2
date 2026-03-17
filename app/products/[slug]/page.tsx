import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

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

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const useCases = [
    "Critical infrastructure protection",
    "Operational field deployment",
    "Public security and defense missions",
    "Fixed and mobile platform integration",
  ];

  return (
    <main>
      <section className="hero-glow border-b border-slate-200">
        <div className="container-main section-space">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {product.category}
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
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

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Category
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    {product.category}
                  </div>
                </div>

                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Deployment
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Fixed / Mobile / Tactical
                  </div>
                </div>

                <div className="card-premium p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Focus
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Mission-critical operations
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium overflow-hidden">
              <div className="aspect-[16/12] bg-slate-200">
                <img
                  src={product.cover}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Product Overview
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Built for modern defense and security environments.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {product.shortDescription} This platform is positioned to support
                operational continuity, system integration, and high-reliability
                deployment in demanding mission environments.
              </p>
            </div>

            {product.features?.length ? (
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="card-premium p-6">
                    <div className="text-base font-semibold text-slate-950">
                      {feature}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Designed to improve field performance, response capability,
                      and integration flexibility in operational deployment.
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Use Cases
            </div>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Typical application areas
            </h3>

            <div className="mt-6 space-y-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
                Consultation
              </div>
              <h4 className="mt-3 text-xl font-semibold text-white">
                Need a tailored configuration?
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We can align product architecture, deployment model, and
                integration scope based on your mission or platform
                requirements.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Operational Advantage
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Positioned for integration, resilience, and field readiness.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This product is part of a wider defense technology portfolio that
              combines electronic warfare, unmanned systems, secure
              communication, and AI-enabled security into one structured
              ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Mission Alignment
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Designed to support evolving defense and security requirements
                across fixed, tactical, and mobile use cases.
              </p>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Integration Ready
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Structured for compatibility with broader command, surveillance,
                or communication environments.
              </p>
            </div>

            <div className="card-premium p-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Premium Positioning
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Presented with a clean and high-technology interface that
                supports strong institutional and B2B perception.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Next Step
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Discuss deployment options and project fit.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Contact us to evaluate use case fit, deployment architecture,
                  integration requirements, and product customization options.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Request Consultation
                </a>

                <a
                  href="/products"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
