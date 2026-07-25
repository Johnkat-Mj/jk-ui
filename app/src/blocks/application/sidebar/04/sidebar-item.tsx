import { Icon } from "@/components/jk/icon";
import { cx } from "@/lib/utils";
import type { ComponentType } from "react";


const ItemBadge = ({ badge }: { badge?: ComponentType }) => {
    if (!badge) return null;
    const Badge = badge;
    return <Badge />;
};

export const SidebarItem = ({isActive, href, icon, text, badge }: {
    isActive?: boolean,
    href: string;
    text: string;
    icon: string;
    badge?: ComponentType<unknown>
}) => {
    return (
        <li>
            <a
                href={href}
                data-state={isActive?"active":null}
                className={cx(
                    "h-10 flex items-center px-2.5 rounded-lg text-[15px]",
                    "fx-active:bg-card fx-active:text-foreground",
                    "fx-active:shadow-[0px_0.7px_0px_0px_#E1E1E1,0px_0px_0px_1px_#F0F0F0]",
                    "dark:fx-active:shadow-[0px_0.7px_0px_0px_var(--color-foreground),0px_0px_0px_1px_var(--color-border)]",
                )}
            >
                <Icon name={icon} className="mr-2.5" />
                <div className="flex-1 flex justify-between items-center">
                    <span className="flex-1 line-clamp-1">{text}</span>
                    <ItemBadge badge={badge} />
                </div>
            </a>
        </li>
    );
};
