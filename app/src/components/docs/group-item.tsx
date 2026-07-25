

export const GroupItem = ({ icon, title, path, isActive }: {
    icon: string;
    title: string;
    path: string;
    isActive: boolean;
}) => {
    return (

        <li>
            <a
                href={path}

                aria-label={`Link to ${title}`}
                data-state={isActive ? "active" : "inactive"}
                className={`flex items-center gap-x-2.5 fx-active:font-600 fx-active:text-fg-title text-fg hover:text-fg-title`}
            >
                <span
                    aria-hidden="true"
                    className={`size-7 flex items-center justify-center rounded-lg
     ${isActive ? "ui-subtle ui-subtle-gray " : "border border-border "}`}
                >
                    <span className={`flex iconify ${icon} text-sm`}></span>
                </span>
                <span>
                    {title}
                </span>
            </a>
        </li>

    )
}
