import { Card } from "@/components/jk/card"
import { Icon } from "@/components/jk/icon"

export const Kpi01 = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto my-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <div className="flex items-center">
                        <div className="size-8 text-white d-flex-place-center rounded-full bg-accent" aria-label="Total Users icon">
                            <Icon name="ph--users"/>
                        </div>
                        <h3 className="flex-1 flex text-muted-foreground ml-3">Total Users</h3>
                    </div>
                    <div className="py-3 flex text-center justify-center font-semibold text-3xl text-foreground">12,543</div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground flex-1 line-clamp-1">Total registered users</p>
                        <div className="size-6 text-white text-sm rounded-full d-flex-place-center bg-success" aria-label="Trend indicator">
                            <Icon name="ph--trend-up" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="size-8 text-white d-flex-place-center rounded-full bg-primary" aria-label="New Signups icon">
                             <Icon name="ph--user-plus"/>
                        </div>
                        <h3 className="flex-1 flex text-muted-foreground ml-3">New Signups</h3>
                    </div>
                    <div className="py-3 flex text-center justify-center font-semibold text-3xl text-foreground">342</div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground flex-1 line-clamp-1">New signups this month</p>
                        <div className="size-6 text-white text-sm rounded-full d-flex-place-center bg-success" aria-label="Trend indicator">
                            <Icon name="ph--trend-up" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="size-8 text-white d-flex-place-center rounded-full bg-success" aria-label="Active Users icon">
                            <Icon name="ph--users" />
                        </div>
                        <h3 className="flex-1 flex text-muted-foreground ml-3">Active Users</h3>
                    </div>
                    <div className="py-3 flex text-center justify-center font-semibold text-3xl text-foreground">8,921</div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground flex-1 line-clamp-1">Currently active users</p>
                        <div className="size-6 text-white text-sm rounded-full d-flex-place-center bg-success" aria-label="Trend indicator">
                            <Icon name="ph--trend-up" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="size-8 text-white d-flex-place-center rounded-full bg-warning" aria-label="Churn Rate icon">
                            <Icon name="ph--chart-line-down" />
                        </div>
                        <h3 className="flex-1 flex text-muted-foreground ml-3">Churn Rate</h3>
                    </div>
                    <div className="py-3 flex text-center justify-center font-semibold text-3xl text-foreground">2.3%</div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground flex-1 line-clamp-1">Monthly churn rate</p>
                        <div className="size-6 text-white text-sm rounded-full d-flex-place-center bg-destructive" aria-label="Trend indicator">
                            <Icon name="ph--trend-down" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
