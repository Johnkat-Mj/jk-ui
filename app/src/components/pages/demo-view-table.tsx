"use client"

import { useState } from "react"
import { NativeTable, NativeTableColumn, NativeTableCell, NativeTableRow } from "@/components/jk/native-table"
import { Avatar } from "@/components/jk/avatar"
import { Checkbox } from "@/components/jk/checkbox"
import { ProgressBar, ProgressBarTrack } from "@/components/jk/progress-bar"
import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Input, InputGroup } from "@/components/jk/input"
import { SearchField, SearchInput } from "@/components/jk/search-field"

interface User {
    id: string
    info: {
        full_name: string
        email: string
        avatar: string
        initial: string
    }
    tokens: {
        used: number
        total: number
    }
    profile: string
    role: string
}

const usersDemo: User[] = [
    {
        id: '01',
        info: {
            full_name: 'Johnkat MJ',
            email: 'johnkatmj@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/59884686?v=4',
            initial: 'JK',
        },
        tokens: {
            used: 4500,
            total: 6500,
        },
        profile: 'public',
        role: 'admin',
    },
    {
        id: '02',
        info: {
            full_name: 'Tresor Kasenda',
            email: 'tres@doe.john',
            avatar: 'https://avatars.githubusercontent.com/u/34010260?v=4',
            initial: 'TS',
        },
        tokens: {
            used: 1200,
            total: 5000,
        },
        profile: 'public',
        role: 'Moderator',
    },
    {
        id: '03',
        info: {
            full_name: 'Tresor Kasenda',
            email: 'tres@doe.john',
            avatar: '',
            initial: 'TS',
        },
        tokens: {
            used: 1200,
            total: 5000,
        },
        profile: 'public',
        role: 'Moderator',
    },
    {
        id: '04',
        info: {
            full_name: 'Tresor Kasenda',
            email: 'tres@doe.john',
            avatar: '',
            initial: 'TS',
        },
        tokens: {
            used: 1200,
            total: 5000,
        },
        profile: 'public',
        role: 'Moderator',
    },
    {
        id: '05',
        info: {
            full_name: 'Tresor Kasenda',
            email: 'tres@doe.john',
            avatar: '',
            initial: 'TS',
        },
        tokens: {
            used: 1200,
            total: 5000,
        },
        profile: 'public',
        role: 'Moderator',
    },
]

const getTokenStatusColor = (percentage: number): string => {
    if (percentage < 30) return 'text-success'
    if (percentage >= 80) return 'text-destructive'
    return 'text-warning'
}

const getBadgeProps = (role: string) => {
    return role === 'admin'
        ? { variant: 'solid' as const, intent: 'neutral' as const }
        : { variant: 'subtle' as const, intent: 'gray' as const }
}

export const DemoViewTable = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedUsers(usersDemo.map(user => user.id))
        } else {
            setSelectedUsers([])
        }
    }

    const handleSelectUser = (userId: string, checked: boolean) => {
        if (checked) {
            setSelectedUsers(prev => [...prev, userId])
        } else {
            setSelectedUsers(prev => prev.filter(id => id !== userId))
        }
    }

    const isAllSelected = selectedUsers.length === usersDemo.length
    const isIndeterminate = selectedUsers.length > 0 && selectedUsers.length < usersDemo.length

    return (
        <div className="grid grid-rows-[auto_1fr_auto] border border-border-strong/40 dark:border-border bg-background dark:bg-bg-surface/40 rounded-ui">
            <div className="relative z-11 p-4 flex gap-4 flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex">
                    <SearchField aria-label="Search field">
                        <SearchInput placeholder="Start typing"
                            className="ps-9 pe-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                    </SearchField>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <span aria-hidden="true" className="iconify ph--export size-3.5 mr-1.5"></span>
                        Export
                    </Button>
                    <Button intent="neutral" size="sm">
                        <span aria-hidden="true" className="iconify ph--plus size-3.5 mr-1.5"></span>
                        Invite
                    </Button>
                </div>
            </div>

            <NativeTable divider={false} wrapper="flex-1">
                <NativeTable.Columns fillGray>
                    <NativeTableColumn className="pl-4 [--gutter-x:3px] w-8">
                        <Checkbox aria-label="Select all member"
                            id="check_all"
                            isSelected={isAllSelected}
                            isIndeterminate={isIndeterminate}
                            onChange={(checked) => handleSelectAll(checked)}
                        />
                    </NativeTableColumn>
                    <NativeTableColumn className="pl-2">
                        Member
                    </NativeTableColumn>
                    <NativeTableColumn>
                        Tokens used
                    </NativeTableColumn>
                    <NativeTableColumn className="w-30">
                        Role
                    </NativeTableColumn>
                </NativeTable.Columns>

                <NativeTable.Rows className="">
                    {usersDemo.map((user) => {
                        const tokenPercentage = Math.round((user.tokens.used / user.tokens.total) * 100 * 10) / 10
                        const statusColor = getTokenStatusColor(tokenPercentage)
                        const badgeProps = getBadgeProps(user.role)

                        return (
                            <NativeTableRow key={user.id}>
                                <NativeTableCell className="pl-4 [--gutter-x:3px]">
                                    <Checkbox
                                        id={`check_${user.id}`}
                                        isSelected={selectedUsers.includes(user.id)}
                                        onChange={(checked) => handleSelectUser(user.id, checked)}
                                        aria-label={`Select ${user.info.full_name}`}
                                    />
                                </NativeTableCell>
                                <NativeTableCell className="pl-2">
                                    <div className="flex items-center gap-2">
                                        {user.info.avatar !== '' ? (
                                            <Avatar
                                                radius="none"
                                                className="rounded-lg bg-muted/60"
                                                size="sm"
                                                src={user.info.avatar}
                                            />
                                        ) : (
                                            <Avatar
                                                radius="none"
                                                className="rounded-lg"
                                                size="sm"
                                                text={user.info.initial}
                                            />
                                        )}
                                        <div>
                                            <div className="font-medium text-fg-title text-sm text-nowrap">
                                                {user.info.full_name}
                                            </div>
                                            <div className="text-xs text-muted-foreground text-nowrap">
                                                {user.info.email}
                                            </div>
                                        </div>
                                    </div>
                                </NativeTableCell>
                                <NativeTableCell>
                                    <div className="flex items-center justify-between gap-2">
                                        <ProgressBar maxValue={user.tokens.total} aria-label={`Tokens used by ${user.info.full_name}`}
                                            value={user.tokens.used} className={"w-44"}>
                                            <ProgressBarTrack className={`${statusColor} min-w-44 h-1`} />
                                        </ProgressBar>
                                        <span className="text-xs text-muted-foreground ml-2">
                                            {tokenPercentage}%
                                        </span>
                                    </div>
                                </NativeTableCell>
                                <NativeTableCell>
                                    <Badge
                                        size="sm"
                                        variant={badgeProps.variant}
                                        intent={badgeProps.intent}
                                    >
                                        {user.role}
                                    </Badge>
                                </NativeTableCell>
                            </NativeTableRow>
                        )
                    })}
                </NativeTable.Rows>
            </NativeTable>
        </div>
    )
}