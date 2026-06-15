export const siteUrl = "import.meta.env.SITE"
export const keywordsDef = "jk-ui, react aria, jk ui Components, TailwindCSS, TailwindCSS Components, Modern Components, TailwindCSS Components"
export const defaultOgImage = "/ui.png"
export const defaultOgAlt = "JK-ui : "

export const site_domain = "jk-ui.unoforge.com"

export const twitterLink = 'https://twitter.com/johnkat_Mj'
export const githubUrl = 'https://github.com/johnkat-mj'
export const repositoryUrl = "https://github.com/johnkat-mj/ui"

export const repoContentLocation = "https://github.com/johnkat-mj/ui/blob/main/site"
export const orgUrl = "https://github.com/johnkat-mj/jk-ui"
export const startDiscussion = "https://github.com/johnkat-mj/ui/discussions"
export const contribUrl = 'https://github.com/johnkat-mj/ui/blob/main/CONTRIBUTING.MD'


export const getContribLinks = (fileName: string) => {
    return [
        {
            href: contribUrl,
            text: "Contributing",
            icon: "iconify ph--chats-circle",
        },
        {
            href: `${repoContentLocation}${fileName}`,
            text: "Edit this page",
            icon: "iconify ph--pencil-simple-line",
        },
        {
            href: contribUrl,
            text: "Star On github",
            icon: "iconify ph--star",
        },
    ]
}