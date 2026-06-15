import { Badge } from '@/components/jk/badge'

export const BadgeWithIcon = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="soft" intent="soft-success" className="flex items-center gap-x-1">
                12%
                <span aria-hidden="true" className="flex iconify ph--trend-up"></span>
            </Badge>
            <Badge variant="soft" intent="soft-danger" className="flex items-center gap-x-1">
                50%
                <span aria-hidden="true" className="flex iconify ph--trend-down"></span>
            </Badge>
            <Badge variant="soft" intent="soft-warning" className="flex items-centerr gap-x-1">
                You&apos;re reaching out your limit
                <span aria-hidden="true" className="flex iconify ph--warning"></span>
            </Badge>
        </div>
    )
}
