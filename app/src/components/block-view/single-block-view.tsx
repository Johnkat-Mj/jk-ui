"use client"

import { memo, useCallback, useState } from "react"

import { PreviewBlockFrame } from "./preview-block-frame"
import { Tab, TabList, TabPanel, Tabs } from "@/components/jk/tabs"
import { ButtonCopyBlock } from "./button-copy-block"
import { LoadRegistrySource } from "./load-registry-source"

const tabClassName =
  "px-2 py-1 flex items-center text-sm fx-selected:bg-bg-muted/60 fx-selected:textfgti border border-transparent fx-selected:border-border-strong/30 rounded-[5px] ease-linear duration-200 font-300 text-muted-foreground fx-selected:text-fg-title cursor-pointer"

interface SingleBlockViewProps {
  name: string
  preview: string
}

const SingleBlockViewComponent = ({ name, preview }: SingleBlockViewProps) => {
  const [reloadKey, setReloadKey] = useState(0)

  const handleReload = useCallback(() => {
    setReloadKey((currentKey) => currentKey + 1)
  }, [])



  return (
    <article className="relative w-full px-1 sm:px-4 xl:px-8">
      <Tabs
        className="gap-0 relative lg:max-w-336 xl:max-w-352 lg:mx-auto w-full bg-bg-muted/50 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--radius-ui)]"
      >
        <div className="w-full flex justify-between items-center h-12 px-3.5 relative">
          <TabList className="bg-background shadow border border-border/50 p-0.5 rounded-md flex items-center">
            <Tab id={"preview"} className={tabClassName}>
              <span aria-hidden className="iconify ph--eye opacity-70 size-3.5 mr-1"></span>
              Preview
            </Tab>
            <Tab id={"code"} className={tabClassName}>
              <span aria-hidden className="iconify ph--code opacity-70 size-3.5 mr-1"></span>
              Code
            </Tab>
          </TabList>
          <div className="flex items-center min-w-max text-foreground">
            <div className="hidden sm:flex">
              <ButtonCopyBlock name={name}/>
            </div>
            <span
              className="mx-2.5 hidden sm:flex relative w-px bg-bg-surface-elevated h-6"
              aria-hidden="true"
            ></span>
            <div data-box-resize-box className="flex items-center gap-1">
              <a
                href={preview}
                aria-label="Open in new tab"
                target="_blank"
                rel="noreferrer"
                title="Open in new tab"
                className="p-1.5 flex text-sm rounded-[5px] ease-linear duration-200 bg-bg shadow border border-border/50"
              >
                <span aria-hidden="true" className="flex iconify ph--arrows-out"></span>
              </a>
              <button
                onClick={handleReload}
                aria-label="Reload preview"
                title="Reload preview"
                className="p-1.5 flex text-sm rounded-[5px] ease-linear duration-200 bg-bg shadow border border-border/50 text-muted-foreground hover:text-foreground"
              >
                <span aria-hidden="true" className="flex iconify ph--arrow-clockwise"></span>
              </button>
            </div>
          </div>
        </div>
        <TabPanel shouldForceMount id={"preview"} className="flex-1">
          <div className="bg-background inner-radius ui-preview-height ui-preview-frame-box overflow-hidden border border-gray-50 dark:border-gray-900 w-full relative group flex-1">
            <PreviewBlockFrame preview={preview} reloadKey={reloadKey} />
          </div>
        </TabPanel>
        <TabPanel shouldForceMount id={"code"}>
          <LoadRegistrySource name={name} />
        </TabPanel>
      </Tabs>
    </article>
  )
}

export const SingleBlockView = memo(
  SingleBlockViewComponent,
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name && prevProps.preview === nextProps.preview,
)
