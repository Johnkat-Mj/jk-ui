"use client"

import { useRouter } from "@tanstack/react-router"
import { RouterProvider } from "react-aria-components"
import { ThemeProvider } from "./theme-provider"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["navigate"]>[0]
    >
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <RouterProvider navigate={(path) => router.navigate({ to: path })}>
      <ThemeProvider
        storageKey="theme-ui"
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
      >
        {children}
      </ThemeProvider>
    </RouterProvider>
  )
}
