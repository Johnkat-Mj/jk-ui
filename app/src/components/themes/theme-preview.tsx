"use client"

import { useState } from "react"
import { Heading } from "@/components/jk/heading"
import { Button } from "@/components/jk/button"
import { Input } from "@/components/jk/input"
import { Checkbox } from "@/components/jk/checkbox"
import { Switch, SwitchLabel } from "@/components/jk/switch"
import { Badge } from "@/components/jk/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/jk/card"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/jk/select"
import { Slider } from "@/components/jk/slider"
import { Icon } from "@/components/jk/icon"
import { ThemeControls } from "./theme-controls"
import { cx } from "@/lib/utils"

const previewModes = [
  { id: "components", label: "Components", icon: "ph--grid-four" },
  { id: "dashboard", label: "Dashboard", icon: "ph--layout" },
  { id: "e-commerce", label: "E-commerce", icon: "ph--shopping-cart" },
  { id: "ai", label: "AI", icon: "ph--robot" },
]

const frameworks = [
  { id: "react", name: "React" },
  { id: "vue", name: "Vue" },
  { id: "svelte", name: "Svelte" },
]

export function ThemePreview() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [previewMode, setPreviewMode] = useState("components")
  const [modeMenuOpen, setModeMenuOpen] = useState(false)

  return (
    <main className="bg-bg-surface p-2.5 h-svh">
      <div className="relative bg-background rounded-ui ring-2 ring-bg-muted h-full p-1 overflow-hidden">
        {/* Preview content */}
        <div className="h-full overflow-y-auto p-6 xl:p-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <section>
              <Heading level={2}>Typography</Heading>
              <p className="text-muted-foreground mt-1 mb-4">Display text with heading and body variants.</p>
              <div className="flex flex-col gap-1">
                <Heading level={1}>Heading 1</Heading>
                <Heading level={2}>Heading 2</Heading>
                <Heading level={3}>Heading 3</Heading>
                <p className="text-foreground">Body text with regular weight.</p>
                <p className="text-muted-foreground">Muted body text for secondary information.</p>
              </div>
            </section>

            <section>
              <Heading level={2}>Buttons</Heading>
              <p className="text-muted-foreground mt-1 mb-4">Actions with solid, outline, soft, and ghost variants.</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="solid" intent="primary">Primary</Button>
                <Button variant="solid" intent="secondary">Secondary</Button>
                <Button variant="solid" intent="accent">Accent</Button>
                <Button variant="solid" intent="destructive">Destructive</Button>
                <Button variant="outline" intent="gray">Outline</Button>
                <Button variant="soft" intent="primary">Soft</Button>
                <Button variant="ghost" intent="gray">Ghost</Button>
              </div>
            </section>

            <section>
              <Heading level={2}>Form Controls</Heading>
              <p className="text-muted-foreground mt-1 mb-4">Inputs, selects, checkboxes, switches, and sliders.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
                <Input label="Name" placeholder="Enter your name" />
                <Select aria-label="Framework" placeholder="Pick a framework">
                  <SelectTrigger />
                  <SelectContent items={frameworks}>
                    {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
                  </SelectContent>
                </Select>
                <Checkbox>Accept terms</Checkbox>
                <Switch>
                  <SwitchLabel>Enable notifications</SwitchLabel>
                </Switch>
              </div>
              <div className="mt-4 max-w-sm">
                <Slider label="Volume" defaultValue={50} />
              </div>
            </section>

            <section>
              <Heading level={2}>Badges</Heading>
              <p className="text-muted-foreground mt-1 mb-4">Status labels and tags.</p>
              <div className="flex flex-wrap gap-2">
                <Badge intent="primary">Primary</Badge>
                <Badge intent="secondary">Secondary</Badge>
                <Badge intent="success">Success</Badge>
                <Badge intent="warning">Warning</Badge>
                <Badge intent="destructive">Destructive</Badge>
                <Badge intent="info">Info</Badge>
              </div>
            </section>

            <section>
              <Heading level={2}>Card</Heading>
              <p className="text-muted-foreground mt-1 mb-4">Containers for grouping content.</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground text-sm">
                    This is the card body content. Cards are used to group related information and actions.
                  </p>
                </CardBody>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" intent="gray">Cancel</Button>
                  <Button variant="solid" intent="primary">Save</Button>
                </CardFooter>
              </Card>
            </section>
          </div>
        </div>

        {/* Floating bottom container: slides up on hover */}
        <div
          data-box-preview-settings
          className={cx(
            "fixed inset-x-0 bottom-0 flex justify-center pb-2 text-white dark z-40",
            "ease-[cubic-bezier(.48,1.55,.28,1)] transform duration-300",
            "translate-y-10 hover:translate-y-0"
          )}
        >
          {/* Settings panel (above bar) */}
          <div
            data-box-setting-preview
            className={cx(
              "dark absolute bottom-14 p-4 border border-border rounded-global w-5/6 sm:w-sm z-10 flex flex-col",
              "ease-[cubic-bezier(.48,1.55,.28,1)]",
              "bg-gray-950/90 backdrop-blur-xl backdrop-saturate-150 overflow-hidden overflow-y-auto pb-10 max-h-60",
              "invisible opacity-0 scale-x-90 scale-y-95 origin-bottom",
              settingsOpen && "visible! opacity-100! scale-x-100! scale-y-100!",
              "transition-all duration-300 ease-linear"
            )}
          >
            <ThemeControls />
          </div>

          {/* Floating bar */}
          <div className="relative z-40 flex bg-gray-950/80 backdrop-blur-sm backdrop-saturate-150 p-1 rounded-3xl gap-0.5">
            {/* Site menu toggle */}
            <button
              aria-label="Open site menu"
              className="size-8 lg:size-9 flex items-center justify-center rounded-[calc(1.5rem-4px)] ease-linear duration-200 text-gray-400 hover:text-white hover:bg-white/10"
            >
              <Icon name="ph--list" size="sm" />
            </button>

            <span className="mx-1 w-px bg-gray-700 h-3 self-center" aria-hidden="true" />

            {/* Preview mode selector */}
            <div className="relative flex items-center">
              <button
                onClick={() => setModeMenuOpen(!modeMenuOpen)}
                className="flex items-center gap-1.5 h-8 lg:h-9 px-2 text-xs rounded-[calc(1.5rem-4px)] ease-linear duration-200 text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Icon name={previewModes.find(m => m.id === previewMode)?.icon ?? "ph--grid-four"} size="sm" />
                <span className="hidden sm:inline">{previewModes.find(m => m.id === previewMode)?.label}</span>
                <Icon name="ph--caret-down" size="xs" />
              </button>

              {/* Mode dropdown */}
              {modeMenuOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setModeMenuOpen(false)} />
                  <div className="absolute bottom-full left-0 mb-1.5 z-40 min-w-36 p-1 rounded-xl border border-border bg-gray-950/95 backdrop-blur-xl shadow-xl">
                    {previewModes.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => { setPreviewMode(m.id); setModeMenuOpen(false) }}
                        className={cx(
                          "flex items-center gap-2 w-full px-2.5 py-1.5 text-xs rounded-lg transition-colors",
                          previewMode === m.id
                            ? "bg-primary/20 text-primary"
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                        )}
                      >
                        <Icon name={m.icon} size="sm" />
                        {m.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <span className="mx-1.5 w-px bg-gray-700 h-3 self-center" aria-hidden="true" />

            {/* Code button */}
            <button
              aria-label="View theme code"
              className="size-8 lg:size-9 flex items-center justify-center rounded-[calc(1.5rem-4px)] ease-linear duration-200 text-gray-400 hover:text-white hover:bg-white/10"
            >
              <Icon name="ph--code" size="sm" />
            </button>

            <span className="mx-1.5 w-px bg-gray-700 h-3 self-center" aria-hidden="true" />

            {/* Theme panel toggle */}
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              aria-label="Toggle theme panel"
              className="size-8 lg:size-9 flex items-center justify-center rounded-[calc(1.5rem-4px)] bg-primary text-white"
            >
              <Icon name="ph--paint-brush" size="sm" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
