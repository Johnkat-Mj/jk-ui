"use client"

import { useEffect, useState } from "react"
import { getHighlightedCode } from "@/lib/shiki"
import type { SupportedLanguage } from "@/types/index"

interface RenderBlockCodeProps {
    code: string;
    lang: SupportedLanguage;
}

export const RenderBlockCode = ({ code, lang }: RenderBlockCodeProps) => {
  const [html, setHtml] = useState<string>()

  useEffect(() => {
    let active = true

    getHighlightedCode(code, lang).then((highlightedCode) => {
      if (active) setHtml(highlightedCode)
    })

    return () => {
      active = false
    }
  }, [code, lang])

  if (!html) {
    return (
      <pre data-code-snippet className="w-full overflow-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
    )
  }

  return (
    <figure
      dangerouslySetInnerHTML={{ __html: html }}
      data-code-snippet
      className="*:py-4 w-full min-w-max"
    />
  )
}
