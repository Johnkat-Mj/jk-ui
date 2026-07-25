//#region node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
var $a747a10fe70a57da$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
var $a747a10fe70a57da$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
var $a747a10fe70a57da$var$cachedGlobalStrings = void 0;
var $a747a10fe70a57da$export$c17fa47878dc55b6 = class $a747a10fe70a57da$export$c17fa47878dc55b6 {
	constructor(messages, defaultLocale = "en-US") {
		this.strings = Object.fromEntries(Object.entries(messages).filter(([, v]) => v));
		this.defaultLocale = defaultLocale;
	}
	/** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
		let string = this.getStringsForLocale(locale)[key];
		if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
		return string;
	}
	/** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
		let strings = this.strings[locale];
		if (!strings) {
			strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
			this.strings[locale] = strings;
		}
		return strings;
	}
	static getGlobalDictionaryForPackage(packageName) {
		if (typeof window === "undefined") return null;
		let locale = window[$a747a10fe70a57da$var$localeSymbol];
		if ($a747a10fe70a57da$var$cachedGlobalStrings === void 0) {
			let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
			if (!globalStrings) return null;
			$a747a10fe70a57da$var$cachedGlobalStrings = {};
			for (let pkg in globalStrings) $a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({ [locale]: globalStrings[pkg] }, locale);
		}
		let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
		if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
		return dictionary;
	}
};
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
	if (strings[locale]) return strings[locale];
	let language = $a747a10fe70a57da$var$getLanguage(locale);
	if (strings[language]) return strings[language];
	for (let key in strings) if (key.startsWith(language + "-")) return strings[key];
	return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).language;
	return locale.split("-")[0];
}
//#endregion
//#region node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var $b27c684a33948c64$var$pluralRulesCache = /* @__PURE__ */ new Map();
var $b27c684a33948c64$var$numberFormatCache = /* @__PURE__ */ new Map();
var $b27c684a33948c64$export$2f817fcdc4b89ae0 = class {
	constructor(locale, strings) {
		this.locale = locale;
		this.strings = strings;
	}
	/** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
		let message = this.strings.getStringForLocale(key, this.locale);
		return typeof message === "function" ? message(variables, this) : message;
	}
	plural(count, options, type = "cardinal") {
		let opt = options["=" + count];
		if (opt) return typeof opt === "function" ? opt() : opt;
		let key = this.locale + ":" + type;
		let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
		if (!pluralRules) {
			pluralRules = new Intl.PluralRules(this.locale, { type });
			$b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
		}
		opt = options[pluralRules.select(count)] || options.other;
		return typeof opt === "function" ? opt() : opt;
	}
	number(value) {
		let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
		if (!numberFormat) {
			numberFormat = new Intl.NumberFormat(this.locale);
			$b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
		}
		return numberFormat.format(value);
	}
	select(options, value) {
		let opt = options[value] || options.other;
		return typeof opt === "function" ? opt() : opt;
	}
};
//#endregion
export { $a747a10fe70a57da$export$c17fa47878dc55b6, $b27c684a33948c64$export$2f817fcdc4b89ae0 };
