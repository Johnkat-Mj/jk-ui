import { codeToHast } from "shiki"
import { visit } from "unist-util-visit"
import type { Element, Root } from "hast"

function collectText(node: any): string {
  if (node.type === "text") return node.value
  if (node.children) return node.children.map(collectText).join("")
  return ""
}

export function rehypeShiki() {
  return async (tree: Root) => {
    const promises: Promise<void>[] = []
    visit(tree, "element", (node: Element, index: number | undefined, parent: any | undefined) => {
      if (
        node.tagName !== "pre" ||
        parent === undefined ||
        index === undefined
      )
        return

      const code = node.children?.find(
        (c: any) => c.type === "element" && c.tagName === "code",
      ) as Element | undefined

      if (!code) return

      const lang = (
        Array.isArray(code.properties?.className)
          ? code.properties.className
          : []
      ).find((c: any) => typeof c === "string" && c.startsWith("language-"))

      if (!lang) return

      const langName = (lang as string).replace("language-", "")
      const codeText = collectText(code)

      promises.push(
        codeToHast(codeText, { lang: langName, theme: "aurora-x" }).then(
          (hast) => {
            const highlightedPre = (hast as Root).children[0]
            if (highlightedPre) {
              parent.children.splice(index, 1, highlightedPre)
            }
          },
        ),
      )
    })
    await Promise.all(promises)
  }
}
