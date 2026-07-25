import { ReactNode } from "react"

export type ServiceProps = {
    id:number,
    icon:ReactNode,
    title:string,
    description:string
}
export const CardService = ({icon, title, description}:ServiceProps) =>{
    return (
        <div className="border border-border/60 bg-card/50 hover:border-gray-300 dark:hover:border-gray-400 duration-300 ease-linear p-5 h-auto flex flex-col group">
            <div className="mb-6">
                {icon}
                <span className={`iconify size-8 ${icon}`}></span>
            </div>
            <h1 className="text-foreground font-semibold text-lg lg:text-xl mb-4">
                {title}
            </h1>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    )
}
