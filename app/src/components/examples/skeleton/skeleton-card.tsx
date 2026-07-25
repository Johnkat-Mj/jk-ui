import { Skeleton } from '@/components/jk/skeleton'

export const SkeletonCard = () => {
    return (
        <div className="max-w-sm w-full p-8 rounded-md border border-border-strong bg-bg space-y-6">
            <Skeleton radius="none" className="aspect-video rounded-ui" />
            <div className="space-y-3">
                <Skeleton className="w-4/5 h-7" />
                <Skeleton className="w-9/12 h-4" />
                <Skeleton className="w-3/6 h-4" />
            </div>
        </div>
    )
}
