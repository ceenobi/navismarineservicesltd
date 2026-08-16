# Navis Marine Services Ltd

[![License: All Rights Reserved](https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24.x-339933?logo=node.js&logoColor=white)](package.json)
[![React Router](https://img.shields.io/badge/React%20Router-8-black)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)](https://navismarineservicesltd.com)
[![CI](https://img.shields.io/github/actions/workflow/status/ceenobi/navismarineservicesltd/ci.yml?label=CI)](https://github.com/ceenobi/navismarineservicesltd/actions)

Official website for **Navis Marine Services Ltd** — Ship Agency, Marine Consultancy, HSSEQ, Marine Procurement and Integrated Maritime Solutions for shipowners, operators, charterers and offshore industries.

Built with [React Router 7+ (Framework Mode)](https://reactrouter.com/), TypeScript, Tailwind CSS 4 and GSAP.

## Features

- 🚀 Server-side rendering with pre-rendered pages (`/`, `/about`, `/contact`)
- ⚡️ Hot Module Replacement (HMR) in development
- 📦 Asset bundling and optimization via Vite
- 📬 Contact form wired to the Brevo (Sendinblue) API
- 🔒 TypeScript by default
- 🎉 Tailwind CSS for styling
- ✨ GSAP animation suite (scroll reveals, split-word headings, count-ups) with reduced-motion support
- 🔍 Full SEO meta, Open Graph, JSON-LD, robots.txt and sitemap

## Getting Started

### Prerequisites

- Node.js 24.x
- Yarn 4 (via Corepack)

### Installation

```bash
yarn install
```

Copy the environment template and fill in the API key:

```bash
cp .env.example .env
```

### Development

Start the development server with HMR:

```bash
yarn dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build (runs React Router type generation, then bundles the app):

```bash
yarn build
```

Run the production server locally:

```bash
yarn start
```

Type-check the codebase:

```bash
yarn typecheck
```

## Environment Variables

| Variable          | Description                                                          |
| ----------------- | ------------------------------------------------------------------- |
| `BREVO_API_KEY`   | Brevo API key used by the contact form action to send notifications. |

## Deployment

### Vercel (primary)

This project is configured for deployment on [Vercel](https://vercel.com) (`vercel.json`):

- Security headers (HSTS, CSP, X-Frame-Options, etc.) applied to every response.
- Immutable caching for `/assets/*`.
- Production domain: **https://navismarineservicesltd.com**

Deploy from the CLI:

```bash
vercel --prod
```

### Docker

To build and run using Docker:

```bash
docker build -t navis .

# Run the container
docker run -p 3000:3000 navis
```

Make sure to deploy the output of `yarn build`:

```
├── package.json
├── yarn.lock
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Git Workflow

- Development happens on the `test` branch; `main` is the default branch.
- Changes are merged to `main` via a pull request after CI (typecheck + build) passes.
- CI runs on GitHub Actions (`.github/workflows/ci.yml`).

## Styling

Tailwind CSS 4 is configured via `@tailwindcss/vite`. Custom theme tokens (fonts, colors) live in `app/app.css`.

## License

All Rights Reserved — © 2026 Navis Marine Services Ltd. This repository is proprietary; see [LICENSE](LICENSE) for full terms. For licensing inquiries, contact info@navismarineservicesltd.com.

## Contributing & Security

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md). All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

Built with ❤️ using React Router.