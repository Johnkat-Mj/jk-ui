import type { Blog } from '@/types'

import { TextBadge } from '@/components/atoms/text-badge'


export const CardPost = (props: Blog) => {
    const { illustration, tags, title } = props
    return (
        <div className="h-full duration-300 ease-linear border border-border/60 bg-gray-50/50 dark:bg-gray-900/20 hover:border-gray-300 dark:hover:border-gray-400 p-0.5 flex flex-col group">
            <img src={illustration} alt="banner image" width={1263} height={1291} loading="lazy" className="w-full h-56 md:h-60 xl:h-60 object-cover bg-body relative" />
            <div className="px-4 pb-5 pt-5">
                <a href={"#"} className="text-foreground font-semibold text-lg">
                    {title}
                </a>
                <div className="flex flex-wrap gap-x-2 w-full gap-y-3 pt-5">
                    {tags.map(tag => (
                        <TextBadge key={tag.id} text={tag.text}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
