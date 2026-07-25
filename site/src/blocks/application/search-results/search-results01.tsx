import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Input, InputGroup, InputLeading, InputTrailing } from "@/components/jk/input"

const results = [
  {
    title: "Getting Started with the Dashboard",
    url: "docs.company.com/getting-started/dashboard",
    description: "Learn how to navigate the main dashboard, understand key metrics, and customize your view to track what matters most to your team.",
    type: "Documentation",
    icon: "ph--file-text",
    category: "Docs",
  },
  {
    title: "User Settings & Preferences Guide",
    url: "docs.company.com/account/settings",
    description: "Configure your account settings, notification preferences, and appearance options to personalize your experience.",
    type: "Guide",
    icon: "ph--gear",
    category: "Account",
  },
  {
    title: "API Integration Documentation v2.5",
    url: "docs.company.com/api/v2.5",
    description: "Complete API reference covering authentication, endpoints, rate limiting, and webhook integration for developers.",
    type: "API Reference",
    icon: "ph--code",
    category: "Developers",
  },
  {
    title: "Team Collaboration Best Practices",
    url: "docs.company.com/collaboration/best-practices",
    description: "Tips and workflows for effective team collaboration including shared boards, real-time editing, and communication tools.",
    type: "Article",
    icon: "ph--users-three",
    category: "Team",
  },
  {
    title: "Billing & Subscription Management",
    url: "docs.company.com/billing/overview",
    description: "Understanding your billing cycle, managing payment methods, viewing invoices, and upgrading or downgrading your plan.",
    type: "Documentation",
    icon: "ph--credit-card",
    category: "Billing",
  },
  {
    title: "Security & Compliance Overview",
    url: "docs.company.com/security/overview",
    description: "Our security framework, data protection measures, compliance certifications, and best practices for keeping your data safe.",
    type: "Guide",
    icon: "ph--shield-check",
    category: "Security",
  },
]

const filters = ["All", "Documentation", "Guides", "API Reference", "Articles", "Tutorials"]

export const SearchResults01 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-4">Search</h1>
        <InputGroup className="max-w-2xl">
          <InputLeading absolute>
            <span className="iconify ph--magnifying-glass text-muted-foreground" />
          </InputLeading>
          <Input variant="unstyled" placeholder="Search documentation..." className="ps-9" defaultValue="dashboard setup" />
          <InputTrailing absolute className="flex items-center gap-0.5 pe-3">
            <kbd className="text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5 font-mono">⌘K</kbd>
          </InputTrailing>
        </InputGroup>
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{results.length}</span> results for &quot;dashboard setup&quot;
        </p>
        <div className="flex items-center gap-1">
          <Button size="xs" variant="ghost" iconOnly aria-label="List view">
            <span aria-hidden="true" className="iconify ph--list size-4" />
          </Button>
          <Button size="xs" variant="ghost" iconOnly aria-label="Grid view">
            <span aria-hidden="true" className="iconify ph--squares-four size-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant={filter === "All" ? "solid" : "soft"}
            intent={filter === "All" ? "solid-primary" : "soft-neutral"}
            size="sm"
            className="cursor-pointer"
          >
            {filter}
          </Badge>
        ))}
      </div>

      <div className="space-y-3">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-border hover:border-border hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                <span aria-hidden="true" className={`iconify ${result.icon} size-4.5 text-muted-foreground`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-medium text-primary hover:underline">{result.title}</h3>
                  <Badge variant="soft" intent="soft-neutral" size="sm">{result.type}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1 truncate">{result.url}</p>
                <p className="text-sm text-foreground line-clamp-2">{result.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5">{result.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <Button size="sm" variant="outline" iconOnly aria-label="Previous page" isDisabled>
          <span aria-hidden="true" className="iconify ph--caret-left size-3.5" />
        </Button>
        <Button size="sm" variant="solid" intent="solid-primary" className="min-w-9">1</Button>
        <Button size="sm" variant="ghost" className="min-w-9">2</Button>
        <Button size="sm" variant="ghost" className="min-w-9">3</Button>
        <span className="text-xs text-muted-foreground px-1">...</span>
        <Button size="sm" variant="ghost" className="min-w-9">8</Button>
        <Button size="sm" variant="outline" iconOnly aria-label="Next page">
          <span aria-hidden="true" className="iconify ph--caret-right size-3.5" />
        </Button>
      </div>
    </div>
  )
}
