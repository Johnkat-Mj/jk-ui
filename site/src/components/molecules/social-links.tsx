import { orgUrl, twitterLink } from "@/const";
import { UiLink } from "../atoms/ui-link";


const links = [
    {
        title: "Github Account",
        href: orgUrl,
        icon: "ph--github-logo",
    },
    {
        title: "X account",
        href: twitterLink,
        icon: "ph--x-logo",
    },
];
export const SocialLinks = () => {
    return (
        <div className="flex items-center gap-x-0.5">

            {
                links.map((link) => (
                    <UiLink key={`social-link-${link.title.trim()}`} href={link.href} aria-label={link.title} className="btn btn-icon-sm rounded-(--global-main-radius) btn-ghost btn-ghost-gray">
                        <span aria-hidden="true" className={`flex iconify ${link.icon}`} />
                    </UiLink>
                ))
            }
        </div>

    )
}
