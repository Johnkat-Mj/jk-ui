import { Badge } from "@/components/jk/badge"

export const BadgeDemo = () => {
  return (
    <div className="flex items-center gap-3 justify-center flex-wrap">
      <Badge variant="subtle">Badge</Badge>
      <Badge variant="soft" intent="primary">Badge</Badge>
      <Badge variant="outline" intent="warning">Badge</Badge>
      <Badge intent="destructive">Badge</Badge>
      <Badge intent="neutral">Badge</Badge>
    </div>
  )
}

