import { Separator } from "@/components/jk/separator"

export const DemoSeparator = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <Separator className="border-primary" />
            <Separator className="border-secondary" />
            <Separator className="border-destructive" />
            <Separator className="border-gray" />
        </div>
    )
}
