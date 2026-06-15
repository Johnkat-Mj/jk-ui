"use client"

import { isInternalLink } from "@/lib";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    asInternal?: boolean;
    children: ReactNode;
};


export const UiLink = ({
    href = "#",
    asInternal,
    children,
    className,
    ...rest
}: Props) => {
    const label =
        rest["aria-label"] && rest["aria-label"] !== ""
            ? rest["aria-label"]
            : `Link to ${href}`;

    const isInternal =
        asInternal ||
        isInternalLink(href)

    // Filter out 'class' prop if it exists (React uses 'className')
    const { class: _, ...validProps } = rest as { class?: string } & typeof rest;

    if (isInternal) {
        return (
            <Link href={href} aria-label={label} className={className} {...validProps}>
                {children}
            </Link>
        );
    }

    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...validProps}
        >
            {children}
        </a>
    );
}
