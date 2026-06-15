import { BlockCode } from "./block-code"
import { CodeViewBox } from "./code-view-box"
import { RenderBlockCode } from "./render-block-code"


export const LoadSingleCode = ({ code , lang, title}: { title:string, code: string, lang: "css" | "ts" | "js" | "jsx" }) => {
    return (
        <div data-code-block
            className="border border-gray-200 dark:border-gray-800/60 p-(--card-padding) rounded-(--card-radius) [--card-padding:--spacing(1)] [--card-radius:var(--global-main-radius)] bg-gray-800 dark:bg-gray-900/50 grid mt-2.5 first:mt-0 text-gray-300">
            <BlockCode title={title} icon={"ph--brackets-curly"} copyValue={code}>
                <CodeViewBox noCopyButton className="bg-(--start-code-color-background) inner-radius">
                    <RenderBlockCode code={code} lang={lang} />
                </CodeViewBox>
            </BlockCode>
        </div>
    )
}
