import { CodeViewBox } from "./code-view-box"
import { RenderBlockCode } from "./render-block-code"

export const ViewComponentCode =async ({code}:{code:string}) => {
    return (
        <CodeViewBox source={code} className="bg-(--start-code-color-background) inner-radius">
            <RenderBlockCode code={code} lang="tsx"/>
        </CodeViewBox>
    )
}


