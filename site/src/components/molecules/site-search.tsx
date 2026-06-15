"use client"

import { Button as AriaButton } from "react-aria-components"

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "../jk/modal"
import { Input } from "../jk/input"
import { Keyboard } from "../jk/keyboard"
import { NoResultsIllustration, NoSearchIllustration } from "../atoms/illustrations"
import { useSiteSearch } from "@/hooks/use-site-search"
import Link from "next/link"
import { cx } from "@/lib/utils"


export const SiteSearch = () => {
    const {
        query,
        results,
        selectedIndex,
        inputRef,
        handleInputChange,
        handleKeyDown,
        clearSearch,
        isOpen,
        setIsOpen
    } = useSiteSearch()


    return (
        <Modal isOpen={isOpen} onOpenChange={()=>setIsOpen(false)}>
            <AriaButton
            onPress={()=>setIsOpen(true)}
                className="btn px-2 h-8 border border-border shadow-sm shadow-bg-muted/20 bg-bg-subtle/60 hover:bg-bg-muted/60 w-full rounded-lg flex justify-between items-center"
            >
                <span className="mr-2 iconify ph--magnifying-glass text-xs text-fg-muted"
                ></span>
                <span
                    className="min-[32rem]:flex-1 min-[32rem]:flex hidden text-fg-muted text-xs"
                >Search...</span
                >
                <span className="flex items-center text-xs text-fg-muted ml-1">
                    <span aria-hidden="true" className="iconify ph--command"></span>
                    K
                </span>
            </AriaButton>
            <ModalContent className={"px-0.5"}>
                <ModalHeader paddingNone className="relative w-full">
                    <Input
                        ref={inputRef}
                        type="search"
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        variant="unstyled"
                        className="w-full ps-9 text-fg focus:outline-none border-0 ui-form-input-lg"
                        placeholder="Search components, docs..."
                        autoFocus
                    />
                    <span aria-hidden="true"
                        className="iconify ph--magnifying-glass absolute left-3.5 top-3 text-fg-muted text-sm"></span>
                </ModalHeader>
                <ModalBody className="[--gutter:--spacing(0)] overflow-y-auto bg-bg-surface border border-border ui-card [--card-radius:var(--global-main-radius)] [--card-padding:--spacing(0.5)] max-h-96">
                    {results.length > 0 && (
                        <div className="px-1 space-y-0.5">
                            {results.map((item, index) => (
                                <Link
                                    key={item.slug}
                                    href={item.slug}
                                    className={`flex w-full items-center gap-4 px-3 py-2 inner-radius hover:bg-bg-muted/40 relative before:absolute before:left-10 before:right-0 before:bottom-0 before:flex before:h-0.5 before:bg-linear-to-l before:from-bg-muted/30 before:via-bg-muted/90 before:to-bg-muted/30 ${index === selectedIndex ? "bg-bg-muted/40" : ""
                                        }`}
                                >
                                    <div className="flex min-w-max text-fg-muted">
                                        <span className={cx(
                                            "iconify size-5",
                                            {
                                                "ph--cube":item.isComponent && !item.isTheming,
                                                "ph--palette": item.isTheming,
                                                "ph--file-text":item.isDocumentation
                                            }
                                        )}/>
                                    </div>
                                    <div className="flex-1 overflow-hidden flex flex-col">
                                        <div className="text-sm font-medium text-fg-title line-clamp-1">
                                            {item.title}
                                        </div>
                                        <div className="text-xs text-fg-muted line-clamp-1">
                                            {item.description}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {query.length > 0 && results.length === 0 && (
                        <div className="size-full d-flex-place-center flex-col text-center py-4">
                            <NoResultsIllustration />
                            <span className="text-sm font-medium text-fg-title mt-3">
                                No result found
                            </span>
                            <span className="text-xs text-fg-muted mt-2">
                                No result found for <span className="font-medium text-fg">{query}</span>
                            </span>
                            <button
                                onClick={clearSearch}
                                className="btn btn-outline btn-white btn-sm mt-4 w-max"
                            >
                                Clear search
                            </button>
                        </div>
                    )}

                    {query.length === 0 && (
                        <div className="size-full d-flex-place-center flex-col text-center py-4">
                            <NoSearchIllustration />
                            <span className="text-sm font-medium text-fg-title mt-3">
                                No search
                            </span>
                            <span className="text-xs text-fg-muted mt-2">
                                Start typing something....
                            </span>
                        </div>
                    )}
                </ModalBody>
                <ModalFooter className="[--gutter:--spacing(2)] py-2 flex items-center justify-between text-xs text-fg-muted">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Keyboard size="sm">
                                ↑
                            </Keyboard>
                            <Keyboard size="sm">
                                ↓
                            </Keyboard>
                            to navigate
                        </div>
                        <div className="flex items-center gap-1">
                            <Keyboard size="sm">
                                ↵
                            </Keyboard>
                            to select
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Keyboard size="sm" className="">esc</Keyboard>to
                        close
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
