import { Badge } from "@/components/jk/badge"

export const BadgeSizes = () => {
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <Badge variant="solid" intent="primary" size="xs">
        Extra Small
      </Badge>
      <Badge variant="solid" intent="primary" size="sm">
        Small
      </Badge>
      <Badge variant="solid" intent="primary" size="md">
        Medium
      </Badge>
      <Badge variant="solid" intent="primary" size="lg">
        Large
      </Badge>
      <Badge variant="solid" intent="primary" size="xl">
        Extra Large
      </Badge>
    </div>
  )
}

