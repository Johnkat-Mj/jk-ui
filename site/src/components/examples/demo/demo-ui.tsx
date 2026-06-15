import { Badge } from "@/components/jk/badge"


const variantMap = {
    solid: {
        success: "solid-success",
        danger: "solid-danger",
        warning: "solid-warning"
    },
    outline: {
        success: "outline-success",
        danger: "outline-danger",
        warning: "outline-warning"
    },
    soft: {
        success: "soft-success",
        danger: "soft-danger",
        warning: "soft-warning"
    },
    subtle: {
        success: "subtle-success",
        danger: "subtle-danger",
        warning: "subtle-warning"
    }
} as const

export const DemoUI = ({
    variant
}: { variant: "soft" | "solid" | "outline" | "subtle" }) => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant={variant} intent={variantMap[variant]['success']} className="flex items-center gap-x-1">
                12%
                <span aria-hidden="true" className="flex iconify ph--trend-up"></span>
            </Badge>
            <Badge variant={variant} intent={variantMap[variant]['danger']} className="flex items-center gap-x-1">
                50%
                <span aria-hidden="true" className="flex iconify ph--trend-down"></span>
            </Badge>
            <Badge variant={variant} intent={variantMap[variant]['warning']} className="flex items-center gap-x-1">
                You're reaching out your limit
                <span aria-hidden="true" className="flex iconify ph--warning"></span>
            </Badge>
        </div>
    )
}
