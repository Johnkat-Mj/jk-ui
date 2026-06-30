"use client"

import React from 'react';
import {
  SwitchField,
  SwitchButton,
  type SwitchFieldProps,
  type ValidationResult
} from 'react-aria-components/Switch';
import { tv } from 'tailwind-variants';
import { cx } from '@/lib/utils';
import { Label, Description, FieldError } from './input';

type SwitchSizes = "xs" | "sm" | "md" | "lg"

interface SwitchProps extends SwitchFieldProps {
  children?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: SwitchSizes;
  outlined?: boolean;
  indicatorClassName?: string;
}

const track = tv({
  base: 'switch',
  variants: {
    size: {
      xs: 'switch-xs switch-placement-xs',
      sm: 'switch-sm switch-placement-sm',
      md: 'switch-md switch-placement-md',
      lg: 'switch-lg switch-placement-lg',
    },
    outlined: {
      true: 'outline-border outline-1 outline-offset-0 group-fx-focus-visible:ring-(--ui-input-focus-outline)',
    }
  },
  defaultVariants: {
    size: 'sm',
  }
});

const handle = tv({
  base: 'switch-knob',
});

export function Switch({ children, size, outlined, description, errorMessage, indicatorClassName, ...props }: SwitchProps) {
  return (
    <SwitchField {...props} className="flex flex-col gap-1 group">
      <SwitchButton
        className={cx(
          'group relative flex gap-2 items-center text-neutral-800 disabled:text-neutral-300 dark:text-neutral-200 dark:disabled:text-neutral-600 forced-colors:disabled:text-[GrayText] text-sm transition [-webkit-tap-highlight-color:transparent]',
          props.className
        )}>
        {(renderProps) => (
          <>
            <div className={cx(track({ size, outlined }), indicatorClassName)}>
              <span className={handle()} />
            </div>
            {typeof children === "string" ? <SwitchLabel>{children}</SwitchLabel> : children}
          </>
        )}
      </SwitchButton>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </SwitchField>
  );
}

export const SwitchIndicator = ({ size = "sm", outlined = false, className = "" }: { outlined?: boolean, size?: SwitchSizes, className?: string }) => {
  return (
    <span data-slot="indicator" className={cx(track({ size, outlined }), className)}>
      <span aria-hidden="true" className={handle()} />
    </span>
  )
}

export const SwitchLabel = (props: React.ComponentProps<typeof Label>) => {
  return <Label elementType="span" {...props} />
}
