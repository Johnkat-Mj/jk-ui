"use client"

import type { ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { SidebarProvider, SidebarToggler, useSidebarContext } from "@/components/jk/sidebar"
import { Card } from "@/components/jk/card"
import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Icon } from "@/components/jk/icon"

const kpis = [
    {
        label: "Total Revenue",
        value: "$48,532",
        change: "+12.5%",
        trend: "up",
        icon: "ph--currency-circle-dollar",
        color: "text-primary",
    },
    {
        label: "Orders",
        value: "1,423",
        change: "+8.2%",
        trend: "up",
        icon: "ph--shopping-cart",
        color: "text-accent",
    },
    {
        label: "Avg. Order Value",
        value: "$124.32",
        change: "+3.7%",
        trend: "up",
        icon: "ph--trend-up",
        color: "text-success",
    },
    {
        label: "Conversion Rate",
        value: "3.24%",
        change: "-0.8%",
        trend: "down",
        icon: "ph--percent",
        color: "text-destructive",
    },
]

const recentOrders = [
    { id: "#ORD-0241", customer: "Sarah Johnson", email: "sarah@example.com", product: "Wireless Headphones", amount: 89.99, status: "delivered", date: "2 min ago" },
    { id: "#ORD-0240", customer: "Mike Chen", email: "mike@example.com", product: "Leather Backpack", amount: 149.99, status: "shipped", date: "15 min ago" },
    { id: "#ORD-0239", customer: "Emma Davis", email: "emma@example.com", product: "Running Shoes", amount: 129.99, status: "processing", date: "1 hour ago" },
    { id: "#ORD-0238", customer: "James Wilson", email: "james@example.com", product: "Smart Watch", amount: 249.99, status: "delivered", date: "2 hours ago" },
    { id: "#ORD-0237", customer: "Lisa Brown", email: "lisa@example.com", product: "Yoga Mat", amount: 39.99, status: "cancelled", date: "3 hours ago" },
    { id: "#ORD-0236", customer: "David Lee", email: "david@example.com", product: "Coffee Maker", amount: 79.99, status: "processing", date: "4 hours ago" },
]

const topProducts = [
    { name: "Wireless Headphones", sold: 234, revenue: "$20,766", growth: "+18%" },
    { name: "Leather Backpack", sold: 187, revenue: "$27,983", growth: "+12%" },
    { name: "Running Shoes", sold: 156, revenue: "$20,264", growth: "+24%" },
    { name: "Smart Watch", sold: 98, revenue: "$24,499", growth: "+8%" },
    { name: "Yoga Mat", sold: 87, revenue: "$3,479", growth: "+32%" },
]

const channels = [
    { name: "Direct", percentage: 35, color: "bg-primary" },
    { name: "Organic Search", percentage: 28, color: "bg-accent" },
    { name: "Social Media", percentage: 20, color: "bg-success" },
    { name: "Email", percentage: 12, color: "bg-warning" },
    { name: "Referral", percentage: 5, color: "bg-info" },
]

const statusIntent: Record<string, "soft-success" | "soft-warning" | "soft-danger" | "soft-info"> = {
    delivered: "soft-success",
    shipped: "soft-info",
    processing: "soft-warning",
    cancelled: "soft-danger",
}

export const CommerceDashboard01 = () => {
    return (
        <SidebarProvider>
            <Sidebar />
            <MainContent>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold text-foreground">Commerce Dashboard</h1>
                        <p className="text-sm text-muted-foreground mt-1">Track your store performance and sales metrics</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {kpis.map((kpi) => (
                            <Card key={kpi.label}>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{kpi.label}</span>
                                    <span aria-hidden="true" className={`iconify ${kpi.icon} size-5 ${kpi.color}`} />
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-2xl font-semibold text-foreground">{kpi.value}</span>
                                    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${kpi.trend === "up" ? "text-success" : "text-destructive"}`}>
                                        <span aria-hidden="true" className={`iconify ${kpi.trend === "up" ? "ph--trend-up" : "ph--trend-down"} size-3.5`} />
                                        {kpi.change}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4 mb-8">
                        <Card className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-foreground">Revenue Overview</h3>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <span className="size-2.5 rounded-full bg-primary" />
                                        This year
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="size-2.5 rounded-full bg-border-strong" />
                                        Last year
                                    </span>
                                </div>
                            </div>
                            <div className="h-52 rounded-lg bg-muted flex items-center justify-center">
                                <span className="text-sm text-muted-foreground">Revenue chart placeholder</span>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-foreground">Sales by Channel</h3>
                            </div>
                            <div className="space-y-4">
                                {channels.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-foreground">{item.name}</span>
                                            <span className="text-muted-foreground">{item.percentage}%</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-muted">
                                            <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4 mb-8">
                        <Card size="none" className="lg:col-span-2 rounded-lg overflow-hidden border border-border">
                            <div className="p-4 border-b border-border">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-foreground">Recent Orders</h3>
                                    <Button variant="ghost" size="xs">
                                        View all
                                        <span aria-hidden="true" className="iconify ph--arrow-right size-3.5 ml-1" />
                                    </Button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-border bg-muted/50">
                                            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Order</th>
                                            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Customer</th>
                                            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Product</th>
                                            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Amount</th>
                                            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-muted/30">
                                                <td className="px-4 py-3 font-medium text-foreground">{order.id}</td>
                                                <td className="px-4 py-3">
                                                    <div>
                                                        <div className="text-foreground">{order.customer}</div>
                                                        <div className="text-xs text-muted-foreground">{order.email}</div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-foreground">{order.product}</td>
                                                <td className="px-4 py-3 font-medium text-foreground">${order.amount.toFixed(2)}</td>
                                                <td className="px-4 py-3">
                                                    <Badge variant="soft" intent={statusIntent[order.status]} size="sm" className="inline-flex items-center gap-x-1 font-medium capitalize">
                                                        <span className="size-2 rounded-full bg-current" />
                                                        {order.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        <Card size="none" className="rounded-lg overflow-hidden border border-border">
                            <div className="p-4 border-b border-border">
                                <h3 className="text-sm font-semibold text-foreground">Top Products</h3>
                            </div>
                            <div className="divide-y divide-border">
                                {topProducts.map((product) => (
                                    <div key={product.name} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30">
                                        <div className="size-8 rounded-lg bg-muted/60 d-flex-place-center text-muted-foreground">
                                            <Icon name="ph--package" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                                            <p className="text-xs text-muted-foreground">{product.sold} sold &middot; {product.revenue}</p>
                                        </div>
                                        <span className="text-xs font-medium text-success">{product.growth}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </MainContent>
        </SidebarProvider>
    )
}

const MainContent = ({ children }: { children: ReactNode }) => {
    const { isResizedSidebar } = useSidebarContext()
    return <div className={`
        flex-1 flex flex-col h-full relative overflow-hidden bg-background
        ${
            isResizedSidebar ? "md:pl-16" :"md:pl-64"
        }
    `}>
        <header className="h-14 bg-background border-b border-border/60 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <div className="flex md:hidden border-r border-border pr-2 -ml-2">
                    <SidebarToggler aria-label="Open Sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="size-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" /><path d="m14 9 3 3-3 3" />
                        </svg>
                    </SidebarToggler>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="iconify ph--calendar size-3.5" />
                    <span>Jan 1 - Mar 31, 2026</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                    <span aria-hidden="true" className="iconify ph--download-simple size-4" />
                    <span className="hidden sm:inline ml-1">Export</span>
                </Button>
                <Button variant="ghost" size="sm" iconOnly>
                    <span aria-hidden="true" className="iconify ph--bell size-4" />
                </Button>
            </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
            {children}
        </div>
    </div>
}
