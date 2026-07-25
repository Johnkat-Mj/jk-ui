import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools({
      // Console piping opens 2 persistent HTTP connections (SSE + stream) per
      // document. Block previews render in iframes, so a /blocks/:category page
      // with several previews saturates the browser's 6-connections-per-origin
      // HTTP/1.1 limit: module requests hang forever, iframes never hydrate and
      // the whole origin becomes unreachable in that browser session.
      consolePiping: { enabled: false },
    }),
    contentCollections(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
