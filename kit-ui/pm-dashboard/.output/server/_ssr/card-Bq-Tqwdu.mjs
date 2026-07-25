import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { tv } from "../_libs/tailwind-variants.mjs";
import { cx, resolveIntent, uiStyles } from "./container-CK8U8-8t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-Bq-Tqwdu.js
var import_jsx_runtime = require_jsx_runtime();
var cardVariants = tv({
	base: "relative text-sm [--gutter:--spacing(4)]",
	variants: {
		size: {
			md: "ui-card [--card-padding:var(--ui-padding,--spacing(4))]",
			none: "",
			custom: "ui-card"
		},
		fill: {
			default: "bg-card text-foreground",
			gray: "bg-card-gray text-foreground",
			none: ""
		},
		border: {
			true: "ring-1 ring-border-card",
			false: ""
		},
		shadow: {
			true: "shadow-sm",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		fill: "default",
		border: true,
		shadow: true
	}
});
var Card = ({ variant = "none", intent, size = "md", fill = "default", border = true, shadow = false, className, ...rest }) => {
	if (variant === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cardVariants({
			size,
			fill,
			border,
			shadow,
			className
		}),
		...rest
	});
	const variantClasses = uiStyles({
		variant,
		intent: resolveIntent(variant, intent)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cx(cardVariants({
			size,
			fill: "none",
			border: false,
			shadow: false
		}), variantClasses, className),
		...rest
	});
};
tv({
	base: "pb-(--gutter)",
	variants: {
		direction: {
			column: "flex-col",
			row: "flex-row"
		},
		justify: {
			start: "justify-start",
			end: "justify-end",
			center: "justify-center"
		},
		gap: {
			"1": "gap-1",
			"2": "gap-2",
			"3": "gap-3",
			"4": "gap-4"
		},
		flexNone: {
			true: "",
			false: "flex"
		}
	},
	defaultVariants: {
		direction: "column",
		justify: "start",
		gap: "2",
		flexNone: false
	}
});
tv({
	base: "text-balance text-foreground",
	variants: {
		size: {
			sm: "text-sm md:text-base/6",
			md: "text-base/6 md:text-lg/6",
			lg: "text-lg/6 md:text-xl/6",
			xl: "text-xl/6 md:text-2xl/6"
		},
		weight: {
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold"
		}
	},
	defaultVariants: {
		size: "lg",
		weight: "semibold"
	}
});
tv({
	base: "text-pretty",
	variants: { size: {
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { size: "sm" }
});
tv({
	base: "flex flex-col",
	variants: { gap: {
		"1": "gap-1",
		"2": "gap-2",
		"3": "gap-3",
		"4": "gap-4"
	} },
	defaultVariants: { gap: "3" }
});
//#endregion
export { Card };
