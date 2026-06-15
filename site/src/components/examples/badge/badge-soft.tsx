import { Badge } from "@/components/jk/badge"


export const BadgeSoft = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="soft">Badge Gray</Badge>
            <Badge variant="soft" intent="soft-neutral">Badge Neutral</Badge>
            <Badge variant="soft" intent="soft-primary">Badge Primary</Badge>
            <Badge variant="soft" intent="soft-secondary">Badge Secondary</Badge>
            <Badge variant="soft" intent="soft-warning">Badge Warning</Badge>
            <Badge variant="soft" intent="soft-danger">Badge danger</Badge>
            <Badge variant="soft" intent="soft-info">Badge Info</Badge>
            <Badge variant="soft" intent="soft-success">Badge Success</Badge>
        </div>
    )
}
