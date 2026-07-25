"use client"

import { sidebarGroups, sidebarItems } from "@/data"
import { SidebarGroup } from "../docs/sidebar-group"
import { GroupItem } from "../docs/group-item"
import { DocsSidebarWrapper } from "../atoms/doc-sidebar-wrapper";


export const DocsSidebar = ({ activeGroup, activeItem }: {
    activeGroup: string;
    activeItem: string;
}) => {
    return (
        <>
            <DocsSidebarWrapper>
                <div className="w-full overflow-hidden overflow-y-auto">
                    <nav className="w-full space-y-6 relative px-5 lg:pl-0 lg:pr-4 h-full">
                        <ul className="space-y-3 text-foreground">
                            {
                                sidebarGroups.map((group) => (
                                    <GroupItem key={`index-group-${group.name}`} isActive={activeGroup === group.name} {...group} />
                                ))
                            }
                        </ul>
                        {
                            sidebarItems.map((item) => (
                                <SidebarGroup key={`sidebar-group-${item.label}`}
                                    label={item.label.trim()}
                                    items={item.items}
                                    activeItem={activeItem}
                                />
                            ))
                        }
                    </nav>
                </div>
            </DocsSidebarWrapper>
        </>
    )
}
