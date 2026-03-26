import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import ProductDocumentCard from "@/components/ProductDocumentCard";
import ProductVideoPlayer from "@/components/ProductVideoPlayer";
import ProductGallery from "@/components/ProductGallery";
import ProductHeroMedia from "@/components/ProductHeroMedia";
import EvagateNetworkDiagram from "@/components/EvagateNetworkDiagram";
import DroneProductPage from "@/components/DroneProductPage";
import DetectionProductPage from "@/components/DetectionProductPage";

const BASE_URL = "https://www.rdnsoft.com";

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateStaticParams() {
  const locales = ["en", "tr", "ar", "ru"];
  return products.flatMap((product) =>
    locales.map((locale) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product Not Found | RDN Technology" };
  const productUrl = `${BASE_URL}/products/${product.slug}`;
  const ogImage = product.media.hero.startsWith("/") ? `${BASE_URL}${product.media.hero}` : product.media.hero;
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: productUrl },
    openGraph: { type: "website", url: productUrl, title: product.seo.title, description: product.seo.description, siteName: "RDN Technology", images: [{ url: ogImage, width: 1200, height: 630, alt: product.media.heroAlt }] },
    twitter: { card: "summary_large_image", title: product.seo.title, description: product.seo.description, images: [ogImage] },
  };
}

function ProductJsonLd({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    brand: { "@type": "Brand", name: "RDN Technology" },
    manufacturer: {
      "@type": "Organization",
      name: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
      url: BASE_URL,
      telephone: "+905364461135",
      email: "info@rdnsoft.com",
    },
    category: product.category,
    url: `${BASE_URL}/products/${product.slug}`,
    image: product.media.hero.startsWith("/") ? `${BASE_URL}${product.media.hero}` : product.media.hero,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2099-12-31",
      description: "Price available upon request. Contact us for a quote.",
      seller: {
        "@type": "Organization",
        name: "RDN Technology",
        url: BASE_URL,
      },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function BreadcrumbJsonLd({ slug, name, category }: { slug: string; name: string; category: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${BASE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `${BASE_URL}/products?category=${encodeURIComponent(category)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: name,
        item: `${BASE_URL}/products/${slug}`,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const t = await getTranslations("products");

  if (product.category === "Drone Systems") return (<><ProductJsonLd slug={slug} /><BreadcrumbJsonLd slug={slug} name={product.name} category={product.category} /><DroneProductPage product={product} /></>);
  if (product.category === "Detection Systems") return (<><ProductJsonLd slug={slug} /><BreadcrumbJsonLd slug={slug} name={product.name} category={product.category} /><DetectionProductPage product={product} /></>);

  return (
    <>
      <ProductJsonLd slug={slug} />
      <BreadcrumbJsonLd slug={slug} name={product.name} category={product.category} />
      <main>
        <section className="hero-glow border-b border-slate-200">
          <div className="container-main section-space">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{product.category}</div>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">{product.name}</h1>
                <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-slate-700">{product.tagline}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">{product.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">{t("request_info")}</a>
                  <a href="/products" className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">{t("back")}</a>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="card-premium p-5"><div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{t("category")}</div><div className="mt-2 text-base font-semibold text-slate-950">{product.category}</div></div>
                  <div className="card-premium p-5"><div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{t("product_type")}</div><div className="mt-2 text-base font-semibold text-slate-950">{product.productType || "Advanced mission system"}</div></div>
                  <div className="card-premium p-5"><div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{t("deployment")}</div><div className="mt-2 text-base font-semibold text-slate-950">{t("deployment_value")}</div></div>
                </div>
              </div>
              <div className="card-premium overflow-hidden"><ProductHeroMedia video={product.media.videos?.find((v) => v.isHero)} image={{ src: product.media.hero, alt: product.media.heroAlt }} /></div>
            </div>
          </div>
        </section>

        {product.slug === "evagate-c4i" ? <EvagateNetworkDiagram /> : null}

        {product.overview ? (<section className="section-space"><div className="container-main"><div className="max-w-4xl"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("overview")}</div><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("overview_title")}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{product.overview}</p></div></div></section>) : null}

        {product.features?.length ? (<section className="section-space border-t border-slate-200 bg-white"><div className="container-main"><div className="max-w-3xl"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("features")}</div><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("features_title")}</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{product.features.map((f) => (<div key={f.title} className="card-premium p-7"><h3 className="text-xl font-semibold text-slate-950">{f.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{f.description}</p></div>))}</div></div></section>) : null}

        {product.specifications?.length ? (<section className="section-space border-t border-slate-200 bg-white"><div className="container-main"><div className="max-w-3xl"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("specs")}</div><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("specs_title")}</h2></div><div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">{product.specifications.map((spec, index, arr) => (<div key={spec.label} className={`grid gap-2 px-6 py-5 md:grid-cols-[240px_1fr] ${index !== arr.length - 1 ? "border-b border-slate-200" : ""}`}><div className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{spec.label}</div><div className="text-base font-medium text-slate-900">{spec.value}</div></div>))}</div></div></section>) : null}

        <section className="section-space">
          <div className="container-main grid gap-10 lg:grid-cols-[1fr_.9fr]">
            <div>
              {product.useCases?.length ? (<><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("use_cases")}</div><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("typical_areas")}</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">{product.useCases.map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm">{item}</div>))}</div></>) : null}
            </div>
            <div className="card-premium p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("consultation")}</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{t("consultation_title")}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{t("consultation_sub")}</p>
              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">{t("contact_team")}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{t("contact_team_sub")}</p>
                <form action="https://formspree.io/f/mwvralbn" method="POST" className="mt-6 space-y-3">
                  <input name="name" type="text" placeholder="Name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
                  <input name="email" type="email" placeholder="Email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
                  <input type="hidden" name="product" value={product.name} />
                  <button type="submit" className="w-full rounded-xl bg-white py-3 font-semibold text-slate-950 transition hover:opacity-90">{t("request_pricing")}</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {(product.media.documents?.length || product.media.videos?.length) ? (
          <section className="section-space">
            <div className="container-main grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="card-premium p-8"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("documents")}</div><h3 className="mt-3 text-2xl font-bold text-slate-950">{t("documents_title")}</h3></div>
                {product.media.documents?.length ? product.media.documents.map((doc) => <ProductDocumentCard key={doc.title} title={doc.title} file={doc.file} kind={doc.kind} />) : <div className="card-premium p-8"><div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500">{t("no_docs")}</div></div>}
              </div>
              <div className="space-y-6">
                <div className="card-premium p-8"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("videos")}</div><h3 className="mt-3 text-2xl font-bold text-slate-950">{t("videos_title")}</h3></div>
                {product.media.videos?.length ? product.media.videos.map((video) => <ProductVideoPlayer key={video.title} title={video.title} file={video.file} poster={video.poster} />) : <div className="card-premium p-8"><div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500">{t("no_videos")}</div></div>}
              </div>
            </div>
          </section>
        ) : null}

        {product.media.gallery?.length ? (<section className="section-space border-t border-slate-200 bg-white"><div className="container-main"><div className="max-w-3xl"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{t("gallery")}</div><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t("gallery_title")}</h2></div><ProductGallery images={product.media.gallery} /></div></section>) : null}

        {/* ── RELATED BLOG ARTICLES ── */}
        {(() => {
          const related = blogPosts.filter(
            (p) => p.category === product.category || p.tags.some((tag) =>
              product.name.toLowerCase().includes(tag.toLowerCase()) ||
              tag.toLowerCase().includes(product.category.toLowerCase().split(" ")[0])
            )
          ).slice(0, 2);
          if (!related.length) return null;
          return (
            <section className="section-space border-t border-slate-200 bg-slate-50/60">
              <div className="container-main">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-8">
                  Related Articles
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {related.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group card-premium flex flex-col justify-between p-7 transition hover:shadow-md"
                    >
                      <div>
                        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {post.category}
                        </span>
                        <h3 className="mt-4 text-base font-bold leading-snug text-slate-950 group-hover:text-blue-700 transition">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs text-slate-400">{post.readTime} min read</span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-950 group-hover:text-blue-700 transition">
                          Read →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        <section className="section-space">
          <div className="container-main">
            <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
              <div className="grid gap-8 p-10 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{t("next_step")}</div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t("next_title")}</h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{t("next_sub")}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">{t("contact_us")}</a>
                  <a href="/products" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{t("browse")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
