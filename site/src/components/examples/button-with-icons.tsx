import { Button } from '@/components/jk/button'

export const ButtonWithIcons = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Button aria-label="Default button" className='gap-1.5'>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
                <span>leading</span>
            </Button>
            <Button aria-label="Default button" className='gap-1.5'>
                <span>trailing</span>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
        </div>
    )
}
