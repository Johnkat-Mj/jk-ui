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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let active = true

    getHighlightedCode(code, lang).then((highlightedCode) => {
      if (active) {
        setHtml(highlightedCode)
        requestAnimationFrame(() => {
          if (active) setVisible(true)
        })
      }
    })

    return () => {
      active = false
    }
  }, [code, lang])

  if (!html) {
    return <div className="min-h-4" />
  }

  return (
    <figure
      dangerouslySetInnerHTML={{ __html: html }}
      data-code-snippet
      className={`*:py-4 w-full min-w-max transition-opacity duration-200 ease-linear ${visible ? "opacity-100" : "opacity-0"}`}
    />
  )
}
