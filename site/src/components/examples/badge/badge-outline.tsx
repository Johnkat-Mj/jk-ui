import { Badge } from "@/components/jk/badge"


export const BadgeOutline = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="outline">Badge Gray</Badge>
            <Badge variant="outline" intent="outline-neutral">Badge Neutral</Badge>
            <Badge variant="outline" intent="outline-primary">Badge Primary</Badge>
            <Badge variant="outline" intent="outline-secondary">Badge Secondary</Badge>
            <Badge variant="outline" intent="outline-warning">Badge Warning</Badge>
            <Badge variant="outline" intent="outline-danger">Badge danger</Badge>
            <Badge variant="outline" intent="outline-info">Badge Info</Badge>
            <Badge variant="outline" intent="outline-success">Badge Success</Badge>
        </div>
    )
}
