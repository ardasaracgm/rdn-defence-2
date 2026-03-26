import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyLeadBar from "@/components/StickyLeadBar";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";

const BASE_URL = "https://www.rdnsoft.com";

// Locale → Open Graph locale map
const ogLocaleMap: Record<string, string> = {
  en: "en_US",
  tr: "tr_TR",
  ar: "ar_SA",
  ru: "ru_RU",
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const currentUrl = `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "RDN Technology — Defense & Security Systems",
      template: "%s | RDN Technology",
    },
    description:
      "RDN Technology delivers advanced defense and security solutions including electronic warfare, counter-UAV drone systems, UAV detection, and AI security technologies.",
    keywords: [
      "electronic warfare", "counter-UAV", "drone jammer", "UAV detection",
      "defense technology", "tactical drone", "RF jamming", "ALFA jammer",
      "ATALAY drone", "RDN Technology",
    ],
    authors: [{ name: "RDN Technology", url: BASE_URL }],
    creator: "RDN Technology",
    publisher: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] ?? "en_US",
      alternateLocale: Object.values(ogLocaleMap).filter((l) => l !== (ogLocaleMap[locale] ?? "en_US")),
      url: currentUrl,
      siteName: "RDN Technology",
      title: "RDN Technology — Defense & Security Systems",
      description: "Advanced defense and security solutions: electronic warfare, counter-UAV, drone systems, and UAV detection technologies.",
      images: [{ url: "/rdn-logo.png", width: 1200, height: 630, alt: "RDN Technology" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RDN Technology — Defense & Security Systems",
      description: "Advanced defense and security solutions: electronic warfare, counter-UAV, drone systems, and UAV detection technologies.",
      images: ["/rdn-logo.png"],
    },
    icons: { icon: "/rdn-logo.png", shortcut: "/rdn-logo.png", apple: "/rdn-logo.png" },
    alternates: {
      canonical: currentUrl,
      languages: {
        "en":       `${BASE_URL}/en`,
        "tr":       `${BASE_URL}/tr`,
        "ar":       `${BASE_URL}/ar`,
        "ru":       `${BASE_URL}/ru`,
        "x-default": `${BASE_URL}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        <GoogleTagManagerHead />
        <GoogleTagManagerBody />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <StickyLeadBar />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
