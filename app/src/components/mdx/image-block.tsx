



export const ImageBlock = ({ src, alt, dark }: { src: string, alt: string, dark: { src: string, alt: string } | null }) => {
    return (

        <div
            className="w-full ui-card [--card-padding:0.25rem] [--card-radius:var(--global-main-radius)] border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-gray-900/50">
            {
                dark ? (
                    <>
                        <img src={src} alt={alt} width={1728} height={1117}
                            className="w-full aspect-auto inner-radius dark:hidden" />
                        <img src={dark.src} alt={dark.alt} width={1728} height={1117}
                            className="w-full aspect-auto inner-radius hidden dark:block" />
                    </>
                ) : <>
                    <img src={src} alt={alt} width={1728} height={1117}
                        className="w-full aspect-auto inner-radius" />
                </>
            }
        </div>

    )
}
