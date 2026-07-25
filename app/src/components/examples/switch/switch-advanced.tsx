// import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Description } from "@/components/jk/input"
import { Switch, SwitchLabel } from "@/components/jk/switch"

export const SwitchAdvanced = () => {
    return (
        <div className="flex flex-col gap-4">
            <Switch value="profileVisible" indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]">
                <SwitchLabel>Public profile</SwitchLabel>
                <Description>Allow others to see your profile.</Description>
            </Switch>
            <Switch value="searchEngineIndexing" indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]">
                <SwitchLabel>Search engine indexing</SwitchLabel>
                <Description>Allow search engines to index your profile.</Description>
            </Switch>
            <Switch defaultSelected value="twoFactor" indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]">
                <SwitchLabel>Two-factor authentication</SwitchLabel>
                <Description>Add an extra layer of security to your account.</Description>
            </Switch>
            <Switch value="activityStatus" indicatorClassName="[--switch-bg:var(--color-bg-muted)] [--switch-bg-selected:var(--color-primary)] [--knob-bg:var(--color-white)]">
                <SwitchLabel>Show activity status</SwitchLabel>
                <Description>Let others see when you&apos;re online.</Description>
            </Switch>
        </div>
    )
}
