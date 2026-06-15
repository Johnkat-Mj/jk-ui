import { NativeTable, NativeTableColumn, NativeTableColumns, NativeTableRow, NativeTableRows, NativeTableCell } from "@/components/jk/native-table"

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

export const DemoNativeTable = () => {
    return (
        <NativeTable>
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
            </NativeTableColumns>
            <NativeTableRows>
                {users.map((user) => (
                    <NativeTableRow key={user.id}>
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
                    </NativeTableRow>
                ))}
            </NativeTableRows>
        </NativeTable>
    )
}
