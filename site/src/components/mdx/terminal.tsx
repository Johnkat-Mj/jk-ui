import { BlockCode } from "./block-code"
import { CodeViewBox } from "./code-view-box"
import { RenderBlockCode } from "./render-block-code"


export const Terminal = ({ command }: { command: string }) => {
    return (
        <div data-code-block
            className="border border-gray-200 dark:border-gray-800/60 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--global-main-radius)] bg-gray-800 dark:bg-gray-900/50 grid mt-2.5 first:mt-0 text-gray-300">
            <BlockCode shellStyle title="terminal" icon={"shell"} copyValue={command}>
                <CodeViewBox noCopyButton  className="bg-(--start-code-color-background) inner-radius">
                    <RenderBlockCode code={command} lang="shell" />
                </CodeViewBox>
            </BlockCode>
        </div>
    )
}
