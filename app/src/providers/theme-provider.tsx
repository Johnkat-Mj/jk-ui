"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  return theme
}

function disableTransitions() {
  const el = document.getElementById("jk-theme-blocker")
  if (el) return
  const style = document.createElement("style")
  style.id = "jk-theme-blocker"
  style.textContent =
    "*,*::before,*::after{transition:none!important;animation:none!important}"
  document.head.appendChild(style)
  document.documentElement.getBoundingClientRect()
  requestAnimationFrame(() => {
    const s = document.getElementById("jk-theme-blocker")
    s?.remove()
  })
}

export function ThemeProvider({
  children,
  storageKey = "theme-ui",
}: {
  children: ReactNode
  storageKey?: string
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system"
    return (localStorage.getItem(storageKey) as Theme) || "system"
  })

  useEffect(() => {
    disableTransitions()
    const resolved = resolveTheme(theme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(resolved)
    localStorage.setItem(storageKey, theme)

    requestAnimationFrame(() => {
      document.querySelectorAll("iframe").forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            { type: "sync-theme", theme: resolved },
            "*",
          )
        } catch {}
      })
    })
  }, [theme, storageKey])

  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      disableTransitions()
      const resolved = mq.matches ? "dark" : "light"
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(resolved)

      requestAnimationFrame(() => {
        document.querySelectorAll("iframe").forEach((iframe) => {
          try {
            iframe.contentWindow?.postMessage(
              { type: "sync-theme", theme: resolved },
              "*",
            )
          } catch {}
        })
      })
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  )
}
