import { __toESM } from "../_runtime.mjs";
import { require_react, require_react_dom } from "./@tanstack/react-router+[...].mjs";
import { $03e8ab2d84d7657a$export$4338b53315abf666, $081058010ef8962e$export$2317d149ed6f78c4, $0c4a58759813079a$export$4e328f61c538687f, $0d47b37c475c5231$export$3351871ee4b288b8, $1a9c2c840fd36413$export$9d32628fc2aea7da, $23f2114a1b82827e$export$b4f377a2b6254582, $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, $390e54f620492c70$export$f680877a34711e37, $3e6197669829fe11$export$40bfa8c7b0832715, $4064df0d6f9620e1$export$c9058316764c140e, $42ceafc619f9c3ba$export$18af5c7a9e9b3664, $42ceafc619f9c3ba$export$bf788dd355e3a401, $42ceafc619f9c3ba$export$e953bb1cd0f19726, $42ceafc619f9c3ba$export$fb8073518f34e6ec, $44614525ec969a63$export$9bb30bbe003b82e0, $535772f9d2c1f38d$export$20e40289641fbbb6, $6f0c29017aeec335$export$437f11dc9b403b78, $6f0c29017aeec335$export$5ae2504e948afce5, $6f0c29017aeec335$export$d68d59712b04d9d1, $6f0c29017aeec335$export$fd11f34e1d07f134, $7355d4e5c49461b6$export$73f7a44322579622, $8794213c1141208f$export$7138b0d059a6e743, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, $8f5a2122b0992be3$export$630ff653c5ada6a9, $970072cf4b13fde3$export$683480f191c0e3ea, $a2d69d6ee8486855$export$38eaa17faae8f579, $a46cf152bb926da5$export$a9b970dcc4ae71a9, $a80bd3e9349588e7$export$727c8fc270210f13, $ac4318a9c075bb9f$export$ea18c227d4417cc3, $bbaa08b3cd72f041$export$9d1611c77c2fe928, $c4867b2f328c2698$export$e5c5a5f917a5871c, $cd5ea4b915021f1d$export$1005530eda016c13, $cd5ea4b915021f1d$export$8c434b3a7a4dad6, $cd5ea4b915021f1d$export$fbdeaa6a76694f71, $d7a937236970dc7f$export$c6fdb837b070b4ff, $d7f64c32b702fe2c$export$86427a43e3e48ebb, $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59, $dc321dbb6473ef33$export$52210f68a14655d0, $e969f22b6713ca4a$export$ae780daf29e6d456, $f192c2f16961cbe0$export$80f3e147d781571c, $f19b83c1486f45cc$export$dc9c12ed27dd1b49, $f8a024fbad3a5a2e$export$542a6fd13ac93354, $fcc7165e876206c6$export$45fda7c47f93fd48, $fcc7165e876206c6$export$6d3443f2c48bfc20 } from "./react-aria+react-stately.mjs";
//#region node_modules/react-aria-components/dist/private/utils.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var $7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = Symbol("default");
function $7230ffa83bc0c2cf$export$2881499e37b75b9a({ values, children }) {
	for (let [Context, value] of values) children = /*#__PURE__*/ import_react.createElement(Context.Provider, { value }, children);
	return children;
}
function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
	let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = props;
	return (0, import_react.useMemo)(() => {
		let computedClassName;
		let computedStyle;
		let computedChildren;
		if (typeof className === "function") computedClassName = className({
			...values,
			defaultClassName
		});
		else computedClassName = className;
		if (typeof style === "function") computedStyle = style({
			...values,
			defaultStyle: defaultStyle || {}
		});
		else computedStyle = style;
		if (typeof children === "function") computedChildren = children({
			...values,
			defaultChildren
		});
		else if (children == null) computedChildren = defaultChildren;
		else computedChildren = children;
		return {
			className: computedClassName ?? defaultClassName,
			style: computedStyle || defaultStyle ? {
				...defaultStyle,
				...computedStyle
			} : void 0,
			children: computedChildren ?? defaultChildren,
			"data-rac": "",
			render: render ? (props) => render(props, values) : void 0
		};
	}, [
		className,
		style,
		children,
		defaultClassName,
		defaultChildren,
		defaultStyle,
		values,
		render
	]);
}
function $7230ffa83bc0c2cf$export$c245e6201fed2f75(value, wrap) {
	return (renderProps) => wrap(typeof value === "function" ? value(renderProps) : value, renderProps);
}
function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
	let ctx = (0, import_react.useContext)(context);
	if (slot === null) return null;
	if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
		let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
		if (!ctx.slots[slotKey]) {
			let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
			let errorMessage = slot ? `Invalid slot "${slot}".` : "A slot prop is required.";
			throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
		}
		return ctx.slots[slotKey];
	}
	return ctx;
}
function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
	let { ref: contextRef, ...contextProps } = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
	let mergedRef = $03e8ab2d84d7657a$export$4338b53315abf666((0, import_react.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(ref, contextRef), [ref, contextRef]));
	let mergedProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
	if ("style" in contextProps && contextProps.style && "style" in props && props.style) if (typeof contextProps.style === "function" || typeof props.style === "function") mergedProps.style = (renderProps) => {
		let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
		let defaultStyle = {
			...renderProps.defaultStyle,
			...contextStyle
		};
		let style = typeof props.style === "function" ? props.style({
			...renderProps,
			defaultStyle
		}) : props.style;
		return {
			...defaultStyle,
			...style
		};
	};
	else mergedProps.style = {
		...contextProps.style,
		...props.style
	};
	return [mergedProps, mergedRef];
}
function $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8(initialState = true) {
	let [hasSlot, setHasSlot] = (0, import_react.useState)(initialState);
	let hasRun = (0, import_react.useRef)(false);
	let ref = (0, import_react.useCallback)((el) => {
		hasRun.current = true;
		setHasSlot(!!el);
	}, []);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (!hasRun.current) setHasSlot(false);
	}, []);
	return [ref, hasSlot];
}
function $7230ffa83bc0c2cf$export$ef03459518577ad4(props) {
	const prefix = /^(data-.*)$/;
	let filteredProps = {};
	for (const prop in props) if (!prefix.test(prop)) filteredProps[prop] = props[prop];
	return filteredProps;
}
function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
	let { render, ...otherProps } = props;
	let elementRef = (0, import_react.useRef)(null);
	let ref = (0, import_react.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(forwardedRef, elementRef), [forwardedRef, elementRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {}, [ElementType, render]);
	let domProps = {
		...otherProps,
		ref
	};
	if (render) return render(domProps, void 0);
	return /*#__PURE__*/ import_react.createElement(ElementType, domProps);
}
var $7230ffa83bc0c2cf$var$domComponentCache = {};
var $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, { get(target, elementType) {
	if (typeof elementType !== "string") return void 0;
	let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
	if (!res) {
		res = /*#__PURE__*/ (0, import_react.forwardRef)($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
		$7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
	}
	return res;
} });
//#endregion
//#region node_modules/react-aria-components/dist/private/Autocomplete.mjs
var $4b38b5b75ecc6208$export$b0d3ecf7112093a7 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $4b38b5b75ecc6208$export$698f465ec27e93df = /*#__PURE__*/ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/react-aria-components/dist/private/Collection.mjs
var $263ab7fc0f95ccdb$export$d40e14dec8b060a8 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $263ab7fc0f95ccdb$export$a164736487e3f0ae = {
	CollectionRoot({ collection, renderDropIndicator }) {
		return $263ab7fc0f95ccdb$var$useCollectionRender(collection, null, renderDropIndicator);
	},
	CollectionBranch({ collection, parent, renderDropIndicator }) {
		return $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator);
	}
};
function $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator) {
	return $a80bd3e9349588e7$export$727c8fc270210f13({
		items: parent ? collection.getChildren(parent.key) : collection,
		dependencies: [renderDropIndicator],
		children(node) {
			if (node.type === "content") return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null);
			let rendered = node.render(node);
			if (!renderDropIndicator || node.type !== "item") return rendered;
			return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, renderDropIndicator({
				type: "item",
				key: node.key,
				dropPosition: "before"
			}), rendered, $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator));
		}
	});
}
function $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator) {
	let key = node.key;
	let keyAfter = collection.getKeyAfter(key);
	let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
	while (nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== "item") {
		keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
		nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
	}
	let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
	while (nextItemInSameLevel != null && nextItemInSameLevel.type !== "item") nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
	let afterIndicators = [];
	if (nextItemInSameLevel == null) {
		let current = node;
		while (current?.type === "item" && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)) {
			let indicator = renderDropIndicator({
				type: "item",
				key: current.key,
				dropPosition: "after"
			});
			if (/*#__PURE__*/ (0, import_react.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, import_react.cloneElement)(indicator, { key: `${current.key}-after` }));
			current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
		}
	}
	return afterIndicators;
}
var $263ab7fc0f95ccdb$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, import_react.createContext)($263ab7fc0f95ccdb$export$a164736487e3f0ae);
function $263ab7fc0f95ccdb$export$90e00781bc59d8f9(focusedKey) {
	return (0, import_react.useMemo)(() => focusedKey != null ? /* @__PURE__ */ new Set([focusedKey]) : null, [focusedKey]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Label.mjs
var $43a3b93638fe5db9$export$75b6ee27786ba447 = /*#__PURE__*/ (0, import_react.createContext)({});
var $43a3b93638fe5db9$export$b04be29aa201d4f5 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function Label(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $43a3b93638fe5db9$export$75b6ee27786ba447);
	let { elementType = "label", ...labelProps } = props;
	let ElementType = $7230ffa83bc0c2cf$export$df3a06d6289f983e[elementType];
	return /*#__PURE__*/ import_react.createElement(ElementType, {
		className: "react-aria-Label",
		...labelProps,
		ref
	});
});
//#endregion
//#region node_modules/react-aria-components/dist/private/ProgressBar.mjs
var $6c0095e7e99364f2$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/react-aria-components/dist/private/Button.mjs
var $7705c033048f6da7$export$24d547caef80ccd1 = /*#__PURE__*/ (0, import_react.createContext)({});
var $7705c033048f6da7$export$353f5b6fc5456de1 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function Button(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $7705c033048f6da7$export$24d547caef80ccd1);
	let ctx = props;
	let { isPending } = ctx;
	let { buttonProps, isPressed } = $ac4318a9c075bb9f$export$ea18c227d4417cc3(props, ref);
	buttonProps = $7705c033048f6da7$var$useDisableInteractions(buttonProps, isPending);
	let { focusProps, isFocused, isFocusVisible } = $0c4a58759813079a$export$4e328f61c538687f(props);
	let { hoverProps, isHovered } = $e969f22b6713ca4a$export$ae780daf29e6d456({
		...props,
		isDisabled: props.isDisabled || isPending
	});
	let renderValues = {
		isHovered,
		isPressed: (ctx.isPressed || isPressed) && !isPending,
		isFocused,
		isFocusVisible,
		isDisabled: props.isDisabled || false,
		isPending: isPending ?? false
	};
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		values: renderValues,
		defaultClassName: "react-aria-Button"
	});
	let buttonId = $390e54f620492c70$export$f680877a34711e37(buttonProps.id);
	let progressId = $390e54f620492c70$export$f680877a34711e37();
	let ariaLabelledby = buttonProps["aria-labelledby"];
	if (isPending) {
		if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
		else if (buttonProps["aria-label"]) ariaLabelledby = `${buttonId} ${progressId}`;
	}
	let wasPending = (0, import_react.useRef)(isPending);
	(0, import_react.useEffect)(() => {
		let message = { "aria-labelledby": ariaLabelledby || buttonId };
		if (!wasPending.current && isFocused && isPending) $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, "assertive");
		else if (wasPending.current && isFocused && !isPending) $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, "assertive");
		wasPending.current = isPending;
	}, [
		isPending,
		isFocused,
		ariaLabelledby,
		buttonId
	]);
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.onClick;
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.button, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
		type: buttonProps.type === "submit" && isPending ? "button" : buttonProps.type,
		id: buttonId,
		ref,
		"aria-labelledby": ariaLabelledby,
		slot: props.slot || void 0,
		"aria-disabled": isPending ? "true" : buttonProps["aria-disabled"],
		"data-disabled": props.isDisabled || void 0,
		"data-pressed": renderValues.isPressed || void 0,
		"data-hovered": isHovered || void 0,
		"data-focused": isFocused || void 0,
		"data-pending": isPending || void 0,
		"data-focus-visible": isFocusVisible || void 0
	}, /*#__PURE__*/ import_react.createElement($6c0095e7e99364f2$export$e9f3bf65a26ce129.Provider, { value: { id: progressId } }, renderProps.children));
});
var $7705c033048f6da7$var$PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function $7705c033048f6da7$var$useDisableInteractions(props, isPending) {
	if (isPending) {
		for (const key in props) if (key.startsWith("on") && !$7705c033048f6da7$var$PRESERVED_EVENT_PATTERN.test(key)) props[key] = void 0;
		props.href = void 0;
		props.target = void 0;
	}
	return props;
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Text.mjs
var $efe09c6d1c304b50$export$9afb8bc826b033ea = /*#__PURE__*/ (0, import_react.createContext)({});
var $efe09c6d1c304b50$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, import_react.forwardRef)(function Text(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $efe09c6d1c304b50$export$9afb8bc826b033ea);
	let { elementType = "span", ...domProps } = props;
	let ElementType = $7230ffa83bc0c2cf$export$df3a06d6289f983e[elementType];
	return /*#__PURE__*/ import_react.createElement(ElementType, {
		className: "react-aria-Text",
		...domProps,
		ref
	});
});
//#endregion
//#region node_modules/react-aria-components/dist/private/FieldError.mjs
var $1f3c3b1a70cec653$export$ff05c3ac10437e03 = /*#__PURE__*/ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/react-aria-components/dist/private/Form.mjs
var $cdaed739b1139372$export$c24727297075ec6a = /*#__PURE__*/ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/react-aria-components/dist/private/Group.mjs
var $3a442827418ebe87$export$f9c6924e160136d1 = /*#__PURE__*/ (0, import_react.createContext)({});
var $3a442827418ebe87$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, import_react.forwardRef)(function Group(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $3a442827418ebe87$export$f9c6924e160136d1);
	let { isDisabled, isInvalid, isReadOnly, onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
	isDisabled ??= !!props["aria-disabled"] && props["aria-disabled"] !== "false";
	isInvalid ??= !!props["aria-invalid"] && props["aria-invalid"] !== "false";
	let { hoverProps, isHovered } = $e969f22b6713ca4a$export$ae780daf29e6d456({
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		isDisabled
	});
	let { isFocused, isFocusVisible, focusProps } = $0c4a58759813079a$export$4e328f61c538687f({ within: true });
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		values: {
			isHovered,
			isFocusWithin: isFocused,
			isFocusVisible,
			isDisabled,
			isInvalid
		},
		defaultClassName: "react-aria-Group"
	});
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(otherProps, focusProps, hoverProps),
		...renderProps,
		ref,
		role: props.role ?? "group",
		slot: props.slot ?? void 0,
		"data-focus-within": isFocused || void 0,
		"data-hovered": isHovered || void 0,
		"data-focus-visible": isFocusVisible || void 0,
		"data-disabled": isDisabled || void 0,
		"data-invalid": isInvalid || void 0,
		"data-readonly": isReadOnly || void 0
	}, renderProps.children);
});
//#endregion
//#region node_modules/react-aria-components/dist/private/Input.mjs
var $41fb335299a4a39e$export$37fb8590cf2c088c = /*#__PURE__*/ (0, import_react.createContext)({});
var $41fb335299a4a39e$var$filterHoverProps = (props) => {
	let { onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
	return otherProps;
};
var $41fb335299a4a39e$export$f5b8910cec6cf069 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function Input(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $41fb335299a4a39e$export$37fb8590cf2c088c);
	let { hoverProps, isHovered } = $e969f22b6713ca4a$export$ae780daf29e6d456({
		...props,
		isDisabled: props.disabled
	});
	let { isFocused, isFocusVisible, focusProps } = $0c4a58759813079a$export$4e328f61c538687f({
		isTextInput: true,
		autoFocus: props.autoFocus
	});
	let isInvalid = !!props["aria-invalid"] && props["aria-invalid"] !== "false";
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		values: {
			isHovered,
			isFocused,
			isFocusVisible,
			isDisabled: props.disabled || false,
			isInvalid
		},
		defaultClassName: "react-aria-Input"
	});
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.input, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928($41fb335299a4a39e$var$filterHoverProps(props), focusProps, hoverProps),
		...renderProps,
		ref,
		"data-focused": isFocused || void 0,
		"data-disabled": props.disabled || void 0,
		"data-hovered": isHovered || void 0,
		"data-focus-visible": isFocusVisible || void 0,
		"data-invalid": isInvalid || void 0
	});
});
//#endregion
//#region node_modules/react-aria-components/dist/private/Header.mjs
var $53e61d82d8b8611d$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, import_react.createContext)({});
var $53e61d82d8b8611d$export$8b251419efc915eb = /*#__PURE__*/ $42ceafc619f9c3ba$export$18af5c7a9e9b3664($6f0c29017aeec335$export$5ae2504e948afce5, function Header(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $53e61d82d8b8611d$export$e0e4026c12a8bdbb);
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.header, {
		className: "react-aria-Header",
		...props,
		ref
	}, props.children);
});
require_react_dom();
var $792f28e438b9ad5f$var$SharedElementContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $792f28e438b9ad5f$export$758399f318e6385a(props) {
	let ref = (0, import_react.useRef)({});
	return /*#__PURE__*/ import_react.createElement($792f28e438b9ad5f$var$SharedElementContext.Provider, { value: ref }, props.children);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var $91fe5e721c7f36c1$export$c9549807523555e0 = /*#__PURE__*/ (0, import_react.createContext)({ isSelected: false });
//#endregion
//#region node_modules/react-aria-components/dist/private/Separator.mjs
var $e28ab3efe3e87743$export$6615d83f6de245ce = /*#__PURE__*/ (0, import_react.createContext)({});
var $e28ab3efe3e87743$export$7750289ca694c0b5 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "separator";
	}
	filter(collection, newCollection) {
		let prevItem = newCollection.getItem(this.prevKey);
		if (prevItem && prevItem.type !== "separator") {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
		return null;
	}
};
var $e28ab3efe3e87743$export$1ff3c3f08ae963c0 = /*#__PURE__*/ $42ceafc619f9c3ba$export$18af5c7a9e9b3664($e28ab3efe3e87743$export$7750289ca694c0b5, function Separator(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $e28ab3efe3e87743$export$6615d83f6de245ce);
	let { elementType, orientation, style, className, slot, ...otherProps } = props;
	let Element = elementType || "hr";
	if (Element === "hr" && orientation === "vertical") Element = "div";
	let ElementType = $7230ffa83bc0c2cf$export$df3a06d6289f983e[Element];
	let { separatorProps } = $dc321dbb6473ef33$export$52210f68a14655d0({
		...otherProps,
		elementType,
		orientation
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	return /*#__PURE__*/ import_react.createElement(ElementType, {
		render: props.render,
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, separatorProps),
		style,
		className: className ?? "react-aria-Separator",
		ref,
		slot: slot || void 0
	});
});
//#endregion
//#region node_modules/react-stately/dist/private/selection/Selection.mjs
var $8b2540e09867b15e$export$52baac22726c72bf = class $8b2540e09867b15e$export$52baac22726c72bf extends Set {
	constructor(keys, anchorKey, currentKey) {
		super(keys);
		if (keys instanceof $8b2540e09867b15e$export$52baac22726c72bf) {
			this.anchorKey = anchorKey ?? keys.anchorKey;
			this.currentKey = currentKey ?? keys.currentKey;
		} else {
			this.anchorKey = anchorKey ?? null;
			this.currentKey = currentKey ?? null;
		}
	}
};
//#endregion
//#region node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
function $60f19cefd567a3e4$var$equalSets(setA, setB) {
	if (setA.size !== setB.size) return false;
	for (let item of setA) if (!setB.has(item)) return false;
	return true;
}
function $60f19cefd567a3e4$export$253fe78d46329472(props) {
	let { selectionMode = "none", disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
	let isFocusedRef = (0, import_react.useRef)(false);
	let [, setFocused] = (0, import_react.useState)(false);
	let focusedKeyRef = (0, import_react.useRef)(null);
	let childFocusStrategyRef = (0, import_react.useRef)(null);
	let [, setFocusedKey] = (0, import_react.useState)(null);
	let [selectedKeys, setSelectedKeys] = $3e6197669829fe11$export$40bfa8c7b0832715((0, import_react.useMemo)(() => $60f19cefd567a3e4$var$convertSelection(props.selectedKeys), [props.selectedKeys]), (0, import_react.useMemo)(() => $60f19cefd567a3e4$var$convertSelection(props.defaultSelectedKeys, new $8b2540e09867b15e$export$52baac22726c72bf()), [props.defaultSelectedKeys]), props.onSelectionChange);
	let disabledKeysProp = (0, import_react.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let [selectionBehavior, setSelectionBehavior] = (0, import_react.useState)(selectionBehaviorProp);
	if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
	let lastSelectionBehavior = (0, import_react.useRef)(selectionBehaviorProp);
	(0, import_react.useEffect)(() => {
		if (selectionBehaviorProp !== lastSelectionBehavior.current) {
			setSelectionBehavior(selectionBehaviorProp);
			lastSelectionBehavior.current = selectionBehaviorProp;
		}
	}, [selectionBehaviorProp]);
	return {
		selectionMode,
		disallowEmptySelection,
		selectionBehavior,
		setSelectionBehavior,
		get isFocused() {
			return isFocusedRef.current;
		},
		setFocused(f) {
			isFocusedRef.current = f;
			setFocused(f);
		},
		get focusedKey() {
			return focusedKeyRef.current;
		},
		get childFocusStrategy() {
			return childFocusStrategyRef.current;
		},
		setFocusedKey(k, childFocusStrategy = "first") {
			focusedKeyRef.current = k;
			childFocusStrategyRef.current = childFocusStrategy;
			setFocusedKey(k);
		},
		selectedKeys,
		setSelectedKeys(keys) {
			if (allowDuplicateSelectionEvents || !$60f19cefd567a3e4$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
		},
		disabledKeys: disabledKeysProp,
		disabledBehavior
	};
}
function $60f19cefd567a3e4$var$convertSelection(selection, defaultValue) {
	if (!selection) return defaultValue;
	return selection === "all" ? "all" : new $8b2540e09867b15e$export$52baac22726c72bf(selection);
}
//#endregion
//#region node_modules/react-stately/dist/private/selection/SelectionManager.mjs
var $4a07ac835f260f78$export$6c8a5aaad13c9852 = class $4a07ac835f260f78$export$6c8a5aaad13c9852 {
	constructor(collection, state, options) {
		this.collection = collection;
		this.state = state;
		this.allowsCellSelection = options?.allowsCellSelection ?? false;
		this._isSelectAll = null;
		this.layoutDelegate = options?.layoutDelegate || null;
		this.fullCollection = options?.fullCollection || null;
	}
	/**
	* The type of selection that is allowed in the collection.
	*/ get selectionMode() {
		return this.state.selectionMode;
	}
	/**
	* Whether the collection allows empty selection.
	*/ get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	/**
	* The selection behavior for the collection.
	*/ get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	/**
	* Sets the selection behavior for the collection.
	*/ setSelectionBehavior(selectionBehavior) {
		this.state.setSelectionBehavior(selectionBehavior);
	}
	/**
	* Whether the collection is currently focused.
	*/ get isFocused() {
		return this.state.isFocused;
	}
	/**
	* Sets whether the collection is focused.
	*/ setFocused(isFocused) {
		this.state.setFocused(isFocused);
	}
	/**
	* The current focused key in the collection.
	*/ get focusedKey() {
		return this.state.focusedKey;
	}
	/** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	/**
	* Sets the focused key.
	*/ setFocusedKey(key, childFocusStrategy) {
		if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
	}
	/**
	* The currently selected keys in the collection.
	*/ get selectedKeys() {
		return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	/**
	* The raw selection value for the collection.
	* Either 'all' for select all, or a set of keys.
	*/ get rawSelection() {
		return this.state.selectedKeys;
	}
	/**
	* Returns whether a key is selected.
	*/ isSelected(key) {
		if (this.state.selectionMode === "none") return false;
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return false;
		return this.state.selectedKeys === "all" ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
	}
	/**
	* Whether the selection is empty.
	*/ get isEmpty() {
		return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
	}
	/**
	* Whether all items in the collection are selected.
	*/ get isSelectAll() {
		if (this.isEmpty) return false;
		if (this.state.selectedKeys === "all") return true;
		if (this._isSelectAll != null) return this._isSelectAll;
		let allKeys = this.getSelectAllKeys();
		let selectedKeys = this.state.selectedKeys;
		this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
		return this._isSelectAll;
	}
	get firstSelectedKey() {
		let first = null;
		for (let key of this.state.selectedKeys) {
			let item = this.collection.getItem(key);
			if (!first || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, first) < 0) first = item;
		}
		return first?.key ?? null;
	}
	get lastSelectedKey() {
		let last = null;
		for (let key of this.state.selectedKeys) {
			let item = this.collection.getItem(key);
			if (!last || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, last) > 0) last = item;
		}
		return last?.key ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	/**
	* Extends the selection to the given key.
	*/ extendSelection(toKey) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(toKey);
			return;
		}
		let mappedToKey = this.getKey(toKey);
		if (mappedToKey == null) return;
		let selection;
		if (this.state.selectedKeys === "all") selection = new $8b2540e09867b15e$export$52baac22726c72bf([mappedToKey], mappedToKey, mappedToKey);
		else {
			let selectedKeys = this.state.selectedKeys;
			let anchorKey = selectedKeys.anchorKey ?? mappedToKey;
			selection = new $8b2540e09867b15e$export$52baac22726c72bf(selectedKeys, anchorKey, mappedToKey);
			for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey ?? mappedToKey)) selection.delete(key);
			for (let key of this.getKeyRange(mappedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
		}
		this.state.setSelectedKeys(selection);
	}
	getKeyRange(from, to) {
		let fromItem = this.collection.getItem(from);
		let toItem = this.collection.getItem(to);
		if (fromItem && toItem) {
			if ($cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
			return this.getKeyRangeInternal(to, from);
		}
		return [];
	}
	getKeyRangeInternal(from, to) {
		if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
		let keys = [];
		let key = from;
		while (key != null) {
			let item = this.collection.getItem(key);
			if (item && (item.type === "item" || item.type === "cell" && this.allowsCellSelection)) keys.push(key);
			if (key === to) return keys;
			key = this.collection.getKeyAfter(key);
		}
		return [];
	}
	getKey(key) {
		let item = this.collection.getItem(key);
		if (!item) return key;
		if (item.type === "cell" && this.allowsCellSelection) return key;
		while (item && item.type !== "item" && item.parentKey != null) item = this.collection.getItem(item.parentKey);
		if (!item || item.type !== "item") return null;
		return item.key;
	}
	/**
	* Toggles whether the given key is selected.
	*/ toggleSelection(key) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(key)) {
			this.replaceSelection(key);
			return;
		}
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return;
		let keys = new $8b2540e09867b15e$export$52baac22726c72bf(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
		if (keys.has(mappedKey)) keys.delete(mappedKey);
		else if (this.canSelectItem(mappedKey)) {
			keys.add(mappedKey);
			keys.anchorKey = mappedKey;
			keys.currentKey = mappedKey;
		}
		if (this.disallowEmptySelection && keys.size === 0) return;
		this.state.setSelectedKeys(keys);
	}
	/**
	* Replaces the selection with only the given key.
	*/ replaceSelection(key) {
		if (this.selectionMode === "none") return;
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return;
		let selection = this.canSelectItem(mappedKey) ? new $8b2540e09867b15e$export$52baac22726c72bf([mappedKey], mappedKey, mappedKey) : new $8b2540e09867b15e$export$52baac22726c72bf();
		this.state.setSelectedKeys(selection);
	}
	/**
	* Replaces the selection with the given keys.
	*/ setSelectedKeys(keys) {
		if (this.selectionMode === "none") return;
		let selection = new $8b2540e09867b15e$export$52baac22726c72bf();
		for (let key of keys) {
			let mappedKey = this.getKey(key);
			if (mappedKey != null) {
				selection.add(mappedKey);
				if (this.selectionMode === "single") break;
			}
		}
		this.state.setSelectedKeys(selection);
	}
	getSelectAllKeys() {
		let collection = this.fullCollection ?? this.collection;
		let keys = [];
		let addKeys = (key) => {
			while (key != null) {
				if (this.canSelectItemIn(key, collection)) {
					let item = collection.getItem(key);
					if (item?.type === "item") keys.push(key);
					if (item?.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys($cd5ea4b915021f1d$export$fbdeaa6a76694f71($cd5ea4b915021f1d$export$1005530eda016c13(item, collection))?.key ?? null);
				}
				key = collection.getKeyAfter(key);
			}
		};
		addKeys(collection.getFirstKey());
		return keys;
	}
	/**
	* Selects all items in the collection.
	*/ selectAll() {
		if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
	}
	/**
	* Removes all keys from the selection.
	*/ clearSelection() {
		if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $8b2540e09867b15e$export$52baac22726c72bf());
	}
	/**
	* Toggles between select all and an empty selection.
	*/ toggleSelectAll() {
		if (this.isSelectAll) this.clearSelection();
		else this.selectAll();
	}
	select(key, e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
		else this.replaceSelection(key);
		else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual")) this.toggleSelection(key);
		else this.replaceSelection(key);
	}
	/**
	* Returns whether the current selection is equal to the given selection.
	*/ isSelectionEqual(selection) {
		if (selection === this.state.selectedKeys) return true;
		let selectedKeys = this.selectedKeys;
		if (selection.size !== selectedKeys.size) return false;
		for (let key of selection) if (!selectedKeys.has(key)) return false;
		for (let key of selectedKeys) if (!selection.has(key)) return false;
		return true;
	}
	canSelectItem(key) {
		return this.canSelectItemIn(key, this.collection);
	}
	canSelectItemIn(key, collection) {
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
		let item = collection.getItem(key);
		if (!item || item?.props?.isDisabled || item.type === "cell" && !this.allowsCellSelection) return false;
		return true;
	}
	isDisabled(key) {
		let item = this.collection.getItem(key);
		return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!item?.props?.isDisabled) && item?.props?.disabledBehavior !== "selection";
	}
	isLink(key) {
		return !!this.collection.getItem(key)?.props?.href;
	}
	getItemProps(key) {
		return this.collection.getItem(key)?.props;
	}
	withCollection(collection) {
		return new $4a07ac835f260f78$export$6c8a5aaad13c9852(collection, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection
		});
	}
};
//#endregion
//#region node_modules/react-stately/dist/private/collections/CollectionBuilder.mjs
var $bda7a7e55e1ff206$export$bf788dd355e3a401 = class {
	build(props, context) {
		this.context = context;
		return $bda7a7e55e1ff206$var$iterable(() => this.iterateCollection(props));
	}
	*iterateCollection(props) {
		let { children, items } = props;
		if (import_react.isValidElement(children) && children.type === import_react.Fragment) yield* this.iterateCollection({
			children: children.props.children,
			items
		});
		else if (typeof children === "function") {
			if (!items) throw new Error("props.children was a function but props.items is missing");
			let index = 0;
			for (let item of items) {
				yield* this.getFullNode({
					value: item,
					index
				}, { renderer: children });
				index++;
			}
		} else {
			let items = [];
			import_react.Children.forEach(children, (child) => {
				if (child) items.push(child);
			});
			let index = 0;
			for (let item of items) {
				let nodes = this.getFullNode({
					element: item,
					index
				}, {});
				for (let node of nodes) {
					index++;
					yield node;
				}
			}
		}
	}
	getKey(item, partialNode, state, parentKey) {
		if (item.key != null) return item.key;
		if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
		let v = partialNode.value;
		if (v != null) {
			let key = v.key ?? v.id;
			if (key == null) throw new Error("No key found for item");
			return key;
		}
		return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
	}
	getChildState(state, partialNode) {
		return { renderer: partialNode.renderer || state.renderer };
	}
	*getFullNode(partialNode, state, parentKey, parentNode) {
		if (import_react.isValidElement(partialNode.element) && partialNode.element.type === import_react.Fragment) {
			let children = [];
			import_react.Children.forEach(partialNode.element.props.children, (child) => {
				children.push(child);
			});
			let index = partialNode.index ?? 0;
			for (const child of children) yield* this.getFullNode({
				element: child,
				index: index++
			}, state, parentKey, parentNode);
			return;
		}
		let element = partialNode.element;
		if (!element && partialNode.value && state && state.renderer) {
			let cached = this.cache.get(partialNode.value);
			if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
				cached.index = partialNode.index;
				cached.parentKey = parentNode ? parentNode.key : null;
				yield cached;
				return;
			}
			element = state.renderer(partialNode.value);
		}
		if (import_react.isValidElement(element)) {
			let type = element.type;
			if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
				let name = element.type;
				throw new Error(`Unknown element <${name}> in collection.`);
			}
			let childNodes = type.getCollectionNode(element.props, this.context);
			let index = partialNode.index ?? 0;
			let result = childNodes.next();
			while (!result.done && result.value) {
				let childNode = result.value;
				partialNode.index = index;
				let nodeKey = childNode.key ?? null;
				if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
				let children = [...this.getFullNode({
					...childNode,
					key: nodeKey,
					index,
					wrapper: $bda7a7e55e1ff206$var$compose(partialNode.wrapper, childNode.wrapper)
				}, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode)];
				for (let node of children) {
					node.value = childNode.value ?? partialNode.value ?? null;
					if (node.value) this.cache.set(node.value, node);
					if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$bda7a7e55e1ff206$var$capitalize(node.type)}> in <${$bda7a7e55e1ff206$var$capitalize(parentNode?.type ?? "unknown parent type")}>. Only <${$bda7a7e55e1ff206$var$capitalize(partialNode.type)}> is supported.`);
					index++;
					yield node;
				}
				result = childNodes.next(children);
			}
			return;
		}
		if (partialNode.key == null || partialNode.type == null) return;
		let builder = this;
		let node = {
			type: partialNode.type,
			props: partialNode.props,
			key: partialNode.key,
			parentKey: parentNode ? parentNode.key : null,
			value: partialNode.value ?? null,
			level: (parentNode?.level ?? 0) + (parentNode?.type === "item" ? 1 : 0),
			index: partialNode.index,
			rendered: partialNode.rendered,
			textValue: partialNode.textValue ?? "",
			"aria-label": partialNode["aria-label"],
			wrapper: partialNode.wrapper,
			shouldInvalidate: partialNode.shouldInvalidate,
			hasChildNodes: partialNode.hasChildNodes || false,
			childNodes: $bda7a7e55e1ff206$var$iterable(function* () {
				if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
				let index = 0;
				for (let child of partialNode.childNodes()) {
					if (child.key != null) child.key = `${node.key}${child.key}`;
					let nodes = builder.getFullNode({
						...child,
						index
					}, builder.getChildState(state, child), node.key, node);
					for (let node of nodes) {
						index++;
						yield node;
					}
				}
			})
		};
		yield node;
	}
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
};
function $bda7a7e55e1ff206$var$iterable(iterator) {
	let cache = [];
	let iterable = null;
	return { *[Symbol.iterator]() {
		for (let item of cache) yield item;
		if (!iterable) iterable = iterator();
		for (let item of iterable) {
			cache.push(item);
			yield item;
		}
	} };
}
function $bda7a7e55e1ff206$var$compose(outer, inner) {
	if (outer && inner) return (element) => outer(inner(element));
	if (outer) return outer;
	if (inner) return inner;
}
function $bda7a7e55e1ff206$var$capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/useCollection.mjs
function $d03379b88399b8c5$export$6cd28814d92fa9c9(props, factory, context) {
	let builder = (0, import_react.useMemo)(() => new $bda7a7e55e1ff206$export$bf788dd355e3a401(), []);
	let { children, items, collection } = props;
	return (0, import_react.useMemo)(() => {
		if (collection) return collection;
		return factory(builder.build({
			children,
			items
		}, context));
	}, [
		builder,
		children,
		items,
		collection,
		context,
		factory
	]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var $4fcfe18fac72dabd$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, import_react.createContext)({ placement: "bottom" });
var $4fcfe18fac72dabd$export$746d02f47f4d381 = /*#__PURE__*/ (0, import_react.forwardRef)(function OverlayArrow(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $4fcfe18fac72dabd$export$2de4954e8ae13b9f);
	let placement = props.placement;
	let style = {
		position: "absolute",
		transform: placement === "top" || placement === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
	};
	if (placement != null) style[placement] = "100%";
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-OverlayArrow",
		values: { placement }
	});
	if (renderProps.style) Object.keys(renderProps.style).forEach((key) => renderProps.style[key] === void 0 && delete renderProps.style[key]);
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props);
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...DOMProps,
		...renderProps,
		style: {
			...style,
			...renderProps.style
		},
		ref,
		"data-placement": placement
	});
});
//#endregion
//#region node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props) {
	let [isOpen, setOpen] = $3e6197669829fe11$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
	return {
		isOpen,
		setOpen,
		open: (0, import_react.useCallback)(() => {
			setOpen(true);
		}, [setOpen]),
		close: (0, import_react.useCallback)(() => {
			setOpen(false);
		}, [setOpen]),
		toggle: (0, import_react.useCallback)(() => {
			setOpen(!isOpen);
		}, [setOpen, isOpen])
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Popover.mjs
var $542a13ca2fa5b484$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $542a13ca2fa5b484$var$PopoverGroupContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var $542a13ca2fa5b484$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, import_react.forwardRef)(function Popover(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $542a13ca2fa5b484$export$9b9a0cd73afb7ca4);
	let contextState = (0, import_react.useContext)($f2ff30fde7b014be$export$d2f961adcb0afbe);
	let localState = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
	let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
	let isExiting = $fcc7165e876206c6$export$45fda7c47f93fd48(ref, state.isOpen) || props.isExiting || false;
	let isHidden = $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59();
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	if (isHidden) {
		let children = props.children;
		if (typeof children === "function") children = children({
			trigger: props.trigger || null,
			placement: "bottom",
			isEntering: false,
			isExiting: false,
			defaultChildren: null
		});
		return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, children);
	}
	if (state && !state.isOpen && !isExiting) return null;
	return /*#__PURE__*/ import_react.createElement($542a13ca2fa5b484$var$PopoverInner, {
		...props,
		triggerRef: props.triggerRef,
		state,
		popoverRef: ref,
		isExiting,
		dir: direction
	});
});
function $542a13ca2fa5b484$var$PopoverInner({ state, isExiting, UNSTABLE_portalContainer, clearContexts, ...props }) {
	let arrowRef = (0, import_react.useRef)(null);
	let containerRef = (0, import_react.useRef)(null);
	let groupCtx = (0, import_react.useContext)($542a13ca2fa5b484$var$PopoverGroupContext);
	let isSubPopover = groupCtx && props.trigger === "SubmenuTrigger";
	let { popoverProps, underlayProps, arrowProps, placement, triggerAnchorPoint } = $f8a024fbad3a5a2e$export$542a6fd13ac93354({
		...props,
		offset: props.offset ?? 8,
		arrowRef,
		groupRef: isSubPopover ? groupCtx : containerRef
	}, state);
	let ref = props.popoverRef;
	let isEntering = $fcc7165e876206c6$export$6d3443f2c48bfc20(ref, !!placement) || props.isEntering || false;
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: props.trigger || null,
			placement,
			isEntering,
			isExiting
		}
	});
	let shouldBeDialog = !props.isNonModal || props.trigger === "SubmenuTrigger";
	let [isDialog, setDialog] = (0, import_react.useState)(false);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector("[role=dialog]"));
	}, [ref, shouldBeDialog]);
	(0, import_react.useEffect)(() => {
		if (isDialog && (props.trigger !== "SubmenuTrigger" || $8f5a2122b0992be3$export$630ff653c5ada6a9() !== "pointer") && ref.current && !$23f2114a1b82827e$export$b4f377a2b6254582(ref.current)) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
	}, [
		isDialog,
		ref,
		props.trigger
	]);
	let children = (0, import_react.useMemo)(() => {
		let children = renderProps.children;
		if (clearContexts) for (let Context of clearContexts) children = /*#__PURE__*/ import_react.createElement(Context.Provider, { value: null }, children);
		return children;
	}, [renderProps.children, clearContexts]);
	let [triggerWidth, setTriggerWidth] = (0, import_react.useState)(null);
	let onResize = (0, import_react.useCallback)(() => {
		if (props.triggerRef.current) setTriggerWidth(props.triggerRef.current.getBoundingClientRect().width + "px");
	}, [props.triggerRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(onResize, [onResize]);
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: renderProps.style?.["--trigger-width"] ? void 0 : props.triggerRef,
		onResize
	});
	let style = {
		...popoverProps.style,
		"--trigger-anchor-point": triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : void 0,
		...renderProps.style,
		"--trigger-width": renderProps.style?.["--trigger-width"] || triggerWidth
	};
	let overlay = /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928($8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true }), popoverProps),
		...renderProps,
		role: isDialog ? "dialog" : void 0,
		tabIndex: isDialog ? -1 : void 0,
		"aria-label": props["aria-label"],
		"aria-labelledby": props["aria-labelledby"],
		ref,
		slot: props.slot || void 0,
		style,
		dir: props.dir,
		"data-trigger": props.trigger,
		"data-placement": placement,
		"data-entering": isEntering || void 0,
		"data-exiting": isExiting || void 0
	}, !props.isNonModal && /*#__PURE__*/ import_react.createElement($081058010ef8962e$export$2317d149ed6f78c4, { onDismiss: state.close }), /*#__PURE__*/ import_react.createElement($4fcfe18fac72dabd$export$2de4954e8ae13b9f.Provider, { value: {
		...arrowProps,
		placement,
		ref: arrowRef
	} }, children), /*#__PURE__*/ import_react.createElement($081058010ef8962e$export$2317d149ed6f78c4, { onDismiss: state.close }));
	if (!isSubPopover) return /*#__PURE__*/ import_react.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
		...props,
		shouldContainFocus: isDialog,
		isExiting,
		portalContainer: UNSTABLE_portalContainer
	}, !props.isNonModal && state.isOpen && /*#__PURE__*/ import_react.createElement("div", {
		"data-testid": "underlay",
		...underlayProps,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /*#__PURE__*/ import_react.createElement("div", {
		ref: containerRef,
		style: { display: "contents" }
	}, /*#__PURE__*/ import_react.createElement($542a13ca2fa5b484$var$PopoverGroupContext.Provider, { value: containerRef }, overlay)));
	return /*#__PURE__*/ import_react.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
		...props,
		shouldContainFocus: isDialog,
		isExiting,
		portalContainer: UNSTABLE_portalContainer ?? groupCtx?.current ?? void 0
	}, overlay);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Keyboard.mjs
var $650bea62ab5f5f0f$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, import_react.createContext)({});
//#endregion
//#region node_modules/react-stately/dist/private/menu/useMenuTriggerState.mjs
function $e3403870bfb691da$export$79fefeb1c2091ac3(props) {
	let overlayTriggerState = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
	let [focusStrategy, setFocusStrategy] = (0, import_react.useState)(null);
	let [expandedKeysStack, setExpandedKeysStack] = (0, import_react.useState)([]);
	let closeAll = () => {
		setExpandedKeysStack([]);
		overlayTriggerState.close();
	};
	let openSubmenu = (triggerKey, level) => {
		setExpandedKeysStack((oldStack) => {
			if (level > oldStack.length) return oldStack;
			return [...oldStack.slice(0, level), triggerKey];
		});
	};
	let closeSubmenu = (triggerKey, level) => {
		setExpandedKeysStack((oldStack) => {
			if (oldStack[level] === triggerKey) return oldStack.slice(0, level);
			else return oldStack;
		});
	};
	return {
		focusStrategy,
		...overlayTriggerState,
		open(focusStrategy = null) {
			setFocusStrategy(focusStrategy);
			overlayTriggerState.open();
		},
		toggle(focusStrategy = null) {
			setFocusStrategy(focusStrategy);
			overlayTriggerState.toggle();
		},
		close() {
			closeAll();
		},
		expandedKeysStack,
		openSubmenu,
		closeSubmenu
	};
}
//#endregion
//#region node_modules/react-stately/dist/private/menu/useSubmenuTriggerState.mjs
function $5b3242e27644e8f1$export$cfc51cf86138bf98(props, state) {
	let { triggerKey } = props;
	let { expandedKeysStack, openSubmenu, closeSubmenu, close: closeAll } = state;
	let [submenuLevel] = (0, import_react.useState)(expandedKeysStack?.length);
	let isOpen = (0, import_react.useMemo)(() => expandedKeysStack[submenuLevel] === triggerKey, [
		expandedKeysStack,
		triggerKey,
		submenuLevel
	]);
	let [focusStrategy, setFocusStrategy] = (0, import_react.useState)(null);
	let open = (0, import_react.useCallback)((focusStrategy) => {
		setFocusStrategy(focusStrategy ?? null);
		openSubmenu(triggerKey, submenuLevel);
	}, [
		openSubmenu,
		submenuLevel,
		triggerKey
	]);
	let close = (0, import_react.useCallback)(() => {
		setFocusStrategy(null);
		closeSubmenu(triggerKey, submenuLevel);
	}, [
		closeSubmenu,
		submenuLevel,
		triggerKey
	]);
	let toggle = (0, import_react.useCallback)((focusStrategy) => {
		setFocusStrategy(focusStrategy ?? null);
		if (isOpen) close();
		else open(focusStrategy);
	}, [
		close,
		open,
		isOpen
	]);
	return (0, import_react.useMemo)(() => ({
		focusStrategy,
		isOpen,
		open,
		close,
		closeAll,
		submenuLevel,
		setOpen: () => {},
		toggle
	}), [
		isOpen,
		open,
		close,
		closeAll,
		focusStrategy,
		toggle,
		submenuLevel
	]);
}
//#endregion
//#region node_modules/react-stately/dist/private/tree/TreeCollection.mjs
var $df1fcc684d3b021a$export$863faf230ee2118a = class {
	constructor(nodes, { expandedKeys } = {}) {
		this.keyMap = /* @__PURE__ */ new Map();
		this.firstKey = null;
		this.lastKey = null;
		this.iterable = nodes;
		expandedKeys = expandedKeys || /* @__PURE__ */ new Set();
		let visit = (node) => {
			this.keyMap.set(node.key, node);
			if (node.childNodes && (node.type === "section" || expandedKeys.has(node.key))) for (let child of node.childNodes) visit(child);
		};
		for (let node of nodes) visit(node);
		let last = null;
		let index = 0;
		for (let [key, node] of this.keyMap) {
			if (last) {
				last.nextKey = key;
				node.prevKey = last.key;
			} else {
				this.firstKey = key;
				node.prevKey = void 0;
			}
			if (node.type === "item") node.index = index++;
			last = node;
			last.nextKey = void 0;
		}
		this.lastKey = last?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(key) {
		let node = this.keyMap.get(key);
		return node ? node.prevKey ?? null : null;
	}
	getKeyAfter(key) {
		let node = this.keyMap.get(key);
		return node ? node.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(key) {
		return this.keyMap.get(key) ?? null;
	}
	at(idx) {
		const keys = [...this.getKeys()];
		return this.getItem(keys[idx]);
	}
};
//#endregion
//#region node_modules/react-stately/dist/private/tree/useTreeState.mjs
function $6b915bde6cd300dd$export$728d6ba534403756(props) {
	let { onExpandedChange } = props;
	let [expandedKeys, setExpandedKeys] = $3e6197669829fe11$export$40bfa8c7b0832715(props.expandedKeys ? new Set(props.expandedKeys) : void 0, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : /* @__PURE__ */ new Set(), onExpandedChange);
	let selectionState = $60f19cefd567a3e4$export$253fe78d46329472(props);
	let disabledKeys = (0, import_react.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let tree = $d03379b88399b8c5$export$6cd28814d92fa9c9(props, (0, import_react.useCallback)((nodes) => new $df1fcc684d3b021a$export$863faf230ee2118a(nodes, { expandedKeys }), [expandedKeys]), null);
	(0, import_react.useEffect)(() => {
		if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
	}, [tree, selectionState.focusedKey]);
	let onToggle = (key) => {
		setExpandedKeys($6b915bde6cd300dd$var$toggleKey(expandedKeys, key));
	};
	return {
		collection: tree,
		expandedKeys,
		disabledKeys,
		toggleKey: onToggle,
		setExpandedKeys,
		selectionManager: new $4a07ac835f260f78$export$6c8a5aaad13c9852(tree, selectionState)
	};
}
function $6b915bde6cd300dd$var$toggleKey(set, key) {
	let res = new Set(set);
	if (res.has(key)) res.delete(key);
	else res.add(key);
	return res;
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Menu.mjs
var $49319ee1285aa241$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $49319ee1285aa241$export$24aad8519b95b41b = /*#__PURE__*/ (0, import_react.createContext)(null);
var $49319ee1285aa241$export$795aec4671cbae19 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $49319ee1285aa241$var$SelectionManagerContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $49319ee1285aa241$export$27d2ad3c5815583e(props) {
	let state = $e3403870bfb691da$export$79fefeb1c2091ac3(props);
	let ref = (0, import_react.useRef)(null);
	let { menuTriggerProps, menuProps } = $f19b83c1486f45cc$export$dc9c12ed27dd1b49({
		...props,
		type: "menu"
	}, state, ref);
	let scrollRef = (0, import_react.useRef)(null);
	if ($d7f64c32b702fe2c$export$b5d7cc18bb8d2b59()) return null;
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$49319ee1285aa241$export$c7e742effb1c51e2, {
			...menuProps,
			ref: scrollRef
		}],
		[$f2ff30fde7b014be$export$d2f961adcb0afbe, state],
		[$49319ee1285aa241$export$795aec4671cbae19, state],
		[$542a13ca2fa5b484$export$9b9a0cd73afb7ca4, {
			trigger: "MenuTrigger",
			triggerRef: ref,
			scrollRef,
			placement: "bottom start",
			"aria-labelledby": menuProps["aria-labelledby"]
		}]
	] }, /*#__PURE__*/ import_react.createElement($0d47b37c475c5231$export$3351871ee4b288b8, {
		...menuTriggerProps,
		ref,
		isPressed: state.isOpen
	}, props.children));
}
var $49319ee1285aa241$var$SubmenuTriggerContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var $49319ee1285aa241$var$SubmenuTriggerNode = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "submenutrigger";
	}
	filter(collection, newCollection, filterFn) {
		let triggerNode = collection.getItem(this.firstChildKey);
		if (triggerNode && filterFn(triggerNode.textValue, this)) {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
		return null;
	}
};
var $49319ee1285aa241$export$ecabc99eeffab7ca = /*#__PURE__*/ $42ceafc619f9c3ba$export$e953bb1cd0f19726($49319ee1285aa241$var$SubmenuTriggerNode, (props, ref, item) => {
	let { CollectionBranch } = (0, import_react.useContext)($263ab7fc0f95ccdb$export$4feb769f8ddf26c5);
	let state = (0, import_react.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
	let rootMenuTriggerState = (0, import_react.useContext)($49319ee1285aa241$export$795aec4671cbae19);
	let submenuTriggerState = $5b3242e27644e8f1$export$cfc51cf86138bf98({ triggerKey: item.key }, rootMenuTriggerState);
	let submenuRef = (0, import_react.useRef)(null);
	let itemRef = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
	let { parentMenuRef, shouldUseVirtualFocus } = (0, import_react.useContext)($49319ee1285aa241$var$SubmenuTriggerContext);
	let { submenuTriggerProps, submenuProps, popoverProps } = $8794213c1141208f$export$7138b0d059a6e743({
		parentMenuRef,
		submenuRef,
		delay: props.delay,
		shouldUseVirtualFocus
	}, submenuTriggerState, itemRef);
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$49319ee1285aa241$var$MenuItemContext, {
			...submenuTriggerProps,
			onAction: void 0,
			ref: itemRef
		}],
		[$49319ee1285aa241$export$c7e742effb1c51e2, {
			ref: submenuRef,
			...submenuProps
		}],
		[$f2ff30fde7b014be$export$d2f961adcb0afbe, submenuTriggerState],
		[$542a13ca2fa5b484$export$9b9a0cd73afb7ca4, {
			trigger: "SubmenuTrigger",
			triggerRef: itemRef,
			placement: "end top",
			"aria-labelledby": submenuProps["aria-labelledby"],
			...popoverProps
		}]
	] }, /*#__PURE__*/ import_react.createElement(CollectionBranch, {
		collection: state.collection,
		parent: item
	}), props.children[1]);
}, (props) => props.children[0]);
var $49319ee1285aa241$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, import_react.forwardRef)(function Menu(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $49319ee1285aa241$export$c7e742effb1c51e2);
	return /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$export$bf788dd355e3a401, { content: /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$export$fb8073518f34e6ec, props) }, (collection) => /*#__PURE__*/ import_react.createElement($49319ee1285aa241$var$MenuInner, {
		props,
		collection,
		menuRef: ref
	}));
});
function $49319ee1285aa241$var$MenuInner({ props, collection, menuRef: ref }) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $4b38b5b75ecc6208$export$b0d3ecf7112093a7);
	let { filter, ...autocompleteMenuProps } = props;
	let filteredCollection = (0, import_react.useMemo)(() => filter ? collection.filter(filter) : collection, [collection, filter]);
	let state = $6b915bde6cd300dd$export$728d6ba534403756({
		...props,
		collection: filteredCollection,
		children: void 0
	});
	let triggerState = (0, import_react.useContext)($49319ee1285aa241$export$795aec4671cbae19);
	let { isVirtualized, CollectionRoot } = (0, import_react.useContext)($263ab7fc0f95ccdb$export$4feb769f8ddf26c5);
	let { menuProps } = $a2d69d6ee8486855$export$38eaa17faae8f579({
		...props,
		isVirtualized,
		onClose: props.onClose || triggerState?.close
	}, state, ref);
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		children: void 0,
		defaultClassName: "react-aria-Menu",
		values: { isEmpty: state.collection.size === 0 }
	});
	let emptyState = null;
	if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ import_react.createElement("div", {
		role: "menuitem",
		style: { display: "contents" }
	}, props.renderEmptyState());
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	return /*#__PURE__*/ import_react.createElement($535772f9d2c1f38d$export$20e40289641fbbb6, null, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, menuProps),
		ref,
		slot: props.slot || void 0,
		"data-empty": state.collection.size === 0 || void 0,
		onScroll: props.onScroll
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$49319ee1285aa241$export$24aad8519b95b41b, state],
		[$e28ab3efe3e87743$export$6615d83f6de245ce, { elementType: "div" }],
		[$263ab7fc0f95ccdb$export$d40e14dec8b060a8, {
			name: "MenuSection",
			render: $49319ee1285aa241$var$MenuSectionInner
		}],
		[$49319ee1285aa241$var$SubmenuTriggerContext, {
			parentMenuRef: ref,
			shouldUseVirtualFocus: autocompleteMenuProps?.shouldUseVirtualFocus
		}],
		[$49319ee1285aa241$var$MenuItemContext, { shouldCloseOnSelect: props.shouldCloseOnSelect }],
		[$4b38b5b75ecc6208$export$b0d3ecf7112093a7, null],
		[$4b38b5b75ecc6208$export$698f465ec27e93df, null],
		[$49319ee1285aa241$var$SelectionManagerContext, state.selectionManager],
		[$49319ee1285aa241$export$795aec4671cbae19, triggerState ?? $e3403870bfb691da$export$79fefeb1c2091ac3({})]
	] }, /*#__PURE__*/ import_react.createElement($792f28e438b9ad5f$export$758399f318e6385a, null, /*#__PURE__*/ import_react.createElement(CollectionRoot, {
		collection: state.collection,
		persistedKeys: $263ab7fc0f95ccdb$export$90e00781bc59d8f9(state.selectionManager.focusedKey),
		scrollRef: ref
	}))), emptyState));
}
var $49319ee1285aa241$var$GroupSelectionManager = class extends $4a07ac835f260f78$export$6c8a5aaad13c9852 {
	constructor(parent, state) {
		super(parent.collection, state);
		this.parent = parent;
	}
	get focusedKey() {
		return this.parent.focusedKey;
	}
	get isFocused() {
		return this.parent.isFocused;
	}
	setFocusedKey(key, childFocusStrategy) {
		return this.parent.setFocusedKey(key, childFocusStrategy);
	}
	setFocused(isFocused) {
		this.parent.setFocused(isFocused);
	}
	get childFocusStrategy() {
		return this.parent.childFocusStrategy;
	}
};
function $49319ee1285aa241$var$MenuSectionInner(props, ref, section, className = "react-aria-MenuSection") {
	let state = (0, import_react.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
	let { CollectionBranch } = (0, import_react.useContext)($263ab7fc0f95ccdb$export$4feb769f8ddf26c5);
	let [headingRef, heading] = $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8();
	let { headingProps, groupProps } = $7355d4e5c49461b6$export$73f7a44322579622({
		heading,
		"aria-label": section.props["aria-label"] ?? void 0
	});
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		id: void 0,
		children: void 0,
		defaultClassName: className,
		className: section.props?.className,
		style: section.props?.style,
		values: void 0
	});
	let parent = (0, import_react.useContext)($49319ee1285aa241$var$SelectionManagerContext);
	let selectionState = $60f19cefd567a3e4$export$253fe78d46329472(props);
	let manager = props.selectionMode != null ? new $49319ee1285aa241$var$GroupSelectionManager(parent, selectionState) : parent;
	let closeOnSelect = $7230ffa83bc0c2cf$export$fabf2dc03a41866e($49319ee1285aa241$var$MenuItemContext)?.shouldCloseOnSelect;
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.section, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, groupProps),
		ref
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$53e61d82d8b8611d$export$e0e4026c12a8bdbb, {
			...headingProps,
			ref: headingRef
		}],
		[$49319ee1285aa241$var$SelectionManagerContext, manager],
		[$49319ee1285aa241$var$MenuItemContext, { shouldCloseOnSelect: props.shouldCloseOnSelect ?? closeOnSelect }]
	] }, /*#__PURE__*/ import_react.createElement(CollectionBranch, {
		collection: state.collection,
		parent: section
	})));
}
var $49319ee1285aa241$export$4b1545b4f2016d26 = /*#__PURE__*/ $42ceafc619f9c3ba$export$e953bb1cd0f19726($6f0c29017aeec335$export$437f11dc9b403b78, $49319ee1285aa241$var$MenuSectionInner);
var $49319ee1285aa241$var$MenuItemContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var $49319ee1285aa241$export$2ce376c2cc3355c8 = /*#__PURE__*/ $42ceafc619f9c3ba$export$18af5c7a9e9b3664($6f0c29017aeec335$export$fd11f34e1d07f134, function MenuItem(props, forwardedRef, item) {
	[props, forwardedRef] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, forwardedRef, $49319ee1285aa241$var$MenuItemContext);
	let id = $7230ffa83bc0c2cf$export$fabf2dc03a41866e($49319ee1285aa241$var$MenuItemContext)?.id;
	let state = (0, import_react.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
	let ref = $03e8ab2d84d7657a$export$4338b53315abf666(forwardedRef);
	let selectionManager = (0, import_react.useContext)($49319ee1285aa241$var$SelectionManagerContext);
	let { isVirtualized } = (0, import_react.useContext)($263ab7fc0f95ccdb$export$4feb769f8ddf26c5);
	let { menuItemProps, labelProps, descriptionProps, keyboardShortcutProps, ...states } = $1a9c2c840fd36413$export$9d32628fc2aea7da({
		...props,
		id,
		key: item.key,
		selectionManager,
		isVirtualized
	}, state, ref);
	let { hoverProps, isHovered } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: states.isDisabled });
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		id: void 0,
		children: item.rendered,
		defaultClassName: "react-aria-MenuItem",
		values: {
			...states,
			isHovered,
			isFocusVisible: states.isFocusVisible,
			selectionMode: selectionManager.selectionMode,
			selectionBehavior: selectionManager.selectionBehavior,
			hasSubmenu: !!props["aria-haspopup"],
			isOpen: props["aria-expanded"] === "true"
		}
	});
	let ElementType = props.href ? $7230ffa83bc0c2cf$export$df3a06d6289f983e.a : $7230ffa83bc0c2cf$export$df3a06d6289f983e.div;
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	delete DOMProps.onClick;
	return /*#__PURE__*/ import_react.createElement(ElementType, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, menuItemProps, hoverProps),
		ref,
		"data-disabled": states.isDisabled || void 0,
		"data-hovered": isHovered || void 0,
		"data-focused": states.isFocused || void 0,
		"data-focus-visible": states.isFocusVisible || void 0,
		"data-pressed": states.isPressed || void 0,
		"data-selected": states.isSelected || void 0,
		"data-selection-mode": selectionManager.selectionMode === "none" ? void 0 : selectionManager.selectionMode,
		"data-has-submenu": !!props["aria-haspopup"] || void 0,
		"data-open": props["aria-expanded"] === "true" || void 0
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$efe09c6d1c304b50$export$9afb8bc826b033ea, { slots: {
			[$7230ffa83bc0c2cf$export$c62b8e45d58ddad9]: labelProps,
			label: labelProps,
			description: descriptionProps
		} }],
		[$650bea62ab5f5f0f$export$744d98a3b8a94e1c, keyboardShortcutProps],
		[$91fe5e721c7f36c1$export$c9549807523555e0, { isSelected: states.isSelected }]
	] }, renderProps.children));
});
//#endregion
//#region node_modules/react-aria-components/dist/private/Dialog.mjs
var $f2ff30fde7b014be$export$d2f961adcb0afbe = /*#__PURE__*/ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/react-stately/dist/private/searchfield/useSearchFieldState.mjs
function $56baeede9f35e022$export$3f8be18b0f41eaf2(props) {
	let [value, setValue] = $3e6197669829fe11$export$40bfa8c7b0832715($56baeede9f35e022$var$toString(props.value), $56baeede9f35e022$var$toString(props.defaultValue) || "", props.onChange);
	return {
		value,
		setValue
	};
}
function $56baeede9f35e022$var$toString(val) {
	if (val == null) return;
	return val.toString();
}
//#endregion
//#region node_modules/react-aria-components/dist/private/SearchField.mjs
var $29a5029ff43c9612$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (0, import_react.createContext)(null);
var $29a5029ff43c9612$export$b94867ecbd698f21 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function SearchField(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $29a5029ff43c9612$export$d1c4e4c63cb03a11);
	let { validationBehavior: formValidationBehavior } = $7230ffa83bc0c2cf$export$fabf2dc03a41866e($cdaed739b1139372$export$c24727297075ec6a) || {};
	let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? "native";
	let inputRef = (0, import_react.useRef)(null);
	[props, inputRef] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, inputRef, $4b38b5b75ecc6208$export$698f465ec27e93df);
	let [labelRef, label] = $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8(!props["aria-label"] && !props["aria-labelledby"]);
	let state = $56baeede9f35e022$export$3f8be18b0f41eaf2({
		...props,
		validationBehavior
	});
	let { labelProps, inputProps, clearButtonProps, descriptionProps, errorMessageProps, ...validation } = $44614525ec969a63$export$9bb30bbe003b82e0({
		...$7230ffa83bc0c2cf$export$ef03459518577ad4(props),
		label,
		validationBehavior
	}, state, inputRef);
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		values: {
			isEmpty: state.value === "",
			isDisabled: props.isDisabled || false,
			isInvalid: validation.isInvalid || false,
			isReadOnly: props.isReadOnly || false,
			isRequired: props.isRequired || false,
			state
		},
		defaultClassName: "react-aria-SearchField"
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...DOMProps,
		...renderProps,
		ref,
		slot: props.slot || void 0,
		"data-empty": state.value === "" || void 0,
		"data-disabled": props.isDisabled || void 0,
		"data-invalid": validation.isInvalid || void 0,
		"data-readonly": props.isReadOnly || void 0,
		"data-required": props.isRequired || void 0
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$43a3b93638fe5db9$export$75b6ee27786ba447, {
			...labelProps,
			ref: labelRef
		}],
		[$41fb335299a4a39e$export$37fb8590cf2c088c, {
			...inputProps,
			ref: inputRef
		}],
		[$7705c033048f6da7$export$24d547caef80ccd1, clearButtonProps],
		[$efe09c6d1c304b50$export$9afb8bc826b033ea, { slots: {
			description: descriptionProps,
			errorMessage: errorMessageProps
		} }],
		[$3a442827418ebe87$export$f9c6924e160136d1, {
			isInvalid: validation.isInvalid,
			isDisabled: props.isDisabled || false
		}],
		[$1f3c3b1a70cec653$export$ff05c3ac10437e03, validation]
	] }, renderProps.children));
});
//#endregion
export { $29a5029ff43c9612$export$b94867ecbd698f21, $3a442827418ebe87$export$eb2fcfdbd7ba97d4, $41fb335299a4a39e$export$f5b8910cec6cf069, $43a3b93638fe5db9$export$b04be29aa201d4f5, $49319ee1285aa241$export$27d2ad3c5815583e, $49319ee1285aa241$export$2ce376c2cc3355c8, $49319ee1285aa241$export$4b1545b4f2016d26, $49319ee1285aa241$export$d9b273488cd8ce6f, $49319ee1285aa241$export$ecabc99eeffab7ca, $4fcfe18fac72dabd$export$746d02f47f4d381, $53e61d82d8b8611d$export$8b251419efc915eb, $542a13ca2fa5b484$export$5b6b19405a83ff9d, $7230ffa83bc0c2cf$export$c245e6201fed2f75, $7705c033048f6da7$export$353f5b6fc5456de1, $e28ab3efe3e87743$export$1ff3c3f08ae963c0, $efe09c6d1c304b50$export$5f1af8db9871e1d6 };
