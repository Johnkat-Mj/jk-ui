"use client"

import { Button } from "react-aria-components"
import { useTheme } from "@/providers/theme-provider";
export const ToggleTheme = () => {

  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <Button onPress={toggleTheme}
        aria-label="toggle theme"
        className="flex d-flex-place-center size-8 hover:bg-bg-muted rounded-lg text-fg hover:text-fg-title relative"
      >
        <span
          className="absolute top-1/2 -translate-1/2 left-1/2 ease-linear duration-200 iconify ph--sun invisible dark:visible"
        ></span>
        <span
          className="absolute top-1/2 -translate-1/2 left-1/2 ease-linear duration-200 iconify ph--moon-stars visible dark:invisible"
        ></span>
      </Button>
    </>
  )
}
