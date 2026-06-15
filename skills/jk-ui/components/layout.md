# Layout

Components that structure page layout and screen regions.

## Container / Constraints

There is no `<Container>` component. Use Tailwind utility classes directly:

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {children}
</div>
```

For constrained prose widths:

```tsx
<div className="prose dark:prose-invert max-w-none">
  {/* rendered content */}
</div>
```

## Aspect Ratio

There is no `<AspectRatio>` component. Use Tailwind's aspect ratio utilities:

```tsx
<div className="aspect-video overflow-hidden rounded-lg">
  <img src="/thumbnail.jpg" alt="" className="size-full object-cover" />
</div>

<div className="aspect-square w-32">
  {/* 1:1 square */}
</div>
```

| Utility | Ratio |
|---------|-------|
| `aspect-video` | 16:9 |
| `aspect-square` | 1:1 |
| `aspect-[4/3]` | 4:3 (arbitrary) |

## Grid Layout

```tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(item => <Card key={item.id}>...</Card>)}
</div>
```

## Flex Layout

```tsx
<div className="flex items-center justify-between gap-4 flex-wrap">
  <Heading>Title</Heading>
  <Button>Action</Button>
</div>

<div className="flex flex-col gap-2">
  <div className="flex items-center gap-3">
    <Icon name="PhMagnifyingGlass" />
    <span>Search</span>
  </div>
</div>
```

## Stack (Vertical Rhythm)

```tsx
<div className="space-y-4">
  <Section />
  <Section />
</div>
```

Use `space-y-*` for consistent vertical spacing between sibling children.

## Avoid

- Do not import layout containers that don't exist. jk-ui has no `Container`, `Box`, `Stack`, `Flex`, or `AspectRatio` component.
- Do not nest `space-y-*` inside `flex` containers — flex gap is controlled by `gap-*`.
- Prefer `gap-*` on flex/grid parents over margin utilities on children.
