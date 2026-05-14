import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RDN Proposal Generator",
  description: "Commercial offer generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
