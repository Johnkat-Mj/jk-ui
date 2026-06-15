import { Icon } from "@/components/jk/icon"

export const IconSizes = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Icon name="ph--star" size="xs" />
            <Icon name="ph--star" size="sm" />
            <Icon name="ph--star" />
            <Icon name="ph--star" size="lg" />
            <Icon name="ph--star" size="xl" />
            <Icon name="ph--star" size="2xl" />
        </div>
    )
}
