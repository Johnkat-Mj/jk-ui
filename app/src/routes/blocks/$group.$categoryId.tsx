import { createFileRoute } from '@tanstack/react-router'
import { SiteNavbar } from '@/components/organisms/site-navbar'
import { SiteFooter } from '@/components/organisms/site-footer'
import { SiteEmptyState } from '@/components/pages/site-empty-state'
import { BlockListNav } from '@/components/blocks/block-list-nav'
import { Breadcrumbs, BreadcrumbsItem } from '@/components/jk/breadcrumbs'
import { all_blocks } from '@/data/block-list'
import { SingleBlockView } from '@/components/block-view/single-block-view'

const getCategory = (key: string) =>
  all_blocks.find((category) => category.key === key)

export const Route = createFileRoute('/blocks/$group/$categoryId')({
  component: BlockCategoryPage,
  loader: ({ params }) => {
    const category = getCategory(params.categoryId)
    if (!category) {
      return { category: null, group: params.group, categoryId: params.categoryId }
    }
    return { category, group: params.group, categoryId: params.categoryId }
  },
  head: ({ loaderData }) => {
    const { category, group } = loaderData
    if (!category) {
      return {
        meta: [{ title: 'Block Not Found' }, { name: 'description', content: 'The requested block could not be found.' }],
      }
    }
    const groupTitle = group.charAt(0).toUpperCase() + group.slice(1)
    return {
      meta: [
        { title: `${category.title} - ${groupTitle} Blocks | JK UI` },
        { name: 'description', content: category.description },
        { property: 'og:title', content: `${category.title} - ${groupTitle} Blocks` },
        { property: 'og:description', content: category.description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${category.title} - ${groupTitle} Blocks` },
        { name: 'twitter:description', content: category.description },
      ],
    }
  },
})

function BlockCategoryPage() {
  const { category, categoryId } = Route.useLoaderData()

  if (!category) {
    return (
      <>
        <SiteNavbar />
        <main>
          <SiteEmptyState
            title="Category not found"
            description={`Category not found: ${categoryId}`}
          />
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteNavbar />
      <BlockListNav />
      <section className="w-full lg:max-w-336 xl:max-w-352 mx-auto pt-12 px-3.5 sm:px-4 xl:px-8">
        <Breadcrumbs className="gap-2.5 whitespace-nowrap text-fg capitalize text-sm md:text-base">
          <BreadcrumbsItem separator="ph--caret-right" to="/blocks">
            Blocks
          </BreadcrumbsItem>
          <BreadcrumbsItem>{category.title}</BreadcrumbsItem>
        </Breadcrumbs>
        <h2 className="text-fg-title mt-3 font-medium text-lg md:text-xl max-w-xl">
          {category.title}
        </h2>
        <p className="max-w-lg text-sm md:text-base text-fg-muted font-300 mt-1">
          {category.description}
        </p>
      </section>
      <section className="mt-10 space-y-12 pb-16 w-full overflow-hidden">
        {Object.entries(category.blocks).map(([blockKey, block]) => (
          <SingleBlockView key={`key-${blockKey}-${block.name}`} {...block} />
        ))}
      </section>
      <SiteFooter />
    </>
  )
}
