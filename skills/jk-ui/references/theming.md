# Theming

jk-ui uses the normal shadcn CSS model. The CSS file declared at `tailwind.css` in `components.json` contains semantic values, dark-mode values, component variables, and `@theme inline` mappings.

## Install

```bash
npx shadcn add @jk-ui/base
```

`base` writes its CSS variables into the configured main CSS and installs:

- `styles/jk-ui/{base,form,button,ui,intents,utils}.css`
- `lib/{utils,ui-variants,ui-variant-types}.ts`
- the runtime and style dependencies used by them

It does not create a separate palette or theme file.

## Main CSS references

Keep these entries in the configured main CSS:

```css
@import "tailwindcss";
@import "tw-animate-css";

@reference "./jk-ui/base.css";
@reference "./jk-ui/form.css";
@reference "./jk-ui/button.css";
@reference "./jk-ui/ui.css";
@reference "./jk-ui/intents.css";
@reference "./jk-ui/utils.css";

@plugin "@iconify/tailwind4" {
  prefixes: ph;
  scale: 1.0;
}
```

Adjust relative paths to match the main CSS location.

`button.css` and `ui.css` contain visual recipes. `intents.css` contains supported variant/intent color combinations. Theme presets are optional and update variables in the same main CSS file.

Use `background`, `foreground`, `muted`, `card`, `popover`, `primary`, `destructive`, `border`, `input`, and `ring` as the public vocabulary.
