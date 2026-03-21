"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const flags: Record<string, string> = {
  en: "🇬🇧",
  tr: "🇹🇷",
  ar: "🇸🇦",
  ru: "🇷🇺",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("lang_switcher");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const locales = ["en", "tr", "ar", "ru"] as const;

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    // Replace current locale prefix in pathname
    const segments = pathname.split("/");
    const currentLocales = ["en", "tr", "ar", "ru"];

    if (currentLocales.includes(segments[1])) {
      segments[1] = newLocale === "en" ? "" : newLocale;
    } else {
      segments.splice(1, 0, newLocale === "en" ? "" : newLocale);
    }

    const newPath = segments.filter(Boolean).join("/") || "/";
    router.push(newLocale === "en" ? `/${newPath}` : `/${newLocale}/${newPath.replace(/^\//, "")}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        aria-label="Switch language"
      >
        <span>{flags[locale]}</span>
        <span className="hidden sm:inline">{t(locale as any)}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 top-full z-50 mt-1.5 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition hover:bg-slate-50 ${
                  l === locale ? "font-semibold text-slate-950 bg-slate-50" : "text-slate-700"
                }`}
              >
                <span>{flags[l]}</span>
                <span>{t(l as any)}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
