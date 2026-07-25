import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { ThemeProvider } from "@/provider/theme-provider"
import { SiteNavbar } from "@/components/layouts/site-navbar"
import { SiteFooter } from "@/components/layouts/site-footer"
import appCss from '@/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Devolio - Creative Digital Agency" },
      { name: "description", content: "Full-service digital agency delivering innovative solutions" },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html suppressHydrationWarning lang="en" className="h-full antialiased">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme-ui") || "system";
                  var resolved = theme === "system"
                    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
                    : theme;
                  document.documentElement.classList.add(resolved);
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="stylesheet" href={appCss} />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <ThemeProvider>
          <SiteNavbar />
          <Outlet />
          <SiteFooter />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
