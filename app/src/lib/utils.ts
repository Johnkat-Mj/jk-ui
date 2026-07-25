import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const focusRing = tv({
  base: 'outline outline-primary forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2'
    }
  }
});



