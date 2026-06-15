# Charts (Recharts)

Chart components wrap Recharts with jk-ui styling. Requires Recharts as a peer dependency.

## Usage

```tsx
import { Chart, ChartLegend, ChartTooltip } from "@/components/jk/chart"

// Chart provides theming context for all chart variants
```

## Individual Charts

```bash
npx shadcn add https://jk-ui.unoforge.com/r/chart.json
npx shadcn add https://jk-ui.unoforge.com/r/area-chart.json
npx shadcn add https://jk-ui.unoforge.com/r/bar-chart.json
npx shadcn add https://jk-ui.unoforge.com/r/line-chart.json
npx shadcn add https://jk-ui.unoforge.com/r/pie-chart.json
npx shadcn add https://jk-ui.unoforge.com/r/leaderboard.json
npx shadcn add https://jk-ui.unoforge.com/r/tracker.json
```

| Component | Description |
|-----------|-------------|
| Chart | Base chart container with theming (depends on Recharts) |
| AreaChart | Recharts AreaChart wrapper |
| BarChart | Recharts BarChart wrapper |
| LineChart | Recharts LineChart wrapper |
| PieChart | Recharts PieChart wrapper |
| Leaderboard | Ranked list with scores |
| Tracker | Timeline tracker with tooltips |

## Guidance

- Charts use jk-ui theme colors (primary, fg, muted, etc.).
- ChartTooltip and ChartLegend provide themed tooltip/legend components.
