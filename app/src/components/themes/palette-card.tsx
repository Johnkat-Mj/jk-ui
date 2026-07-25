"use client"

import { cx } from "@/lib/utils"

interface PaletteCardProps {
  label: string
  colors: string[]
  id: string
  active: boolean
  inPreview?: boolean
}

export function PaletteCard({ label, colors, id, active, inPreview }: PaletteCardProps) {
  if (inPreview) {
    return (
      <button
        data-palette={id}
        role="radio"
        aria-checked={active}
        style={{ "--palette-main-color": `hsl(${colors[0]})` } as React.CSSProperties}
        className={cx(
          "group col-span-1 aspect-video",
          "bg-[--palette-main-color]",
          "hover:opacity-80 ease-linear duration-200",
          "opacity-70 aria-checked:opacity-100",
          "scale-y-90 aria-checked:scale-y-100"
        )}
      >
        <span className="sr-only">{label}</span>
      </button>
    )
  }

  return (
    <button
      data-palette={id}
      role="radio"
      aria-checked={active}
      style={{ "--palette-main-color": `hsl(${colors[0]})` } as React.CSSProperties}
      className={cx(
        "group pb-0.5 text-muted-foreground",
        "aria-checked:text-foreground"
      )}
    >
      <div className="grid grid-cols-3 h-10 rounded-ui overflow-hidden bg-bg-surface p-0.5 w-full">
        {colors.map((color, i) => (
          <span
            key={i}
            style={{ "--palette-token": `hsl(${color})` } as React.CSSProperties}
            className={cx(
              "bg-[--palette-token]",
              i === 0 && "rounded-l-ui",
              i === colors.length - 1 && "rounded-r-ui"
            )}
          />
        ))}
      </div>
      <span className="text-sm">{label}</span>
    </button>
  )
}
