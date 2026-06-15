# Performance

Guidance that stays compatible with real jk-ui usage.

## Safe Guidance

- Reuse existing jk-ui primitives and blocks instead of duplicating large custom markup.
- Use `Skeleton` for loading placeholders.
- Use `Loader` (spinner) for async operations.
- Prefer CSS animations (`tw-animate-css`) over JS-driven animations.
- Blocks are copy-paste — they don't add bundle overhead you don't explicitly include.

## RAC Performance

- react-aria-components uses `React.19` features for efficient re-renders.
- RAC collections (`Table`, `TabList`, `ListBox`) use virtualized rendering where supported.
- No runtime CSS-in-JS overhead — jk-ui uses Tailwind CSS v4 static extraction.

## Avoid Unverified Claims

- Do not recommend `React.lazy` or dynamic imports for jk-ui primitives — they're small and already tree-shakable via bundler.
- Do not claim jk-ui components are pre-bundled — they're source files you own and your bundler processes.

## Public Docs

- `https://jk-ui.unoforge.com/docs/installation`
- `https://jk-ui.unoforge.com/components/skeleton`
