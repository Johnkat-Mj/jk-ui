import { Link } from "@/components/jk/link"


export const LinkButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Link href="#" asButton className="transition-colors ease-linear">
                Click me
            </Link>
            <Link href="#" asButton intent="solid-neutral" className="gap-x-2.5">
                Click me
                <span aria-hidden="true" className="flex iconify ph--caret-right text-sm"></span>
            </Link>
        </div>
    )
}
