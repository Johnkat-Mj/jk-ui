import { Icon } from "@/components/jk/icon"

export const IconCommon = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Icon name="ph--house" />
            <Icon name="ph--user" intent="primary" />
            <Icon name="ph--check-circle" intent="success" />
            <Icon name="ph--warning" intent="warning" />
            <Icon name="ph--x-circle" intent="destructive" />
            <Icon name="ph--info" intent="secondary" />
            <Icon name="ph--question" intent="muted" />
        </div>
    )
}
