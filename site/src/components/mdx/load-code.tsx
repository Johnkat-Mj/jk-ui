
import { LoadCodeTab } from "./load-code-tab";
import { LoadSingleCode } from "./load-single-code";
import { codeConfig } from "@/data/code-theme";


export interface CodeItem {
  key: string,
  lang: "css" | "ts" | "js" | "jsx";
  title: string;
  code: string;
}
export const LoadCode = ({ values }: { values: string[] }) => {
  const selectedData: CodeItem[] = values
    .filter((key) => codeConfig[key])
    .map((key) => ({
      key: key,
      ...codeConfig[key],
    }));
  return (
    <>
      {
        selectedData.length === 0 ? <>
          OOps
        </> :
          selectedData.length === 1 ?
            <LoadSingleCode code={selectedData[0].code} lang={selectedData[0].lang} title={selectedData[0].title} /> : <>
              <LoadCodeTab data={selectedData} />
            </>
      }
    </>
  )
}
