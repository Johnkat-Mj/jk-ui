import { SearchField, SearchInput } from '@/components/jk/search-field'


export const DemoSearchField = () => {
    return (
        <SearchField aria-label="Search" className={"max-w-xs"}>
            <SearchInput placeholder="Search" />
        </SearchField>
    )
}
