import React from 'react'
import { NativeTable, NativeTableColumn, NativeTableColumns, NativeTableRow, NativeTableRows, NativeTableCell } from "@/components/jk/native-table"
import { Button } from "@/components/jk/button"

const users = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Admin',
        email: 'johndow@gmail.com',
    },
    {
        id: 2,
        name: 'John Doe',
        title: 'Admin',
        email: 'johndow@gmail.com',
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'Admin',
        email: 'johndow@gmail.com',
    },
    {
        id: 4,
        name: 'John Doe',
        title: 'Admin',
        email: 'johndow@gmail.com',
    },
]

export const NativeTableHoverableStriped = () => {
    return (
        <NativeTable hoverable striped>
            <NativeTableColumns>
                <NativeTableColumn>
                    ID
                </NativeTableColumn>
                <NativeTableColumn>
                    Name
                </NativeTableColumn>
                <NativeTableColumn>
                    Title
                </NativeTableColumn>
                <NativeTableColumn>
                    Email
                </NativeTableColumn>
                <NativeTableColumn />
            </NativeTableColumns>
            <NativeTableRows >
                {users.map((user) => (
                    <NativeTableRow key={user.id} >
                        <NativeTableCell className="whitespace-nowrap">
                            {user.id}
                        </NativeTableCell>
                        <NativeTableCell>
                            {user.name}
                        </NativeTableCell>
                        <NativeTableCell>
                            {user.title}
                        </NativeTableCell>
                        <NativeTableCell>
                            {user.email}
                        </NativeTableCell>
                        <NativeTableCell>
                            <div className="w-full flex justify-end items-center gap-2 min-w-max">
                                <Button size="xs" iconOnly variant="ghost" intent="gray">
                                    <span aria-hidden="true" className="flex iconify ph--pen"></span>
                                </Button>
                                <Button size="xs" iconOnly variant='ghost' intent='gray'>
                                    <span aria-hidden="true" className="flex iconify ph--trash"></span>
                                </Button>
                            </div>
                        </NativeTableCell>
                    </NativeTableRow>
                ))}
            </NativeTableRows>
        </NativeTable>
    )
}
