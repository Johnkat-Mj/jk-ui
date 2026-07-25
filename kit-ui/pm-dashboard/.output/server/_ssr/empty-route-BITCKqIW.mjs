import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { Container } from "./container-CK8U8-8t.mjs";
import { Card } from "./card-Bq-Tqwdu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/empty-route-BITCKqIW.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap pb-8 pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-12 flex flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "iconify ph--wrench size-16 text-muted-foreground/30 mb-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold text-foreground mb-1",
					children: "Coming Soon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-sm",
					children: "This section is under development. Check back soon for updates."
				})
			]
		}) })
	});
}
//#endregion
export { EmptyRoute as component };
