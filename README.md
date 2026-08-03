# JK-UI

A React component library distributed via the [shadcn registry](https://ui.shadcn.com/docs/registry), built on [react-aria-components](https://react-aria.adobe.com/) and styled with [TailwindCSS v4](https://tailwindcss.com/).

**Docs site:** [jk-ui.unoforge.com](https://jk-ui.unoforge.com)

## Overview

JK-UI provides accessible, customizable React components that you install directly into your codebase (copy-paste, not a dependency). It features a full shadcn-standard CSS variable theming system with 17 built-in theme presets, 60+ components, and pre-built blocks.

## Quick Start

```bash
# 1. Initialize shadcn with React Aria
bunx --bun shadcn@latest init --base aria

# 2. Register @jk-ui namespace (pick one)
npx shadcn@latest registry add @jk-ui=https://jk-ui.unoforge.com/r/{name}.json
# OR use GitHub namespace (no config): npx shadcn add johnkat-mj/jk-ui/{name}

# 3. Install theme
npx shadcn add @jk-ui/theme-jk-ui

# 4. Install base utilities
npx shadcn add @jk-ui/base

# 5. Add @reference imports to your main CSS file (see docs)

# 6. Install components
npx shadcn add @jk-ui/button
npx shadcn add @jk-ui/card
```

## Repository Structure

| Package | Description | Stack |
|---------|-------------|-------|
| `app/` | Docs site (jk-ui.unoforge.com) | Next.js 16, Fumadocs |
| `kit-ui/` | Demo projects | Various frameworks |
| `skills/` | AI skill files for assistants | Markdown |

## Development

```bash
# Prerequisites: Node.js 18+, Bun or npm/yarn

# Clone and install
git clone https://github.com/Johnkat-Mj/jk-ui
cd jk-ui

# Docs site
cd site && npm install && npm run dev

# CLI
cd cli && npm install && npm run dev
```

## License

MIT
