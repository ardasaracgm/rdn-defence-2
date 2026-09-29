"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

export default function MobileNav({
  items,
  services,
}: {
  items: NavItem[];
  services: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the menu is open and allow closing with Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`menu-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <div className="container">
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Services</span>
            {services.map((s) => (
              <Link href={s.href} key={s.href} onClick={() => setOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Company</span>
            {items.map((i) => (
              <Link href={i.href} key={i.href} onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}
          </div>
          <Link className="button primary mobile-nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Talk to Us
          </Link>
        </div>
      </nav>
    </>
  );
}
