export default function ThankYouPage() {
  return (
    <main className="container-main section-space text-center">
      <h1 className="text-4xl font-bold text-slate-950">
        Thank You
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Your request has been received. Our team will contact you shortly.
      </p>

      <a
        href="/"
        className="mt-8 inline-block rounded-xl bg-slate-950 px-6 py-3 text-white"
      >
        Back to Home
      </a>
    </main>
  );
}
