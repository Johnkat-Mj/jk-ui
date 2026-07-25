import { Badge } from "@/components/jk/badge"


export const BadgeOutline = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="outline">Badge Gray</Badge>
            <Badge variant="outline" intent="neutral">Badge Neutral</Badge>
            <Badge variant="outline" intent="primary">Badge Primary</Badge>
            <Badge variant="outline" intent="secondary">Badge Secondary</Badge>
            <Badge variant="outline" intent="warning">Badge Warning</Badge>
            <Badge variant="outline" intent="destructive">Badge destructive</Badge>
            <Badge variant="outline" intent="info">Badge Info</Badge>
            <Badge variant="outline" intent="success">Badge Success</Badge>
        </div>
    )
}
