"use client"

import { Avatar } from "@/components/jk/avatar"
import { Button } from "@/components/jk/button"
import { Input, InputGroup, InputLeading } from "@/components/jk/input"

interface Message {
  id: string
  sender: string
  initials: string
  content: string
  time: string
  isOwn: boolean
}

const contacts = [
  { name: "Alex Morgan", initials: "AM", status: "online", lastMsg: "Sure, sounds good!", time: "2m", unread: 2 },
  { name: "Sarah Chen", initials: "SC", status: "online", lastMsg: "I'll share the figma file", time: "15m", unread: 0 },
  { name: "Mike Torres", initials: "MT", status: "away", lastMsg: "Let me check", time: "1h", unread: 1 },
  { name: "Emily Watson", initials: "EW", status: "offline", lastMsg: "Meeting at 3pm", time: "2h", unread: 0 },
  { name: "David Kim", initials: "DK", status: "online", lastMsg: "PR is ready for review", time: "3h", unread: 0 },
]

const messages: Message[] = [
  { id: "m1", sender: "Alex Morgan", initials: "AM", content: "Hey! Have you seen the new dashboard designs?", time: "10:24 AM", isOwn: false },
  { id: "m2", sender: "You", initials: "You", content: "Not yet, let me take a look. Are they in Figma?", time: "10:25 AM", isOwn: true },
  { id: "m3", sender: "Alex Morgan", initials: "AM", content: "Yes, I just shared them. The new KPI cards look amazing!", time: "10:26 AM", isOwn: false },
  { id: "m4", sender: "Alex Morgan", initials: "AM", content: "Also the dark mode support is much better now", time: "10:26 AM", isOwn: false },
  { id: "m5", sender: "You", initials: "You", content: "Great, I'll review them and share feedback by EOD", time: "10:28 AM", isOwn: true },
  { id: "m6", sender: "Alex Morgan", initials: "AM", content: "Perfect! Also, should we add the team page this sprint?", time: "10:29 AM", isOwn: false },
  { id: "m7", sender: "You", initials: "You", content: "Sure, sounds good!", time: "10:30 AM", isOwn: true },
]

export const Chat01 = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="rounded-lg border border-border overflow-hidden flex h-[600px]">
        <div className="w-72 shrink-0 border-r border-border hidden md:flex flex-col">
          <div className="p-3 border-b border-border">
            <InputGroup>
<InputLeading absolute>
              <span className="iconify ph--magnifying-glass text-muted-foreground" />
            </InputLeading>
              <Input variant="unstyled" placeholder="Search contacts..." className="ps-9" />
            </InputGroup>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-border">
            {contacts.map((contact) => (
              <button
                key={contact.name}
                className={`w-full flex items-center gap-3 p-3 text-left transition-colors hover:bg-muted/50 ${
                  contact.name === "Alex Morgan" ? "bg-primary/[0.02]" : ""
                }`}
              >
                <div className="relative shrink-0">
                  <Avatar size="sm" text={contact.initials} variant="solid" intent="solid-neutral" />
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-bg ${
                      contact.status === "online"
                        ? "bg-success"
                        : contact.status === "away"
                          ? "bg-warning"
                          : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground truncate">{contact.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0 ml-1">{contact.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{contact.lastMsg}</p>
                </div>
                {contact.unread > 0 && (
                  <div className="size-5 rounded-full bg-primary text-white text-[10px] font-medium flex items-center justify-center shrink-0">
                    {contact.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Avatar size="sm" text="AM" variant="solid" intent="solid-neutral" />
              <div>
                <p className="text-sm font-medium text-foreground">Alex Morgan</p>
                <p className="text-xs text-success">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button size="xs" variant="ghost" iconOnly aria-label="Call">
                <span aria-hidden="true" className="iconify ph--phone size-4" />
              </Button>
              <Button size="xs" variant="ghost" iconOnly aria-label="Video">
                <span aria-hidden="true" className="iconify ph--video-camera size-4" />
              </Button>
              <Button size="xs" variant="ghost" iconOnly aria-label="More">
                <span aria-hidden="true" className="iconify ph--dots-three-vertical size-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-2 max-w-[80%] ${msg.isOwn ? "flex-row-reverse" : ""}`}>
                  {!msg.isOwn && (
                    <Avatar size="xs" text={msg.initials} variant="solid" intent="solid-neutral" className="mt-1 shrink-0" />
                  )}
                  <div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        msg.isOwn
                          ? "bg-primary text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <p className={`text-[10px] text-muted-foreground mt-0.5 ${msg.isOwn ? "text-right" : "text-left"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border">
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <Button size="xs" variant="ghost" iconOnly aria-label="Attach file" type="button">
                <span aria-hidden="true" className="iconify ph--paperclip-tilt size-4" />
              </Button>
              <Input
                variant="unstyled"
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button size="sm" type="submit">
                <span aria-hidden="true" className="iconify ph--paper-plane-right size-3.5 mr-1.5" />
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
