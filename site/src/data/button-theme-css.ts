import { btnGhostStyle } from "./buttons/ghost-style";
import { btnOutlineStyle } from "./buttons/outline-style";
import { btnSoftStyle } from "./buttons/soft-style";
import { btnSolidStyle } from "./buttons/solid-style";

export const btnCSSTheme: Record<string, { title: string; code: string, lang: "css" | "ts" | "js" | "jsx" }> = {
    ...btnSoftStyle,
    ...btnGhostStyle,
    ...btnSolidStyle,
    ...btnOutlineStyle,
}