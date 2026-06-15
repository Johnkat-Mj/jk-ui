# Accessibility

jk-ui is built on **react-aria-components**, which provides WAI-ARIA compliant patterns out of the box. Most accessibility concerns are handled by the primitives, but follow these rules for correct usage.

## General Rules

- Prefer jk-ui primitives over custom clickable `div` or `span` elements.
- RAC primitives render semantic HTML: real `<button>`, `<a>`, `<input>`, `<select>`, `<dialog>`.
- Keep labels associated with form controls using the built-in `label` prop or `<Label>` component.
- Keyboard navigation, focus management, and screen reader announcements are built into RAC components.

## Verified Notes

- `Button` wraps `react-aria-components/Button` — renders a semantic `<button>` or `<a>` via `href`.
- `Input`, `Textarea`, `Select` use RAC primitives with built-in label and description slots.
- `Modal` uses RAC `ModalOverlay` + `Modal` with a real `<dialog>` element; supports `aria-label`, `aria-labelledby`, role.
- `Dialog` wraps RAC `Dialog` with proper heading hierarchy via `slot="title"`.
- `Tooltip` uses RAC `TooltipTrigger` + `Tooltip` with `OverlayArrow`.
- `Checkbox`, `Radio`, `Switch` use RAC primitives with full keyboard support.

## Practical Advice

- Use `aria-label` on icon-only buttons (`<Button iconOnly aria-label="Search" />`).
- Use the `label` prop on `Input` for form fields, or wrap with `<Label>` for custom layouts.
- Set `isDisabled` for disabled states (handles both visual and ARIA attributes).
- Use `onPress` instead of `onClick` on RAC buttons for proper keyboard/pointer unification.
