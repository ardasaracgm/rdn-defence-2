"use client";

import { useMemo, useState } from "react";
import {
  Check, Copy, Globe, Mail, Phone, Shield,
  Landmark, Building2, FileText, Lock, ArrowRight, RefreshCw,
} from "lucide-react";

const translations = {
  en: {
    step1Title: "Corporate Access",
    step1Desc: "Enter your corporate email address. Free email providers (Gmail, Hotmail, Yahoo, etc.) are not accepted.",
    step1Placeholder: "you@yourcompany.com",
    step1Button: "Send Access Code",
    step1FreeEmail: "Please use a corporate email address. Free providers are not accepted.",
    step1InvalidEmail: "Please enter a valid email address.",
    step1Error: "Failed to send code. Please try again.",
    step2Title: "Enter Verification Code",
    step2Desc: "A 6-digit code has been sent to",
    step2Placeholder: "000000",
    step2Button: "Verify & Access",
    step2Wrong: "Incorrect code. Please check your email and try again.",
    step2Error: "Verification failed. Please try again.",
    step2Resend: "Resend code",
    loading: "Sending...",
    verifying: "Verifying...",
    badge: "Verified Corporate Information",
    subtitle: "Corporate Information, Contact Details, and Bank Accounts",
    subDesc: "Designed for fast verification, clean copying, and reliable sharing with banks, partners, and international customers.",
    website: "Website", email: "E-mail",
    companySection: "Company Information", companySectionDesc: "Official corporate and legal details",
    contactSection: "Contact Details", contactSectionDesc: "Direct contact for verification and commercial communication",
    bankSection: "Bank Accounts", bankSectionDesc: "Each account can be copied individually. IBAN buttons copy a space-free value.",
    actionsSection: "Quick Actions", actionsSectionDesc: "Fast actions for international communication",
    legalName: "Legal Name", address: "Address", taxOffice: "Tax Office", taxNumber: "Tax Number",
    tradeRegister: "Trade Register", mersis: "MERSIS", generalManager: "General Manager", swiftAccountName: "Swift Account Name",
    phone: "Phone", fax: "Fax", branchCode: "Branch Code", branchName: "Branch Name", swift: "SWIFT",
    active: "Active", corporate: "Corporate banking details",
    sendEmail: "Send E-mail", sendEmailDesc: "Commercial contact",
    callNow: "Call Now", callNowDesc: "Direct line",
    openWebsite: "Open Website", openWebsiteDesc: "Corporate site",
    copy: "Copy", copied: "Copied",
  },
  tr: {
    step1Title: "Kurumsal Erişim",
    step1Desc: "Kurumsal e-posta adresinizi girin. Gmail, Hotmail, Yahoo gibi ücretsiz sağlayıcılar kabul edilmez.",
    step1Placeholder: "siz@sirketiniz.com",
    step1Button: "Erişim Kodu Gönder",
    step1FreeEmail: "Lütfen kurumsal e-posta kullanın. Ücretsiz sağlayıcılar kabul edilmemektedir.",
    step1InvalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    step1Error: "Kod gönderilemedi. Lütfen tekrar deneyin.",
    step2Title: "Doğrulama Kodunu Girin",
    step2Desc: "6 haneli kod şu adrese gönderildi:",
    step2Placeholder: "000000",
    step2Button: "Doğrula ve Eriş",
    step2Wrong: "Hatalı kod. Lütfen e-postanızı kontrol edin.",
    step2Error: "Doğrulama başarısız. Lütfen tekrar deneyin.",
    step2Resend: "Kodu tekrar gönder",
    loading: "Gönderiliyor...", verifying: "Doğrulanıyor...",
    badge: "Doğrulanmış Kurumsal Bilgiler",
    subtitle: "Kurumsal Bilgiler, İletişim Detayları ve Banka Hesapları",
    subDesc: "Bankalar, iş ortakları ve uluslararası müşterilerle hızlı doğrulama ve paylaşım için tasarlanmıştır.",
    website: "Web Sitesi", email: "E-posta",
    companySection: "Şirket Bilgileri", companySectionDesc: "Resmi kurumsal ve yasal bilgiler",
    contactSection: "İletişim Bilgileri", contactSectionDesc: "Doğrulama ve ticari iletişim için doğrudan iletişim",
    bankSection: "Banka Hesapları", bankSectionDesc: "Her hesap ayrı ayrı kopyalanabilir. IBAN butonları boşluksuz değer kopyalar.",
    actionsSection: "Hızlı İşlemler", actionsSectionDesc: "Uluslararası iletişim için hızlı eylemler",
    legalName: "Ticaret Unvanı", address: "Adres", taxOffice: "Vergi Dairesi", taxNumber: "Vergi Numarası",
    tradeRegister: "Ticaret Sicil No", mersis: "MERSİS No", generalManager: "Genel Müdür", swiftAccountName: "Swift Hesap Adı",
    phone: "Telefon", fax: "Faks", branchCode: "Şube Kodu", branchName: "Şube Adı", swift: "SWIFT",
    active: "Aktif", corporate: "Kurumsal bankacılık bilgileri",
    sendEmail: "E-posta Gönder", sendEmailDesc: "Ticari iletişim",
    callNow: "Hemen Ara", callNowDesc: "Direkt hat",
    openWebsite: "Web Sitesini Aç", openWebsiteDesc: "Kurumsal site",
    copy: "Kopyala", copied: "Kopyalandı",
  },
  ar: {
    step1Title: "وصول مؤسسي",
    step1Desc: "أدخل عنوان بريدك الإلكتروني المؤسسي. لا تُقبل مزودات البريد المجانية كـ Gmail وHotmail وYahoo.",
    step1Placeholder: "you@yourcompany.com",
    step1Button: "إرسال رمز الوصول",
    step1FreeEmail: "يرجى استخدام بريد إلكتروني مؤسسي. لا تُقبل المزودات المجانية.",
    step1InvalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
    step1Error: "فشل إرسال الرمز. يرجى المحاولة مرة أخرى.",
    step2Title: "أدخل رمز التحقق",
    step2Desc: "تم إرسال رمز مكون من 6 أرقام إلى",
    step2Placeholder: "000000",
    step2Button: "تحقق والوصول",
    step2Wrong: "رمز غير صحيح. يرجى التحقق من بريدك الإلكتروني.",
    step2Error: "فشل التحقق. يرجى المحاولة مرة أخرى.",
    step2Resend: "إعادة إرسال الرمز",
    loading: "جارٍ الإرسال...", verifying: "جارٍ التحقق...",
    badge: "معلومات مؤسسية موثقة",
    subtitle: "المعلومات المؤسسية وتفاصيل الاتصال والحسابات المصرفية",
    subDesc: "صُممت هذه الصفحة للتحقق السريع والمشاركة الموثوقة مع البنوك والشركاء.",
    website: "الموقع الإلكتروني", email: "البريد الإلكتروني",
    companySection: "معلومات الشركة", companySectionDesc: "التفاصيل المؤسسية والقانونية الرسمية",
    contactSection: "تفاصيل الاتصال", contactSectionDesc: "اتصال مباشر للتحقق والتواصل التجاري",
    bankSection: "الحسابات المصرفية", bankSectionDesc: "يمكن نسخ كل حساب بشكل منفصل.",
    actionsSection: "الإجراءات السريعة", actionsSectionDesc: "إجراءات سريعة للتواصل الدولي",
    legalName: "الاسم القانوني", address: "العنوان", taxOffice: "مكتب الضرائب", taxNumber: "الرقم الضريبي",
    tradeRegister: "سجل التجارة", mersis: "رقم MERSIS", generalManager: "المدير العام", swiftAccountName: "اسم حساب Swift",
    phone: "الهاتف", fax: "الفاكس", branchCode: "رمز الفرع", branchName: "اسم الفرع", swift: "SWIFT",
    active: "نشط", corporate: "تفاصيل الخدمات المصرفية للشركات",
    sendEmail: "إرسال بريد إلكتروني", sendEmailDesc: "التواصل التجاري",
    callNow: "اتصل الآن", callNowDesc: "الخط المباشر",
    openWebsite: "فتح الموقع", openWebsiteDesc: "الموقع المؤسسي",
    copy: "نسخ", copied: "تم النسخ",
  },
  ru: {
    step1Title: "Корпоративный доступ",
    step1Desc: "Введите корпоративный адрес. Бесплатные провайдеры (Gmail, Hotmail, Yahoo и др.) не принимаются.",
    step1Placeholder: "вы@вашакомпания.com",
    step1Button: "Отправить код доступа",
    step1FreeEmail: "Пожалуйста, используйте корпоративный адрес. Бесплатные провайдеры не принимаются.",
    step1InvalidEmail: "Пожалуйста, введите корректный адрес электронной почты.",
    step1Error: "Не удалось отправить код. Попробуйте ещё раз.",
    step2Title: "Введите код подтверждения",
    step2Desc: "Код из 6 цифр отправлен на адрес",
    step2Placeholder: "000000",
    step2Button: "Подтвердить и войти",
    step2Wrong: "Неверный код. Проверьте электронную почту.",
    step2Error: "Ошибка проверки. Попробуйте ещё раз.",
    step2Resend: "Отправить код повторно",
    loading: "Отправка...", verifying: "Проверка...",
    badge: "Подтверждённая корпоративная информация",
    subtitle: "Корпоративная информация, контактные данные и банковские счета",
    subDesc: "Предназначена для быстрой верификации и надёжного обмена с банками и партнёрами.",
    website: "Веб-сайт", email: "Эл. почта",
    companySection: "Информация о компании", companySectionDesc: "Официальные корпоративные и юридические данные",
    contactSection: "Контактные данные", contactSectionDesc: "Прямой контакт для верификации и коммерческой коммуникации",
    bankSection: "Банковские счета", bankSectionDesc: "Каждый счёт можно скопировать отдельно.",
    actionsSection: "Быстрые действия", actionsSectionDesc: "Быстрые действия для международного общения",
    legalName: "Юридическое название", address: "Адрес", taxOffice: "Налоговая инспекция", taxNumber: "ИНН",
    tradeRegister: "Торговый реестр", mersis: "MERSIS", generalManager: "Генеральный директор", swiftAccountName: "Название счёта Swift",
    phone: "Телефон", fax: "Факс", branchCode: "Код отделения", branchName: "Название отделения", swift: "SWIFT",
    active: "Активен", corporate: "Корпоративные банковские реквизиты",
    sendEmail: "Отправить письмо", sendEmailDesc: "Коммерческий контакт",
    callNow: "Позвонить", callNowDesc: "Прямая линия",
    openWebsite: "Открыть сайт", openWebsiteDesc: "Корпоративный сайт",
    copy: "Копировать", copied: "Скопировано",
  },
} as const;

type Lang = keyof typeof translations;
type T = typeof translations.en;

const companyInfo = {
  title: "RDN Technology",
  legalName: "RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi",
  tagline: "Advanced Defense Systems",
  address: "Kızılırmak Mah. Dumlupınar Bulvarı No:9A YDA Center Daire:158 Çankaya / Ankara Türkiye",
  taxOffice: "Çankaya Vergi Dairesi",
  taxNumber: "7342274416",
  tradeRegisterNumber: "465313",
  mersisNumber: "0734227441600001",
  generalManager: "Arda Saraç",
  phone: "+90 536 446 11 35",
  fax: "+90 302 302 48 15",
  email: "info@rdnsoft.com",
  website: "https://www.rdnsoft.com",
  swiftAccountName: "RDN DANISMANLIK YAZILIM TURIZM GIDA SAN.VE DIS TIC",
};

type BankAccount = { bank: string; branchCode: string; branchName: string; swift: string; accounts: Array<{ currency: string; iban: string }>; };

const bankAccounts: BankAccount[] = [
  { bank: "Yapı Kredi", branchCode: "561", branchName: "Ankara / Çukurambar Şubesi", swift: "YAPITRISXXX",
    accounts: [{ currency: "TL", iban: "TR14 0006 7010 0000 0078 9695 83" },{ currency: "EUR", iban: "TR49 0006 7010 0000 0078 9633 27" },{ currency: "USD", iban: "TR41 0006 7010 0000 0078 8693 81" },{ currency: "GBP", iban: "TR20 0006 7010 0000 0078 9032 24" }] },
  { bank: "Halkbank", branchCode: "1369", branchName: "İzmir / Ayrancılar Şubesi", swift: "TRHBTR2AXXX",
    accounts: [{ currency: "TL", iban: "TR24 0001 2001 3690 0010 1014 83" },{ currency: "EUR", iban: "TR60 0001 2001 3690 0058 1004 12" },{ currency: "USD", iban: "TR07 0001 2001 3690 0053 1004 34" }] },
  { bank: "Emlak Katılım", branchCode: "2", branchName: "Ankara Şubesi", swift: "EMLATRISXXX",
    accounts: [{ currency: "TL", iban: "TR15 0021 1000 0006 4352 2000 01" },{ currency: "EUR", iban: "TR04 0021 1000 0006 4352 2001 02" },{ currency: "USD", iban: "TR31 0021 1000 0006 4352 2001 01" },{ currency: "RUB", iban: "TR47 0021 1000 0006 4352 2001 04" }] },
  { bank: "ICBC Turkey", branchCode: "40", branchName: "Ankara / Söğütözü Şubesi", swift: "ICBKTRIS",
    accounts: [{ currency: "TL", iban: "TR45 0010 9000 4000 9234 6200 01" },{ currency: "EUR", iban: "TR88 0010 9000 4000 9234 6200 03" },{ currency: "USD", iban: "TR18 0010 9000 4000 9234 6200 02" },{ currency: "CNY", iban: "TR34 0010 9000 4000 9234 6200 05" }] },
];

function normalizeCopy(v: string) { return v.replace(/\s+/g, "").trim(); }
function isValidEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
const langLabels: Record<Lang, string> = { en: "EN", tr: "TR", ar: "AR", ru: "RU" };

function CopyButton({ value, t }: { value: string; t: T }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  return (
    <button onClick={handleCopy} type="button" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:border-[#cc1111]/60 hover:bg-[#cc1111]/10">
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? t.copied : t.copy}
    </button>
  );
}

function InfoRow({ label, value, copyValue, mono, href, t }: { label: string; value: string; copyValue?: string; mono?: boolean; href?: string; t: T }) {
  const content = href
    ? <a href={href} className="break-words text-zinc-100 transition hover:text-white hover:underline">{value}</a>
    : <span className={`break-words text-zinc-100 ${mono ? "font-mono text-sm tracking-wide" : ""}`}>{value}</span>;
  return (
    <div className="grid gap-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4 md:grid-cols-[220px_1fr_auto] md:items-center">
      <div className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">{label}</div>
      <div>{content}</div>
      {copyValue ? <CopyButton value={copyValue} t={t} /> : <div />}
    </div>
  );
}

function SectionCard({ icon, title, description, children }: { icon: React.ReactNode; title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-2xl border border-[#cc1111]/30 bg-[#cc1111]/10 p-3 text-[#ff4d4d]">{icon}</div>
        <div><h2 className="text-xl font-semibold tracking-wide text-white md:text-2xl">{title}</h2>{description && <p className="mt-1 text-sm text-zinc-400">{description}</p>}</div>
      </div>
      {children}
    </section>
  );
}

function BankCard({ bank, t }: { bank: BankAccount; t: T }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5 md:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div><h3 className="text-xl font-semibold text-white">{bank.bank}</h3><p className="mt-1 text-sm text-zinc-400">{t.corporate}</p></div>
        <div className="rounded-full border border-[#cc1111]/30 bg-[#cc1111]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#ff6666]">{t.active}</div>
      </div>
      <div className="space-y-3">
        <InfoRow label={t.branchCode} value={bank.branchCode} copyValue={bank.branchCode} mono t={t} />
        <InfoRow label={t.branchName} value={bank.branchName} copyValue={bank.branchName} t={t} />
        <InfoRow label={t.swift} value={bank.swift} copyValue={bank.swift} mono t={t} />
        {bank.accounts.map((acc) => <InfoRow key={acc.currency} label={`${acc.currency} IBAN`} value={acc.iban} copyValue={normalizeCopy(acc.iban)} mono t={t} />)}
      </div>
    </div>
  );
}

function LangBar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {(Object.keys(langLabels) as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} type="button"
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${lang === l ? "bg-[#cc1111] text-white" : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"}`}>
          {langLabels[l]}
        </button>
      ))}
    </div>
  );
}

function GateBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#09090e] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,17,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(204,17,17,0.12),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
      <div className="relative w-full max-w-md">{children}</div>
    </div>
  );
}

function Step1({ onNext, t, lang, setLang }: { onNext: (email: string) => void; t: T; lang: Lang; setLang: (l: Lang) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) { setError(t.step1InvalidEmail); return; }
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/company/send-code", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await res.json();
      if (data.error === "free_email") { setError(t.step1FreeEmail); setLoading(false); return; }
      if (!res.ok) { setError(t.step1Error); setLoading(false); return; }
      onNext(email);
    } catch { setError(t.step1Error); }
    setLoading(false);
  };

  return (
    <GateBg>
      <LangBar lang={lang} setLang={setLang} />
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 rounded-2xl border border-[#cc1111]/30 bg-[#cc1111]/10 p-4 text-[#ff4d4d]"><Lock className="h-8 w-8" /></div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#cc1111]/30 bg-[#cc1111]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#ff6b6b]">
            <Shield className="h-3.5 w-3.5" /> RDN Technology
          </div>
          <h1 className="text-2xl font-semibold text-white">{t.step1Title}</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{t.step1Desc}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(null); }} placeholder={t.step1Placeholder}
              className={`w-full rounded-2xl border ${error ? "border-[#cc1111]/60" : "border-white/10"} bg-black/30 px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-[#cc1111]/50`}
              autoFocus disabled={loading} />
            {error && <p className="mt-2 text-xs text-[#ff5a5a]">{error}</p>}
          </div>
          <button type="submit" disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#cc1111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#aa0d0d] active:scale-[0.98] disabled:opacity-60">
            {loading ? <><RefreshCw className="h-4 w-4 animate-spin" />{t.loading}</> : <>{t.step1Button}<ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </GateBg>
  );
}

function Step2({ email, onSuccess, onBack, t, lang, setLang }: { email: string; onSuccess: () => void; onBack: () => void; t: T; lang: Lang; setLang: (l: Lang) => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) { setError(t.step2Wrong); return; }
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/company/verify-code", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, code }) });
      const data = await res.json();
      if (data.valid) { onSuccess(); } else { setError(t.step2Wrong); }
    } catch { setError(t.step2Error); }
    setLoading(false);
  };

  const handleResend = async () => {
    setResending(true);
    await fetch("/api/company/send-code", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    setResending(false);
  };

  return (
    <GateBg>
      <LangBar lang={lang} setLang={setLang} />
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 rounded-2xl border border-[#cc1111]/30 bg-[#cc1111]/10 p-4 text-[#ff4d4d]"><Mail className="h-8 w-8" /></div>
          <h1 className="text-2xl font-semibold text-white">{t.step2Title}</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{t.step2Desc} <span className="font-medium text-white">{email}</span></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" value={code} onChange={(e) => { setCode(e.target.value.replace(/\D/g, "").slice(0, 6)); setError(null); }}
              placeholder={t.step2Placeholder} maxLength={6}
              className={`w-full rounded-2xl border ${error ? "border-[#cc1111]/60" : "border-white/10"} bg-black/30 px-5 py-4 text-center text-3xl font-mono tracking-[0.5em] text-white placeholder:text-zinc-600 outline-none transition focus:border-[#cc1111]/50`}
              autoFocus disabled={loading} />
            {error && <p className="mt-2 text-xs text-[#ff5a5a]">{error}</p>}
          </div>
          <button type="submit" disabled={loading || code.length !== 6}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#cc1111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#aa0d0d] active:scale-[0.98] disabled:opacity-60">
            {loading ? <><RefreshCw className="h-4 w-4 animate-spin" />{t.verifying}</> : <>{t.step2Button}<Check className="h-4 w-4" /></>}
          </button>
          <div className="flex items-center justify-between pt-1">
            <button type="button" onClick={onBack} className="text-xs text-zinc-500 hover:text-zinc-300 transition">← Back</button>
            <button type="button" onClick={handleResend} disabled={resending} className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition disabled:opacity-50">
              {resending && <RefreshCw className="h-3 w-3 animate-spin" />}{t.step2Resend}
            </button>
          </div>
        </form>
      </div>
    </GateBg>
  );
}

export default function RdnCompanyCard() {
  const [step, setStep] = useState<"email" | "code" | "unlocked">("email");
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];
  const isRTL = lang === "ar";

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org", "@type": "Organization",
    name: companyInfo.title, legalName: companyInfo.legalName,
    url: companyInfo.website, email: companyInfo.email, telephone: companyInfo.phone,
    address: { "@type": "PostalAddress", streetAddress: companyInfo.address, addressLocality: "Ankara", addressCountry: "TR" },
  }), []);

  if (step === "email") return <Step1 onNext={(e) => { setEmail(e); setStep("code"); }} t={t} lang={lang} setLang={setLang} />;
  if (step === "code") return <Step2 email={email} onSuccess={() => setStep("unlocked")} onBack={() => setStep("email")} t={t} lang={lang} setLang={setLang} />;

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#09090e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,17,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(204,17,17,0.12),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-6 flex justify-end gap-2">
          {(Object.keys(langLabels) as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l as Lang)} type="button"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${lang === l ? "bg-[#cc1111] text-white" : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"}`}>
              {langLabels[l as Lang]}
            </button>
          ))}
        </div>
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
          <div className="border-b border-white/10 px-6 py-10 md:px-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cc1111]/30 bg-[#cc1111]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#ff6b6b]">
                  <Shield className="h-4 w-4" />{t.badge}
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">{companyInfo.title}</h1>
                <p className="mt-4 text-xl text-zinc-200 md:text-2xl">{companyInfo.tagline}</p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">{t.subtitle}. {t.subDesc}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">{t.website}</div>
                  <a href={companyInfo.website} className="mt-2 block text-lg font-medium text-white hover:text-zinc-200">www.rdnsoft.com</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">{t.email}</div>
                  <a href={`mailto:${companyInfo.email}`} className="mt-2 block text-lg font-medium text-white hover:text-zinc-200">{companyInfo.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 px-6 py-6 md:px-10 md:py-10">
            <SectionCard icon={<Building2 className="h-6 w-6" />} title={t.companySection} description={t.companySectionDesc}>
              <div className="grid gap-3">
                <InfoRow label={t.legalName} value={companyInfo.legalName} copyValue={companyInfo.legalName} t={t} />
                <InfoRow label={t.address} value={companyInfo.address} copyValue={companyInfo.address} t={t} />
                <InfoRow label={t.taxOffice} value={companyInfo.taxOffice} copyValue={companyInfo.taxOffice} t={t} />
                <InfoRow label={t.taxNumber} value={companyInfo.taxNumber} copyValue={companyInfo.taxNumber} mono t={t} />
                <InfoRow label={t.tradeRegister} value={companyInfo.tradeRegisterNumber} copyValue={companyInfo.tradeRegisterNumber} mono t={t} />
                <InfoRow label={t.mersis} value={companyInfo.mersisNumber} copyValue={companyInfo.mersisNumber} mono t={t} />
                <InfoRow label={t.generalManager} value={companyInfo.generalManager} copyValue={companyInfo.generalManager} t={t} />
                <InfoRow label={t.swiftAccountName} value={companyInfo.swiftAccountName} copyValue={companyInfo.swiftAccountName} t={t} />
              </div>
            </SectionCard>
            <SectionCard icon={<FileText className="h-6 w-6" />} title={t.contactSection} description={t.contactSectionDesc}>
              <div className="grid gap-3">
                <InfoRow label={t.phone} value={companyInfo.phone} copyValue={companyInfo.phone} href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} t={t} />
                <InfoRow label={t.fax} value={companyInfo.fax} copyValue={companyInfo.fax} mono t={t} />
                <InfoRow label={t.email} value={companyInfo.email} copyValue={companyInfo.email} href={`mailto:${companyInfo.email}`} t={t} />
                <InfoRow label={t.website} value="www.rdnsoft.com" copyValue={companyInfo.website} href={companyInfo.website} t={t} />
              </div>
            </SectionCard>
            <SectionCard icon={<Landmark className="h-6 w-6" />} title={t.bankSection} description={t.bankSectionDesc}>
              <div className="grid gap-5 xl:grid-cols-2">
                {bankAccounts.map((bank) => <BankCard key={bank.bank} bank={bank} t={t} />)}
              </div>
            </SectionCard>
            <SectionCard icon={<Globe className="h-6 w-6" />} title={t.actionsSection} description={t.actionsSectionDesc}>
              <div className="grid gap-4 md:grid-cols-3">
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#cc1111]/40 hover:bg-[#cc1111]/10">
                  <Mail className="h-5 w-5 text-[#ff5a5a]" /><div><div className="font-medium text-white">{t.sendEmail}</div><div className="text-sm text-zinc-400">{t.sendEmailDesc}</div></div>
                </a>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#cc1111]/40 hover:bg-[#cc1111]/10">
                  <Phone className="h-5 w-5 text-[#ff5a5a]" /><div><div className="font-medium text-white">{t.callNow}</div><div className="text-sm text-zinc-400">{t.callNowDesc}</div></div>
                </a>
                <a href={companyInfo.website} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#cc1111]/40 hover:bg-[#cc1111]/10">
                  <Globe className="h-5 w-5 text-[#ff5a5a]" /><div><div className="font-medium text-white">{t.openWebsite}</div><div className="text-sm text-zinc-400">{t.openWebsiteDesc}</div></div>
                </a>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
