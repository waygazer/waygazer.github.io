# Powai Lake Rejuvenation Forum

The single-page website for the Powai Lake Rejuvenation Forum, a citizen scientists' initiative supporting science-based restoration of Powai Lake, Mumbai.

- Primary website: https://powailake.in
- GitHub Pages mirror: https://clubtchief.github.io/waygazer.github.io/

## Local development

Requires Node.js 22 or later.

```sh
npm ci
cp .env.example .env
npm run dev
```

Fill `.env` with the public browser configuration for the backend. Never commit `.env` or any Razorpay secret key.

## Production build

```sh
npm ci
npm run build
```

For the GitHub Pages subpath, set `VITE_BASE_PATH=/waygazer.github.io/` when building. The primary domain uses `VITE_BASE_PATH=/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` changes. It uses GitHub Actions as the Pages source and expects these repository variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Razorpay order creation and payment verification remain in the existing backend functions under `supabase/functions/`; private Razorpay keys are stored only in backend secrets.

## Built with Lovable

Continue developing in the [Lovable editor](https://lovable.dev/projects/71e8481a-b233-434e-94f3-ad595eecdaa6).
