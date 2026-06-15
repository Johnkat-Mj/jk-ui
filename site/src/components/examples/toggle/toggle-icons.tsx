import { Toggle } from '@/components/jk/toggle'
import React from 'react'

export const ToggleIcons = () => {
    return (
        <div className='flex items-end justify-center gap-2'>
            <Toggle iconOnly size='xs' aria-label='toggle heart'>
                <span aria-hidden className='iconify ph--heart in-selected:ph--heart-fill'></span>
            </Toggle>
            <Toggle iconOnly size='sm' variant='outline' aria-label='toggle heart'>
                <span aria-hidden className='iconify ph--heart in-selected:ph--heart-fill'></span>
            </Toggle>
            <Toggle iconOnly size='md' intent="plain-primary" aria-label='toggle heart'>
                <span aria-hidden className='iconify ph--heart in-selected:ph--heart-fill'></span>
            </Toggle>
        </div>
    )
}
