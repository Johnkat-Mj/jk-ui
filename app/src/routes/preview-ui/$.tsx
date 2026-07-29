import { createFileRoute, notFound } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { all_blocks } from '@/data/block-list'

export const Route = createFileRoute('/preview-ui/$')({
  component: BlockPreview,
  loader: ({ params }) => {
    const slug = params._splat
    for (const category of all_blocks) {
      if (category.blocks[slug]) {
        return { path: slug, name: category.blocks[slug].name }
      }
    }
    throw notFound()
  },
})

function BlockPreview() {
  const { path } = Route.useLoaderData()
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    let cancelled = false
    setComponent(null)
    setErrored(false)

    import('@/generated/blocks-data').then((mod) => {
      if (cancelled) return
      const block = mod.blocksSourceData.find((item) => item.path === path)
      if (block) setComponent(() => block.Component)
      else setErrored(true)
    }).catch(() => {
      if (!cancelled) setErrored(true)
    })

    return () => { cancelled = true }
  }, [path])

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'sync-theme') {
        const id = 'jk-theme-blocker'
        if (!document.getElementById(id)) {
          const style = document.createElement('style')
          style.id = id
          style.textContent =
            '*,*::before,*::after{transition:none!important;animation:none!important}'
          document.head.appendChild(style)
          document.documentElement.getBoundingClientRect()
          requestAnimationFrame(() => {
            document.getElementById(id)?.remove()
          })
        }
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(e.data.theme)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  if (errored) throw notFound()
  if (!Component) return null
  return <Component />
}
