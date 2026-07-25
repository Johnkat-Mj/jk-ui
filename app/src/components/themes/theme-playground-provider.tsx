import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export const PALETTES = [
  { label: "Water", colors: ["210 55% 40%", "175 84% 32%", "209 88% 39%"], id: "water" },
  { label: "Earth", colors: ["149 54% 30%", "37 67% 40%", "2 85% 47%"], id: "earth" },
  { label: "Fire", colors: ["2 85% 47%", "15 100% 48%", "209 92% 36%"], id: "fire" },
  { label: "Air", colors: ["15 100% 48%", "2 85% 47%", "37 67% 40%"], id: "air" },
  { label: "Default", colors: ["243 75% 59%", "187 92% 36%", "209 92% 36%"], id: "default", isDefault: true },
]

export const RADIUS_PRESETS = [
  { label: "Sharp", value: "0" },
  { label: "XS", value: "0.25rem" },
  { label: "SM", value: "0.375rem" },
  { label: "MD", value: "0.5rem" },
  { label: "LG", value: "0.75rem" },
  { label: "XL", value: "1rem" },
]

type ThemeContextType = {
  activeTheme: string
  setActiveTheme: (id: string) => void
  radius: string
  setRadius: (r: string) => void
  darkMode: boolean
  setDarkMode: (d: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemePlaygroundProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState("default")
  const [radius, setRadius] = useState("0.5rem")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (activeTheme === "default") {
      html.removeAttribute("data-palette")
    } else {
      html.dataset.palette = activeTheme
    }
  }, [activeTheme])

  useEffect(() => {
    document.documentElement.style.setProperty("--ui-radius", radius)
  }, [radius])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <ThemeContext value={{ activeTheme, setActiveTheme, radius, setRadius, darkMode, setDarkMode }}>
      {children}
    </ThemeContext>
  )
}

export function useThemePlayground() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useThemePlayground must be within ThemePlaygroundProvider")
  return ctx
}
