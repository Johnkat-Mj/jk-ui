
import { cx } from '@/lib/utils'
import type { ReactNode } from 'react'
import { BtnCopyCode } from '../atoms/btn-copy-code'

export const CodeViewBox = ({ children, noCopyButton, source, unstylled = false, defaultSetting = false, className }: { className: string, noCopyButton?: boolean, children: ReactNode, defaultSetting?: boolean, unstylled?: boolean, source?:string }) => {
    return (
        <div data-code-component data-code-block
            className={`${cx('relative group',
                !unstylled ? ' overflow-hidden max-h-140 w-full grid border border-gray-800' : '',
                defaultSetting ? "rounded-ui bg-(--start-code-color-background)" : "",
                className
            )}`}>
                {
                    noCopyButton || !source || source==='' ?null : <BtnCopyCode value={source} className={"absolute top-4 right-4 z-40 invisible flex opacity-0 group-hover:visible group-hover:opacity-100 text-gray-300"}/>
                }
            <div className="w-full flex h-full overflow-auto">
                {children}
            </div>
        </div>
    )
}
