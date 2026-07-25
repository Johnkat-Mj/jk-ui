import { __toESM } from "../_runtime.mjs";
import { require_react, require_react_dom, require_shim } from "./@tanstack/react-router+[...].mjs";
import { clsx } from "./clsx.mjs";
import { $a747a10fe70a57da$export$c17fa47878dc55b6, $b27c684a33948c64$export$2f817fcdc4b89ae0 } from "./internationalized__string.mjs";
//#region node_modules/react-aria/dist/private/utils/chain.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Calls all functions in the order they were chained with the same arguments.
*/ function $a4e76a5424781910$export$e08e3b67e392101e(...callbacks) {
	return (...args) => {
		for (let callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? import_react.useLayoutEffect : () => {};
//#endregion
//#region node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var $c7eafbbe1ea5834e$var$defaultContext = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
};
var $c7eafbbe1ea5834e$var$SSRContext = /*#__PURE__*/ import_react.createContext($c7eafbbe1ea5834e$var$defaultContext);
var $c7eafbbe1ea5834e$var$IsSSRContext = /*#__PURE__*/ import_react.createContext(false);
Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $c7eafbbe1ea5834e$var$componentIds = /* @__PURE__ */ new WeakMap();
function $c7eafbbe1ea5834e$var$useCounter(isDisabled = false) {
	let ctx = (0, import_react.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	let ref = (0, import_react.useRef)(null);
	if (ref.current === null && !isDisabled) {
		let currentOwner = import_react.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (currentOwner) {
			let prevComponentValue = $c7eafbbe1ea5834e$var$componentIds.get(currentOwner);
			if (prevComponentValue == null) $c7eafbbe1ea5834e$var$componentIds.set(currentOwner, {
				id: ctx.current,
				state: currentOwner.memoizedState
			});
			else if (currentOwner.memoizedState !== prevComponentValue.state) {
				ctx.current = prevComponentValue.id;
				$c7eafbbe1ea5834e$var$componentIds.delete(currentOwner);
			}
		}
		ref.current = ++ctx.current;
	}
	return ref.current;
}
function $c7eafbbe1ea5834e$var$useLegacySSRSafeId(defaultId) {
	let ctx = (0, import_react.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	let counter = $c7eafbbe1ea5834e$var$useCounter(!!defaultId);
	let prefix = `react-aria${ctx.prefix}`;
	return defaultId || `${prefix}-${counter}`;
}
function $c7eafbbe1ea5834e$var$useModernSSRSafeId(defaultId) {
	let id = import_react.useId();
	let [didSSR] = (0, import_react.useState)($c7eafbbe1ea5834e$export$535bd6ca7f90a273());
	let prefix = didSSR || false ? "react-aria" : `react-aria${$c7eafbbe1ea5834e$var$defaultContext.prefix}`;
	return defaultId || `${prefix}-${id}`;
}
var $c7eafbbe1ea5834e$export$619500959fc48b26 = typeof import_react.useId === "function" ? $c7eafbbe1ea5834e$var$useModernSSRSafeId : $c7eafbbe1ea5834e$var$useLegacySSRSafeId;
function $c7eafbbe1ea5834e$var$getSnapshot() {
	return false;
}
function $c7eafbbe1ea5834e$var$getServerSnapshot() {
	return true;
}
function $c7eafbbe1ea5834e$var$subscribe(onStoreChange) {
	return () => {};
}
function $c7eafbbe1ea5834e$export$535bd6ca7f90a273() {
	if (typeof import_react.useSyncExternalStore === "function") return import_react.useSyncExternalStore($c7eafbbe1ea5834e$var$subscribe, $c7eafbbe1ea5834e$var$getSnapshot, $c7eafbbe1ea5834e$var$getServerSnapshot);
	return (0, import_react.useContext)($c7eafbbe1ea5834e$var$IsSSRContext);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useValueEffect.mjs
function $1a716630a9e3a599$export$14d238f342723f25(defaultValue) {
	let [value, setValue] = (0, import_react.useState)(defaultValue);
	let currValue = (0, import_react.useRef)(value);
	let effect = (0, import_react.useRef)(null);
	let nextRef = (0, import_react.useRef)(() => {
		if (!effect.current) return;
		let newValue = effect.current.next();
		if (newValue.done) {
			effect.current = null;
			return;
		}
		if (currValue.current === newValue.value) nextRef.current();
		else setValue(newValue.value);
	});
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		currValue.current = value;
		if (effect.current) nextRef.current();
	});
	return [value, (0, import_react.useCallback)((fn) => {
		effect.current = fn(currValue.current);
		nextRef.current();
	}, [nextRef])];
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useId.mjs
var $390e54f620492c70$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $390e54f620492c70$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
var $390e54f620492c70$var$registry;
if (typeof FinalizationRegistry !== "undefined") $390e54f620492c70$var$registry = new FinalizationRegistry((heldValue) => {
	$390e54f620492c70$export$d41a04c74483c6ef.delete(heldValue);
});
function $390e54f620492c70$export$f680877a34711e37(defaultId) {
	let [value, setValue] = (0, import_react.useState)(defaultId);
	let nextId = (0, import_react.useRef)(null);
	let res = $c7eafbbe1ea5834e$export$619500959fc48b26(value);
	let cleanupRef = (0, import_react.useRef)(null);
	if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.register(cleanupRef, res);
	if ($390e54f620492c70$var$canUseDOM) {
		const cacheIdRef = $390e54f620492c70$export$d41a04c74483c6ef.get(res);
		if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
		else $390e54f620492c70$export$d41a04c74483c6ef.set(res, [nextId]);
	}
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let r = res;
		return () => {
			if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.unregister(cleanupRef);
			$390e54f620492c70$export$d41a04c74483c6ef.delete(r);
		};
	}, [res]);
	(0, import_react.useEffect)(() => {
		let newId = nextId.current;
		if (newId) setValue(newId);
		return () => {
			if (newId) nextId.current = null;
		};
	});
	return res;
}
function $390e54f620492c70$export$cd8c9cb68f842629(idA, idB) {
	if (idA === idB) return idA;
	let setIdsA = $390e54f620492c70$export$d41a04c74483c6ef.get(idA);
	if (setIdsA) {
		setIdsA.forEach((ref) => ref.current = idB);
		return idB;
	}
	let setIdsB = $390e54f620492c70$export$d41a04c74483c6ef.get(idB);
	if (setIdsB) {
		setIdsB.forEach((ref) => ref.current = idA);
		return idA;
	}
	return idB;
}
function $390e54f620492c70$export$b4cc09c592e8fdb8(depArray = []) {
	let id = $390e54f620492c70$export$f680877a34711e37();
	let [resolvedId, setResolvedId] = $1a716630a9e3a599$export$14d238f342723f25(id);
	let updateId = (0, import_react.useCallback)(() => {
		setResolvedId(function* () {
			yield id;
			yield document.getElementById(id) ? id : void 0;
		});
	}, [id, setResolvedId]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(updateId, [
		id,
		updateId,
		...depArray
	]);
	return resolvedId;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/mergeRefs.mjs
function $4064df0d6f9620e1$export$c9058316764c140e(...refs) {
	if (refs.length === 1 && refs[0]) return refs[0];
	return (value) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = $4064df0d6f9620e1$var$setRef(ref, value);
			hasCleanup ||= typeof cleanup == "function";
			return cleanup;
		});
		if (hasCleanup) return () => {
			cleanups.forEach((cleanup, i) => {
				if (typeof cleanup === "function") cleanup();
				else $4064df0d6f9620e1$var$setRef(refs[i], null);
			});
		};
	};
}
function $4064df0d6f9620e1$var$setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref != null) ref.current = value;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/mergeProps.mjs
function $bbaa08b3cd72f041$export$9d1611c77c2fe928(...args) {
	let result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		let props = args[i];
		for (let key in props) {
			let a = result[key];
			let b = props[key];
			if (typeof a === "function" && typeof b === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90) result[key] = $a4e76a5424781910$export$e08e3b67e392101e(a, b);
			else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx(a, b);
			else if (key === "id" && a && b) result.id = $390e54f620492c70$export$cd8c9cb68f842629(a, b);
			else if (key === "ref" && a && b) result.ref = $4064df0d6f9620e1$export$c9058316764c140e(a, b);
			else result[key] = b !== void 0 ? b : a;
		}
	}
	return result;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function $03e8ab2d84d7657a$export$4338b53315abf666(ref) {
	const objRef = (0, import_react.useRef)(null);
	const cleanupRef = (0, import_react.useRef)(void 0);
	const refEffect = (0, import_react.useCallback)((instance) => {
		if (typeof ref === "function") {
			const refCallback = ref;
			const refCleanup = refCallback(instance);
			return () => {
				if (typeof refCleanup === "function") refCleanup();
				else refCallback(null);
			};
		} else if (ref) {
			ref.current = instance;
			return () => {
				ref.current = null;
			};
		}
	}, [ref]);
	return (0, import_react.useMemo)(() => ({
		get current() {
			return objRef.current;
		},
		set current(value) {
			objRef.current = value;
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = void 0;
			}
			if (value != null) cleanupRef.current = refEffect(value);
		}
	}), [refEffect]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/constants.mjs
var import_shim = require_shim();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var $8b2399d051d06d4c$export$447a38995de2c711 = "react-aria-clear-focus";
var $8b2399d051d06d4c$export$831c820ad60f9d12 = "react-aria-focus";
//#endregion
//#region node_modules/react-aria/dist/private/utils/domHelpers.mjs
var $d447af545b77c9f1$export$b204af158042fbac = (el) => {
	return el?.ownerDocument ?? document;
};
var $d447af545b77c9f1$export$f21a1ffae260145a = (el) => {
	if (el && "window" in el && el.window === el) return el;
	return $d447af545b77c9f1$export$b204af158042fbac(el).defaultView || window;
};
/**
* Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType
* property.
*/ function $d447af545b77c9f1$var$isNode(value) {
	return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
	return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
//#endregion
//#region node_modules/react-stately/dist/private/flags/flags.mjs
var $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
	return $6a20a7989e6c817a$var$_shadowDOM;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
	if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
	if (!node || !otherNode) return false;
	let currentNode = otherNode;
	while (currentNode !== null) {
		if (currentNode === node) return true;
		if (currentNode.tagName === "SLOT" && currentNode.assignedSlot) currentNode = currentNode.assignedSlot.parentNode;
		else if ($d447af545b77c9f1$export$af51f0f06c0f328a(currentNode)) currentNode = currentNode.host;
		else currentNode = currentNode.parentNode;
	}
	return false;
}
var $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
	if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return doc.activeElement;
	let activeElement = doc.activeElement;
	while (activeElement && "shadowRoot" in activeElement && activeElement.shadowRoot?.activeElement) activeElement = activeElement.shadowRoot.activeElement;
	return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
	if ($6a20a7989e6c817a$export$98658e8c59125e6a() && event.target instanceof Element && event.target.shadowRoot) {
		if ("composedPath" in event) return event.composedPath()[0] ?? null;
		else if ("composedPath" in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
	}
	return event.target;
}
function $23f2114a1b82827e$export$b4f377a2b6254582(node) {
	if (!node) return false;
	let root = node.getRootNode();
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(node);
	if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
	let activeElement = root.activeElement;
	return activeElement != null && node.contains(activeElement);
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/virtualFocus.mjs
function $b72f3f7b3b5f42c6$export$76e4e37e5339496d(to) {
	let from = $b72f3f7b3b5f42c6$export$759df0d867455a91($d447af545b77c9f1$export$b204af158042fbac(to));
	if (from !== to) {
		if (from) $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to);
		if (to) $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from);
	}
}
function $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to) {
	from.dispatchEvent(new FocusEvent("blur", { relatedTarget: to }));
	from.dispatchEvent(new FocusEvent("focusout", {
		bubbles: true,
		relatedTarget: to
	}));
}
function $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from) {
	to.dispatchEvent(new FocusEvent("focus", { relatedTarget: from }));
	to.dispatchEvent(new FocusEvent("focusin", {
		bubbles: true,
		relatedTarget: from
	}));
}
function $b72f3f7b3b5f42c6$export$759df0d867455a91(document) {
	let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(document);
	let activeDescendant = activeElement?.getAttribute("aria-activedescendant");
	if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
	return activeElement;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
	if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({ preventScroll: true });
	else {
		let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
		element.focus();
		$1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
	}
}
var $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
	if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
		$1969ac565cfec8d0$var$supportsPreventScrollCached = false;
		try {
			document.createElement("div").focus({ get preventScroll() {
				$1969ac565cfec8d0$var$supportsPreventScrollCached = true;
				return true;
			} });
		} catch {}
	}
	return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
	let parent = element.parentNode;
	let scrollableElements = [];
	let rootScrollingElement = document.scrollingElement || document.documentElement;
	while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
		if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
			element: parent,
			scrollTop: parent.scrollTop,
			scrollLeft: parent.scrollLeft
		});
		parent = parent.parentNode;
	}
	if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
		element: rootScrollingElement,
		scrollTop: rootScrollingElement.scrollTop,
		scrollLeft: rootScrollingElement.scrollLeft
	});
	return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
	for (let { element, scrollTop, scrollLeft } of scrollableElements) {
		element.scrollTop = scrollTop;
		element.scrollLeft = scrollLeft;
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isElementVisible.mjs
var $ae77152785188400$var$supportsCheckVisibility = typeof Element !== "undefined" && "checkVisibility" in Element.prototype;
function $ae77152785188400$var$isStyleVisible(element) {
	const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
	let { display, visibility } = element.style;
	let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
	if (isVisible) {
		const { getComputedStyle } = $d447af545b77c9f1$export$f21a1ffae260145a(element);
		let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
		isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
	}
	return isVisible;
}
function $ae77152785188400$var$isAttributeVisible(element, childElement) {
	return !element.hasAttribute("hidden") && !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $ae77152785188400$export$e989c0fffaa6b27a(element, childElement) {
	if ($ae77152785188400$var$supportsCheckVisibility) return element.checkVisibility({ visibilityProperty: true }) && !element.closest("[data-react-aria-prevent-focus]");
	return element.nodeName !== "#comment" && $ae77152785188400$var$isStyleVisible(element) && $ae77152785188400$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ae77152785188400$export$e989c0fffaa6b27a(element.parentElement, element));
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isFocusable.mjs
var $3b8b240c1bf84ab9$var$focusableElements = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable^=\"false\"])",
	"permission"
];
var $3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$3b8b240c1bf84ab9$var$focusableElements.push("[tabindex]:not([tabindex=\"-1\"]):not([disabled])");
var $3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(":not([hidden]):not([tabindex=\"-1\"]),");
function $3b8b240c1bf84ab9$export$4c063cf1350e6fed(element, options) {
	return element.matches($3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR) && !$3b8b240c1bf84ab9$var$isInert(element) && (options?.skipVisibilityCheck || $ae77152785188400$export$e989c0fffaa6b27a(element));
}
function $3b8b240c1bf84ab9$export$bebd5a1431fec25d(element) {
	return element.matches($3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR) && $ae77152785188400$export$e989c0fffaa6b27a(element) && !$3b8b240c1bf84ab9$var$isInert(element);
}
function $3b8b240c1bf84ab9$var$isInert(element) {
	let node = element;
	while (node != null) {
		if (node instanceof $d447af545b77c9f1$export$f21a1ffae260145a(node).HTMLElement && node.inert) return true;
		node = node.parentElement;
	}
	return false;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/utils.mjs
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
	let event = nativeEvent;
	event.nativeEvent = nativeEvent;
	event.isDefaultPrevented = () => event.defaultPrevented;
	event.isPropagationStopped = () => event.cancelBubble;
	event.persist = () => {};
	return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
	Object.defineProperty(event, "target", { value: target });
	Object.defineProperty(event, "currentTarget", { value: target });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
	let stateRef = (0, import_react.useRef)({
		isFocused: false,
		observer: null
	});
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const state = stateRef.current;
		return () => {
			if (state.observer) {
				state.observer.disconnect();
				state.observer = null;
			}
		};
	}, []);
	return (0, import_react.useCallback)((e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
			stateRef.current.isFocused = true;
			let target = eventTarget;
			let onBlurHandler = (e) => {
				stateRef.current.isFocused = false;
				if (target.disabled) {
					let event = $a92dc41f639950be$export$525bc4921d56d4a(e);
					onBlur?.(event);
				}
				if (stateRef.current.observer) {
					stateRef.current.observer.disconnect();
					stateRef.current.observer = null;
				}
			};
			target.addEventListener("focusout", onBlurHandler, { once: true });
			stateRef.current.observer = new MutationObserver(() => {
				if (stateRef.current.isFocused && target.disabled) {
					stateRef.current.observer?.disconnect();
					let relatedTargetEl = target === $23f2114a1b82827e$export$cd4e5573fbe2b576() ? null : $23f2114a1b82827e$export$cd4e5573fbe2b576();
					target.dispatchEvent(new FocusEvent("blur", { relatedTarget: relatedTargetEl }));
					target.dispatchEvent(new FocusEvent("focusout", {
						bubbles: true,
						relatedTarget: relatedTargetEl
					}));
				}
			});
			stateRef.current.observer.observe(target, {
				attributes: true,
				attributeFilter: ["disabled"]
			});
		}
	}, [onBlur]);
}
var $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
function $a92dc41f639950be$export$cabe61c495ee3649(target) {
	while (target && !$3b8b240c1bf84ab9$export$4c063cf1350e6fed(target, { skipVisibilityCheck: true })) target = target.parentElement;
	let window = $d447af545b77c9f1$export$f21a1ffae260145a(target);
	let activeElement = window.document.activeElement;
	if (!activeElement || activeElement === target) return;
	$a92dc41f639950be$export$fda7da73ab5d4c48 = true;
	let isRefocusing = false;
	let onBlur = (e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === activeElement || isRefocusing) e.stopImmediatePropagation();
	};
	let onFocusOut = (e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === activeElement || isRefocusing) {
			e.stopImmediatePropagation();
			if (!target && !isRefocusing) {
				isRefocusing = true;
				$1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
				cleanup();
			}
		}
	};
	let onFocus = (e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === target || isRefocusing) e.stopImmediatePropagation();
	};
	let onFocusIn = (e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === target || isRefocusing) {
			e.stopImmediatePropagation();
			if (!isRefocusing) {
				isRefocusing = true;
				$1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
				cleanup();
			}
		}
	};
	window.addEventListener("blur", onBlur, true);
	window.addEventListener("focusout", onFocusOut, true);
	window.addEventListener("focusin", onFocusIn, true);
	window.addEventListener("focus", onFocus, true);
	let cleanup = () => {
		cancelAnimationFrame(raf);
		window.removeEventListener("blur", onBlur, true);
		window.removeEventListener("focusout", onFocusOut, true);
		window.removeEventListener("focusin", onFocusIn, true);
		window.removeEventListener("focus", onFocus, true);
		$a92dc41f639950be$export$fda7da73ab5d4c48 = false;
		isRefocusing = false;
	};
	let raf = requestAnimationFrame(cleanup);
	return cleanup;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/platform.mjs
function $2add3ce32c6007eb$var$testUserAgent(re) {
	if (typeof window === "undefined" || window.navigator == null) return false;
	let brands = window.navigator["userAgentData"]?.brands;
	return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
	return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
	let res = null;
	return () => {
		if (res == null) res = fn();
		return res;
	};
}
var $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
var $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
});
var $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
});
var $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
});
var $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && !$2add3ce32c6007eb$export$6446a186d09e379e();
});
var $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testUserAgent(/Chrome/i);
});
var $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
var $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
	return $2add3ce32c6007eb$var$testUserAgent(/Firefox/i);
});
//#endregion
//#region node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function $b5c62b033c25b96d$export$60278871457622de(event) {
	if (event.pointerType === "" && event.isTrusted) return true;
	if ($2add3ce32c6007eb$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
function $b5c62b033c25b96d$export$29bf1b5f2c56cf63(event) {
	return !$2add3ce32c6007eb$export$a11b0059900ceec8() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/openLink.mjs
var $caaf0dd3060ed57c$var$RouterContext = /*#__PURE__*/ (0, import_react.createContext)({
	isNative: true,
	open: $caaf0dd3060ed57c$var$openSyntheticLink,
	useHref: (href) => href
});
function $caaf0dd3060ed57c$export$9a302a45f65d0572() {
	return (0, import_react.useContext)($caaf0dd3060ed57c$var$RouterContext);
}
function $caaf0dd3060ed57c$export$efa8c9099e530235(link, modifiers) {
	let target = link.getAttribute("target");
	return (!target || target === "_self") && link.origin === location.origin && !link.hasAttribute("download") && !modifiers.metaKey && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.shiftKey;
}
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
	let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
	if ($2add3ce32c6007eb$export$b7d78993b74f766d() && window.event?.type?.startsWith("key") && target.target === "_blank") if ($2add3ce32c6007eb$export$9ac100e40613ea10()) metaKey = true;
	else ctrlKey = true;
	let event = $2add3ce32c6007eb$export$78551043582a6a98() && $2add3ce32c6007eb$export$9ac100e40613ea10() && !$2add3ce32c6007eb$export$7bef049ce92e4224() && true ? new KeyboardEvent("keydown", {
		keyIdentifier: "Enter",
		metaKey,
		ctrlKey,
		altKey,
		shiftKey
	}) : new MouseEvent("click", {
		metaKey,
		ctrlKey,
		altKey,
		shiftKey,
		detail: 1,
		bubbles: true,
		cancelable: true
	});
	$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
	$1969ac565cfec8d0$export$de79e2c695e052f3(target);
	target.dispatchEvent(event);
	$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
function $caaf0dd3060ed57c$var$getSyntheticLink(target, open) {
	if (target instanceof HTMLAnchorElement) open(target);
	else if (target.hasAttribute("data-href")) {
		let link = document.createElement("a");
		link.href = target.getAttribute("data-href");
		if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
		if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
		if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
		if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
		if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
		target.appendChild(link);
		open(link);
		target.removeChild(link);
	}
}
function $caaf0dd3060ed57c$var$openSyntheticLink(target, modifiers) {
	$caaf0dd3060ed57c$var$getSyntheticLink(target, (link) => $caaf0dd3060ed57c$export$95185d699e05d4d7(link, modifiers));
}
function $caaf0dd3060ed57c$export$7e924b3091a3bd18(props) {
	const href = $caaf0dd3060ed57c$export$9a302a45f65d0572().useHref(props?.href ?? "");
	let linkProps = {};
	if (props) {
		for (let key of [
			"href",
			"target",
			"rel",
			"download",
			"ping",
			"referrerPolicy"
		]) if (key in props) linkProps[key] = key === "href" ? href : props[key];
	}
	return linkProps;
}
function $caaf0dd3060ed57c$export$13aea1a3cb5e3f1f(e, router, href, routerOptions) {
	if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && $caaf0dd3060ed57c$export$efa8c9099e530235(e.currentTarget, e) && href) {
		e.preventDefault();
		router.open(e.currentTarget, e, href, routerOptions);
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var $8f5a2122b0992be3$var$currentModality = null;
var $8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
var $8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
var $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
var $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
	Tab: true,
	Escape: true
};
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
	for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
}
/**
* Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus
* styles visible.
*/ function $8f5a2122b0992be3$var$isValidKey(e) {
	return !(e.metaKey || !$2add3ce32c6007eb$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
	$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
	if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
		$8f5a2122b0992be3$var$currentModality = "keyboard";
		$8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
	}
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
	$8f5a2122b0992be3$var$currentModality = "pointer";
	"pointerType" in e && e.pointerType;
	if (e.type === "mousedown" || e.type === "pointerdown") {
		$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
		$8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
	}
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
	if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $b5c62b033c25b96d$export$60278871457622de(e)) {
		$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
		$8f5a2122b0992be3$var$currentModality = "virtual";
	}
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
	let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
	if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerWindow || $23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerDocument || $a92dc41f639950be$export$fda7da73ab5d4c48 || !e.isTrusted) return;
	if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
		$8f5a2122b0992be3$var$currentModality = "virtual";
		$8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
	}
	$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	$8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
	if ($a92dc41f639950be$export$fda7da73ab5d4c48) return;
	$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	$8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
/**
* Setup global event listeners to control when keyboard focus style should be visible.
*/ function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
	if (typeof window === "undefined" || typeof document === "undefined") return;
	const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
	if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
	let focus = windowObject.HTMLElement.prototype.focus;
	Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
		configurable: true,
		writable: true,
		value: function() {
			$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
			focus.apply(this, arguments);
		}
	});
	documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
	windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
	windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
	}
	windowObject.addEventListener("beforeunload", () => {
		$8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
	}, { once: true });
	$8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, { focus });
}
var $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
	const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
	if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
	if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
	Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
		configurable: true,
		writable: true,
		value: $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus
	});
	documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
	windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
	windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
	}
	$8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
	const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
	let loadListener;
	if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
	else {
		loadListener = () => {
			$8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
		};
		documentObject.addEventListener("DOMContentLoaded", loadListener);
	}
	return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
	return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
function $8f5a2122b0992be3$export$630ff653c5ada6a9() {
	return $8f5a2122b0992be3$var$currentModality;
}
function $8f5a2122b0992be3$export$8397ddfc504fdb9a(modality) {
	$8f5a2122b0992be3$var$currentModality = modality;
	$8f5a2122b0992be3$var$triggerChangeHandlers(modality, null);
}
function $8f5a2122b0992be3$export$98e20ec92f614cfe() {
	$8f5a2122b0992be3$var$setupGlobalFocusEvents();
	let [modality, setModality] = (0, import_react.useState)($8f5a2122b0992be3$var$currentModality);
	(0, import_react.useEffect)(() => {
		let handler = () => {
			setModality($8f5a2122b0992be3$var$currentModality);
		};
		$8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
		return () => {
			$8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
		};
	}, []);
	return $c7eafbbe1ea5834e$export$535bd6ca7f90a273() ? null : modality;
}
var $8f5a2122b0992be3$var$nonTextInputTypes = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
/**
* If this is attached to text input component, return if the event is a focus event (Tab/Escape
* keys pressed) so that focus visible style can be properly set.
*/ function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
	let eventTarget = e ? $23f2114a1b82827e$export$e58f029f0fbfdb29(e) : void 0;
	let document1 = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(eventTarget);
	const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
	const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
	const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
	const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
	let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(document1);
	isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
	return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
	$8f5a2122b0992be3$var$setupGlobalFocusEvents();
	(0, import_react.useEffect)(() => {
		if (opts?.enabled === false) return;
		let handler = (modality, e) => {
			if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
			fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
		};
		$8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
		return () => {
			$8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
		};
	}, deps);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/keyboard.mjs
function $bb39c0fc1c19b34c$export$16792effe837dba3(e) {
	if ($2add3ce32c6007eb$export$9ac100e40613ea10()) return e.metaKey;
	return e.ctrlKey;
}
var $bb39c0fc1c19b34c$var$nonTextInputTypes = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function $bb39c0fc1c19b34c$export$c57958e35f31ed73(target) {
	return target instanceof HTMLInputElement && !$bb39c0fc1c19b34c$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var $fe16bffc7a557bf0$var$useEarlyEffect = import_react.useInsertionEffect ?? $c4867b2f328c2698$export$e5c5a5f917a5871c;
function $fe16bffc7a557bf0$export$7f54fc3180508a52(fn) {
	const ref = (0, import_react.useRef)(null);
	$fe16bffc7a557bf0$var$useEarlyEffect(() => {
		ref.current = fn;
	}, [fn]);
	return (0, import_react.useCallback)((...args) => {
		const f = ref.current;
		return f?.(...args);
	}, []);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useEvent.mjs
function $600b3cf69ae46262$export$90fc3a17d93f704c(ref, event, handler, options) {
	let handleEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(handler);
	let isDisabled = handler == null;
	(0, import_react.useEffect)(() => {
		if (isDisabled || !ref.current) return;
		let element = ref.current;
		element.addEventListener(event, handleEvent, options);
		return () => {
			element.removeEventListener(event, handleEvent, options);
		};
	}, [
		ref,
		event,
		options,
		isDisabled
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useLabels.mjs
function $e8ac3c3f5d4bae7f$export$d6875122194c7b44(props, defaultLabel) {
	let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
	id = $390e54f620492c70$export$f680877a34711e37(id);
	if (labelledBy && label) labelledBy = [.../* @__PURE__ */ new Set([id, ...labelledBy.trim().split(/\s+/)])].join(" ");
	else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
	if (!label && !labelledBy && defaultLabel) label = defaultLabel;
	return {
		id,
		"aria-label": label,
		"aria-labelledby": labelledBy
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/utils.mjs
var $d805ff57cab8bee2$var$RTL_SCRIPTS = /* @__PURE__ */ new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]);
var $d805ff57cab8bee2$var$RTL_LANGS = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function $d805ff57cab8bee2$export$702d680b21cbd764(localeString) {
	if (Intl.Locale) {
		let locale = new Intl.Locale(localeString).maximize();
		let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
		if (textInfo) return textInfo.direction === "rtl";
		if (locale.script) return $d805ff57cab8bee2$var$RTL_SCRIPTS.has(locale.script);
	}
	let lang = localeString.split("-")[0];
	return $d805ff57cab8bee2$var$RTL_LANGS.has(lang);
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var $520a025cdb0d710d$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $520a025cdb0d710d$export$f09106e7c6677ec5() {
	let locale = typeof window !== "undefined" && window[$520a025cdb0d710d$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([locale]);
	} catch {
		locale = "en-US";
	}
	return {
		locale,
		direction: $d805ff57cab8bee2$export$702d680b21cbd764(locale) ? "rtl" : "ltr"
	};
}
var $520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
var $520a025cdb0d710d$var$listeners = /* @__PURE__ */ new Set();
function $520a025cdb0d710d$var$updateLocale() {
	$520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
	for (let listener of $520a025cdb0d710d$var$listeners) listener($520a025cdb0d710d$var$currentLocale);
}
function $520a025cdb0d710d$export$188ec29ebc2bdc3a() {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let [defaultLocale, setDefaultLocale] = (0, import_react.useState)($520a025cdb0d710d$var$currentLocale);
	(0, import_react.useEffect)(() => {
		if ($520a025cdb0d710d$var$listeners.size === 0) window.addEventListener("languagechange", $520a025cdb0d710d$var$updateLocale);
		$520a025cdb0d710d$var$listeners.add(setDefaultLocale);
		return () => {
			$520a025cdb0d710d$var$listeners.delete(setDefaultLocale);
			if ($520a025cdb0d710d$var$listeners.size === 0) window.removeEventListener("languagechange", $520a025cdb0d710d$var$updateLocale);
		};
	}, []);
	if (isSSR) return {
		locale: typeof window !== "undefined" && window[$520a025cdb0d710d$var$localeSymbol] || "en-US",
		direction: "ltr"
	};
	return defaultLocale;
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var $2eb8e6d23f3d0cb0$var$I18nContext = /*#__PURE__*/ import_react.createContext(null);
function $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7() {
	let defaultLocale = $520a025cdb0d710d$export$188ec29ebc2bdc3a();
	return (0, import_react.useContext)($2eb8e6d23f3d0cb0$var$I18nContext) || defaultLocale;
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var $cf2482eff2eeeec2$var$cache = /* @__PURE__ */ new WeakMap();
function $cf2482eff2eeeec2$var$getCachedDictionary(strings) {
	let dictionary = $cf2482eff2eeeec2$var$cache.get(strings);
	if (!dictionary) {
		dictionary = new $a747a10fe70a57da$export$c17fa47878dc55b6(strings);
		$cf2482eff2eeeec2$var$cache.set(strings, dictionary);
	}
	return dictionary;
}
function $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName) {
	return packageName && $a747a10fe70a57da$export$c17fa47878dc55b6.getGlobalDictionaryForPackage(packageName) || $cf2482eff2eeeec2$var$getCachedDictionary(strings);
}
function $cf2482eff2eeeec2$export$f12b703ca79dfbb1(strings, packageName) {
	let { locale } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let dictionary = $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName);
	return (0, import_react.useMemo)(() => new $b27c684a33948c64$export$2f817fcdc4b89ae0(locale, dictionary), [locale, dictionary]);
}
//#endregion
//#region node_modules/react-stately/dist/private/utils/useControlledState.mjs
var $3e6197669829fe11$var$useEarlyEffect = typeof document !== "undefined" ? import_react.useInsertionEffect ?? import_react.useLayoutEffect : () => {};
function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
	let [stateValue, setStateValue] = (0, import_react.useState)(value || defaultValue);
	let valueRef = (0, import_react.useRef)(stateValue);
	let isControlledRef = (0, import_react.useRef)(value !== void 0);
	let isControlled = value !== void 0;
	(0, import_react.useEffect)(() => {
		isControlledRef.current;
		isControlledRef.current = isControlled;
	}, [isControlled]);
	let currentValue = isControlled ? value : stateValue;
	$3e6197669829fe11$var$useEarlyEffect(() => {
		valueRef.current = currentValue;
	});
	let [, forceUpdate] = (0, import_react.useReducer)(() => ({}), {});
	return [currentValue, (0, import_react.useCallback)((value, ...args) => {
		let newValue = typeof value === "function" ? value(valueRef.current) : value;
		if (!Object.is(valueRef.current, newValue)) {
			valueRef.current = newValue;
			setStateValue(newValue);
			forceUpdate();
			onChange?.(newValue, ...args);
		}
	}, [onChange])];
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var $6f0c29017aeec335$export$d68d59712b04d9d1 = class {
	constructor(key) {
		this.value = null;
		this.level = 0;
		this.hasChildNodes = false;
		this.rendered = null;
		this.textValue = "";
		this["aria-label"] = void 0;
		this.index = 0;
		this.parentKey = null;
		this.prevKey = null;
		this.nextKey = null;
		this.firstChildKey = null;
		this.lastChildKey = null;
		this.props = {};
		this.colSpan = null;
		this.colIndex = null;
		this.type = this.constructor.type;
		this.key = key;
	}
	get childNodes() {
		throw new Error("childNodes is not supported");
	}
	clone() {
		let node = new this.constructor(this.key);
		node.value = this.value;
		node.level = this.level;
		node.hasChildNodes = this.hasChildNodes;
		node.rendered = this.rendered;
		node.textValue = this.textValue;
		node["aria-label"] = this["aria-label"];
		node.index = this.index;
		node.parentKey = this.parentKey;
		node.prevKey = this.prevKey;
		node.nextKey = this.nextKey;
		node.firstChildKey = this.firstChildKey;
		node.lastChildKey = this.lastChildKey;
		node.props = this.props;
		node.render = this.render;
		node.colSpan = this.colSpan;
		node.colIndex = this.colIndex;
		return node;
	}
	filter(collection, newCollection, filterFn) {
		let clone = this.clone();
		newCollection.addDescendants(clone, collection);
		return clone;
	}
};
var $6f0c29017aeec335$export$b1918e978f1ee46f = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	filter(collection, newCollection, filterFn) {
		let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(collection, newCollection, this.firstChildKey, filterFn);
		let newNode = this.clone();
		newNode.firstChildKey = firstKey;
		newNode.lastChildKey = lastKey;
		return newNode;
	}
};
var $6f0c29017aeec335$export$5ae2504e948afce5 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "header";
	}
};
(class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "loader";
	}
});
var $6f0c29017aeec335$export$fd11f34e1d07f134 = class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
	static {
		this.type = "item";
	}
	filter(collection, newCollection, filterFn) {
		if (filterFn(this.textValue, this)) {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
		return null;
	}
};
var $6f0c29017aeec335$export$437f11dc9b403b78 = class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
	static {
		this.type = "section";
	}
	filter(collection, newCollection, filterFn) {
		let filteredSection = super.filter(collection, newCollection, filterFn);
		if (filteredSection) {
			if (filteredSection.lastChildKey !== null) {
				let lastChild = collection.getItem(filteredSection.lastChildKey);
				if (lastChild && lastChild.type !== "header") return filteredSection;
			}
		}
		return null;
	}
};
var $6f0c29017aeec335$export$408d25a4e12db025 = class {
	get size() {
		return this.itemCount;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	*[Symbol.iterator]() {
		let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
		while (node) {
			yield node;
			node = node.nextKey != null ? this.keyMap.get(node.nextKey) : void 0;
		}
	}
	getChildren(key) {
		let keyMap = this.keyMap;
		return { *[Symbol.iterator]() {
			let parent = keyMap.get(key);
			let node = parent?.firstChildKey != null ? keyMap.get(parent.firstChildKey) : null;
			while (node) {
				yield node;
				node = node.nextKey != null ? keyMap.get(node.nextKey) : void 0;
			}
		} };
	}
	getKeyBefore(key) {
		let node = this.keyMap.get(key);
		if (!node) return null;
		if (node.prevKey != null) {
			node = this.keyMap.get(node.prevKey);
			while (node && node.type !== "item" && node.lastChildKey != null) node = this.keyMap.get(node.lastChildKey);
			return node?.key ?? null;
		}
		return node.parentKey;
	}
	getKeyAfter(key) {
		let node = this.keyMap.get(key);
		if (!node) return null;
		if (node.type !== "item" && node.firstChildKey != null) return node.firstChildKey;
		while (node) {
			if (node.nextKey != null) return node.nextKey;
			if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
			else return null;
		}
		return null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
		while (node?.lastChildKey != null) node = this.keyMap.get(node.lastChildKey);
		return node?.key ?? null;
	}
	getItem(key) {
		return this.keyMap.get(key) ?? null;
	}
	at() {
		throw new Error("Not implemented");
	}
	clone() {
		let Constructor = this.constructor;
		let collection = new Constructor();
		collection.keyMap = new Map(this.keyMap);
		collection.firstKey = this.firstKey;
		collection.lastKey = this.lastKey;
		collection.itemCount = this.itemCount;
		return collection;
	}
	addNode(node) {
		if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
		if (node.type === "item" && this.keyMap.get(node.key) == null) this.itemCount++;
		this.keyMap.set(node.key, node);
	}
	addDescendants(node, oldCollection) {
		this.addNode(node);
		let children = oldCollection.getChildren(node.key);
		for (let child of children) this.addDescendants(child, oldCollection);
	}
	removeNode(key) {
		if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
		let node = this.keyMap.get(key);
		if (node != null && node.type === "item") this.itemCount--;
		this.keyMap.delete(key);
	}
	commit(firstKey, lastKey, isSSR = false) {
		if (this.frozen) throw new Error("Cannot commit a frozen collection");
		this.firstKey = firstKey;
		this.lastKey = lastKey;
		this.frozen = !isSSR;
	}
	filter(filterFn) {
		let newCollection = new this.constructor();
		let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(this, newCollection, this.firstKey, filterFn);
		newCollection?.commit(firstKey, lastKey);
		return newCollection;
	}
	constructor() {
		this.keyMap = /* @__PURE__ */ new Map();
		this.firstKey = null;
		this.lastKey = null;
		this.frozen = false;
		this.itemCount = 0;
	}
};
function $6f0c29017aeec335$var$filterChildren(collection, newCollection, firstChildKey, filterFn) {
	if (firstChildKey == null) return [null, null];
	let firstNode = null;
	let lastNode = null;
	let currentNode = collection.getItem(firstChildKey);
	while (currentNode != null) {
		let newNode = currentNode.filter(collection, newCollection, filterFn);
		if (newNode != null) {
			newNode.nextKey = null;
			if (lastNode) {
				newNode.prevKey = lastNode.key;
				lastNode.nextKey = newNode.key;
			}
			if (firstNode == null) firstNode = newNode;
			newCollection.addNode(newNode);
			lastNode = newNode;
		}
		currentNode = currentNode.nextKey != null ? collection.getItem(currentNode.nextKey) : null;
	}
	if (lastNode && lastNode.type === "separator") {
		let prevKey = lastNode.prevKey;
		newCollection.removeNode(lastNode.key);
		if (prevKey != null) {
			lastNode = newCollection.getItem(prevKey);
			lastNode.nextKey = null;
		} else lastNode = null;
	}
	return [firstNode?.key ?? null, lastNode?.key ?? null];
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/Document.mjs
var $96ead35620b8fd36$export$410b0c854570d131 = class {
	constructor(ownerDocument) {
		this._firstChild = null;
		this._lastChild = null;
		this._previousSibling = null;
		this._nextSibling = null;
		this._parentNode = null;
		this._minInvalidChildIndex = null;
		this.ownerDocument = ownerDocument;
	}
	*[Symbol.iterator]() {
		let node = this.firstChild;
		while (node) {
			yield node;
			node = node.nextSibling;
		}
	}
	get firstChild() {
		return this._firstChild;
	}
	set firstChild(firstChild) {
		this._firstChild = firstChild;
		this.ownerDocument.markDirty(this);
	}
	get lastChild() {
		return this._lastChild;
	}
	set lastChild(lastChild) {
		this._lastChild = lastChild;
		this.ownerDocument.markDirty(this);
	}
	get previousSibling() {
		return this._previousSibling;
	}
	set previousSibling(previousSibling) {
		this._previousSibling = previousSibling;
		this.ownerDocument.markDirty(this);
	}
	get nextSibling() {
		return this._nextSibling;
	}
	set nextSibling(nextSibling) {
		this._nextSibling = nextSibling;
		this.ownerDocument.markDirty(this);
	}
	get parentNode() {
		return this._parentNode;
	}
	set parentNode(parentNode) {
		this._parentNode = parentNode;
		this.ownerDocument.markDirty(this);
	}
	get isConnected() {
		return this.parentNode?.isConnected || false;
	}
	invalidateChildIndices(child) {
		if (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || child.index < this._minInvalidChildIndex.index) {
			this._minInvalidChildIndex = child;
			this.ownerDocument.markDirty(this);
		}
	}
	updateChildIndices() {
		let node = this._minInvalidChildIndex;
		while (node) {
			node.index = node.previousSibling ? node.previousSibling.index + 1 : 0;
			node = node.nextSibling;
		}
		this._minInvalidChildIndex = null;
	}
	appendChild(child) {
		if (child.parentNode) child.parentNode.removeChild(child);
		if (this.firstChild == null) this.firstChild = child;
		if (this.lastChild) {
			this.lastChild.nextSibling = child;
			child.index = this.lastChild.index + 1;
			child.previousSibling = this.lastChild;
		} else {
			child.previousSibling = null;
			child.index = 0;
		}
		child.parentNode = this;
		child.nextSibling = null;
		this.lastChild = child;
		this.ownerDocument.markDirty(this);
		if (this.isConnected) this.ownerDocument.queueUpdate();
	}
	insertBefore(newNode, referenceNode) {
		if (referenceNode == null) return this.appendChild(newNode);
		if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
		newNode.nextSibling = referenceNode;
		newNode.previousSibling = referenceNode.previousSibling;
		newNode.index = referenceNode.index - 1;
		if (this.firstChild === referenceNode) this.firstChild = newNode;
		else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
		referenceNode.previousSibling = newNode;
		newNode.parentNode = referenceNode.parentNode;
		this.invalidateChildIndices(newNode);
		if (this.isConnected) this.ownerDocument.queueUpdate();
	}
	removeChild(child) {
		if (child.parentNode !== this) return;
		if (this._minInvalidChildIndex === child) this._minInvalidChildIndex = null;
		if (child.nextSibling) {
			this.invalidateChildIndices(child.nextSibling);
			child.nextSibling.previousSibling = child.previousSibling;
		}
		if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
		if (this.firstChild === child) this.firstChild = child.nextSibling;
		if (this.lastChild === child) this.lastChild = child.previousSibling;
		child.parentNode = null;
		child.nextSibling = null;
		child.previousSibling = null;
		child.index = 0;
		this.ownerDocument.markDirty(child);
		if (this.isConnected) this.ownerDocument.queueUpdate();
	}
	addEventListener() {}
	removeEventListener() {}
	get previousVisibleSibling() {
		let node = this.previousSibling;
		while (node && node.isHidden) node = node.previousSibling;
		return node;
	}
	get nextVisibleSibling() {
		let node = this.nextSibling;
		while (node && node.isHidden) node = node.nextSibling;
		return node;
	}
	get firstVisibleChild() {
		let node = this.firstChild;
		while (node && node.isHidden) node = node.nextSibling;
		return node;
	}
	get lastVisibleChild() {
		let node = this.lastChild;
		while (node && node.isHidden) node = node.previousSibling;
		return node;
	}
};
var $96ead35620b8fd36$export$dc064fe9e59310fd = class $96ead35620b8fd36$export$dc064fe9e59310fd extends $96ead35620b8fd36$export$410b0c854570d131 {
	constructor(type, ownerDocument) {
		super(ownerDocument), this.nodeType = 8, this.isMutated = true, this._index = 0, this.isHidden = false;
		this.node = null;
	}
	get index() {
		return this._index;
	}
	set index(index) {
		this._index = index;
		this.ownerDocument.markDirty(this);
	}
	get level() {
		if (this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) return this.parentNode.level + (this.parentNode.node?.type === "item" ? 1 : 0);
		return 0;
	}
	/**
	* Lazily gets a mutable instance of a Node. If the node has already
	* been cloned during this update cycle, it just returns the existing one.
	*/ getMutableNode() {
		if (this.node == null) return null;
		if (!this.isMutated) {
			this.node = this.node.clone();
			this.isMutated = true;
		}
		this.ownerDocument.markDirty(this);
		return this.node;
	}
	updateNode() {
		let nextSibling = this.nextVisibleSibling;
		let node = this.getMutableNode();
		if (node == null) return;
		node.index = this.index;
		node.level = this.level;
		node.parentKey = this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd ? this.parentNode.node?.key ?? null : null;
		node.prevKey = this.previousVisibleSibling?.node?.key ?? null;
		node.nextKey = nextSibling?.node?.key ?? null;
		node.hasChildNodes = !!this.firstChild;
		node.firstChildKey = this.firstVisibleChild?.node?.key ?? null;
		node.lastChildKey = this.lastVisibleChild?.node?.key ?? null;
		if ((node.colSpan != null || node.colIndex != null) && nextSibling) {
			let nextColIndex = (node.colIndex ?? node.index) + (node.colSpan ?? 1);
			if (nextSibling.node != null && nextColIndex !== nextSibling.node.colIndex) {
				let siblingNode = nextSibling.getMutableNode();
				siblingNode.colIndex = nextColIndex;
			}
		}
	}
	setProps(obj, ref, CollectionNodeClass, rendered, render) {
		let node;
		let { value: value1, textValue, id, ...props } = obj;
		if (this.node == null) {
			node = new CollectionNodeClass(id ?? `react-aria-${++this.ownerDocument.nodeId}`);
			this.node = node;
		} else node = this.getMutableNode();
		props.ref = ref;
		node.props = props;
		node.rendered = rendered;
		node.render = render;
		node.value = value1;
		if (obj["aria-label"]) node["aria-label"] = obj["aria-label"];
		node.textValue = textValue || (typeof props.children === "string" ? props.children : "") || obj["aria-label"] || "";
		if (id != null && id !== node.key) throw new Error("Cannot change the id of an item");
		if (props.colSpan != null) node.colSpan = props.colSpan;
		if (this.isConnected) this.ownerDocument.queueUpdate();
	}
	get style() {
		let element = this;
		return {
			get display() {
				return element.isHidden ? "none" : "";
			},
			set display(value) {
				let isHidden = value === "none";
				if (element.isHidden !== isHidden) {
					if (element.parentNode?.firstVisibleChild === element || element.parentNode?.lastVisibleChild === element) element.ownerDocument.markDirty(element.parentNode);
					let prev = element.previousVisibleSibling;
					let next = element.nextVisibleSibling;
					if (prev) element.ownerDocument.markDirty(prev);
					if (next) element.ownerDocument.markDirty(next);
					element.isHidden = isHidden;
					element.ownerDocument.markDirty(element);
				}
			}
		};
	}
	hasAttribute() {}
	setAttribute() {}
	setAttributeNS() {}
	removeAttribute() {}
};
var $96ead35620b8fd36$export$b34a105447964f9f = class extends $96ead35620b8fd36$export$410b0c854570d131 {
	constructor(collection) {
		super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = false, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = false, this.inSubscription = false;
		this.collection = collection;
		this.nextCollection = collection;
	}
	get isConnected() {
		return true;
	}
	createElement(type) {
		return new $96ead35620b8fd36$export$dc064fe9e59310fd(type, this);
	}
	getMutableCollection() {
		if (!this.nextCollection) this.nextCollection = this.collection.clone();
		return this.nextCollection;
	}
	markDirty(node) {
		this.dirtyNodes.add(node);
	}
	addNode(element) {
		if (element.isHidden || element.node == null) return;
		let collection = this.getMutableCollection();
		if (!collection.getItem(element.node.key)) for (let child of element) this.addNode(child);
		collection.addNode(element.node);
	}
	removeNode(node) {
		for (let child of node) this.removeNode(child);
		if (node.node) this.getMutableCollection().removeNode(node.node.key);
	}
	/** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
		if (this.inSubscription) return this.collection;
		this.queuedRender = false;
		this.updateCollection();
		return this.collection;
	}
	updateCollection() {
		for (let element of this.dirtyNodes) if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd && (!element.isConnected || element.isHidden)) this.removeNode(element);
		else element.updateChildIndices();
		for (let element of this.dirtyNodes) if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) {
			if (element.isConnected && !element.isHidden) {
				element.updateNode();
				this.addNode(element);
			}
			if (element.node) this.dirtyNodes.delete(element);
			element.isMutated = false;
		} else this.dirtyNodes.delete(element);
		if (this.nextCollection) {
			this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR);
			if (!this.isSSR) {
				this.collection = this.nextCollection;
				this.nextCollection = null;
			}
		}
	}
	queueUpdate() {
		if (this.dirtyNodes.size === 0 || this.queuedRender) return;
		this.queuedRender = true;
		this.inSubscription = true;
		if (!this.isSSR) this.collection = this.collection.clone();
		for (let fn of this.subscriptions) fn();
		this.inSubscription = false;
	}
	subscribe(fn) {
		this.subscriptions.add(fn);
		return () => this.subscriptions.delete(fn);
	}
	resetAfterSSR() {
		if (this.isSSR) {
			this.isSSR = false;
			this.firstChild = null;
			this.lastChild = null;
			this.nodeId = 0;
		}
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/collections/useCachedChildren.mjs
function $a80bd3e9349588e7$export$727c8fc270210f13(props) {
	let { children, items, idScope, addIdAndValue, dependencies = [] } = props;
	let childrenString = (0, import_react.useMemo)(() => void 0, [children]);
	let cache = (0, import_react.useMemo)(() => /* @__PURE__ */ new WeakMap(), [...dependencies, childrenString]);
	return (0, import_react.useMemo)(() => {
		if (items && typeof children === "function") {
			let res = [];
			for (let item of items) {
				let cacheKey = $a80bd3e9349588e7$var$isWeakKey(item) ? item : null;
				let rendered = cacheKey ? cache.get(cacheKey) : null;
				if (!rendered) {
					rendered = children(item);
					let id = rendered.props.id ?? item?.key ?? item?.id;
					if (idScope != null && rendered.props.id == null && id != null) id = idScope + ":" + id;
					let key = id ?? res.length;
					rendered = (0, import_react.cloneElement)(rendered, addIdAndValue ? {
						key,
						id,
						value: item
					} : { key });
					if (cacheKey) cache.set(cacheKey, rendered);
				}
				res.push(rendered);
			}
			return res;
		} else if (typeof children !== "function") return children;
	}, [
		children,
		items,
		cache,
		idScope,
		addIdAndValue
	]);
}
function $a80bd3e9349588e7$var$isWeakKey(value) {
	switch (typeof value) {
		case "object": return value != null;
		case "function":
		case "symbol": return true;
		default: return false;
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
var $081cb5757e08788e$var$transitionsByElement = /* @__PURE__ */ new Map();
var $081cb5757e08788e$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $081cb5757e08788e$var$setupGlobalEvents() {
	if (typeof window === "undefined") return;
	function isTransitionEvent(event) {
		return "propertyName" in event;
	}
	let onTransitionStart = (e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (!isTransitionEvent(e) || !eventTarget) return;
		let transitions = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
		if (!transitions) {
			transitions = /* @__PURE__ */ new Set();
			$081cb5757e08788e$var$transitionsByElement.set(eventTarget, transitions);
			eventTarget.addEventListener("transitioncancel", onTransitionEnd, { once: true });
		}
		transitions.add(e.propertyName);
	};
	let onTransitionEnd = (e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (!isTransitionEvent(e) || !eventTarget) return;
		let properties = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
		if (!properties) return;
		properties.delete(e.propertyName);
		if (properties.size === 0) {
			eventTarget.removeEventListener("transitioncancel", onTransitionEnd);
			$081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
		}
		if ($081cb5757e08788e$var$transitionsByElement.size === 0) {
			for (let cb of $081cb5757e08788e$var$transitionCallbacks) cb();
			$081cb5757e08788e$var$transitionCallbacks.clear();
		}
	};
	document.body.addEventListener("transitionrun", onTransitionStart);
	document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") if (document.readyState !== "loading") $081cb5757e08788e$var$setupGlobalEvents();
else document.addEventListener("DOMContentLoaded", $081cb5757e08788e$var$setupGlobalEvents);
/**
* Cleans up any elements that are no longer in the document.
* This is necessary because we can't rely on transitionend events to fire
* for elements that are removed from the document while transitioning.
*/ function $081cb5757e08788e$var$cleanupDetachedElements() {
	for (const [eventTarget] of $081cb5757e08788e$var$transitionsByElement) if ("isConnected" in eventTarget && !eventTarget.isConnected) $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
}
function $081cb5757e08788e$export$24490316f764c430(fn) {
	requestAnimationFrame(() => {
		$081cb5757e08788e$var$cleanupDetachedElements();
		if ($081cb5757e08788e$var$transitionsByElement.size === 0) fn();
		else $081cb5757e08788e$var$transitionCallbacks.add(fn);
	});
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function $f192c2f16961cbe0$export$80f3e147d781571c(element) {
	if (!element.isConnected) return;
	const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(element);
	if ($8f5a2122b0992be3$export$630ff653c5ada6a9() === "virtual") {
		let lastFocusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
		$081cb5757e08788e$export$24490316f764c430(() => {
			const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
		});
	} else $1969ac565cfec8d0$export$de79e2c695e052f3(element);
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocus.mjs
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
	let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
	const onBlur = (0, import_react.useCallback)((e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === e.currentTarget) {
			if (onBlurProp) onBlurProp(e);
			if (onFocusChange) onFocusChange(false);
			return true;
		}
	}, [onBlurProp, onFocusChange]);
	const onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
	const onFocus = (0, import_react.useCallback)((e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
		const activeElement = ownerDocument ? $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument) : $23f2114a1b82827e$export$cd4e5573fbe2b576();
		if (eventTarget === e.currentTarget && eventTarget === activeElement) {
			if (onFocusProp) onFocusProp(e);
			if (onFocusChange) onFocusChange(true);
			onSyntheticFocus(e);
		}
	}, [
		onFocusChange,
		onFocusProp,
		onSyntheticFocus
	]);
	return { focusProps: {
		onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
		onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
function $8dba16319206abb6$export$48d1ea6320830260(handler) {
	if (!handler) return void 0;
	let shouldStopPropagation = true;
	return (e) => {
		handler({
			...e,
			preventDefault() {
				e.preventDefault();
			},
			isDefaultPrevented() {
				return e.isDefaultPrevented();
			},
			stopPropagation() {
				shouldStopPropagation = true;
			},
			continuePropagation() {
				shouldStopPropagation = false;
				if (typeof e.continuePropagation === "function") e.continuePropagation();
			},
			isPropagationStopped() {
				return shouldStopPropagation;
			}
		});
		if (shouldStopPropagation) e.stopPropagation();
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
function $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props) {
	return { keyboardProps: props.isDisabled ? {} : {
		onKeyDown: $8dba16319206abb6$export$48d1ea6320830260(props.onKeyDown),
		onKeyUp: $8dba16319206abb6$export$48d1ea6320830260(props.onKeyUp)
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useSyncRef.mjs
function $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (context && context.ref && ref) {
			context.ref.current = ref.current;
			return () => {
				if (context.ref) context.ref.current = null;
			};
		}
	});
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var $d1116acdf220c2da$export$f9762fab77588ecb = /*#__PURE__*/ import_react.createContext(null);
function $d1116acdf220c2da$var$useFocusableContext(ref) {
	let context = (0, import_react.useContext)($d1116acdf220c2da$export$f9762fab77588ecb) || {};
	$b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref);
	let { ref: _, ...otherProps } = context;
	return otherProps;
}
function $d1116acdf220c2da$export$4c014de7c8940b4c(props, domRef) {
	let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6(props);
	let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props);
	let interactions = $bbaa08b3cd72f041$export$9d1611c77c2fe928(focusProps, keyboardProps);
	let domProps = $d1116acdf220c2da$var$useFocusableContext(domRef);
	let interactionProps = props.isDisabled ? {} : domProps;
	let autoFocusRef = (0, import_react.useRef)(props.autoFocus);
	(0, import_react.useEffect)(() => {
		if (autoFocusRef.current && domRef.current) $f192c2f16961cbe0$export$80f3e147d781571c(domRef.current);
		autoFocusRef.current = false;
	}, [domRef]);
	let tabIndex = props.excludeFromTabOrder ? -1 : 0;
	if (props.isDisabled) tabIndex = void 0;
	return { focusableProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928({
		...interactions,
		tabIndex
	}, interactionProps) };
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/Hidden.mjs
if (typeof HTMLTemplateElement !== "undefined") {
	Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
		configurable: true,
		enumerable: true,
		get: function() {
			return this.content.firstChild;
		}
	});
	Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
		configurable: true,
		enumerable: true,
		value: function(node) {
			return this.content.appendChild(node);
		}
	});
	Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
		configurable: true,
		enumerable: true,
		value: function(node) {
			return this.content.removeChild(node);
		}
	});
	Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
		configurable: true,
		enumerable: true,
		value: function(node, child) {
			return this.content.insertBefore(node, child);
		}
	});
}
var $d7f64c32b702fe2c$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, import_react.createContext)(false);
function $d7f64c32b702fe2c$export$8dc98ba7eadeaa56(props) {
	if ((0, import_react.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c)) return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, props.children);
	let children = /*#__PURE__*/ import_react.createElement($d7f64c32b702fe2c$export$94b6d0abf7d33e8c.Provider, { value: true }, props.children);
	return /*#__PURE__*/ import_react.createElement("template", null, children);
}
function $d7f64c32b702fe2c$export$86427a43e3e48ebb(fn) {
	let Wrapper = (props, ref) => {
		if ((0, import_react.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c)) return null;
		return fn(props, ref);
	};
	Wrapper.displayName = fn.displayName || fn.name;
	return (0, import_react.forwardRef)(Wrapper);
}
function $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59() {
	return (0, import_react.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs
var $42ceafc619f9c3ba$var$ShallowRenderContext = /*#__PURE__*/ (0, import_react.createContext)(false);
var $42ceafc619f9c3ba$var$CollectionDocumentContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $42ceafc619f9c3ba$export$bf788dd355e3a401(props) {
	if ((0, import_react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext)) return props.content;
	let { collection, document } = $42ceafc619f9c3ba$var$useCollectionDocument(props.createCollection);
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement($d7f64c32b702fe2c$export$8dc98ba7eadeaa56, null, /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, { value: document }, props.content)), /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$CollectionInner, {
		render: props.children,
		collection
	}));
}
function $42ceafc619f9c3ba$var$CollectionInner({ collection, render }) {
	return render(collection);
}
function $42ceafc619f9c3ba$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let isSSRRef = (0, import_react.useRef)(isSSR);
	isSSRRef.current = isSSR;
	return (0, import_shim.useSyncExternalStore)(subscribe, (0, import_react.useCallback)(() => {
		return isSSRRef.current ? getServerSnapshot() : getSnapshot();
	}, [getSnapshot, getServerSnapshot]));
}
var $42ceafc619f9c3ba$var$useSyncExternalStore = typeof import_react.useSyncExternalStore === "function" ? import_react.useSyncExternalStore : $42ceafc619f9c3ba$var$useSyncExternalStoreFallback;
function $42ceafc619f9c3ba$var$useCollectionDocument(createCollection) {
	let [document] = (0, import_react.useState)(() => new $96ead35620b8fd36$export$b34a105447964f9f(createCollection?.() || new $6f0c29017aeec335$export$408d25a4e12db025()));
	return {
		collection: $42ceafc619f9c3ba$var$useSyncExternalStore((0, import_react.useCallback)((fn) => document.subscribe(fn), [document]), (0, import_react.useCallback)(() => {
			let collection = document.getCollection();
			if (document.isSSR) document.resetAfterSSR();
			return collection;
		}, [document]), (0, import_react.useCallback)(() => {
			document.isSSR = true;
			return document.getCollection();
		}, [document])),
		document
	};
}
var $42ceafc619f9c3ba$var$SSRContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $42ceafc619f9c3ba$var$createCollectionNodeClass(type) {
	let NodeClass = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = type;
		}
	};
	return NodeClass;
}
function $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
	if (typeof CollectionNodeClass === "string") CollectionNodeClass = $42ceafc619f9c3ba$var$createCollectionNodeClass(CollectionNodeClass);
	let itemRef = (0, import_react.useCallback)((element) => {
		element?.setProps(props, ref, CollectionNodeClass, rendered, render);
	}, [
		props,
		ref,
		rendered,
		render,
		CollectionNodeClass
	]);
	let parentNode = (0, import_react.useContext)($42ceafc619f9c3ba$var$SSRContext);
	if (parentNode) {
		let element = parentNode.ownerDocument.nodesByProps.get(props);
		if (!element) {
			element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
			element.setProps(props, ref, CollectionNodeClass, rendered, render);
			parentNode.appendChild(element);
			parentNode.ownerDocument.updateCollection();
			parentNode.ownerDocument.nodesByProps.set(props, element);
		}
		return children ? /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$SSRContext.Provider, { value: element }, children) : null;
	}
	return /*#__PURE__*/ import_react.createElement(CollectionNodeClass.type, { ref: itemRef }, children);
}
function $42ceafc619f9c3ba$export$18af5c7a9e9b3664(CollectionNodeClass, render) {
	let Component = ({ node }) => render(node.props, node.props.ref, node);
	let Result = (0, import_react.forwardRef)((props, ref) => {
		let focusableProps = (0, import_react.useContext)($d1116acdf220c2da$export$f9762fab77588ecb);
		if (!(0, import_react.useContext)($42ceafc619f9c3ba$var$ShallowRenderContext)) {
			if (render.length >= 3) throw new Error(render.name + " cannot be rendered outside a collection.");
			return render(props, ref);
		}
		return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, "children" in props ? props.children : null, null, (node) => /*#__PURE__*/ import_react.createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, { value: focusableProps }, /*#__PURE__*/ import_react.createElement(Component, { node })));
	});
	Result.displayName = render.name;
	return Result;
}
function $42ceafc619f9c3ba$export$e953bb1cd0f19726(CollectionNodeClass, render, useChildren = $42ceafc619f9c3ba$var$useCollectionChildren) {
	let Component = ({ node }) => render(node.props, node.props.ref, node);
	let Result = (0, import_react.forwardRef)((props, ref) => {
		return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, null, useChildren(props), (node) => /*#__PURE__*/ import_react.createElement(Component, { node })) ?? /*#__PURE__*/ import_react.createElement(import_react.Fragment, null);
	});
	Result.displayName = render.name;
	return Result;
}
function $42ceafc619f9c3ba$var$useCollectionChildren(options) {
	return $a80bd3e9349588e7$export$727c8fc270210f13({
		...options,
		addIdAndValue: true
	});
}
var $42ceafc619f9c3ba$var$CollectionContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $42ceafc619f9c3ba$export$fb8073518f34e6ec(props) {
	let ctx = (0, import_react.useContext)($42ceafc619f9c3ba$var$CollectionContext);
	let dependencies = (ctx?.dependencies || []).concat(props.dependencies);
	let idScope = props.idScope ?? ctx?.idScope;
	let children = $42ceafc619f9c3ba$var$useCollectionChildren({
		...props,
		idScope,
		dependencies
	});
	if ((0, import_react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext)) children = /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$CollectionRoot, null, children);
	ctx = (0, import_react.useMemo)(() => ({
		dependencies,
		idScope
	}), [idScope, ...dependencies]);
	return /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$CollectionContext.Provider, { value: ctx }, children);
}
function $42ceafc619f9c3ba$var$CollectionRoot({ children }) {
	let doc = (0, import_react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext);
	let wrappedChildren = (0, import_react.useMemo)(() => /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, { value: null }, /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$ShallowRenderContext.Provider, { value: true }, children)), [children]);
	return $c7eafbbe1ea5834e$export$535bd6ca7f90a273() ? /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$SSRContext.Provider, { value: doc }, wrappedChildren) : /*#__PURE__*/ (0, import_react_dom.createPortal)(wrappedChildren, doc);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var $8e9d2fae0ecb9001$var$DOMPropNames = /* @__PURE__ */ new Set(["id"]);
var $8e9d2fae0ecb9001$var$labelablePropNames = /* @__PURE__ */ new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]);
var $8e9d2fae0ecb9001$var$linkPropNames = /* @__PURE__ */ new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]);
var $8e9d2fae0ecb9001$var$globalAttrs = /* @__PURE__ */ new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate"
]);
var $8e9d2fae0ecb9001$var$globalEvents = /* @__PURE__ */ new Set([
	"onClick",
	"onAuxClick",
	"onContextMenu",
	"onDoubleClick",
	"onMouseDown",
	"onMouseEnter",
	"onMouseLeave",
	"onMouseMove",
	"onMouseOut",
	"onMouseOver",
	"onMouseUp",
	"onTouchCancel",
	"onTouchEnd",
	"onTouchMove",
	"onTouchStart",
	"onPointerDown",
	"onPointerMove",
	"onPointerUp",
	"onPointerCancel",
	"onPointerEnter",
	"onPointerLeave",
	"onPointerOver",
	"onPointerOut",
	"onGotPointerCapture",
	"onLostPointerCapture",
	"onScroll",
	"onWheel",
	"onAnimationStart",
	"onAnimationEnd",
	"onAnimationIteration",
	"onTransitionCancel",
	"onTransitionEnd",
	"onTransitionRun",
	"onTransitionStart"
]);
var $8e9d2fae0ecb9001$var$propRe = /^(data-.*)$/;
function $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, opts = {}) {
	let { labelable, isLink, global, events = global, propNames } = opts;
	let filteredProps = {};
	for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($8e9d2fae0ecb9001$var$DOMPropNames.has(prop) || labelable && $8e9d2fae0ecb9001$var$labelablePropNames.has(prop) || isLink && $8e9d2fae0ecb9001$var$linkPropNames.has(prop) || global && $8e9d2fae0ecb9001$var$globalAttrs.has(prop) || events && ($8e9d2fae0ecb9001$var$globalEvents.has(prop) || prop.endsWith("Capture") && $8e9d2fae0ecb9001$var$globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || $8e9d2fae0ecb9001$var$propRe.test(prop))) filteredProps[prop] = props[prop];
	return filteredProps;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/textSelection.mjs
var $cbf007e418543821$var$state = "default";
var $cbf007e418543821$var$savedUserSelect = "";
var $cbf007e418543821$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $cbf007e418543821$export$16a4697467175487(target) {
	if ($2add3ce32c6007eb$export$fedb369cb70207f1()) {
		if ($cbf007e418543821$var$state === "default") {
			const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
			$cbf007e418543821$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
			documentObject.documentElement.style.webkitUserSelect = "none";
		}
		$cbf007e418543821$var$state = "disabled";
	} else if (target instanceof HTMLElement || target instanceof SVGElement) {
		let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
		$cbf007e418543821$var$modifiedElementMap.set(target, target.style[property]);
		target.style[property] = "none";
	}
}
function $cbf007e418543821$export$b0d6fa1ab32e3295(target) {
	if ($2add3ce32c6007eb$export$fedb369cb70207f1()) {
		if ($cbf007e418543821$var$state !== "disabled") return;
		$cbf007e418543821$var$state = "restoring";
		setTimeout(() => {
			$081cb5757e08788e$export$24490316f764c430(() => {
				if ($cbf007e418543821$var$state === "restoring") {
					const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
					if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $cbf007e418543821$var$savedUserSelect || "";
					$cbf007e418543821$var$savedUserSelect = "";
					$cbf007e418543821$var$state = "default";
				}
			});
		}, 300);
	} else if (target instanceof HTMLElement || target instanceof SVGElement) {
		if (target && $cbf007e418543821$var$modifiedElementMap.has(target)) {
			let targetOldUserSelect = $cbf007e418543821$var$modifiedElementMap.get(target);
			let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
			if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
			if (target.getAttribute("style") === "") target.removeAttribute("style");
			$cbf007e418543821$var$modifiedElementMap.delete(target);
		}
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getNonce.mjs
function $2b2d34ff061957fb$var$getWebpackNonce(doc) {
	return (doc?.defaultView)?.__webpack_nonce__ || globalThis["__webpack_nonce__"] || void 0;
}
var $2b2d34ff061957fb$var$nonceCache = /* @__PURE__ */ new WeakMap();
function $2b2d34ff061957fb$export$2b85b721e524d74b(doc) {
	let d = doc ?? (typeof document !== "undefined" ? document : void 0);
	if (!d) return $2b2d34ff061957fb$var$getWebpackNonce(d);
	if ($2b2d34ff061957fb$var$nonceCache.has(d)) return $2b2d34ff061957fb$var$nonceCache.get(d);
	let meta = d.querySelector("meta[property=\"csp-nonce\"]");
	let nonce = meta && meta instanceof $d447af545b77c9f1$export$f21a1ffae260145a(meta).HTMLMetaElement && (meta.nonce || meta.content) || $2b2d34ff061957fb$var$getWebpackNonce(d) || void 0;
	if (nonce !== void 0) $2b2d34ff061957fb$var$nonceCache.set(d, nonce);
	return nonce;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/context.mjs
var $24f9a20f226ad820$export$5165eccb35aaadb5 = import_react.createContext({ register: () => {} });
$24f9a20f226ad820$export$5165eccb35aaadb5.displayName = "PressResponderContext";
//#endregion
//#region node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
	let globalListeners = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	let addGlobalListener = (0, import_react.useCallback)((eventTarget, type, listener, options) => {
		let fn = options?.once ? (...args) => {
			globalListeners.current.delete(listener);
			listener(...args);
		} : listener;
		globalListeners.current.set(listener, {
			type,
			eventTarget,
			fn,
			options
		});
		eventTarget.addEventListener(type, fn, options);
	}, []);
	let removeGlobalListener = (0, import_react.useCallback)((eventTarget, type, listener, options) => {
		let fn = globalListeners.current.get(listener)?.fn || listener;
		eventTarget.removeEventListener(type, fn, options);
		globalListeners.current.delete(listener);
	}, []);
	let removeAllGlobalListeners = (0, import_react.useCallback)(() => {
		globalListeners.current.forEach((value, key) => {
			removeGlobalListener(value.eventTarget, value.type, key, value.options);
		});
	}, [removeGlobalListener]);
	(0, import_react.useEffect)(() => {
		return removeAllGlobalListeners;
	}, [removeAllGlobalListeners]);
	return {
		addGlobalListener,
		removeGlobalListener,
		removeAllGlobalListeners
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/usePress.mjs
function $d27d541f9569d26d$var$usePressResponderContext(props) {
	let context = (0, import_react.useContext)($24f9a20f226ad820$export$5165eccb35aaadb5);
	if (context) {
		let { register, ref, ...contextProps } = context;
		props = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
		register();
	}
	$b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, props.ref);
	return props;
}
var $d27d541f9569d26d$var$PressEvent = class {
	#shouldStopPropagation;
	constructor(type, pointerType, originalEvent, state) {
		this.#shouldStopPropagation = true;
		const rect = (state?.target ?? originalEvent.currentTarget)?.getBoundingClientRect();
		let x, y = 0;
		let clientX, clientY = null;
		if (originalEvent.clientX != null && originalEvent.clientY != null) {
			clientX = originalEvent.clientX;
			clientY = originalEvent.clientY;
		}
		if (rect) if (clientX != null && clientY != null) {
			x = clientX - rect.left;
			y = clientY - rect.top;
		} else {
			x = rect.width / 2;
			y = rect.height / 2;
		}
		this.type = type;
		this.pointerType = pointerType;
		this.target = originalEvent.currentTarget;
		this.shiftKey = originalEvent.shiftKey;
		this.metaKey = originalEvent.metaKey;
		this.ctrlKey = originalEvent.ctrlKey;
		this.altKey = originalEvent.altKey;
		this.x = x;
		this.y = y;
		this.key = originalEvent.key;
	}
	continuePropagation() {
		this.#shouldStopPropagation = false;
	}
	get shouldStopPropagation() {
		return this.#shouldStopPropagation;
	}
};
var $d27d541f9569d26d$var$LINK_CLICKED = Symbol("linkClicked");
var $d27d541f9569d26d$var$STYLE_ID = "react-aria-pressable-style";
var $d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
function $d27d541f9569d26d$export$45712eceda6fad21(props) {
	let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $d27d541f9569d26d$var$usePressResponderContext(props);
	let [isPressed, setPressed] = (0, import_react.useState)(false);
	let ref = (0, import_react.useRef)({
		isPressed: false,
		ignoreEmulatedMouseEvents: false,
		didFirePressStart: false,
		isTriggeringEvent: false,
		activePointerId: null,
		target: null,
		isOverTarget: false,
		pointerType: null,
		disposables: []
	});
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let triggerPressStart = (0, import_react.useCallback)((originalEvent, pointerType) => {
		let state = ref.current;
		if (isDisabled || state.didFirePressStart) return false;
		let shouldStopPropagation = true;
		state.isTriggeringEvent = true;
		if (onPressStart) {
			let event = new $d27d541f9569d26d$var$PressEvent("pressstart", pointerType, originalEvent);
			onPressStart(event);
			shouldStopPropagation = event.shouldStopPropagation;
		}
		if (onPressChange) onPressChange(true);
		state.isTriggeringEvent = false;
		state.didFirePressStart = true;
		setPressed(true);
		return shouldStopPropagation;
	}, [
		isDisabled,
		onPressStart,
		onPressChange
	]);
	let triggerPressEnd = (0, import_react.useCallback)((originalEvent, pointerType, wasPressed = true) => {
		let state = ref.current;
		if (!state.didFirePressStart) return false;
		state.didFirePressStart = false;
		state.isTriggeringEvent = true;
		let shouldStopPropagation = true;
		if (onPressEnd) {
			let event = new $d27d541f9569d26d$var$PressEvent("pressend", pointerType, originalEvent);
			onPressEnd(event);
			shouldStopPropagation = event.shouldStopPropagation;
		}
		if (onPressChange) onPressChange(false);
		setPressed(false);
		if (onPress && wasPressed && !isDisabled) {
			let event = new $d27d541f9569d26d$var$PressEvent("press", pointerType, originalEvent);
			onPress(event);
			shouldStopPropagation &&= event.shouldStopPropagation;
		}
		state.isTriggeringEvent = false;
		return shouldStopPropagation;
	}, [
		isDisabled,
		onPressEnd,
		onPressChange,
		onPress
	]);
	let triggerPressEndEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(triggerPressEnd);
	let triggerPressUpEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52((0, import_react.useCallback)((originalEvent, pointerType) => {
		let state = ref.current;
		if (isDisabled) return false;
		if (onPressUp) {
			state.isTriggeringEvent = true;
			let event = new $d27d541f9569d26d$var$PressEvent("pressup", pointerType, originalEvent);
			onPressUp(event);
			state.isTriggeringEvent = false;
			return event.shouldStopPropagation;
		}
		return true;
	}, [isDisabled, onPressUp]));
	let cancel = (0, import_react.useCallback)((e) => {
		let state = ref.current;
		if (state.isPressed && state.target) {
			if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
			state.isPressed = false;
			state.isOverTarget = false;
			state.activePointerId = null;
			state.pointerType = null;
			removeAllGlobalListeners();
			if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target);
			for (let dispose of state.disposables) dispose();
			state.disposables = [];
		}
	}, [
		allowTextSelectionOnPress,
		removeAllGlobalListeners,
		triggerPressEnd
	]);
	let cancelEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(cancel);
	(0, import_react.useEffect)(() => {
		if (isDisabled && ref.current.isPressed) cancelEvent({
			currentTarget: ref.current.target,
			shiftKey: false,
			ctrlKey: false,
			metaKey: false,
			altKey: false
		});
	}, [isDisabled]);
	let cancelOnPointerExit = (0, import_react.useCallback)((e) => {
		if (shouldCancelOnPointerExit) cancel(e);
	}, [shouldCancelOnPointerExit, cancel]);
	let triggerClick = (0, import_react.useCallback)((e) => {
		if (isDisabled) return;
		onClick?.(e);
	}, [isDisabled, onClick]);
	let triggerSyntheticClick = (0, import_react.useCallback)((e, target) => {
		if (isDisabled) return;
		if (onClick) {
			let event = new MouseEvent("click", e);
			$a92dc41f639950be$export$c2b7abe5d61ec696(event, target);
			onClick($a92dc41f639950be$export$525bc4921d56d4a(event));
		}
	}, [isDisabled, onClick]);
	let pressProps = (0, import_react.useMemo)(() => {
		let state = ref.current;
		let pressProps = {
			onKeyDown(e) {
				if ($d27d541f9569d26d$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
					if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
					let shouldStopPropagation = true;
					if (!state.isPressed && !e.repeat) {
						state.target = e.currentTarget;
						state.isPressed = true;
						state.pointerType = "keyboard";
						shouldStopPropagation = triggerPressStart(e, "keyboard");
					}
					let originalTarget = e.currentTarget;
					let pressUp = (e) => {
						if ($d27d541f9569d26d$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && $23f2114a1b82827e$export$4282f70798064fe0(originalTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && state.target) triggerPressUpEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard");
					};
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "keyup", $a4e76a5424781910$export$e08e3b67e392101e(pressUp, onKeyUp), true);
					if (shouldStopPropagation) e.stopPropagation();
					if (e.metaKey && $2add3ce32c6007eb$export$9ac100e40613ea10()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
				} else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
			},
			onClick(e) {
				if (e && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if (e && e.button === 0 && !state.isTriggeringEvent && !$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) {
					let shouldStopPropagation = true;
					if (isDisabled) e.preventDefault();
					if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || $b5c62b033c25b96d$export$60278871457622de(e.nativeEvent))) {
						let stopPressStart = triggerPressStart(e, "virtual");
						let stopPressUp = triggerPressUpEvent(e, "virtual");
						let stopPressEnd = triggerPressEndEvent(e, "virtual");
						triggerClick(e);
						shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
					} else if (state.isPressed && state.pointerType !== "keyboard") {
						let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
						let stopPressUp = triggerPressUpEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType);
						let stopPressEnd = triggerPressEndEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType, true);
						shouldStopPropagation = stopPressUp && stopPressEnd;
						state.isOverTarget = false;
						triggerClick(e);
						cancelEvent(e);
					}
					state.ignoreEmulatedMouseEvents = false;
					if (shouldStopPropagation) e.stopPropagation();
				}
			}
		};
		let onKeyUp = (e) => {
			if (state.isPressed && state.target && $d27d541f9569d26d$var$isValidKeyboardEvent(e, state.target)) {
				if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
				let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
				let wasPressed = $23f2114a1b82827e$export$4282f70798064fe0(state.target, target);
				triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard", wasPressed);
				if (wasPressed) triggerSyntheticClick(e, state.target);
				removeAllGlobalListeners();
				if (e.key !== "Enter" && $d27d541f9569d26d$var$isHTMLAnchorLink(state.target) && $23f2114a1b82827e$export$4282f70798064fe0(state.target, target) && !e[$d27d541f9569d26d$var$LINK_CLICKED]) {
					e[$d27d541f9569d26d$var$LINK_CLICKED] = true;
					$caaf0dd3060ed57c$export$95185d699e05d4d7(state.target, e, false);
				}
				state.isPressed = false;
				state.metaKeyEvents?.delete(e.key);
			} else if (e.key === "Meta" && state.metaKeyEvents?.size) {
				let events = state.metaKeyEvents;
				state.metaKeyEvents = void 0;
				for (let event of events.values()) state.target?.dispatchEvent(new KeyboardEvent("keyup", event));
			}
		};
		if (typeof PointerEvent !== "undefined") {
			pressProps.onPointerDown = (e) => {
				if (e.button !== 0 || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if ($b5c62b033c25b96d$export$29bf1b5f2c56cf63(e.nativeEvent)) {
					state.pointerType = "virtual";
					return;
				}
				state.pointerType = e.pointerType;
				let shouldStopPropagation = true;
				if (!state.isPressed) {
					state.isPressed = true;
					state.isOverTarget = true;
					state.activePointerId = e.pointerId;
					state.target = e.currentTarget;
					if (!allowTextSelectionOnPress) $cbf007e418543821$export$16a4697467175487(state.target);
					shouldStopPropagation = triggerPressStart(e, state.pointerType);
					let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
					if ("releasePointerCapture" in target) if ("hasPointerCapture" in target) {
						if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
					} else target.releasePointerCapture(e.pointerId);
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointerup", onPointerUp, false);
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointercancel", onPointerCancel, false);
				}
				if (shouldStopPropagation) e.stopPropagation();
			};
			pressProps.onMouseDown = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if (e.button === 0) {
					if (preventFocusOnPress) {
						let dispose = $a92dc41f639950be$export$cabe61c495ee3649(e.target);
						if (dispose) state.disposables.push(dispose);
					}
					e.stopPropagation();
				}
			};
			pressProps.onPointerUp = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.pointerType === "virtual") return;
				if (e.button === 0 && !state.isPressed) triggerPressUpEvent(e, state.pointerType || e.pointerType);
			};
			pressProps.onPointerEnter = (e) => {
				if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
					state.isOverTarget = true;
					triggerPressStart($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType);
				}
			};
			pressProps.onPointerLeave = (e) => {
				if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
					state.isOverTarget = false;
					triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
					cancelOnPointerExit(e);
				}
			};
			let onPointerUp = (e) => {
				if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
					if ($23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && state.pointerType != null) {
						let clicked = false;
						let timeout = setTimeout(() => {
							if (state.isPressed && state.target instanceof HTMLElement) if (clicked) cancelEvent(e);
							else {
								$1969ac565cfec8d0$export$de79e2c695e052f3(state.target);
								state.target.click();
							}
						}, 80);
						addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
						state.disposables.push(() => clearTimeout(timeout));
					} else cancelEvent(e);
					state.isOverTarget = false;
				}
			};
			let onPointerCancel = (e) => {
				cancelEvent(e);
			};
			pressProps.onDragStart = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				cancelEvent(e);
			};
		}
		return pressProps;
	}, [
		addGlobalListener,
		isDisabled,
		preventFocusOnPress,
		removeAllGlobalListeners,
		allowTextSelectionOnPress,
		cancelOnPointerExit,
		triggerPressStart,
		triggerClick,
		triggerSyntheticClick
	]);
	(0, import_react.useEffect)(() => {
		if (!domRef || false) return;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(domRef.current);
		if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($d27d541f9569d26d$var$STYLE_ID)) return;
		const style = ownerDocument.createElement("style");
		style.id = $d27d541f9569d26d$var$STYLE_ID;
		let nonce = $2b2d34ff061957fb$export$2b85b721e524d74b(ownerDocument);
		if (nonce) style.nonce = nonce;
		style.textContent = `
@layer {
  [${$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
		ownerDocument.head.prepend(style);
	}, [domRef]);
	(0, import_react.useEffect)(() => {
		let state = ref.current;
		return () => {
			if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target ?? void 0);
			for (let dispose of state.disposables) dispose();
			state.disposables = [];
		};
	}, [allowTextSelectionOnPress]);
	return {
		isPressed: isPressedProp || isPressed,
		pressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, pressProps, { [$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE]: true })
	};
}
function $d27d541f9569d26d$var$isHTMLAnchorLink(target) {
	return target.tagName === "A" && target.hasAttribute("href");
}
function $d27d541f9569d26d$var$isValidKeyboardEvent(event, currentTarget) {
	const { key, code } = event;
	const element = currentTarget;
	const role = element.getAttribute("role");
	return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLInputElement && !$d27d541f9569d26d$var$isValidInputKey(element, key) || element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLTextAreaElement || element.isContentEditable) && !((role === "link" || !role && $d27d541f9569d26d$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $d27d541f9569d26d$var$createEvent(target, e) {
	let clientX = e.clientX;
	let clientY = e.clientY;
	return {
		currentTarget: target,
		shiftKey: e.shiftKey,
		ctrlKey: e.ctrlKey,
		metaKey: e.metaKey,
		altKey: e.altKey,
		clientX,
		clientY,
		key: e.key
	};
}
function $d27d541f9569d26d$var$shouldPreventDefaultUp(target) {
	if (target instanceof HTMLInputElement) return false;
	if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
	if ($d27d541f9569d26d$var$isHTMLAnchorLink(target)) return false;
	return true;
}
function $d27d541f9569d26d$var$shouldPreventDefaultKeyboard(target, key) {
	if (target instanceof HTMLInputElement) return !$d27d541f9569d26d$var$isValidInputKey(target, key);
	return $d27d541f9569d26d$var$shouldPreventDefaultUp(target);
}
var $d27d541f9569d26d$var$nonTextInputTypes = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function $d27d541f9569d26d$var$isValidInputKey(target, key) {
	return target.type === "checkbox" || target.type === "radio" ? key === " " : $d27d541f9569d26d$var$nonTextInputTypes.has(target.type);
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
	let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
	let state = (0, import_react.useRef)({ isFocusWithin: false });
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let onBlur = (0, import_react.useCallback)((e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) {
			state.current.isFocusWithin = false;
			removeAllGlobalListeners();
			if (onBlurWithin) onBlurWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(false);
		}
	}, [
		onBlurWithin,
		onFocusWithinChange,
		state,
		removeAllGlobalListeners
	]);
	let onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
	let onFocus = (0, import_react.useCallback)((e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
		const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
		if (!state.current.isFocusWithin && activeElement === eventTarget) {
			if (onFocusWithin) onFocusWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(true);
			state.current.isFocusWithin = true;
			onSyntheticFocus(e);
			let currentTarget = e.currentTarget;
			addGlobalListener(ownerDocument, "focus", (e) => {
				let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
				if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(currentTarget, eventTarget)) {
					let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", { relatedTarget: eventTarget });
					$a92dc41f639950be$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
					let event = $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent);
					onBlur(event);
				}
			}, { capture: true });
		}
	}, [
		onFocusWithin,
		onFocusWithinChange,
		onSyntheticFocus,
		addGlobalListener,
		onBlur
	]);
	if (isDisabled) return { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} };
	return { focusWithinProps: {
		onFocus,
		onBlur
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
	let { autoFocus = false, isTextInput, within } = props;
	let state = (0, import_react.useRef)({
		isFocused: false,
		isFocusVisible: autoFocus || $8f5a2122b0992be3$export$b9b3dfddab17db27()
	});
	let [isFocused, setFocused] = (0, import_react.useState)(false);
	let [isFocusVisibleState, setFocusVisible] = (0, import_react.useState)(() => state.current.isFocused && state.current.isFocusVisible);
	let updateState = (0, import_react.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
	let onFocusChange = (0, import_react.useCallback)((isFocused) => {
		state.current.isFocused = isFocused;
		state.current.isFocusVisible = $8f5a2122b0992be3$export$b9b3dfddab17db27();
		setFocused(isFocused);
		updateState();
	}, [updateState]);
	$8f5a2122b0992be3$export$ec71b4b83ac08ec3((isFocusVisible) => {
		state.current.isFocusVisible = isFocusVisible;
		updateState();
	}, [isTextInput, isFocused], {
		enabled: isFocused,
		isTextInput
	});
	let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6({
		isDisabled: within,
		onFocusChange
	});
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
		isDisabled: !within,
		onFocusWithinChange: onFocusChange
	});
	return {
		isFocused,
		isFocusVisible: isFocusVisibleState,
		focusProps: within ? focusWithinProps : focusProps
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useHover.mjs
var $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
var $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
	$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
	setTimeout(() => {
		$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
	}, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
	if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
	let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(null);
	if (typeof ownerDocument === "undefined") return;
	if ($e969f22b6713ca4a$var$hoverCount === 0) {
		if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
	}
	$e969f22b6713ca4a$var$hoverCount++;
	return () => {
		$e969f22b6713ca4a$var$hoverCount--;
		if ($e969f22b6713ca4a$var$hoverCount > 0) return;
		if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
	};
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
	let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
	let [isHovered, setHovered] = (0, import_react.useState)(false);
	let state = (0, import_react.useRef)({
		isHovered: false,
		ignoreEmulatedMouseEvents: false,
		pointerType: "",
		target: null
	}).current;
	(0, import_react.useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let { hoverProps, triggerHoverEnd } = (0, import_react.useMemo)(() => {
		let triggerHoverStart = (event, pointerType) => {
			state.pointerType = pointerType;
			if (isDisabled || pointerType === "touch" || state.isHovered || !$23f2114a1b82827e$export$4282f70798064fe0(event.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(event))) return;
			state.isHovered = true;
			let target = event.currentTarget;
			state.target = target;
			addGlobalListener($d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(event)), "pointerover", (e) => {
				if (state.isHovered && state.target && !$23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			}, { capture: true });
			if (onHoverStart) onHoverStart({
				type: "hoverstart",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(true);
			setHovered(true);
		};
		let triggerHoverEnd = (event, pointerType) => {
			let target = state.target;
			state.pointerType = "";
			state.target = null;
			if (pointerType === "touch" || !state.isHovered || !target) return;
			state.isHovered = false;
			removeAllGlobalListeners();
			if (onHoverEnd) onHoverEnd({
				type: "hoverend",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(false);
			setHovered(false);
		};
		let hoverProps = {};
		if (typeof PointerEvent !== "undefined") {
			hoverProps.onPointerEnter = (e) => {
				if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
				triggerHoverStart(e, e.pointerType);
			};
			hoverProps.onPointerLeave = (e) => {
				if (!isDisabled && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			};
		}
		return {
			hoverProps,
			triggerHoverEnd
		};
	}, [
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		isDisabled,
		state,
		addGlobalListener,
		removeAllGlobalListeners
	]);
	(0, import_react.useEffect)(() => {
		if (isDisabled) triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
	}, [isDisabled]);
	return {
		hoverProps,
		isHovered
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/label/useLabel.mjs
function $0beb20c9744a2065$export$8467354a121f1b9f(props) {
	let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
	id = $390e54f620492c70$export$f680877a34711e37(id);
	let labelId = $390e54f620492c70$export$f680877a34711e37();
	let labelProps = {};
	if (label) {
		ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
		labelProps = {
			id: labelId,
			htmlFor: labelElementType === "label" ? id : void 0
		};
	}
	let fieldProps = $e8ac3c3f5d4bae7f$export$d6875122194c7b44({
		id,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledby
	});
	return {
		labelProps,
		fieldProps
	};
}
//#endregion
//#region node_modules/react-stately/dist/private/utils/number.mjs
/**
* Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
* valid step.
*/ function $240e9101ba2842f5$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
	return Math.min(Math.max(value, min), max);
}
//#endregion
//#region node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs
var $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
var $a46cf152bb926da5$var$liveAnnouncer = null;
function $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
	if (!$a46cf152bb926da5$var$liveAnnouncer) {
		$a46cf152bb926da5$var$liveAnnouncer = new $a46cf152bb926da5$var$LiveAnnouncer();
		if (!(typeof IS_REACT_ACT_ENVIRONMENT === "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== "undefined")) setTimeout(() => {
			if ($a46cf152bb926da5$var$liveAnnouncer?.isAttached()) $a46cf152bb926da5$var$liveAnnouncer?.announce(message, assertiveness, timeout);
		}, 100);
		else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
	} else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
var $a46cf152bb926da5$var$LiveAnnouncer = class {
	constructor() {
		this.node = null;
		this.assertiveLog = null;
		this.politeLog = null;
		if (typeof document !== "undefined") {
			this.node = document.createElement("div");
			this.node.dataset.liveAnnouncer = "true";
			Object.assign(this.node.style, {
				border: 0,
				clip: "rect(0 0 0 0)",
				clipPath: "inset(50%)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap"
			});
			this.assertiveLog = this.createLog("assertive");
			this.node.appendChild(this.assertiveLog);
			this.politeLog = this.createLog("polite");
			this.node.appendChild(this.politeLog);
			document.body.prepend(this.node);
		}
	}
	isAttached() {
		return this.node?.isConnected;
	}
	createLog(ariaLive) {
		let node = document.createElement("div");
		node.setAttribute("role", "log");
		node.setAttribute("aria-live", ariaLive);
		node.setAttribute("aria-relevant", "additions");
		return node;
	}
	destroy() {
		if (!this.node) return;
		document.body.removeChild(this.node);
		this.node = null;
	}
	announce(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
		if (!this.node) return;
		let node = document.createElement("div");
		if (typeof message === "object") {
			node.setAttribute("role", "img");
			node.setAttribute("aria-labelledby", message["aria-labelledby"]);
		} else node.textContent = message;
		if (assertiveness === "assertive") this.assertiveLog?.appendChild(node);
		else this.politeLog?.appendChild(node);
		if (message !== "") setTimeout(() => {
			node.remove();
		}, timeout);
	}
	clear(assertiveness) {
		if (!this.node) return;
		if ((!assertiveness || assertiveness === "assertive") && this.assertiveLog) this.assertiveLog.innerHTML = "";
		if ((!assertiveness || assertiveness === "polite") && this.politeLog) this.politeLog.innerHTML = "";
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/button/useButton.mjs
function $ac4318a9c075bb9f$export$ea18c227d4417cc3(props, ref) {
	let { elementType = "button", isDisabled, onPress, onPressStart, onPressEnd, onPressUp, onPressChange, preventFocusOnPress, allowFocusWhenDisabled, onClick, href, target, rel, type = "button" } = props;
	let additionalProps;
	if (elementType === "button") additionalProps = {
		type,
		disabled: isDisabled,
		form: props.form,
		formAction: props.formAction,
		formEncType: props.formEncType,
		formMethod: props.formMethod,
		formNoValidate: props.formNoValidate,
		formTarget: props.formTarget,
		name: props.name,
		value: props.value
	};
	else additionalProps = {
		role: "button",
		href: elementType === "a" && !isDisabled ? href : void 0,
		target: elementType === "a" ? target : void 0,
		type: elementType === "input" ? type : void 0,
		disabled: elementType === "input" ? isDisabled : void 0,
		"aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
		rel: elementType === "a" ? rel : void 0
	};
	let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21({
		onPressStart,
		onPressEnd,
		onPressChange,
		onPress,
		onPressUp,
		onClick,
		isDisabled,
		preventFocusOnPress,
		ref
	});
	let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
	if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
	let buttonProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(focusableProps, pressProps, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { labelable: true }));
	return {
		isPressed,
		buttonProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(additionalProps, buttonProps, {
			"aria-haspopup": props["aria-haspopup"],
			"aria-expanded": props["aria-expanded"],
			"aria-controls": props["aria-controls"],
			"aria-pressed": props["aria-pressed"],
			"aria-current": props["aria-current"],
			"aria-disabled": props["aria-disabled"]
		})
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isScrollable.mjs
function $901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow) {
	if (!node) return false;
	let style = window.getComputedStyle(node);
	let root = document.scrollingElement || document.documentElement;
	let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
	if (node === root && style.overflow !== "hidden") isScrollable = true;
	if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
	return isScrollable;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getScrollParent.mjs
function $3578607fe3d4b096$export$cfa2225e87938781(node, checkForOverflow) {
	let scrollableNode = node;
	if ($901761b40e390936$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
	while (scrollableNode && !$901761b40e390936$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
	return scrollableNode || document.scrollingElement || document.documentElement;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getScrollParents.mjs
function $76d97191f0f90600$export$94ed1c92c7beeb22(node, checkForOverflow) {
	let parentElements = [];
	let root = document.scrollingElement || document.documentElement;
	while (node) {
		if ($901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow)) parentElements.push(node);
		if (node === root) break;
		node = node.parentElement;
	}
	return parentElements;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/scrollIntoView.mjs
function $51a3e22a5186a962$export$53a0910f038337bd(scrollView, element, opts = {}) {
	let { block = "nearest", inline = "nearest" } = opts;
	if (scrollView === element) return;
	let y = scrollView.scrollTop;
	let x = scrollView.scrollLeft;
	let target = element.getBoundingClientRect();
	let view = scrollView.getBoundingClientRect();
	let itemStyle = window.getComputedStyle(element);
	let viewStyle = window.getComputedStyle(scrollView);
	let root = document.scrollingElement || document.documentElement;
	let isRoot = scrollView === root;
	let viewTop = scrollView === root ? 0 : view.top;
	let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
	let viewLeft = scrollView === root ? 0 : view.left;
	let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
	let scrollMarginTop = parseFloat(itemStyle.scrollMarginTop) || 0;
	let scrollMarginBottom = parseFloat(itemStyle.scrollMarginBottom) || 0;
	let scrollMarginLeft = parseFloat(itemStyle.scrollMarginLeft) || 0;
	let scrollMarginRight = parseFloat(itemStyle.scrollMarginRight) || 0;
	let scrollPaddingTop = parseFloat(viewStyle.scrollPaddingTop) || 0;
	let scrollPaddingBottom = parseFloat(viewStyle.scrollPaddingBottom) || 0;
	let scrollPaddingLeft = parseFloat(viewStyle.scrollPaddingLeft) || 0;
	let scrollPaddingRight = parseFloat(viewStyle.scrollPaddingRight) || 0;
	let borderTopWidth = parseFloat(viewStyle.borderTopWidth) || 0;
	let borderBottomWidth = parseFloat(viewStyle.borderBottomWidth) || 0;
	let borderLeftWidth = parseFloat(viewStyle.borderLeftWidth) || 0;
	let borderRightWidth = parseFloat(viewStyle.borderRightWidth) || 0;
	let scrollAreaTop = target.top - scrollMarginTop;
	let scrollAreaBottom = target.bottom + scrollMarginBottom;
	let scrollAreaLeft = target.left - scrollMarginLeft;
	let scrollAreaRight = target.right + scrollMarginRight;
	let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
	let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
	let scrollBarWidth = scrollView === root ? 0 : scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
	let scrollBarHeight = scrollView === root ? 0 : scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
	let scrollPortTop = viewTop + (isRoot ? 0 : borderTopWidth) + scrollPaddingTop;
	let scrollPortBottom = viewBottom - (isRoot ? 0 : borderBottomWidth) - scrollPaddingBottom - scrollBarHeight;
	let scrollPortLeft = viewLeft + (isRoot ? 0 : borderLeftWidth) + scrollPaddingLeft;
	let scrollPortRight = viewRight - (isRoot ? 0 : borderRightWidth) - scrollPaddingRight;
	if (viewStyle.direction === "rtl" && !$2add3ce32c6007eb$export$fedb369cb70207f1()) scrollPortLeft += scrollBarWidth;
	else scrollPortRight -= scrollBarWidth;
	let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
	let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
	if (shouldScrollBlock && block === "start") y += scrollAreaTop - scrollPortTop;
	else if (shouldScrollBlock && block === "center") y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
	else if (shouldScrollBlock && block === "end") y += scrollAreaBottom - scrollPortBottom;
	else if (shouldScrollBlock && block === "nearest") {
		let start = scrollAreaTop - scrollPortTop;
		let end = scrollAreaBottom - scrollPortBottom;
		y += Math.abs(start) <= Math.abs(end) ? start : end;
	}
	if (shouldScrollInline && inline === "start") x += scrollAreaLeft - scrollPortLeft;
	else if (shouldScrollInline && inline === "center") x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
	else if (shouldScrollInline && inline === "end") x += scrollAreaRight - scrollPortRight;
	else if (shouldScrollInline && inline === "nearest") {
		let start = scrollAreaLeft - scrollPortLeft;
		let end = scrollAreaRight - scrollPortRight;
		x += Math.abs(start) <= Math.abs(end) ? start : end;
	}
	scrollView.scrollTo({
		left: x,
		top: y
	});
}
function $51a3e22a5186a962$export$c826860796309d1b(targetElement, opts = {}) {
	let { containingElement } = opts;
	if (targetElement && targetElement.isConnected) {
		let root = document.scrollingElement || document.documentElement;
		if (!(window.getComputedStyle(root).overflow === "hidden")) {
			let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
			targetElement?.scrollIntoView?.({ block: "nearest" });
			let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
			if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
				containingElement?.scrollIntoView?.({
					block: "center",
					inline: "center"
				});
				targetElement.scrollIntoView?.({ block: "nearest" });
			}
		} else {
			let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
			let scrollParents = $76d97191f0f90600$export$94ed1c92c7beeb22(targetElement, true);
			for (let scrollParent of scrollParents) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
			let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
			if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
				scrollParents = containingElement ? $76d97191f0f90600$export$94ed1c92c7beeb22(containingElement, true) : [];
				for (let scrollParent of scrollParents) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, containingElement, {
					block: "center",
					inline: "center"
				});
				for (let scrollParent of $76d97191f0f90600$export$94ed1c92c7beeb22(targetElement, true)) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
			}
		}
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useDescription.mjs
var $121970af65029459$var$descriptionId = 0;
var $121970af65029459$var$descriptionNodes = /* @__PURE__ */ new Map();
function $121970af65029459$export$f8aeda7b10753fa1(description) {
	let [id, setId] = (0, import_react.useState)();
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (!description) return;
		let desc = $121970af65029459$var$descriptionNodes.get(description);
		if (!desc) {
			let id = `react-aria-description-${$121970af65029459$var$descriptionId++}`;
			setId(id);
			let node = document.createElement("div");
			node.id = id;
			node.style.display = "none";
			node.textContent = description;
			document.body.appendChild(node);
			desc = {
				refCount: 0,
				element: node
			};
			$121970af65029459$var$descriptionNodes.set(description, desc);
		} else setId(desc.element.id);
		desc.refCount++;
		return () => {
			if (desc && --desc.refCount === 0) {
				desc.element.remove();
				$121970af65029459$var$descriptionNodes.delete(description);
			}
		};
	}, [description]);
	return { "aria-describedby": description ? id : void 0 };
}
//#endregion
//#region node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var $ea3928288112382f$var$styles = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
};
function $ea3928288112382f$export$a966af930f325cab(props = {}) {
	let { style, isFocusable } = props;
	let [isFocused, setFocused] = (0, import_react.useState)(false);
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
		isDisabled: !isFocusable,
		onFocusWithinChange: (val) => setFocused(val)
	});
	let combinedStyles = (0, import_react.useMemo)(() => {
		if (isFocused) return style;
		else if (style) return {
			...$ea3928288112382f$var$styles,
			...style
		};
		else return $ea3928288112382f$var$styles;
	}, [isFocused]);
	return { visuallyHiddenProps: {
		...focusWithinProps,
		style: combinedStyles
	} };
}
function $ea3928288112382f$export$439d29a4e110a164(props) {
	let { children, elementType: Element = "div", isFocusable, style, ...otherProps } = props;
	let { visuallyHiddenProps } = $ea3928288112382f$export$a966af930f325cab(props);
	return /*#__PURE__*/ import_react.createElement(Element, $bbaa08b3cd72f041$export$9d1611c77c2fe928(otherProps, visuallyHiddenProps), children);
}
//#endregion
//#region node_modules/react-stately/dist/private/form/useFormValidationState.mjs
var $fd2148440a13ec26$export$aca958c65c314e6c = {
	badInput: false,
	customError: false,
	patternMismatch: false,
	rangeOverflow: false,
	rangeUnderflow: false,
	stepMismatch: false,
	tooLong: false,
	tooShort: false,
	typeMismatch: false,
	valueMissing: false,
	valid: true
};
var $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE = {
	...$fd2148440a13ec26$export$aca958c65c314e6c,
	customError: true,
	valid: false
};
var $fd2148440a13ec26$export$dad6ae84456c676a = {
	isInvalid: false,
	validationDetails: $fd2148440a13ec26$export$aca958c65c314e6c,
	validationErrors: []
};
var $fd2148440a13ec26$export$571b5131b7e65c11 = (0, import_react.createContext)({});
var $fd2148440a13ec26$export$a763b9476acd3eb = "__reactAriaFormValidationState";
function $fd2148440a13ec26$export$fc1a364ae1f3ff10(props) {
	if (props["__reactAriaFormValidationState"]) {
		let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$fd2148440a13ec26$export$a763b9476acd3eb];
		return {
			realtimeValidation,
			displayValidation,
			updateValidation,
			resetValidation,
			commitValidation
		};
	}
	return $fd2148440a13ec26$var$useFormValidationStateImpl(props);
}
function $fd2148440a13ec26$var$useFormValidationStateImpl(props) {
	let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
	if (validationState) isInvalid ||= validationState === "invalid";
	let controlledError = isInvalid !== void 0 ? {
		isInvalid,
		validationErrors: [],
		validationDetails: $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE
	} : null;
	let clientError = (0, import_react.useMemo)(() => {
		if (!validate || value == null) return null;
		return $fd2148440a13ec26$var$getValidationResult($fd2148440a13ec26$var$runValidate(validate, value));
	}, [validate, value]);
	if (builtinValidation?.validationDetails.valid) builtinValidation = void 0;
	let serverErrors = (0, import_react.useContext)($fd2148440a13ec26$export$571b5131b7e65c11);
	let serverErrorMessages = (0, import_react.useMemo)(() => {
		if (name) return Array.isArray(name) ? name.flatMap((name) => $fd2148440a13ec26$var$asArray(serverErrors[name])) : $fd2148440a13ec26$var$asArray(serverErrors[name]);
		return [];
	}, [serverErrors, name]);
	let [lastServerErrors, setLastServerErrors] = (0, import_react.useState)(serverErrors);
	let [isServerErrorCleared, setServerErrorCleared] = (0, import_react.useState)(false);
	if (serverErrors !== lastServerErrors) {
		setLastServerErrors(serverErrors);
		setServerErrorCleared(false);
	}
	let serverError = (0, import_react.useMemo)(() => $fd2148440a13ec26$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [isServerErrorCleared, serverErrorMessages]);
	let nextValidation = (0, import_react.useRef)($fd2148440a13ec26$export$dad6ae84456c676a);
	let [currentValidity, setCurrentValidity] = (0, import_react.useState)($fd2148440a13ec26$export$dad6ae84456c676a);
	let lastError = (0, import_react.useRef)($fd2148440a13ec26$export$dad6ae84456c676a);
	let commitValidation = () => {
		if (!commitQueued) return;
		setCommitQueued(false);
		let error = clientError || builtinValidation || nextValidation.current;
		if (!$fd2148440a13ec26$var$isEqualValidation(error, lastError.current)) {
			lastError.current = error;
			setCurrentValidity(error);
		}
	};
	let [commitQueued, setCommitQueued] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(commitValidation);
	return {
		realtimeValidation: controlledError || serverError || clientError || builtinValidation || $fd2148440a13ec26$export$dad6ae84456c676a,
		displayValidation: validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity,
		updateValidation(value) {
			if (validationBehavior === "aria" && !$fd2148440a13ec26$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
			else nextValidation.current = value;
		},
		resetValidation() {
			let error = $fd2148440a13ec26$export$dad6ae84456c676a;
			if (!$fd2148440a13ec26$var$isEqualValidation(error, lastError.current)) {
				lastError.current = error;
				setCurrentValidity(error);
			}
			if (validationBehavior === "native") setCommitQueued(false);
			setServerErrorCleared(true);
		},
		commitValidation() {
			if (validationBehavior === "native") setCommitQueued(true);
			setServerErrorCleared(true);
		}
	};
}
function $fd2148440a13ec26$var$asArray(v) {
	if (!v) return [];
	return Array.isArray(v) ? v : [v];
}
function $fd2148440a13ec26$var$runValidate(validate, value) {
	if (typeof validate === "function") {
		let e = validate(value);
		if (e && typeof e !== "boolean") return $fd2148440a13ec26$var$asArray(e);
	}
	return [];
}
function $fd2148440a13ec26$var$getValidationResult(errors) {
	return errors.length ? {
		isInvalid: true,
		validationErrors: errors,
		validationDetails: $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE
	} : null;
}
function $fd2148440a13ec26$var$isEqualValidation(a, b) {
	if (a === b) return true;
	return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i) => a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}
//#endregion
//#region node_modules/react-aria/dist/private/label/useField.mjs
function $191c9b6d48a0a4e2$export$294aa081a6c6f55d(props) {
	let { description, errorMessage, isInvalid, validationState } = props;
	let { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f(props);
	let descriptionId = $390e54f620492c70$export$b4cc09c592e8fdb8([
		Boolean(description),
		Boolean(errorMessage),
		isInvalid,
		validationState
	]);
	let errorMessageId = $390e54f620492c70$export$b4cc09c592e8fdb8([
		Boolean(description),
		Boolean(errorMessage),
		isInvalid,
		validationState
	]);
	fieldProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(fieldProps, { "aria-describedby": [
		descriptionId,
		errorMessageId,
		props["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 });
	return {
		labelProps,
		fieldProps,
		descriptionProps: { id: descriptionId },
		errorMessageProps: { id: errorMessageId }
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useFormReset.mjs
function $3274bf1495747a7b$export$5add1d006293d136(ref, initialValue, onReset) {
	let handleReset = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (onReset && !e.defaultPrevented) onReset(initialValue);
	});
	(0, import_react.useEffect)(() => {
		let form = ref?.current?.form;
		form?.addEventListener("reset", handleReset);
		return () => {
			form?.removeEventListener("reset", handleReset);
		};
	}, [ref]);
}
//#endregion
//#region node_modules/react-aria/dist/private/form/useFormValidation.mjs
function $860f7da480e22816$export$b8473d3665f3a75a(props, state, ref) {
	let { validationBehavior, focus } = props;
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (validationBehavior === "native" && ref?.current && "setCustomValidity" in ref.current && !ref.current.disabled) {
			let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
			ref.current.setCustomValidity(errorMessage);
			if (!ref.current.hasAttribute("title")) ref.current.title = "";
			if (!state.realtimeValidation.isInvalid) state.updateValidation($860f7da480e22816$var$getNativeValidity(ref.current));
		}
	});
	let isIgnoredReset = (0, import_react.useRef)(false);
	let onReset = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
		if (!isIgnoredReset.current) state.resetValidation();
	});
	let onInvalid = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (!state.displayValidation.isInvalid) state.commitValidation();
		let form = ref?.current?.form;
		if (!e.defaultPrevented && ref && form && $860f7da480e22816$var$getFirstInvalidInput(form) === ref.current) {
			if (focus) focus();
			else ref.current?.focus();
			$8f5a2122b0992be3$export$8397ddfc504fdb9a("keyboard");
		}
		e.preventDefault();
	});
	let onChange = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
		state.commitValidation();
	});
	(0, import_react.useEffect)(() => {
		let input = ref?.current;
		if (!input) return;
		let form = input.form;
		let reset = form?.reset;
		if (form) form.reset = () => {
			isIgnoredReset.current = !window.event || window.event.type === "message" && $23f2114a1b82827e$export$e58f029f0fbfdb29(window.event) instanceof MessagePort;
			reset?.call(form);
			isIgnoredReset.current = false;
		};
		input.addEventListener("invalid", onInvalid);
		input.addEventListener("change", onChange);
		form?.addEventListener("reset", onReset);
		return () => {
			input.removeEventListener("invalid", onInvalid);
			input.removeEventListener("change", onChange);
			form?.removeEventListener("reset", onReset);
			if (form) form.reset = reset;
		};
	}, [ref, validationBehavior]);
}
function $860f7da480e22816$var$getValidity(input) {
	let validity = input.validity;
	return {
		badInput: validity.badInput,
		customError: validity.customError,
		patternMismatch: validity.patternMismatch,
		rangeOverflow: validity.rangeOverflow,
		rangeUnderflow: validity.rangeUnderflow,
		stepMismatch: validity.stepMismatch,
		tooLong: validity.tooLong,
		tooShort: validity.tooShort,
		typeMismatch: validity.typeMismatch,
		valueMissing: validity.valueMissing,
		valid: validity.valid
	};
}
function $860f7da480e22816$var$getNativeValidity(input) {
	return {
		isInvalid: !input.validity.valid,
		validationDetails: $860f7da480e22816$var$getValidity(input),
		validationErrors: input.validationMessage ? [input.validationMessage] : []
	};
}
function $860f7da480e22816$var$getFirstInvalidInput(form) {
	for (let i = 0; i < form.elements.length; i++) {
		let element = form.elements[i];
		if (element.validity?.valid === false) return element;
	}
	return null;
}
//#endregion
//#region node_modules/react-aria/dist/private/textfield/useTextField.mjs
function $054f71d2330da2e3$export$712718f7aec83d5(props, ref) {
	let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, type = "text", validationBehavior = "aria" } = props;
	let [value, setValue] = $3e6197669829fe11$export$40bfa8c7b0832715(props.value, props.defaultValue || "", props.onChange);
	let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
	let validationState = $fd2148440a13ec26$export$fc1a364ae1f3ff10({
		...props,
		value
	});
	let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
	let { labelProps, fieldProps, descriptionProps, errorMessageProps } = $191c9b6d48a0a4e2$export$294aa081a6c6f55d({
		...props,
		isInvalid,
		errorMessage: props.errorMessage || validationErrors
	});
	let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { labelable: true });
	const inputOnlyProps = {
		type,
		pattern: props.pattern
	};
	let [initialValue] = (0, import_react.useState)(value);
	$3274bf1495747a7b$export$5add1d006293d136(ref, props.defaultValue ?? initialValue, setValue);
	$860f7da480e22816$export$b8473d3665f3a75a(props, validationState, ref);
	return {
		labelProps,
		inputProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, inputElementType === "input" ? inputOnlyProps : void 0, {
			disabled: isDisabled,
			readOnly: isReadOnly,
			required: isRequired && validationBehavior === "native",
			"aria-required": isRequired && validationBehavior === "aria" || void 0,
			"aria-invalid": isInvalid || void 0,
			"aria-errormessage": props["aria-errormessage"],
			"aria-activedescendant": props["aria-activedescendant"],
			"aria-autocomplete": props["aria-autocomplete"],
			"aria-haspopup": props["aria-haspopup"],
			"aria-controls": props["aria-controls"],
			value,
			onChange: (e) => setValue($23f2114a1b82827e$export$e58f029f0fbfdb29(e).value),
			autoComplete: props.autoComplete,
			autoCapitalize: props.autoCapitalize,
			maxLength: props.maxLength,
			minLength: props.minLength,
			name: props.name,
			form: props.form,
			placeholder: props.placeholder,
			inputMode: props.inputMode,
			autoCorrect: props.autoCorrect,
			spellCheck: props.spellCheck,
			[parseInt("19.2.7", 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: props.enterKeyHint,
			onCopy: props.onCopy,
			onCut: props.onCut,
			onPaste: props.onPaste,
			onCompositionEnd: props.onCompositionEnd,
			onCompositionStart: props.onCompositionStart,
			onCompositionUpdate: props.onCompositionUpdate,
			onSelect: props.onSelect,
			onBeforeInput: props.onBeforeInput,
			onInput: props.onInput,
			...focusableProps,
			...fieldProps
		}),
		descriptionProps,
		errorMessageProps,
		isInvalid,
		validationErrors,
		validationDetails
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/separator/useSeparator.mjs
function $dc321dbb6473ef33$export$52210f68a14655d0(props) {
	let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { labelable: true });
	let ariaOrientation;
	if (props.orientation === "vertical") ariaOrientation = "vertical";
	if (props.elementType !== "hr") return { separatorProps: {
		...domProps,
		role: "separator",
		"aria-orientation": ariaOrientation
	} };
	return { separatorProps: domProps };
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs
var $654b97e09f2a30c1$export$63eb3ababa9c55c4 = class {
	constructor(doc, root, whatToShow, filter) {
		this._walkerStack = [];
		this._currentSetFor = /* @__PURE__ */ new Set();
		this._acceptNode = (node) => {
			if (node.nodeType === Node.ELEMENT_NODE) {
				const shadowRoot = node.shadowRoot;
				if (shadowRoot) {
					const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, { acceptNode: this._acceptNode });
					this._walkerStack.unshift(walker);
					return NodeFilter.FILTER_ACCEPT;
				} else if (typeof this.filter === "function") return this.filter(node);
				else if (this.filter?.acceptNode) return this.filter.acceptNode(node);
				else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		};
		this._doc = doc;
		this.root = root;
		this.filter = filter ?? null;
		this.whatToShow = whatToShow ?? NodeFilter.SHOW_ALL;
		this._currentNode = root;
		this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
		const shadowRoot = root.shadowRoot;
		if (shadowRoot) {
			const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(walker);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(node) {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(this.root, node)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
		const walkers = [];
		let curNode = node;
		let currentWalkerCurrentNode = node;
		this._currentNode = node;
		while (curNode && curNode !== this.root) if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			const shadowRoot = curNode;
			const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, { acceptNode: this._acceptNode });
			walkers.push(walker);
			walker.currentNode = currentWalkerCurrentNode;
			this._currentSetFor.add(walker);
			curNode = currentWalkerCurrentNode = shadowRoot.host;
		} else curNode = curNode.parentNode;
		const walker = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		walkers.push(walker);
		walker.currentNode = currentWalkerCurrentNode;
		this._currentSetFor.add(walker);
		this._walkerStack = walkers;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let currentNode = this.currentNode;
		let newNode = this.nextNode();
		if (!$23f2114a1b82827e$export$4282f70798064fe0(currentNode, newNode)) {
			this.currentNode = currentNode;
			return null;
		}
		if (newNode) this.currentNode = newNode;
		return newNode;
	}
	lastChild() {
		let newNode = this._walkerStack[0].lastChild();
		if (newNode) this.currentNode = newNode;
		return newNode;
	}
	nextNode() {
		const nextNode = this._walkerStack[0].nextNode();
		if (nextNode) {
			if (nextNode.shadowRoot) {
				let nodeResult;
				if (typeof this.filter === "function") nodeResult = this.filter(nextNode);
				else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
				if (nodeResult === NodeFilter.FILTER_ACCEPT) {
					this.currentNode = nextNode;
					return nextNode;
				}
				let newNode = this.nextNode();
				if (newNode) this.currentNode = newNode;
				return newNode;
			}
			if (nextNode) this.currentNode = nextNode;
			return nextNode;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let newNode = this.nextNode();
			if (newNode) this.currentNode = newNode;
			return newNode;
		} else return null;
	}
	previousNode() {
		const currentWalker = this._walkerStack[0];
		if (currentWalker.currentNode === currentWalker.root) {
			if (this._currentSetFor.has(currentWalker)) {
				this._currentSetFor.delete(currentWalker);
				if (this._walkerStack.length > 1) {
					this._walkerStack.shift();
					let newNode = this.previousNode();
					if (newNode) this.currentNode = newNode;
					return newNode;
				} else return null;
			}
			return null;
		}
		const previousNode = currentWalker.previousNode();
		if (previousNode) {
			if (previousNode.shadowRoot) {
				let nodeResult;
				if (typeof this.filter === "function") nodeResult = this.filter(previousNode);
				else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
				if (nodeResult === NodeFilter.FILTER_ACCEPT) {
					if (previousNode) this.currentNode = previousNode;
					return previousNode;
				}
				let newNode = this.lastChild();
				if (newNode) this.currentNode = newNode;
				return newNode;
			}
			if (previousNode) this.currentNode = previousNode;
			return previousNode;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let newNode = this.previousNode();
			if (newNode) this.currentNode = newNode;
			return newNode;
		} else return null;
	}
	/**
	* @deprecated
	*/ nextSibling() {
		return null;
	}
	/**
	* @deprecated
	*/ previousSibling() {
		return null;
	}
	/**
	* @deprecated
	*/ parentNode() {
		return null;
	}
};
function $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
	if ($6a20a7989e6c817a$export$98658e8c59125e6a()) return new $654b97e09f2a30c1$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
	return doc.createTreeWalker(root, whatToShow, filter);
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/FocusScope.mjs
var $535772f9d2c1f38d$var$FocusContext = /*#__PURE__*/ import_react.createContext(null);
var $535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT = "react-aria-focus-scope-restore";
var $535772f9d2c1f38d$var$activeScope = null;
function $535772f9d2c1f38d$export$20e40289641fbbb6(props) {
	let { children, contain, restoreFocus, autoFocus } = props;
	let startRef = (0, import_react.useRef)(null);
	let endRef = (0, import_react.useRef)(null);
	let scopeRef = (0, import_react.useRef)([]);
	let { parentNode } = (0, import_react.useContext)($535772f9d2c1f38d$var$FocusContext) || {};
	let node = (0, import_react.useMemo)(() => new $535772f9d2c1f38d$var$TreeNode({ scopeRef }), [scopeRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let parent = parentNode || $535772f9d2c1f38d$export$d06fae2ee68b101e.root;
		if ($535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $535772f9d2c1f38d$var$activeScope && !$535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, parent.scopeRef)) {
			let activeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
			if (activeNode) parent = activeNode;
		}
		parent.addChild(node);
		$535772f9d2c1f38d$export$d06fae2ee68b101e.addNode(node);
	}, [node, parentNode]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let node = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
		if (node) node.contain = !!contain;
	}, [contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let node = startRef.current?.nextSibling;
		let nodes = [];
		let stopPropagation = (e) => e.stopPropagation();
		while (node && node !== endRef.current) {
			nodes.push(node);
			node.addEventListener($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, stopPropagation);
			node = node.nextSibling;
		}
		scopeRef.current = nodes;
		return () => {
			for (let node of nodes) node.removeEventListener($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, stopPropagation);
		};
	}, [children]);
	$535772f9d2c1f38d$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
	$535772f9d2c1f38d$var$useFocusContainment(scopeRef, contain);
	$535772f9d2c1f38d$var$useRestoreFocus(scopeRef, restoreFocus, contain);
	$535772f9d2c1f38d$var$useAutoFocus(scopeRef, autoFocus);
	(0, import_react.useEffect)(() => {
		const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0));
		let scope = null;
		if ($535772f9d2c1f38d$var$isElementInScope(activeElement, scopeRef.current)) {
			for (let node of $535772f9d2c1f38d$export$d06fae2ee68b101e.traverse()) if (node.scopeRef && $535772f9d2c1f38d$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
			if (scope === $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $535772f9d2c1f38d$var$activeScope = scope.scopeRef;
		}
	}, [scopeRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		return () => {
			let parentScope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef)?.parent?.scopeRef ?? null;
			if ((scopeRef === $535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope(scopeRef, $535772f9d2c1f38d$var$activeScope)) && (!parentScope || $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(parentScope))) $535772f9d2c1f38d$var$activeScope = parentScope;
			$535772f9d2c1f38d$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
		};
	}, [scopeRef]);
	let focusManager = (0, import_react.useMemo)(() => $535772f9d2c1f38d$var$createFocusManagerForScope(scopeRef), []);
	let value = (0, import_react.useMemo)(() => ({
		focusManager,
		parentNode: node
	}), [node, focusManager]);
	return /*#__PURE__*/ import_react.createElement($535772f9d2c1f38d$var$FocusContext.Provider, { value }, /*#__PURE__*/ import_react.createElement("span", {
		"data-focus-scope-start": true,
		hidden: true,
		ref: startRef
	}), children, /*#__PURE__*/ import_react.createElement("span", {
		"data-focus-scope-end": true,
		hidden: true,
		ref: endRef
	}));
}
function $535772f9d2c1f38d$var$createFocusManagerForScope(scopeRef) {
	return {
		focusNext(opts = {}) {
			let scope = scopeRef.current;
			let { from, tabbable, wrap, accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scope[0] ?? void 0));
			let sentinel = scope[0].previousElementSibling;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = $535772f9d2c1f38d$var$isElementInScope(node, scope) ? node : sentinel;
			let nextNode = walker.nextNode();
			if (!nextNode && wrap) {
				walker.currentNode = sentinel;
				nextNode = walker.nextNode();
			}
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusPrevious(opts = {}) {
			let scope = scopeRef.current;
			let { from, tabbable, wrap, accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scope[0] ?? void 0));
			let sentinel = scope[scope.length - 1].nextElementSibling;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = $535772f9d2c1f38d$var$isElementInScope(node, scope) ? node : sentinel;
			let previousNode = walker.previousNode();
			if (!previousNode && wrap) {
				walker.currentNode = sentinel;
				previousNode = walker.previousNode();
			}
			if (previousNode) $535772f9d2c1f38d$var$focusElement(previousNode, true);
			return previousNode;
		},
		focusFirst(opts = {}) {
			let scope = scopeRef.current;
			let { tabbable, accept } = opts;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = scope[0].previousElementSibling;
			let nextNode = walker.nextNode();
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusLast(opts = {}) {
			let scope = scopeRef.current;
			let { tabbable, accept } = opts;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = scope[scope.length - 1].nextElementSibling;
			let previousNode = walker.previousNode();
			if (previousNode) $535772f9d2c1f38d$var$focusElement(previousNode, true);
			return previousNode;
		}
	};
}
function $535772f9d2c1f38d$var$getScopeRoot(scope) {
	return scope[0].parentElement;
}
function $535772f9d2c1f38d$var$shouldContainFocus(scopeRef) {
	let scope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
	while (scope && scope.scopeRef !== scopeRef) {
		if (scope.contain) return false;
		scope = scope.parent;
	}
	return true;
}
function $535772f9d2c1f38d$var$getRadiosInGroup(element) {
	if (!element.form) return Array.from($d447af545b77c9f1$export$b204af158042fbac(element).querySelectorAll(`input[type="radio"][name="${CSS.escape(element.name)}"]`)).filter((radio) => !radio.form);
	const radioList = element.form.elements.namedItem(element.name);
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	if (radioList instanceof ownerWindow.RadioNodeList) return Array.from(radioList).filter((el) => el instanceof ownerWindow.HTMLInputElement);
	if (radioList instanceof ownerWindow.HTMLInputElement) return [radioList];
	return [];
}
function $535772f9d2c1f38d$var$isTabbableRadio(element) {
	if (element.checked) return true;
	const radios = $535772f9d2c1f38d$var$getRadiosInGroup(element);
	return radios.length > 0 && !radios.some((radio) => radio.checked);
}
function $535772f9d2c1f38d$var$useFocusContainment(scopeRef, contain) {
	let focusedNode = (0, import_react.useRef)(void 0);
	let raf = (0, import_react.useRef)(void 0);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let scope = scopeRef.current;
		if (!contain) {
			if (raf.current) {
				cancelAnimationFrame(raf.current);
				raf.current = void 0;
			}
			return;
		}
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		let onKeyDown = (e) => {
			if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$535772f9d2c1f38d$var$shouldContainFocus(scopeRef) || e.isComposing) return;
			let focusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			let scope = scopeRef.current;
			if (!scope || !$535772f9d2c1f38d$var$isElementInScope(focusedElement, scope)) return;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), { tabbable: true }, scope);
			if (!focusedElement) return;
			walker.currentNode = focusedElement;
			let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			if (!nextElement) {
				walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
				nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			}
			e.preventDefault();
			if (nextElement) {
				$535772f9d2c1f38d$var$focusElement(nextElement, true);
				if (nextElement instanceof $d447af545b77c9f1$export$f21a1ffae260145a(nextElement).HTMLInputElement) nextElement.select();
			}
		};
		let onFocus = (e) => {
			if ((!$535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, scopeRef)) && $535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef.current)) {
				$535772f9d2c1f38d$var$activeScope = scopeRef;
				focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			} else if ($535772f9d2c1f38d$var$shouldContainFocus(scopeRef) && !$535772f9d2c1f38d$var$isElementInChildScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef)) {
				if (focusedNode.current) focusedNode.current.focus();
				else if ($535772f9d2c1f38d$var$activeScope && $535772f9d2c1f38d$var$activeScope.current) $535772f9d2c1f38d$var$focusFirstInScope($535772f9d2c1f38d$var$activeScope.current);
			} else if ($535772f9d2c1f38d$var$shouldContainFocus(scopeRef)) focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		};
		let onBlur = (e) => {
			if (raf.current) cancelAnimationFrame(raf.current);
			raf.current = requestAnimationFrame(() => {
				let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
				let shouldSkipFocusRestore = (modality === "virtual" || modality === null) && $2add3ce32c6007eb$export$a11b0059900ceec8() && $2add3ce32c6007eb$export$6446a186d09e379e();
				let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
				if (!shouldSkipFocusRestore && activeElement && $535772f9d2c1f38d$var$shouldContainFocus(scopeRef) && !$535772f9d2c1f38d$var$isElementInChildScope(activeElement, scopeRef)) {
					$535772f9d2c1f38d$var$activeScope = scopeRef;
					let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
					if (target && target.isConnected) {
						focusedNode.current = target;
						focusedNode.current?.focus();
					} else if ($535772f9d2c1f38d$var$activeScope.current) $535772f9d2c1f38d$var$focusFirstInScope($535772f9d2c1f38d$var$activeScope.current);
				}
			});
		};
		ownerDocument.addEventListener("keydown", onKeyDown, false);
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		scope?.forEach((element) => element.addEventListener("focusout", onBlur, false));
		return () => {
			ownerDocument.removeEventListener("keydown", onKeyDown, false);
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
			scope?.forEach((element) => element.removeEventListener("focusout", onBlur, false));
		};
	}, [scopeRef, contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [raf]);
}
function $535772f9d2c1f38d$var$isElementInAnyScope(element) {
	return $535772f9d2c1f38d$var$isElementInChildScope(element);
}
function $535772f9d2c1f38d$var$isElementInScope(element, scope) {
	if (!element) return false;
	if (!scope) return false;
	return scope.some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, element));
}
function $535772f9d2c1f38d$var$isElementInChildScope(element, scope = null) {
	if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
	for (let { scopeRef: s } of $535772f9d2c1f38d$export$d06fae2ee68b101e.traverse($535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scope))) if (s && $535772f9d2c1f38d$var$isElementInScope(element, s.current)) return true;
	return false;
}
function $535772f9d2c1f38d$export$1258395f99bf9cbf(element) {
	return $535772f9d2c1f38d$var$isElementInChildScope(element, $535772f9d2c1f38d$var$activeScope);
}
function $535772f9d2c1f38d$var$isAncestorScope(ancestor, scope) {
	let parent = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scope)?.parent;
	while (parent) {
		if (parent.scopeRef === ancestor) return true;
		parent = parent.parent;
	}
	return false;
}
function $535772f9d2c1f38d$var$focusElement(element, scroll = false) {
	if (element != null && !scroll) try {
		$f192c2f16961cbe0$export$80f3e147d781571c(element);
	} catch {}
	else if (element != null) try {
		element.focus();
	} catch {}
}
function $535772f9d2c1f38d$var$getFirstInScope(scope, tabbable = true) {
	let sentinel = scope[0].previousElementSibling;
	let scopeRoot = $535772f9d2c1f38d$var$getScopeRoot(scope);
	let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(scopeRoot, { tabbable }, scope);
	walker.currentNode = sentinel;
	let nextNode = walker.nextNode();
	if (tabbable && !nextNode) {
		scopeRoot = $535772f9d2c1f38d$var$getScopeRoot(scope);
		walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(scopeRoot, { tabbable: false }, scope);
		walker.currentNode = sentinel;
		nextNode = walker.nextNode();
	}
	return nextNode;
}
function $535772f9d2c1f38d$var$focusFirstInScope(scope, tabbable = true) {
	$535772f9d2c1f38d$var$focusElement($535772f9d2c1f38d$var$getFirstInScope(scope, tabbable));
}
function $535772f9d2c1f38d$var$useAutoFocus(scopeRef, autoFocus) {
	const autoFocusRef = import_react.useRef(autoFocus);
	(0, import_react.useEffect)(() => {
		if (autoFocusRef.current) {
			$535772f9d2c1f38d$var$activeScope = scopeRef;
			if (!$535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0)), $535772f9d2c1f38d$var$activeScope.current) && scopeRef.current) $535772f9d2c1f38d$var$focusFirstInScope(scopeRef.current);
		}
		autoFocusRef.current = false;
	}, [scopeRef]);
}
function $535772f9d2c1f38d$var$useActiveScopeTracker(scopeRef, restore, contain) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (restore || contain) return;
		let scope = scopeRef.current;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		let onFocus = (e) => {
			let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			if ($535772f9d2c1f38d$var$isElementInScope(target, scopeRef.current)) $535772f9d2c1f38d$var$activeScope = scopeRef;
			else if (!$535772f9d2c1f38d$var$isElementInAnyScope(target)) $535772f9d2c1f38d$var$activeScope = null;
		};
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		return () => {
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
		};
	}, [
		scopeRef,
		restore,
		contain
	]);
}
function $535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef) {
	let scope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
	while (scope && scope.scopeRef !== scopeRef) {
		if (scope.nodeToRestore) return false;
		scope = scope.parent;
	}
	return scope?.scopeRef === scopeRef;
}
function $535772f9d2c1f38d$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
	const nodeToRestoreRef = (0, import_react.useRef)(typeof document !== "undefined" ? $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0)) : null);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let scope = scopeRef.current;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		if (!restoreFocus || contain) return;
		let onFocus = () => {
			if ((!$535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, scopeRef)) && $535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument), scopeRef.current)) $535772f9d2c1f38d$var$activeScope = scopeRef;
		};
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		return () => {
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
		};
	}, [scopeRef, contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
		if (!restoreFocus) return;
		let onKeyDown = (e) => {
			if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$535772f9d2c1f38d$var$shouldContainFocus(scopeRef) || e.isComposing) return;
			let focusedElement = ownerDocument.activeElement;
			if (!$535772f9d2c1f38d$var$isElementInChildScope(focusedElement, scopeRef) || !$535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef)) return;
			let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
			if (!treeNode) return;
			let nodeToRestore = treeNode.nodeToRestore;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ownerDocument.body, { tabbable: true });
			walker.currentNode = focusedElement;
			let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			if (!nodeToRestore || !nodeToRestore.isConnected || nodeToRestore === ownerDocument.body) {
				nodeToRestore = void 0;
				treeNode.nodeToRestore = void 0;
			}
			if ((!nextElement || !$535772f9d2c1f38d$var$isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
				walker.currentNode = nodeToRestore;
				do
					nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
				while ($535772f9d2c1f38d$var$isElementInChildScope(nextElement, scopeRef));
				e.preventDefault();
				e.stopPropagation();
				if (nextElement) $535772f9d2c1f38d$var$focusElement(nextElement, true);
				else if (!$535772f9d2c1f38d$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
				else $535772f9d2c1f38d$var$focusElement(nodeToRestore, true);
			}
		};
		if (!contain) ownerDocument.addEventListener("keydown", onKeyDown, true);
		return () => {
			if (!contain) ownerDocument.removeEventListener("keydown", onKeyDown, true);
		};
	}, [
		scopeRef,
		restoreFocus,
		contain
	]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
		if (!restoreFocus) return;
		let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
		if (!treeNode) return;
		treeNode.nodeToRestore = nodeToRestoreRef.current ?? void 0;
		return () => {
			let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
			if (!treeNode) return;
			let nodeToRestore = treeNode.nodeToRestore;
			let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			if (restoreFocus && nodeToRestore && (activeElement && $535772f9d2c1f38d$var$isElementInChildScope(activeElement, scopeRef) || activeElement === ownerDocument.body && $535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef))) {
				let clonedTree = $535772f9d2c1f38d$export$d06fae2ee68b101e.clone();
				requestAnimationFrame(() => {
					if (ownerDocument.activeElement === ownerDocument.body) {
						let treeNode = clonedTree.getTreeNode(scopeRef);
						while (treeNode) {
							if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
								$535772f9d2c1f38d$var$restoreFocusToElement(treeNode.nodeToRestore);
								return;
							}
							treeNode = treeNode.parent;
						}
						treeNode = clonedTree.getTreeNode(scopeRef);
						while (treeNode) {
							if (treeNode.scopeRef && treeNode.scopeRef.current && $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
								$535772f9d2c1f38d$var$restoreFocusToElement($535772f9d2c1f38d$var$getFirstInScope(treeNode.scopeRef.current, true));
								return;
							}
							treeNode = treeNode.parent;
						}
					}
				});
			}
		};
	}, [scopeRef, restoreFocus]);
}
function $535772f9d2c1f38d$var$restoreFocusToElement(node) {
	if (node.dispatchEvent(new CustomEvent($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, {
		bubbles: true,
		cancelable: true
	}))) $535772f9d2c1f38d$var$focusElement(node);
}
function $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, opts, scope) {
	let filter = opts?.tabbable ? $3b8b240c1bf84ab9$export$bebd5a1431fec25d : $3b8b240c1bf84ab9$export$4c063cf1350e6fed;
	let doc = $d447af545b77c9f1$export$b204af158042fbac(root?.nodeType === Node.ELEMENT_NODE ? root : null);
	let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root || doc, NodeFilter.SHOW_ELEMENT, { acceptNode(node) {
		if ($23f2114a1b82827e$export$4282f70798064fe0(opts?.from, node)) return NodeFilter.FILTER_REJECT;
		if (opts?.tabbable && node.tagName === "INPUT" && node.getAttribute("type") === "radio") {
			if (!$535772f9d2c1f38d$var$isTabbableRadio(node)) return NodeFilter.FILTER_REJECT;
			if (walker.currentNode.tagName === "INPUT" && walker.currentNode.type === "radio" && walker.currentNode.name === node.name) return NodeFilter.FILTER_REJECT;
		}
		if (filter(node) && (!scope || $535772f9d2c1f38d$var$isElementInScope(node, scope)) && (!opts?.accept || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
		return NodeFilter.FILTER_SKIP;
	} });
	if (opts?.from) walker.currentNode = opts.from;
	return walker;
}
var $535772f9d2c1f38d$var$Tree = class $535772f9d2c1f38d$var$Tree {
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map();
		this.root = new $535772f9d2c1f38d$var$TreeNode({ scopeRef: null });
		this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(data) {
		return this.fastMap.get(data);
	}
	addTreeNode(scopeRef, parent, nodeToRestore) {
		let parentNode = this.fastMap.get(parent ?? null);
		if (!parentNode) return;
		let node = new $535772f9d2c1f38d$var$TreeNode({ scopeRef });
		parentNode.addChild(node);
		node.parent = parentNode;
		this.fastMap.set(scopeRef, node);
		if (nodeToRestore) node.nodeToRestore = nodeToRestore;
	}
	addNode(node) {
		this.fastMap.set(node.scopeRef, node);
	}
	removeTreeNode(scopeRef) {
		if (scopeRef === null) return;
		let node = this.fastMap.get(scopeRef);
		if (!node) return;
		let parentNode = node.parent;
		for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $535772f9d2c1f38d$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
		let children = node.children;
		if (parentNode) {
			parentNode.removeChild(node);
			if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
		}
		this.fastMap.delete(node.scopeRef);
	}
	*traverse(node = this.root) {
		if (node.scopeRef != null) yield node;
		if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
	}
	clone() {
		let newTree = new $535772f9d2c1f38d$var$Tree();
		for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, node.parent?.scopeRef ?? null, node.nodeToRestore);
		return newTree;
	}
};
var $535772f9d2c1f38d$var$TreeNode = class {
	constructor(props) {
		this.children = /* @__PURE__ */ new Set();
		this.contain = false;
		this.scopeRef = props.scopeRef;
	}
	addChild(node) {
		this.children.add(node);
		node.parent = this;
	}
	removeChild(node) {
		this.children.delete(node);
		node.parent = void 0;
	}
};
var $535772f9d2c1f38d$export$d06fae2ee68b101e = new $535772f9d2c1f38d$var$Tree();
//#endregion
//#region node_modules/react-aria/dist/private/selection/utils.mjs
function $22bbea12c2567021$export$d3e3bd3e26688c04(e) {
	return $2add3ce32c6007eb$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $22bbea12c2567021$export$c3d8340acf92597f(collectionRef, key) {
	let selector = `[data-key="${CSS.escape(String(key))}"]`;
	let collection = collectionRef.current?.dataset.collection;
	if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
	return collectionRef.current?.querySelector(selector);
}
var $22bbea12c2567021$var$collectionMap = /* @__PURE__ */ new WeakMap();
function $22bbea12c2567021$export$881eb0d9f3605d9d(collection) {
	let id = $390e54f620492c70$export$f680877a34711e37();
	$22bbea12c2567021$var$collectionMap.set(collection, id);
	return id;
}
function $22bbea12c2567021$export$6aeb1680a0ae8741(collection) {
	return $22bbea12c2567021$var$collectionMap.get(collection);
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
/**
* Controls how long to wait before clearing the typeahead buffer.
*/ var $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $f5a4a9a3486154da$export$e32c88dfddc6e1d8(options) {
	let { keyboardDelegate, selectionManager, onTypeSelect } = options;
	let state = (0, import_react.useRef)({
		search: "",
		timeout: void 0
	});
	let onKeyDownCapture = (e) => {
		if (state.current.search.length > 0 && e.key === " ") {
			e.preventDefault();
			if (!("continuePropagation" in e) || "continuePropagation" in e && !e.isPropagationStopped()) e.stopPropagation();
			state.current.search += " ";
			if (keyboardDelegate.getKeyForSearch != null) {
				let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
				if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
				if (key != null) {
					selectionManager.setFocusedKey(key);
					if (onTypeSelect) onTypeSelect(key);
				}
			}
			clearTimeout(state.current.timeout);
			state.current.timeout = setTimeout(() => {
				state.current.search = "";
			}, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
		}
	};
	let onKeyDown = (e) => {
		let character = $f5a4a9a3486154da$var$getStringForKey(e.key);
		if (!character || e.ctrlKey || e.metaKey || e.altKey || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.current.search.length === 0 && character === " ") return;
		state.current.search += character;
		if (keyboardDelegate.getKeyForSearch != null) {
			let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
			if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
			if (key != null) {
				selectionManager.setFocusedKey(key);
				if (onTypeSelect) onTypeSelect(key);
				e.preventDefault();
				if (!("continuePropagation" in e)) e.stopPropagation();
			} else {
				state.current.search = "";
				clearTimeout(state.current.timeout);
				state.current.timeout = void 0;
				return;
			}
		}
		clearTimeout(state.current.timeout);
		state.current.timeout = setTimeout(() => {
			state.current.search = "";
		}, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
	};
	(0, import_react.useEffect)(() => {
		let timeout = state.current.timeout;
		return () => {
			clearTimeout(timeout);
		};
	}, [state]);
	return { typeSelectProps: {
		onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDownCapture : void 0,
		onKeyDown: keyboardDelegate.getKeyForSearch ? onKeyDown : void 0
	} };
}
function $f5a4a9a3486154da$var$getStringForKey(key) {
	if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
	return "";
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs
function $a475cdc2445827b5$export$72ef708ab07251f1(effect, dependencies) {
	const isInitialMount = (0, import_react.useRef)(true);
	const lastDeps = (0, import_react.useRef)(null);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		isInitialMount.current = true;
		return () => {
			isInitialMount.current = false;
		};
	}, []);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (isInitialMount.current) isInitialMount.current = false;
		else if (!lastDeps.current || dependencies.some((dep, i) => !Object.is(dep, lastDeps[i]))) effect();
		lastDeps.current = dependencies;
	}, dependencies);
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs
function $d667c2af82d35a98$export$d6daf82dcd84e87c(options) {
	let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, escapeKeyBehavior = "clearSelection", selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, scrollRef = ref, linkBehavior = "action", UNSTABLE_focusOnEntry } = options;
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
	let onKeyDown = (e) => {
		if (e.altKey && e.key === "Tab") e.preventDefault();
		if (!ref.current || !$23f2114a1b82827e$export$4282f70798064fe0(ref.current, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		const navigateToKey = (key, childFocus) => {
			if (key != null) {
				if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) {
					(0, import_react_dom.flushSync)(() => {
						manager.setFocusedKey(key, childFocus);
					});
					let item = $22bbea12c2567021$export$c3d8340acf92597f(ref, key);
					let itemProps = manager.getItemProps(key);
					if (item) router.open(item, e, itemProps.href, itemProps.routerOptions);
					return;
				}
				manager.setFocusedKey(key, childFocus);
				if (manager.isLink(key) && linkBehavior === "override") return;
				if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
				else if (selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
			}
		};
		switch (e.key) {
			case "ArrowDown":
				if (delegate.getKeyBelow) {
					let nextKey = manager.focusedKey != null ? delegate.getKeyBelow?.(manager.focusedKey) : delegate.getFirstKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "ArrowUp":
				if (delegate.getKeyAbove) {
					let nextKey = manager.focusedKey != null ? delegate.getKeyAbove?.(manager.focusedKey) : delegate.getLastKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "ArrowLeft":
				if (delegate.getKeyLeftOf) {
					let nextKey = manager.focusedKey != null ? delegate.getKeyLeftOf?.(manager.focusedKey) : delegate.getFirstKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getFirstKey?.(manager.focusedKey) : delegate.getLastKey?.(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
					}
				}
				break;
			case "ArrowRight":
				if (delegate.getKeyRightOf) {
					let nextKey = manager.focusedKey != null ? delegate.getKeyRightOf?.(manager.focusedKey) : delegate.getFirstKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getLastKey?.(manager.focusedKey) : delegate.getFirstKey?.(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
					}
				}
				break;
			case "Home":
				if (delegate.getFirstKey) {
					if (manager.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let firstKey = delegate.getFirstKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
					manager.setFocusedKey(firstKey);
					if (firstKey != null) {
						if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
						else if (selectOnFocus) manager.replaceSelection(firstKey);
					}
				}
				break;
			case "End":
				if (delegate.getLastKey) {
					if (manager.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let lastKey = delegate.getLastKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
					manager.setFocusedKey(lastKey);
					if (lastKey != null) {
						if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
						else if (selectOnFocus) manager.replaceSelection(lastKey);
					}
				}
				break;
			case "PageDown":
				if (delegate.getKeyPageBelow && manager.focusedKey != null) {
					let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "PageUp":
				if (delegate.getKeyPageAbove && manager.focusedKey != null) {
					let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "a":
				if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
					e.preventDefault();
					manager.selectAll();
				}
				break;
			case "Escape":
				if (escapeKeyBehavior === "clearSelection" && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
					e.stopPropagation();
					e.preventDefault();
					manager.clearSelection();
				}
				break;
			case "Tab": if (!allowsTabNavigation) {
				if (e.shiftKey) ref.current.focus();
				else {
					let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ref.current, { tabbable: true });
					let next = void 0;
					let last;
					do {
						last = walker.lastChild();
						if (last) next = last;
					} while (last);
					let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
					if (next && (!$23f2114a1b82827e$export$b4f377a2b6254582(next) || activeElement && !$3b8b240c1bf84ab9$export$bebd5a1431fec25d(activeElement))) $1969ac565cfec8d0$export$de79e2c695e052f3(next);
				}
				break;
			}
		}
	};
	let scrollPos = (0, import_react.useRef)({
		top: 0,
		left: 0
	});
	$600b3cf69ae46262$export$90fc3a17d93f704c(scrollRef, "scroll", () => {
		scrollPos.current = {
			top: scrollRef.current?.scrollTop ?? 0,
			left: scrollRef.current?.scrollLeft ?? 0
		};
	});
	let onFocus = (e) => {
		if (manager.isFocused) {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) manager.setFocused(false);
			return;
		}
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
		manager.setFocused(true);
		let navigateToKey = (key) => {
			if (key != null) {
				manager.setFocusedKey(key);
				if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
			}
		};
		if (UNSTABLE_focusOnEntry && (modality === "keyboard" || modality === "virtual")) navigateToKey(UNSTABLE_focusOnEntry === "first" ? delegate.getFirstKey?.() : delegate.getLastKey?.());
		else if (manager.focusedKey == null) {
			let relatedTarget = e.relatedTarget;
			if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey(manager.lastSelectedKey ?? delegate.getLastKey?.());
			else navigateToKey(manager.firstSelectedKey ?? delegate.getFirstKey?.());
		} else if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollPos.current.top;
			scrollRef.current.scrollLeft = scrollPos.current.left;
		}
		if (manager.focusedKey != null && scrollRef.current) {
			let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (element instanceof HTMLElement) {
				if (!$23f2114a1b82827e$export$b4f377a2b6254582(element) && !shouldUseVirtualFocus) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
				if (modality === "keyboard" || UNSTABLE_focusOnEntry && modality === "virtual") $51a3e22a5186a962$export$c826860796309d1b(element, { containingElement: ref.current });
			}
		}
	};
	let onBlur = (e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
	};
	let shouldVirtualFocusFirst = (0, import_react.useRef)(false);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$831c820ad60f9d12, !shouldUseVirtualFocus ? void 0 : (e) => {
		let { detail } = e;
		e.stopPropagation();
		manager.setFocused(true);
		if (detail?.focusStrategy === "first") shouldVirtualFocusFirst.current = true;
	});
	let firstKey = delegate.getFirstKey?.() ?? null;
	$a475cdc2445827b5$export$72ef708ab07251f1(() => {
		if (shouldVirtualFocusFirst.current) if (firstKey == null) {
			let previousActiveElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
			$b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
			$b72f3f7b3b5f42c6$export$2b35b76d2e30e129(previousActiveElement, null);
			if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
		} else {
			manager.setFocusedKey(firstKey);
			shouldVirtualFocusFirst.current = false;
		}
	}, [firstKey, manager.collection.size]);
	$a475cdc2445827b5$export$72ef708ab07251f1(() => {
		if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
	}, [manager.focusedKey]);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$447a38995de2c711, !shouldUseVirtualFocus ? void 0 : (e) => {
		e.stopPropagation();
		manager.setFocused(false);
		if (e.detail?.clearFocusKey) manager.setFocusedKey(null);
	});
	const autoFocusRef = (0, import_react.useRef)(autoFocus);
	const didAutoFocusRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (autoFocusRef.current) {
			let focusedKey = null;
			if (autoFocus === "first") focusedKey = delegate.getFirstKey?.() ?? null;
			if (autoFocus === "last") focusedKey = delegate.getLastKey?.() ?? null;
			let selectedKeys = manager.selectedKeys;
			if (selectedKeys.size) {
				for (let key of selectedKeys) if (manager.canSelectItem(key)) {
					focusedKey = key;
					break;
				}
			}
			manager.setFocused(true);
			manager.setFocusedKey(focusedKey);
			if (focusedKey == null && !shouldUseVirtualFocus && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
			if (manager.collection.size > 0) {
				autoFocusRef.current = false;
				didAutoFocusRef.current = true;
			}
		}
	});
	let lastFocusedKey = (0, import_react.useRef)(manager.focusedKey);
	let raf = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
			let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
			let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (!(element instanceof HTMLElement)) return;
			if (modality === "keyboard" || didAutoFocusRef.current) {
				if (raf.current) cancelAnimationFrame(raf.current);
				raf.current = requestAnimationFrame(() => {
					if (scrollRef.current) {
						$51a3e22a5186a962$export$53a0910f038337bd(scrollRef.current, element);
						if (modality !== "virtual") $51a3e22a5186a962$export$c826860796309d1b(element, { containingElement: ref.current });
					}
				});
			}
		}
		if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
		lastFocusedKey.current = manager.focusedKey;
		didAutoFocusRef.current = false;
	});
	(0, import_react.useEffect)(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault();
		manager.setFocused(true);
	});
	let handlers = {
		onKeyDown,
		onFocus,
		onBlur,
		onMouseDown(e) {
			if (scrollRef.current === $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) e.preventDefault();
		}
	};
	let { typeSelectProps } = $f5a4a9a3486154da$export$e32c88dfddc6e1d8({
		keyboardDelegate: delegate,
		selectionManager: manager
	});
	if (!disallowTypeAhead) handlers = $bbaa08b3cd72f041$export$9d1611c77c2fe928(typeSelectProps, handlers);
	let tabIndex = void 0;
	if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
	let collectionId = $22bbea12c2567021$export$881eb0d9f3605d9d(manager.collection);
	return { collectionProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(handlers, {
		tabIndex,
		"data-collection": collectionId
	}) };
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/DOMLayoutDelegate.mjs
var $a83747cc3f035330$export$8f5ed9ff9f511381 = class {
	constructor(ref) {
		this.ref = ref;
	}
	getItemRect(key) {
		let container = this.ref.current;
		if (!container) return null;
		let item = key != null ? $22bbea12c2567021$export$c3d8340acf92597f(this.ref, key) : null;
		if (!item) return null;
		let containerRect = container.getBoundingClientRect();
		let itemRect = item.getBoundingClientRect();
		return {
			x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
			y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
			width: itemRect.width,
			height: itemRect.height
		};
	}
	getContentSize() {
		let container = this.ref.current;
		return {
			width: container?.scrollWidth ?? 0,
			height: container?.scrollHeight ?? 0
		};
	}
	getVisibleRect() {
		let container = this.ref.current;
		return {
			x: container?.scrollLeft ?? 0,
			y: container?.scrollTop ?? 0,
			width: container?.clientWidth ?? 0,
			height: container?.clientHeight ?? 0
		};
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs
var $ae8f8d98b2b18f2f$export$a05409b8bb224a5a = class {
	constructor(...args) {
		if (args.length === 1) {
			let opts = args[0];
			this.collection = opts.collection;
			this.ref = opts.ref;
			this.collator = opts.collator;
			this.disabledKeys = opts.disabledKeys || /* @__PURE__ */ new Set();
			this.disabledBehavior = opts.disabledBehavior || "all";
			this.orientation = opts.orientation || "vertical";
			this.direction = opts.direction;
			this.layout = opts.layout || "stack";
			this.layoutDelegate = opts.layoutDelegate || new $a83747cc3f035330$export$8f5ed9ff9f511381(opts.ref);
		} else {
			this.collection = args[0];
			this.disabledKeys = args[1];
			this.ref = args[2];
			this.collator = args[3];
			this.layout = "stack";
			this.orientation = "vertical";
			this.disabledBehavior = "all";
			this.layoutDelegate = new $a83747cc3f035330$export$8f5ed9ff9f511381(this.ref);
		}
		if (this.layout === "stack" && this.orientation === "vertical") {
			this.getKeyLeftOf = void 0;
			this.getKeyRightOf = void 0;
		}
	}
	isDisabled(item) {
		return this.disabledBehavior === "all" && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== "selection";
	}
	findNextNonDisabled(key, getNext, includeDisabled = false) {
		let nextKey = key;
		while (nextKey != null) {
			let item = this.collection.getItem(nextKey);
			if (item?.type === "item" && (includeDisabled || !this.isDisabled(item))) return nextKey;
			nextKey = getNext(nextKey);
		}
		return null;
	}
	getNextKey(key, options) {
		let nextKey = key;
		nextKey = this.collection.getKeyAfter(nextKey);
		return this.findNextNonDisabled(nextKey, (key) => this.collection.getKeyAfter(key), options?.includeDisabled);
	}
	getPreviousKey(key, options) {
		let nextKey = key;
		nextKey = this.collection.getKeyBefore(nextKey);
		return this.findNextNonDisabled(nextKey, (key) => this.collection.getKeyBefore(key), options?.includeDisabled);
	}
	findKey(key, nextKey, shouldSkip) {
		let tempKey = key;
		let itemRect = this.layoutDelegate.getItemRect(tempKey);
		if (!itemRect || tempKey == null) return null;
		let prevRect = itemRect;
		do {
			tempKey = nextKey(tempKey);
			if (tempKey == null) break;
			itemRect = this.layoutDelegate.getItemRect(tempKey);
		} while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
		return tempKey;
	}
	isSameRow(prevRect, itemRect) {
		return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
	}
	isSameColumn(prevRect, itemRect) {
		return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
	}
	isReversed(key) {
		let nextKey = this.getNextKey(key);
		let currentEl = $22bbea12c2567021$export$c3d8340acf92597f(this.ref, key);
		if (nextKey != null) {
			let nextEl = $22bbea12c2567021$export$c3d8340acf92597f(this.ref, nextKey);
			if (!currentEl || !nextEl) return false;
			return currentEl.getBoundingClientRect().top > nextEl.getBoundingClientRect().top;
		}
		let prevKey = this.getPreviousKey(key);
		if (prevKey != null) {
			let prevEl = $22bbea12c2567021$export$c3d8340acf92597f(this.ref, prevKey);
			if (!currentEl || !prevEl) return false;
			return prevEl.getBoundingClientRect().top > currentEl.getBoundingClientRect().top;
		}
		return false;
	}
	getKeyBelow(key, options) {
		if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key) => this.getNextKey(key, options), this.isSameRow);
		else if (this.orientation === "vertical") return this.isReversed(key) ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
		else return this.getNextKey(key, options);
	}
	getKeyAbove(key, options) {
		if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key) => this.getPreviousKey(key, options), this.isSameRow);
		else if (this.orientation === "vertical") return this.isReversed(key) ? this.getNextKey(key, options) : this.getPreviousKey(key, options);
		else return this.getPreviousKey(key, options);
	}
	getNextColumn(key, right, options) {
		return right ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
	}
	getKeyRightOf(key, options) {
		let layoutDelegateMethod = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
		if (this.layoutDelegate[layoutDelegateMethod]) {
			key = this.layoutDelegate[layoutDelegateMethod](key);
			return this.findNextNonDisabled(key, (key) => this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
		}
		if (this.layout === "grid") if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl", options);
		else return this.findKey(key, (key) => this.getNextColumn(key, this.direction === "rtl", options), this.isSameColumn);
		else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl", options);
		return null;
	}
	getKeyLeftOf(key, options) {
		let layoutDelegateMethod = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
		if (this.layoutDelegate[layoutDelegateMethod]) {
			key = this.layoutDelegate[layoutDelegateMethod](key);
			return this.findNextNonDisabled(key, (key) => this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
		}
		if (this.layout === "grid") if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr", options);
		else return this.findKey(key, (key) => this.getNextColumn(key, this.direction === "ltr", options), this.isSameColumn);
		else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr", options);
		return null;
	}
	getFirstKey() {
		let key = this.collection.getFirstKey();
		return this.findNextNonDisabled(key, (key) => this.collection.getKeyAfter(key));
	}
	getLastKey() {
		let key = this.collection.getLastKey();
		return this.findNextNonDisabled(key, (key) => this.collection.getKeyBefore(key));
	}
	getKeyPageAbove(key) {
		let menu = this.ref.current;
		let itemRect = this.layoutDelegate.getItemRect(key);
		if (!itemRect) return null;
		let reversed = this.isReversed(key);
		if (menu && !$901761b40e390936$export$2bb74740c4e19def(menu)) return this.getFirstKey();
		let nextKey = key;
		if (this.orientation === "horizontal") {
			let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
			while (itemRect && itemRect.x > pageX && nextKey != null) {
				nextKey = this.getKeyAbove(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		} else {
			let visibleRect = this.layoutDelegate.getVisibleRect();
			let pageY = reversed ? itemRect.y - visibleRect.height : Math.max(0, itemRect.y + itemRect.height - visibleRect.height);
			while (itemRect && itemRect.y > pageY && nextKey != null) {
				nextKey = this.getKeyAbove(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		}
		return nextKey ?? (reversed ? this.getLastKey() : this.getFirstKey());
	}
	getKeyPageBelow(key) {
		let menu = this.ref.current;
		let itemRect = this.layoutDelegate.getItemRect(key);
		if (!itemRect) return null;
		let reversed = this.isReversed(key);
		if (menu && !$901761b40e390936$export$2bb74740c4e19def(menu)) return this.getLastKey();
		let nextKey = key;
		if (this.orientation === "horizontal") {
			let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.x - itemRect.width + this.layoutDelegate.getVisibleRect().width);
			while (itemRect && itemRect.x < pageX && nextKey != null) {
				nextKey = this.getKeyBelow(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		} else {
			let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
			while (itemRect && itemRect.y < pageY && nextKey != null) {
				nextKey = this.getKeyBelow(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		}
		return nextKey ?? (reversed ? this.getFirstKey() : this.getLastKey());
	}
	getKeyForSearch(search, fromKey) {
		if (!this.collator) return null;
		let collection = this.collection;
		let key = fromKey || this.getFirstKey();
		while (key != null) {
			let item = collection.getItem(key);
			if (!item) return null;
			let substring = item.textValue.slice(0, search.length);
			if (item.textValue && this.collator.compare(substring, search) === 0) return key;
			key = this.getNextKey(key);
		}
		return null;
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useCollator.mjs
var $673d46fce3e5717d$var$cache = /* @__PURE__ */ new Map();
function $673d46fce3e5717d$export$a16aca283550c30d(options) {
	let { locale } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	if ($673d46fce3e5717d$var$cache.has(cacheKey)) return $673d46fce3e5717d$var$cache.get(cacheKey);
	let formatter = new Intl.Collator(locale, options);
	$673d46fce3e5717d$var$cache.set(cacheKey, formatter);
	return formatter;
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableList.mjs
function $64903b4b31b6bb2a$export$b95089534ab7c1fd(props) {
	let { selectionManager, collection, disabledKeys, ref, keyboardDelegate, layoutDelegate, orientation } = props;
	let collator = $673d46fce3e5717d$export$a16aca283550c30d({
		usage: "search",
		sensitivity: "base"
	});
	let disabledBehavior = selectionManager.disabledBehavior;
	let delegate = (0, import_react.useMemo)(() => keyboardDelegate || new $ae8f8d98b2b18f2f$export$a05409b8bb224a5a({
		collection,
		disabledKeys,
		disabledBehavior,
		ref,
		collator,
		layoutDelegate,
		orientation
	}), [
		keyboardDelegate,
		layoutDelegate,
		collection,
		disabledKeys,
		ref,
		collator,
		disabledBehavior,
		orientation
	]);
	let { collectionProps } = $d667c2af82d35a98$export$d6daf82dcd84e87c({
		...props,
		ref,
		selectionManager,
		keyboardDelegate: delegate
	});
	return { listProps: collectionProps };
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useLongPress.mjs
var $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD = 500;
function $7b01448eaad0fe7c$export$c24ed0104d07eab9(props) {
	let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
	const timeRef = (0, import_react.useRef)(void 0);
	let { addGlobalListener, removeGlobalListener } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let { pressProps } = $d27d541f9569d26d$export$45712eceda6fad21({
		isDisabled,
		onPressStart(e) {
			e.continuePropagation();
			if (e.pointerType === "mouse" || e.pointerType === "touch") {
				if (onLongPressStart) onLongPressStart({
					...e,
					type: "longpressstart"
				});
				timeRef.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: true }));
					if ($d447af545b77c9f1$export$b204af158042fbac(e.target).activeElement !== e.target) $1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
					if (onLongPress) onLongPress({
						...e,
						type: "longpress"
					});
					timeRef.current = void 0;
				}, threshold);
				if (e.pointerType === "touch") {
					let onContextMenu = (e) => {
						e.preventDefault();
					};
					let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(e.target);
					addGlobalListener(e.target, "contextmenu", onContextMenu, { once: true });
					addGlobalListener(ownerWindow, "pointerup", () => {
						setTimeout(() => {
							removeGlobalListener(e.target, "contextmenu", onContextMenu);
						}, 30);
					}, { once: true });
				}
			}
		},
		onPressEnd(e) {
			if (timeRef.current) clearTimeout(timeRef.current);
			if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
				...e,
				type: "longpressend"
			});
		}
	});
	return { longPressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(pressProps, $121970af65029459$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : void 0)) };
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
function $f6ba6936bfd098a0$export$ecf600387e221c37(options) {
	let { id, selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
	let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
	id = $390e54f620492c70$export$f680877a34711e37(id);
	let onSelect = (e) => {
		if (e.pointerType === "keyboard" && $22bbea12c2567021$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
		else {
			if (manager.selectionMode === "none") return;
			if (manager.isLink(key)) {
				if (linkBehavior === "selection" && ref.current) {
					let itemProps = manager.getItemProps(key);
					router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
					manager.setSelectedKeys(manager.selectedKeys);
					return;
				} else if (linkBehavior === "override" || linkBehavior === "none") return;
			}
			if (manager.selectionMode === "single") if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
			else manager.replaceSelection(key);
			else if (e && e.shiftKey) manager.extendSelection(key);
			else if (manager.selectionBehavior === "toggle" || e && ($bb39c0fc1c19b34c$export$16792effe837dba3(e) || e.pointerType === "touch" || e.pointerType === "virtual")) manager.toggleSelection(key);
			else manager.replaceSelection(key);
		}
	};
	(0, import_react.useEffect)(() => {
		if (key === manager.focusedKey && manager.isFocused) if (!shouldUseVirtualFocus) {
			if (focus) focus();
			else if ($23f2114a1b82827e$export$cd4e5573fbe2b576() !== ref.current && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
		} else $b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
	}, [
		ref,
		key,
		manager.focusedKey,
		manager.childFocusStrategy,
		manager.isFocused,
		shouldUseVirtualFocus
	]);
	isDisabled = isDisabled || manager.isDisabled(key);
	let itemProps = {};
	if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
		tabIndex: key === manager.focusedKey ? 0 : -1,
		onFocus(e) {
			if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ref.current) manager.setFocusedKey(key);
		}
	};
	else if (isDisabled) itemProps.onMouseDown = (e) => {
		e.preventDefault();
	};
	(0, import_react.useEffect)(() => {
		if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
	}, [
		manager,
		isDisabled,
		key
	]);
	let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
	let isActionOverride = onAction && options["UNSTABLE_itemBehavior"] === "action";
	let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
	let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
	let allowsActions = (onAction || hasLinkAction) && !isDisabled;
	let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
	let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
	let hasAction = hasPrimaryAction || hasSecondaryAction;
	let modality = (0, import_react.useRef)(null);
	let longPressEnabled = hasAction && allowsSelection;
	let longPressEnabledOnPressStart = (0, import_react.useRef)(false);
	let hadPrimaryActionOnPressStart = (0, import_react.useRef)(false);
	let collectionItemProps = manager.getItemProps(key);
	let performAction = (e) => {
		if (onAction) {
			onAction();
			ref.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: true }));
		}
		if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
	};
	let itemPressProps = { ref };
	if (shouldSelectOnPressUp) {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			if (e.pointerType === "keyboard" && (!hasAction || $f6ba6936bfd098a0$var$isSelectionKey(e.key))) onSelect(e);
		};
		if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e) => {
			if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
				if (e.pointerType === "keyboard" && !$f6ba6936bfd098a0$var$isActionKey(e.key)) return;
				performAction(e);
			} else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
		};
		else {
			itemPressProps.onPressUp = hasPrimaryAction ? void 0 : (e) => {
				if (e.pointerType === "mouse" && allowsSelection) onSelect(e);
			};
			itemPressProps.onPress = hasPrimaryAction ? performAction : (e) => {
				if (e.pointerType !== "keyboard" && e.pointerType !== "mouse" && allowsSelection) onSelect(e);
			};
		}
	} else {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			hadPrimaryActionOnPressStart.current = hasPrimaryAction;
			if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $f6ba6936bfd098a0$var$isSelectionKey(e.key)))) onSelect(e);
		};
		itemPressProps.onPress = (e) => {
			if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $f6ba6936bfd098a0$var$isActionKey(e.key) || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
				if (hasAction) performAction(e);
				else if (allowsSelection) onSelect(e);
			}
		};
	}
	itemProps["data-collection"] = $22bbea12c2567021$export$6aeb1680a0ae8741(manager.collection);
	itemProps["data-key"] = key;
	itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
	if (shouldUseVirtualFocus) itemPressProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(itemPressProps, {
		onPressStart(e) {
			if (e.pointerType !== "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		},
		onPress(e) {
			if (e.pointerType === "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		}
	});
	if (collectionItemProps) {
		for (let key of [
			"onPressStart",
			"onPressEnd",
			"onPressChange",
			"onPress",
			"onPressUp",
			"onClick"
		]) if (collectionItemProps[key]) itemPressProps[key] = $a4e76a5424781910$export$e08e3b67e392101e(itemPressProps[key], collectionItemProps[key]);
	}
	let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21(itemPressProps);
	let onDoubleClick = hasSecondaryAction ? (e) => {
		if (modality.current === "mouse") {
			e.stopPropagation();
			e.preventDefault();
			performAction(e);
		}
	} : void 0;
	let { longPressProps } = $7b01448eaad0fe7c$export$c24ed0104d07eab9({
		isDisabled: !longPressEnabled,
		onLongPress(e) {
			if (e.pointerType === "touch") {
				onSelect(e);
				manager.setSelectionBehavior("toggle");
			}
		}
	});
	let onDragStartCapture = (e) => {
		if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
	};
	let onClick = linkBehavior !== "none" && manager.isLink(key) ? (e) => {
		if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) e.preventDefault();
	} : void 0;
	return {
		itemProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
			onDoubleClick,
			onDragStartCapture,
			onClick,
			id
		}, shouldUseVirtualFocus ? { onMouseDown: (e) => e.preventDefault() } : void 0),
		isPressed,
		isSelected: manager.isSelected(key),
		isFocused: manager.isFocused && manager.focusedKey === key,
		isDisabled,
		allowsSelection,
		hasAction
	};
}
function $f6ba6936bfd098a0$var$isActionKey(key) {
	return key === "Enter";
}
function $f6ba6936bfd098a0$var$isSelectionKey(key) {
	return key === " ";
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/getChildNodes.mjs
function $cd5ea4b915021f1d$export$1005530eda016c13(node, collection) {
	if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
	return node.childNodes;
}
function $cd5ea4b915021f1d$export$fbdeaa6a76694f71(iterable) {
	return $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, 0);
}
function $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, index) {
	if (index < 0) return void 0;
	let i = 0;
	for (let item of iterable) {
		if (i === index) return item;
		i++;
	}
}
function $cd5ea4b915021f1d$export$8c434b3a7a4dad6(collection, a, b) {
	if (a.parentKey === b.parentKey) return a.index - b.index;
	let aAncestors = [...$cd5ea4b915021f1d$var$getAncestors(collection, a), a];
	let bAncestors = [...$cd5ea4b915021f1d$var$getAncestors(collection, b), b];
	let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i) => a !== bAncestors[i]);
	if (firstNonMatchingAncestor !== -1) {
		a = aAncestors[firstNonMatchingAncestor];
		b = bAncestors[firstNonMatchingAncestor];
		return a.index - b.index;
	}
	if (aAncestors.findIndex((node) => node === b) >= 0) return 1;
	else if (bAncestors.findIndex((node) => node === a) >= 0) return -1;
	return -1;
}
function $cd5ea4b915021f1d$var$getAncestors(collection, node) {
	let parents = [];
	let currNode = node;
	while (currNode?.parentKey != null) {
		currNode = collection.getItem(currNode.parentKey);
		if (currNode) parents.unshift(currNode);
	}
	return parents;
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/getItemCount.mjs
var $2efe10d3f1f9e31e$var$cache = /* @__PURE__ */ new WeakMap();
function $2efe10d3f1f9e31e$export$77d5aafae4e095b2(collection) {
	let count = $2efe10d3f1f9e31e$var$cache.get(collection);
	if (count != null) return count;
	let counter = 0;
	let countItems = (items) => {
		for (let item of items) if (item.type === "section") countItems($cd5ea4b915021f1d$export$1005530eda016c13(item, collection));
		else if (item.type === "item") counter++;
	};
	countItems(collection);
	$2efe10d3f1f9e31e$var$cache.set(collection, counter);
	return counter;
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/ariaHideOutside.mjs
var $58196c8d6a1f38fc$var$supportsInert = typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
function $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node) {
	return node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer !== void 0;
}
var $58196c8d6a1f38fc$var$refCountMap = /* @__PURE__ */ new WeakMap();
var $58196c8d6a1f38fc$var$observerStack = [];
function $58196c8d6a1f38fc$export$1c3ebcada18427bf(targets, options) {
	let windowObj = $d447af545b77c9f1$export$f21a1ffae260145a(targets?.[0]);
	let opts = options instanceof windowObj.Element ? { root: options } : options;
	let root = opts?.root ?? document.body;
	let shouldUseInert = opts?.shouldUseInert && $58196c8d6a1f38fc$var$supportsInert;
	let visibleNodes = new Set(targets);
	let hiddenNodes = /* @__PURE__ */ new Set();
	let getHidden = (element) => {
		return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute("aria-hidden") === "true";
	};
	let setHidden = (element, hidden) => {
		if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
		else if (hidden) element.setAttribute("aria-hidden", "true");
		else {
			element.removeAttribute("aria-hidden");
			if (element instanceof windowObj.HTMLElement) element.inert = false;
		}
	};
	let shadowRootsToWatch = /* @__PURE__ */ new Set();
	if ($6a20a7989e6c817a$export$98658e8c59125e6a()) for (let target of targets) {
		let node = target;
		while (node && node !== root) {
			let root = node.getRootNode();
			if ("shadowRoot" in root) shadowRootsToWatch.add(root.shadowRoot);
			node = root.parentNode;
		}
	}
	let walk = (root) => {
		for (let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) visibleNodes.add(element);
		let acceptNode = (node) => {
			if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (let target of visibleNodes) if ($23f2114a1b82827e$export$4282f70798064fe0(node, target)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		};
		let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6($d447af545b77c9f1$export$b204af158042fbac(root), root, NodeFilter.SHOW_ELEMENT, { acceptNode });
		let acceptRoot = acceptNode(root);
		if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
		if (acceptRoot !== NodeFilter.FILTER_REJECT) {
			let node = walker.nextNode();
			while (node != null) {
				hide(node);
				node = walker.nextNode();
			}
		}
	};
	let hide = (node) => {
		let refCount = $58196c8d6a1f38fc$var$refCountMap.get(node) ?? 0;
		if (getHidden(node) && refCount === 0) return;
		if (refCount === 0) setHidden(node, true);
		hiddenNodes.add(node);
		$58196c8d6a1f38fc$var$refCountMap.set(node, refCount + 1);
	};
	if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].disconnect();
	walk(root);
	let observer = new MutationObserver((changes) => {
		for (let change of changes) {
			if (change.type !== "childList") continue;
			if (change.target.isConnected && ![...visibleNodes, ...hiddenNodes].some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, change.target))) {
				for (let node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
				else if (node instanceof Element) walk(node);
			}
			if ($6a20a7989e6c817a$export$98658e8c59125e6a()) {
				for (let shadowRoot of shadowRootsToWatch) if (!shadowRoot.isConnected) {
					observer.disconnect();
					break;
				}
			}
		}
	});
	observer.observe(root, {
		childList: true,
		subtree: true
	});
	let shadowObservers = /* @__PURE__ */ new Set();
	if ($6a20a7989e6c817a$export$98658e8c59125e6a()) for (let shadowRoot of shadowRootsToWatch) {
		let shadowObserver = new MutationObserver((changes) => {
			for (let change of changes) {
				if (change.type !== "childList") continue;
				if (change.target.isConnected && ![...visibleNodes, ...hiddenNodes].some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, change.target))) {
					for (let node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
					else if (node instanceof Element) walk(node);
				}
				if ($6a20a7989e6c817a$export$98658e8c59125e6a()) {
					for (let shadowRoot of shadowRootsToWatch) if (!shadowRoot.isConnected) {
						observer.disconnect();
						break;
					}
				}
			}
		});
		shadowObserver.observe(shadowRoot, {
			childList: true,
			subtree: true
		});
		shadowObservers.add(shadowObserver);
	}
	let observerWrapper = {
		visibleNodes,
		hiddenNodes,
		observe() {
			observer.observe(root, {
				childList: true,
				subtree: true
			});
		},
		disconnect() {
			observer.disconnect();
		}
	};
	$58196c8d6a1f38fc$var$observerStack.push(observerWrapper);
	return () => {
		observer.disconnect();
		if ($6a20a7989e6c817a$export$98658e8c59125e6a()) for (let shadowObserver of shadowObservers) shadowObserver.disconnect();
		for (let node of hiddenNodes) {
			let count = $58196c8d6a1f38fc$var$refCountMap.get(node);
			if (count == null) continue;
			if (count === 1) {
				setHidden(node, false);
				$58196c8d6a1f38fc$var$refCountMap.delete(node);
			} else $58196c8d6a1f38fc$var$refCountMap.set(node, count - 1);
		}
		if (observerWrapper === $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1]) {
			$58196c8d6a1f38fc$var$observerStack.pop();
			if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].observe();
		} else $58196c8d6a1f38fc$var$observerStack.splice($58196c8d6a1f38fc$var$observerStack.indexOf(observerWrapper), 1);
	};
}
function $58196c8d6a1f38fc$export$1020fa7f77e17884(element) {
	let observer = $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1];
	if (observer && !observer.visibleNodes.has(element)) {
		observer.visibleNodes.add(element);
		return () => {
			observer.visibleNodes.delete(element);
		};
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/calculatePosition.mjs
var $954926fb6168ae2a$var$AXIS = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
};
var $954926fb6168ae2a$var$FLIPPED_DIRECTION = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
var $954926fb6168ae2a$var$CROSS_AXIS = {
	top: "left",
	left: "top"
};
var $954926fb6168ae2a$var$AXIS_SIZE = {
	top: "height",
	left: "width"
};
var $954926fb6168ae2a$var$TOTAL_SIZE = {
	width: "totalWidth",
	height: "totalHeight"
};
var $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE = {};
var $954926fb6168ae2a$var$getVisualViewport = () => typeof document !== "undefined" ? window.visualViewport : null;
function $954926fb6168ae2a$var$getContainerDimensions(containerNode, visualViewport) {
	let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
	let scroll = {};
	let isPinchZoomedIn = (visualViewport?.scale ?? 1) > 1;
	if (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") {
		let documentElement = document.documentElement;
		totalWidth = documentElement.clientWidth;
		totalHeight = documentElement.clientHeight;
		width = visualViewport?.width ?? totalWidth;
		height = visualViewport?.height ?? totalHeight;
		scroll.top = documentElement.scrollTop || containerNode.scrollTop;
		scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
		if (visualViewport) {
			top = visualViewport.offsetTop;
			left = visualViewport.offsetLeft;
		}
	} else {
		({width: width, height: height, top: top, left: left} = $954926fb6168ae2a$var$getOffset(containerNode, false));
		scroll.top = containerNode.scrollTop;
		scroll.left = containerNode.scrollLeft;
		totalWidth = width;
		totalHeight = height;
	}
	if ($2add3ce32c6007eb$export$78551043582a6a98() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
		scroll.top = 0;
		scroll.left = 0;
		top = visualViewport?.pageTop ?? 0;
		left = visualViewport?.pageLeft ?? 0;
	}
	return {
		width,
		height,
		totalWidth,
		totalHeight,
		scroll,
		top,
		left
	};
}
function $954926fb6168ae2a$var$getScroll(node) {
	return {
		top: node.scrollTop,
		left: node.scrollLeft,
		width: node.scrollWidth,
		height: node.scrollHeight
	};
}
function $954926fb6168ae2a$var$getDelta(axis, offset, size, boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary) {
	let containerScroll = containerDimensions.scroll[axis] ?? 0;
	let boundarySize = boundaryDimensions[$954926fb6168ae2a$var$AXIS_SIZE[axis]];
	let boundaryStartEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + padding;
	let boundaryEndEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + boundarySize - padding;
	let startEdgeOffset = offset - containerScroll + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
	let endEdgeOffset = offset - containerScroll + size + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
	if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
	else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
	else return 0;
}
function $954926fb6168ae2a$var$getMargins(node) {
	let style = window.getComputedStyle(node);
	return {
		top: parseInt(style.marginTop, 10) || 0,
		bottom: parseInt(style.marginBottom, 10) || 0,
		left: parseInt(style.marginLeft, 10) || 0,
		right: parseInt(style.marginRight, 10) || 0
	};
}
function $954926fb6168ae2a$var$parsePlacement(input) {
	if ($954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input]) return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
	let [placement, crossPlacement] = input.split(" ");
	let axis = $954926fb6168ae2a$var$AXIS[placement] || "right";
	let crossAxis = $954926fb6168ae2a$var$CROSS_AXIS[axis];
	if (!$954926fb6168ae2a$var$AXIS[crossPlacement]) crossPlacement = "center";
	let size = $954926fb6168ae2a$var$AXIS_SIZE[axis];
	let crossSize = $954926fb6168ae2a$var$AXIS_SIZE[crossAxis];
	$954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input] = {
		placement,
		crossPlacement,
		axis,
		crossAxis,
		size,
		crossSize
	};
	return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
}
function $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions) {
	let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
	let position = {};
	position[crossAxis] = childOffset[crossAxis] ?? 0;
	if (crossPlacement === "center") position[crossAxis] += ((childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0)) / 2;
	else if (crossPlacement !== crossAxis) position[crossAxis] += (childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0);
	position[crossAxis] += crossOffset;
	const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
	const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
	position[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(position[crossAxis], minPosition, maxPosition);
	if (placement === axis) {
		let containerHeight = isContainerPositioned ? containerDimensions[size] : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE[size]];
		position[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
	} else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
	return position;
}
function $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport) {
	let overlayTop = (position.top != null ? position.top : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE.height] - (position.bottom ?? 0) - overlayHeight) - (containerDimensions.scroll.top ?? 0);
	let boundaryToContainerTransformOffset = isContainerDescendentOfBoundary ? containerOffsetWithBoundary.top : 0;
	let boundingRect = {
		top: Math.max(boundaryDimensions.top + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? boundaryDimensions.top) + boundaryToContainerTransformOffset),
		bottom: Math.min(boundaryDimensions.top + boundaryDimensions.height + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? 0) + (visualViewport?.height ?? 0))
	};
	return heightGrowthDirection !== "top" ? Math.max(0, boundingRect.bottom - overlayTop - ((margins.top ?? 0) + (margins.bottom ?? 0) + padding)) : Math.max(0, overlayTop + overlayHeight - boundingRect.top - ((margins.top ?? 0) + (margins.bottom ?? 0) + padding));
}
function $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo, containerDimensions, isContainerDescendentOfBoundary) {
	let { placement, axis, size } = placementInfo;
	if (placement === axis) return Math.max(0, childOffset[axis] - (containerDimensions.scroll[axis] ?? 0) - (boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0)) - (margins[axis] ?? 0) - margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding);
	return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0) - childOffset[axis] - childOffset[size] + (containerDimensions.scroll[axis] ?? 0) - (margins[axis] ?? 0) - margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $954926fb6168ae2a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport) {
	let placementInfo = $954926fb6168ae2a$var$parsePlacement(placementInput);
	let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
	let position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
	let normalizedOffset = offset;
	let space = $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo, containerDimensions, isContainerDescendentOfBoundary);
	if (flip && overlaySize[size] > space) {
		let flippedPlacementInfo = $954926fb6168ae2a$var$parsePlacement(`${$954926fb6168ae2a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
		let flippedPosition = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
		if ($954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo, containerDimensions, isContainerDescendentOfBoundary) > space) {
			placementInfo = flippedPlacementInfo;
			position = flippedPosition;
			normalizedOffset = offset;
		}
	}
	let heightGrowthDirection = "bottom";
	if (placementInfo.axis === "top") {
		if (placementInfo.placement === "top") heightGrowthDirection = "top";
		else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
	} else if (placementInfo.crossAxis === "top") {
		if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
		else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
	}
	let delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let maxHeight = $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport);
	if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
	overlaySize.height = Math.min(overlaySize.height, maxHeight);
	position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
	delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let arrowPosition = {};
	let origin = childOffset[crossAxis] - position[crossAxis] - margins[$954926fb6168ae2a$var$AXIS[crossAxis]];
	let preferredArrowPosition = origin + .5 * childOffset[crossSize];
	const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
	const overlayMargin = $954926fb6168ae2a$var$AXIS[crossAxis] === "left" ? (margins.left ?? 0) + (margins.right ?? 0) : (margins.top ?? 0) + (margins.bottom ?? 0);
	const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
	arrowPosition[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4($240e9101ba2842f5$export$7d15b64cf5a3a4c4(preferredArrowPosition, childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]]), childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]])), arrowMinPosition, arrowMaxPosition);
	({placement: placement, crossPlacement: crossPlacement} = placementInfo);
	if (arrowSize) origin = arrowPosition[crossAxis];
	else if (crossPlacement === "right") origin += childOffset[crossSize];
	else if (crossPlacement === "center") origin += childOffset[crossSize] / 2;
	let crossOrigin = placement === "left" || placement === "top" ? overlaySize[size] : 0;
	let triggerAnchorPoint = {
		x: placement === "top" || placement === "bottom" ? origin : crossOrigin,
		y: placement === "left" || placement === "right" ? origin : crossOrigin
	};
	return {
		position,
		maxHeight,
		arrowOffsetLeft: arrowPosition.left,
		arrowOffsetTop: arrowPosition.top,
		placement,
		triggerAnchorPoint
	};
}
function $954926fb6168ae2a$export$b3ceb0cbf1056d98(opts) {
	let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0, targetRect } = opts;
	let visualViewport = $954926fb6168ae2a$var$getVisualViewport();
	let container = overlayNode instanceof HTMLElement ? $954926fb6168ae2a$var$getContainingBlock(overlayNode) : document.documentElement;
	let isViewportContainer = container === document.documentElement;
	const containerPositionStyle = window.getComputedStyle(container).position;
	let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
	let childOffset = isViewportContainer ? $954926fb6168ae2a$var$getOffset(targetNode, false, targetRect) : $954926fb6168ae2a$var$getPosition(targetNode, container, false, targetRect);
	if (!isViewportContainer) {
		let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
		childOffset.top += parseInt(marginTop, 10) || 0;
		childOffset.left += parseInt(marginLeft, 10) || 0;
	}
	let overlaySize = $954926fb6168ae2a$var$getOffset(overlayNode, true);
	let margins = $954926fb6168ae2a$var$getMargins(overlayNode);
	overlaySize.width += (margins.left ?? 0) + (margins.right ?? 0);
	overlaySize.height += (margins.top ?? 0) + (margins.bottom ?? 0);
	let scrollSize = $954926fb6168ae2a$var$getScroll(scrollNode);
	let boundaryDimensions = $954926fb6168ae2a$var$getContainerDimensions(boundaryElement, visualViewport);
	let containerDimensions = $954926fb6168ae2a$var$getContainerDimensions(container, visualViewport);
	let containerOffsetWithBoundary;
	if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && !isViewportContainer) {
		let containerRect = $954926fb6168ae2a$export$4b834cebd9e5cebe(container, false);
		containerOffsetWithBoundary = {
			top: -(containerRect.top - boundaryDimensions.top),
			left: -(containerRect.left - boundaryDimensions.left),
			width: 0,
			height: 0
		};
	} else if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && isViewportContainer) containerOffsetWithBoundary = {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	};
	else containerOffsetWithBoundary = $954926fb6168ae2a$var$getPosition(boundaryElement, container, false);
	let isContainerDescendentOfBoundary = $23f2114a1b82827e$export$4282f70798064fe0(boundaryElement, container);
	return $954926fb6168ae2a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport);
}
function $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale) {
	let { top, left, width, height } = node.getBoundingClientRect();
	if (ignoreScale && node instanceof node.ownerDocument.defaultView.HTMLElement) {
		width = node.offsetWidth;
		height = node.offsetHeight;
	}
	return {
		top,
		left,
		width,
		height
	};
}
function $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect) {
	let { top, left, width, height } = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
	let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
	return {
		top: top + scrollTop - clientTop,
		left: left + scrollLeft - clientLeft,
		width,
		height
	};
}
function $954926fb6168ae2a$var$getPosition(node, parent, ignoreScale, overrideRect) {
	let style = window.getComputedStyle(node);
	let offset;
	if (style.position === "fixed") offset = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
	else {
		offset = $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect);
		let parentOffset = $954926fb6168ae2a$var$getOffset(parent, ignoreScale);
		let parentStyle = window.getComputedStyle(parent);
		parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
		parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
		offset.top -= parentOffset.top;
		offset.left -= parentOffset.left;
	}
	offset.top -= parseInt(style.marginTop, 10) || 0;
	offset.left -= parseInt(style.marginLeft, 10) || 0;
	return offset;
}
function $954926fb6168ae2a$var$getContainingBlock(node) {
	let offsetParent = node.offsetParent;
	if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$954926fb6168ae2a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
	if (offsetParent == null) {
		offsetParent = node.parentElement;
		while (offsetParent && !$954926fb6168ae2a$var$isContainingBlock(offsetParent)) offsetParent = offsetParent.parentElement;
	}
	return offsetParent || document.documentElement;
}
function $954926fb6168ae2a$var$isContainingBlock(node) {
	let style = window.getComputedStyle(node);
	return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || "backdropFilter" in style && style.backdropFilter !== "none" || "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var $22e2f5f6490788e8$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
function $22e2f5f6490788e8$export$18fc8428861184da(opts) {
	let { triggerRef, isOpen, onClose } = opts;
	(0, import_react.useEffect)(() => {
		if (!isOpen || onClose === null) return;
		let onScroll = (e) => {
			let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			if (!triggerRef.current || target instanceof Node && !$23f2114a1b82827e$export$4282f70798064fe0(target, triggerRef.current)) return;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
			let onCloseHandler = onClose || $22e2f5f6490788e8$export$f6211563215e3b37.get(triggerRef.current);
			if (onCloseHandler) onCloseHandler();
		};
		window.addEventListener("scroll", onScroll, true);
		return () => {
			window.removeEventListener("scroll", onScroll, true);
		};
	}, [
		isOpen,
		onClose,
		triggerRef
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
function $970072cf4b13fde3$var$hasResizeObserver() {
	return typeof window.ResizeObserver !== "undefined";
}
function $970072cf4b13fde3$export$683480f191c0e3ea(options) {
	const { ref, box, onResize } = options;
	let onResizeEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(onResize);
	(0, import_react.useEffect)(() => {
		let element = ref?.current;
		if (!element) return;
		if (!$970072cf4b13fde3$var$hasResizeObserver()) {
			window.addEventListener("resize", onResizeEvent, false);
			return () => {
				window.removeEventListener("resize", onResizeEvent, false);
			};
		} else {
			const resizeObserverInstance = new window.ResizeObserver((entries) => {
				if (!entries.length) return;
				onResizeEvent();
			});
			resizeObserverInstance.observe(element, { box });
			return () => {
				if (element) resizeObserverInstance.unobserve(element);
			};
		}
	}, [ref, box]);
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
var $b3526bc71400be8d$var$visualViewport = typeof document !== "undefined" ? window.visualViewport : null;
function $b3526bc71400be8d$export$d39e1813b3bdd0e1(props) {
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let { arrowSize, targetRef, overlayRef, arrowRef, scrollRef = overlayRef, placement = "bottom", containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== "undefined" ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0, getTargetRect } = props;
	let [position, setPosition] = (0, import_react.useState)(null);
	let deps = [
		shouldUpdatePosition,
		placement,
		overlayRef.current,
		targetRef.current,
		arrowRef?.current,
		scrollRef.current,
		containerPadding,
		shouldFlip,
		boundaryElement,
		offset,
		crossOffset,
		isOpen,
		direction,
		maxHeight,
		arrowBoundaryOffset,
		arrowSize
	];
	let lastScale = (0, import_react.useRef)($b3526bc71400be8d$var$visualViewport?.scale);
	(0, import_react.useEffect)(() => {
		if (isOpen) lastScale.current = $b3526bc71400be8d$var$visualViewport?.scale;
	}, [isOpen]);
	let updatePosition = (0, import_react.useCallback)(() => {
		if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
		if ($b3526bc71400be8d$var$visualViewport?.scale !== lastScale.current) return;
		let anchor = null;
		if (scrollRef.current && $23f2114a1b82827e$export$b4f377a2b6254582(scrollRef.current)) {
			let anchorRect = $23f2114a1b82827e$export$cd4e5573fbe2b576()?.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			anchor = {
				type: "top",
				offset: (anchorRect?.top ?? 0) - scrollRect.top
			};
			if (anchor.offset > scrollRect.height / 2) {
				anchor.type = "bottom";
				anchor.offset = (anchorRect?.bottom ?? 0) - scrollRect.bottom;
			}
		}
		let overlay = overlayRef.current;
		if (!maxHeight && overlayRef.current) {
			overlay.style.top = "0px";
			overlay.style.bottom = "";
			overlay.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px";
		}
		let position = $954926fb6168ae2a$export$b3ceb0cbf1056d98({
			placement: $b3526bc71400be8d$var$translateRTL(placement, direction),
			overlayNode: overlayRef.current,
			targetNode: targetRef.current,
			scrollNode: scrollRef.current || overlayRef.current,
			padding: containerPadding,
			shouldFlip,
			boundaryElement,
			offset,
			crossOffset,
			maxHeight,
			arrowSize: arrowSize ?? (arrowRef?.current ? $954926fb6168ae2a$export$4b834cebd9e5cebe(arrowRef.current, true).width : 0),
			arrowBoundaryOffset,
			targetRect: getTargetRect?.(targetRef.current)
		});
		if (!position.position) return;
		overlay.style.top = "";
		overlay.style.bottom = "";
		overlay.style.left = "";
		overlay.style.right = "";
		Object.keys(position.position).forEach((key) => overlay.style[key] = position.position[key] + "px");
		overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : "";
		let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
		if (anchor && activeElement && scrollRef.current) {
			let anchorRect = activeElement.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
			scrollRef.current.scrollTop += newOffset - anchor.offset;
		}
		setPosition(position);
	}, deps);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(updatePosition, deps);
	$b3526bc71400be8d$var$useResize(updatePosition);
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: overlayRef,
		onResize: updatePosition
	});
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: targetRef,
		onResize: updatePosition
	});
	let isResizing = (0, import_react.useRef)(false);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let timeout;
		let onResize = () => {
			isResizing.current = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				isResizing.current = false;
			}, 500);
			updatePosition();
		};
		let onScroll = () => {
			if (isResizing.current) onResize();
		};
		$b3526bc71400be8d$var$visualViewport?.addEventListener("resize", onResize);
		$b3526bc71400be8d$var$visualViewport?.addEventListener("scroll", onScroll);
		return () => {
			$b3526bc71400be8d$var$visualViewport?.removeEventListener("resize", onResize);
			$b3526bc71400be8d$var$visualViewport?.removeEventListener("scroll", onScroll);
		};
	}, [updatePosition]);
	let close = (0, import_react.useCallback)(() => {
		if (!isResizing.current) onClose?.();
	}, [onClose, isResizing]);
	$22e2f5f6490788e8$export$18fc8428861184da({
		triggerRef: targetRef,
		isOpen,
		onClose: onClose && close
	});
	return {
		overlayProps: { style: {
			position: position ? "absolute" : "fixed",
			top: !position ? 0 : void 0,
			left: !position ? 0 : void 0,
			zIndex: 1e5,
			...position?.position,
			maxHeight: position?.maxHeight ?? "100vh"
		} },
		placement: position?.placement ?? null,
		triggerAnchorPoint: position?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: position?.arrowOffsetLeft,
				top: position?.arrowOffsetTop
			}
		},
		updatePosition
	};
}
function $b3526bc71400be8d$var$useResize(onResize) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		window.addEventListener("resize", onResize, false);
		return () => {
			window.removeEventListener("resize", onResize, false);
		};
	}, [onResize]);
}
function $b3526bc71400be8d$var$translateRTL(position, direction) {
	if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
	return position.replace("start", "left").replace("end", "right");
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs
function $e260d131964da0f9$export$872b660ac5a1ff98(props) {
	let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
	let stateRef = (0, import_react.useRef)({
		isPointerDown: false,
		ignoreEmulatedMouseEvents: false
	});
	let onPointerDown = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (onInteractOutside && $e260d131964da0f9$var$isValidEvent(e, ref)) {
			if (onInteractOutsideStart) onInteractOutsideStart(e);
			stateRef.current.isPointerDown = true;
		}
	});
	let triggerInteractOutside = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (onInteractOutside) onInteractOutside(e);
	});
	(0, import_react.useEffect)(() => {
		let state = stateRef.current;
		if (isDisabled) return;
		const element = ref.current;
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		if (typeof PointerEvent !== "undefined") {
			let onClick = (e) => {
				if (state.isPointerDown && $e260d131964da0f9$var$isValidEvent(e, ref)) triggerInteractOutside(e);
				state.isPointerDown = false;
			};
			documentObject.addEventListener("pointerdown", onPointerDown, true);
			documentObject.addEventListener("click", onClick, true);
			return () => {
				documentObject.removeEventListener("pointerdown", onPointerDown, true);
				documentObject.removeEventListener("click", onClick, true);
			};
		}
	}, [ref, isDisabled]);
}
function $e260d131964da0f9$var$isValidEvent(event, ref) {
	if (event.button > 0) return false;
	let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(event);
	if (target) {
		const ownerDocument = target.ownerDocument;
		if (!ownerDocument || !$23f2114a1b82827e$export$4282f70798064fe0(ownerDocument.documentElement, target)) return false;
		if (target.closest("[data-react-aria-top-layer]")) return false;
	}
	if (!ref.current) return false;
	return !event.composedPath().includes(ref.current);
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlay.mjs
var $77844860df94ba23$var$visibleOverlays = [];
function $77844860df94ba23$export$ea8f71083e90600f(props, ref) {
	let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
	let lastVisibleOverlay = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		if (isOpen && !$77844860df94ba23$var$visibleOverlays.includes(ref)) {
			$77844860df94ba23$var$visibleOverlays.push(ref);
			return () => {
				let index = $77844860df94ba23$var$visibleOverlays.indexOf(ref);
				if (index >= 0) $77844860df94ba23$var$visibleOverlays.splice(index, 1);
			};
		}
	}, [isOpen, ref]);
	let onHide = () => {
		if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref && onClose) onClose();
	};
	let onInteractOutsideStart = (e) => {
		const topMostOverlay = $77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1];
		lastVisibleOverlay.current = topMostOverlay;
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside($23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
			if (topMostOverlay === ref) e.stopPropagation();
		}
	};
	let onInteractOutside = (e) => {
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside($23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
			if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref) e.stopPropagation();
			if (lastVisibleOverlay.current === ref) onHide();
		}
		lastVisibleOverlay.current = void 0;
	};
	let onKeyDown = (e) => {
		if (e.key === "Escape" && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
			e.stopPropagation();
			e.preventDefault();
			onHide();
		}
	};
	$e260d131964da0f9$export$872b660ac5a1ff98({
		ref,
		onInteractOutside: isDismissable && isOpen ? onInteractOutside : void 0,
		onInteractOutsideStart
	});
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
		isDisabled: !shouldCloseOnBlur,
		onBlurWithin: (e) => {
			if (!e.relatedTarget || $535772f9d2c1f38d$export$1258395f99bf9cbf(e.relatedTarget)) return;
			if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose?.();
		}
	});
	return {
		overlayProps: {
			onKeyDown,
			...focusWithinProps
		},
		underlayProps: {}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var $0644e3663365bfe5$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
var $0644e3663365bfe5$var$preventScrollCount = 0;
var $0644e3663365bfe5$var$restore;
function $0644e3663365bfe5$export$ee0f7cc6afcd1c18(options = {}) {
	let { isDisabled } = options;
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (isDisabled) return;
		$0644e3663365bfe5$var$preventScrollCount++;
		if ($0644e3663365bfe5$var$preventScrollCount === 1) if ($2add3ce32c6007eb$export$fedb369cb70207f1()) $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollMobileSafari();
		else $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollStandard();
		return () => {
			$0644e3663365bfe5$var$preventScrollCount--;
			if ($0644e3663365bfe5$var$preventScrollCount === 0) $0644e3663365bfe5$var$restore();
		};
	}, [isDisabled]);
}
function $0644e3663365bfe5$var$preventScrollStandard() {
	let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	return $a4e76a5424781910$export$e08e3b67e392101e(scrollbarWidth > 0 && ("scrollbarGutter" in document.documentElement.style ? $0644e3663365bfe5$var$setStyle(document.documentElement, "scrollbarGutter", "stable") : $0644e3663365bfe5$var$setStyle(document.documentElement, "paddingRight", `${scrollbarWidth}px`)), $0644e3663365bfe5$var$setStyle(document.documentElement, "overflow", "hidden"));
}
function $0644e3663365bfe5$var$preventScrollMobileSafari() {
	let restoreOverflow = $0644e3663365bfe5$var$setStyle(document.documentElement, "overflow", "hidden");
	let scrollable;
	let allowTouchMove = false;
	let onTouchStart = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		scrollable = $901761b40e390936$export$2bb74740c4e19def(target) ? target : $3578607fe3d4b096$export$cfa2225e87938781(target, true);
		allowTouchMove = false;
		let selection = target.ownerDocument.defaultView.getSelection();
		if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
		if (e.composedPath().some((el) => el instanceof HTMLInputElement && el.type === "range")) allowTouchMove = true;
		if ("selectionStart" in target && "selectionEnd" in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
	};
	let style = document.createElement("style");
	let nonce = $2b2d34ff061957fb$export$2b85b721e524d74b();
	if (nonce) style.nonce = nonce;
	style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
	document.head.prepend(style);
	let onTouchMove = (e) => {
		if (e.touches.length === 2 || allowTouchMove) return;
		if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
			e.preventDefault();
			return;
		}
		if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
	};
	let onBlur = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		let relatedTarget = e.relatedTarget;
		if (relatedTarget && $bb39c0fc1c19b34c$export$c57958e35f31ed73(relatedTarget)) {
			relatedTarget.focus({ preventScroll: true });
			$0644e3663365bfe5$var$scrollIntoViewWhenReady(relatedTarget, $bb39c0fc1c19b34c$export$c57958e35f31ed73(target));
		} else if (!relatedTarget) (target.parentElement?.closest("[tabindex]"))?.focus({ preventScroll: true });
	};
	let focus = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function(opts) {
		let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
		let wasKeyboardVisible = activeElement != null && $bb39c0fc1c19b34c$export$c57958e35f31ed73(activeElement);
		focus.call(this, {
			...opts,
			preventScroll: true
		});
		if (!opts || !opts.preventScroll) $0644e3663365bfe5$var$scrollIntoViewWhenReady(this, wasKeyboardVisible);
	};
	let removeEvents = $a4e76a5424781910$export$e08e3b67e392101e($0644e3663365bfe5$var$addEvent(document, "touchstart", onTouchStart, {
		passive: false,
		capture: true
	}), $0644e3663365bfe5$var$addEvent(document, "touchmove", onTouchMove, {
		passive: false,
		capture: true
	}), $0644e3663365bfe5$var$addEvent(document, "blur", onBlur, true));
	return () => {
		restoreOverflow();
		removeEvents();
		style.remove();
		HTMLElement.prototype.focus = focus;
	};
}
function $0644e3663365bfe5$var$setStyle(element, style, value) {
	let cur = element.style[style];
	element.style[style] = value;
	return () => {
		element.style[style] = cur;
	};
}
function $0644e3663365bfe5$var$addEvent(target, event, handler, options) {
	target.addEventListener(event, handler, options);
	return () => {
		target.removeEventListener(event, handler, options);
	};
}
function $0644e3663365bfe5$var$scrollIntoViewWhenReady(target, wasKeyboardVisible) {
	if (wasKeyboardVisible || !$0644e3663365bfe5$var$visualViewport) $0644e3663365bfe5$var$scrollIntoView(target);
	else $0644e3663365bfe5$var$visualViewport.addEventListener("resize", () => $0644e3663365bfe5$var$scrollIntoView(target), { once: true });
}
function $0644e3663365bfe5$var$scrollIntoView(target) {
	let root = document.scrollingElement || document.documentElement;
	let nextTarget = target;
	while (nextTarget && nextTarget !== root) {
		let scrollable = $3578607fe3d4b096$export$cfa2225e87938781(nextTarget);
		if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
			let scrollableRect = scrollable.getBoundingClientRect();
			let targetRect = nextTarget.getBoundingClientRect();
			if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
				let bottom = scrollableRect.bottom;
				if ($0644e3663365bfe5$var$visualViewport) bottom = Math.min(bottom, $0644e3663365bfe5$var$visualViewport.offsetTop + $0644e3663365bfe5$var$visualViewport.height);
				let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
				scrollable.scrollTo({
					top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
					behavior: "smooth"
				});
			}
		}
		nextTarget = scrollable.parentElement;
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/usePopover.mjs
function $f8a024fbad3a5a2e$export$542a6fd13ac93354(props, state) {
	let { triggerRef, popoverRef, groupRef, isNonModal, isKeyboardDismissDisabled, shouldCloseOnInteractOutside, ...otherProps } = props;
	let isSubmenu = otherProps["trigger"] === "SubmenuTrigger";
	let { overlayProps, underlayProps } = $77844860df94ba23$export$ea8f71083e90600f({
		isOpen: state.isOpen,
		onClose: state.close,
		shouldCloseOnBlur: true,
		isDismissable: !isNonModal || isSubmenu,
		isKeyboardDismissDisabled,
		shouldCloseOnInteractOutside
	}, groupRef ?? popoverRef);
	let { overlayProps: positionProps, arrowProps, placement, triggerAnchorPoint: origin } = $b3526bc71400be8d$export$d39e1813b3bdd0e1({
		...otherProps,
		targetRef: triggerRef,
		overlayRef: popoverRef,
		isOpen: state.isOpen,
		onClose: isNonModal && !isSubmenu ? state.close : null
	});
	$0644e3663365bfe5$export$ee0f7cc6afcd1c18({ isDisabled: isNonModal || !state.isOpen });
	(0, import_react.useEffect)(() => {
		if (state.isOpen && popoverRef.current) if (isNonModal) return $58196c8d6a1f38fc$export$1020fa7f77e17884(groupRef?.current ?? popoverRef.current);
		else return $58196c8d6a1f38fc$export$1c3ebcada18427bf([groupRef?.current ?? popoverRef.current], { shouldUseInert: true });
	}, [
		isNonModal,
		state.isOpen,
		popoverRef,
		groupRef
	]);
	return {
		popoverProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(overlayProps, positionProps),
		arrowProps,
		underlayProps,
		placement,
		triggerAnchorPoint: origin
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var $e5024b484f7c3e21$exports = {};
$e5024b484f7c3e21$exports = { "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var $0c4209a7da92851c$exports = {};
$0c4209a7da92851c$exports = { "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var $75fa0397632d287b$exports = {};
$75fa0397632d287b$exports = { "dismiss": `Odstranit` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var $3fc6e6880cad247e$exports = {};
$3fc6e6880cad247e$exports = { "dismiss": `Luk` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var $5f637eb0c91d0f64$exports = {};
$5f637eb0c91d0f64$exports = { "dismiss": `Schlie\xdfen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var $5a0b3a154dcf111b$exports = {};
$5a0b3a154dcf111b$exports = { "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var $ea518f18e6f13288$exports = {};
$ea518f18e6f13288$exports = { "dismiss": `Dismiss` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var $3bf3cb0ce48a8078$exports = {};
$3bf3cb0ce48a8078$exports = { "dismiss": `Descartar` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var $a416146243e75233$exports = {};
$a416146243e75233$exports = { "dismiss": `L\xf5peta` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var $2872659e6c428111$exports = {};
$2872659e6c428111$exports = { "dismiss": `Hylk\xe4\xe4` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var $657a7a1f03941145$exports = {};
$657a7a1f03941145$exports = { "dismiss": `Rejeter` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var $9f18aee5ddbe5e0f$exports = {};
$9f18aee5ddbe5e0f$exports = { "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var $e2e63adb0c1f3db6$exports = {};
$e2e63adb0c1f3db6$exports = { "dismiss": `Odbaci` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var $46fbd53e8bc70315$exports = {};
$46fbd53e8bc70315$exports = { "dismiss": `Elutas\xedt\xe1s` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var $47234f3018c55486$exports = {};
$47234f3018c55486$exports = { "dismiss": `Ignora` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var $0dfacfad01736641$exports = {};
$0dfacfad01736641$exports = { "dismiss": `\u{9589}\u{3058}\u{308B}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var $a9056b50f6fbb1ef$exports = {};
$a9056b50f6fbb1ef$exports = { "dismiss": `\u{BB34}\u{C2DC}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var $217b78056fce917f$exports = {};
$217b78056fce917f$exports = { "dismiss": `Atmesti` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var $c32f8c2b8956f20a$exports = {};
$c32f8c2b8956f20a$exports = { "dismiss": `Ner\u{101}d\u{12B}t` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var $f65392426e2dae6a$exports = {};
$f65392426e2dae6a$exports = { "dismiss": `Lukk` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var $1d0fa5f3cc68e5b0$exports = {};
$1d0fa5f3cc68e5b0$exports = { "dismiss": `Negeren` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var $ff8aa6518e51f809$exports = {};
$ff8aa6518e51f809$exports = { "dismiss": `Zignoruj` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var $fe3a4eb3eebfb0a2$exports = {};
$fe3a4eb3eebfb0a2$exports = { "dismiss": `Descartar` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var $f692c6bcabd26695$exports = {};
$f692c6bcabd26695$exports = { "dismiss": `Dispensar` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var $627fbb16c92fb654$exports = {};
$627fbb16c92fb654$exports = { "dismiss": `Revocare` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var $2c9c1dfc72c7bac2$exports = {};
$2c9c1dfc72c7bac2$exports = { "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var $7e7ece760f897013$exports = {};
$7e7ece760f897013$exports = { "dismiss": `Zru\u{161}i\u{165}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var $1e894e47be1bf217$exports = {};
$1e894e47be1bf217$exports = { "dismiss": `Opusti` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var $f4ce49adf6ef095f$exports = {};
$f4ce49adf6ef095f$exports = { "dismiss": `Odbaci` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var $7c9dc206185355b5$exports = {};
$7c9dc206185355b5$exports = { "dismiss": `Avvisa` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var $c288097c5ef4ae98$exports = {};
$c288097c5ef4ae98$exports = { "dismiss": `Kapat` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var $d5863f94ad4c3f07$exports = {};
$d5863f94ad4c3f07$exports = { "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var $34a6eb7890264192$exports = {};
$34a6eb7890264192$exports = { "dismiss": `\u{53D6}\u{6D88}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var $79ae244e9d286cb7$exports = {};
$79ae244e9d286cb7$exports = { "dismiss": `\u{95DC}\u{9589}` };
//#endregion
//#region node_modules/react-aria/dist/private/overlays/intlStrings.mjs
var $8ad4f9eb0c0f6434$exports = {};
$8ad4f9eb0c0f6434$exports = {
	"ar-AE": $e5024b484f7c3e21$exports,
	"bg-BG": $0c4209a7da92851c$exports,
	"cs-CZ": $75fa0397632d287b$exports,
	"da-DK": $3fc6e6880cad247e$exports,
	"de-DE": $5f637eb0c91d0f64$exports,
	"el-GR": $5a0b3a154dcf111b$exports,
	"en-US": $ea518f18e6f13288$exports,
	"es-ES": $3bf3cb0ce48a8078$exports,
	"et-EE": $a416146243e75233$exports,
	"fi-FI": $2872659e6c428111$exports,
	"fr-FR": $657a7a1f03941145$exports,
	"he-IL": $9f18aee5ddbe5e0f$exports,
	"hr-HR": $e2e63adb0c1f3db6$exports,
	"hu-HU": $46fbd53e8bc70315$exports,
	"it-IT": $47234f3018c55486$exports,
	"ja-JP": $0dfacfad01736641$exports,
	"ko-KR": $a9056b50f6fbb1ef$exports,
	"lt-LT": $217b78056fce917f$exports,
	"lv-LV": $c32f8c2b8956f20a$exports,
	"nb-NO": $f65392426e2dae6a$exports,
	"nl-NL": $1d0fa5f3cc68e5b0$exports,
	"pl-PL": $ff8aa6518e51f809$exports,
	"pt-BR": $fe3a4eb3eebfb0a2$exports,
	"pt-PT": $f692c6bcabd26695$exports,
	"ro-RO": $627fbb16c92fb654$exports,
	"ru-RU": $2c9c1dfc72c7bac2$exports,
	"sk-SK": $7e7ece760f897013$exports,
	"sl-SI": $1e894e47be1bf217$exports,
	"sr-SP": $f4ce49adf6ef095f$exports,
	"sv-SE": $7c9dc206185355b5$exports,
	"tr-TR": $c288097c5ef4ae98$exports,
	"uk-UA": $d5863f94ad4c3f07$exports,
	"zh-CN": $34a6eb7890264192$exports,
	"zh-TW": $79ae244e9d286cb7$exports
};
//#endregion
//#region node_modules/react-aria/dist/private/overlays/DismissButton.mjs
function $parcel$interopDefault$2(a) {
	return a && a.__esModule ? a.default : a;
}
function $081058010ef8962e$export$2317d149ed6f78c4(props) {
	let { onDismiss, ...otherProps } = props;
	let labels = $e8ac3c3f5d4bae7f$export$d6875122194c7b44(otherProps, $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault$2($8ad4f9eb0c0f6434$exports), "@react-aria/overlays").format("dismiss"));
	let onClick = () => {
		if (onDismiss) onDismiss();
	};
	return /*#__PURE__*/ import_react.createElement($ea3928288112382f$export$439d29a4e110a164, null, /*#__PURE__*/ import_react.createElement("button", {
		...labels,
		tabIndex: -1,
		onClick,
		style: {
			width: 1,
			height: 1
		}
	}));
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/PressResponder.mjs
var $0d47b37c475c5231$export$3351871ee4b288b8 = /*#__PURE__*/ import_react.forwardRef(({ children, ...props }, ref) => {
	let isRegistered = (0, import_react.useRef)(false);
	let prevContext = (0, import_react.useContext)($24f9a20f226ad820$export$5165eccb35aaadb5);
	let context = $bbaa08b3cd72f041$export$9d1611c77c2fe928(prevContext || {}, {
		...props,
		register() {
			isRegistered.current = true;
			if (prevContext) prevContext.register();
		}
	});
	context.ref = $03e8ab2d84d7657a$export$4338b53315abf666(ref || prevContext?.ref);
	$b7115c395c64f7b5$export$4debdb1a3f0fa79e(prevContext, context.ref);
	(0, import_react.useEffect)(() => {
		if (!isRegistered.current) isRegistered.current = true;
	}, []);
	return /*#__PURE__*/ import_react.createElement($24f9a20f226ad820$export$5165eccb35aaadb5.Provider, { value: context }, children);
});
function $0d47b37c475c5231$export$cf75428e0b9ed1ea({ children }) {
	let context = (0, import_react.useMemo)(() => ({ register: () => {} }), []);
	return /*#__PURE__*/ import_react.createElement($24f9a20f226ad820$export$5165eccb35aaadb5.Provider, { value: context }, children);
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var $72abaeab4d80592f$export$60d741e20e0aa309 = /*#__PURE__*/ (0, import_react.createContext)({});
function $72abaeab4d80592f$export$9fc1347d4195ccb3() {
	return (0, import_react.useContext)($72abaeab4d80592f$export$60d741e20e0aa309) ?? {};
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/Overlay.mjs
var $d7a937236970dc7f$export$a2200b96afd16271 = /*#__PURE__*/ import_react.createContext(null);
function $d7a937236970dc7f$export$c6fdb837b070b4ff(props) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let { portalContainer = isSSR ? null : document.body, isExiting } = props;
	let [contain, setContain] = (0, import_react.useState)(false);
	let contextValue = (0, import_react.useMemo)(() => ({
		contain,
		setContain
	}), [contain, setContain]);
	let { getContainer } = $72abaeab4d80592f$export$9fc1347d4195ccb3();
	if (!props.portalContainer && getContainer) portalContainer = getContainer();
	if (!portalContainer) return null;
	let contents = props.children;
	if (!props.disableFocusManagement) contents = /*#__PURE__*/ import_react.createElement($535772f9d2c1f38d$export$20e40289641fbbb6, {
		restoreFocus: true,
		contain: (props.shouldContainFocus || contain) && !isExiting
	}, contents);
	contents = /*#__PURE__*/ import_react.createElement($d7a937236970dc7f$export$a2200b96afd16271.Provider, { value: contextValue }, /*#__PURE__*/ import_react.createElement($0d47b37c475c5231$export$cf75428e0b9ed1ea, null, contents));
	return /*#__PURE__*/ import_react_dom.createPortal(contents, portalContainer);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/animation.mjs
function $fcc7165e876206c6$export$6d3443f2c48bfc20(ref, isReady = true) {
	let [isEntering, setEntering] = (0, import_react.useState)(true);
	let isAnimationReady = isEntering && isReady;
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (isAnimationReady && ref.current && "getAnimations" in ref.current) {
			for (let animation of ref.current.getAnimations()) if (animation instanceof CSSTransition) animation.cancel();
		}
	}, [ref, isAnimationReady]);
	$fcc7165e876206c6$var$useAnimation(ref, isAnimationReady, (0, import_react.useCallback)(() => setEntering(false), []));
	return isAnimationReady;
}
function $fcc7165e876206c6$export$45fda7c47f93fd48(ref, isOpen) {
	let [exitState, setExitState] = (0, import_react.useState)(isOpen ? "open" : "closed");
	switch (exitState) {
		case "open":
			if (!isOpen) setExitState("exiting");
			break;
		case "closed":
		case "exiting":
			if (isOpen) setExitState("open");
			break;
	}
	let isExiting = exitState === "exiting";
	$fcc7165e876206c6$var$useAnimation(ref, isExiting, (0, import_react.useCallback)(() => {
		setExitState((state) => state === "exiting" ? "closed" : state);
	}, []));
	return isExiting;
}
function $fcc7165e876206c6$var$useAnimation(ref, isActive, onEnd) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (isActive && ref.current) {
			if (!("getAnimations" in ref.current)) {
				onEnd();
				return;
			}
			let animations = ref.current.getAnimations();
			if (animations.length === 0) {
				onEnd();
				return;
			}
			let canceled = false;
			Promise.allSettled(animations.map((a) => a.finished)).then(() => {
				if (!canceled) (0, import_react_dom.flushSync)(() => {
					onEnd();
				});
			});
			return () => {
				canceled = true;
			};
		}
	}, [
		ref,
		isActive,
		onEnd
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ar-AE.mjs
var $50608029e06fcc45$exports = {};
$50608029e06fcc45$exports = { "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/bg-BG.mjs
var $0ce6c09c3e669100$exports = {};
$0ce6c09c3e669100$exports = { "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/cs-CZ.mjs
var $a9daab48d18bec17$exports = {};
$a9daab48d18bec17$exports = { "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/da-DK.mjs
var $a7897057abd4dedc$exports = {};
$a7897057abd4dedc$exports = { "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/de-DE.mjs
var $a48782afe17e416a$exports = {};
$a48782afe17e416a$exports = { "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/el-GR.mjs
var $b4a078a1f4803013$exports = {};
$b4a078a1f4803013$exports = { "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/en-US.mjs
var $788d77bcaab07d29$exports = {};
$788d77bcaab07d29$exports = { "longPressMessage": `Long press or press Alt + ArrowDown to open menu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/es-ES.mjs
var $8fc1e38f2f738334$exports = {};
$8fc1e38f2f738334$exports = { "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/et-EE.mjs
var $0c79cbd512713d63$exports = {};
$0c79cbd512713d63$exports = { "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/fi-FI.mjs
var $6e578cb07f661d0f$exports = {};
$6e578cb07f661d0f$exports = { "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/fr-FR.mjs
var $44177fdbbad1a686$exports = {};
$44177fdbbad1a686$exports = { "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/he-IL.mjs
var $990dfee85fc94a6a$exports = {};
$990dfee85fc94a6a$exports = { "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/hr-HR.mjs
var $10d7c2a1d55e74cf$exports = {};
$10d7c2a1d55e74cf$exports = { "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/hu-HU.mjs
var $d3182189bfd1bf3b$exports = {};
$d3182189bfd1bf3b$exports = { "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/it-IT.mjs
var $fbfac0c9f82929a4$exports = {};
$fbfac0c9f82929a4$exports = { "longPressMessage": `Premi a lungo o premi Alt + Freccia gi\xf9 per aprire il menu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ja-JP.mjs
var $18b8fa80cdc50d05$exports = {};
$18b8fa80cdc50d05$exports = { "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ko-KR.mjs
var $a8f49035a51fdb32$exports = {};
$a8f49035a51fdb32$exports = { "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/lt-LT.mjs
var $06546dd9bbf0f542$exports = {};
$06546dd9bbf0f542$exports = { "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/lv-LV.mjs
var $9a7348e0caa19677$exports = {};
$9a7348e0caa19677$exports = { "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/nb-NO.mjs
var $e16c55913ae3971e$exports = {};
$e16c55913ae3971e$exports = { "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/nl-NL.mjs
var $d92f6e92c51016e2$exports = {};
$d92f6e92c51016e2$exports = { "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pl-PL.mjs
var $5475104f6d631fa8$exports = {};
$5475104f6d631fa8$exports = { "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pt-BR.mjs
var $e97402d4778a500f$exports = {};
$e97402d4778a500f$exports = { "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pt-PT.mjs
var $8ffff1f90e4445ad$exports = {};
$8ffff1f90e4445ad$exports = { "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ro-RO.mjs
var $3b65c017e2338742$exports = {};
$3b65c017e2338742$exports = { "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ru-RU.mjs
var $5dc65e8d5bb20c3e$exports = {};
$5dc65e8d5bb20c3e$exports = { "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sk-SK.mjs
var $754ea877f466b46b$exports = {};
$754ea877f466b46b$exports = { "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sl-SI.mjs
var $371167f8ab40ff4e$exports = {};
$371167f8ab40ff4e$exports = { "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sr-SP.mjs
var $000e668e4e84b579$exports = {};
$000e668e4e84b579$exports = { "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sv-SE.mjs
var $fc088db6dd370743$exports = {};
$fc088db6dd370743$exports = { "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/tr-TR.mjs
var $eef33ec9131405b8$exports = {};
$eef33ec9131405b8$exports = { "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/uk-UA.mjs
var $17ca43fe2ce333c0$exports = {};
$17ca43fe2ce333c0$exports = { "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/zh-CN.mjs
var $ce0bee578e53860c$exports = {};
$ce0bee578e53860c$exports = { "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/zh-TW.mjs
var $a146d231f9c4bbf9$exports = {};
$a146d231f9c4bbf9$exports = { "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}` };
//#endregion
//#region node_modules/react-aria/dist/private/menu/intlStrings.mjs
var $bdff4dd8fb5956de$exports = {};
$bdff4dd8fb5956de$exports = {
	"ar-AE": $50608029e06fcc45$exports,
	"bg-BG": $0ce6c09c3e669100$exports,
	"cs-CZ": $a9daab48d18bec17$exports,
	"da-DK": $a7897057abd4dedc$exports,
	"de-DE": $a48782afe17e416a$exports,
	"el-GR": $b4a078a1f4803013$exports,
	"en-US": $788d77bcaab07d29$exports,
	"es-ES": $8fc1e38f2f738334$exports,
	"et-EE": $0c79cbd512713d63$exports,
	"fi-FI": $6e578cb07f661d0f$exports,
	"fr-FR": $44177fdbbad1a686$exports,
	"he-IL": $990dfee85fc94a6a$exports,
	"hr-HR": $10d7c2a1d55e74cf$exports,
	"hu-HU": $d3182189bfd1bf3b$exports,
	"it-IT": $fbfac0c9f82929a4$exports,
	"ja-JP": $18b8fa80cdc50d05$exports,
	"ko-KR": $a8f49035a51fdb32$exports,
	"lt-LT": $06546dd9bbf0f542$exports,
	"lv-LV": $9a7348e0caa19677$exports,
	"nb-NO": $e16c55913ae3971e$exports,
	"nl-NL": $d92f6e92c51016e2$exports,
	"pl-PL": $5475104f6d631fa8$exports,
	"pt-BR": $e97402d4778a500f$exports,
	"pt-PT": $8ffff1f90e4445ad$exports,
	"ro-RO": $3b65c017e2338742$exports,
	"ru-RU": $5dc65e8d5bb20c3e$exports,
	"sk-SK": $754ea877f466b46b$exports,
	"sl-SI": $371167f8ab40ff4e$exports,
	"sr-SP": $000e668e4e84b579$exports,
	"sv-SE": $fc088db6dd370743$exports,
	"tr-TR": $eef33ec9131405b8$exports,
	"uk-UA": $17ca43fe2ce333c0$exports,
	"zh-CN": $ce0bee578e53860c$exports,
	"zh-TW": $a146d231f9c4bbf9$exports
};
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
function $f282e36c29c025e8$export$f9d5c8beee7d008d(props, state, ref) {
	let { type } = props;
	let { isOpen } = state;
	(0, import_react.useEffect)(() => {
		if (ref && ref.current) $22e2f5f6490788e8$export$f6211563215e3b37.set(ref.current, state.close);
	});
	let ariaHasPopup = void 0;
	if (type === "menu") ariaHasPopup = true;
	else if (type === "listbox") ariaHasPopup = "listbox";
	let overlayId = $390e54f620492c70$export$f680877a34711e37();
	return {
		triggerProps: {
			"aria-haspopup": ariaHasPopup,
			"aria-expanded": isOpen,
			"aria-controls": isOpen ? overlayId : void 0,
			onPress: state.toggle
		},
		overlayProps: { id: overlayId }
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs
function $parcel$interopDefault$1(a) {
	return a && a.__esModule ? a.default : a;
}
function $f19b83c1486f45cc$export$dc9c12ed27dd1b49(props, state, ref) {
	let { type = "menu", isDisabled, trigger = "press" } = props;
	let menuTriggerId = $390e54f620492c70$export$f680877a34711e37();
	let { triggerProps, overlayProps } = $f282e36c29c025e8$export$f9d5c8beee7d008d({ type }, state, ref);
	let onKeyDown = (e) => {
		if (isDisabled) return;
		if (trigger === "longPress" && !e.altKey) return;
		if (ref && ref.current) switch (e.key) {
			case "Enter":
			case " ": if (trigger === "longPress" || e.isDefaultPrevented()) return;
			case "ArrowDown":
				if (!("continuePropagation" in e)) e.stopPropagation();
				e.preventDefault();
				state.toggle("first");
				break;
			case "ArrowUp":
				if (!("continuePropagation" in e)) e.stopPropagation();
				e.preventDefault();
				state.toggle("last");
				break;
			default: if ("continuePropagation" in e) e.continuePropagation();
		}
	};
	let stringFormatter = $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault$1($bdff4dd8fb5956de$exports), "@react-aria/menu");
	let { longPressProps } = $7b01448eaad0fe7c$export$c24ed0104d07eab9({
		isDisabled: isDisabled || trigger !== "longPress",
		accessibilityDescription: stringFormatter.format("longPressMessage"),
		onLongPressStart() {
			state.close();
		},
		onLongPress() {
			state.open("first");
		}
	});
	let pressProps = {
		preventFocusOnPress: true,
		onPressStart(e) {
			if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) {
				$1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
				state.open(e.pointerType === "virtual" ? "first" : null);
			}
		},
		onPress(e) {
			if (e.pointerType === "touch" && !isDisabled) {
				$1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
				state.toggle();
			}
		}
	};
	delete triggerProps.onPress;
	return {
		menuTriggerProps: {
			...triggerProps,
			...trigger === "press" ? pressProps : longPressProps,
			id: menuTriggerId,
			onKeyDown
		},
		menuProps: {
			...overlayProps,
			"aria-labelledby": menuTriggerId,
			autoFocus: state.focusStrategy || true,
			onClose: state.close
		}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/utils.mjs
var $d5765cd7be93edd1$export$6f49b4016bfc8d56 = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/react-aria/dist/private/menu/useMenu.mjs
function $a2d69d6ee8486855$export$38eaa17faae8f579(props, state, ref) {
	let { shouldFocusWrap = true, onKeyDown, onKeyUp, ...otherProps } = props;
	if (!props["aria-label"] && !props["aria-labelledby"] && false);
	let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { labelable: true });
	let { listProps } = $64903b4b31b6bb2a$export$b95089534ab7c1fd({
		...otherProps,
		ref,
		selectionManager: state.selectionManager,
		collection: state.collection,
		disabledKeys: state.disabledKeys,
		shouldFocusWrap,
		linkBehavior: "override"
	});
	$d5765cd7be93edd1$export$6f49b4016bfc8d56.set(state, {
		onClose: props.onClose,
		onAction: props.onAction,
		shouldUseVirtualFocus: props.shouldUseVirtualFocus
	});
	return { menuProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, {
		onKeyDown,
		onKeyUp
	}, {
		role: "menu",
		...listProps,
		onKeyDown: (e) => {
			if (e.key !== "Escape" || props.shouldUseVirtualFocus) listProps.onKeyDown?.(e);
		}
	}) };
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useMenuItem.mjs
function $1a9c2c840fd36413$export$9d32628fc2aea7da(props, state, ref) {
	let { id, key, closeOnSelect, shouldCloseOnSelect, isVirtualized, "aria-haspopup": hasPopup, onPressStart, onPressUp: pressUpProp, onPress, onPressChange: pressChangeProp, onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange, onHoverEnd, onKeyDown, onKeyUp, onFocus, onFocusChange, onBlur, selectionManager = state.selectionManager } = props;
	let isTrigger = !!hasPopup;
	let isTriggerExpanded = isTrigger && props["aria-expanded"] === "true";
	let isDisabled = props.isDisabled ?? selectionManager.isDisabled(key);
	let isSelected = props.isSelected ?? selectionManager.isSelected(key);
	let data = $d5765cd7be93edd1$export$6f49b4016bfc8d56.get(state);
	let item = state.collection.getItem(key);
	let onClose = props.onClose || data.onClose;
	let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
	let performAction = () => {
		if (isTrigger) return;
		if (item?.props?.onAction) item.props.onAction();
		else if (props.onAction) props.onAction(key);
		if (data.onAction) {
			let onAction = data.onAction;
			onAction(key, item?.value);
		}
	};
	let role = "menuitem";
	if (!isTrigger) {
		if (selectionManager.selectionMode === "single") role = "menuitemradio";
		else if (selectionManager.selectionMode === "multiple") role = "menuitemcheckbox";
	}
	let labelId = $390e54f620492c70$export$b4cc09c592e8fdb8();
	let descriptionId = $390e54f620492c70$export$b4cc09c592e8fdb8();
	let keyboardId = $390e54f620492c70$export$b4cc09c592e8fdb8();
	let ariaProps = {
		id,
		"aria-disabled": isDisabled || void 0,
		role,
		"aria-label": props["aria-label"],
		"aria-labelledby": labelId,
		"aria-describedby": [
			props["aria-describedby"],
			descriptionId,
			keyboardId
		].filter(Boolean).join(" ") || void 0,
		"aria-controls": props["aria-controls"],
		"aria-haspopup": hasPopup,
		"aria-expanded": props["aria-expanded"]
	};
	if (selectionManager.selectionMode !== "none" && !isTrigger) ariaProps["aria-checked"] = isSelected;
	if (isVirtualized) {
		let index = Number(item?.index);
		ariaProps["aria-posinset"] = Number.isNaN(index) ? void 0 : index + 1;
		ariaProps["aria-setsize"] = $2efe10d3f1f9e31e$export$77d5aafae4e095b2(state.collection);
	}
	let isPressedRef = (0, import_react.useRef)(false);
	let onPressChange = (isPressed) => {
		pressChangeProp?.(isPressed);
		isPressedRef.current = isPressed;
	};
	let interaction = (0, import_react.useRef)(null);
	let onPressUp = (e) => {
		if (e.pointerType !== "keyboard") interaction.current = { pointerType: e.pointerType };
		if (e.pointerType === "mouse") {
			if (!isPressedRef.current) e.target.click();
		}
		pressUpProp?.(e);
	};
	let onClick = (e) => {
		onClickProp?.(e);
		performAction();
		$caaf0dd3060ed57c$export$13aea1a3cb5e3f1f(e, router, item.props.href, item?.props.routerOptions);
		let shouldClose = interaction.current?.pointerType === "keyboard" ? interaction.current?.key === "Enter" || selectionManager.selectionMode === "none" || selectionManager.isLink(key) : selectionManager.selectionMode !== "multiple" || selectionManager.isLink(key);
		shouldClose = shouldCloseOnSelect ?? closeOnSelect ?? shouldClose;
		if (onClose && !isTrigger && shouldClose) onClose();
		interaction.current = null;
	};
	let { itemProps, isFocused } = $f6ba6936bfd098a0$export$ecf600387e221c37({
		id,
		selectionManager,
		key,
		ref,
		shouldSelectOnPressUp: true,
		allowsDifferentPressOrigin: true,
		linkBehavior: "none",
		shouldUseVirtualFocus: data.shouldUseVirtualFocus
	});
	let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21({
		onPressStart,
		onPress,
		onPressUp,
		onPressChange,
		onPressEnd,
		isDisabled
	});
	let { hoverProps } = $e969f22b6713ca4a$export$ae780daf29e6d456({
		isDisabled,
		onHoverStart(e) {
			if (!$8f5a2122b0992be3$export$b9b3dfddab17db27() && !(isTriggerExpanded && hasPopup)) {
				selectionManager.setFocused(true);
				selectionManager.setFocusedKey(key);
			}
			hoverStartProp?.(e);
		},
		onHoverChange,
		onHoverEnd
	});
	let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd({
		onKeyDown: (e) => {
			if (e.repeat) {
				e.continuePropagation();
				return;
			}
			switch (e.key) {
				case " ":
					interaction.current = {
						pointerType: "keyboard",
						key: " "
					};
					$23f2114a1b82827e$export$e58f029f0fbfdb29(e).click();
					$8f5a2122b0992be3$export$8397ddfc504fdb9a("keyboard");
					break;
				case "Enter":
					interaction.current = {
						pointerType: "keyboard",
						key: "Enter"
					};
					if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e).tagName !== "A") $23f2114a1b82827e$export$e58f029f0fbfdb29(e).click();
					$8f5a2122b0992be3$export$8397ddfc504fdb9a("keyboard");
					break;
				default:
					if (!isTrigger) e.continuePropagation();
					onKeyDown?.(e);
					break;
			}
		},
		onKeyUp
	});
	let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c({
		onBlur,
		onFocus,
		onFocusChange
	}, ref);
	let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(item?.props);
	delete domProps.id;
	let linkProps = $caaf0dd3060ed57c$export$7e924b3091a3bd18(item?.props);
	return {
		menuItemProps: {
			...ariaProps,
			...$bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, linkProps, isTrigger ? {
				onFocus: itemProps.onFocus,
				"data-collection": itemProps["data-collection"],
				"data-key": itemProps["data-key"]
			} : itemProps, pressProps, hoverProps, keyboardProps, focusableProps, data.shouldUseVirtualFocus || isTrigger ? { onMouseDown: (e) => e.preventDefault() } : void 0, isDisabled ? void 0 : { onClick }),
			tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
		},
		labelProps: { id: labelId },
		descriptionProps: { id: descriptionId },
		keyboardShortcutProps: { id: keyboardId },
		isFocused,
		isFocusVisible: isFocused && selectionManager.isFocused && $8f5a2122b0992be3$export$b9b3dfddab17db27() && !isTriggerExpanded,
		isSelected,
		isPressed,
		isDisabled
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useMenuSection.mjs
function $7355d4e5c49461b6$export$73f7a44322579622(props) {
	let { heading, "aria-label": ariaLabel } = props;
	let headingId = $390e54f620492c70$export$f680877a34711e37();
	return {
		itemProps: { role: "presentation" },
		headingProps: heading ? {
			id: headingId,
			role: "presentation"
		} : {},
		groupProps: {
			role: "group",
			"aria-label": ariaLabel,
			"aria-labelledby": heading ? headingId : void 0
		}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useSafelyMouseToSubmenu.mjs
var $eac5d44fa99b2e3b$var$ALLOWED_INVALID_MOVEMENTS = 2;
var $eac5d44fa99b2e3b$var$THROTTLE_TIME = 50;
var $eac5d44fa99b2e3b$var$TIMEOUT_TIME = 1e3;
var $eac5d44fa99b2e3b$var$ANGLE_PADDING = Math.PI / 12;
function $eac5d44fa99b2e3b$export$85ec83e04c95f50a(options) {
	let { menuRef, submenuRef, isOpen, isDisabled } = options;
	let prevPointerPos = (0, import_react.useRef)(void 0);
	let submenuRect = (0, import_react.useRef)(void 0);
	let lastProcessedTime = (0, import_react.useRef)(0);
	let timeout = (0, import_react.useRef)(void 0);
	let autoCloseTimeout = (0, import_react.useRef)(void 0);
	let submenuSide = (0, import_react.useRef)(void 0);
	let movementsTowardsSubmenuCount = (0, import_react.useRef)(2);
	let [preventPointerEvents, setPreventPointerEvents] = (0, import_react.useState)(false);
	let updateSubmenuRect = () => {
		if (submenuRef.current) {
			submenuRect.current = submenuRef.current.getBoundingClientRect();
			submenuSide.current = void 0;
		}
	};
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: isOpen ? submenuRef : void 0,
		onResize: updateSubmenuRect
	});
	let reset = () => {
		setPreventPointerEvents(false);
		movementsTowardsSubmenuCount.current = $eac5d44fa99b2e3b$var$ALLOWED_INVALID_MOVEMENTS;
		prevPointerPos.current = void 0;
	};
	let modality = $8f5a2122b0992be3$export$98e20ec92f614cfe();
	let onPointerDown = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (preventPointerEvents) e.preventDefault();
	});
	(0, import_react.useEffect)(() => {
		if (preventPointerEvents && menuRef.current) menuRef.current.style.pointerEvents = "none";
		else menuRef.current.style.pointerEvents = "";
	}, [menuRef, preventPointerEvents]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let submenu = submenuRef.current;
		let menu = menuRef.current;
		if (isDisabled || !submenu || !isOpen || modality !== "pointer" || !menu) {
			reset();
			return;
		}
		submenuRect.current = submenu.getBoundingClientRect();
		let onPointerMove = (e) => {
			if (e.pointerType === "touch" || e.pointerType === "pen") return;
			let currentTime = Date.now();
			if (currentTime - lastProcessedTime.current < $eac5d44fa99b2e3b$var$THROTTLE_TIME) return;
			clearTimeout(timeout.current);
			clearTimeout(autoCloseTimeout.current);
			let { clientX: mouseX, clientY: mouseY } = e;
			if (!prevPointerPos.current) {
				prevPointerPos.current = {
					x: mouseX,
					y: mouseY
				};
				return;
			}
			if (!submenuRect.current) return;
			if (!submenuSide.current) submenuSide.current = mouseX > submenuRect.current.right ? "left" : "right";
			if (mouseX < menu.getBoundingClientRect().left || mouseX > menu.getBoundingClientRect().right || mouseY < menu.getBoundingClientRect().top || mouseY > menu.getBoundingClientRect().bottom) {
				reset();
				return;
			}
			let prevMouseX = prevPointerPos.current.x;
			let prevMouseY = prevPointerPos.current.y;
			let toSubmenuX = submenuSide.current === "right" ? submenuRect.current.left - prevMouseX : prevMouseX - submenuRect.current.right;
			let angleTop = Math.atan2(prevMouseY - submenuRect.current.top, toSubmenuX) + $eac5d44fa99b2e3b$var$ANGLE_PADDING;
			let angleBottom = Math.atan2(prevMouseY - submenuRect.current.bottom, toSubmenuX) - $eac5d44fa99b2e3b$var$ANGLE_PADDING;
			let anglePointer = Math.atan2(prevMouseY - mouseY, submenuSide.current === "left" ? -(mouseX - prevMouseX) : mouseX - prevMouseX);
			let isMovingTowardsSubmenu = anglePointer < angleTop && anglePointer > angleBottom;
			movementsTowardsSubmenuCount.current = isMovingTowardsSubmenu ? Math.min(movementsTowardsSubmenuCount.current + 1, $eac5d44fa99b2e3b$var$ALLOWED_INVALID_MOVEMENTS) : Math.max(movementsTowardsSubmenuCount.current - 1, 0);
			if (movementsTowardsSubmenuCount.current >= $eac5d44fa99b2e3b$var$ALLOWED_INVALID_MOVEMENTS) setPreventPointerEvents(true);
			else setPreventPointerEvents(false);
			lastProcessedTime.current = currentTime;
			prevPointerPos.current = {
				x: mouseX,
				y: mouseY
			};
			if (isMovingTowardsSubmenu) timeout.current = setTimeout(() => {
				reset();
				autoCloseTimeout.current = setTimeout(() => {
					let target = document.elementFromPoint(mouseX, mouseY);
					if (target && $23f2114a1b82827e$export$4282f70798064fe0(menu, target)) target.dispatchEvent(new PointerEvent("pointerover", {
						bubbles: true,
						cancelable: true
					}));
				}, 100);
			}, $eac5d44fa99b2e3b$var$TIMEOUT_TIME);
		};
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerdown", onPointerDown, true);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerdown", onPointerDown, true);
			clearTimeout(timeout.current);
			clearTimeout(autoCloseTimeout.current);
			movementsTowardsSubmenuCount.current = $eac5d44fa99b2e3b$var$ALLOWED_INVALID_MOVEMENTS;
		};
	}, [
		isDisabled,
		isOpen,
		menuRef,
		modality,
		setPreventPointerEvents,
		submenuRef
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useSubmenuTrigger.mjs
function $8794213c1141208f$export$7138b0d059a6e743(props, state, ref) {
	let { parentMenuRef, submenuRef, type = "menu", isDisabled, delay = 200, shouldUseVirtualFocus } = props;
	let submenuTriggerId = $390e54f620492c70$export$f680877a34711e37();
	let overlayId = $390e54f620492c70$export$f680877a34711e37();
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let openTimeout = (0, import_react.useRef)(void 0);
	let cancelOpenTimeout = (0, import_react.useCallback)(() => {
		if (openTimeout.current) {
			clearTimeout(openTimeout.current);
			openTimeout.current = void 0;
		}
	}, [openTimeout]);
	let onSubmenuOpen = (0, import_react.useCallback)((focusStrategy) => {
		cancelOpenTimeout();
		state.open(focusStrategy);
	}, [state, cancelOpenTimeout]);
	let onSubmenuClose = (0, import_react.useCallback)(() => {
		cancelOpenTimeout();
		state.close();
	}, [state, cancelOpenTimeout]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		return () => {
			cancelOpenTimeout();
		};
	}, [cancelOpenTimeout]);
	let submenuKeyDown = (e) => {
		if (!$23f2114a1b82827e$export$b4f377a2b6254582(e.currentTarget)) return;
		switch (e.key) {
			case "ArrowLeft":
				if (direction === "ltr" && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
					e.preventDefault();
					e.stopPropagation();
					onSubmenuClose();
					if (!shouldUseVirtualFocus && ref.current) $1969ac565cfec8d0$export$de79e2c695e052f3(ref.current);
				}
				break;
			case "ArrowRight":
				if (direction === "rtl" && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
					e.preventDefault();
					e.stopPropagation();
					onSubmenuClose();
					if (!shouldUseVirtualFocus && ref.current) $1969ac565cfec8d0$export$de79e2c695e052f3(ref.current);
				}
				break;
			case "Escape":
				if ($23f2114a1b82827e$export$4282f70798064fe0(submenuRef.current, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
					e.stopPropagation();
					onSubmenuClose();
					if (!shouldUseVirtualFocus && ref.current) $1969ac565cfec8d0$export$de79e2c695e052f3(ref.current);
				}
				break;
		}
	};
	let submenuProps = {
		id: overlayId,
		"aria-labelledby": submenuTriggerId,
		submenuLevel: state.submenuLevel,
		...type === "menu" && {
			onClose: state.closeAll,
			autoFocus: state.focusStrategy ?? void 0,
			onKeyDown: submenuKeyDown
		}
	};
	let submenuTriggerKeyDown = (e) => {
		switch (e.key) {
			case "ArrowRight":
				if (!isDisabled) if (direction === "ltr") {
					e.preventDefault();
					if (!state.isOpen) onSubmenuOpen("first");
					if (type === "menu" && !!submenuRef?.current && $23f2114a1b82827e$export$cd4e5573fbe2b576() === ref?.current) $1969ac565cfec8d0$export$de79e2c695e052f3(submenuRef.current);
				} else if (state.isOpen) onSubmenuClose();
				else e.continuePropagation();
				break;
			case "ArrowLeft":
				if (!isDisabled) if (direction === "rtl") {
					e.preventDefault();
					if (!state.isOpen) onSubmenuOpen("first");
					if (type === "menu" && !!submenuRef?.current && $23f2114a1b82827e$export$cd4e5573fbe2b576() === ref?.current) $1969ac565cfec8d0$export$de79e2c695e052f3(submenuRef.current);
				} else if (state.isOpen) onSubmenuClose();
				else e.continuePropagation();
				break;
			default:
				e.continuePropagation();
				break;
		}
	};
	let onPressStart = (e) => {
		if (!isDisabled && (e.pointerType === "virtual" || e.pointerType === "keyboard")) onSubmenuOpen("first");
	};
	let onPress = (e) => {
		if (!isDisabled && (e.pointerType === "touch" || e.pointerType === "mouse")) onSubmenuOpen();
	};
	let onHoverChange = (isHovered) => {
		if (!isDisabled) {
			if (isHovered && !state.isOpen) {
				if (!openTimeout.current) openTimeout.current = setTimeout(() => {
					onSubmenuOpen();
				}, delay);
			} else if (!isHovered) cancelOpenTimeout();
		}
	};
	$600b3cf69ae46262$export$90fc3a17d93f704c(parentMenuRef, "focusin", (e) => {
		if (state.isOpen && $23f2114a1b82827e$export$4282f70798064fe0(parentMenuRef.current, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && $23f2114a1b82827e$export$e58f029f0fbfdb29(e) !== ref.current) onSubmenuClose();
	});
	let shouldCloseOnInteractOutside = (target) => {
		if (target !== ref.current) return true;
		return false;
	};
	$eac5d44fa99b2e3b$export$85ec83e04c95f50a({
		menuRef: parentMenuRef,
		submenuRef,
		isOpen: state.isOpen,
		isDisabled
	});
	return {
		submenuTriggerProps: {
			id: submenuTriggerId,
			"aria-controls": state.isOpen ? overlayId : void 0,
			"aria-haspopup": !isDisabled ? type : void 0,
			"aria-expanded": state.isOpen ? "true" : "false",
			onPressStart,
			onPress,
			onHoverChange,
			onKeyDown: submenuTriggerKeyDown,
			isOpen: state.isOpen
		},
		submenuProps,
		popoverProps: {
			isNonModal: true,
			shouldCloseOnInteractOutside
		}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/ar-AE.mjs
var $144b40583c9847c5$exports = {};
$144b40583c9847c5$exports = { "Clear search": `\u{645}\u{633}\u{62D} \u{627}\u{644}\u{628}\u{62D}\u{62B}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/bg-BG.mjs
var $f7ac89ad9c1c6708$exports = {};
$f7ac89ad9c1c6708$exports = { "Clear search": `\u{418}\u{437}\u{447}\u{438}\u{441}\u{442}\u{432}\u{430}\u{43D}\u{435} \u{43D}\u{430} \u{442}\u{44A}\u{440}\u{441}\u{435}\u{43D}\u{435}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/cs-CZ.mjs
var $b5d80d3b86cad359$exports = {};
$b5d80d3b86cad359$exports = { "Clear search": `Vymazat hled\xe1n\xed` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/da-DK.mjs
var $7bc76068ce4c3b7e$exports = {};
$7bc76068ce4c3b7e$exports = { "Clear search": `Ryd s\xf8gning` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/de-DE.mjs
var $ccd90980ce76d396$exports = {};
$ccd90980ce76d396$exports = { "Clear search": `Suche zur\xfccksetzen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/el-GR.mjs
var $ad9b187d34fdd225$exports = {};
$ad9b187d34fdd225$exports = { "Clear search": `\u{391}\u{3C0}\u{3B1}\u{3BB}\u{3BF}\u{3B9}\u{3C6}\u{3AE} \u{3B1}\u{3BD}\u{3B1}\u{3B6}\u{3AE}\u{3C4}\u{3B7}\u{3C3}\u{3B7}\u{3C2}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/en-US.mjs
var $0b5fc13def2a30c7$exports = {};
$0b5fc13def2a30c7$exports = { "Clear search": `Clear search` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/es-ES.mjs
var $e35f8fb6c3f9e97c$exports = {};
$e35f8fb6c3f9e97c$exports = { "Clear search": `Borrar b\xfasqueda` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/et-EE.mjs
var $40e49c6c9e6fa358$exports = {};
$40e49c6c9e6fa358$exports = { "Clear search": `T\xfchjenda otsing` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/fi-FI.mjs
var $a4988accc5a2bbb9$exports = {};
$a4988accc5a2bbb9$exports = { "Clear search": `Tyhjenn\xe4 haku` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/fr-FR.mjs
var $edce3ce0bbac84b4$exports = {};
$edce3ce0bbac84b4$exports = { "Clear search": `Effacer la recherche` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/he-IL.mjs
var $879d66a4ec6ff3f5$exports = {};
$879d66a4ec6ff3f5$exports = { "Clear search": `\u{5E0}\u{5E7}\u{5D4} \u{5D7}\u{5D9}\u{5E4}\u{5D5}\u{5E9}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/hr-HR.mjs
var $c1852d2398baa2ff$exports = {};
$c1852d2398baa2ff$exports = { "Clear search": `Obri\u{161}i pretragu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/hu-HU.mjs
var $970538d6c6329605$exports = {};
$970538d6c6329605$exports = { "Clear search": `Keres\xe9s t\xf6rl\xe9se` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/it-IT.mjs
var $508544fa08cae44d$exports = {};
$508544fa08cae44d$exports = { "Clear search": `Cancella ricerca` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/ja-JP.mjs
var $e6be46486a51c27f$exports = {};
$e6be46486a51c27f$exports = { "Clear search": `\u{691C}\u{7D22}\u{3092}\u{30AF}\u{30EA}\u{30A2}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/ko-KR.mjs
var $aca782271fda5aaa$exports = {};
$aca782271fda5aaa$exports = { "Clear search": `\u{AC80}\u{C0C9} \u{C9C0}\u{C6B0}\u{AE30}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/lt-LT.mjs
var $3bf9ad93c1aad52f$exports = {};
$3bf9ad93c1aad52f$exports = { "Clear search": `I\u{161}valyti ie\u{161}k\u{105}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/lv-LV.mjs
var $f648321ae94b8ad5$exports = {};
$f648321ae94b8ad5$exports = { "Clear search": `Not\u{12B}r\u{12B}t mekl\u{113}\u{161}anu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/nb-NO.mjs
var $656f1a37422df52a$exports = {};
$656f1a37422df52a$exports = { "Clear search": `T\xf8m s\xf8k` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/nl-NL.mjs
var $82eacc9a6cad8168$exports = {};
$82eacc9a6cad8168$exports = { "Clear search": `Zoekactie wissen` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/pl-PL.mjs
var $9af183cfb2cb9094$exports = {};
$9af183cfb2cb9094$exports = { "Clear search": `Wyczy\u{15B}\u{107} zawarto\u{15B}\u{107} wyszukiwania` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/pt-BR.mjs
var $53e95c7b6521e26c$exports = {};
$53e95c7b6521e26c$exports = { "Clear search": `Limpar pesquisa` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/pt-PT.mjs
var $ab35ca149e74c27f$exports = {};
$ab35ca149e74c27f$exports = { "Clear search": `Limpar pesquisa` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/ro-RO.mjs
var $09af5659fa5d1530$exports = {};
$09af5659fa5d1530$exports = { "Clear search": `\u{15E}terge\u{163}i c\u{103}utarea` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/ru-RU.mjs
var $bab267b77ddeadf8$exports = {};
$bab267b77ddeadf8$exports = { "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{438}\u{441}\u{43A}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/sk-SK.mjs
var $c42af7093d2ec3f7$exports = {};
$c42af7093d2ec3f7$exports = { "Clear search": `Vymaza\u{165} vyh\u{13E}ad\xe1vanie` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/sl-SI.mjs
var $79a999abfc605712$exports = {};
$79a999abfc605712$exports = { "Clear search": `Po\u{10D}isti iskanje` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/sr-SP.mjs
var $9790b582a4a31826$exports = {};
$9790b582a4a31826$exports = { "Clear search": `Obri\u{161}i pretragu` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/sv-SE.mjs
var $f09c5845c732c7f4$exports = {};
$f09c5845c732c7f4$exports = { "Clear search": `Rensa s\xf6kning` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/tr-TR.mjs
var $22573d5058bf9ea8$exports = {};
$22573d5058bf9ea8$exports = { "Clear search": `Aramay\u{131} temizle` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/uk-UA.mjs
var $211addb72c816ef7$exports = {};
$211addb72c816ef7$exports = { "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{438} \u{43F}\u{43E}\u{448}\u{443}\u{43A}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/zh-CN.mjs
var $8eeb1c35d0764ab5$exports = {};
$8eeb1c35d0764ab5$exports = { "Clear search": `\u{6E05}\u{9664}\u{641C}\u{7D22}` };
//#endregion
//#region node_modules/react-aria/dist/private/intl/searchfield/zh-TW.mjs
var $d63da6b1e3b1db3a$exports = {};
$d63da6b1e3b1db3a$exports = { "Clear search": `\u{6E05}\u{9664}\u{641C}\u{5C0B}\u{689D}\u{4EF6}` };
//#endregion
//#region node_modules/react-aria/dist/private/searchfield/intlStrings.mjs
var $cb1bf3901ab9f046$exports = {};
$cb1bf3901ab9f046$exports = {
	"ar-AE": $144b40583c9847c5$exports,
	"bg-BG": $f7ac89ad9c1c6708$exports,
	"cs-CZ": $b5d80d3b86cad359$exports,
	"da-DK": $7bc76068ce4c3b7e$exports,
	"de-DE": $ccd90980ce76d396$exports,
	"el-GR": $ad9b187d34fdd225$exports,
	"en-US": $0b5fc13def2a30c7$exports,
	"es-ES": $e35f8fb6c3f9e97c$exports,
	"et-EE": $40e49c6c9e6fa358$exports,
	"fi-FI": $a4988accc5a2bbb9$exports,
	"fr-FR": $edce3ce0bbac84b4$exports,
	"he-IL": $879d66a4ec6ff3f5$exports,
	"hr-HR": $c1852d2398baa2ff$exports,
	"hu-HU": $970538d6c6329605$exports,
	"it-IT": $508544fa08cae44d$exports,
	"ja-JP": $e6be46486a51c27f$exports,
	"ko-KR": $aca782271fda5aaa$exports,
	"lt-LT": $3bf9ad93c1aad52f$exports,
	"lv-LV": $f648321ae94b8ad5$exports,
	"nb-NO": $656f1a37422df52a$exports,
	"nl-NL": $82eacc9a6cad8168$exports,
	"pl-PL": $9af183cfb2cb9094$exports,
	"pt-BR": $53e95c7b6521e26c$exports,
	"pt-PT": $ab35ca149e74c27f$exports,
	"ro-RO": $09af5659fa5d1530$exports,
	"ru-RU": $bab267b77ddeadf8$exports,
	"sk-SK": $c42af7093d2ec3f7$exports,
	"sl-SI": $79a999abfc605712$exports,
	"sr-SP": $9790b582a4a31826$exports,
	"sv-SE": $f09c5845c732c7f4$exports,
	"tr-TR": $22573d5058bf9ea8$exports,
	"uk-UA": $211addb72c816ef7$exports,
	"zh-CN": $8eeb1c35d0764ab5$exports,
	"zh-TW": $d63da6b1e3b1db3a$exports
};
//#endregion
//#region node_modules/react-aria/dist/private/searchfield/useSearchField.mjs
function $parcel$interopDefault(a) {
	return a && a.__esModule ? a.default : a;
}
function $44614525ec969a63$export$9bb30bbe003b82e0(props, state, inputRef) {
	let stringFormatter = $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault($cb1bf3901ab9f046$exports), "@react-aria/searchfield");
	let { isDisabled, isReadOnly, onSubmit, onClear, type = "search" } = props;
	let onKeyDown = (e) => {
		const key = e.key;
		if (key === "Enter" && (isDisabled || isReadOnly)) e.preventDefault();
		if (isDisabled || isReadOnly) return;
		if (key === "Enter" && onSubmit) {
			e.preventDefault();
			onSubmit(state.value);
		}
		if (key === "Escape") if (state.value === "" && (!inputRef.current || inputRef.current.value === "")) e.continuePropagation();
		else {
			e.preventDefault();
			state.setValue("");
			if (onClear) onClear();
		}
	};
	let onClearButtonClick = () => {
		state.setValue("");
		if (onClear) onClear();
	};
	let onPressStart = () => {
		inputRef.current?.focus();
	};
	let { labelProps, inputProps, descriptionProps, errorMessageProps, ...validation } = $054f71d2330da2e3$export$712718f7aec83d5({
		...props,
		value: state.value,
		onChange: state.setValue,
		onKeyDown: !isReadOnly ? $a4e76a5424781910$export$e08e3b67e392101e(onKeyDown, props.onKeyDown) : props.onKeyDown,
		type
	}, inputRef);
	return {
		labelProps,
		inputProps: {
			...inputProps,
			defaultValue: void 0
		},
		clearButtonProps: {
			"aria-label": stringFormatter.format("Clear search"),
			excludeFromTabOrder: true,
			preventFocusOnPress: true,
			isDisabled: isDisabled || isReadOnly,
			onPress: onClearButtonClick,
			onPressStart
		},
		descriptionProps,
		errorMessageProps,
		...validation
	};
}
//#endregion
export { $03e8ab2d84d7657a$export$4338b53315abf666, $081058010ef8962e$export$2317d149ed6f78c4, $0c4a58759813079a$export$4e328f61c538687f, $0d47b37c475c5231$export$3351871ee4b288b8, $1a9c2c840fd36413$export$9d32628fc2aea7da, $23f2114a1b82827e$export$b4f377a2b6254582, $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, $390e54f620492c70$export$f680877a34711e37, $3e6197669829fe11$export$40bfa8c7b0832715, $4064df0d6f9620e1$export$c9058316764c140e, $42ceafc619f9c3ba$export$18af5c7a9e9b3664, $42ceafc619f9c3ba$export$bf788dd355e3a401, $42ceafc619f9c3ba$export$e953bb1cd0f19726, $42ceafc619f9c3ba$export$fb8073518f34e6ec, $44614525ec969a63$export$9bb30bbe003b82e0, $535772f9d2c1f38d$export$20e40289641fbbb6, $6f0c29017aeec335$export$437f11dc9b403b78, $6f0c29017aeec335$export$5ae2504e948afce5, $6f0c29017aeec335$export$d68d59712b04d9d1, $6f0c29017aeec335$export$fd11f34e1d07f134, $7355d4e5c49461b6$export$73f7a44322579622, $8794213c1141208f$export$7138b0d059a6e743, $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, $8f5a2122b0992be3$export$630ff653c5ada6a9, $970072cf4b13fde3$export$683480f191c0e3ea, $a2d69d6ee8486855$export$38eaa17faae8f579, $a46cf152bb926da5$export$a9b970dcc4ae71a9, $a80bd3e9349588e7$export$727c8fc270210f13, $ac4318a9c075bb9f$export$ea18c227d4417cc3, $bbaa08b3cd72f041$export$9d1611c77c2fe928, $c4867b2f328c2698$export$e5c5a5f917a5871c, $cd5ea4b915021f1d$export$1005530eda016c13, $cd5ea4b915021f1d$export$8c434b3a7a4dad6, $cd5ea4b915021f1d$export$fbdeaa6a76694f71, $d7a937236970dc7f$export$c6fdb837b070b4ff, $d7f64c32b702fe2c$export$86427a43e3e48ebb, $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59, $dc321dbb6473ef33$export$52210f68a14655d0, $e969f22b6713ca4a$export$ae780daf29e6d456, $f192c2f16961cbe0$export$80f3e147d781571c, $f19b83c1486f45cc$export$dc9c12ed27dd1b49, $f8a024fbad3a5a2e$export$542a6fd13ac93354, $fcc7165e876206c6$export$45fda7c47f93fd48, $fcc7165e876206c6$export$6d3443f2c48bfc20 };
