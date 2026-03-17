import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">
            DEFENCE<span className="text-blue-700">TECH</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Advanced defense, electronic warfare, UAV, AI security, and secure communication solutions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Navigation
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <Link className="block hover:text-slate-950" href="/">Home</Link>
            <Link className="block hover:text-slate-950" href="/about">About</Link>
            <Link className="block hover:text-slate-950" href="/products">Products</Link>
            <Link className="block hover:text-slate-950" href="/solutions">Solutions</Link>
            <Link className="block hover:text-slate-950" href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Focus Areas
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>Electronic Warfare</p>
            <p>UAV Systems</p>
            <p>AI Security</p>
            <p>Secure Communication</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>Ankara, Türkiye</p>
            <p>info@yourcompany.com</p>
            <p>+90 5xx xxx xx xx</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-main py-5 text-sm text-slate-500">
          © 2026 DefenceTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
