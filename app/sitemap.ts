import { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://www.rdnsoft.com";
const locales = ["en", "tr", "ar", "ru"] as const;

function url(path: string, locale?: string) {
  if (!locale || locale === "en") return `${BASE_URL}${path}`;
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/",          priority: 1.0,  freq: "weekly"  },
    { path: "/products",  priority: 0.9,  freq: "weekly"  },
    { path: "/solutions", priority: 0.7,  freq: "monthly" },
    { path: "/about",     priority: 0.6,  freq: "monthly" },
    { path: "/contact",   priority: 0.6,  freq: "monthly" },
  ] as const;

  const staticUrls = staticPages.flatMap(({ path, priority, freq }) =>
    locales.map((locale) => ({
      url: url(path, locale),
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    }))
  );

  const productUrls = products.flatMap((product) =>
    locales.map((locale) => ({
      url: url(`/products/${product.slug}`, locale),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: product.featured ? 0.9 : 0.7,
    }))
  );

  return [...staticUrls, ...productUrls];
}
