export const SITE_URL = "https://www.rdnsoft.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": `${SITE_URL}/#organization`,
  name: "RDN Technology",
  legalName:
    "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
  alternateName: ["RDN", "RDN Defense", "RDN Savunma"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/rdn-logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Defense and security technology manufacturer specializing in electronic warfare, counter-UAV systems, drone platforms, and UAV detection solutions. Based in Ankara, Türkiye.",
  slogan: "Advanced systems for mission-critical environments.",
  foundingLocation: {
    "@type": "Place",
    name: "Ankara, Türkiye",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06510",
    addressCountry: "TR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90-536-446-11-35",
      email: "info@rdnsoft.com",
      contactType: "sales",
      areaServed: ["TR", "Worldwide"],
      availableLanguage: ["English", "Turkish", "Russian"],
    },
  ],
  taxID: "7342274416",
  vatID: "7342274416",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "MERSIS",
      value: "0734227441600001",
    },
    {
      "@type": "PropertyValue",
      propertyID: "TradeRegistry",
      value: "465313",
    },
  ],
  industry: "Defense & Security Technology",
  naics: "541330",
  knowsAbout: [
    "Electronic Warfare",
    "Counter-UAV Systems",
    "RF Jamming",
    "Drone Systems",
    "Unmanned Aerial Vehicles",
    "UAV Detection",
    "Radar Systems",
    "AI Security",
    "Tactical Communications",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  sameAs: [
    // LinkedIn şirket sayfan varsa ekle:
    // "https://www.linkedin.com/company/rdn-technology",
    // Wikidata Q-item oluşturduğunda ekle:
    // "https://www.wikidata.org/wiki/Q......",
    // YouTube/X varsa ekle
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "RDN Technology",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "tr", "ar", "ru"],
};

// ─── Product schema builder ──────────────────────────────────────────────

export type ProductFeature = {
  name: string;   // "Antenna Gain" | "Operating Temperature" | "Frequency Coverage"
  value: string;  // "min. 4 dBi" | "-20°C to +55°C" | "400 MHz – 6 GHz"
  unitText?: string;
};

export type ProductSchemaInput = {
  slug: string;                    // "alfa-850v"
  name: string;                    // "ALFA Drone-UAV Jammer System"
  description: string;             // Kısa özet (140-160 char ideal)
  longDescription?: string;        // Daha uzun açıklama (varsa)
  category:                        // Kategorimiz şimdilik 3 sabit değerden biri
    | "Electronic Warfare"
    | "Drone Systems"
    | "Detection Systems";
  productModel?: string;           // "ALFA 850V"
  image: string;                   // "/products/alfa-850v.jpg" veya tam URL
  features?: ProductFeature[];     // Teknik özellikler
  locale?: string;                 // URL üretimi için, default "en"
  countryOfOrigin?: string;        // Default "TR"
};

export function buildProductSchema(input: ProductSchemaInput) {
  const {
    slug,
    name,
    description,
    longDescription,
    category,
    productModel,
    image,
    features = [],
    locale = "en",
    countryOfOrigin = "TR",
  } = input;

  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const productUrl = `${SITE_URL}${localePrefix}/products/${slug}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name,
    description: longDescription ?? description,
    url: productUrl,
    image: imageUrl,
    sku: slug.toUpperCase(),
    ...(productModel && { model: productModel, mpn: productModel }),
    category,
    brand: {
      "@type": "Brand",
      name: "RDN Technology",
    },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    countryOfOrigin: {
      "@type": "Country",
      name: countryOfOrigin,
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Defense and Military Organizations",
    },
    ...(features.length > 0 && {
      additionalProperty: features.map((f) => ({
        "@type": "PropertyValue",
        name: f.name,
        value: f.value,
        ...(f.unitText && { unitText: f.unitText }),
      })),
    }),
  };
}
