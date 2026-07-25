"use client"

import { Switch } from "@/components/jk/switch"


export const SwitchDemo = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Switch name="switch_1" id="switch_1"
                    indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]">
                    Switch 1
                </Switch>
                <Switch name="switch_def2" id="switch_def2"
                    indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-bg-muted)] [--knob-bg:var(--color-fg-title)]">
                    Switch 2
                </Switch>
                <Switch name="switch_def3" id="switch_def3"
                    indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-fg-title)] [--knob-bg:var(--color-bg)]">
                    Switch 3
                </Switch>
            </div>

        </>
    )
}
