import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProductsClient from "@/components/ProductsClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("products");
  return {
    title: `${t("badge")} | RDN Technology`,
    description: t("subtitle"),
  };
}

export default function ProductsPage() {
  return <ProductsClient />;
}
