
import { componentsData, type ComponentName } from "@/generated/components-data";
import { ViewComponentCode } from "./view-component-code";

import { PreviewerCodeUI } from "./previewer-code-ui";
import { PreviewAsIFrame } from "./preview-as-iframe";


type WithIframe = {
    noInTabs?: boolean, component: string,
} & ({
    inIframe: true;
    previewUrl: string
} | {
    inIframe: false;
    children?: never;
})





export const ComponentTabPreviewCode = ({ noInTabs, component, ...props }: WithIframe) => {
    const { Component, source } = componentsData[component as ComponentName];

    const codeblock = <ViewComponentCode code={source} />;
    if (props.inIframe) {
        return <PreviewerCodeUI isFrame={true} noInTabs={noInTabs}
            component={<PreviewAsIFrame preview={props.previewUrl} />}
            codeblock={codeblock}
        />
    }

    return <>
        <PreviewerCodeUI noInTabs={noInTabs}
            component={<Component />}
            codeblock={codeblock}
        />
    </>
}
