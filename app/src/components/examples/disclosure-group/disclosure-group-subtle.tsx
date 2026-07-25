"use client"

import {
  DisclosureGroup,
  DisclosureItem,
  DisclosurePanel,
  DisclosureItemTrigger,
} from "@/components/jk/disclosure-group"

export const DisclosureGroupSubtle = () => {
  return (
    <DisclosureGroup variant="subtle" className={"max-w-sm w-full"}>
      <DisclosureItem id={1}>
        <DisclosureItemTrigger>What is a VPS?</DisclosureItemTrigger>
        <DisclosurePanel>
          A VPS is a Virtual Private Server, which provides dedicated resources on a server shared
          with other users, offering more control and customization than shared hosting.
        </DisclosurePanel>
      </DisclosureItem>

      <DisclosureItem id={2}>
        <DisclosureItemTrigger>What is cloud hosting?</DisclosureItemTrigger>
        <DisclosurePanel>
          Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of
          being hosted on a single server, your data and resources are spread across multiple
          servers.
        </DisclosurePanel>
      </DisclosureItem>

      <DisclosureItem id={3}>
        <DisclosureItemTrigger>What is shared hosting?</DisclosureItemTrigger>
        <DisclosurePanel>
          Shared hosting is a type of web hosting where multiple websites share the same server and its resources. It&apos;s an affordable option, but may have limitations on performance and customization.
        </DisclosurePanel>
      </DisclosureItem>
      <DisclosureItem id={4}>
        <DisclosureItemTrigger>What is dedicated hosting?</DisclosureItemTrigger>
        <DisclosurePanel>
          Dedicated hosting means your website is hosted on a single server exclusively reserved for
          your site. This provides maximum performance and customization, but at a higher cost.
        </DisclosurePanel>
      </DisclosureItem>
    </DisclosureGroup>
  )
}
