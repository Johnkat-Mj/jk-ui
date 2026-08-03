# Colors

Semantic colors are stored directly in the application's main CSS file.

```css
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(240 5% 26%);
  --primary: oklch(0.52 0.14 215);
  --primary-foreground: hsl(0 0% 100%);
  --muted: hsl(240 5% 96%);
  --muted-foreground: hsl(240 5% 34%);
  --destructive: hsl(0 72% 51%);
  --border: hsl(240 6% 90%);
  --input: hsl(240 6% 90%);
  --ring: var(--primary);
}

.dark {
  --background: hsl(240 10% 4%);
  --foreground: hsl(240 5% 84%);
  --primary: oklch(0.62 0.15 215);
  --muted: hsl(240 6% 10%);
  --border: hsl(240 6% 10%);
}
```

## Palette policy

- Primary, secondary, accent, success, warning, and info use direct values.
- Gray may keep its `50–950` scale because layouts commonly consume several neutral levels.
- Add only extra shades that the product actually uses.
- Use `destructive`, never the legacy `danger`, in component APIs and semantic variables.

The registry maps these variables inside `@theme inline` in the same CSS file, exposing utilities such as `bg-background`, `text-foreground`, `bg-primary`, `text-destructive`, `border-input`, and `ring-ring`.

Do not add redundant `--color-bg`, `--color-fg`, or `--color-danger` aliases. Extended roles such as `fg-title`, `bg-subtle`, `bg-surface`, and `border-strong` remain only where they add a distinct meaning.
