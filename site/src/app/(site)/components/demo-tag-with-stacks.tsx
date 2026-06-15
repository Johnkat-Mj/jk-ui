"use client"

import { useListData } from "react-stately"
import { Tag, TagGroup, TagList } from "@/components/jk/tag-group"

export const DemoTagWithStack = () => {
    const list = useListData({
        initialItems: [
            { id: "1", name: "React", available: true },
            { id: "2", name: "Angular", available: true },
            { id: "3", name: "Vue", available: true },
            { id: "4", name: "Svelte", available: true },
            { id: "5", name: "SvelteKit", available: true },
            { id: "6", name: "Solid", available: true },
            { id: "7", name: "Preact", available: true },
        ],
    })

    return (
        <TagGroup
            selectionMode="multiple"
            aria-label="JS Frameworks/Libraries"
            className="max-w-sm"
            onRemove={(keys) => list.remove(...keys)}
        >
            <TagList items={list.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
        </TagGroup>
    )
}
