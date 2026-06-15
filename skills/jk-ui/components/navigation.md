# Navigation Components

Use this reference for navigation, links, and layout routing components.

## Individual Component Files

- [tabs.md](./tabs.md)
- [breadcrumbs.md](./breadcrumbs.md)
- [link.md](./link.md)
- [navbar.md](./navbar.md)
- [sidebar.md](./sidebar.md)

## Navigation Patterns

| Pattern | Component | Description |
|---------|-----------|-------------|
| Tab navigation | `Tabs` + `TabList` + `Tab` + `TabPanel` | Content switching by tab |
| Breadcrumb trail | `Breadcrumbs` + `BreadcrumbsItem` | Hierarchical page location |
| Text link | `Link` | Inline navigation link |
| Mobile nav | `NavbarProvider` + subcomponents | Toggleable mobile navigation |
| App sidebar | `SidebarProvider` + subcomponents | Collapsible/resizable sidebar |

## Blocks

Use blocks when the user needs a full section or app shell instead of a single primitive.

### Application Blocks

| Block | Description |
|-------|-------------|
| `sidebar01`–`sidebar05` | Sidebar navigation layouts |
| `header01`–`header03` | App header with navigation |
| `shell01` | Full app shell with sidebar + header |

### Install Blocks

```bash
npx shadcn add https://jk-ui.unoforge.com/r/shell01.json
```
