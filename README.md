# RDNSoft — Website

English-only corporate site (software development & technology consulting).
Next.js App Router, TypeScript, plain CSS.

## Replacing the old rdn-defence-2 content

Work on a new branch and check the Vercel preview before merging to `main`.

1. Disable the blog workflow first (Actions tab → generate-blog → Disable),
   remove its API key from repo Settings → Secrets, and revoke the key at the provider.
2. Delete from the repo: `app/`, `components/`, `i18n/`, `messages/`, `lib/`, `data/`,
   `scripts/`, `.github/workflows/`, `middleware.ts`, `next.config.ts`,
   `tailwind.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `tsconfig.json`,
   `package.json` (and the old lockfile), `readme.txt`.
   - `middleware.ts` MUST go: it rewrites every request to a locale path and the new pages would 404.
   - `postcss.config.mjs` MUST go: it loads Tailwind, which is no longer installed.
3. Keep: `google0fb1531934eb79c3.html` (move it into `public/`), `vercel.json`,
   `eula-v1.3.0.pdf` if it is linked from anywhere (move it into `public/`).
   From the old `public/`, keep only what the new site uses; archive product images.
4. Copy this package into the repo root, commit, push the branch, check the preview.

## Redirects (next.config.mjs)

- `/en|tr|ar|ru/...` old locale URLs → matching new page or `/`
- `/products`, `/blog`, `/thank-you` → `/`; `/solutions` → `/#services`; `/proposal-generator` → `/contact`
- `/company` → `/` as a TEMPORARY (307) redirect — remove these rules when /company is rebuilt.

If the old site used locales other than en/tr/ar/ru, add them to `OLD_LOCALES`.

## Contact form

Opens the visitor's mail app with a pre-filled message and always shows the
address as a fallback. Planned: API route + email provider (e.g. Resend).

## Other

- Font: Inter, self-hosted via `@fontsource-variable/inter` (no external request).
- `app/icon.svg` is a placeholder favicon; replace with the real logo if available.
- `app/robots.ts`, `app/sitemap.ts`, `public/llms.txt` replace the old versions.
