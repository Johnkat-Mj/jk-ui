import { allDocs, allComponents } from "content-collections"

export interface SearchItem {
  slug: string
  title: string
  description: string
  sectionTitle?: string
  type: "component" | "documentation" | "theme"
  isComponent: boolean
  isDocumentation: boolean
  isTheming: boolean
  keywords?: string[]
  _searchText: string
}

const THEMING_PREFIXES = ["/docs/theme"]
const THEMING_EXACT = new Set(["/docs/dark-mode"])

function isTheming(slug: string) {
  const url = `/${slug}`
  return THEMING_EXACT.has(url) || THEMING_PREFIXES.some((p) => url.startsWith(p))
}

function buildFromDocs(
  docs: Array<{
    _meta: { path: string }
    title: string
    description: string
    keywords?: string
    toc: Array<{ depth: number; value: string; url: string }>
  }>,
  isComp: boolean
): SearchItem[] {
  const items: SearchItem[] = []

  for (const doc of docs) {
    const slug = doc._meta.path
    const url = `/${slug}`
    const theming = !isComp && isTheming(slug)
    const type = isComp ? "component" : theming ? "theme" : "documentation"
    const keywords = doc.keywords?.split(/[,\s]+/).filter(Boolean)

    items.push({
      slug: url,
      title: doc.title,
      description: doc.description,
      type,
      isComponent: isComp,
      isDocumentation: !isComp,
      isTheming: theming,
      keywords,
      _searchText: [doc.title, doc.description, doc.keywords ?? ""].join(" ").toLowerCase(),
    })

    for (const heading of doc.toc) {
      if (!heading.value) continue
      items.push({
        slug: `${url}${heading.url}`,
        title: heading.value,
        description: doc.title,
        sectionTitle: heading.value,
        type,
        isComponent: isComp,
        isDocumentation: !isComp,
        isTheming: theming,
        keywords,
        _searchText: [heading.value, doc.title].join(" ").toLowerCase(),
      })
    }
  }

  return items
}

export const searchData: SearchItem[] = [
  ...buildFromDocs(allDocs as any, false),
  ...buildFromDocs(allComponents as any, true),
]
