"use client"

import { type DropZoneProps, DropZone as RACDropZone } from 'react-aria-components/DropZone';
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { tv } from "tailwind-variants";

const dropZone = tv({
  base: "flex items-center justify-center p-8 min-h-24 w-[30%] font-sans text-base text-balance text-center rounded-ui border border-1 border-input/70 bg-background",
  variants: {
    isFocusVisible: {
      true: "outline outline-2 -outline-offset-1 outline-primary forced-colors:outline-[Highlight]"
    },
    isDropTarget: {
      true: "bg-blue-100/40 dark:bg-blue-900/60 outline outline-2 -outline-offset-1 outline-primary forced-colors:outline-[Highlight]",
    }
  }
});

export function DropZone(props: DropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => dropZone({ ...renderProps, className }))} />
  );
}
