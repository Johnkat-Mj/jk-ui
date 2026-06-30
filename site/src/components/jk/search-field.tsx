"use client"

import {
    SearchField as AriaSearchField,
    type SearchFieldProps as AriaSearchFieldProps,
} from 'react-aria-components/SearchField';

import { FieldButton } from './field-button';
import { Input, InputGroup, InputLeading, type InputProps, InputTrailing } from './input';
import { cx } from '@/lib/utils';
import { fieldStyles } from './text-field';



export function SearchField({ className, ...props }: AriaSearchFieldProps) {
    return (
        <AriaSearchField
            data-slot="control"
            {...props}
            aria-label={props["aria-label"] ?? "Search"}
            className={cx(fieldStyles({ className: "group/search-field" }), className)}
        />
    )
}

export function SearchInput({ size,groupClass='', ...props }: InputProps &{groupClass?:string}) {
    return (
        <InputGroup size={size} className={groupClass}>
            <InputLeading className='in-disabled:opacity-50' absolute>
                <span aria-hidden className="size-4 iconify ph--magnifying-glass text-fg-muted/80 forced-colors:text-[ButtonText] group-disabled:text-fg-muted/50 forced-colors:group-disabled:text-[GrayText]" />
            </InputLeading>
            <Input variant="unstyled" className="ps-9 pe-9 [&::-webkit-search-cancel-button]:hidden"  {...props} />
            <InputTrailing className="group-fx-empty/search-field:invisible [--right-space:5px]" clickable absolute>
                <FieldButton className="group-empty/search-field:invisible">
                    <span aria-hidden className="size-4 iconify ph--x" />
                </FieldButton>
            </InputTrailing>
        </InputGroup>
    )
}