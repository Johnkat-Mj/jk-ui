import { Card } from "@/components/jk/card"


export const Activity01 = () => {
    return (
        <Card size="none" className="rounded-ui mx-auto max-w-sm my-5">
            <div className="flex items-center justify-between p-4 pb-4">
                <h4 className="text-lg font-semibold">Recent Activity</h4>
                <button className="btn btn-icon-sm btn-ghost btn-ghost-gray rounded-md">
                    <span aria-hidden="true" className="iconify ph--dots-three-vertical"></span>
                </button>
            </div>
            <div className="px-6 pb-6 space-y-4">
               <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-bg-subtle/50 transition-colors">
                    <div className="size-8 rounded-full overflow-hidden">
                        <img src="/defaultavatar.webp" alt="Sarah Chen" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                            <span aria-hidden="true" className="iconify ph--user text-sm text-primary"></span>
                            <p className="text-sm">
                                <span className="font-medium text-fg">Mike Johnson</span>
                                <span className="text-fg-muted ml-1">liked your article</span>
                            </p>
                        </div>
                        <p className="text-sm text-fg-muted bg-bg-subtle p-2 rounded border-l-2 border-primary">
                            Building Modern Dashboard Components
                        </p>
                        <p className="text-xs text-fg-muted">15 minutes ago</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-bg-subtle/50 transition-colors">
                    <div className="size-8 rounded-full overflow-hidden">
                        <img src="/defaultavatar.webp" alt="Sarah Chen" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                            <span aria-hidden="true" className="iconify ph--user text-sm text-primary"></span>
                            <p className="text-sm">
                                <span className="font-medium text-fg">Mike Johnson</span>
                                <span className="text-fg-muted ml-1">liked your article</span>
                            </p>
                        </div>
                        <p className="text-sm text-fg-muted bg-bg-subtle p-2 rounded border-l-2 border-primary">
                            Building Modern Dashboard Components
                        </p>
                        <p className="text-xs text-fg-muted">15 minutes ago</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-bg-subtle/50 transition-colors">
                    <div className="size-8 rounded-full overflow-hidden">
                        <img src="/defaultavatar.webp" alt="Sarah Chen" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                            <span aria-hidden="true" className="iconify ph--share text-sm text-primary"></span>
                            <p className="text-sm">
                                <span className="font-medium text-fg">Emma Wilson</span>
                                <span className="text-fg-muted ml-1">shared your post</span>
                            </p>
                        </div>
                        <p className="text-sm text-fg-muted bg-bg-subtle p-2 rounded border-l-2 border-primary">
                            UI/UX Best Practices for 2024
                        </p>
                        <p className="text-xs text-fg-muted">1 hour ago</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
