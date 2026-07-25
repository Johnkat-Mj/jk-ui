import * as React from "react"


import { cx as cn } from "@/lib/utils"
import { LinksGrid } from "@/components/mdx/links-grid"
import { LinkCard } from "@/components/mdx/link-card"
import { Codeblock } from "@/components/mdx/codeblock"
import { Step, Steps } from "@/components/mdx/steps"
import { ImageBlock } from "@/components/mdx/image-block"
import { ComponentTabPreviewCode } from "@/components/mdx/component-tab-preview-code"
import { Terminal } from "@/components/mdx/terminal"
import { PreviewUI } from "@/components/mdx/preview-ui"
import { ButtonVariants } from "@/components/examples/button-variants"
import { LoadCode } from "@/components/mdx/load-code"
import { DemoUI } from "@/components/examples/demo/demo-ui"
import { DemoButton } from "@/components/examples/demo/demo-btn"
import { Callout } from "@/components/jk/callout"
import { ReferencesGrid } from "@/components/mdx/references-grid"
import { Reference } from "@/components/mdx/reference"


export const mdxComponents = {
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={`${cn(
        "font-heading mt-2 scroll-m-28 text-3xl font-bold tracking-tight",
        className
      )}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => {
    return (
      <h2
        id={props.children
          ?.toString()
          .replace(/ /g, "-")
          .replace(/'/g, "")
          .replace(/\?/g, "")
          .toLowerCase()}
        className={`${cn(
          "text-foreground scroll-mt-26 first:mt-0 mt-12 text-lg font-medium",
          className
        )}`}
        {...props}
      />
    )
  },
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={`${cn(
        "text-foreground scroll-mt-26 mt-8 first:mt-0 font-medium",
        className
      )}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={`${cn(
        "font-heading mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}`}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={`${cn(
        "mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}`}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={`${cn(
        "mt-8 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}`}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={`${cn("w-max underline decoration-dashed whitespace-normal decoration-1 wrap-break-word text-primary rounded-lg ease-linear duration-200 hover:text-primary-800 dark:hover:text-primary-300", className)}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <div
      className={`${cn("mt-6 first:mt-0 text-foreground leading-normal", className)}`}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={`${cn("font-medium", className)}`} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={`${cn("mt-6 first:mt-0 ml-4 list-disc", className)}`} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={`${cn("mt-6 first:mt-0 ml-6 list-decimal", className)}`} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={`${cn("mt-2 first:mt-0", className)}`} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={`${cn("mt-6 border-l-2 pl-6 italic", className)}`}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img className={`${cn("rounded-md", className)}`} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),

  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="relative overflow-x-auto w-full rounded-lg border border-border/70 p-1 mt-6">
      <table
        className={cn(
          "w-full table-head-row",
          className
        )}
        {...props}
      />
    </div>
  ),

  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr className={cn("", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "px-4 py-2 text-left whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  tbody: ({ className, ...props }: React.ComponentProps<'tbody'>) => (
    <tbody className={cn('text-sm divide-y divide-border/60',className)} {...props} />
  ),




  'pre': ({ className, children, ...props }: any) => {
    return (
      <Codeblock {...props} >
        {children}
      </Codeblock>
    )
  },
  TableDescription: ({ children }: any) => {
    return <div className="max-w-sm text-wrap">
      {children}
    </div>
  },

  LinksGrid,
  LinkCard,
  Steps,
  Step,
  ImageBlock,


  Terminal,
  ComponentPreview: ComponentTabPreviewCode,
  PreviewUI,
  ButtonVariants,
  DemoUI,
  DemoButton,
  Callout,


  LoadCode,
  ReferencesGrid,
  Reference

}
