"use client"

import { Button } from "@/components/jk/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectLabel } from "@/components/jk/select"
import { MenuIcon } from "@/components/jk/menu";
import { copyToClipboard } from "@/lib"
import { useMemo, useState } from "react"

const PACKAGE_MANAGERS = [
    { id: "bun", label: "bun", icon: "simple-icons--bun", runner: "bunx" },
    { id: "npm", label: "npm", icon: "simple-icons--npm", runner: "npx" },
    { id: "pnpm", label: "pnpm", icon: "simple-icons--pnpm", runner: "pnpm dlx" },
    { id: "yarn", label: "yarn", icon: "simple-icons--yarn", runner: "npx" },
] as const

export const ButtonCopyBlock = ({ name }: { name: string }) => {
    const [copying, setCopying] = useState(false)
    const [copiedState, setCopiedState] = useState<'' | 'copied'>('')
    const [pm, setPm] = useState("bun")

    const pmConfig = PACKAGE_MANAGERS.find(p => p.id === pm)!

    const command = useMemo(
        () => `${pmConfig.runner} shadcn@latest add @jk-ui/${name}`,
        [name, pmConfig.runner],
    )

    const handleCopy = () => {
        copyToClipboard({
            snippet: command,
            onCopy: () => setCopying(true),
            onCopyCompleted: () => {
                setCopying(false)
                setCopiedState('copied')
                setTimeout(() => setCopiedState(''), 1800)
            },
        })
    }

    return (
        <div className="flex items-center gap-1">
            <div className="hidden lg:flex items-center">
                <Select
                selectedKey={pm}
                onSelectionChange={(key) => setPm(key as string)}
                aria-label="Package manager"
                  >
                <SelectTrigger size="sm" className="w-auto min-w-0 px-1.5">
                    <span className="flex items-center">
                        <span aria-hidden className={`flex iconify ${pmConfig.icon} size-4`}></span>
                    </span>
                    <svg 
                        aria-label="Icon"
                        data-slot="chevron"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="fill-fg-muted size-3"
                    >
                        <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" />
                    </svg>
                </SelectTrigger>
                <SelectContent items={PACKAGE_MANAGERS}>
                    {(item) => (
                        <SelectItem id={item.id} textValue={item.label}>
                            <MenuIcon>
                              <span aria-hidden className={`flex iconify ${item.icon}`}></span>
                            </MenuIcon>
                            <SelectLabel>{item.label}</SelectLabel>
                        </SelectItem>
                    )}
                </SelectContent>
              </Select>
            </div>
            <Button
                size="none"
                variant="none"
                onPress={handleCopy}
                className="bg-background shadow h-8 pl-2 pr-3 text-xs border border-border/50 rounded-md flex justify-center items-center cursor-pointer hover:bg-card"
            >
                {copying ? (
                    <>
                        <span aria-hidden="true" className="flex iconify ph--circle-notch animate-spin"></span>
                        <span className="text-muted-foreground ml-1">Copying</span>
                    </>
                ) : copiedState === "copied" ? (
                    <>
                        <span aria-hidden="true" className="flex iconify ph--check mr-1.5"></span>
                        <span>Copied</span>
                    </>
                ) : (
                    <>
                        <span aria-hidden className="flex iconify ph--terminal"></span>
                        <span className="text-muted-foreground ml-1">{command}</span>
                    </>
                )}
            </Button>
        </div>
    )
}
