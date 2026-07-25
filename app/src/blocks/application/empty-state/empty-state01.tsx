import { Button } from "@/components/jk/button"

export const EmptyState01 = () => {
    return (
        <div className="px-4 py-6 md:px-6 mx-auto max-w-5xl">
            <div className="flex w-full flex-col items-center text-center rounded-lg border border-border px-6 py-8 sm:py-12">
                <div className="size-12 ui-subtle ui-subtle-gray d-flex-place-center rounded-lg">
                    <span aria-hidden="true" className="size-5 iconify ph--user"></span>
                </div>
                <h2 className="text-foreground text-lg font-semibold md:text-xl mt-4">
                    No User found
                </h2>
                <p className="text-muted-foreground text-sm mt-3">
                    You haven&apos;t created any data right now
                </p>
                <div className="flex justify-center mt-7">
                    <Button size="sm">
                        <span aria-hidden="true" className="iconify ph--plus size-3.5 mr-1.5"></span>
                        Create new User
                    </Button>
                </div>
            </div>
        </div>
    )
}
