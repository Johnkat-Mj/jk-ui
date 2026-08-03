# Best Practices

Verified rules when guiding jk-ui usage. Always reference these before answering.

## Start From The Registry

- Check `registries/components.json` first to verify a component exists before suggesting it.
- Check `registries/blocks.json` for block availability.
- If in doubt about a prop, check the actual component source in `src/components/jk/{name}.tsx`.

## Prefer Existing jk-ui Patterns

- Use documented jk-ui primitives before raw HTML.
- Use subcomponents that already exist (Card, Modal, Dialog, DisclosureGroup families).
- Use blocks when the user needs a complete section instead of a single primitive.

## Import Paths

All components import from `@/components/jk/{component}`:

```tsx
import { Button } from "@/components/jk/button"
import { Card, CardHeader, CardTitle } from "@/components/jk/card"
```

The `@/` alias maps to `./src/` in user projects (configured in tsconfig).

## The `cx()` Utility

jk-ui uses `clsx` + `tailwind-merge` merged into a `cx()` function from `@/lib/utils`. When composing classes, prefer `cx()` over template literals.

```tsx
import { cx } from "@/lib/utils"

cx("base-class", condition && "conditional-class", className)
```

## Variant/Intent System

Components like `Alert`, `Badge`, `Card`, and `Callout` share a common variant/intent system via `@/lib/ui-variants.ts`:

- **Variants**: `none`, `solid`, `soft`, `subtle`, `outline`
- **Intents**: Bare semantic names in props, e.g. `primary`, `success`, `destructive`, `gray`
- Use `resolveIntent()` helper from `@/lib/ui-variant-types.ts` for default intent fallback

The `Button` component has its own extended variant system (adds `ghost`, `white/black-outline`).

## Theming

- Prefer shadcn-standard semantic tokens over hardcoded colors (`--primary`, `--foreground`, `--background`).
- Keep semantic palette values and the Tailwind bridge visible in the main CSS declared in `components.json`.
- Use Tailwind v4 `@theme` utilities (`bg-primary`, `text-foreground`, `border-input`).
- Change token values centrally in `src/styles/jk-ui/` or the theme preset instead of patching each component.

## Client Components

Components with `"use client"` directive (state, interactivity, RAC hooks) must be client components. The consumer's bundler handles the rest.

## Blocks vs Components

**Use Components when:**
- Building custom layouts
- Combining multiple primitives
- You need fine-grained control
- You want to own the styling

**Use Blocks when:**
- User needs a complete page section (login form, sidebar, hero, etc.)
- User wants to copy-paste and modify
- Blocks save setup time for common patterns

## When to Reference Component Files

Load component-specific docs (`components/button.md`, `components/input.md`, etc.) when:
- User asks detailed questions about a specific component
- You need to verify exact prop names and types
- You need to explain advanced usage patterns
- Standard reference docs don't have enough detail

## Documentation Hierarchy

Always follow this order:

1. **references/things-to-avoid.md** — Identify if question involves a common mistake
2. **references/best-practices.md** — (this file) — Verify correct general approach
3. **references/style-variants.md** — For variant/intent questions
4. **components/{name}.md** — For component-specific details
5. **SKILL.md composition patterns** — For multi-component examples

## Quick Troubleshooting

| Problem | Check First | Fix |
|---------|------------|-----|
| "Component doesn't exist" | references/components.md | Use exact install name from list |
| "Variant not working" | references/style-variants.md | Use correct variant/intent combo |
| "Props not recognized" | components/{name}.md | Verify exact prop name |
| "Classes not applying" | This file (cx() section) | Use cx() instead of className |
| "Can't theme this" | references/theming.md | Use CSS variables, not hardcoded colors |
