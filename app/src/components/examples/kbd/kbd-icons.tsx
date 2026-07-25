import { Keyboard } from "@/components/jk/keyboard"

export const KbdIcons = () => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <Keyboard>
                <span aria-hidden="true" className="flex iconify ph--caret-down"></span>
            </Keyboard>
            <Keyboard variant="outline">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
                </svg>
            </Keyboard>
            <Keyboard variant="outline" className="min-w-7.5 flex items-center justify-center text-sm">
                /
            </Keyboard>
        </div>
    )
}
