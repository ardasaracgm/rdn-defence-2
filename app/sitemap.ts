import type { MetadataRoute } from "next";

const BASE = "https://www.rdnsoft.com";

const routes = [
  "",
  "/software-development",
  "/ai-computer-vision",
  "/data-signal-technologies",
  "/system-integration",
  "/technology-consulting",
  "/industries",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
