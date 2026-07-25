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

  if (errored) throw notFound()
  if (!Component) return null
  return <Component />
}
