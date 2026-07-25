import type { SidebarGroupCat } from "../types";

export const sidebarGroups = [
    {
        name: "docs",
        title: "Documentation",
        path: "/docs/introduction",
        icon: "ph--sparkle",
    },
    {
        name: "components",
        title: "Components",
        path: "/components/",
        icon: "ph--code",
    },
    {
        name: "Blocks",
        title: "Blocks",
        path: "/blocks",
        icon: "ph--puzzle-piece",
    },
];

export const sidebarItems: SidebarGroupCat[] = [
    {
        label: "Getting Started",
        items: [
            {
                title: "Introduction",
                path: "/docs/introduction",
                description: "Overview of IntentUI components extension and architecture.",
                keywords: "IntentUI, Introduction, Overview, Flexiwind, Tailwind"
            },
            {
                title: "Principles",
                path: "/docs/principles",
                description: "Core design tokens and development philosophy.",
                keywords: "Design, Philosophy, Principles, Guidelines, Best Practices"
            },
            {
                title: "Setup",
                path: "/docs/installation",
                description: "Quick start guide to install and configure the library.",
                keywords: "Installation, Setup, Config, CLI, Getting Started"
            },
            {
                title: 'AI Skills',
                path: '/docs/skills',
                description: '',
                keywords: '',
            },
            {
                title: 'Dark Mode',
                path: '/docs/dark-mode',
                description: 'Implementing and toggling dark mode support.',
                keywords: 'Dark Mode, Color Schemes, Appearance, Tailwind Dark',
            },
            {
                title: 'Customization',
                path: '/docs/customization',
                description: 'Guide to customizing JK-UI components, themes, and variants.',
                keywords: 'Customization, Theming, Variants, Override',
            }
        ]
    },
    {
        label: "Design System",
        items: [
            {
                title: "Theming Tokens",
                path: "/docs/theme",
                description: "Foundation of React Aria's design system: semantic tokens for colors, surfaces, borders, typography, spacing, and radii to ensure visual consistency.",
                keywords: "Design System, Design Tokens, Semantic Tokens, Theming, Colors, Typography, UI Foundation"
            },
            {
                title: "Color Tokens",
                path: "/docs/theme/colors",
                description: "Semantic color tokens for backgrounds, text, borders, states, and emphasis. Built to support light and dark themes out of the box.",
                keywords: "Color Tokens, Semantic Colors, UI Colors, Light Mode, Dark Mode, Design System"
            },
            {
                title: "Buttons",
                path: "/docs/theme/buttons",
                description: "Global button styles, variants, sizes, and interaction states powered by React Aria utilities.",
                keywords: "Buttons, Button Variants, UI Actions, Design System, Primary Secondary Buttons"
            },
            {
                title: "UI Utilities & Variants",
                path: "/docs/theme/utilities",
                description: "High-level UI helpers and variants such as ui-solid, ui-soft, ui-subtle, ui-card, and other composable utilities.",
                keywords: "UI Utilities, UI Variants, ui-solid, ui-soft, ui-subtle, ui-card, Design Helpers"
            },
        ]
    },

    {
        label: "General & Navigation",
        items: [
            {
                title: "Components",
                hideInSidebar: true,
                path: "/components",
                description: "High-level UI helpers and variants such as ui-solid, ui-soft, ui-subtle, ui-card, and other composable utilities.",
                keywords: "UI Utilities, UI Variants, ui-solid, ui-soft, ui-subtle, ui-card, Design Helpers"
            },
            {
                title: "Button",
                path: "/components/button",
                description: "Clickable button for actions and triggers.",
                keywords: "button, action, click"
            },
            {
                title: "Link",
                path: "/components/link",
                description: "Styled anchor element for navigation.",
                keywords: "link, anchor, navigation"
            },
            {
                title: "Breadcrumbs",
                path: "/components/breadcrumbs",
                description: "Show the navigation path so users can move up the hierarchy.",
                keywords: "breadcrumbs, navigation, trail, path"
            },
            {
                title: "Toggle",
                path: "/components/toggle",
                description: "Single toggle button with pressed state.",
                keywords: "toggle, button, pressed"
            },
            {
                title: "Toggle Group",
                path: "/components/toggle-group",
                description: "Set of related toggle buttons with multiple selection.",
                keywords: "toggle, buttons, group"
            },
            {
                title: "Search Field",
                path: "/components/search-field",
                description: "Search input with optional icon and filtering.",
                keywords: "search, filter, input"
            },
            {
                title: "File trigger",
                path: "/components/file-trigger",
                description: "File selection trigger with custom styling.",
                keywords: "file, trigger, input"
            },
        ]
    },
    {
        label: "Form Inputs",
        items: [
            {
                title: "Input",
                path: "/components/input",
                description: "Single-line text field for general data entry.",
                keywords: "input, text field, form"
            },
            {
                title: "Number Field",
                path: "/components/number-field",
                description: "Input for numeric values with increment and decrement controls.",
                keywords: "number input, stepper, form"
            },
            {
                title: "Input OTP",
                path: "/components/input-otp",
                description: "Enter one-time passcodes with grouped inputs.",
                keywords: "otp, code, verification, input"
            },
            {
                title: "Input Date",
                path: "/components/input-date",
                description: "Form input specialized for selecting dates.",
                keywords: "date input, form, calendar"
            },
            {
                title: "Input Time",
                path: "/components/input-time",
                description: "Form input specialized for selecting times of day.",
                keywords: "time input, clock, form"
            },
            {
                title: "Select",
                path: "/components/select",
                description: "Dropdown input for choosing one option.",
                keywords: "select, dropdown, choice"
            },
            {
                title: "Checkbox",
                path: "/components/checkbox",
                description: "Let users select one or multiple items from a list.",
                keywords: "checkbox, selection, form"
            },
            {
                title: "Radio",
                path: "/components/radio",
                description: "Select a single option from a set of choices.",
                keywords: "radio, selection, form"
            },
            {
                title: "Combobox",
                path: "/components/combo-box",
                description: "Text input with a filtered list of options.",
                keywords: "combobox, autocomplete, listbox"
            },
            {
                title: "Multi Select",
                path: "/components/multi-select",
                description: "Pick multiple options, often displayed as tags or checkmarks.",
                keywords: "multi select, selection, tags, choices",
                state: "draft"
            },
            {
                title: "Switch",
                path: "/components/switch",
                description: "Binary on/off toggle with a thumb.",
                keywords: "switch, toggle, input",
            },
            {
                title: "Tag Field",
                path: "/components/tag-field",
                description: "Input that lets users add and remove tags.",
                keywords: "tags, chips, input"
            },
            {
                title: "Slider",
                path: "/components/slider",
                description: "Adjust a value by dragging a thumb along a track.",
                keywords: "slider, range, input",
            },
            {
                title: "Tabs",
                path: "/components/tabs",
                description: "Switch between related content panels.",
                keywords: "tabs, navigation, tablist"
            },
        ]
    },
    {
        label: "Date & Time",
        items: [
            {
                title: "Calendar",
                path: "/components/calendar",
                description: "Monthly calendar view for browsing and selecting dates.",
                keywords: "calendar, date picker, schedule"
            },
            {
                title: "Range Calendar",
                path: "/components/range-calendar",
                description: "Calendar view for selecting a continuous date range.",
                keywords: "range calendar, dates, picker"
            },
            {
                title: "Date Picker",
                path: "/components/date-picker",
                description: "Pick a single date from a popover calendar.",
                keywords: "date picker, calendar, input, date"
            },
            {
                title: "Date Range Picker",
                path: "/components/date-range-picker",
                description: "Pick a start and end date from a popover calendar.",
                keywords: "date range, calendar, picker, dates"
            },
        ]
    },
    {
        label: "Data Feedback",
        items: [
            {
                title: "Table",
                path: "/components/table",
                description: "Structured rows and columns with sorting or filtering.",
                keywords: "table, data, grid"
            },
            {
                title: "Alert",
                path: "/components/alert",
                description: "Contextual feedback messages for success, info, warning, or error.",
                keywords: "alert, notification, status, feedback"
            },
            {
                title: "Avatar",
                path: "/components/avatar",
                description: "Display a user image, initials, or fallback icon with sizing options.",
                keywords: "avatar, profile, user, image"
            },
            {
                title: "Badge",
                path: "/components/badge",
                description: "Small label for counts or status indicators.",
                keywords: "badge, status, label, count"
            },
            {
                title: "Callout",
                path: "/components/callout",
                description: "Highlight important information with icon, title, and copy.",
                keywords: "callout, banner, info, tip"
            },
            {
                title: "Card",
                path: "/components/card",
                description: "Content container with header, body, and footer structure.",
                keywords: "card, container, panel, layout"
            },
            {
                title: "Progress Bar",
                path: "/components/progress-bar",
                description: "Linear indicator of task or loading progress.",
                keywords: "progress, loading, status",
            },
            {
                title: "Loader",
                path: "/components/loader",
                description: "Linear indicator of task or loading progress.",
                keywords: "progress, loading, status",
            },
            {
                title: "Progress Bar Circle",
                path: "/components/progress-bar-circle",
                description: "Circular indicator of task or loading progress.",
                keywords: "progress, loading, circular",
            },
            {
                title: "Skeleton",
                path: "/components/skeleton",
                description: "Placeholder skeletons that show layout while loading.",
                keywords: "skeleton, loading, placeholder"
            },
            {
                title: "Aspect Ratio",
                path: "/components/aspect-ratio",
                description: "Container with flexible aspect ratios for images and videos.",
                keywords: "aspect ratio, container, image, video"
            },
            {
                title: "Keyboard",
                path: "/components/keyboard",
                description: "Display keyboard shortcuts and key combos.",
                keywords: "keyboard, shortcuts, hotkeys"
            },
            {
                title: "Separator",
                path: "/components/separator",
                description: "Horizontal or vertical line to divide content.",
                keywords: "separator, divider, layout"
            },
            {
                title: "Native Table",
                path: "/components/native-table",
                description: "Simple table using native HTML for responsive data display.",
                keywords: "table, data, responsive"
            },
            {
                title: "Tag Group",
                path: "/components/tag-group",
                description: "Display a collection of tags or pills.",
                keywords: "tags, chips, group"
            },

        ]
    },
    {
        label: "Drag & Drop",
        items: [
            {
                title: "Drag And Drop",
                path: "/components/drop-zone",
                description: "Build drag and drop interfaces easily and accessibly.",
                keywords: "drag and drop, file upload, component, accessibility"
            }
        ]
    },
    {
        label: "Overlays & Disclosure",
        items: [
            {
                title: "Dialog",
                path: "/components/dialog",
                description: "Accessible modal dialog for confirmations or forms.",
                keywords: "dialog, modal, overlay"
            },
            {
                title: "Modal",
                path: "/components/modal",
                description: "Blocking overlay dialog for focused tasks.",
                keywords: "modal, overlay, dialog"
            },
            {
                title: "Sheet",
                path: "/components/sheet",
                description: "Sliding drawer panel from screen edge.",
                keywords: "sheet, drawer, panel"
            },
            {
                title: "Popover",
                path: "/components/popover",
                description: "Contextual floating panel anchored to a trigger.",
                keywords: "popover, overlay, tooltip"
            },
            {
                title: "Disclosure",
                path: "/components/disclosure",
                description: "Toggle visibility of a single collapsible content section.",
                keywords: "disclosure, collapsible, toggle"
            },
            {
                title: "Disclosure Group",
                path: "/components/disclosure-group",
                description: "Accordion of collapsible sections with coordinated open state.",
                keywords: "accordion, disclosure, collapsible"
            },
            {
                title: "Menu",
                path: "/components/menu",
                description: "Dropdown list of actions triggered by a button.",
                keywords: "menu, dropdown, actions"
            },
        ]
    },
    {
        label: "Layout & Structure",
        items: [
            {
                title: "Sidebar",
                path: "/components/sidebar",
                description: "Vertical navigation rail for sections or tools.",
                keywords: "sidebar, navigation, layout"
            },
            {
                title: "Navbar",
                path: "/components/navbar",
                description: "Top navigation bar for primary links and actions.",
                keywords: "navbar, navigation, header",
            }
        ]
    },
    {
        label: "Visualizations",
        items: [
            {
                title: "Chart",
                path: "/components/chart",
                description: "Base chart wrapper for rendering data visualizations.",
                keywords: "chart, visualization, data"
            },
            {
                title: "Area Chart",
                path: "/components/area-chart",
                description: "Show trends over time with lines filled to the axis.",
                keywords: "chart, area chart, trend, data"
            },
            {
                title: "Bar Chart",
                path: "/components/bar-chart",
                description: "Compare categories using vertical or horizontal bars.",
                keywords: "chart, bar chart, comparison, categories"
            },
            {
                title: "Line Chart",
                path: "/components/line-chart",
                description: "Plot data points connected by lines to show trends.",
                keywords: "chart, line chart, trend, data"
            },
            {
                title: "Pie Chart",
                path: "/components/pie-chart",
                description: "Show part-to-whole relationships with pie slices.",
                keywords: "chart, pie chart, proportion"
            },
            {
                title: "Tracker",
                path: "/components/tracker",
                description: "Step or milestone tracker showing progress through stages.",
                keywords: "tracker, steps, progress"
            },
        ]
    },
    {
        label: "Typography",
        items: [
            {
                title: "Heading",
                path: "/components/heading",
                description: "Semantic heading levels (H1-H5) with consistent sizing.",
                keywords: "heading, h1, h2, h3, h4, h5, typography"
            },
            {
                title: "Icon",
                path: "/components/icon",
                description: "Iconify icon wrapper with size and color variants.",
                keywords: "icon, iconify, svg, image"
            },
            {
                title: "Text",
                path: "/components/text",
                description: "Semantic text component with intent-based styling.",
                keywords: "text, typography, paragraph, span"
            },
        ]
    },
];
