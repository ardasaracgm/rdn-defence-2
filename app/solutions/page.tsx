import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | DefenceTech",
  description: "Operational solution areas for defense and critical security environments.",
};

export default function SolutionsPage() {
  return (
    <main className="section-space">
      <div className="container-main max-w-4xl">
        <h1 className="text-4xl font-bold">Solutions</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Solutions include counter-UAV defense, mobile tactical communication, critical
          infrastructure protection, border surveillance, and AI-enhanced security operations.
        </p>
      </div>
    </main>
  );
}
