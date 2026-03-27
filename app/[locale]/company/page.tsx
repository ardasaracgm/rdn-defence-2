import type { Metadata } from "next";
import RdnCompanyCard from "@/components/RdnCompanyCard";

export const metadata: Metadata = {
  title: "RDN Technology — Corporate Information",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CompanyPage() {
  return <RdnCompanyCard />;
}
