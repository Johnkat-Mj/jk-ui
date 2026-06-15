import { Badge } from "@/components/jk/badge"

export const BadgeVariants = () => {
  return (
    <div className="space-y-8">
      {/* Solid Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="solid" intent="solid-primary">Primary</Badge>
          <Badge variant="solid" intent="solid-secondary">Secondary</Badge>
          <Badge variant="solid" intent="solid-success">Success</Badge>
          <Badge variant="solid" intent="solid-danger">Danger</Badge>
          <Badge variant="solid" intent="solid-warning">Warning</Badge>
          <Badge variant="solid" intent="solid-info">Info</Badge>
          <Badge variant="solid" intent="solid-gray">Gray</Badge>
          <Badge variant="solid" intent="solid-neutral">Neutral</Badge>
        </div>
      </div>

      {/* Soft Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Soft</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="soft" intent="soft-primary">Primary</Badge>
          <Badge variant="soft" intent="soft-secondary">Secondary</Badge>
          <Badge variant="soft" intent="soft-accent">Accent</Badge>
          <Badge variant="soft" intent="soft-success">Success</Badge>
          <Badge variant="soft" intent="soft-danger">Danger</Badge>
          <Badge variant="soft" intent="soft-warning">Warning</Badge>
          <Badge variant="soft" intent="soft-info">Info</Badge>
          <Badge variant="soft">Gray</Badge>
          <Badge variant="soft" intent="soft-neutral">Neutral</Badge>
        </div>
      </div>

      {/* Subtle Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Subtle</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="subtle" intent="subtle-primary">Primary</Badge>
          <Badge variant="subtle" intent="subtle-secondary">Secondary</Badge>
          <Badge variant="subtle" intent="subtle-success">Success</Badge>
          <Badge variant="subtle" intent="subtle-danger">Danger</Badge>
          <Badge variant="subtle" intent="subtle-accent">Accent</Badge>
          <Badge variant="subtle" intent="subtle-warning">Warning</Badge>
          <Badge variant="subtle" intent="subtle-info">Info</Badge>
          <Badge variant="subtle">Gray</Badge>
          <Badge variant="subtle" intent="subtle-neutral">Neutral</Badge>
        </div>
      </div>

      {/* Outline Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fg-muted">Outline</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" intent="outline-primary">Primary</Badge>
          <Badge variant="outline" intent="outline-secondary">Secondary</Badge>
          <Badge variant="outline" intent="outline-success">Success</Badge>
          <Badge variant="outline" intent="outline-danger">Danger</Badge>
          <Badge variant="outline" intent="outline-warning">Warning</Badge>
          <Badge variant="outline" intent="outline-info">Info</Badge>
          <Badge variant="outline">Gray</Badge>
          <Badge variant="outline" intent="outline-neutral">Neutral</Badge>
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

