# jk-ui Skill Index

Quick navigation guide for the jk-ui skill files.

## Starting Points

### New to jk-ui?
1. Read [SKILL.md#goal](./SKILL.md#goal) — Understand what jk-ui is
2. Read [SKILL.md#setup-flow](./SKILL.md#setup-flow) — Choose Quick Setup or Manual
3. Read [references/best-practices.md](./references/best-practices.md) — Do's and don'ts

### Using jk-ui?
1. [references/components.md](./references/components.md) — Find install commands
2. [references/style-variants.md](./references/style-variants.md) — Check variant/intent options
3. [SKILL.md#key-composition-patterns](./SKILL.md#key-composition-patterns) — See code examples

### Theming Questions?
1. [references/theming.md](./references/theming.md) — Token structure
2. [references/colors.md](./references/colors.md) — CSS variable reference
3. [SKILL.md#theming](./SKILL.md#theming) — Presets and customization

### Performance/Accessibility?
1. [references/performance.md](./references/performance.md) — Best practices
2. [references/accessibility.md](./references/accessibility.md) — WCAG compliance
3. [references/composition-patterns.md](./references/composition-patterns.md) — Common patterns

## File Organization

```
skills/jk-ui/
├── SKILL.md                     # Main skill guide
├── INDEX.md                     # This file
├── components/                  # Component-specific docs
│   ├── button.md
│   ├── input.md
│   ├── form-inputs.md          # Group of related components
│   ├── dialog.md
│   ├── modal.md
│   ├── layout.md
│   ├── data-display.md
│   ├── charts.md
│   └── ... (35+ more)
└── references/                  # Reference documentation
    ├── components.md            # Full component index
    ├── theming.md              # Token system
    ├── colors.md               # CSS variable reference
    ├── style-variants.md       # Variant/intent system
    ├── best-practices.md       # Verified patterns
    ├── things-to-avoid.md      # Common mistakes
    ├── composition-patterns.md # React patterns
    ├── accessibility.md        # WCAG compliance
    └── performance.md          # Performance tips
```

## When to Load What

### Component Help
```
User asks: "How do I use the Button component?"

Load order:
1. references/components.md     → Find install command
2. references/style-variants.md → Check variant/intent options
3. components/button.md         → Detailed component API
```

### Theme Customization
```
User asks: "How do I change the primary color?"

Load order:
1. references/theming.md        → Understand token structure
2. references/colors.md         → See CSS variable names
3. SKILL.md#theming            → See examples
```

### Debug Invalid Usage
```
User asks: "Why doesn't variant='primary' work?"

Load order:
1. references/things-to-avoid.md  → Find common mistakes
2. references/style-variants.md   → Show correct usage
3. references/best-practices.md   → Explain why
```

### General Composition
```
User asks: "How do I combine components?"

Load order:
1. references/best-practices.md     → Verified patterns
2. references/composition-patterns.md → Common examples
3. SKILL.md#key-composition-patterns → Code samples
```

## Quick Links

- **Docs:** https://jk-ui.unoforge.com
- **GitHub:** https://github.com/Johnkat-Mj/jk-ui
- **Setup:** [SKILL.md#setup-flow](./SKILL.md#setup-flow)
- **Components:** [references/components.md](./references/components.md)
- **Rules:** [SKILL.md#working-rules](./SKILL.md#working-rules)
- **Avoid:** [references/things-to-avoid.md](./references/things-to-avoid.md)

## File Count

| Category | Count |
|----------|-------|
| Component docs | 35+ |
| Reference docs | 9 |
| Total | 45+ files |

All files are markdown (.md) for easy reading and linking.
