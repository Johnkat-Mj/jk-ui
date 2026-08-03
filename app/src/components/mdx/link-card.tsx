import type { UiCardProps } from "@/types"
import { UiLink } from "../atoms/ui-link"
import { cx } from "@/lib/utils"


export const LinkCard = ({ href, title, description, icon, iconDark }: UiCardProps) => {
    return (
        <UiLink
            href={href}
            className={`${cx(
                "flex flex-col w-full ui-card text-foreground ease-linear duration-200 relative",
                "hover:border-primary border border-gray-200 dark:border-gray-800/60 bg-background hover:bg-bg-subtle",
                "[--card-padding:calc(var(--spacing,0.25rem)*5)] [--card-radius:var(--global-main-radius)]",
            )}`}
        >
            <span
                className={`size-10 d-flex-place-center rounded-md p-2 ui-soft ${icon.startsWith("/") || icon.startsWith("http") ? "ui-soft-gray" : "ui-soft-primary"}`}
            >
                {
                    icon.startsWith("/") || icon.startsWith("http") ? (
                        <>
                            {iconDark ? (
                                <>
                                    <img
                                        src={icon}
                                        alt={`icon ${icon}`}
                                        width={20}
                                        height={20}
                                        className="h-5 w-auto dark:hidden"
                                    />
                                    <img
                                        src={iconDark}
                                        alt={`icon ${iconDark}`}
                                        width={20}
                                        height={20}
                                        className="h-5 w-auto not-dark:hidden"
                                    />
                                </>
                            ) : (
                                <img
                                    src={icon}
                                    alt={`icon ${icon}`}
                                    width={20}
                                    height={20}
                                    className="h-5 w-auto"
                                />
                            )}
                        </>
                    ) : (
                        <span
                            aria-hidden="true"
                            className={`flex iconify ${icon} text-primary text-2xl`}
                        />
                    )
                }
            </span>
            {
                href.startsWith("http") ? (
                    <span
                        aria-hidden="true"
                        className="absolute in-hover:text-primary top-(--card-padding) right-(--card-padding) text-muted-foreground text-xs iconify ph--arrow-square-out"
                    />
                ) : (
                    <span
                        aria-hidden="true"
                        className="absolute in-hover:text-primary top-(--card-padding) right-(--card-padding) text-muted-foreground text-xs iconify ph--arrow-up-right"
                    />
                )
            }

            <h2 className="font-medium text-lg text-fg-title mt-4">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1 leading-6">
                {description}
            </p>
        </UiLink>
    )
}
