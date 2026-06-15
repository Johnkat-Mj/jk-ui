import { uiOutlineStyle } from "./ui-utilities/outline-style";
import { uiSoftStyle } from "./ui-utilities/soft-style";
import { uiSolidStyle } from "./ui-utilities/solid-style";
import { uiSubtleStyle } from "./ui-utilities/subtle-style";

export const uiCSSTheme: Record<string, { title: string; code: string, lang: "css" | "ts" | "js" | "jsx" }> = {
    ...uiSoftStyle,
    ...uiSolidStyle,
    ...uiOutlineStyle,
    ...uiSubtleStyle
}