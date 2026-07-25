export const themeConfig: Record<
  string,
  { title: string; code: string; lang: "css" | "ts" | "js" | "jsx" }
> = {
  "css-variables-color-both": {
    title: "Light and dark",
    code: `:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(240 5% 26%);
  --primary: hsl(243 75% 59%);
  --primary-foreground: hsl(0 0% 100%);
  --muted: hsl(240 5% 96%);
  --muted-foreground: hsl(240 5% 34%);
  --border: hsl(240 6% 90%);
  --ring: var(--primary);
}

.dark {
  --background: hsl(240 10% 4%);
  --foreground: hsl(240 5% 84%);
  --primary: hsl(245 86% 67%);
  --muted: hsl(240 6% 10%);
  --muted-foreground: hsl(240 5% 65%);
  --border: hsl(240 6% 10%);
}`,
    lang: "css",
  },
  "css-variables-color-light": {
    title: "Light only",
    code: `:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(240 5% 26%);
  --primary: hsl(243 75% 59%);
  --primary-foreground: hsl(0 0% 100%);
  --muted: hsl(240 5% 96%);
  --muted-foreground: hsl(240 5% 34%);
  --border: hsl(240 6% 90%);
  --ring: var(--primary);
}`,
    lang: "css",
  },
  "css-variables-color-dark": {
    title: "Dark only",
    code: `.dark {
  --background: hsl(240 10% 4%);
  --foreground: hsl(240 5% 84%);
  --primary: hsl(245 86% 67%);
  --muted: hsl(240 6% 10%);
  --muted-foreground: hsl(240 5% 65%);
  --border: hsl(240 6% 10%);
  --ring: var(--primary);
}`,
    lang: "css",
  },
  "css-variables-colors": {
    title: "Palette configuration",
    code: `[data-palette="air"] {
  --primary: hsl(15 100% 48%);
  --secondary: hsl(2 85% 47%);
  --accent: hsl(37 67% 40%);
  --ring: var(--primary);
}`,
    lang: "css",
  },
  "inner-radius-example": {
    title: "Inner Radius Example",
    code: `import { Card } from "@/components/ui/card"

const ProfileCard = () => {
  return (
    <Card className="[--card-padding:--spacing(2)] [--card-radius:var(--radius-2xl)]">
      <div className="inner-radius bg-primary text-primary-foreground p-4">
        Content that fits perfectly
      </div>
    </Card>
  )
}`,
    lang: "jsx",
  },
}
