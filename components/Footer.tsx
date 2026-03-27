import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">

        <div>
          <Image
            src="/rdn-logo.png"
            alt="RDN Technology"
            width={140}
            height={42}
            className="h-9 w-auto object-contain"
          />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {t("desc")}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Vergi No: 7342274416 · Ticaret Sicil: 465313
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            {t("navigation")}
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <Link className="block hover:text-slate-950" href="/">{nav("home")}</Link>
            <Link className="block hover:text-slate-950" href="/about">{nav("about")}</Link>
            <Link className="block hover:text-slate-950" href="/products">{nav("products")}</Link>
            <Link className="block hover:text-slate-950" href="/solutions">{nav("solutions")}</Link>
            <Link className="block hover:text-slate-950" href="/blog">{nav("blog")}</Link>
            <Link className="block hover:text-slate-950" href="/contact">{nav("contact")}</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            {t("capabilities")}
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>Electronic Warfare</p>
            <p>Drone Systems</p>
            <p>Detection Systems</p>
            <p>AI Security</p>
            <p>Secure Communication</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            {t("contact")}
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p className="leading-6">
              Kızılırmak Mah. Dumlupınar Bulvarı No:9A<br />
              YDA Center D:158 Çankaya / Ankara<br />
              Türkiye
            </p>
            <a href="tel:+905364461135" className="block hover:text-slate-950">+90 536 446 11 35</a>
            <a href="mailto:info@rdnsoft.com" className="block hover:text-slate-950">info@rdnsoft.com</a>
            <a href="https://www.rdnsoft.com" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-950">
              www.rdnsoft.com
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-200">
        <div className="container-main flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-slate-500">
          <span>© 2025 RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi. {t("rights")}</span>
          <span>Mersis: 0734227441600001</span>
        </div>
      </div>
    </footer>
  );
}
