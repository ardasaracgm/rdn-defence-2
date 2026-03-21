import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "ar", "ru"],
  defaultLocale: "en",
  localePrefix: "as-needed", // /en is omitted, /tr /ar /ru shown
});
