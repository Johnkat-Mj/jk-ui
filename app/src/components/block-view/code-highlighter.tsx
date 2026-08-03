"use client"

import { memo, useEffect, useState } from "react"
import { codeToHtml } from "shiki"

// Module-level cache: key = `${lang}::${code}`
const highlightCache = new Map<string, string>()
// In-flight deduplication: same key won't fire twice concurrently
const inFlight = new Map<string, Promise<string>>()

async function highlight(code: string, lang: string): Promise<string> {
  const key = `${lang}::${code}`
  if (highlightCache.has(key)) return highlightCache.get(key)!
  if (inFlight.has(key)) return inFlight.get(key)!

  const promise = codeToHtml(code, { lang, theme: "aurora-x" }).then((html) => {
    highlightCache.set(key, html)
    inFlight.delete(key)
    return html
  })
  inFlight.set(key, promise)
  return promise
}

export interface CodeHighlighterProps {
  plain?: boolean
  lang?: string
  code: string
  max96?: boolean
  className?: string
  removeLastLine?: boolean
}

export const CodeHighlighter = memo(function CodeHighlighter({
  lang = "tsx",
  code,
  ...props
}: CodeHighlighterProps) {
  const [formattedCode, setFormattedCode] = useState<string>(() => {
    const key = `${lang}::${code}`
    return highlightCache.get(key) ?? ""
  })
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let cancelled = false
    if (formattedCode) {
      requestAnimationFrame(() => { if (!cancelled) setVisible(true) })
      return
    }

    highlight(code, lang ?? "tsx")
      .then((html) => {
        if (!cancelled) {
          setFormattedCode(html)
          requestAnimationFrame(() => { if (!cancelled) setVisible(true) })
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError("Failed to highlight code.")
          console.error(err)
        }
      })

    return () => { cancelled = true }
  }, [code, lang, formattedCode])

  if (error) return <p>Error: {error}</p>
  if (!formattedCode) return <div />

  return (
    <figure
      {...props}
      dangerouslySetInnerHTML={{ __html: formattedCode }}
      data-code-snippet
      className={`*:py-4 w-full min-w-max transition-opacity duration-200 ease-linear ${visible ? "opacity-100" : "opacity-0"}`}
    />
  )
})