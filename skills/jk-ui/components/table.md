## Usage

```tsx
import { Table, TableColumns, TableColumn, TableBody as TableRows, TableRow, TableCell } from "@/components/jk/table"

<Table striped hoverable>
  <TableColumns>
    <TableColumn isRowHeader>Name</TableColumn>
    <TableColumn>Email</TableColumn>
    <TableColumn align="right">Role</TableColumn>
  </TableColumns>
  <TableRows items={users}>
    {(user) => (
      <TableRow id={user.id} columns={["name", "email", "role"]}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell align="right">{user.role}</TableCell>
      </TableRow>
    )}
  </TableRows>
</Table>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/table.json
```

Depends on: `@jk-ui/checkbox`

## API

### Table Props

| Prop | Type | Default |
|------|------|---------|
| striped | boolean | `false` |
| hoverable | boolean | `false` |
| grid | boolean | `false` |
| bleed | boolean | `false` |
| allowResize | boolean | `false` |
| noDivider | boolean | `false` |
| checkboxColumnClass | string | — |

### TableColumn Props

| Prop | Type | Default |
|------|------|---------|
| isResizable | boolean | `false` |
| align | `left` `center` `right` | `left` |
| allowsSorting | boolean | `false` |

### TableRow Props

Accepts RAC `RowProps` with `columns` for collection rendering. Supports selection via `Checkbox`.

### TableCell Props

| Prop | Type | Default |
|------|------|---------|
| align | `left` `center` `right` | `left` |

## Exports

| Export | Alias for |
|--------|-----------|
| `Table` | Main table container |
| `TableColumns` | `TableHeader` |
| `TableRows` | `TableBody` |
| `TableRow` | `Row` |
| `TableCell` | `Cell` |
| `TableColumn` | `Column` |

## Guidance

- Uses RAC `Table` with collection API — iterate items with `items` prop on `TableRows`.
- Supports row selection, sorting indicators, drag handles, and column resizing.
- `TableRows` has a `renderEmptyState` prop for empty states.

## Avoid

- Do not manually iterate with `.map()` — use the RAC collection pattern with `columns` prop.
- `TableBody` is exported as `TableRows` — use the aliased name.
