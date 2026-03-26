import { MetadataRoute } from "next";

const BASE_URL = "https://www.rdnsoft.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/", "/_next/", "/static/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
      {
        userAgent: "YandexImages",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
