import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://www.rdnsoft.com";

export async function GET() {
  const productList = products
    .map((p) => `- ${p.name}: ${p.description?.slice(0, 100) ?? p.tagline}`)
    .join("\n");

  const blogList = blogPosts
    .map((p) => `- ${p.title} (${p.category}): ${BASE_URL}/blog/${p.slug}`)
    .join("\n");

  const categories = [...new Set(products.map((p) => p.category))];

  const content = `# RDN Technology — Defense & Security Systems
# ${BASE_URL}

## Company

RDN Technology (RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi) is a defense and security technology company based in Ankara, Turkey. The company develops and positions advanced defense systems including electronic warfare, counter-UAV platforms, drone systems, detection systems, AI security technologies, and secure C4I communication systems.

- Website: ${BASE_URL}
- Contact: info@rdnsoft.com
- Phone: +90 536 446 11 35
- Address: Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center D:158 Çankaya / Ankara, Turkey
- Tax ID: 7342274416

## Capability Domains

${categories.map((c) => `- ${c}`).join("\n")}

## Products (${products.length} total)

${productList}

## Blog Articles

${blogList}

## Certifications & Compliance

- Ministry of National Defense (MSB) authorized manufacturer
- SSB (Presidency of Defense Industries) recognized supplier
- EYDEP certification holder
- ISO 9001:2015, ISO 14001:2015, ISO 45001 certified
- NATO standard aligned

## Site Pages

- Products: ${BASE_URL}/products
- Solutions: ${BASE_URL}/solutions
- About: ${BASE_URL}/about
- Blog: ${BASE_URL}/blog
- Contact: ${BASE_URL}/contact

## Languages

English, Turkish (Türkçe), Arabic (العربية), Russian (Русский)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
