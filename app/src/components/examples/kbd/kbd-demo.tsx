import { Keyboard } from '@/components/jk/keyboard'


export const KbdDemo = () => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <Keyboard size="xs">kbd xs </Keyboard>
            <Keyboard size="sm">Kbd sm</Keyboard>
            <Keyboard> Kbd md</Keyboard>
            <Keyboard size="lg">Kbd lg</Keyboard>
            <Keyboard size="xl"> Kbd xl</Keyboard>
        </div>

    )
}
