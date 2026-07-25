import { Badge } from "@/components/jk/badge"


export const BadgeSoft = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="soft">Badge Gray</Badge>
            <Badge variant="soft" intent="neutral">Badge Neutral</Badge>
            <Badge variant="soft" intent="primary">Badge Primary</Badge>
            <Badge variant="soft" intent="secondary">Badge Secondary</Badge>
            <Badge variant="soft" intent="warning">Badge Warning</Badge>
            <Badge variant="soft" intent="destructive">Badge destructive</Badge>
            <Badge variant="soft" intent="info">Badge Info</Badge>
            <Badge variant="soft" intent="success">Badge Success</Badge>
        </div>
    )
}
