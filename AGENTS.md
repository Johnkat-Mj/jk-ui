# jk-ui Monorepo

## Structure
- `site/` — Next.js 16 docs site (jk-ui.unoforge.com). Uses Fumadocs, shadcn registry, react-aria-components.
- `kit-ui/devolio/` — Next.js 16 portfolio site.
- `kit-ui/inno-agency/` — Next.js 16 agency site.
- `kit-ui/lms-dashboard/` — **Not Next.js.** TanStack React Start + Vite 8.

No root workspace manager. Each package installs and runs independently.

## Next.js 16 Warning
Next.js 16.x has breaking changes from training data. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.

## Commands

### site/
```bash
bun tools/generate-components.ts      # Generate component pages
bun tools/build-registries.ts        # Build registry JSON
bun tools/generate-block-previews.ts # Generate block previews
shadcn build                         # Build shadcn registry
npm run lint                         # ESLint
```

### kit-ui/lms-dashboard/
```bash
bun dev          # Vite dev server on :3500
bun run test     # Vitest (not Jest)
bun run check    # Biome check (not ESLint)
```

### kit-ui/devolio/ & inno-agency/
```bash
npm run dev
npm run lint     # ESLint
```

## Tooling Differences
| Package | Linter | Formatter | Test | Runtime |
|---------|--------|-----------|------|---------|
| site | ESLint | Prettier | None | Next.js 16 |
| devolio | ESLint | Prettier | None | Next.js 16 |
| inno-agency | ESLint | Prettier | None | Next.js 16 |
| lms-dashboard | Biome | Biome | Vitest | TanStack Start |

## Path Aliases
- `site/`: `@/*` → `./src/*`
- `lms-dashboard/`: `#/*` → `./src/*`

## Registry
Site serves shadcn component registry at `https://jk-ui.unoforge.com/jk/{name}.json`. Build with `npm run generate:registries` in `site/`.
