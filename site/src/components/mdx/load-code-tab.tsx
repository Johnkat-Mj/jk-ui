import { getMultipleHighlights } from "@/lib/shiki"
import { DocTabCodeLoader } from "../molecules/doc-tab-code-loader"
import type { CodeItem } from "./load-code"
import { CodeLoadPanels } from "../molecules/code-load-panels"


export const LoadCodeTab = async ({ data }: { data: CodeItem[] }) => {
  const codes = await getMultipleHighlights(data)
  return (
    <>
      <DocTabCodeLoader values={data}>
        <CodeLoadPanels data={codes} />
      </DocTabCodeLoader>
    </>
  )
}
