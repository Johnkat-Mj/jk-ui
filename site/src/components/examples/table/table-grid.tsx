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

export const TableGrid = () => {
    return (
        <Table grid>
            <TableColumns>
                <TableColumn align="center" className="whitespace-nowrap [--gutter-x:--spacing(2)]">
                   #
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
                 (user)=>(
                    <TableRow key={`table01-${user.id}`}>
                        <TableCell align="center" className="whitespace-nowrap [--gutter-x:--spacing(2)]">
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
                    </TableRow>
                 )   
                }
            </TableRows>
        </Table>
    )
}
