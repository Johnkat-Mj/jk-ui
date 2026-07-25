import { Button } from '@/components/jk/button'

export const ButtonIcons = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Button size="xs" iconOnly>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
            <Button size="sm" iconOnly>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
            <Button size="md" iconOnly>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
            <Button size="lg" iconOnly>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
            <Button size="xl" iconOnly>
                <span aria-hidden="true" className="flex iconify ph--atom"></span>
            </Button>
        </div>
    )
}
