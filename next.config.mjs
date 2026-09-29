/** @type {import('next').NextConfig} */

// Locales used by the previous multilingual site. Their URLs are still indexed.
const OLD_LOCALES = "en|tr|ar|ru";

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // /company will be rebuilt later: temporary redirect so search engines
      // keep the URL instead of dropping it permanently.
      { source: "/company", destination: "/", permanent: false },
      { source: "/company/:path*", destination: "/", permanent: false },
      { source: `/:locale(${OLD_LOCALES})/company`, destination: "/", permanent: false },
      { source: `/:locale(${OLD_LOCALES})/company/:path*`, destination: "/", permanent: false },

      // Old locale-prefixed pages that have an equivalent on the new site.
      { source: `/:locale(${OLD_LOCALES})/about`, destination: "/about", permanent: true },
      { source: `/:locale(${OLD_LOCALES})/contact`, destination: "/contact", permanent: true },

      // Removed sections of the old site.
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/products", destination: "/", permanent: true },
      { source: "/products/:path*", destination: "/", permanent: true },
      { source: "/solutions", destination: "/#services", permanent: true },
      { source: "/solutions/:path*", destination: "/#services", permanent: true },
      { source: "/proposal-generator", destination: "/contact", permanent: true },
      { source: "/proposal-generator/:path*", destination: "/contact", permanent: true },
      { source: "/thank-you", destination: "/", permanent: true },

      // Any other old locale-prefixed URL (including the locale root itself).
      { source: `/:locale(${OLD_LOCALES})`, destination: "/", permanent: true },
      { source: `/:locale(${OLD_LOCALES})/:path*`, destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
