import { Link } from "@/components/jk/link"


export const LinkDemo = () => {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <Link underlined href="#" className="text-fg hover:text-fg-title">
                    Profile Page
                </Link>
            </div>
            <div>
                <Link underlined underline-offset="2" href="#" className="text-fg hover:text-fg-title">
                    Undeline Offset
                </Link>
            </div>
            <div>
                <Link underlined underline-offset="2" href="#" className="text-success hover:text-fg-title decoration-success hover:decoration-fg-title">
                    Undeline colored
                </Link>
            </div>
        </div>
    )
}
