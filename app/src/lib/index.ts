export const isInternalLink = (href: string) => {
    return (typeof href === "string" &&
        (href.startsWith("/") || href.startsWith("#")));
}


export const splitSlugUrl = (value: string) => value.includes("/") ? value.split('/') : [value]


export type TocItem = { depth: number; value: string; url: string }

export type GroupedHeading = {
    slug: string
    text: string
    subheadings: { slug: string; text: string }[]
}

const reactNodeToString = (node: unknown): string => {
    if (node == null) return ''
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (typeof node === 'boolean') return ''
    if (Array.isArray(node)) return node.map(reactNodeToString).join('')
    if (typeof node === 'object' && 'props' in node) {
        const element = node as { props?: { children?: unknown } }
        return reactNodeToString(element.props?.children)
    }
    return String(node)
}

export const groupHeadings = (toc: TocItem[]): GroupedHeading[] => {
    const grouped: GroupedHeading[] = []
    let currentH2: GroupedHeading | null = null

    for (const item of toc) {
        if (item.depth === 2) {
            currentH2 = {
                slug: item.url,
                text: item.value,
                subheadings: []
            }
            grouped.push(currentH2)
        }
        else if (item.depth === 3 && currentH2) {
            currentH2.subheadings.push({
                slug: item.url,
                text: item.value
            })
        }
    }

    return grouped
}

interface CopyToClipboardOptions {
    snippet: HTMLElement | string | undefined | null
    onCopy?: () => void
    onCopyCompleted?: () => void
    timeout?: number
  }


export const copyToClipboard = ({
    snippet,
    onCopy,
    onCopyCompleted,
    timeout = 1000
  }: CopyToClipboardOptions) => {
    if (snippet instanceof HTMLElement || typeof snippet === 'string') {
      let valueToCopy = ''
      let timer: NodeJS.Timeout | null = null

      const startTimeout = (callback: () => void) => {
        timer = setTimeout(() => {
          callback()
        }, timeout)
      }

      const cancelTimeout = () => {
        if (timer) clearTimeout(timer)
      }

      valueToCopy = typeof snippet === 'string' ? snippet : snippet.innerText

      onCopy && onCopy()
      navigator.clipboard.writeText(valueToCopy).then(() => {
        if (onCopyCompleted) {
          startTimeout(() => {
            onCopyCompleted()
            cancelTimeout()
          })
        }
      })
    }
  }

  export function absoluteUrl(path: string) {
    const base = import.meta.env.VITE_APP_URL || "https://jk-ui.unoforge.com"
    return `${base}${path}`
  }
