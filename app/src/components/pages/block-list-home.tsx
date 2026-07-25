import { SiteSectionHeader } from "@/components/atoms/site-section-header"
import { Button } from "@/components/jk/button"
import { all_blocks } from "@/data/block-list"
import { Link } from "@tanstack/react-router"
import { SiteBlockCard } from "./site-block-card"
import { SiteContainer } from "@/components/atoms/site-container"
import { SiteCaret } from "@/components/atoms/site-caret"

interface BlockCardProps {
    title: string
    illustrations: {
        light: string
        dark: string
    }
}



export const BlockListHome = () => {

    return (
        <section className="">
            <SiteContainer className="relative pt-20 border-dashed">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="flex justify-between size-full max-w-90xl mx-auto relative">
                        <div className="relative h-full w-4 border-x border-pattern-fg/70 linear-gradient-pattern"></div>
                        <div className="relative h-full w-4 border-x border-pattern-fg/70 linear-gradient-pattern"></div>
                        <SiteCaret
                            className="absolute -top-1 left-[-3.5px]"/>
                        <SiteCaret
                            className="absolute -top-1 left-2.75"/>
                        <SiteCaret
                            className="absolute -top-1 right-2.75"/>
                        <SiteCaret
                            className="absolute -top-1 right-[-3.5px]"/>
                    </div>
                </div>

                <SiteSectionHeader
                    className="relative"
                    subtitle="Just Ship It"
                    title="Prebuilt Blocks for Real-World Applications"
                    description="A growing collection of production-ready UI blocks designed for dashboards, SaaS products, marketing pages, and full application layouts."
                >
                    <></>
                </SiteSectionHeader>

                <div className="px-4 sm:px-6 lg:px-8 mt-14">
                    <ul className="relative w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3.5 gap-y-6">
                        {all_blocks.slice(0,8).map((blockCategory) => (
                            <li key={blockCategory.key} className="h-full flex items-center group">
                                <SiteBlockCard title={blockCategory.title}
                                    illustrations={blockCategory.illustrations}
                                    group={"application"}
                                    categoryId={blockCategory.key}
                                />
                            </li>
                        ))}
                        <div className="absolute bottom-0 inset-x-0 pb-4 pt-12 h-24 bg-linear-to-t from-bg via-bg/80 to-transparent flex justify-center">
                            <Link to="/blocks" className="btn btn-solid btn-solid-neutral text-bg rounded-ui btn-md">
                                Browse All
                            </Link>
                        </div>
                    </ul>
                </div>
            </SiteContainer>
        </section>
    )
}
