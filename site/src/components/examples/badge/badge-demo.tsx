import { Badge } from "@/components/jk/badge"

export const BadgeDemo = () => {
  return (
    <div className="flex items-center gap-3 justify-center flex-wrap">
      <Badge variant="subtle">Badge</Badge>
      <Badge variant="soft" intent="soft-primary">Badge</Badge>
      <Badge variant="outline" intent="outline-warning">Badge</Badge>
      <Badge intent="solid-danger">Badge</Badge>
      <Badge intent="solid-neutral">Badge</Badge>
    </div>
  )
}

