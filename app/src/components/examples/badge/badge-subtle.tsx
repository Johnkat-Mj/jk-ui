import { Badge } from "@/components/jk/badge"


export const BadgeSubtle = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="subtle">Badge Gray</Badge>
            <Badge variant="subtle" intent="neutral">Badge Neutral</Badge>
            <Badge variant="subtle" intent="primary">Badge Primary</Badge>
            <Badge variant="subtle" intent="secondary">Badge Secondary</Badge>
            <Badge variant="subtle" intent="warning">Badge Warning</Badge>
            <Badge variant="subtle" intent="destructive">Badge destructive</Badge>
            <Badge variant="subtle" intent="info">Badge Info</Badge>
            <Badge variant="subtle" intent="success">Badge Success</Badge>
        </div>
    )
}
