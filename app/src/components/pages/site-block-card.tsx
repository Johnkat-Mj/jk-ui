import { Link } from "@tanstack/react-router"

export const SiteBlockCard = ({ title, illustrations, categoryId }: { title: string, illustrations: { light: string, dark: string }, categoryId: string }) => {
    return (
        <Link to={`/blocks/${categoryId}`} aria-label={`Link to blocks : ${title}`}
            className="w-full hover:bg-bg-surface p-px rounded-ui group ease-linear duration-200">
            <div className="aspect-standard-tv bg-bg-muted/30 rounded-ui pointer-events-none">
                <img src={illustrations.light} alt={`Illustration light ${title}`} width={1455}
                    height={1091} className="size-full object-cover dark:hidden" />
                <img src={illustrations.dark} alt={`Illustration dark ${title}`} width={1455}
                    height={1091} className="size-full object-cover not-dark:hidden" />
            </div>
            <div className="mt-2 pb-2 flex justify-between items-center px-2">
                <h3 className="font-medium text-fg-title">
                    {title}
                </h3>
                <span aria-hidden="true"
                    className="iconify ph--arrow-right size-3.5 text-muted-foreground origin-left ease-linear duration-200 opacity-0 scale-x-60 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </div>
        </Link>
    )
}
