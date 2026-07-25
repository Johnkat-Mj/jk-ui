import { Button } from '@/components/jk/button'

export const ButtonSizes = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">
                Click me
            </Button>
            <Button size="sm">
                Click me
            </Button>
            <Button size="md">
                Click me
            </Button>
            <Button size="lg">
                Click me
            </Button>
            <Button size="xl">
                Click me
            </Button>
        </div>
    )
}
