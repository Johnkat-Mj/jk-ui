import { DisclosureGroup, DisclosurePanel, DisclosureItem, DisclosureItemTrigger, DisclosureItemTriggerIndicator } from '@/components/jk/disclosure-group'


export const DisclosureGroupCustom = () => {
    return (
        <DisclosureGroup variant="outline" withIndicator={false} className={`
            max-w-md w-full gap-y-0 [--disclosure-radius:0px]
            *:first:rounded-t-ui
            *:last:rounded-b-ui *:not-last:border-b-0
            `}>
            <DisclosureItem id={1}>
                <DisclosureItemTrigger className={"hover:bg-bg-surface gap-3"}>
                    <DisclosureItemTriggerIndicator type="icon" icon="ph--caret-right-fill text-xs group-aria-expanded:rotate-90" />
                    <div className="flex flex-1">
                        What is a VPS?
                    </div>
                </DisclosureItemTrigger>
                <DisclosurePanel>
                    A VPS is a Virtual Private Server, which provides dedicated resources on a server shared
                    with other users, offering more control and customization than shared hosting.
                </DisclosurePanel>
            </DisclosureItem>
            <DisclosureItem id={2}>
                <DisclosureItemTrigger className={"hover:bg-bg-surface gap-3"}>
                    <DisclosureItemTriggerIndicator type="icon" icon="ph--caret-right-fill text-xs group-aria-expanded:rotate-90" />
                    <div className="flex flex-1">
                        What is cloud hosting?
                    </div>
                </DisclosureItemTrigger>
                <DisclosurePanel>
                    Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of
                    being hosted on a single server, your data and resources are spread across multiple
                    servers, improving reliability and scalability.
                </DisclosurePanel>
            </DisclosureItem>
            <DisclosureItem id={3}>
                <DisclosureItemTrigger className={"hover:bg-bg-surface gap-3"}>
                    <DisclosureItemTriggerIndicator type="icon" icon="ph--caret-right-fill text-xs group-aria-expanded:rotate-90" />
                    <div className="flex flex-1">
                        What is shared hosting?
                    </div>
                </DisclosureItemTrigger>
                <DisclosurePanel>
                    Shared hosting is a type of web hosting where multiple websites share the same server and its resources. It&apos;s an affordable option, but may have limitations on performance and customization compared to other hosting types.
                </DisclosurePanel>
            </DisclosureItem>
            <DisclosureItem id={4}>
                <DisclosureItemTrigger className={"hover:bg-bg-surface gap-3"}>
                    <DisclosureItemTriggerIndicator type="icon" icon="ph--caret-right-fill text-xs group-aria-expanded:rotate-90" />
                    <div className="flex flex-1">
                        What is dedicated hosting?
                    </div>
                </DisclosureItemTrigger>
                <DisclosurePanel>
                    Dedicated hosting means your website is hosted on a single server exclusively reserved for
                    your site. This provides maximum performance and customization, but at a higher cost.
                </DisclosurePanel>
            </DisclosureItem>

        </DisclosureGroup>
    )
}
