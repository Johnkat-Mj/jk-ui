

import { Skeleton } from "@/components/jk/skeleton"

export const DemoSkeleton = () => {
    return (
        <div className="w-full max-w-xl flex items-start gap-x-4">
            <Skeleton className="size-14" />
            <div className="flex-1 space-y-3">
                <Skeleton className="w-4/5 h-7" />
                <Skeleton className="w-9/12 h-4" />
                <Skeleton className="w-3/6 h-4" />
            </div>
        </div>
    )
}
