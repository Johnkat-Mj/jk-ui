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

  useEffect(() => {
    let active = true

    getMultipleHighlights(data).then((highlightedCodes) => {
      if (active) setCodes(highlightedCodes)
    })

    return () => {
      active = false
    }
  }, [data])

  return (
    <>
      <DocTabCodeLoader values={data}>
        <CodeLoadPanels data={codes} />
      </DocTabCodeLoader>
    </>
  )
}
