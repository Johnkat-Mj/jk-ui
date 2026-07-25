const items = [
    {
        key: "item-01",
        path: "#casestudies",
        text: "Case studies"
    },
    {
        key: "item-02",
        path: "#expertises",
        text: "Expertises"
    },
    {
        key: "item-03",
        path: "#about",
        text: "About US"
    },
    {
        key: "item-04",
        path: "#faq",
        text: "Faq"
    },
]

export const NavItems = () => {
    return (
        <ul
            className="border-t border-border lg:border-t-0 p-6 lg:p-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-foreground w-full lg:justify-center lg:items-center"
        >
            {
                items.map(item => <li key={item.key}>
                    <a
                        href={item.path}
                        className="duration-300 font-medium ease-linear hover:text-primary text-muted-foreground py-3"
                    >
                        {item.text}
                    </a>
                </li>)
            }
        </ul>
    )
}
