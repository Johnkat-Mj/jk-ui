import type { ReactNode } from "react"


export const Steps = ({ children }: { children: ReactNode }) => {
    return (
        <ol className="steps space-y-2 mt-6 first:mt-0">
            {children}
        </ol>
    )
}

export const Step = ({children}:{children:ReactNode})=>{
    <li className="step before:text-fg-subtitle
before:bg-bg-subtle before:border before:border-border-strong
after:bg-bg-muted">
    {children}
</li>
}