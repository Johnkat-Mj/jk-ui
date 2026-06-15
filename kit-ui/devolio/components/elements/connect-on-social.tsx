import { SocialLink } from "./../atoms/social-link"

const socialmedias = [
    {
        id: 0,
        href: "https://x.com/johnkat_Mj",
        text: "Twitter",
        icon: "ph--x-logo"
    },
    {
        id: 1,
        href: "https://github.com/johnkat-mj",
        text: "Github",
        icon: "ph--github-logo"
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/john-kat-mj-2b4574200/",
        text: "Linkedin",
        icon: "ph--linkedin-logo"
    },
    {
        id: 3,
        href: "https://discord.com/users/Johnkat#6043",
        text: "Discord",
        icon: "ph--discord-logo"
    },
]

export const ConnectOnSocial = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-gray-900 dark:text-white text-lg">Connect with us</h2>
            <div className="flex items-center gap-3 w-max max-w-full py-0.5 border-y border-border-strong">
                {socialmedias.map(social => (
                    <SocialLink key={social.id} {...social} />
                ))
                }
            </div>
        </div>
    )
}

