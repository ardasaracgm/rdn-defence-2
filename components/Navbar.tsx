import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-slate-950">
          DEFENCE<span className="text-blue-700">TECH</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
