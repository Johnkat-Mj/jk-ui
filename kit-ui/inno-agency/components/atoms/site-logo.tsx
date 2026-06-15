import Link from "next/link"

export const SiteLogo = () => {
    return (
        <Link href="/" aria-label="Link to home page" className="flex">
            <span className="font-bold text-xl">Inno Agency</span>
        </Link>
    )
}
