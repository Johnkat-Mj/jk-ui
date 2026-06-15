import { SiteEmptyState } from "@/app/(site)/components/site-empty-state"
import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"
import { all_blocks } from "@/data/block-list"
import Link from "next/link"
import { SingleBlockView } from "./components/single-block-view"
import type { Metadata } from "next"

interface BlockPageProps {
  params: Promise<{
    group: string
    categoryId: string
  }>
}

const getCagory = (key:string)=>all_blocks.find(category=>category.key ===key)

export async function generateMetadata({ params }: BlockPageProps): Promise<Metadata> {
  const {  categoryId } = await params
  const category = getCagory(categoryId)
  if (!category) {
    return {
      title: 'Block Not Found',
      description: 'The requested block could not be found.',
    }
  }

  
  const groupTitle = category.group.charAt(0).toUpperCase() + category.group.slice(1)
  
  return {
    title: `${category.title} - ${groupTitle} Blocks | JK UI`,
    description: category.description,
    openGraph: {
      title: `${category.title} - ${groupTitle} Blocks`,
      description: category.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} - ${groupTitle} Blocks`,
      description: category.description,
    },
    alternates: {
      canonical: `/blocks/${category.group}/${categoryId}`,
    },
  }
}

export async function generateStaticParams(): Promise<{ group: string; categoryId: string }[]> {
  const params: { group: string; categoryId: string }[] = []
  all_blocks.forEach(category=>{
    params.push({
      group:category.group,
      categoryId: category.key
    })
  })

  return params
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { categoryId, group } = await params


  const category = getCagory(categoryId)

  // Check if the category exists in the group
  if (!category) {
    return <main>
      <SiteEmptyState title="Category not found" description={`Category not found: ${categoryId} in group: ${group}.`}>
        <div className="mt-8">
          <Link href="https://github.com/unoforge/flexiwind" className="w-max btn rounded-ui btn-md btn-solid btn-solid-primary text-white">
            Bring my contributing
          </Link>
        </div>
      </SiteEmptyState>
    </main>
  }

  return (
    <>
      <section className="w-full lg:max-w-336 xl:max-w-352 mx-auto pt-12 px-3.5 sm:px-4 xl:px-8">
        <Breadcrumbs className="gap-2.5 whitespace-nowrap text-fg capitalize text-sm md:text-base">
          <BreadcrumbsItem separator="ph--caret-right" href="/blocks" >
            Blocks
          </BreadcrumbsItem>
          <BreadcrumbsItem>
            {category.title}
          </BreadcrumbsItem>
        </Breadcrumbs>
        <h2 className="text-fg-title mt-3 font-medium text-lg md:text-xl max-w-xl">
          {category.title}
        </h2>
        <p className="max-w-lg text-sm md:text-base text-fg-muted font-300 mt-1">
          {category.description}
        </p>
      </section>
      <section className="mt-10 space-y-12 pb-16 w-full overflow-hidden">
        {
          Object.entries(category.blocks).map(([blockKey, block]) => <SingleBlockView key={`key-${blockKey}-${block.name}`} {...block}/>)
        }
      </section>
    </>
  )
}
