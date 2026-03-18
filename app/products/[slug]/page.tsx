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
      title: "Product Not Found | DefenceTech",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

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

              <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-slate-700">
                {product.tagline}
              </p>

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
                    Product Type
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-950">
                    Advanced mission system
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
              </div>
            </div>

            <div className="card-premium overflow-hidden">
              <div className="aspect-[16/12] bg-slate-200">
                <img
                  src={product.media.hero}
                  alt={product.media.heroAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.overview ? (
        <section className="section-space">
          <div className="container-main">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Product Overview
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Built for modern defense and security environments.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {product.overview}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {product.features?.length ? (
        <section className="section-space border-t border-slate-200 bg-white">
          <div className="container-main">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Key Features
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Core capabilities and operational strengths.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Designed to support reliability, flexibility, and field-ready
                performance in demanding use cases.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {product.features.map((feature) => (
                <div key={feature.title} className="card-premium p-7">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            {product.useCases?.length ? (
              <>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Use Cases
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Typical application areas.
                </h2>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {product.useCases.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <div className="card-premium p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Consultation
            </div>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Need a tailored configuration?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We can align deployment model, system scope, and integration needs
              according to your mission, platform, or operational environment.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
                Contact Our Team
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Discuss project scope, product fit, and technical positioning for
                your organization.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {product.specifications?.length ? (
        <section className="section-space border-t border-slate-200 bg-white">
          <div className="container-main">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Specifications
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Technical and operational summary.
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {product.specifications.map((spec, index, arr) => (
                <div
                  key={spec.label}
                  className={`grid gap-2 px-6 py-5 md:grid-cols-[240px_1fr] ${
                    index !== arr.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {spec.label}
                  </div>
                  <div className="text-base font-medium text-slate-900">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {(product.media.documents?.length || product.media.videos?.length) ? (
        <section className="section-space">
          <div className="container-main grid gap-8 lg:grid-cols-2">
            <div className="card-premium p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Documents
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Product documents and references.
              </h3>

              <div className="mt-6 space-y-4">
                {product.media.documents?.length ? (
                  product.media.documents.map((doc) => (
                    <a
                      key={doc.title}
                      href={doc.file}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {doc.title}
                    </a>
                  ))
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500">
                    No documents added yet.
                  </div>
                )}
              </div>
            </div>

            <div className="card-premium p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Videos
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Product videos and demonstrations.
              </h3>

              <div className="mt-6 space-y-4">
                {product.media.videos?.length ? (
                  product.media.videos.map((video) => (
                    <a
                      key={video.title}
                      href={video.file}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {video.title}
                    </a>
                  ))
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500">
                    No videos added yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {product.media.gallery?.length ? (
        <section className="section-space border-t border-slate-200 bg-white">
          <div className="container-main">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Gallery
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Product visuals.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {product.media.gallery.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="card-premium overflow-hidden"
                >
                  <div className="aspect-[16/11] bg-slate-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
                  Contact us to evaluate product fit, deployment approach,
                  integration scope, and project-level customization options.
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
