"use client"

import type { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

const aspectVariants = tv({
    base: 'aspect-square',
    variants: {
        aspect: {
            video: 'aspect-video',
            square: 'aspect-square',
            '35mm-film': 'aspect-35mm-film',
            'standard-tv': 'aspect-standard-tv',
            ultrawide: 'aspect-ultrawide',
        },
    },
    defaultVariants: {
        aspect: 'video',
    },
});

type AspectRatioProps = {
    aspect?: 'video' | 'square' | '35mm-film' | 'standard-tv' | 'ultrawide';
    className?: string;
} & ComponentProps<"div">

export const AspectRatio = ({
    aspect = 'video',
    className,
    ...rest
}: AspectRatioProps) => {
    return (
        <div className={aspectVariants({ aspect, className })} {...rest} />
    );
};

