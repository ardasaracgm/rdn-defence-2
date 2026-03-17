import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | DefenceTech",
  description: "Corporate profile and technology positioning.",
};

export default function AboutPage() {
  return (
    <main className="section-space">
      <div className="container-main max-w-4xl">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We provide advanced defense and security technologies across electronic warfare,
          UAV systems, AI-enabled surveillance, and secure communication infrastructure.
        </p>
      </div>
    </main>
  );
}
