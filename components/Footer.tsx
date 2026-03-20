import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">

        {/* Brand */}
        <div>
          <Image
            src="/rdn-logo.png"
            alt="RDN Technology"
            width={140}
            height={42}
            className="h-9 w-auto object-contain"
          />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Vergi No: 7342274416 · Ticaret Sicil: 465313
          </p>
        </div>

        {/* Navigation */}
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

        {/* Capabilities */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Capabilities
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>Electronic Warfare</p>
            <p>Drone Systems</p>
            <p>Detection Systems</p>
            <p>AI Security</p>
            <p>Secure Communication</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p className="leading-6">
              Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />
              YDA Center D:158 Çankaya / Ankara<br />
              Türkiye
            </p>
            <a href="tel:+905364461135" className="block hover:text-slate-950">
              +90 536 446 11 35
            </a>
            <a href="mailto:info@rdnsoft.com" className="block hover:text-slate-950">
              info@rdnsoft.com
            </a>
            <a
              href="https://www.rdnsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-slate-950"
            >
              www.rdnsoft.com
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-200">
        <div className="container-main flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-slate-500">
          <span>© 2025 RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi</span>
          <span>Çankaya V.D. · Mersis: 0734227441600001</span>
        </div>
      </div>
    </footer>
  );
}
