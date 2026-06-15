"use client"

import { memo, useEffect, useMemo, useRef, useState } from "react"
import { useInView } from "motion/react"
import { Tabs, TabList, Tab, TabPanel } from "@/components/jk/tabs"
import { BtnCopyCode } from "@/components/atoms/btn-copy-code"
import { CodeHighlighter } from "./code-highlighter"
import { cx } from "@/lib/utils"

interface RegistryFile {
  path: string
  content: string
  type: string
  target?: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description?: string
  files: RegistryFile[]
}

interface LoadRegistrySourceProps {
  name: string
  className?: string
}

const langMap: Record<string, string> = {
  "js": "javascript",
  "ts": "typescript",
  "tsx": "tsx",
  "jsx": "jsx",
  "css": "css",
  "json": "json",
  "html": "html",
  "md": "markdown",
  "mdx": "mdx",
}

function resolveLang(path: string): string {
  const pathLower = path.toLowerCase()
  for (const [ext, lang] of Object.entries(langMap)) {
    if (pathLower.endsWith(`.${ext}`)) {
      return lang
    }
  }
  return "plaintext"
}

function getFileName(path: string) {
  return path.split("/").pop() || path
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

async function loadRegistryItem(name: string, signal?: AbortSignal): Promise<RegistryItem> {
  if (registryCache.has(name)) return registryCache.get(name)!

  const response = await fetch(`/r/${name}.json`, { signal })
  if (!response.ok) throw new Error(`Failed to load ${name}`)

  const data = await response.json()
  registryCache.set(name, data)
  return data
}

// Module-level cache for registry data
const registryCache = new Map<string, RegistryItem>()

const SourceTabs = memo(function SourceTabs({ files }: { files: RegistryFile[] }) {
  const items = useMemo(
    () =>
      files.map((f) => ({
        id: slugify(getFileName(f.target || f.path)),
        name: getFileName(f.target || f.path),
        content: f.content,
        lang: resolveLang(f.target || f.path),
      })),
    [files]
  )

  const [selectedKey, setSelectedKey] = useState<string>(items[0]?.id ?? "")

  useEffect(() => {
    setSelectedKey((prev) => {
      if (!items.find((i) => i.id === prev) && items[0]) {
        return items[0].id
      }
      return prev
    })
  }, [items])

  const selectedItem = useMemo(
    () => items.find((i) => i.id === selectedKey),
    [items, selectedKey]
  )

  return (
    <Tabs
      selectedKey={selectedKey}
      onSelectionChange={(key) => setSelectedKey(String(key))}
      className={cx("bg-gray-900 dark:bg-gray-900/50 inner-radius border border-gray-800 space-y-0 gap-0")}
    >
      <div className="grid overflow-hidden grid-cols-[1fr_2rem] gap-3 px-3 items-center w-full">
        <TabList className="border-b-0 flex items-center gap-x-0.5 flex-1 py-1 overflow-hidden overflow-x-auto">
          {items.map((item) => (
            <Tab
              key={item.id}
              id={item.id}
              className="text-sm flex items-center rounded-ui text-gray-400 fx-selected:bg-gray-950 px-2 py-1 fx-selected:text-white hover:text-white ease-linear duration-200 focus:outline-none text-nowrap border border-transparent fx-selected:border-gray-700"
            >
              <span aria-hidden className="iconify size-3.5 ph--file mr-1"></span>
              <span>{item.name}</span>
            </Tab>
          ))}
        </TabList>
        <div className="flex items-center text-gray-300">
          {selectedItem && (
            <BtnCopyCode value={selectedItem.content} className="flex" />
          )}
        </div>
      </div>
      {selectedItem && (
        <TabPanel key={selectedItem.id} id={selectedItem.id} className="w-full bg-[#07090F] border-t border-gray-800">
          <div
            data-code-component
            data-code-block
            data-code-box-collapsible
            className="relative group overflow-auto max-h-140 xl:max-h-160 w-full grid inner-radius"
          >
            <div className="w-full flex h-full overflow-auto *:py-0 [&_figure>pre]:py-4 [&_figure>pre]:min-w-full [&_figure>pre]:w-max [&_figure>pre]:px-3">
              <CodeHighlighter code={selectedItem.content} lang={selectedItem.lang} />
            </div>
          </div>
        </TabPanel>
      )}
    </Tabs>
  )
})

const SingleFileView = memo(function SingleFileView({ file }: { file: RegistryFile }) {
  const lang = resolveLang(file.target || file.path)

  return (
    <div
      data-code-block
      className="bg-[#07090F] group *:py-0 [&_figure>pre]:py-4 [&_figure>pre]:min-w-full [&_figure>pre]:w-max [&_figure>pre]:px-3 inner-radius overflow-auto max-h-140 xl:max-h-160 relative"
    >
      <CodeHighlighter code={file.content} lang={lang} />
      <BtnCopyCode
        value={file.content}
        className="absolute top-4 right-4 z-40 invisible flex opacity-0 group-hover:visible group-hover:opacity-100 text-gray-300"
      />
    </div>
  )
})

const RegistryItemViewer = memo(function RegistryItemViewer({ item }: { item: RegistryItem }) {
  if (item.files.length === 1) {
    return <SingleFileView file={item.files[0]} />
  }
  return <SourceTabs files={item.files} />
})

function LazyRegistryItem({ name, className }: LoadRegistrySourceProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: "100px 0px 100px 0px", once: true })
  const [item, setItem] = useState<RegistryItem | null>(null)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!isInView || item || error) return

    const ac = new AbortController()
    loadRegistryItem(name, ac.signal)
      .then((res) => setItem(res))
      .catch((e) => {
        if (e?.name !== "AbortError") setError(String(e?.message || e))
      })

    return () => ac.abort()
  }, [isInView, name, item, error])

  return (
    <div ref={ref} className={cx("min-h-40", className)}>
      {error ? (
        <div className="bg-[#07090F] inner-radius p-4 text-red-400 text-sm">{error}</div>
      ) : item ? (
        <RegistryItemViewer item={item} />
      ) : (
        <div className="bg-[#07090F] inner-radius p-4 animate-pulse">
          <div className="h-4 w-32 bg-gray-800 rounded mb-3"></div>
          <div className="h-32 w-full bg-gray-800 rounded"></div>
        </div>
      )}
    </div>
  )
}

const LoadRegistrySourceComponent = ({ name, className }: LoadRegistrySourceProps) => {
  return <LazyRegistryItem name={name} className={className} />
}

export const LoadRegistrySource = memo(LoadRegistrySourceComponent)
