# Agent Instructions

## Git workflow

- Push changes to the `test` branch (not `main`).
- Create a PR from `test` to `main`.
- Wait for all CI checks to pass.
- Once checks pass, merge the PR to `main`.
- Sync local `main` after merge.

## Documentation

- After completing a feature, update `PROGRESS.md` with a summary of what was done and any relevant context (files changed, decisions made, known issues).
- Update the "Recent Accomplishments" section with bullet points for each notable change.

# React Router 7 Project Guidelines

## Core Conventions
- We use Framework Mode exclusively (do not use legacy `<BrowserRouter>` tags).
- All routes must define and export type-safe `Route.LoaderArgs` and `Route.ActionArgs`.
- Rely on `context.get()` inside loaders and middleware rather than legacy global context structures.
- Use the standard `route.tsx` conventions for naming layouts and route endpoints.

# Project Overview: Navis Marine Services Ltd

Navis Marine Services Ltd delivers premium Ship Agency, Marine Consultancy, HSSEQ, Marine Procurement and Integrated Maritime Solutions to shipowners, operators, charterers and offshore industries—connecting global shipping with trusted local expertise. It utilizes **React Router 7** in framework mode (formerly Remix) to deliver a seamless server-side rendered (SSR) experience with robust data loading and mutation capabilities.

## Core Technologies

- **Frontend Framework:** [React Router 7](https://reactrouter.com/) (Framework Mode)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management & Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Caching & Workflows:** [Upstash Redis](https://upstash.com/redis), [QStash](https://upstash.com/qstash), and [Upstash Workflow](https://upstash.com/workflow)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Media Management:** [Cloudinary](https://cloudinary.com/)

### Development
```bash
# Install dependencies
yarn install

# Start the development server with HMR
yarn dev

```

### Production
```bash
# Build the application for production
yarn build

# Start the production server
yarn start
```

### Type Checking
```bash
# Run React Router type generation and TypeScript compiler
yarn typecheck
```

## Development Conventions

### Coding Style
- **Functional Components:** Use functional components with hooks.
- **Type Safety:** Maintain strict TypeScript typing. Ensure all domain objects have corresponding interfaces in `app/types.d.ts`.
- **Server Actions:** Complex mutation logic should be abstracted into `app/.server/action/*.ts` and called from route `action` functions.
- **Styling:** Follow the existing Tailwind CSS 4 patterns. Use the `cn()` utility for conditional class merging.
- **Icons:** Use `@remixicon/react` for all iconography.

### Data Fetching
- Use **Loaders** for initial page data.
- Use **TanStack Query** for client-side data synchronization and optimistic updates where appropriate.
- Leverage the `fetchWithCache` utility in `.server/utils/cache.ts` to reduce database load.

### Animation
- Utilize the `GSAP` for animations to maintain consistency across pages. You are a senior web developer specializing in animations and I expect yout to make the animations look professional, optimized and consistent in line with world class animation standards that match the project scope.

### Validation
- Always use **Zod** schemas (defined in `app/lib/formSchema.ts`) for both form validation and API payload verification.
- **Mongoose Mocks:** In Vitest mocks, ensure `findById`, `findOne`, etc., are mocked as chainable with `.lean()` if the production code uses it.

### Icons
- **Remixicon (`@remixicon/react`)** components do NOT accept a `title` prop — `RemixiconProps` does not include it. For accessible tooltips on icons, wrap the icon in a `<span title="...">` or use the project's `Tooltip` component instead.
