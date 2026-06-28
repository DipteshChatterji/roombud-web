# RoomBud Web

Public web app for RoomBud legal pages, marketing (future), and admin portal (future).

**Stack:** Vite · React · TypeScript · React Router · react-markdown · Cloudflare Pages

## Routes

| Path | Page |
|------|------|
| `/` | Legal & policy index |
| `/terms` | Terms and conditions index |
| `/privacy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/community-guidelines` | Community Guidelines |
| `/content-moderation` | Content Moderation Policy |
| `/data-deletion` | Data Deletion Policy |
| `/safety` | Safety Policy |

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Sync legal content from backend

Markdown lives in `content/`. To refresh from `Roombud_Backend_mobile-main`:

```bash
npm run sync:legal
```

Sources:

- `Doc/PRIVACY_POLICY.md`
- `src/main/resources/legal/*.md`

## Build

```bash
npm run build
npm run preview
```

Output: `dist/`

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git.
3. Build settings:

| Setting | Value |
|---------|-------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

4. Add custom domain (e.g. `legal.roombud.app` or `roombud.app`).
5. SPA routing is handled by `public/_redirects`.

### Optional: admin subdomain later

Use the same Pages project. Point `admin.roombud.app` to it and add admin routes under `src/features/admin/` when ready.

## Project structure

```
content/                 # Legal markdown (synced from backend)
public/                  # Static assets + Cloudflare _redirects
scripts/sync-legal.mjs   # Copy legal MD from backend repo
src/
  app/                   # Router and app shell
  features/
    legal/               # Public legal pages (current)
    admin/               # Admin portal placeholder (future)
  shared/components/     # Layout, markdown renderer
  styles/
```

## Related repos

- `Roombud_Backend_mobile-main` — Spring Boot API (`/api/legal/*` for mobile app)
- `Roombud_frontend_mobile` — React Native app
