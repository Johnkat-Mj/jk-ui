"use client"


import { Table, TableColumn, TableColumns, TableRow, TableRows, TableCell } from "@/components/jk/table"

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

export const DemoTable = () => {
    return (
        <Table>
            <TableColumns >
                <TableColumn className="whitespace-nowrap [--gutter-x:--spacing(2)]">
                    ID
                </TableColumn>
                <TableColumn isRowHeader>
                    Name
                </TableColumn>
                <TableColumn>
                    Title
                </TableColumn>
                <TableColumn>
                    Email
                </TableColumn>
            </TableColumns>
            <TableRows items={users}>
                {
                    (user) => (<TableRow key={user.id}>
                        <TableCell className="whitespace-nowrap [--gutter-x:--spacing(2)]">
                            {user.id}
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                            {user.name}
                        </TableCell>
                        <TableCell>
                            {user.title}
                        </TableCell>
                        <TableCell>
                            {user.email}
                        </TableCell>
                    </TableRow>)
                }
            </TableRows>
        </Table>
    )
}
