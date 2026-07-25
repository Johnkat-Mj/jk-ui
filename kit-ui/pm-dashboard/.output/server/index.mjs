globalThis.__nitro_main__ = import.meta.url;
import { H3Core, HTTPError, NodeResponse, defineHandler, defineLazyEventHandler, resolveDotSegments, serve, toEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { decodePath, joinURL, withLeadingSlash, withoutTrailingSlash } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
function canonicalPath(pathname) {
	return resolveDotSegments(pathname, { decodeSlashes: true });
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/avatar.webp": {
		"type": "image/webp",
		"etag": "\"23914-LRDA02h9mvA/0RXcAKjI9+pQ524\"",
		"mtime": "2026-07-19T08:36:41.202Z",
		"size": 145684,
		"path": "../public/avatar.webp"
	},
	"/avatar1.webp": {
		"type": "image/webp",
		"etag": "\"14158-y8+audmdlFQY0d8nPR0Yss56B88\"",
		"mtime": "2026-07-19T08:36:41.200Z",
		"size": 82264,
		"path": "../public/avatar1.webp"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"f1e-ESBTjHetHyiokkO0tT/irBbMO8Y\"",
		"mtime": "2026-07-19T08:36:41.200Z",
		"size": 3870,
		"path": "../public/favicon.ico"
	},
	"/ico_framer_design.png": {
		"type": "image/png",
		"etag": "\"2974-JjGfqi8V7VVxASh7n1ae3jmaelo\"",
		"mtime": "2026-07-19T08:36:41.201Z",
		"size": 10612,
		"path": "../public/ico_framer_design.png"
	},
	"/ico_prototype.png": {
		"type": "image/png",
		"etag": "\"50d1-PtVTE9fHlW36eYtajrCL+JsVs/I\"",
		"mtime": "2026-07-19T08:36:41.200Z",
		"size": 20689,
		"path": "../public/ico_prototype.png"
	},
	"/ico_ux_design.png": {
		"type": "image/png",
		"etag": "\"13ab-QlAcOgRSO4WAYNHBH6oEIceytAw\"",
		"mtime": "2026-07-19T08:36:41.201Z",
		"size": 5035,
		"path": "../public/ico_ux_design.png"
	},
	"/ico_ui_design.png": {
		"type": "image/png",
		"etag": "\"2dd3-41SlAoL8TzJxS4EAhzf8xtsIPnw\"",
		"mtime": "2026-07-19T08:36:41.202Z",
		"size": 11731,
		"path": "../public/ico_ui_design.png"
	},
	"/ico_webflow.png": {
		"type": "image/png",
		"etag": "\"1323-JJ/1CuoiM1br0NSZ6THgepbEKXs\"",
		"mtime": "2026-07-19T08:36:41.203Z",
		"size": 4899,
		"path": "../public/ico_webflow.png"
	},
	"/logo192.png": {
		"type": "image/png",
		"etag": "\"14e3-f08taHgqf6/O2oRVTsq5tImHdQA\"",
		"mtime": "2026-07-19T08:36:41.204Z",
		"size": 5347,
		"path": "../public/logo192.png"
	},
	"/manifest.json": {
		"type": "application/json",
		"etag": "\"1f2-Oqn/x1R1hBTtEjA8nFhpBeFJJNg\"",
		"mtime": "2026-07-19T08:36:41.203Z",
		"size": 498,
		"path": "../public/manifest.json"
	},
	"/logo512.png": {
		"type": "image/png",
		"etag": "\"25c0-RpFfnQJpTtSb/HqVNJR2hBA9w/4\"",
		"mtime": "2026-07-19T08:36:41.203Z",
		"size": 9664,
		"path": "../public/logo512.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"43-BEzmj4PuhUNHX+oW9uOnPSihxtU\"",
		"mtime": "2026-07-19T08:36:41.208Z",
		"size": 67,
		"path": "../public/robots.txt"
	},
	"/assets/card-L5ncqApG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"662-7aTMKtCkbU9Nw1SW54VTc+eJpJ0\"",
		"mtime": "2026-07-19T08:36:36.333Z",
		"size": 1634,
		"path": "../public/assets/card-L5ncqApG.js"
	},
	"/assets/empty-route-DWh9GJaW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"299-8ZWaXtgB3IWaekE+fG/u4hTnwLI\"",
		"mtime": "2026-07-19T08:36:36.333Z",
		"size": 665,
		"path": "../public/assets/empty-route-DWh9GJaW.js"
	},
	"/assets/globals-DkQoKSbi.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"26e49-HoONQ03IGNps27unqmv1PhBZKeI\"",
		"mtime": "2026-07-19T08:36:36.334Z",
		"size": 159305,
		"path": "../public/assets/globals-DkQoKSbi.css"
	},
	"/assets/routes-DkJ5r8-G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2262-yKQOvHpBZdv5usIaxHi+7tSwgjA\"",
		"mtime": "2026-07-19T08:36:36.334Z",
		"size": 8802,
		"path": "../public/assets/routes-DkJ5r8-G.js"
	},
	"/assets/index-BF5IJiiV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88018-vpqPY1aFZiT1OUZzBuY0JLnka4E\"",
		"mtime": "2026-07-19T08:36:36.333Z",
		"size": 557080,
		"path": "../public/assets/index-BF5IJiiV.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		let s = p.split("/");
		if (s.length > 1 && s[s.length - 1] === "") {
			s.pop();
			p = p.slice(0, -1);
		}
		if (s.length > 1) {
			if (s[1] === "assets") r.push({
				data: $0,
				params: { "_": p.slice(8) }
			});
		}
		return r.reverse();
	};
})();
var _lazy_yFymHT = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_yFymHT
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const rawLayers = findRouteRules(method, pathname);
	const canonical = canonicalPath(pathname);
	const canonicalLayers = canonical === pathname ? void 0 : findRouteRules(method, canonical);
	if (!rawLayers?.length && !canonicalLayers?.length) return { routeRuleMiddleware: [] };
	const routeRules = mergeRouteRules(rawLayers);
	if (canonicalLayers?.length) {
		const canonicalRules = mergeRouteRules(canonicalLayers);
		for (const name in canonicalRules) mergeRouteRule(routeRules, canonicalRules[name], canonicalRules[name].params);
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
function mergeRouteRules(layers) {
	const routeRules = {};
	for (const layer of layers || []) for (const rule of layer.data) mergeRouteRule(routeRules, rule, layer.params);
	return routeRules;
}
function mergeRouteRule(routeRules, rule, params) {
	const currentRule = routeRules[rule.name];
	if (currentRule) {
		if (rule.options === false) {
			delete routeRules[rule.name];
			return;
		}
		if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
			...currentRule.options,
			...rule.options
		};
		else currentRule.options = rule.options;
		currentRule.route = rule.route;
		currentRule.params = {
			...currentRule.params,
			...params
		};
	} else if (rule.options !== false) routeRules[rule.name] = {
		...rule,
		params
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
