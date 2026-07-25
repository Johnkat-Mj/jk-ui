import { Button } from "@/components/jk/button"


const EmptyUi = () => <span className="btn btn-sm justify-center text-center text-fg-muted relative">
    <span className="invisible">Click me</span>
    <span className="absolute left-1/2 top-1/2 -translate-1/2">-</span>
</span>
export const ButtonVariants = () => {
    return (
        <div>
            <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 overflow-hidden">
                <div className="grid text-sm text-fg-muted mt-14 pl-3 sm:pl-0">
                    <div>Primary</div>
                    <div>Secondry</div>
                    <div>Accent</div>
                    <div>Destructive</div>
                    <div>Gray</div>
                    <div>Neutral</div>
                    <div>White</div>
                </div>
                <div className="grid overflow-hidden">
                    <div data-invisible-scrollbar className="grid overflow-x-auto">
                        <div className="grid grid-cols-4 gap-4 px-4 text-sm text-fg-muted pb-3">
                            <div>Solid</div>
                            <div>Outline</div>
                            <div>Soft</div>
                            <div>Ghost</div>
                        </div>
                        <div className="p-4 rounded-md border border-border-strong/60 gap-4 grid min-w-max">
                            {/* Primary */}
                            <div className="flex items-center gap-x-4">
                                <Button size="sm" variant="solid" intent="primary">
                                    Click Me
                                </Button>
                                <EmptyUi />
                                <Button size="sm" variant="soft" intent="primary">
                                    Click Me
                                </Button>
                                <EmptyUi />
                            </div>

                            {/* Secondary */}
                            <div className="flex items-center gap-x-4">
                                <Button size="sm" variant="solid" intent="secondary">
                                    Click Me
                                </Button>
                                <EmptyUi />
                                <EmptyUi />
                                <EmptyUi />
                            </div>

                            {/* Accent */}
                            <div className="flex items-center gap-x-4">
                                <Button size="sm" variant="solid" intent="accent">
                                    Click Me
                                </Button>
                                <EmptyUi />
                                <EmptyUi />
                                <EmptyUi />
                            </div>

                            {/* Destructive */}
                            <div className="flex items-center gap-x-4">
                                <Button size="sm" variant="solid" intent="destructive">
                                    Click Me
                                </Button>
                                <EmptyUi />
                                <Button size="sm" variant="soft" intent="destructive">
                                    Click Me
                                </Button>
                                <EmptyUi />
                            </div>

                            {/* Gray - Outline */}
                            <div className="flex items-center gap-x-4">
                                <EmptyUi />
                                <Button size="sm" variant="outline">
                                    Click Me
                                </Button>
                                <Button size="sm" variant="soft">
                                    Click Me
                                </Button>
                                <Button size="sm" variant="ghost">
                                    Click Me
                                </Button>
                            </div>

                            {/* Gray - Outline */}
                            <div className="flex items-center gap-x-4">
                                <Button size="sm" intent="neutral">
                                    Click Me
                                </Button>
                                <EmptyUi />

                            </div>

                            {/* Gray - Outline */}
                            <div className="flex items-center gap-x-4">
                                <EmptyUi />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
