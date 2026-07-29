"use client"

import { useEffect, useState } from "react"
import {
  getMultipleHighlights,
  type HighlightResult,
} from "@/lib/shiki"
import { DocTabCodeLoader } from "../molecules/doc-tab-code-loader"
import type { CodeItem } from "./load-code"
import { CodeLoadPanels } from "../molecules/code-load-panels"


export const LoadCodeTab = ({ data }: { data: CodeItem[] }) => {
  const [codes, setCodes] = useState<HighlightResult[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let active = true

    getMultipleHighlights(data).then((highlightedCodes) => {
      if (active) {
        setCodes(highlightedCodes)
        requestAnimationFrame(() => {
          if (active) setVisible(true)
        })
      }
    })

    return () => {
      active = false
    }
  }, [data])

  return (
    <>
      <DocTabCodeLoader values={data}>
        {codes.length > 0 ? (
          <div
            className={`transition-opacity duration-200 ease-linear ${visible ? "opacity-100" : "opacity-0"}`}
          >
            <CodeLoadPanels data={codes} />
          </div>
        ) : (
          <div className="h-32" />
        )}
      </DocTabCodeLoader>
    </>
  )
}
