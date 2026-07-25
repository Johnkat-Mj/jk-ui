import { Fragment } from "react/jsx-runtime";
import { SidebarItemBlock } from "./sidebar-item-block"

export const SidebarGroup = ({ label, items, activeItem }: {
    activeItem: string;
    label: string;
    items: {
        title: string;
        path: string;
        state?: "updated" | "draft" | "new" | "none" | "wip";
        hideInSidebar?: boolean;
    }[];
}) => {
    return (
        <div className="space-y-0.5 pt-5">
            <SidebarItemBlock label={label}>
                <ul className="space-y-2 text-muted-foreground py-3">
                    {
                        items.map((item) => (
                            <Fragment key={`key-item-${item.title.trim()}`}>
                                {item.hideInSidebar ? null : (
                                    <li className="flex">
                                        <a
                                            href={item.path}
                                            aria-label={`Link to ${item.title}`}
                                            data-state={item.path === activeItem ? "active" : "inactive"}
                                            className={`ease-linear text-sm fx-active:text-fg-title fx-active:bg-bg-subtle text-muted-foreground font-light hover:text-fg-title px-3 py-1.5 rounded-ui hover:bg-bg-muted w-full flex justify-between`}
                                        >
                                            <span>
                                                {item.title}
                                            </span>
                                            {item.state ? (
                                                item.state === "draft" ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="px-1.5 py-px text-xs rounded-ui ui-subtle ui-subtle-warning"
                                                    >
                                                        draft
                                                    </span>
                                                ) : item.state === "updated" ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="px-1.5 py-px text-xs rounded-ui ui-subtle ui-subtle-info"
                                                    >
                                                        updates
                                                    </span>
                                                ) : item.state === "new" ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="px-1.5 py-px text-xs rounded-ui ui-subtle ui-subtle-primary"
                                                    >
                                                        new
                                                    </span>
                                                ) : item.state === "wip" ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="px-1.5 py-px text-xs rounded-ui ui-subtle ui-subtle-accent"
                                                    >
                                                        Wip
                                                    </span>
                                                ) : null
                                            ) : null}
                                        </a>
                                    </li>
                                )}
                            </Fragment>
                        ))
                    }
                </ul>
            </SidebarItemBlock>
        </div>

    )
}
