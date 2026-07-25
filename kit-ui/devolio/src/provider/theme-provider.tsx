"use client"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"
const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "system", setTheme: () => {},
})
export function useTheme() { return useContext(ThemeContext) }

export function ThemeProvider({ children, storageKey = "theme-ui" }: { children: ReactNode; storageKey?: string }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system"
    return (localStorage.getItem(storageKey) as Theme) || "system"
  })
  useEffect(() => {
    const resolved = theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(resolved)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])
  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(mq.matches ? "dark" : "light")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme])
  return <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>{children}</ThemeContext.Provider>
}
