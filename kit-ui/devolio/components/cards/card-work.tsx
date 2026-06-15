import type { WorkProps } from "@/types";
import { TextBadge } from "@/components/atoms/text-badge";
import { ExternalLink } from "@/components/ui/external-link";
import Link from "next/link";
import Image from "next/image";
import { buttonStyles } from "../jk/button";


export const Cardwork = ({ illustration, links, tags, title }: WorkProps) => {
    return (
        <div className="border border-border/60 bg-gray-50/50 dark:bg-gray-900/20 duration-300 ease-linear hover:border-gray-300 dark:hover:border-gray-400 p-0.5 h-auto flex flex-col group">
            <div className="w-full h-56 md:h-60 xl:h-60 overflow-hidden bg-body relative">
                <div className="absolute inset-0 items-center justify-center opacity-0 flex bg-gray-600/30  group-hover:opacity-100 duration-300 ease-linear">
                    <div className="flex gap-4">
                        <ExternalLink href={links.preview} className={buttonStyles({ size: "sm" })}>
                            Live Preview
                        </ExternalLink>
                        {links.isopensource && links.repogithub !== null ? (
                            <ExternalLink href={links.repogithub || ""} className={buttonStyles({ variant: "outline", size: "sm", iconOnly:true })}>
                                <span className="sr-only">
                                    github link
                                </span>
                                <span aria-hidden className="iconify ph--github-logo"></span>
                            </ExternalLink>
                        ) : null

                        }
                    </div>
                </div>
                <Image src={illustration} alt={`post cover image - ${title}`} width={2131} height={1792} className="w-full h-auto" />
            </div>
            <div className="px-4 pb-5 pt-5">
                <Link href={"#"} className="text-fg-title font-semibold text-lg">
                    {title}
                </Link>
                <div className="flex flex-wrap gap-x-2 w-full gap-y-3 pt-5">
                    {tags.map(tag => (
                        <TextBadge key={tag.id} text={tag.text} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
