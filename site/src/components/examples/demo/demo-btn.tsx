import { Button } from "@/components/jk/button"


const variantMap = {
    solid: {
        primary: "solid-primary",
        secondary: "solid-secondary",
        success: "solid-success",
        danger: "solid-danger",
        neutral: "solid-neutral"
    },
    outline: {
        gray: "outline-gray",
        primary: "outline-primary",
        secondary: "outline-secondary",
        success: "outline-success",
        danger: "outline-danger",
        neutral: "outline-neutral"
    },
    soft: {
        gray: "soft-gray",
        primary: "soft-primary",
        secondary: "soft-secondary",
        success: "soft-success",
        danger: "soft-danger",
        neutral: "soft-neutral"
    },
    ghost: {
        gray: "ghost-gray",
        primary: "ghost-primary",
        secondary: "ghost-secondary",
        danger: "ghost-danger",
        neutral: "ghost-neutral"
    }
} as const

export const DemoButton = ({
    variant
}: { variant: "solid" | "outline" | "soft" | "ghost" }) => {
    if (variant === "solid") {
        return (
            <div className="flex flex-wrap gap-4">
                <Button variant={variant} intent={variantMap[variant].primary} className="flex items-center gap-x-1">
                    Primary
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--check"></span>
                </Button>
                <Button variant={variant} intent={variantMap[variant].secondary} className="flex items-center gap-x-1">
                    Secondary
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--info"></span>
                </Button>
                <Button variant={variant} intent={variantMap[variant].success} className="flex items-center gap-x-1">
                    Success
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--check-circle"></span>
                </Button>
                <Button variant={variant} intent={variantMap[variant].danger} className="flex items-center gap-x-1">
                    Danger
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--warning"></span>
                </Button>
                <Button variant={variant} intent={variantMap[variant].neutral} className="flex items-center gap-x-1">
                    Neutral
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--circle"></span>
                </Button>
            </div>
        )
    }

    if (variant === "outline") {
        return (
            <div className="flex flex-wrap gap-4">
                <Button variant={"outline"} intent={variantMap[variant].gray} className="flex items-center gap-x-1">
                    Gray
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--circle"></span>
                </Button>
                <Button variant={"outline"} intent={variantMap[variant].danger} className="flex items-center gap-x-1">
                    Danger
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--warning"></span>
                </Button>
            </div>
        )
    }

    if (variant === "soft") {
        return (
            <div className="flex flex-wrap gap-4">
                <Button variant={"soft"} intent={variantMap[variant].gray} className="flex items-center gap-x-1">
                    Gray
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--circle"></span>
                </Button>
                <Button variant={"soft"} intent={variantMap[variant].primary} className="flex items-center gap-x-1">
                    Primary
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--check"></span>
                </Button>
                <Button variant={"soft"} intent={variantMap[variant].danger} className="flex items-center gap-x-1">
                    Danger
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--warning"></span>
                </Button>
            </div>
        )
    }

    if (variant === "ghost") {
        return (
            <div className="flex flex-wrap gap-4">
                <Button variant={"ghost"} intent={variantMap[variant].gray} className="flex items-center gap-x-1">
                    Gray
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--circle"></span>
                </Button>
                <Button variant={"ghost"} intent={variantMap[variant].primary} className="flex items-center gap-x-1">
                    Primary
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--check"></span>
                </Button>
                <Button variant={"ghost"} intent={variantMap[variant].danger} className="flex items-center gap-x-1">
                    Danger
                    <span aria-hidden="true" className="text-xs mr-1 flex iconify ph--warning"></span>
                </Button>
            </div>
        )
    }

    return null
}

