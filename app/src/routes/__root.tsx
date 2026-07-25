import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useLocation,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles/globals.css?url'
import { Providers } from '../providers/providers'
import { GlobalProvider } from '../providers/global-provider'

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'JK-UI — React component library',
      },
      {
        name: 'description',
        content:
          'A collection of React UI components and blocks built with TailwindCSS v4 and React Aria Components, featuring CSS variable-based customization and shadcn/ui compatibility.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
})

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found</p>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  // Preview routes are embedded as iframes on /blocks pages. Mounting the
  // devtools in every iframe multiplies persistent connections and JS weight,
  // so only mount them for regular (top-level) pages.
  const pathname = useLocation({ select: (location) => location.pathname })
  const isPreviewFrame = pathname.startsWith('/preview-ui')

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme-ui') || 'system';
                  var s = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.classList.add(t === 'system' ? s : t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background">
        <Providers>
          <GlobalProvider>{children}</GlobalProvider>
        </Providers>
        {!isPreviewFrame && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
