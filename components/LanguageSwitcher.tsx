"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const flags: Record<string, string> = {
  en: "🇬🇧",
  tr: "🇹🇷",
  ar: "🇸🇦",
  ru: "🇷🇺",
};

const locales = ["en", "tr", "ar", "ru"] as const;
type Locale = (typeof locales)[number];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("lang_switcher");
  const [open, setOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    setOpen(false);
    if (newLocale === locale) return;

    // Save preference in cookie so next-intl won't override with browser language
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    const path = window.location.pathname;
    let cleanPath = path;

    // Strip existing locale prefix
    for (const l of locales) {
      if (path === `/${l}`) { cleanPath = "/"; break; }
      if (path.startsWith(`/${l}/`)) { cleanPath = path.slice(l.length + 1); break; }
    }

    const newPath = newLocale === "en"
      ? cleanPath || "/"
      : `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;

    window.location.href = newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        aria-label="Switch language"
      >
        <span>{flags[locale]}</span>
        <span className="hidden sm:inline">{t(locale as Locale)}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-1.5 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition hover:bg-slate-50 ${
                  l === locale ? "bg-slate-50 font-semibold text-slate-950" : "text-slate-700"
                }`}
              >
                <span>{flags[l]}</span>
                <span>{t(l)}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
