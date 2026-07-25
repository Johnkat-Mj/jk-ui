import { Avatar } from '@/components/jk/avatar';
import { Badge } from '@/components/jk/badge';
import { Button } from '@/components/jk/button';
import { Input, InputGroup } from '@/components/jk/input';
import { Table, TableCell, TableColumns, TableRow, TableColumn, TableRows } from '@/components/jk/table';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/jk/select';

const users = [
    {
        id: "user01",
        name: 'John Doe',
        email: 'john.doe@company.com',
        role: 'Admin',
        department: 'Engineering',
        status: 'active',
        joined: 'Jan 15, 2026',
        initials: 'JD',
    },
    {
        id: "user02",
        name: 'Sarah Martinez',
        email: 'sarah.martinez@company.com',
        role: 'Manager',
        department: 'Product',
        status: 'active',
        joined: 'Dec 20, 2025',
        initials: 'SM',
    },
    {
        id: "user03",
        name: 'Emily Wilson',
        email: 'emily.wilson@company.com',
        role: 'Developer',
        department: 'Engineering',
        status: 'active',
        joined: 'Mar 10, 2025',
        initials: 'EW',
    },
    {
        id: "user04",
        name: 'Michael Johnson',
        email: 'michael.j@company.com',
        role: 'Analyst',
        department: 'Analytics',
        status: 'pending',
        joined: 'Feb 01, 2025',
        initials: 'MJ',
    },
    {
        id: "user05",
        name: 'Amanda Lee',
        email: 'amanda.lee@company.com',
        role: 'Designer',
        department: 'Design',
        status: 'inactive',
        joined: 'Dec 05, 2023',
        initials: 'AL',
    },
    {
        name: 'David Chen',
        email: 'david.chen@company.com',
        role: 'Developer',
        department: 'Engineering',
        status: 'active',
        joined: 'May 12, 2024',
        initials: 'DC',
    },
    {
        name: 'Lisa Rodriguez',
        email: 'lisa.rodriguez@company.com',
        role: 'Manager',
        department: 'Marketing',
        status: 'active',
        joined: 'Jun 08, 2024',
        initials: 'LR',
    },
    {
        name: 'Robert Kim',
        email: 'robert.kim@company.com',
        role: 'Support',
        department: 'Customer Success',
        status: 'pending',
        joined: 'Jul 15, 2024',
        initials: 'RK',
    },
];


export const Table01 = () => {
    return (
        <div className="w-full max-w-7xl px-1 sm:px-4 mx-auto py-4">
            <div className="rounded-lg border border-input/60">
                <div className="p-4 pb-0">
                    <div className="pb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <InputGroup className="flex-1 max-w-xs md:h-9">
                            <InputGroup.Leading absolute>
                                <span className="iconify ph--magnifying-glass" />
                            </InputGroup.Leading>
                            <Input variant="unstyled" placeholder="Search users..." className="ps-10" />
                        </InputGroup>
                        <div className="flex items-center gap-2">
                            <Button size="none" variant="outline" className="gap-1 sm:btn-sm max-sm:btn-icon-sm">
                                <span aria-hidden="true" className="iconify ph--funnel" />
                                <span className="hidden sm:inline">Filter</span>
                            </Button>
                            <Button size="sm" >
                                <span aria-hidden="true" className="iconify size-xs ph--plus mr-1" />
                                New user
                            </Button>
                        </div>
                    </div>
                </div>

                <Table selectionMode="multiple" className="text-left [--gutter-x:--spacing(4)] [--gutter-y:--spacing(3)]">
                    <TableColumns fillGray className="border-t border-input/60">
                        <TableColumn isRowHeader className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Name
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Email
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Role
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Department
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Status
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Joined
                        </TableColumn>
                        <TableColumn className="w-10"></TableColumn>
                    </TableColumns>
                    <TableRows items={users} className="divide-y divide-border [--gutter-x:--spacing(4)] [--gutter-y:--spacing(3)]">
                        {
                            users.map(user => <TableRow key={user.id} className="group">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm" text={user.initials} variant="solid" intent="neutral" />
                                        <span className="font-medium text-foreground">{user.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-muted-foreground">{user.email}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-foreground">{user.role}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-muted-foreground">{user.department}</span>
                                </TableCell>
                                <TableCell>
                                   
                                    <Badge variant="soft" intent={
                                        user.status==="active" ? "success" : user.status==="pending" ? "warning" : "destructive"
                                        } size="sm" className="inline-flex items-center gap-x-1 font-medium">
                                        <span className="size-2 rounded-full bg-current"></span>
                                        {user.status === 'active' ? 'Active' : user.status === 'pending' ? 'Pending' : 'Inactive'}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="text-muted-foreground text-sm">{user.joined}</span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button size="xs" variant="ghost" iconOnly aria-label="Open actions">
                                        <span aria-hidden="true" className="iconify ph--dots-three-vertical" />
                                    </Button>
                                </TableCell>
                            </TableRow>)
                        }
                    </TableRows>
                </Table>

                <div className="p-4 flex flex-col gap-4 border-t border-border md:flex-row md:items-center md:justify-between">
                    <div className="text-sm text-muted-foreground">
                        Showing 1 to {users.length} of {users.length} users
                    </div>
                    <div className="flex-1 md:flex md:items-center md:justify-center">
                        <div className="sm:max-w-max w-full md:w-auto">
                            <InputGroup className="w-full relative">
                                <InputGroup.Leading className="text-xs text-muted-foreground px-3 border-r border-input">
                                    Per Page
                                </InputGroup.Leading>
                                <Select aria-label="Per page" defaultValue="10" className={"h-full flex"}>
                                    <SelectTrigger variant='unstyled' size="none" bg={false} border={false} radius="none" className="outline-none items-center flex px-2.5 h-full" />
                                    <SelectContent>
                                        <SelectItem id="10" textValue="10">10</SelectItem>
                                        <SelectItem id="20" textValue="20">20</SelectItem>
                                        <SelectItem id="50" textValue="50">50</SelectItem>
                                        <SelectItem id="100" textValue="100">100</SelectItem>
                                        <SelectItem id="200" textValue="200">200</SelectItem>
                                    </SelectContent>
                                </Select>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" iconOnly aria-label="Go prev" className="border border-input" isDisabled>
                            <span aria-hidden="true" className="iconify size-3.5 ph--caret-left" />
                        </Button>
                        <Button size="sm" variant="ghost" iconOnly aria-label="Go next" className="border border-input">
                            <span aria-hidden="true" className="iconify size-3.5 ph--caret-right" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
