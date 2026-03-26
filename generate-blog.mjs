#!/usr/bin/env node

/**
 * RDN Technology — Otomatik Blog Makale Üreteci
 * Claude API kullanarak haftalık savunma teknolojisi makalesi üretir
 * ve data/blog.ts dosyasına ekler.
 *
 * Kullanım: node scripts/generate-blog.mjs
 * Gerekli env: ANTHROPIC_API_KEY
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_FILE = path.join(__dirname, "../data/blog.ts");

// Mevcut blog.ts dosyasından slug'ları ve kategorileri oku
function getExistingPosts() {
  const content = fs.readFileSync(BLOG_FILE, "utf-8");
  const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const titles = [...content.matchAll(/title:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  return { slugs, titles };
}

// Konu havuzu — her hafta farklı bir konu seçilir
const TOPIC_POOL = [
  { title: "IED Jammer Systems: Protecting Forces from Remote-Controlled Threats", category: "Electronic Warfare", tags: ["IED Jammer", "Electronic Warfare", "Force Protection", "RF Jamming"] },
  { title: "VTOL Drones: Combining Fixed-Wing Efficiency with Helicopter Flexibility", category: "Drone Systems", tags: ["VTOL", "UAV", "Fixed-Wing", "Tactical Drone"] },
  { title: "Turkey's Defense Export Growth: Electronic Warfare and UAV Systems", category: "Industry", tags: ["Turkey", "Defense Export", "UAV", "Electronic Warfare"] },
  { title: "RF Spectrum Analysis for UAV Detection: How Passive Systems Work", category: "Detection Systems", tags: ["RF Detection", "UAV Detection", "Counter-UAV", "Spectrum Analysis"] },
  { title: "FPV Kamikaze Drones: Tactical Applications and Technical Specifications", category: "Drone Systems", tags: ["FPV", "Kamikaze Drone", "Strike UAV", "Tactical"] },
  { title: "Secure Communication in Military Operations: C4I Architecture Explained", category: "Secure Communication", tags: ["C4I", "Secure Communication", "Military", "Tactical"] },
  { title: "Protecting Critical Infrastructure with Counter-UAV Systems", category: "Detection Systems", tags: ["Critical Infrastructure", "Counter-UAV", "C-UAS", "Security"] },
  { title: "Electronic Warfare Fundamentals: RF Jamming Principles and Applications", category: "Electronic Warfare", tags: ["Electronic Warfare", "RF Jamming", "EW", "Counter-UAV"] },
  { title: "Heavy-Lift Cargo Drones: Defense and Logistics Applications", category: "Drone Systems", tags: ["Cargo Drone", "Heavy-Lift UAV", "Logistics", "Defense"] },
  { title: "AI-Powered Surveillance: Face Recognition in Security Operations", category: "Industry", tags: ["AI", "Face Recognition", "Surveillance", "Security"] },
  { title: "NATO Counter-UAV Standards and Electronic Warfare Compliance", category: "Industry", tags: ["NATO", "Counter-UAV", "Electronic Warfare", "Standards"] },
  { title: "Vehicle-Mounted Drone Jammers: Mobile Counter-UAV Protection", category: "Electronic Warfare", tags: ["Vehicle Jammer", "Mobile EW", "Counter-UAV", "Convoy Protection"] },
];

// Haftanın numarasına göre konu seç (deterministik rotasyon)
function selectTopic(existingSlugs) {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const available = TOPIC_POOL.filter((t) => {
    const slug = t.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return !existingSlugs.includes(slug);
  });
  if (available.length === 0) {
    console.log("Tüm konular kullanıldı, havuz sıfırlanıyor...");
    return TOPIC_POOL[weekNumber % TOPIC_POOL.length];
  }
  return available[weekNumber % available.length];
}

// Claude API ile makale üret
async function generateArticle(topic) {
  const prompt = `You are a defense technology expert writing for RDN Technology's blog at rdnsoft.com.

Write a detailed, technical blog article about: "${topic.title}"

Category: ${topic.category}
Tags: ${topic.tags.join(", ")}

STRICT REQUIREMENTS:
- Write in English
- Length: 600-900 words of actual content
- Use markdown formatting: ## for H2, ### for H3, **bold** for emphasis, - for bullets
- Include 4-6 H2 sections
- Be technically accurate and informative
- Naturally mention RDN Technology products where relevant (ALFA Jammer, VEGA, EvaGate, drone systems)
- End with a practical conclusion
- Do NOT include the title in the content (it's added separately)
- Do NOT use any quotes in the content that would break JSON/JS strings

Return ONLY a JSON object with this exact structure (no markdown, no backticks, just raw JSON):
{
  "slug": "url-friendly-slug-here",
  "excerpt": "2-3 sentence summary for the article listing page (max 200 chars)",
  "content": "full markdown content here with \\n for newlines",
  "readTime": 7,
  "seoTitle": "Article Title | RDN Technology",
  "seoDescription": "Meta description 150-160 characters"
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API hatası: ${response.status} — ${err}`);
  }

  const data = await response.json();
  const text = data.content[0].text.trim();

  // JSON parse et
  const clean = text.replace(/^```json?\n?/, "").replace(/\n?```$/, "").trim();
  return JSON.parse(clean);
}

// blog.ts dosyasına yeni makaleyi ekle
function appendToBlogFile(topic, article) {
  const today = new Date().toISOString().split("T")[0];

  const newPost = `  {
    slug: "${article.slug}",
    title: "${topic.title.replace(/"/g, '\\"')}",
    excerpt: "${article.excerpt.replace(/"/g, '\\"')}",
    category: "${topic.category}",
    date: "${today}",
    readTime: ${article.readTime},
    tags: [${topic.tags.map((t) => `"${t}"`).join(", ")}],
    seo: {
      title: "${article.seoTitle.replace(/"/g, '\\"')}",
      description: "${article.seoDescription.replace(/"/g, '\\"')}",
    },
    content: \`
${article.content}
    \`,
  },`;

  let content = fs.readFileSync(BLOG_FILE, "utf-8");

  // Array'in sonuna (]; öncesine) ekle
  const insertPoint = content.lastIndexOf("];");
  if (insertPoint === -1) {
    throw new Error("blog.ts dosyasında ]; bulunamadı");
  }

  content =
    content.slice(0, insertPoint) +
    newPost +
    "\n" +
    content.slice(insertPoint);

  fs.writeFileSync(BLOG_FILE, content, "utf-8");
  console.log(`✅ Yeni makale eklendi: "${topic.title}" (${article.slug})`);
}

// Ana fonksiyon
async function main() {
  console.log("🚀 Blog makale üreteci başlatıldı...");

  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY environment variable eksik!");
  }

  const { slugs, titles } = getExistingPosts();
  console.log(`📚 Mevcut makale sayısı: ${slugs.length}`);

  const topic = selectTopic(slugs);
  console.log(`📝 Seçilen konu: "${topic.title}"`);

  console.log("🤖 Claude API ile makale üretiliyor...");
  const article = await generateArticle(topic);

  console.log(`📄 Makale üretildi: ${article.slug} (${article.readTime} dk okuma)`);

  appendToBlogFile(topic, article);

  console.log("✨ Tamamlandı! Vercel deploy bekliyor...");
}

main().catch((err) => {
  console.error("❌ Hata:", err.message);
  process.exit(1);
});
