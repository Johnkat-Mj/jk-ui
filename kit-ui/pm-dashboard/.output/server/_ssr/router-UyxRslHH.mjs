import { __toESM } from "../_runtime.mjs";
import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { tv } from "../_libs/tailwind-variants.mjs";
import { Container, cx, focusRing, resolveIntent, uiStyles } from "./container-CK8U8-8t.mjs";
import { $42ceafc619f9c3ba$export$fb8073518f34e6ec } from "../_libs/react-aria+react-stately.mjs";
import { $29a5029ff43c9612$export$b94867ecbd698f21, $3a442827418ebe87$export$eb2fcfdbd7ba97d4, $41fb335299a4a39e$export$f5b8910cec6cf069, $43a3b93638fe5db9$export$b04be29aa201d4f5, $49319ee1285aa241$export$27d2ad3c5815583e, $49319ee1285aa241$export$2ce376c2cc3355c8, $49319ee1285aa241$export$4b1545b4f2016d26, $49319ee1285aa241$export$d9b273488cd8ce6f, $49319ee1285aa241$export$ecabc99eeffab7ca, $4fcfe18fac72dabd$export$746d02f47f4d381, $53e61d82d8b8611d$export$8b251419efc915eb, $542a13ca2fa5b484$export$5b6b19405a83ff9d, $7230ffa83bc0c2cf$export$c245e6201fed2f75, $7705c033048f6da7$export$353f5b6fc5456de1, $e28ab3efe3e87743$export$1ff3c3f08ae963c0, $efe09c6d1c304b50$export$5f1af8db9871e1d6 } from "../_libs/react-aria-components+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-UyxRslHH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var globals_default = "/assets/globals-CWqjks_Z.css";
var buttonVariants = tv({
	base: "btn",
	variants: {
		variant: {
			solid: "btn-solid",
			outline: "btn-outline",
			soft: "btn-soft",
			ghost: "btn-ghost",
			"white/black-outline": "btn-white-black-base btn-white-black",
			none: ""
		},
		intent: {
			"solid-primary": "[--btn-solid-top-shadow:var(--color-primary-500)] [--btn-solid-bottom-shadow:var(--color-primary-700)] [--btn-solid-top-shadow-hover:var(--color-primary-600)] [--btn-solid-bottom-shadow-hover:var(--color-primary-800)] [--btn-solid-color:var(--color-primary-600)] [--btn-solid-color-hover:var(--color-primary-700)] [--btn-solid-color-press:var(--color-primary-800)] text-white",
			"solid-secondary": "[--btn-solid-top-shadow:var(--color-secondary-500)] [--btn-solid-bottom-shadow:var(--color-secondary-700)] [--btn-solid-top-shadow-hover:var(--color-secondary-600)] [--btn-solid-bottom-shadow-hover:var(--color-secondary-800)] [--btn-solid-color:var(--color-secondary-600)] [--btn-solid-color-hover:var(--color-secondary-700)] [--btn-solid-color-press:var(--color-secondary-800)] text-white",
			"solid-success": "[--btn-solid-top-shadow:var(--color-success-500)] [--btn-solid-bottom-shadow:var(--color-success-700)] [--btn-solid-top-shadow-hover:var(--color-success-600)] [--btn-solid-bottom-shadow-hover:var(--color-success-800)] [--btn-solid-color:var(--color-success-600)] [--btn-solid-color-hover:var(--color-success-700)] [--btn-solid-color-press:var(--color-success-800)] text-white",
			"solid-danger": "[--btn-solid-top-shadow:var(--color-danger-500)] [--btn-solid-bottom-shadow:var(--color-danger-700)] [--btn-solid-top-shadow-hover:var(--color-danger-600)] [--btn-solid-bottom-shadow-hover:var(--color-danger-800)] [--btn-solid-color:var(--color-danger-600)] [--btn-solid-color-hover:var(--color-danger-700)] [--btn-solid-color-press:var(--color-danger-800)] text-white",
			"solid-neutral": "[--btn-solid-top-shadow:var(--color-gray-800)] [--btn-solid-bottom-shadow:var(--color-gray-700)] [--btn-solid-top-shadow-hover:var(--color-gray-800)] [--btn-solid-bottom-shadow-hover:var(--color-gray-900)] [--btn-solid-color:var(--color-gray-900)] [--btn-solid-color-hover:var(--color-gray-950)] [--btn-solid-color-press:var(--color-gray-900)] text-background dark:[--btn-solid-top-shadow:var(--color-gray-200)] dark:[--btn-solid-bottom-shadow:var(--color-gray-100)] dark:[--btn-solid-top-shadow-hover:var(--color-gray-300)] dark:[--btn-solid-bottom-shadow-hover:var(--color-gray-200)] dark:[--btn-solid-color:var(--color-gray-100)] dark:[--btn-solid-color-hover:var(--color-white)] dark:[--btn-solid-color-press:var(--color-gray-200)]",
			"outline-gray": "[--btn-outline-bg:var(--color-gray-50)] [--btn-outline-color:var(--color-gray-200)] [--btn-outline-text-color:var(--color-gray-800)] [--btn-outline-bg-hover:--alpha(var(--color-gray-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-gray-500)/30%)] dark:[--btn-outline-text-color:var(--color-gray-300)] dark:[--btn-outline-bg:--alpha(var(--color-gray-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-gray-500)/15%)]",
			"outline-primary": "[--btn-outline-bg:var(--color-primary-50)] [--btn-outline-color:var(--color-primary-200)] [--btn-outline-text-color:var(--color-primary-800)] [--btn-outline-bg-hover:--alpha(var(--color-primary-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-primary-500)/30%)] dark:[--btn-outline-text-color:var(--color-primary-300)] dark:[--btn-outline-bg:--alpha(var(--color-primary-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-primary-500)/10%)]",
			"outline-secondary": "[--btn-outline-bg:var(--color-secondary-50)] [--btn-outline-color:var(--color-secondary-200)] [--btn-outline-text-color:var(--color-secondary-800)] [--btn-outline-bg-hover:--alpha(var(--color-secondary-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-secondary-500)/30%)] dark:[--btn-outline-text-color:var(--color-secondary-300)] dark:[--btn-outline-bg:--alpha(var(--color-secondary-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-secondary-500)/10%)]",
			"outline-success": "[--btn-outline-bg:var(--color-success-50)] [--btn-outline-color:var(--color-success-200)] [--btn-outline-text-color:var(--color-success-800)] [--btn-outline-bg-hover:--alpha(var(--color-success-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-success-500)/30%)] dark:[--btn-outline-text-color:var(--color-success-300)] dark:[--btn-outline-bg:--alpha(var(--color-success-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-success-500)/10%)]",
			"outline-danger": "[--btn-outline-bg:var(--color-danger-50)] [--btn-outline-color:var(--color-danger-200)] [--btn-outline-text-color:var(--color-danger-800)] [--btn-outline-bg-hover:--alpha(var(--color-danger-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-danger-500)/30%)] dark:[--btn-outline-text-color:var(--color-danger-300)] dark:[--btn-outline-bg:--alpha(var(--color-danger-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-danger-500)/10%)]",
			"outline-neutral": "[--btn-outline-bg:var(--color-gray-50)] [--btn-outline-color:var(--color-gray-200)] [--btn-outline-text-color:var(--color-gray-800)] [--btn-outline-bg-hover:--alpha(var(--color-gray-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-gray-500)/30%)] dark:[--btn-outline-text-color:var(--color-gray-300)] dark:[--btn-outline-bg:--alpha(var(--color-gray-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-gray-500)/15%)]",
			"soft-gray": "[--btn-soft-bg-color:var(--color-gray-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-soft-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-soft-text-color:var(--color-gray-800)] [--btn-soft-text-color-hover:var(--color-gray-900)] dark:[--btn-soft-bg-color:--alpha(var(--color-gray-600)/20%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-soft-text-color:var(--color-gray-100)] dark:[--btn-soft-text-color-hover:var(--color-gray-50)]",
			"soft-primary": "[--btn-soft-bg-color:var(--color-primary-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-primary-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-primary-400)/40%)] [--btn-soft-text-color:var(--color-primary-600)] [--btn-soft-text-color-hover:var(--color-primary-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-primary-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-primary-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-primary-600)/25%)] dark:[--btn-soft-text-color:var(--color-primary-300)] dark:[--btn-soft-text-color-hover:var(--color-primary-300)]",
			"soft-secondary": "[--btn-soft-bg-color:var(--color-secondary-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-secondary-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-secondary-400)/40%)] [--btn-soft-text-color:var(--color-secondary-600)] [--btn-soft-text-color-hover:var(--color-secondary-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-secondary-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-secondary-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-secondary-600)/25%)] dark:[--btn-soft-text-color:var(--color-secondary-300)] dark:[--btn-soft-text-color-hover:var(--color-secondary-300)]",
			"soft-success": "[--btn-soft-bg-color:var(--color-success-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-success-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-success-400)/40%)] [--btn-soft-text-color:var(--color-success-600)] [--btn-soft-text-color-hover:var(--color-success-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-success-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-success-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-success-600)/25%)] dark:[--btn-soft-text-color:var(--color-success-300)] dark:[--btn-soft-text-color-hover:var(--color-success-300)]",
			"soft-danger": "[--btn-soft-bg-color:var(--color-danger-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-danger-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-danger-400)/40%)] [--btn-soft-text-color:var(--color-danger-600)] [--btn-soft-text-color-hover:var(--color-danger-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-danger-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-danger-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-danger-600)/25%)] dark:[--btn-soft-text-color:var(--color-danger-300)] dark:[--btn-soft-text-color-hover:var(--color-danger-300)]",
			"soft-neutral": "[--btn-soft-bg-color:var(--color-gray-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-soft-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-soft-text-color:var(--color-gray-800)] [--btn-soft-text-color-hover:var(--color-gray-900)] dark:[--btn-soft-bg-color:--alpha(var(--color-gray-600)/20%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-soft-text-color:var(--color-gray-100)] dark:[--btn-soft-text-color-hover:var(--color-gray-50)]",
			"ghost-gray": "[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-ghost-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-ghost-text-color:var(--color-gray-800)] [--btn-ghost-text-color-hover:var(--color-gray-900)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-ghost-text-color:var(--color-gray-100)] dark:[--btn-ghost-text-color-hover:var(--color-gray-50)]",
			"ghost-primary": "[--btn-ghost-bg-color-hover:--alpha(var(--color-primary-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-primary-100)/70%)] [--btn-ghost-text-color:var(--color-primary-600)] [--btn-ghost-text-color-hover:var(--color-primary-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-primary-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-primary-600)/25%)] dark:[--btn-ghost-text-color:var(--color-primary-300)] dark:[--btn-ghost-text-color-hover:var(--color-primary-200)]",
			"ghost-secondary": "[--btn-ghost-bg-color-hover:--alpha(var(--color-secondary-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-secondary-100)/70%)] [--btn-ghost-text-color:var(--color-secondary-600)] [--btn-ghost-text-color-hover:var(--color-secondary-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-secondary-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-secondary-600)/25%)] dark:[--btn-ghost-text-color:var(--color-secondary-300)] dark:[--btn-ghost-text-color-hover:var(--color-secondary-200)]",
			"ghost-danger": "[--btn-ghost-bg-color-hover:--alpha(var(--color-danger-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-danger-100)/70%)] [--btn-ghost-text-color:var(--color-danger-600)] [--btn-ghost-text-color-hover:var(--color-danger-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-danger-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-danger-600)/25%)] dark:[--btn-ghost-text-color:var(--color-danger-300)] dark:[--btn-ghost-text-color-hover:var(--color-danger-200)]",
			"ghost-neutral": "[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-ghost-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-ghost-text-color:var(--color-gray-800)] [--btn-ghost-text-color-hover:var(--color-gray-900)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-ghost-text-color:var(--color-gray-100)] dark:[--btn-ghost-text-color-hover:var(--color-gray-50)]",
			default: "",
			none: ""
		},
		size: {
			xs: "btn-xs",
			sm: "btn-sm",
			md: "btn-md",
			lg: "btn-lg",
			xl: "btn-xl",
			none: ""
		},
		iconOnly: {
			true: "",
			false: ""
		},
		radius: {
			none: "",
			default: "rounded-lg",
			circle: "rounded-full"
		}
	},
	compoundVariants: [
		{
			iconOnly: true,
			size: "xs",
			class: "btn-icon-xs"
		},
		{
			iconOnly: true,
			size: "sm",
			class: "btn-icon-sm"
		},
		{
			iconOnly: true,
			size: "md",
			class: "btn-icon-md"
		},
		{
			iconOnly: true,
			size: "lg",
			class: "btn-icon-lg"
		},
		{
			iconOnly: true,
			size: "xl",
			class: "btn-icon-xl"
		}
	],
	defaultVariants: {
		variant: "solid",
		intent: "solid-primary",
		size: "md",
		iconOnly: true,
		radius: "default"
	}
});
var defaultIntents = {
	solid: "solid-primary",
	outline: "outline-gray",
	soft: "soft-gray",
	ghost: "ghost-gray",
	"white/black-outline": "default",
	none: "none"
};
var buttonStyles = ({ className, variant = "solid", intent, size = "md", iconOnly = false, radius }) => {
	const classes = buttonVariants({
		variant,
		intent: intent ?? defaultIntents[variant],
		size,
		iconOnly,
		className,
		radius
	});
	return iconOnly ? classes.replace(/\bbtn-(xs|sm|md|lg|xl)\b/g, "").replace(/\s+/g, " ").trim() : classes;
};
var Button$1 = ({ className, variant = "solid", intent, size = "md", iconOnly = false, radius, ref, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($7705c033048f6da7$export$353f5b6fc5456de1, {
		ref,
		...props,
		className: buttonStyles({
			radius,
			variant,
			intent,
			size,
			iconOnly,
			className
		})
	});
};
var INITIAL_STATE = {
	isOpenSidebar: false,
	isResizedSidebar: false
};
var sidebarReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE": return {
			...state,
			isOpenSidebar: !state.isOpenSidebar
		};
		case "OPEN": return {
			...state,
			isOpenSidebar: true
		};
		case "CLOSE": return {
			...state,
			isOpenSidebar: false
		};
		case "RESIZE": return {
			...state,
			isResizedSidebar: !state.isResizedSidebar
		};
		default: return state;
	}
};
var SidebarContext = (0, import_react.createContext)(INITIAL_STATE);
var useSidebarContext = () => {
	const sidebarCntxt = (0, import_react.useContext)(SidebarContext);
	if (sidebarCntxt === null) throw Error("Error on context");
	return sidebarCntxt;
};
var SidebarProvider = ({ children }) => {
	const [state, dispatch] = (0, import_react.useReducer)(sidebarReducer, INITIAL_STATE);
	const openSidebar = () => {
		dispatch({ type: "OPEN" });
	};
	const closeSidebar = () => {
		dispatch({ type: "CLOSE" });
	};
	const toggleSidebar = () => {
		dispatch({ type: "TOGGLE" });
	};
	const resizeSidebar = () => {
		dispatch({ type: "RESIZE" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext.Provider, {
		value: {
			isOpenSidebar: state.isOpenSidebar,
			isResizedSidebar: state.isResizedSidebar,
			openSidebar,
			closeSidebar,
			toggleSidebar,
			resizeSidebar
		},
		children
	});
};
var SidebarOverlayElement = ({ isBlured, isStatic, className, ...props }) => {
	const { isOpenSidebar, closeSidebar } = useSidebarContext();
	const closeSidebar_ = () => {
		if (!isStatic) closeSidebar?.();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-state": isOpenSidebar ? "open" : "close",
		className: cx("fixed inset-0 z-40 bg-gray-800/40", isBlured ? "backdrop-blur-sm" : "", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close sidebar",
			onClick: closeSidebar_,
			"data-state": isOpenSidebar ? "open" : "close",
			className: "outline-none ring-0 before:absolute before:inset-0 appearance-none bg-transparent"
		})
	});
};
var SidebarToggler = ({ variant = "ghost", intent, className, iconOnly = true, size = "sm", ...props }) => {
	const { toggleSidebar } = useSidebarContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($7705c033048f6da7$export$353f5b6fc5456de1, {
		onPress: () => toggleSidebar?.(),
		className: buttonStyles({
			variant,
			intent,
			iconOnly,
			size,
			className: `group ${className}`
		}),
		...props
	});
};
var SidebarBase = ({ children, ...props }) => {
	const { isResizedSidebar, isOpenSidebar } = useSidebarContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"data-state": isOpenSidebar ? "open" : "close",
		"data-resized": isResizedSidebar ? "true" : null,
		...props,
		children
	});
};
var Avatar = ({ size = "default", radius = "circle", className, ...props }) => {
	const imageSizes = {
		default: "avatar-md",
		xs: "avatar-xs",
		sm: "avatar-sm",
		md: "avatar-md",
		lg: "avatar-lg",
		xl: "avatar-xl"
	};
	const placeholderSizes = {
		default: "avatar-placeholder-md",
		xs: "avatar-placeholder-xs",
		sm: "avatar-placeholder-sm",
		md: "avatar-placeholder-md",
		lg: "avatar-placeholder-lg",
		xl: "avatar-placeholder-xl"
	};
	const radii = {
		none: "",
		default: "rounded-lg",
		circle: "rounded-full"
	};
	if ("src" in props && props.src) {
		const { src, alt = "", ...restProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			"data-slot": "avatar",
			className: cx(imageSizes[size] ?? imageSizes["default"], "object-cover", radii[radius] ?? radii["circle"], className),
			...restProps
		});
	}
	const { text, variant = "solid", intent, children, ...restProps } = props;
	const resolvedIntent = resolveIntent(variant, intent);
	const variantClasses = uiStyles({
		variant: variant === "default" ? "none" : variant,
		intent: resolvedIntent
	});
	const placeholderRadius = radius === "none" ? "" : radii[radius] ?? radii["circle"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "avatar",
		className: cx("avatar-placeholder", placeholderSizes[size] ?? placeholderSizes["default"], variantClasses, placeholderRadius, className),
		...restProps,
		children: text ? text : children
	});
};
tv({
	base: "font-mono",
	variants: { size: {
		none: "",
		default: "kbd-md",
		xs: "kbd-xs",
		sm: "kbd-sm",
		lg: "kbd-lg",
		xl: "kbd-xl"
	} },
	defaultVariants: { size: "default" }
});
var dropdownSectionStyles = tv({ slots: {
	section: "col-span-full grid grid-cols-[auto_1fr]",
	header: "col-span-full px-3 py-2 font-medium text-muted-foreground text-sm/6 sm:px-2.5 sm:py-1.5 sm:text-xs/3"
} });
var { section: section$1, header: header$1 } = dropdownSectionStyles();
var dropdownItemStyles = tv({
	base: [
		"dropdown-item-base",
		"dropdown-item-base-vars",
		"min-w-0 [--mr-icon:--spacing(2.5)] sm:[--mr-icon:--spacing(2)]",
		"not-has-[[slot=description]]:items-center",
		"group relative cursor-default select-none dropdown-item-radius rounded-dropdown-item",
		"outline-0",
		"text-base/6 text-muted-foreground sm:text-sm/6 forced-colors:text-[CanvasText]",
		"ease-linear duration-200",
		"dropdown-item-grid",
		"dropdown-item-icon",
		"dropdown-item-keyboard",
		"dropdown-item-description",
		"dropdown-item-has-description",
		"dropdown-item-label",
		"dropdown-item-avatar",
		"dropdown-item-force-color",
		"dropdown-item-hover",
		"dropdown-item-disabled",
		"dropdown-item-selected",
		"dropdown-item-selected-icon",
		"dropdown-item-selected-avatar-icon",
		"dropdown-item-selected-avatar",
		"ease-linear duration-200"
	],
	variants: { intent: {
		danger: ["dropdown-item-danger text-(--dropdown-item-danger-fg)"],
		warning: ["dropdown-item-warning text-(--dropdown-item-warning-fg)"]
	} }
});
var DropdownIcon = ({ className, children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		slot: "icon",
		"data-slot": "icon",
		className: cx("w-max flex items-center mr-(--mr-icon)", className),
		...props,
		children
	});
};
var DropdownLabel = ({ className, ref, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($efe09c6d1c304b50$export$5f1af8db9871e1d6, {
	slot: "label",
	ref,
	className: cx("col-start-2 text-sm", className),
	...props
});
var DropdownSeparator = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($e28ab3efe3e87743$export$1ff3c3f08ae963c0, {
	orientation: "horizontal",
	className: cx("col-span-full -mx-1 h-px bg-fg/10", className),
	...props
});
var PopoverContent = ({ children, arrow = false, className, ref, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($542a13ca2fa5b484$export$5b6b19405a83ff9d, {
		ref,
		offset: props.offset ?? (arrow ? 12 : 8),
		className: cx("group/popover min-w-(--trigger-width) max-w-xs origin-(--trigger-anchor-point)", "[--popover-padding:--spacing(1)] [--popover-radius:var(--radius-ui)]", "p-(--popover-padding) rounded-(--popover-radius)", "border border-foreground/10 bg-popover text-muted-foreground shadow-xs", "outline-hidden transition-transform ", "sm:text-sm", "entering:fade-in entering:animate-in", "exiting:fade-out exiting:animate-out", "forced-colors:bg-[Canvas]", "popover-animation", className),
		...props,
		children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [arrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)($4fcfe18fac72dabd$export$746d02f47f4d381, {
			className: "group",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: 12,
				height: 12,
				viewBox: "0 0 12 12",
				className: "block fill-overlay stroke-border group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0 L6 6 L12 0" })
			})
		}), typeof children === "function" ? children(values) : children] })
	});
};
var Menu$1 = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($49319ee1285aa241$export$27d2ad3c5815583e, { ...props });
var MenuSubMenu = ({ delay = 0, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($49319ee1285aa241$export$ecabc99eeffab7ca, {
	...props,
	delay,
	children: props.children
});
var menuContentStyles = tv({ base: "grid max-h-[inherit] grid-cols-[auto_1fr] gap-y-1 overflow-y-auto overflow-x-hidden overscroll-contain outline-hidden *:[[role='group']+[role=group]]:mt-3" });
var MenuContent = ({ className, placement, popover, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
		className: cx("min-w-32", popover?.className),
		placement,
		...popover,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($49319ee1285aa241$export$d9b273488cd8ce6f, {
			"data-slot": "menu-content",
			className: menuContentStyles({ className: cx(className, "p-0") }),
			...props
		})
	});
};
var MenuItem$1 = ({ className, intent, children, ...props }) => {
	const textValue = props.textValue || (typeof children === "string" ? children : void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($49319ee1285aa241$export$2ce376c2cc3355c8, {
		"data-slot": "menu-item",
		className: $7230ffa83bc0c2cf$export$c245e6201fed2f75(className, (className, { hasSubmenu, ...renderProps }) => dropdownItemStyles({
			...renderProps,
			intent,
			className: hasSubmenu ? cx(intent === "danger" && "open:bg-destructive-subtle open:text-destructive-subtle-fg", intent === "warning" && "open:bg-warning-subtle open:text-warning-subtle-fg", intent === void 0 && className, "text-muted-foreground") : className
		})),
		textValue,
		...props,
		children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			values.isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cx("group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:right-0", "group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:right-0"),
				children: values.selectionMode === "single" || values.selectionMode === "multiple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					"aria-hidden": true,
					className: "-mx-0.5 mr-2 size-4 fill-current",
					"aria-label": "Icon check",
					"data-slot": "check-indicator",
					xmlns: "http://www.w3.org/2000/svg",
					width: 32,
					height: 32,
					fill: "#000000",
					viewBox: "0 0 256 256",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" })
				}) : null
			}),
			typeof children === "function" ? children(values) : children,
			values.hasSubmenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				"aria-hidden": true,
				"aria-label": "icon caret right",
				className: "absolute right-2 fill-current size-3.5",
				width: 32,
				height: 32,
				fill: "#000000",
				viewBox: "0 0 256 256",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" })
			}) : null
		] })
	});
};
var MenuHeader = ({ className, separator = false, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($53e61d82d8b8611d$export$8b251419efc915eb, {
	className: cx("col-span-full px-2.5 py-2 font-medium text-base sm:text-sm", separator && "-mx-1 border-b border-foreground/10 sm:px-3 sm:pb-2.5", className),
	...props
});
var { section, header } = dropdownSectionStyles();
var MenuSection$1 = ({ className, children, ref, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)($49319ee1285aa241$export$4b1545b4f2016d26, {
		ref,
		className: section({ className }),
		...props,
		children: ["label" in props && /* @__PURE__ */ (0, import_jsx_runtime.jsx)($53e61d82d8b8611d$export$8b251419efc915eb, {
			className: header(),
			children: props.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($42ceafc619f9c3ba$export$fb8073518f34e6ec, {
			items: props.items,
			children
		})]
	});
};
var MenuSeparator = DropdownSeparator;
var MenuLabel = DropdownLabel;
var MenuIcon = DropdownIcon;
var SidebarItem = ({ text, icon, href, isActive }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "relative before:absolute before:-left-0.5 before:w-0.5 before:inset-y-2.5 before:rounded-l-md before:bg-transparent has-[.fx-active]:before:bg-fg-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href,
			"data-state": isActive ? "active" : void 0,
			"aria-label": `Link to ${text}`,
			className: "flex items-center text-sm h-10 px-3 py-1.5 gap-x-2.5 fx-active:bg-background fx-active:text-foreground border border-transparent fx-active:border-bg-muted/70 fx-active:shadow-xs rounded-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `flex iconify size-3.5 ${icon}` }), text]
		})
	});
};
var items = [
	{
		id: "01",
		href: "/",
		text: "Overview",
		icon: "ph--layout",
		isActive: true
	},
	{
		id: "02",
		href: "/empty-route",
		text: "Projects",
		icon: "ph--folder"
	},
	{
		id: "03",
		href: "/empty-route",
		text: "Tasks",
		icon: "ph--kanban"
	},
	{
		id: "04",
		href: "/empty-route",
		text: "Team",
		icon: "ph--users-three"
	},
	{
		id: "05",
		href: "/empty-route",
		text: "Calendar",
		icon: "ph--calendar"
	},
	{
		id: "06",
		href: "/empty-route",
		text: "Messages",
		icon: "ph--chat-circle"
	},
	{
		id: "07",
		href: "/empty-route",
		text: "Files",
		icon: "ph--file-text"
	},
	{
		id: "08",
		href: "/empty-route",
		text: "Analytics",
		icon: "ph--chart-bar"
	},
	{
		id: "09",
		href: "/empty-route",
		text: "Reports",
		icon: "ph--clipboard-text"
	},
	{
		id: "10",
		href: "/empty-route",
		text: "Settings",
		icon: "ph--gear"
	}
];
var Sidebar = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarOverlayElement, { className: "md:hidden invisible opacity-0 fx-open:visible fx-open:opacity-100 ease-linear transition-all duration-200 z-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarBase, {
		className: "fixed h-dvh py-3 overflow-hidden w-11/12 max-w-64 md:w-64 transition-all -translate-x-full fx-open:translate-x-0 md:translate-x-0 md:transition-none bg-card border-r border-bg-muted/70 flex flex-col justify-between px-4 ease-linear z-80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-max py-2 border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/",
				className: "flex items-center gap-x-3 font-semibold text-fg-subtitle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-8 bg-fg-title text-background rounded-lg d-flex-place-center shadow-sm transition-colors duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": "true",
						width: "488",
						height: "488",
						className: "size-5",
						viewBox: "0 0 488 488",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							clipPath: "url(#clip0_13_164)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M71.5342 71L416.602 416.068V416.068C321.314 511.356 166.822 511.356 71.5342 416.068V416.068C-23.7537 320.78 -23.7537 166.288 71.5342 71V71Z",
									fill: "currentColor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M483.659 249.5C483.659 274.629 436.788 344.5 411.659 344.5C386.53 344.5 392.659 274.629 392.659 249.5C392.659 224.371 413.03 204 438.159 204C463.288 204 483.659 224.371 483.659 249.5Z",
									fill: "currentColor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "243.429",
									cy: "243.759",
									r: "110",
									transform: "rotate(48.3973 243.429 243.759)",
									fill: "currentColor",
									stroke: "white",
									strokeWidth: "80",
									className: "stroke-fg-title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M309 71C309 96.129 212.629 101 187.5 101C162.371 101 142 80.629 142 55.5C142 30.371 162.371 10 187.5 10C212.629 10 309 45.871 309 71Z",
									fill: "currentColor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M417 101.5C417 126.629 415.129 215.5 390 215.5C364.871 215.5 326 126.629 326 101.5C326 76.371 346.371 56 371.5 56C396.629 56 417 76.371 417 101.5Z",
									fill: "currentColor"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
							id: "clip0_13_164",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								width: "488",
								height: "488",
								fill: "currentColor",
								className: "text-background"
							})
						}) })]
					})
				}), "ProjectHub"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "pt-6 flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 text-sm text-muted-foreground uppercase tracking-wider",
				children: "Navigation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "text-muted-foreground space-y-1 w-full",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem, { ...item }, `sidebar-item-${item.id}`))
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-y-2 text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					"aria-label": "Open user menu",
					size: "none",
					variant: "ghost",
					className: "gap-3 w-full p-1.5 border border-border-strong/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "md",
						radius: "default",
						src: "https://avatars.githubusercontent.com/u/59884686?v=4",
						width: 100,
						height: 100,
						alt: "Sarah Chen Profile Picture"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 justify-between items-center overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col -space-y-0.5 text-left flex-1 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm text-foreground truncate",
								children: "Sarah Chen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground truncate",
								children: "sarah.chen@projecthub.io"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "flex min-w-max text-muted-foreground opacity-60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--caret-up-down" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuContent, {
					popover: { placement: "top left" },
					className: "min-w-54",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuHeader, {
							separator: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "sarah.chen@projecthub.io"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-muted-foreground",
								children: "@sarahchen"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuSection$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
							href: "#dashboard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--squares-four" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Dashboard" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
							href: "#settings",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--gear-six" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Settings" })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--terminal-window" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Command Menu" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuSubMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--sun-horizon" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Switch theme" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--monitor" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "System" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--moon-stars" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Dark" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--sun-dim" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Light" })] })
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem$1, {
							href: "#contact-s",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Contact Support" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
							intent: "danger",
							href: "#logout",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
								"aria-hidden": "true",
								className: "text-current",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--sign-out text-current" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Log out" })]
						})
					]
				})] })
			})
		}) })]
	})] });
};
var DashSidebar = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {});
};
var AppWrapper = ({ children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "md:pl-64 w-full",
		children
	});
};
var sizeClasses = {
	xs: "size-3.5",
	sm: "size-4",
	md: "size-5",
	lg: "size-6.5",
	xl: "size-7.5",
	"2xl": "size-9"
};
var intentClasses = {
	current: "text-current",
	fg: "text-foreground",
	muted: "text-muted-foreground",
	primary: "text-primary",
	secondary: "text-secondary",
	success: "text-success",
	warning: "text-warning",
	danger: "text-destructive"
};
function Icon({ name, size = "sm", intent = "current", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "icon",
		"aria-hidden": "true",
		className: cx("flex iconify", name, sizeClasses[size] ?? sizeClasses.md, intentClasses[intent] ?? intentClasses.current, className),
		...props
	});
}
var button = tv({
	extend: focusRing,
	base: [
		"relative inline-flex items-center border-0 font-sans",
		"text-sm text-center transition rounded-md cursor-default",
		"p-1 flex items-center justify-center text-muted-foreground",
		"bg-transparent hover:bg-muted pressed:bg-muted/60",
		" ",
		"disabled:bg-transparent [-webkit-tap-highlight-color:transparent]"
	],
	variants: { isDisabled: { true: "bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5" } }
});
function FieldButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($7705c033048f6da7$export$353f5b6fc5456de1, {
		...props,
		className: $7230ffa83bc0c2cf$export$c245e6201fed2f75(props.className, (className, renderProps) => button({
			...renderProps,
			className
		})),
		children: props.children
	});
}
var labelVariants = tv({ base: "text-sm font-medium leading-none text-muted-foreground block peer-disabled:cursor-not-allowed peer-disabled:opacity-70 disabled:opacity-70" });
var Label$1 = ({ htmlFor, text, className, children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($43a3b93638fe5db9$export$b04be29aa201d4f5, {
		htmlFor,
		className: labelVariants({ className }),
		...props,
		children: text ?? children
	});
};
tv({ base: "block text-muted-foreground text-sm/6 in-disabled:opacity-50 group-disabled:opacity-50" });
var inputGroupVariants = tv({
	base: "ui-form-group-base ui-form-group ui-form-group-ring ui-form-ring-base relative flex text-foreground",
	variants: {
		size: {
			none: "",
			sm: "h-8",
			md: "h-9",
			lg: "h-10"
		},
		variant: {
			default: "border border-input bg-background ",
			outline: "border border-input bg-transparent ",
			flush: "rounded-lg",
			unstyled: ""
		},
		radius: {
			true: "rounded-lg",
			false: ""
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default",
		radius: true
	}
});
var InputGroup = ({ size = "md", variant = "default", className, children, radius, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($3a442827418ebe87$export$eb2fcfdbd7ba97d4, {
		"data-slot": "control",
		className: inputGroupVariants({
			size,
			variant,
			className,
			radius
		}),
		...props,
		children
	});
};
var InputLeading = ({ absolute = false, className = "", clickable, children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cx(className, absolute ? "absolute inset-y-0 left-[var(--left-space,12px)]" : "", "flex justify-center items-center", { "pointer-events-none": !clickable && absolute }),
		...props,
		children
	});
};
var InputTrailing = ({ absolute = false, className = "", children, clickable, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cx(className, absolute ? "absolute inset-y-0 flex items-center right-[var(--right-space,12px)]" : "", "flex justify-center items-center", { "pointer-events-none": !clickable && absolute }),
		...props,
		children
	});
};
InputGroup.Leading = InputLeading;
InputGroup.Trailing = InputTrailing;
var inputVariants = tv({
	base: "ui-form-base ",
	variants: {
		size: {
			none: "",
			sm: "ui-form-input-sm",
			md: "ui-form-input-md",
			lg: "ui-form-input-lg"
		},
		variant: {
			default: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring border border-input bg-background rounded-lg",
			outline: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring border border-input bg-transparent rounded-lg",
			flush: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring rounded-lg",
			unstyled: ""
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default"
	}
});
var Input$1 = ({ className, ref, size = "md", variant = "default", label, inlinedLabel = false, labelClass = "", id, fieldGroupClass = "", ...props }) => {
	const generatedId = (0, import_react.useId)();
	const inputId = id || generatedId;
	const inputElement = /* @__PURE__ */ (0, import_jsx_runtime.jsx)($41fb335299a4a39e$export$f5b8910cec6cf069, {
		ref,
		id: inputId,
		className: inputVariants({
			size: variant === "unstyled" ? "none" : size,
			variant,
			className: `[&::-webkit-search-cancel-button]:hidden appearance-none ${className}`
		}),
		...props
	});
	if (label) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cx(inlinedLabel ? "flex items-center gap-2" : "flex flex-col space-y-2", fieldGroupClass),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
			htmlFor: inputId,
			text: label,
			className: labelClass
		}), inputElement]
	});
	return inputElement;
};
var fieldStyles = tv({ base: [
	"w-full",
	"[&>[data-slot=control]+[data-slot=control]]:mt-2",
	"[&>[data-slot=label]+[data-slot=control]]:mt-2",
	"[&>[data-slot=label]+[data-slot=control]]:mt-2",
	"[&>[data-slot=label]+[slot='description']]:mt-1",
	"[&>[slot=description]+[data-slot=control]]:mt-2",
	"[&>[data-slot=control]+[slot=description]]:mt-2",
	"[&>[data-slot=control]+[slot=errorMessage]]:mt-2",
	"*:data-[slot=label]:font-medium",
	"in-disabled:opacity-50 disabled:opacity-50"
] });
function SearchField$1({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($29a5029ff43c9612$export$b94867ecbd698f21, {
		"data-slot": "control",
		...props,
		"aria-label": props["aria-label"] ?? "Search",
		className: cx(fieldStyles({ className: "group/search-field" }), className)
	});
}
function SearchInput({ size, groupClass = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
		size,
		className: groupClass,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLeading, {
				className: "in-disabled:opacity-50",
				absolute: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "size-4 iconify ph--magnifying-glass text-muted-foreground/80 forced-colors:text-[ButtonText] group-disabled:text-muted-foreground/50 forced-colors:group-disabled:text-[GrayText]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
				variant: "unstyled",
				className: "ps-9 pe-9 [&::-webkit-search-cancel-button]:hidden",
				...props
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputTrailing, {
				className: "group-fx-empty/search-field:invisible [--right-space:5px]",
				clickable: true,
				absolute: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldButton, {
					className: "group-empty/search-field:invisible",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "size-4 iconify ph--x"
					})
				})
			})
		]
	});
}
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = (0, import_react.useState)("auto");
	(0, import_react.useEffect)(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	(0, import_react.useEffect)(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	const changeTheme = (theme) => {
		setMode(theme);
		applyThemeMode(theme);
		window.localStorage.setItem("theme", theme);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuSubMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--paint-roller" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Switch theme" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuContent, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
			onAction: () => changeTheme("auto"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--laptop" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "System" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
			onAction: () => changeTheme("dark"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--moon" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Dark" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
			onAction: () => changeTheme("light"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--sun" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Light" })]
		})
	] })] });
}
var DashHeader = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 h-16 flex items-center border-b bg-background border-border z-35",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex lg:hidden -ml-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarToggler, {
						variant: "ghost",
						size: "sm",
						iconOnly: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							"aria-label": "icon open sidebar",
							xmlns: "http://www.w3.org/2000/svg",
							width: 24,
							height: 24,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							className: "size-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									width: 18,
									height: 18,
									x: 3,
									y: 3,
									rx: 2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3v18" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m14 9 3 3-3 3" })
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground sm:inline-flex hidden",
					children: "Projects"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 flex-1 justify-end min-w-max",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						variant: "solid",
						size: "sm",
						intent: "solid-primary",
						className: "hidden sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "iconify ph--folder-plus mr-1.5"
						}), "New Project"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField$1, {
						className: "flex-1 max-w-62.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchInput, { groupClass: "h-9" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						size: "none",
						className: "size-9 justify-center",
						iconOnly: true,
						"aria-label": "Notifications",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "ph--bell" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							iconOnly: true,
							size: "none",
							variant: "none",
							radius: "circle",
							className: "mr-1 size-9 rounded-full [--shadow-color:var(--color-gray-700)] dark:[--shadow-color:var(--color-gray-500)]\n									shadow-[0px_2px_2px_0px_var(--shadow-color)] ring-3 ring-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/avatar.webp",
								alt: "avatar",
								width: 100,
								height: 100,
								className: "border border-input/50 size-full object-cover object-top rounded-full"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuContent, {
							popover: { placement: "bottom" },
							className: "min-w-50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuHeader, {
									separator: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: "Sarah Chen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-muted-foreground",
										children: "@sarahchen"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuSection$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
									href: "#dashboard",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--square" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Dashboard" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
									href: "#settings",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--gear-six" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Settings" })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--terminal" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Command Menu" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem$1, {
									href: "#contact-s",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Contact Support" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuItem$1, {
									intent: "danger",
									href: "#logout",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "iconify ph--sign-out text-current" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, { children: "Log out" })]
								})
							]
						})] })
					})
				]
			})]
		})
	});
};
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: inline theme init script must run before hydration to prevent FOUC */
var THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
var Route$2 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ProjectHub — Project Management" }
		],
		links: [{
			rel: "stylesheet",
			href: globals_default
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-gray-50 dark:bg-gray-900/30 min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppWrapper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashHeader, {}), children] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
var $$splitComponentImporter$1 = () => import("./empty-route-BITCKqIW.mjs");
var Route$1 = createFileRoute("/empty-route")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-Cfv3tIao.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var EmptyRouteRoute = Route$1.update({
	id: "/empty-route",
	path: "/empty-route",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	EmptyRouteRoute
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
