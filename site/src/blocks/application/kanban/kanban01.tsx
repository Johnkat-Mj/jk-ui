"use client"

import { Avatar } from "@/components/jk/avatar"
import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"

interface Task {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  assignee: string
  assigneeInitials: string
  comments: number
  attachments: number
}

interface Column {
  id: string
  title: string
  color: string
  tasks: Task[]
}

const columns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-400",
    tasks: [
      {
        id: "t1",
        title: "Design system audit",
        description: "Review all components for consistency",
        priority: "high",
        assignee: "SC",
        assigneeInitials: "SC",
        comments: 3,
        attachments: 2,
      },
      {
        id: "t2",
        title: "User research analysis",
        description: "Compile findings from latest interviews",
        priority: "medium",
        assignee: "EW",
        assigneeInitials: "EW",
        comments: 1,
        attachments: 5,
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-primary",
    tasks: [
      {
        id: "t3",
        title: "Dashboard redesign",
        description: "Implement new KPI layout with charts",
        priority: "high",
        assignee: "MT",
        assigneeInitials: "MT",
        comments: 7,
        attachments: 4,
      },
      {
        id: "t4",
        title: "API integration",
        description: "Connect frontend to new backend endpoints",
        priority: "high",
        assignee: "DK",
        assigneeInitials: "DK",
        comments: 2,
        attachments: 1,
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "bg-warning",
    tasks: [
      {
        id: "t5",
        title: "Onboarding flow",
        description: "Review new user onboarding experience",
        priority: "medium",
        assignee: "LR",
        assigneeInitials: "LR",
        comments: 5,
        attachments: 3,
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-success",
    tasks: [
      {
        id: "t6",
        title: "Dark mode support",
        description: "Implement theme switching system",
        priority: "low",
        assignee: "MJ",
        assigneeInitials: "MJ",
        comments: 0,
        attachments: 0,
      },
      {
        id: "t7",
        title: "Mobile responsive nav",
        description: "Fix navigation on tablet and mobile",
        priority: "medium",
        assignee: "SC",
        assigneeInitials: "SC",
        comments: 2,
        attachments: 1,
      },
    ],
  },
]

const priorityColors: Record<string, string> = {
  high: "bg-destructive",
  medium: "bg-warning",
  low: "bg-gray-400",
}

export const Kanban01 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Kanban Board</h1>
          <p className="text-sm text-muted-foreground mt-1">Sprint 4 — Q2 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" iconOnly aria-label="Filter">
            <span aria-hidden="true" className="iconify ph--funnel" />
          </Button>
          <Button size="sm">
            <span aria-hidden="true" className="iconify ph--plus size-3.5 mr-1.5" />
            Add Task
          </Button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.id} className="min-w-72 w-72 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`size-2.5 rounded-full ${column.color}`} />
                <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted rounded-md px-1.5 py-0.5">
                  {column.tasks.length}
                </span>
              </div>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <span aria-hidden="true" className="iconify ph--dots-three-vertical size-4" />
              </button>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task) => (
                <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className={`size-2 rounded-full ${priorityColors[task.priority]}`} />
                      <Badge
                        variant="soft"
                        intent={
                          task.priority === "high"
                            ? "soft-danger"
                            : task.priority === "medium"
                              ? "soft-warning"
                              : "soft-success"
                        }
                        size="sm"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{task.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Avatar size="xs" text={task.assigneeInitials} variant="solid" intent="solid-neutral" />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {task.comments > 0 && (
                          <span className="flex items-center gap-1">
                            <span aria-hidden="true" className="iconify ph--chat-circle size-3.5" />
                            {task.comments}
                          </span>
                        )}
                        {task.attachments > 0 && (
                          <span className="flex items-center gap-1">
                            <span aria-hidden="true" className="iconify ph--paperclip size-3.5" />
                            {task.attachments}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                <span aria-hidden="true" className="iconify ph--plus size-3.5" />
                Add card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
