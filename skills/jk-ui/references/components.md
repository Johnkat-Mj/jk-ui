# Components Reference

Full index of jk-ui components. Each component is installed individually via shadcn CLI and imported as a React component.

Base install command for all components:
```bash
npx shadcn add https://jk-ui.unoforge.com/r/{name}.json
```

All components export from `@/components/jk/{name}` (in user projects, the path may vary based on their `components.json` config).

## Form & Input

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Button | `button` | `Button`, `buttonStyles`, `ButtonRadius` |
| Input | `input` | `Input`, `InputGroup`, `InputLeading`, `InputTrailing`, `Label`, `FieldError`, `Description` |
| Textarea | `textarea` | `Textarea` |
| Select | `select` | `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectSection`, `SelectLabel`, `SelectDescription`, `SelectSeparator` |
| Checkbox | `checkbox` | `Checkbox`, `CheckboxGroup`, `CheckboxLabel` |
| Radio | `radio` | `Radio`, `RadioGroup` |
| Switch | `switch` | `Switch` |
| Text Field | `text-field` | `TextField` |
| Number Field | `number-field` | `NumberField` |
| Search Field | `search-field` | `SearchField` |
| Combo Box | `combo-box` | `ComboBox` |
| Slider | `slider` | `Slider` |
| Input OTP | `input-otp` | `InputOTP` |
| Input Date | `input-date` | `InputDate` |
| Input Time | `input-time` | `InputTime` |
| File Trigger | `file-trigger` | `FileTrigger` |
| Drop Zone | `drop-zone` | `DropZone` |
| Tag Field | `tag-field` | `TagField` |
| Tag Group | `tag-group` | `TagGroup` |
| Field Button | `field-button` | `FieldButton` |

## Layout & Structure

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Card | `card` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardBody`, `CardFooter` |
| Separator | `separator` | `Separator` |
| Aspect Ratio | `aspect-ratio` | `AspectRatio` |
| Skeleton | `skeleton` | `Skeleton` |

## Navigation

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Tabs | `tabs` | `Tabs`, `TabList`, `Tab`, `TabPanel` |
| Breadcrumbs | `breadcrumbs` | `Breadcrumbs`, `BreadcrumbsItem`, `BreadcrumbSeparator` |
| Link | `link` | `Link` |
| Navbar | `navbar` | `NavbarProvider`, `NavbarBase`, `NavbarToggler`, `NavbarClose`, `NavbarOverlayElement`, `useNavbarContext` |
| Sidebar | `sidebar` | `SidebarProvider`, `SidebarBase`, `SidebarToggler`, `SidebarClose`, `SidebarResizer`, `SidebarOverlayElement`, `useSidebarContext` |

## Overlays & Disclosure

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Dialog | `dialog` | `Dialog`, `DialogTrigger`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogBody`, `DialogFooter`, `DialogClose`, `DialogCloseIcon` |
| Modal | `modal` | `Modal`, `ModalTrigger`, `ModalContent`, `ModalHeader`, `ModalTitle`, `ModalDescription`, `ModalBody`, `ModalFooter`, `ModalClose` |
| Sheet | `sheet` | `Sheet`, `SheetContent`, `SheetTrigger`, `SheetHeader`, `SheetTitle`, `SheetBody`, `SheetFooter`, `SheetClose` |
| Popover | `popover` | `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverHeader`, `PopoverTitle`, `PopoverBody`, `PopoverFooter`, `PopoverClose`, `PopoverDescription` |
| Tooltip | `tooltip` | `Tooltip`, `TooltipTrigger`, `TooltipContent` |
| Dropdown | `dropdown` | `DropdownItem`, `DropdownLabel`, `DropdownDescription`, `DropdownSeparator`, `DropdownSection`, `DropdownKeyboard`, `DropdownIcon`, `dropdownItemStyles`, `dropdownSectionStyles` |
| Menu | `menu` | `Menu` |
| Disclosure Group | `disclosure` | `DisclosureGroup`, `Disclosure`, `DisclosureTrigger`, `DisclosurePanel`, `DisclosureItem`, `DisclosureItemTrigger`, `DisclosureItemTriggerIndicator` |

## Data & Feedback

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Table | `table` | `Table`, `TableRows`, `TableRow`, `TableCell`, `TableColumn`, `TableColumns` |
| Native Table | `native-table` | `NativeTable` |
| Alert | `alert` | `Alert` |
| Badge | `badge` | `Badge` |
| Avatar | `avatar` | `Avatar` |
| Callout | `callout` | `Callout`, `CalloutTitle`, `CalloutDescription` |
| Loader | `loader` | `Loader` |
| Progress Bar | `progress-bar` | `ProgressBar` |
| Progress Bar Circle | `progress-bar-circle` | `ProgressBarCircle` |
| Keyboard (Kbd) | `keyboard` | `Keyboard` |

## Charts (Recharts)

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Chart | `chart` | `Chart`, `ChartLegend`, `ChartTooltip` |
| Area Chart | `area-chart` | `AreaChart` |
| Bar Chart | `bar-chart` | `BarChart` |
| Line Chart | `line-chart` | `LineChart` |
| Pie Chart | `pie-chart` | `PieChart` |
| Leaderboard | `leaderboard` | `Leaderboard` |
| Tracker | `tracker` | `Tracker` |

## Typography

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Heading | `heading` | `Heading` |
| Text | `text` | `Text` |
| Icon | `icon` | `Icon` |

## Calendar / Date

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Calendar | `calendar` | `Calendar` |
| Range Calendar | `range-calendar` | `RangeCalendar` |

## Other

| Component | Install Name | Exports |
|-----------|-------------|---------|
| Toggle | `toggle` | `Toggle` |
| Toggle Group | `toggle-group` | `ToggleGroup` |
| Command Menu | `command-menu` | `CommandMenu` |

## Detailed Component Files

For detailed API, props tables, examples, and guidance, see the individual files in the `components/` directory.

## Installing Multiple Components

```bash
npx shadcn add https://jk-ui.unoforge.com/r/button.json https://jk-ui.unoforge.com/r/card.json https://jk-ui.unoforge.com/r/input.json
```
