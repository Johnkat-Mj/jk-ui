"use client"

import { Description } from '@/components/jk/input'
import { Switch, SwitchIndicator, SwitchLabel } from '@/components/jk/switch'

export const SwitchCompose = () => {
  return (
    <Switch composeAll className="ui-card rounded-ui [--card-padding:--spacing(2.5)] [--card-radius:--radius-ui] bg-bg-surface flex items-center gap-3">
      <div className="inner-radius bg-bg shadow-sm size-10 text-xl d-flex-place-center">
        <span aria-hidden="true" className="flex iconify ph--globe" />
      </div>
      <div className="flex items-center gap-4 flex-1">
        <div className="flex flex-col flex-1">
          <SwitchLabel className="font-semibold text-fg-title">Public access</SwitchLabel>
          <Description className="text-muted-foreground text-xs sm:text-sm line-clamp-1">
            Publish and share link with anyone
          </Description>
        </div>
        <div className="w-max min-w-max flex">
          <SwitchIndicator className="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]"/>  
        </div>
      </div>
    </Switch>
  )
}
