import { Card } from "@/components/jk/card"

export const Kpi03 = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto my-4">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Conversion Rate
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-foreground">3.2%</span>
                            <div className="flex items-center space-x-1 text-xs font-medium text-green-600">
                                <span className="text-xs iconify ph--trend-up"></span>
                                <span>+0.5%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card >
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Bounce Rate
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-foreground">42.3%</span>
                            <div className="flex items-center space-x-1 text-xs font-medium text-destructive">
                                <span className="text-xs iconify ph--trend-up"></span>
                                <span>-1.2%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Session Duration
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-foreground">4m 32s</span>
                            <div className="flex items-center space-x-1 text-xs font-medium text-success">
                                <span className="text-xs iconify ph--trend-up"></span>
                                <span>+12%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            New Visitors
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-foreground">1,429 </span>
                            <div className="flex items-center space-x-1 text-xs font-medium text-success">
                                <span className="text-xs iconify ph--trend-up"></span>
                                <span>+23%</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
