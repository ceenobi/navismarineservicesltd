# Contributing to Navis Marine Services Ltd

This is the official website of **Navis Marine Services Ltd**. Contributions are welcome from the team and trusted collaborators. Please read and follow these guidelines.

## Development Setup

Prerequisites: Node.js 24.x and Yarn 4 (via Corepack).

```bash
corepack enable
yarn install
yarn dev          # development server with HMR at http://localhost:5173
yarn typecheck    # React Router typegen + TypeScript check
yarn build        # production build
yarn start        # run the production build locally
```

## Git Workflow

We follow a strict `test` → `main` flow (see `AGENTS.md`):

1. **Branch:** Create your work on the `test` branch (or a feature branch based on it).
2. **Commit:** Keep commits focused and write clear messages.
3. **Open a Pull Request** from `test` into `main`.
4. **CI:** All checks must pass — `yarn typecheck` and `yarn build` run on every push/PR.
5. **Merge:** Once CI is green, the PR is merged to `main` and the local `main` is synced.

## Coding Standards

- Use functional components with hooks; strict TypeScript typing.
- Domain objects get interfaces in `app/types.d.ts`.
- Complex server mutations go in `app/.server/action/*.ts`, called from route `action` functions.
- Always use Zod schemas (in `app/lib/formSchema.ts`) for form and API validation.
- Follow existing Tailwind CSS 4 patterns; use `cn()` for conditional classes.
- Use `@remixicon/react` for icons (wrap in `<span title>` for tooltips — RemixIcon components do not accept a `title` prop).
- Use loaders for initial page data, TanStack Query for client-side sync, and the `fetchWithCache` utility to reduce database load.
- Use GSAP for animations, wrapped in reduced-motion handling.

## Before Submitting

- Run `yarn typecheck` and `yarn build` and confirm they pass.
- Verify your changes visually in the browser at mobile and desktop widths.
- After a feature ships, update `PROGRESS.md` (Recent Accomplishments + any known issues).

## Licensing

This project is **All Rights Reserved** — see `LICENSE`. Contributions are accepted on the understanding that you assign rights to Navis Marine Services Ltd and that your work may be used within the terms of the project license.

## Code of Conduct

All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).