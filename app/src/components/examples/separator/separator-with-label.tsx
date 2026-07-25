import { Separator } from "@/components/jk/separator"

export const SeparatorWithLabel = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <Separator label="Label Start" className="before:bg-bg-muted" labelClass="pr-3 bg-bg text-fg relative" />
            <Separator label="Label Center" className="before:bg-bg-muted" labelPlacement="middle" labelClass="px-3 bg-bg text-fg relative" />
            <Separator label="Label End" className="before:bg-bg-muted" labelPlacement="end" labelClass="pl-3 bg-bg text-fg relative" />
            <Separator label="Label Center" className="before:bg-bg-muted" labelPlacement="middle" labelClass="px-3 bg-emerald-600 dark:bg-emerald-500 text-sm text-white rounded-full py-px relative" />
        </div>
    )
}
