import { Badge } from "@/components/jk/badge"


const variantMap = {
    solid: {
        success: "success",
        destructive: "destructive",
        warning: "warning"
    },
    outline: {
        success: "success",
        destructive: "destructive",
        warning: "warning"
    },
    soft: {
        success: "success",
        destructive: "destructive",
        warning: "warning"
    },
    subtle: {
        success: "success",
        destructive: "destructive",
        warning: "warning"
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
            <Badge variant={variant} intent={variantMap[variant]['destructive']} className="flex items-center gap-x-1">
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
