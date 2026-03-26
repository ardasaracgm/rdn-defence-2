import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://www.rdnsoft.com";

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateStaticParams() {
  const locales = ["en", "tr", "ar", "ru"];
  return blogPosts.flatMap((post) =>
    locales.map((locale) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | RDN Technology" };
  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${slug}`,
      title: post.seo.title,
      description: post.seo.description,
      siteName: "RDN Technology",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "RDN Technology",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "RDN Technology",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/rdn-logo.png` },
    },
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbJsonLd({ slug, title }: { slug: string; title: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const categoryColors: Record<string, string> = {
  "Electronic Warfare":   "bg-blue-50 text-blue-700 border-blue-100",
  "Drone Systems":        "bg-sky-50 text-sky-700 border-sky-100",
  "Detection Systems":    "bg-teal-50 text-teal-700 border-teal-100",
  "Secure Communication": "bg-purple-50 text-purple-700 border-purple-100",
  "Industry":             "bg-slate-100 text-slate-700 border-slate-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Minimal markdown-to-JSX renderer for h2, h3, p, ul, li, strong, table
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-10 mb-4 text-2xl font-bold tracking-tight text-slate-950">
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mt-7 mb-3 text-lg font-semibold text-slate-950">
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/));
      const headers = rows[0].split("|").filter(Boolean).map((c) => c.trim());
      const bodyRows = rows.slice(1);
      elements.push(
        <div key={key++} className="my-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {headers.map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bodyRows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return (
                  <tr key={ri} className="bg-white">
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-5 py-3 text-slate-700">{cell}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-5 space-y-2 pl-5">
          {items.map((item, idx) => (
            <li key={idx} className="text-slate-600 leading-7 list-disc">
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold text-slate-950'>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-5 space-y-2 pl-5">
          {items.map((item, idx) => (
            <li key={idx} className="text-slate-600 leading-7 list-decimal">
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold text-slate-950'>$1</strong>") }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={key++} className="my-4 text-base leading-8 text-slate-600"
        dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold text-slate-950'>$1</strong>") }}
      />
    );
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 2);

  return (
    <>
      <ArticleJsonLd slug={slug} />
      <BreadcrumbJsonLd slug={slug} title={post.title} />
      <main>
        {/* ── HERO ── */}
        <section className="hero-glow border-b border-slate-200">
          <div className="container-main section-space">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-slate-600 transition">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-slate-600 transition">Blog</Link>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[post.category] ?? categoryColors["Industry"]}`}>
                {post.category}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
                <span>·</span>
                <span>RDN Technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section className="section-space">
          <div className="container-main">
            <div className="grid gap-16 lg:grid-cols-[1fr_300px] lg:items-start">
              {/* Article body */}
              <article className="prose-custom">
                {renderContent(post.content)}
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-8">
                {/* Tags */}
                <div className="card-premium p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-4">Topics</div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 mb-3">
                    Products
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Explore our {post.category} systems and related defense technology solutions.
                  </p>
                  <Link
                    href={`/products?category=${encodeURIComponent(post.category)}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    View products
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Contact */}
                <div className="card-premium p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-3">
                    Questions?
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    Contact our team for technical information and deployment guidance.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-blue-700 transition"
                  >
                    Get in touch →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        {related.length > 0 && (
          <section className="section-space border-t border-slate-200 bg-slate-50/60">
            <div className="container-main">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-8">
                Related Articles
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group card-premium flex flex-col justify-between p-8 transition hover:shadow-md"
                  >
                    <div>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[rel.category] ?? categoryColors["Industry"]}`}>
                        {rel.category}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-slate-950 group-hover:text-blue-700 transition leading-snug">
                        {rel.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{rel.excerpt}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{formatDate(rel.date)}</span>
                      <span className="text-xs font-semibold text-slate-950 group-hover:text-blue-700 transition">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                >
                  All articles
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
