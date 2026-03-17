import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Products | Advanced Defense & Security Technologies",
  description:
    "Explore electronic warfare systems, UAV platforms, AI security products, and secure communication technologies.",
};

export default function ProductsPage() {
  return (
    <main className="section-space">
      <div className="container-main">
        <SectionTitle
          eyebrow="Product Portfolio"
          title="Technology products designed for defense, security, and critical operations."
          description="A unified product architecture covering electronic warfare, airborne systems, UAV platforms, AI-based recognition, and secure communication."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
