import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyLeadBar from "@/components/StickyLeadBar";

export const metadata: Metadata = {
  title: "Advanced Defense & Security Technologies",
  description:
    "Electronic warfare, UAV systems, AI security, command and control, and secure communication solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
