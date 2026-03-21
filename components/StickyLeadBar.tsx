"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

const messages: Record<string, { bar: string; title: string; btn: string; close: string; name: string; email: string; country: string; submit: string }> = {
  en: {
    bar: "Contact us for technical information and pricing in your language.",
    title: "Request Quote",
    btn: "Request Quote",
    close: "Close",
    name: "Full Name",
    email: "Email",
    country: "Country",
    submit: "Request Pricing",
  },
  tr: {
    bar: "Kendi dilinizde teknik bilgi ve fiyat için bize ulaşın.",
    title: "Fiyat Talebi",
    btn: "Fiyat Al",
    close: "Kapat",
    name: "Ad Soyad",
    email: "E-posta",
    country: "Ülke",
    submit: "Fiyat Talep Et",
  },
  ar: {
    bar: "تواصل معنا للحصول على المعلومات التقنية والأسعار بلغتك.",
    title: "طلب سعر",
    btn: "طلب سعر",
    close: "إغلاق",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    country: "الدولة",
    submit: "طلب التسعير",
  },
  ru: {
    bar: "Свяжитесь с нами для получения технической информации и цен на вашем языке.",
    title: "Запрос цены",
    btn: "Запрос цены",
    close: "Закрыть",
    name: "Полное имя",
    email: "Электронная почта",
    country: "Страна",
    submit: "Запросить цену",
  },
};

export default function StickyLeadBar() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = messages[locale] ?? messages.en;

  return (
    <>
      {/* BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-main flex items-center justify-between py-3">
          <p className="text-sm font-medium text-slate-700">{t.bar}</p>
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {t.btn}
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <h3 className="text-xl font-bold text-slate-950">{t.title}</h3>

            <form
              action="https://formspree.io/f/mwvralbn"
              method="POST"
              className="mt-4 space-y-3"
            >
              <input name="name"    type="text"  placeholder={t.name}    className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-slate-400" />
              <input name="email"   type="email" placeholder={t.email}   className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-slate-400" />
              <input name="country" type="text"  placeholder={t.country} className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-slate-400" />
              <input type="hidden"  name="source" value="sticky-bar" />
              <input type="hidden"  name="lang"   value={locale} />
              <button type="submit" className="w-full rounded-xl bg-slate-950 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                {t.submit}
              </button>
            </form>

            <button onClick={() => setOpen(false)} className="mt-3 text-sm text-slate-500 hover:text-slate-800">
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
