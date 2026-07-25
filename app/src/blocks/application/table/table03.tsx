
import { Avatar } from '@/components/jk/avatar';
import { Badge } from '@/components/jk/badge';
import { Button } from '@/components/jk/button';
import { Card } from '@/components/jk/card';
import { Table, TableCell, TableColumns, TableRow, TableColumn, TableRows } from '@/components/jk/table';


const organizations = [
    {
        id: 1,
        name: 'TechCorp Solutions',
        industry: 'Technology',
        contact: 'John Smith',
        email: 'john@techcorp.com',
        phone: '+1 (555) 123-4567',
        status: 'active',
        revenue: '$2.5M',
        employees: 150,
        initials: 'TC',
        industryIcon: 'ph--cpu',
        lastActivity: '2 hours ago',
    },
    {
        id: 2,
        name: 'Global Marketing Inc',
        industry: 'Marketing',
        contact: 'Sarah Johnson',
        email: 'sarah@globalmarketing.com',
        phone: '+1 (555) 234-5678',
        status: 'prospect',
        revenue: '$1.2M',
        employees: 45,
        initials: 'GM',
        industryIcon: 'ph--megaphone',
        lastActivity: '1 day ago',
    },
    {
        id: 3,
        name: 'FinanceHub LLC',
        industry: 'Finance',
        contact: 'Michael Chen',
        email: 'michael@financehub.com',
        phone: '+1 (555) 345-6789',
        status: 'active',
        revenue: '$5.8M',
        employees: 200,
        initials: 'FH',
        industryIcon: 'ph--bank',
        lastActivity: '5 hours ago',
    },
    {
        id: 4,
        name: 'Healthcare Plus',
        industry: 'Healthcare',
        contact: 'Emily Davis',
        email: 'emily@healthcareplus.com',
        phone: '+1 (555) 456-7890',
        status: 'churned',
        revenue: '$800K',
        employees: 25,
        initials: 'HP',
        industryIcon: 'ph--heart',
        lastActivity: '1 week ago',
    },
    {
        id: 5,
        name: 'Retail Dynamics',
        industry: 'Retail',
        contact: 'Robert Wilson',
        email: 'robert@retaildynamics.com',
        phone: '+1 (555) 567-8901',
        status: 'active',
        revenue: '$3.2M',
        employees: 85,
        initials: 'RD',
        industryIcon: 'ph--shopping-bag',
        lastActivity: '3 hours ago',
    },
];

const statusIntent = (status: string) => {
    switch (status) {
        case 'active':
            return 'success';
        case 'prospect':
            return 'warning';
        default:
            return 'destructive';
    }
};


export const Table03 = () => {
    return (
        <div className="w-full max-w-7xl px-1 sm:px-4 mx-auto py-4">
            <Card className="rounded-lg">
                <div className="p-4 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground mb-1">Organizations</h2>
                        <p className="text-muted-foreground text-sm">Manage your customer relationships and track organization details.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm">
                            New organization
                        </Button>
                    </div>
                </div>

                <Table selectionMode="multiple" className="text-left">
                    <TableColumns className="border-t [--gutter-x:--spacing(4)] [--gutter-y:--spacing(4)]">
                        <TableColumn isRowHeader className="text-xs font-medium text-muted-foreground uppercase tracking-wider min-w-48">
                            Organization
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Industry
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider min-w-40">
                            Contact
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Status
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Revenue
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Employees
                        </TableColumn>
                        <TableColumn className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Last Activity
                        </TableColumn>
                        <TableColumn className="w-10"></TableColumn>
                    </TableColumns>
                    <TableRows className="divide-y divide-border [--gutter-x:--spacing(4)] [--gutter-y:--spacing(4)]">
                        {organizations.map((org) => (
                            <TableRow key={`org-${org.id}`} className="group">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm" text={org.initials} variant="solid" intent="neutral" />
                                        <div>
                                            <div className="font-medium text-foreground">{org.name}</div>
                                            <div className="text-xs text-muted-foreground">{org.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true" className={`iconify ${org.industryIcon} text-muted-foreground`} />
                                        <span className="text-sm text-foreground">{org.industry}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <div className="text-sm font-medium text-foreground">{org.contact}</div>
                                        <div className="text-xs text-muted-foreground">{org.phone}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="soft" intent={statusIntent(org.status)} size="sm" className="inline-flex items-center gap-x-1 font-medium">
                                        <span className="size-2 rounded-full bg-current"></span>
                                        {org.status === 'active' ? 'Active' : org.status === 'prospect' ? 'Prospect' : 'Churned'}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm font-semibold text-foreground">{org.revenue}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm text-foreground">{org.employees}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-xs text-muted-foreground">{org.lastActivity}</span>
                                </TableCell>
                                <TableCell>
                                    <Button size="xs" variant="ghost" iconOnly aria-label="Open actions">
                                        <span aria-hidden="true" className="iconify ph--dots-three-vertical" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableRows>
                </Table>

                <div className="p-4 flex items-center md:justify-between border-t border-border">
                    <div className="text-sm text-muted-foreground">
                        Showing 1 to {organizations.length} of {organizations.length} organizations
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
            </Card>
        </div>
    );
};

