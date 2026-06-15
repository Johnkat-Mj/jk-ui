# Composition Patterns

Common React composition patterns for jk-ui components.

## Button with Icon

```tsx
import { Button } from "@/components/jk/button"

<Button size="md">
  <span aria-hidden="true" className="iconify ph--atom mr-1.5" />
  Leading
</Button>

<Button size="md">
  Trailing
  <span aria-hidden="true" className="iconify ph--atom ml-1.5" />
</Button>

<Button size="xs" iconOnly aria-label="Search">
  <span aria-hidden="true" className="iconify ph--magnifying-glass" />
</Button>
```

## Input Group (Icon + Input)

```tsx
import { Input, InputGroup, InputLeading, InputTrailing } from "@/components/jk/input"

<InputGroup>
  <InputLeading absolute>
    <span className="iconify ph--at text-sm" />
  </InputLeading>
  <Input variant="unstyled" type="email" placeholder="you@example.com" className="ps-9" />
</InputGroup>
```

Rules: Use `variant="unstyled"` inside InputGroup, never pass `label` to the grouped input.

## Modal with Dialog Subcomponents

```tsx
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/jk/modal"
import { Button } from "@/components/jk/button"

<Modal>
  <Button variant="outline">Open</Button>
  <ModalContent size="md" isBlurred>
    {({ close }) => (
      <>
        <ModalHeader>
          <ModalTitle>Title</ModalTitle>
          <ModalDescription>Description</ModalDescription>
        </ModalHeader>
        <ModalBody>Content</ModalBody>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button onPress={close}>Save</Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>
```

ModalContent supports `size` (`2xs` to `5xl`, `fullscreen`), `isBlurred`, `closeButton`, `isDismissable`.

## Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/jk/card"

<Card size="md" fill="default" border shadow>
  <CardHeader direction="column" gap="2">
    <CardTitle level={2} size="lg" weight="semibold">Title</CardTitle>
    <CardDescription size="sm">Description</CardDescription>
  </CardHeader>
  <CardBody gap="3">Content</CardBody>
  <CardFooter className="flex justify-end gap-2">
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

## Table (RAC)

```tsx
import { Table, TableColumns, TableColumn, TableBody as TableRows, TableRow, TableCell } from "@/components/jk/table"

<Table striped hoverable>
  <TableColumns>
    <TableColumn isRowHeader>Name</TableColumn>
    <TableColumn>Email</TableColumn>
    <TableColumn align="right">Role</TableColumn>
  </TableColumns>
  <TableRows items={data}>
    {(item) => (
      <TableRow id={item.id} columns={["name", "email", "role"]}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell align="right">{item.role}</TableCell>
      </TableRow>
    )}
  </TableRows>
</Table>
```

Table props: `striped`, `hoverable`, `grid`, `bleed`, `allowResize`, `noDivider`.

## Disclosure Group (Accordion)

```tsx
import { DisclosureGroup, DisclosureItem, DisclosureItemTrigger, DisclosurePanel, DisclosureItemTriggerIndicator } from "@/components/jk/disclosure-group"

<DisclosureGroup variant="default" allowsMultipleExpanded>
  <DisclosureItem>
    <DisclosureItemTrigger>Item 1</DisclosureItemTrigger>
    <DisclosurePanel>Content 1</DisclosurePanel>
  </DisclosureItem>
  <DisclosureItem>
    <DisclosureItemTrigger>Item 2</DisclosureItemTrigger>
    <DisclosurePanel>Content 2</DisclosurePanel>
  </DisclosureItem>
</DisclosureGroup>
```

DisclosureGroup variants: `default`, `outline`, `soft`, `solid`, `subtle`, `link`, `none`.

## Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/jk/tooltip"

<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent arrow>
    Tooltip content
  </TooltipContent>
</Tooltip>
```

## Dropdown / Menu Items

```tsx
import { DropdownItem, DropdownLabel, DropdownDescription, DropdownSeparator, DropdownSection, DropdownIcon } from "@/components/jk/dropdown"

<DropdownItem>
  <DropdownIcon><span className="iconify ph--user" /></DropdownIcon>
  <DropdownLabel>Profile</DropdownLabel>
  <DropdownDescription>View your profile</DropdownDescription>
</DropdownItem>
```
