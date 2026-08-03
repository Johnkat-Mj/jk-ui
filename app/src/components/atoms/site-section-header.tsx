"use client"

import { cx } from "@/lib/utils";
import type { ReactNode } from "react";


interface SiteSectionHeaderProps {
    subtitle?: string;
    title: string;
    description: string;
    className?: string;
    children: ReactNode
}

export const SiteSectionHeader = ({
    subtitle,
    title,
    description,
    className = '',
    children,
}: SiteSectionHeaderProps) => {
    return (
        <div
            className={cx(
                "px-3.5 sm:px-8 md:px-16 lg:px-8 xl:px-0 mx-auto w-full max-w-3xl lg:max-w-5xl flex flex-col items-center text-center",
                className
            )}
        >
            {subtitle && (
                <span className="relative text-muted-foreground dark:text-fg-title/70 w-max bg-background ring-1 ring-border before:absolute before:inset-0.5 px-2 py-1 rounded-ui before:bg-bg-surface before:rounded-[7px]">
                    <span className="text-sm relative">
                        {subtitle}
                    </span>
                </span>
            )}
            <h2 className={`font-semibold text-fg-title text-3xl sm:text-4xl max-w-xl ${subtitle ? 'mt-2' : ''}`}>
                {title}
            </h2>
            <p className="text-muted-foreground max-w-md text-sm mt-2.5">{description}</p>
            {children}
        </div>
    );
};