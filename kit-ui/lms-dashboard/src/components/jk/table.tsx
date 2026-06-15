import { createContext, use } from "react";
import type {
    CellProps,
    ColumnProps,
    ColumnResizerProps,
    TableHeaderProps as HeaderProps,
    RowProps,
    TableBodyProps,
    TableProps as TablePrimitiveProps,
} from "react-aria-components";
import {
    Button,
    Cell,
    Collection,
    Column,
    ColumnResizer as ColumnResizerPrimitive,
    composeRenderProps,
    ResizableTableContainer,
    Row,
    TableBody as TableBodyPrimitive,
    TableHeader as TableHeaderPrimitive,
    Table as TablePrimitive,
    useTableOptions,
} from "react-aria-components";
import { cx } from "@/lib/utils";
import { Checkbox } from "./checkbox";

interface TableContextValue {
    allowResize?: boolean;
    bleed?: boolean;
    grid?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    noDivider?: boolean;
    checkboxColumnClass?: string;
}

const TableContext = createContext<TableContextValue>({});

const useTableContext = () => use(TableContext);

interface TableProps extends Omit<TablePrimitiveProps, "className"> {
    allowResize?: boolean;
    containerClassName?: string;
    className?: string;
    bleed?: boolean;
    grid?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    ref?: React.Ref<HTMLTableElement>;
    noDivider?: boolean;
    checkboxColumnClass?: string;
}

const Root = ({ noDivider, className, ...props }: TableProps & { noDivider?: boolean }) => {
    const { grid, striped, hoverable } = useTableContext();
    return (
        <TablePrimitive
            data-table-grid={grid || undefined}
            data-table-striped={striped || undefined}
            data-table-hoverable={hoverable || undefined}
            className={cx(
                "w-full [--gutter-x:--spacing(5)] [--gutter-y:--spacing(2.5)] text-sm transition-colors ease-linear divide-(--table-border-color)",
                "in-fx-table-grid:divide-y",
                !noDivider && "divide-y",
                className,
            )}
            {...props}
        />
    );
};

const Table = ({
    allowResize,
    containerClassName,
    className,
    bleed = false,
    grid = false,
    striped = false,
    hoverable = false,
    noDivider = false,
    checkboxColumnClass,
    ref,
    ...props
}: TableProps) => {
    return (
        <TableContext.Provider
            value={{
                allowResize,
                bleed,
                grid,
                striped,
                hoverable,
                noDivider,
                checkboxColumnClass,
            }}
        >
            <div
                data-slot="table-container"
                className={cx(
                    "relative overflow-x-auto w-full [--table-border-color:--alpha(var(--color-border-strong)/60%)]",
                    grid && "border border-(--table-border-color)",
                    containerClassName,
                )}
            >
                {allowResize ? (
                    <ResizableTableContainer data-slot="table-resizable-container">
                        <Root className={className} ref={ref} {...props} noDivider={noDivider} />
                    </ResizableTableContainer>
                ) : (
                    <Root className={className} {...props} ref={ref} noDivider={noDivider} />
                )}
            </div>
        </TableContext.Provider>
    );
};

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
    <ColumnResizerPrimitive
        {...props}
        className={composeRenderProps(
            className,
            (className) =>
                cx(
                    "absolute inset-e-0 top-0 bottom-0 grid w-px touch-none place-content-center px-1",
                    "data-[resizable-direction=left]:cursor-e-resize",
                    "data-[resizable-direction=right]:cursor-w-resize",
                    "data-[resizable-direction=both]:cursor-ew-resize",
                    "data-[resizing]>div]:bg-primary",
                    className,
                ),
        )}
    >
        <div className="h-full w-px bg-border py-(--gutter-y)" />
    </ColumnResizerPrimitive>
);

const TableBody = <T extends object>({
    renderEmptyState,
    noDivider = false,
    className,
    ...props
}: { noDivider?: boolean } & TableBodyProps<T>) => {
    return (
        <TableBodyPrimitive
            data-slot="table-body"
            className={cx(
                "text-sm divide-(--table-border-color)",
                "in-fx-table-grid:divide-y",
                "in-fx-striped:*:even:bg-bg-muted/40",
                !noDivider && "divide-y",
                className,
            )}
            renderEmptyState={renderEmptyState ?? (() => (
                <div className="flex min-h-56 items-center justify-center sm:min-h-96">
                    <p>No records found.</p>
                </div>
            ))}
            {...props}
        />
    );
};

interface TableColumnProps extends ColumnProps {
    isResizable?: boolean;
    align?: "left" | "center" | "right"
}

const TableColumn = ({
    isResizable = false,
    align = "left",
    className,
    ...props
}: TableColumnProps) => {
    return (
        <Column
            data-slot="table-column"
            {...props}
            className={composeRenderProps(
                className,
                (className, { allowsSorting }) =>
                    cx(
                        "px-(--gutter-x) py-(--gutter-y) font-medium capitalize text-sm text-fg-title relative outline-hidden",
                        "dragging:cursor-grabbing",
                        {
                            "cursor-default":allowsSorting,
                            "text-left": align === "left",
                            "text-center": align === "center",
                            "text-right": align === "right",
                            "overflow-hidden truncate": isResizable,
                        },
                        className,

                    ),
            )}
        >
            {(values) => (
                <div className="inline-flex items-center gap-2 **:data-[slot=icon]:shrink-0">
                    {typeof props.children === "function"
                        ? props.children(values)
                        : props.children}
                    {values.allowsSorting && (
                        <span
                            className={cx(
                                "grid size-[1.15rem] flex-none shrink-0 place-content-center rounded bg-bg-muted/70 text-fg",
                                "*:data-[slot=icon]:size-3.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:transition-transform *:data-[slot=icon]:duration-200",
                                values.isHovered && "bg-secondary-fg/10",
                            )}
                        >
                            <span
                                aria-hidden
                                data-slot="icon"
                                className={cx(
                                    "iconify ph--arrow-up",
                                    values.sortDirection === "ascending" && "rotate-180",
                                )}
                            />
                        </span>
                    )}
                    {isResizable && <ColumnResizer />}
                </div>
            )}
        </Column>
    );
};

interface TableHeaderProps<T extends object> extends HeaderProps<T> {
    ref?: React.Ref<HTMLTableSectionElement>;
    fillGray?:boolean
}

const TableHeader = <T extends object>({
    children,
    ref,
    columns,
    fillGray=false,
    className,
    ...props
}: TableHeaderProps<T>) => {
    const { checkboxColumnClass, bleed } = useTableContext();
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
    return (
        <TableHeaderPrimitive
            data-slot="table-header"
            className={cx(
                "[&_tr]:divide-(--table-border-color) in-fx-table-grid:[&_tr]:divide-x",
                {
                    'bg-bg-muted/50': fillGray,
                },
                className,
            )}
            ref={ref}
            {...props}
        >
            {allowsDragging && (
                <Column
                    data-slot="table-column"
                    className={cx(
                        "first:ps-(--gutter-x,--spacing(2))",
                        !bleed && "sm:last:pe-1 sm:first:ps-1",
                    )}
                />
            )}
            {selectionBehavior === "toggle" && (
                <Column
                    data-slot="table-column"
                    className={cx("pl-px pr-0", checkboxColumnClass)}
                >
                    {selectionMode === "multiple" && <Checkbox slot="selection" />}
                </Column>
            )}
            <Collection items={columns}>{children}</Collection>
        </TableHeaderPrimitive>
    );
};

interface TableRowProps<T extends object> extends RowProps<T> {
    ref?: React.Ref<HTMLTableRowElement>;
}

const TableRow = <T extends object>({
    children,
    className,
    columns,
    id,
    ref,
    ...props
}: TableRowProps<T>) => {
    const { selectionBehavior, allowsDragging } = useTableOptions();
    const { checkboxColumnClass, bleed } = useTableContext();
    return (
        <Row
            ref={ref}
            data-slot="table-row"
            id={id}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isSelected, selectionMode, isDragging, isDisabled }) =>
                    cx(
                        "divide-(--table-border-color) in-fx-table-grid:divide-x",
                        "in-fx-hoverable:hover:bg-bg-muted/40",
                        "in-fx-striped:in-fx-hoverable:hover:bg-bg-muted/40",
                        (props.href || props.onAction || selectionMode === "multiple") && "hover:bg-bg-muted/60",
                        isSelected && "bg-(--table-selected-bg,var(--color-bg-surface)) text-(--table-selected-fg,var(--color-fg-subtitle))",
                        isDragging && "cursor-grabbing",
                        isDisabled && "opacity-50",
                        className,
                    ),
            )}
        >
            {allowsDragging && (
                <TableCell
                    className={cx(
                        "px-0",
                        "first:ps-(--gutter-x,--spacing(2))",
                        !bleed && "sm:last:pe-1 sm:first:ps-1",
                    )}
                >
                    <Button
                        slot="drag"
                        className="grid place-content-center rounded-xs px-[calc(var(--gutter-x)/2)] outline-hidden focus-visible:ring focus-visible:ring-ring"
                    >
                        <span
                            aria-hidden
                            data-slot="icon"
                            className="iconify ph--dots-six-vertical size-4"
                        />
                    </Button>
                </TableCell>
            )}
            {selectionBehavior === "toggle" && (
                <TableCell
                    className={cx(
                        "pl-px pr-0",
                        checkboxColumnClass,
                        "first:ps-(--gutter-x,--spacing(2))",
                        !bleed && "sm:last:pe-1 sm:first:ps-1",
                    )}
                >
                    <Checkbox slot="selection" />
                </TableCell>
            )}
            <Collection items={columns}>{children}</Collection>
        </Row>
    );
};

interface TableCellProps extends CellProps {
    ref?: React.Ref<HTMLTableCellElement>;
    align?: "left" | "center" | "right";
}

const TableCell = ({
    className,
    ref,
    align = "left",
    ...props
}: TableCellProps) => {
    const { allowResize } = useTableContext();
    return (
        <Cell
            ref={ref}
            data-slot="table-cell"
            {...props}
            className={composeRenderProps(
                className,
                (className) =>
                    cx(
                        "px-(--gutter-x) py-(--gutter-y) outline-hidden",

                        align === "left" && "text-left",
                        align === "center" && "text-center",
                        align === "right" && "text-right",
                        allowResize && "overflow-hidden truncate",
                        className,
                    ),
            )}
        />
    );
};

export type { TableProps, TableColumnProps, TableRowProps, TableCellProps, TableHeaderProps };
export {
    Table,
    TableBody as TableRows,
    TableCell,
    TableColumn,
    TableHeader as TableColumns,
    TableRow,
};
