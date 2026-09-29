import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/inter";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: {
    default: "RDNSoft | Custom Software & Technology Consulting",
    template: "%s | RDNSoft",
  },
  description:
    "RDNSoft develops custom software, AI and computer vision applications, data and signal technologies, system integrations and technology consulting solutions.",
  metadataBase: new URL("https://www.rdnsoft.com"),
  openGraph: {
    title: "RDNSoft | Custom Software & Technology Consulting",
    description: "Custom software. Intelligent systems. Practical solutions.",
    url: "https://www.rdnsoft.com",
    siteName: "RDNSoft",
    type: "website",
  },
};

const services = [
  { label: "Software Development", href: "/software-development" },
  { label: "AI & Computer Vision", href: "/ai-computer-vision" },
  { label: "Data & Signal Technologies", href: "/data-signal-technologies" },
  { label: "System Integration", href: "/system-integration" },
  { label: "Technology Consulting", href: "/technology-consulting" },
];

const nav = [
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link className="brand" href="/" aria-label="RDNSoft Home">
              <span className="brand-mark">RDN</span>
              <span>SOFT</span>
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              <Link href="/#services">Services</Link>
              {nav.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </nav>
            <Link className="nav-cta" href="/contact">Talk to Us <span>↗</span></Link>
            <MobileNav items={nav} services={services} />
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Link className="brand inverse" href="/">
                <span className="brand-mark">RDN</span><span>SOFT</span>
              </Link>
              <p>
                Custom software development, artificial intelligence, system
                integration and technology consulting.
              </p>
            </div>

            <div>
              <h4>Services</h4>
              {services.map((s) => (
                <Link href={s.href} key={s.href}>{s.label}</Link>
              ))}
            </div>

            <div>
              <h4>Company</h4>
              <Link href="/industries">Industries</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <h4>Contact</h4>
              <p>Kızılırmak Mah.<br />Dumlupınar Bulvarı No:9A<br />YDA Center D:158<br />Çankaya / Ankara, Türkiye</p>
              <a href="tel:+905364461135">+90 536 446 11 35</a>
              <a href="mailto:info@rdnsoft.com">info@rdnsoft.com</a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} RDNSoft. All rights reserved.</span>
            <span>Software · AI · Integration · Consulting</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
