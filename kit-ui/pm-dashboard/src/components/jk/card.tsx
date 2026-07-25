import { tv } from "tailwind-variants"
import type { ComponentProps, ReactNode } from "react"
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import {
    type UiComponentVariant,
    type UiComponentIntent,
    resolveIntent,
} from "@/lib/ui-variant-types"
import { cx } from "@/lib/utils"
import { Heading, type HeadingProps } from "react-aria-components"


const cardVariants = tv({
    base: "relative text-sm [--gutter:--spacing(4)]",
    variants: {
        size: {
            md: "ui-card [--card-padding:var(--ui-padding,--spacing(4))]",
            none: "",
            custom: "ui-card"
        },
        fill: {
            default: "bg-card text-foreground",
            gray: "bg-card-gray text-foreground",
            none: "",
        },
        border: {
            true: "ring-1 ring-border-card",
            false: "",
        },
        shadow: {
            true: "shadow-sm",
            false: "",
        },
    },
    defaultVariants: {
        size: "md",
        fill: "default",
        border: true,
        shadow: true,
    },
})

/**
 * Card-specific type aliases using shared UI variant types
 */
type CardVariant = UiComponentVariant
type CardIntent<V extends CardVariant> = UiComponentIntent<V>
type CardSize = "md" | "custom" | "none"
type CardFill = "default" | "gray"|"none"

/**
 * Card component props
 */
interface CardProps<V extends CardVariant = "none"> {
    variant?: V
    intent?: CardIntent<V>
    size?: CardSize
    fill?: CardFill
    border?: boolean
    shadow?: boolean
    className?: string
    children: ReactNode
}


export const Card = <V extends CardVariant = "none">({
    variant = "none" as V,
    intent,
    size = "md",
    fill = "default",
    border = true,
    shadow = false,
    className,
    ...rest
}: ComponentProps<"div"> & CardProps<V>) => {
    if (variant === "none") {
        const classes = cardVariants({
            size,
            fill,
            border,
            shadow,
            className,
        })
        return <div className={classes} {...rest} />
    }

    // Resolve intent with default if not provided
    const resolvedIntent = resolveIntent(variant, intent)

    // Get variant classes from uiStyles
    const variantClasses = uiStyles({
        variant: variant as UiVariant,
        intent: resolvedIntent as UiIntent<UiVariant>,
    })

    // Combine all classes
    const classes = cx(
        cardVariants({
            size,
            fill: "none",
            border: false,
            shadow: false,
        }),
        variantClasses,
        className
    )

    return <div className={classes} {...rest} />
}

const cardHeaderVariants = tv({
    base: "pb-(--gutter)",
    variants: {
        direction: {
            column: "flex-col",
            row: "flex-row",
        },
        justify: {
            start: "justify-start",
            end: "justify-end",
            center: "justify-center",
        },
        gap: {
            "1": "gap-1",
            "2": "gap-2",
            "3": "gap-3",
            "4": "gap-4",
        },
        flexNone: {
            true: "",
            false: "flex",
        },
    },
    defaultVariants: {
        direction: "column",
        justify: "start",
        gap: "2",
        flexNone: false,
    },
})

interface CardHeaderProps extends ComponentProps<"div"> {
    direction?: "column" | "row"
    justify?: "start" | "end" | "center"
    flexNone?: boolean
    gap?: "1" | "2" | "3" | "4"
}
export const CardHeader = ({
    direction = "column",
    justify = "start",
    flexNone = false,
    gap = "2",
    className,
    ...props
}: CardHeaderProps) => {
    const classes = cardHeaderVariants({
        direction,
        justify,
        gap,
        flexNone,
        className,
    })

    return (
        <div data-slot="card-header" className={classes} {...props} />
    )
}


const cardTitleVariants = tv({
    base: "text-balance text-foreground",
    variants: {
        size: {
            sm: "text-sm md:text-base/6",
            md: "text-base/6 md:text-lg/6",
            lg: "text-lg/6 md:text-xl/6",
            xl: "text-xl/6 md:text-2xl/6",
        },
        weight: {
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        size: "lg",
        weight: "semibold",
    },
})
interface CardTitleProps extends HeadingProps {
    level?: number
    text?: string
    size?: "sm" | "md" | "lg" | "xl"
    weight?: "medium" | "semibold" | "bold",
    ref?: React.Ref<HTMLHeadingElement>
}
export const CardTitle = ({
    level = 2,
    text,
    size = "lg",
    weight = "semibold",
    className,
    ref,
    ...props
}: CardTitleProps) => {
    return <Heading
        slot="title"
        ref={ref}
        className={cardTitleVariants({
            size,
            weight,
            className,
        })}
        {...props}
    />
}


const cardDescriptionVariants = tv({
    base: "text-pretty",
    variants: {
        size: {
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
        },
    },
    defaultVariants: {
        size: "sm",
    },
})
interface CardDescriptionProps extends Omit<ComponentProps<"p">, "children"> {
    text?: string
    size?: "sm" | "base" | "lg"
    children?: ReactNode
}
export const CardDescription = ({
    text,
    size = "sm",
    className,
    children,
    ...props
}: CardDescriptionProps) => {
    const classes = cardDescriptionVariants({
        size,
        className,
    })

    return (
        <p data-slot="card-description" className={classes} {...props}>
            {text || children}
        </p>
    )
}


const cardBodyVariants = tv({
    base: "flex flex-col",
    variants: {
        gap: {
            "1": "gap-1",
            "2": "gap-2",
            "3": "gap-3",
            "4": "gap-4",
        },
    },
    defaultVariants: {
        gap: "3",
    },
})
interface CardBodyProps extends Omit<ComponentProps<"div">, "children"> {
    gap?: "1" | "2" | "3" | "4"
    children: ReactNode
}
export const CardBody = ({
    gap = "3",
    className,
    children,
    ...props
}: CardBodyProps) => {
    const classes = cardBodyVariants({
        gap,
        className,
    })

    return (
        <div data-slot="card-content" className={classes} {...props}>
            {children}
        </div>
    )
}



type CardFooterProps = ComponentProps<"div">
export const CardFooter = ({ className, ...props }: CardFooterProps) => (
    <div data-slot="card-footer" className={cx("pt-(--gutter)", className)} {...props} />
)