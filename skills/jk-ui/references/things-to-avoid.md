# Things To Avoid

Most important mistakes to avoid when answering jk-ui questions.

## Do Not Invent APIs

- Do not invent components that are not in `registries/components.json` or `registries/blocks.json`.
- Do not invent props that are not declared in the component implementation.
- Do not invent install commands (use `npx shadcn add @jk-ui/{name}` after setup, or `npx shadcn add https://jk-ui.unoforge.com/r/{name}.json` as fallback).
- Do not invent block names outside the registry.

## Do Not Confuse Import Names

- `keyboard` (kbd component) is not the same as `input/keyboard` event handler.
- `disclosure` maps to `disclosure-group.tsx`, not a single `Disclosure` component.
- `native-table` is a plain HTML table wrapper; `table` is the RAC-powered data table.
- `progress-bar` is the install name; the export is `ProgressBar`.
- `progress-bar-circle` is the circular variant.

## Do Not Bypass Documented Composition

- Do not flatten Modal or Dialog into a single tag — use `ModalContent`, `ModalHeader`, `ModalBody`, `ModalFooter`.
- Do not skip `InputGroup` + `InputLeading`/`InputTrailing` for composed input layouts.
- Do not use `variant="unstyled"` outside of `InputGroup` context.
- Do not mix RAC props with raw HTML props on the same component without checking the type definitions.

## Do Not Ignore Theme Guidance

- Do not hardcode hex colors when semantic tokens exist (`bg-primary`, `text-fg`).
- Do not suggest `tailwind.config.js` modifications — jk-ui uses Tailwind v4 CSS-first config.
- Do not treat jk-ui as plain Tailwind snippets — the variant/intent system and CSS utilities are part of the library.

## Do Not Use Wrong Libraries

- jk-ui uses `tailwind-variants` (not `cva`, not `class-variance-authority`).
- jk-ui uses `clsx` + `tailwind-merge` via `cx()` (not `cn()` from shadcn/ui).
- jk-ui uses `@iconify-json/ph` for Phosphor icons (not `lucide-react`).

## Do Not Use Deprecated RAC Props

- **Select**: `defaultSelectedKey` is deprecated — use `defaultValue` instead.
- **Select**: `onSelectionChange` is deprecated — use `onChange` instead.
