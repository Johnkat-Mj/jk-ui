"use client"

import { Button } from "@/components/jk/button"
import { Input, InputGroup, InputLeading } from "@/components/jk/input"

const conversations = [
  {
    id: "msg1",
    name: "Sarah Chen",
    avatar: "SC",
    subject: "Q4 Budget Review Meeting",
    preview: "Hi team, I've scheduled the quarterly budget review for next Tuesday. Please come prepared with your department...",
    time: "2 min ago",
    unread: true,
    pinned: true,
    status: "online",
  },
  {
    id: "msg2",
    name: "Michael Torres",
    avatar: "MT",
    subject: "Updated Design System Guidelines",
    preview: "Attached are the latest updates to our design system. We've added new component variants and accessibility...",
    time: "1 hour ago",
    unread: true,
    pinned: false,
    status: "away",
  },
  {
    id: "msg3",
    name: "Emily Watson",
    avatar: "EW",
    subject: "Product Launch Timeline",
    preview: "Based on the latest sprint review, here is the updated timeline for the v2.0 launch. Key milestones include...",
    time: "3 hours ago",
    unread: false,
    pinned: false,
    status: "offline",
  },
  {
    id: "msg4",
    name: "David Kim",
    avatar: "DK",
    subject: "Server Maintenance Notification",
    preview: "This is a heads up about scheduled maintenance this weekend. We'll be upgrading our database servers...",
    time: "Yesterday",
    unread: false,
    pinned: false,
    status: "online",
  },
  {
    id: "msg5",
    name: "Lisa Rodriguez",
    avatar: "LR",
    subject: "Team Building Event RSVP",
    preview: "Don't forget to RSVP for the team building event this Friday! We have some exciting activities planned...",
    time: "Yesterday",
    unread: false,
    pinned: false,
    status: "online",
  },
]

export const Inbox01 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Inbox</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your conversations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" iconOnly aria-label="Filter">
            <span aria-hidden="true" className="iconify ph--funnel" />
          </Button>
          <Button size="sm">
            <span aria-hidden="true" className="iconify ph--plus size-3.5 mr-1.5" />
            Compose
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-3 border-b border-border bg-muted/50">
          <InputGroup>
            <InputLeading absolute>
              <span className="iconify ph--magnifying-glass text-muted-foreground" />
            </InputLeading>
            <Input variant="unstyled" placeholder="Search conversations..." className="ps-9" />
          </InputGroup>
        </div>

        <div className="divide-y divide-border">
          {conversations.map((msg) => (
            <button
              key={msg.id}
              className={`w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-muted/50 ${
                msg.unread ? "bg-primary/[0.02]" : ""
              }`}
            >
              <div className="relative shrink-0">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">{msg.avatar}</span>
                </div>
                <span
                  className={`absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-bg ${
                    msg.status === "online"
                      ? "bg-success"
                      : msg.status === "away"
                        ? "bg-warning"
                        : "bg-gray-400"
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-medium text-foreground truncate">{msg.name}</span>
                    {msg.pinned && (
                      <span aria-hidden="true" className="iconify ph--push-pin size-3 text-muted-foreground shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{msg.time}</span>
                </div>
                <p className="text-sm text-foreground mt-0.5 truncate">{msg.subject}</p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{msg.preview}</p>
              </div>
              {msg.unread && (
                <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              )}
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{conversations.length} conversations</span>
          <div className="flex items-center gap-2">
            <Button size="xs" variant="ghost" iconOnly aria-label="Previous" className="border border-input" isDisabled>
              <span aria-hidden="true" className="iconify ph--caret-left size-3" />
            </Button>
            <Button size="xs" variant="ghost" iconOnly aria-label="Next" className="border border-input">
              <span aria-hidden="true" className="iconify ph--caret-right size-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
