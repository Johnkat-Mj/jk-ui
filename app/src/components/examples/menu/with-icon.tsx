"use client"

import { Avatar } from "@/components/jk/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuSubMenu,
  MenuTrigger,
} from "@/components/jk/menu"

export const MenuWithIcon = () => {
  return (
    <Menu>
      <MenuTrigger aria-label="Open user menu" className="w-max">
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt="User avatar"
        size="md"/>
      </MenuTrigger>

      <MenuContent popover={{ placement: "bottom" }} className="min-w-50">
        <MenuHeader separator>
          <span className="block">Kurt Cobain</span>
          <span className="font-normal text-fg-muted">@cobain</span>
        </MenuHeader>

        <MenuSection>
          <MenuItem href="#dashboard">
            <MenuIcon aria-hidden="true">
              <span className="iconify ph--squares-four" />
            </MenuIcon>
            <MenuLabel>Dashboard</MenuLabel>
          </MenuItem>
          <MenuItem href="#settings">
            <MenuIcon aria-hidden="true">
              <span className="iconify ph--gear-six" />
            </MenuIcon>
            <MenuLabel>Settings</MenuLabel>
          </MenuItem>
        </MenuSection>

        <MenuSeparator />

        <MenuItem>
          <MenuIcon aria-hidden="true">
            <span className="iconify ph--terminal-window" />
          </MenuIcon>
          <MenuLabel>Command Menu</MenuLabel>
        </MenuItem>

        <MenuSubMenu>
          <MenuItem>
            <MenuIcon aria-hidden="true">
              <span className="iconify ph--sun-horizon" />
            </MenuIcon>
            <MenuLabel>Switch theme</MenuLabel>
          </MenuItem>
          <MenuContent>
            <MenuItem>
              <MenuIcon aria-hidden="true">
                <span className="iconify ph--monitor" />
              </MenuIcon>
              <MenuLabel>System</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuIcon aria-hidden="true">
                <span className="iconify ph--moon-stars" />
              </MenuIcon>
              <MenuLabel>Dark</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuIcon aria-hidden="true">
                <span className="iconify ph--sun-dim" />
              </MenuIcon>
              <MenuLabel>Light</MenuLabel>
            </MenuItem>
          </MenuContent>
        </MenuSubMenu>

        <MenuSeparator />

        <MenuItem href="#contact-s">
          <MenuLabel>Contact Support</MenuLabel>
        </MenuItem>

        <MenuSeparator />

        <MenuItem intent="destructive" href="#logout">
          <MenuIcon aria-hidden="true">
            <span className="iconify ph--sign-out text-current" />
          </MenuIcon>
          <MenuLabel>Log out</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
