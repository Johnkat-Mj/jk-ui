import { Link } from "@/components/jk/link"


export const LinkWithIcon = () => {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <Link underlined href="#" className="text-foreground hover:text-foreground flex items-center gap-x-2.5">
                    <span aria-hidden="true" className="flex iconify ph--caret-left text-sm"></span>
                    Go Back
                </Link>
            </div>
            <div>
                <Link underlined underline-offset="2" href="#" className="text-foreground hover:text-foreground flex items-center gap-x-2.5">
                    <span aria-hidden="true" className="flex iconify ph--caret-left text-sm"></span>
                    Back To Profile
                </Link>
            </div>
            <div>
                <Link href="#" className="text-success hover:text-foreground  flex items-center gap-x-2.5">
                    <span aria-hidden="true" className="flex iconify ph--house-line text-sm"></span>
                    Home Page
                </Link>
            </div>
        </div>
    )
}
