import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Eski site sayfaları → yeni site ──
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/what-we-do",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/what-we-do/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/metal-link",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/metal-link/:path*",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/jammer-systems",
        destination: "/products?category=Electronic%20Warfare",
        permanent: true,
      },
      {
        source: "/jammer-systems/:path*",
        destination: "/products?category=Electronic%20Warfare",
        permanent: true,
      },
      {
        source: "/face-recognition",
        destination: "/products/ai-face-recognition",
        permanent: true,
      },
      {
        source: "/face-recognition/:path*",
        destination: "/products/ai-face-recognition",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/",
        permanent: true,
      },
      // ── www olmayan URL'leri www'ye yönlendir ──
      {
        source: "/:path*",
        has: [{ type: "host", value: "rdnsoft.com" }],
        destination: "https://www.rdnsoft.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
