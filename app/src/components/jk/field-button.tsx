"use client"

import { composeRenderProps, Button as RACButton,type ButtonProps as RACButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from '@/lib/utils';

export interface ButtonProps extends RACButtonProps {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon'
}

const button = tv({
  extend: focusRing,
  base: [
    'relative inline-flex items-center border-0 font-sans',
    'text-sm text-center transition rounded-ui cursor-default',
    'p-1 flex items-center justify-center text-muted-foreground',
    'bg-transparent hover:bg-muted pressed:bg-muted/60',
    ' ',
    'disabled:bg-transparent [-webkit-tap-highlight-color:transparent]'],
  variants: {
    isDisabled: {
      true: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5'
    }
  }
});

export function FieldButton(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => button({ ...renderProps, className })
      )}
    >
      {props.children}
    </RACButton>
  );
}
