import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { AppNavbar } from '@/components/layouts/app-navbar'
import { AppFooter } from '@/components/layouts/app-footer'
import { ThemeProvider } from '@/provider/theme-provider'
import '@/styles/globals.css'

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { title: 'Inno Agency' },
      { name: 'description', content: 'Marketing agency website' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html suppressHydrationWarning lang="en" className="h-full antialiased bg-background">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme-ui') || 'system';
                  var resolved = theme === 'system'
                    ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                    : theme;
                  document.documentElement.classList.add(resolved);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <ThemeProvider>
          <AppNavbar />
          <Outlet />
          <AppFooter />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
