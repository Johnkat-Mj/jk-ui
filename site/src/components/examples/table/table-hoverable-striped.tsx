import { Button } from "@/components/jk/button"
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

export const TableHoverableStriped = () => {
    return (
        <Table hoverable striped>
            <TableColumns>
                <TableColumn>
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
                <TableColumn />
            </TableColumns>
            <TableRows>
                {
                    users.map(user=><TableRow key={`tb-${user.id}`} >
                        <TableCell className="whitespace-nowrap">
                            {user.id}
                        </TableCell>
                        <TableCell>
                            {user.name}
                        </TableCell>
                        <TableCell>
                            {user.title}
                        </TableCell>
                        <TableCell>
                            {user.email}
                        </TableCell>
                        <TableCell>
                            <div className="w-full flex justify-end items-center gap-2 min-w-max">
                                <Button size="xs" iconOnly variant="ghost" intent="ghost-primary">
                                    <span aria-hidden="true" className="flex iconify ph--pen"></span>
                                </Button>
                                <Button size="xs" iconOnly variant='ghost' intent='ghost-danger'>
                                    <span aria-hidden="true" className="flex iconify ph--trash"></span>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>)
                }
            </TableRows>
        </Table>
    )
}
