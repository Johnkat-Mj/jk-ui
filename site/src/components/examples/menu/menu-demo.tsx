"use client"

import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/jk/menu"


export const MenuDemo = () => {
    return (
        <>
            <Menu>
                <MenuTrigger>
                    Open
                </MenuTrigger>
                <MenuContent popover={{ placement: "bottom" }}>
                    <MenuItem>Inbox</MenuItem>
                    <MenuItem>Sent</MenuItem>
                    <MenuItem>New Message</MenuItem>
                </MenuContent>
            </Menu>
        </>
    )
}
