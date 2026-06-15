import { Badge } from "@/components/jk/badge"


export const BadgeSubtle = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="subtle">Badge Gray</Badge>
            <Badge variant="subtle" intent="subtle-neutral">Badge Neutral</Badge>
            <Badge variant="subtle" intent="subtle-primary">Badge Primary</Badge>
            <Badge variant="subtle" intent="subtle-secondary">Badge Secondary</Badge>
            <Badge variant="subtle" intent="subtle-warning">Badge Warning</Badge>
            <Badge variant="subtle" intent="subtle-danger">Badge danger</Badge>
            <Badge variant="subtle" intent="subtle-info">Badge Info</Badge>
            <Badge variant="subtle" intent="subtle-success">Badge Success</Badge>
        </div>
    )
}
