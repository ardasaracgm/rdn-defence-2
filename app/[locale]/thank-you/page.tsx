import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main>
      <section className="section-space">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold text-slate-950">Thank you.</h1>
          <p className="mt-4 text-lg text-slate-600">We have received your message and will respond within 1 business day.</p>
          <div className="mt-8">
            <Link href="/" className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
