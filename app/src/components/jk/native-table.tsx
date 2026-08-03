"use client"

import { cx } from "@/lib/utils"
import { createContext, type ComponentProps } from "react"

type NativeTableProps = {
    wrapper?: string
    divider?: boolean
    grid?: boolean
    striped?: boolean
    hoverable?: boolean
} & ComponentProps<"table">

const TableContext = createContext<{
    striped: boolean
    grid: boolean
    hoverable: boolean
    divider: boolean
}>({
    striped: false,
    grid: false,
    hoverable: false,
    divider: true
})



const Table = ({ 
    wrapper = '', 
    divider = true, 
    grid = false, 
    striped = false, 
    hoverable = false, 
    className,
    ...props 
}: NativeTableProps) => {
    return (
        <TableContext.Provider value={{ striped, grid, hoverable, divider }}>
            <div
                data-slot="table-container"
                className={cx(
                    "relative overflow-x-auto w-full [--table-border-color:--alpha(var(--color-border-strong)/60%)]",
                    wrapper,
                    {
                        'border border-(--table-border-color)': grid
                    }
                )}
            >
                <table
                    data-slot="table"
                    data-table-grid={grid || undefined}
                    data-table-striped={striped || undefined}
                    data-table-hoverable={hoverable || undefined}
                    className={cx(
                        "w-full divide-(--table-border-color)",
                        "[--gutter-x:--spacing(5)] [--gutter-y:--spacing(2.5)]",
                        "in-fx-table-grid:divide-y",
                        {
                            "divide-y": divider
                        },
                        className
                    )}
                    {...props}
                />
            </div>
        </TableContext.Provider>
    )
}

type TableColumnsProps = {
    wrapper?: string
    fillGray?: boolean
    columnDivider?: boolean
} & ComponentProps<"tr">

const TableColumns = ({ 
    wrapper = '', 
    fillGray=false,
    columnDivider = false,
    className,
    ...rest 
}: TableColumnsProps) => {
    return (
        <thead className={wrapper}>
            <tr
                className={cx(
                    "capitalize text-sm font-medium text-foreground divide-(--table-border-color)",
                    "in-fx-table-grid:divide-x",
                    {
                        'bg-muted/50': fillGray,
                        'divide-x': columnDivider,
                    },
                    className
                )}
                {...rest}
            />
        </thead>
    )
}

type TableRowsProps = {
    divider?: boolean
} & ComponentProps<"tbody">

const TableRows = ({ 
    divider = true,
    className,
    ...props 
}: TableRowsProps) => {
    return (
        <tbody
            data-slot="table-body"
            className={cx(
                "text-sm divide-(--table-border-color)",
                "in-fx-table-grid:divide-y",
                "in-fx-striped:*:even:bg-muted/80",
                {
                    "divide-y": divider,
                },
                className
            )}
            {...props}
        />
    )
}

type TableRowProps = {
    divider?: boolean
} & ComponentProps<"tr">

const TableRow = ({ 
    divider = false,
    className,
    ...props 
}: TableRowProps) => {
    return (
        <tr
            data-slot="table-row"
            className={cx(
                "text-sm divide-(--table-border-color) transition-colors ease-linear",
                "in-fx-hoverable:hover:bg-muted/80",
                "in-fx-striped:in-fx-hoverable:hover:bg-muted/80",
                "in-fx-table-grid:divide-x",
                {
                    "divide-x": divider,
                },
                className
            )}
            {...props}
        />
    )
}

type TableColumnProps = {
    align?: "left" | "center" | "right"
    whiteSpace?: "nowrap" | "wrap"
} & ComponentProps<"th">

const TableColumn = ({ 
    align = "left",
    whiteSpace = "nowrap",
    className,
    ...props 
}: TableColumnProps) => {
    return (
        <th
            data-slot="table-head"
            className={cx(
                "px-(--gutter-x) py-(--gutter-y) font-medium",
                {
                    'text-left': align === 'left',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                    'whitespace-nowrap': whiteSpace === 'nowrap',
                },
                className
            )}
            {...props}
        />
    )
}

type TableCellProps = {
    align?: "left" | "center" | "right"
    whiteSpace?: "nowrap" | "wrap"
} & ComponentProps<"td">

const TableCell = ({ 
    align = "left",
    whiteSpace = "nowrap",
    className,
    ...props 
}: TableCellProps) => {
    return (
        <td
            data-slot="table-cell"
            className={cx(
                "px-(--gutter-x) py-(--gutter-y)",
                {
                    'text-left': align === 'left',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                    'whitespace-nowrap': whiteSpace === 'nowrap',
                },
                className
            )}
            {...props}
        />
    )
}

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => {
    return (
        <tfoot
            data-slot="table-footer"
            className={cx(
                "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
                className
            )}
            {...props}
        />
    )
}

function TableCaption({
    className,
    ...props
}: ComponentProps<"caption">) {
    return (
        <caption
            data-slot="table-caption"
            className={cx("text-muted-foreground mt-4 text-sm", className)}
            {...props}
        />
    )
}

Table.Columns = TableColumns
Table.Column = TableColumn
Table.Rows = TableRows
Table.Row = TableRow
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Caption = TableCaption

export {
    Table as NativeTable,
    TableColumns as NativeTableColumns,
    TableRows as NativeTableRows,
    TableColumn as NativeTableColumn,
    TableRow as NativeTableRow,
    TableCell as NativeTableCell,
    TableFooter as NativeTableFooter,
    TableCaption as NativeTableCaption,
}