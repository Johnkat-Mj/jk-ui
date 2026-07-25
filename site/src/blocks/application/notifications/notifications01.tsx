"use client"

import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"

const notifications = [
  {
    id: "n1",
    icon: "ph--user-circle",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "New team member joined",
    description: "Alex Morgan has joined the Design team",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: "n2",
    icon: "ph--star",
    color: "text-warning",
    bg: "bg-warning/10",
    title: "Project milestone completed",
    description: "Sprint 4 has been marked as complete. Great work team!",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "n3",
    icon: "ph--check-circle",
    color: "text-success",
    bg: "bg-success/10",
    title: "Deployment successful",
    description: "v2.5.0 has been deployed to production successfully",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: "n4",
    icon: "ph--warning-circle",
    color: "text-destructive",
    bg: "bg-destructive/10",
    title: "Server alert",
    description: "CPU usage exceeded 85% on production server",
    time: "5 hours ago",
    unread: false,
  },
  {
    id: "n5",
    icon: "ph--calendar-check",
    color: "text-accent",
    bg: "bg-accent/10",
    title: "Meeting reminder",
    description: "Sprint planning starts in 15 minutes",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "n6",
    icon: "ph--currency-circle-dollar",
    color: "text-success",
    bg: "bg-success/10",
    title: "Invoice paid",
    description: "Invoice #INV-2026-0421 has been paid",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "n7",
    icon: "ph--git-pull-request",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "New pull request",
    description: "David opened a PR: feat/improve-search-algorithm",
    time: "2 days ago",
    unread: false,
  },
]

export const Notifications01 = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground mt-1">Stay updated with the latest activity</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="solid" intent="solid-primary" size="sm" className="shrink-0">
            {notifications.filter((n) => n.unread).length} new
          </Badge>
          <Button size="sm" variant="ghost">
            <span aria-hidden="true" className="iconify ph--check-circle size-4 mr-1.5" />
            Mark all read
          </Button>
        </div>
      </div>

      <Card size="none" className="rounded-lg overflow-hidden divide-y divide-border">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-3 p-4 transition-colors hover:bg-muted/50 cursor-pointer ${
              n.unread ? "bg-primary/[0.02]" : ""
            }`}
          >
            <div className={`size-10 rounded-lg ${n.bg} flex items-center justify-center shrink-0`}>
              <span aria-hidden="true" className={`iconify ${n.icon} size-5 ${n.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className={`text-sm ${n.unread ? "font-semibold text-foreground" : "font-medium text-foreground"}`}>
                  {n.title}
                </p>
                {n.unread && <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{n.description}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </Card>

      <div className="flex justify-center mt-6">
        <Button variant="ghost" size="sm">
          <span aria-hidden="true" className="iconify ph--clock-counter-clockwise size-4 mr-1.5" />
          View all notifications
        </Button>
      </div>
    </div>
  )
}
