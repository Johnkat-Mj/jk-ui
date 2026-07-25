import { Button } from "@/components/jk/button"

export const DemoButton = ({
  variant,
}: {
  variant: "solid" | "outline" | "soft" | "ghost"
}) => {
  if (variant === "solid") {
    return (
      <div className="flex flex-wrap gap-4">
        <Button variant="solid" intent="primary">Primary</Button>
        <Button variant="solid" intent="secondary">Secondary</Button>
        <Button variant="solid" intent="accent">Accent</Button>
        <Button variant="solid" intent="neutral">Neutral</Button>
        <Button variant="solid" intent="destructive">Destructive</Button>
      </div>
    )
  }

  if (variant === "soft") {
    return (
      <div className="flex flex-wrap gap-4">
        <Button variant="soft" intent="primary">Primary</Button>
        <Button variant="soft" intent="destructive">Destructive</Button>
        <Button variant="soft" intent="warning">Warning</Button>
        <Button variant="soft" intent="gray">Gray</Button>
      </div>
    )
  }

  return (
    <Button variant={variant} intent="gray">
      Gray
    </Button>
  )
}
