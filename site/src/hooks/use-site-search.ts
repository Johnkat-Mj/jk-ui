"use client"

import { useState, useEffect, useRef } from "react"
import { searchData, type SearchItem } from "@/data/search-data"

export const useSiteSearch = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    const q = searchQuery.toLowerCase()
    const seen = new Set<string>()
    const filtered: SearchItem[] = []

    for (const item of searchData) {
      if (!item._searchText.includes(q)) continue
      // deduplicate by slug so multiple content blocks don't repeat the same anchor
      if (seen.has(item.slug)) continue
      seen.add(item.slug)
      filtered.push(item)
      if (filtered.length >= 20) break
    }

    setResults(filtered)
    setSelectedIndex(filtered.length > 0 ? 0 : -1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    performSearch(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
      e.preventDefault()
      setIsOpen(false)
      clearSearch()
    } else if (e.key === "Escape") {
      setIsOpen(false)
      clearSearch()
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setSelectedIndex(-1)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    clearSearch()
  }

  const openSearch = () => {
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        openSearch()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return {
    query,
    results,
    selectedIndex,
    isOpen,
    inputRef,
    setIsOpen,
    handleInputChange,
    handleKeyDown,
    clearSearch,
    handleItemClick,
    openSearch,
  }
}
