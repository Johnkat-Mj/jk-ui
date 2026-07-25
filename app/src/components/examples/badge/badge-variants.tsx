import { Badge } from "@/components/jk/badge"

export const BadgeVariants = () => {
  return (
    <div className="space-y-8">
      {/* Solid Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="solid" intent="primary">Primary</Badge>
          <Badge variant="solid" intent="secondary">Secondary</Badge>
          <Badge variant="solid" intent="success">Success</Badge>
          <Badge variant="solid" intent="destructive">Destructive</Badge>
          <Badge variant="solid" intent="warning">Warning</Badge>
          <Badge variant="solid" intent="info">Info</Badge>
          <Badge variant="solid" intent="gray">Gray</Badge>
          <Badge variant="solid" intent="neutral">Neutral</Badge>
        </div>
      </div>

      {/* Soft Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Soft</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="soft" intent="primary">Primary</Badge>
          <Badge variant="soft" intent="secondary">Secondary</Badge>
          <Badge variant="soft" intent="accent">Accent</Badge>
          <Badge variant="soft" intent="success">Success</Badge>
          <Badge variant="soft" intent="destructive">Destructive</Badge>
          <Badge variant="soft" intent="warning">Warning</Badge>
          <Badge variant="soft" intent="info">Info</Badge>
          <Badge variant="soft">Gray</Badge>
          <Badge variant="soft" intent="neutral">Neutral</Badge>
        </div>
      </div>

      {/* Subtle Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Subtle</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="subtle" intent="primary">Primary</Badge>
          <Badge variant="subtle" intent="secondary">Secondary</Badge>
          <Badge variant="subtle" intent="success">Success</Badge>
          <Badge variant="subtle" intent="destructive">Destructive</Badge>
          <Badge variant="subtle" intent="accent">Accent</Badge>
          <Badge variant="subtle" intent="warning">Warning</Badge>
          <Badge variant="subtle" intent="info">Info</Badge>
          <Badge variant="subtle">Gray</Badge>
          <Badge variant="subtle" intent="neutral">Neutral</Badge>
        </div>
      </div>

      {/* Outline Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Outline</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" intent="primary">Primary</Badge>
          <Badge variant="outline" intent="secondary">Secondary</Badge>
          <Badge variant="outline" intent="success">Success</Badge>
          <Badge variant="outline" intent="destructive">Destructive</Badge>
          <Badge variant="outline" intent="warning">Warning</Badge>
          <Badge variant="outline" intent="info">Info</Badge>
          <Badge variant="outline">Gray</Badge>
          <Badge variant="outline" intent="neutral">Neutral</Badge>
        </div>
      </div>

      {/* Default Variant */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Default</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default Badge</Badge>
        </div>
      </div>
    </div>
  )
}

