import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Card } from "@/components/jk/card"
import { Input, InputGroup, InputLeading } from "@/components/jk/input"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    department: "Design",
    email: "sarah.chen@company.com",
    status: "active",
    initials: "SC",
    skills: ["UI Design", "Figma", "Prototyping"],
  },
  {
    name: "Michael Torres",
    role: "Full-Stack Developer",
    department: "Engineering",
    email: "michael.t@company.com",
    status: "active",
    initials: "MT",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    department: "Product",
    email: "emily.w@company.com",
    status: "active",
    initials: "EW",
    skills: ["Strategy", "Agile", "Analytics"],
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    department: "Engineering",
    email: "david.kim@company.com",
    status: "active",
    initials: "DK",
    skills: ["Python", "PostgreSQL", "AWS"],
  },
  {
    name: "Lisa Rodriguez",
    role: "Marketing Lead",
    department: "Marketing",
    email: "lisa.r@company.com",
    status: "active",
    initials: "LR",
    skills: ["SEO", "Content", "Analytics"],
  },
  {
    name: "James Wilson",
    role: "Data Analyst",
    department: "Analytics",
    email: "james.w@company.com",
    status: "away",
    initials: "JW",
    skills: ["SQL", "Tableau", "Python"],
  },
]

export const Team01 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Team</h1>
          <p className="text-sm text-muted-foreground mt-1">{teamMembers.length} members across 5 departments</p>
        </div>
        <div className="flex items-center gap-2">
          <InputGroup className="max-w-xs">
            <InputLeading absolute>
              <span className="iconify ph--magnifying-glass text-muted-foreground" />
            </InputLeading>
            <Input variant="unstyled" placeholder="Search members..." className="ps-9" />
          </InputGroup>
          <Button size="sm">
            <span aria-hidden="true" className="iconify ph--user-plus size-3.5 mr-1.5" />
            Invite
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="relative">
                <span
                  className={`block size-2.5 rounded-full ${
                    member.status === "active" ? "bg-success" : "bg-warning"
                  }`}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="iconify ph--suitcase size-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{member.department}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="soft" intent="soft-neutral" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground truncate max-w-[180px]">{member.email}</span>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <span aria-hidden="true" className="iconify ph--dots-three-vertical size-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
