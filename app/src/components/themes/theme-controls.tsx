"use client"

import { PALETTES, RADIUS_PRESETS, useThemePlayground } from "./theme-playground-provider"
import { PaletteCard } from "./palette-card"
import { Icon } from "@/components/jk/icon"
import { cx } from "@/lib/utils"

export function ThemeControls() {
  const { activeTheme, setActiveTheme, radius, setRadius, darkMode, setDarkMode } = useThemePlayground()

  return (
    <div className="flex flex-col gap-4 pb-2">
      {/* Theme toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Theme</span>
        <div className="grid grid-cols-2 rounded-ui border border-border bg-bg-surface text-muted-foreground">
          <button
            data-toggle-theme="light"
            className={cx(
              "btn btn-xs gap-x-1.5 rounded-l-ui",
              !darkMode ? "bg-background text-foreground" : ""
            )}
            onClick={() => setDarkMode(false)}
          >
            <Icon name="ph--sun" size="sm" />
            Light
          </button>
          <button
            data-toggle-theme="dark"
            className={cx(
              "btn btn-xs gap-x-1.5",
              darkMode ? "bg-background text-foreground" : ""
            )}
            onClick={() => setDarkMode(true)}
          >
            <Icon name="ph--moon-stars" size="sm" />
            Dark
          </button>
        </div>
      </div>

      {/* Palette */}
      <div className="p-2 rounded-global border border-border bg-bg-surface">
        <span className="text-muted-foreground text-sm mb-0.5 block">Palette</span>
        <div
          data-palette-container
          role="radiogroup"
          className="grid grid-cols-5 *:first:rounded-l-global-radius *:last:rounded-r-global-radius"
        >
          {PALETTES.map((p) => (
            <PaletteCard key={p.id} inPreview {...p} active={activeTheme === p.id} />
          ))}
        </div>
      </div>

      {/* Corner radius */}
      <div className="p-2 rounded-global border border-border bg-bg-surface">
        <span className="text-muted-foreground text-sm mb-0.5 block">Corner radius</span>
        <div
          role="radiogroup"
          className="grid grid-cols-6 gap-1 *:first:rounded-l-global-radius *:last:rounded-r-global-radius"
        >
          {RADIUS_PRESETS.map((r) => (
            <button
              key={r.value}
              role="radio"
              aria-checked={radius === r.value}
              onClick={() => setRadius(r.value)}
              className={cx(
                "text-xs py-1 px-1.5 text-center rounded-ui transition-all",
                "text-muted-foreground hover:text-foreground",
                "aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-xs"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
