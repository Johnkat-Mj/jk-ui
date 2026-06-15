import { source, compSource } from "@/lib/source"
import type { StructuredData } from "fumadocs-core/mdx-plugins/remark-structure"

export interface SearchItem {
  slug: string
  title: string
  description: string
  // section heading this result lives under (null = page-level hit)
  sectionTitle?: string
  type: "component" | "documentation" | "theme"
  isComponent: boolean
  isDocumentation: boolean
  isTheming: boolean
  keywords?: string[]
  // raw text used for matching
  _searchText: string
}

type PageData = {
  title: string
  description?: string
  keywords?: string
  structuredData: StructuredData
}

const THEMING_PREFIXES = ["/docs/theme"]
const THEMING_EXACT = new Set(["/docs/dark-mode"])

function isTheming(url: string) {
  return THEMING_EXACT.has(url) || THEMING_PREFIXES.some((p) => url.startsWith(p))
}

function buildFromPages(
  pages: ReturnType<typeof source.getPages>,
  isComp: boolean
): SearchItem[] {
  const items: SearchItem[] = []

  for (const page of pages) {
    const data = page.data as unknown as PageData
    const theming = !isComp && isTheming(page.url)
    const type = isComp ? "component" : theming ? "theme" : "documentation"
    const keywords = data.keywords?.split(/[,\s]+/).filter(Boolean)
    const description = data.description ?? ""

    // Page-level entry
    items.push({
      slug: page.url,
      title: data.title,
      description,
      type,
      isComponent: isComp,
      isDocumentation: !isComp,
      isTheming: theming,
      keywords,
      _searchText: [data.title, description, data.keywords ?? ""].join(" ").toLowerCase(),
    })

    // Section-level entries from structuredData
    const { headings, contents } = data.structuredData

    for (const heading of headings) {
      if (!heading.content) continue
      items.push({
        slug: `${page.url}#${heading.id}`,
        title: heading.content,
        description: data.title, // parent page as context
        sectionTitle: heading.content,
        type,
        isComponent: isComp,
        isDocumentation: !isComp,
        isTheming: theming,
        keywords,
        _searchText: [heading.content, data.title].join(" ").toLowerCase(),
      })
    }

    for (const block of contents) {
      if (!block.content.trim()) continue
      const parentHeading = block.heading
        ? headings.find((h) => h.id === block.heading)?.content
        : undefined
      items.push({
        slug: parentHeading
          ? `${page.url}#${block.heading}`
          : page.url,
        title: parentHeading ?? data.title,
        description: block.content,
        sectionTitle: parentHeading,
        type,
        isComponent: isComp,
        isDocumentation: !isComp,
        isTheming: theming,
        keywords,
        _searchText: [block.content, parentHeading ?? "", data.title].join(" ").toLowerCase(),
      })
    }
  }

  return items
}

export const searchData: SearchItem[] = [
  ...buildFromPages(source.getPages(), false),
  ...buildFromPages(compSource.getPages(), true),
]
