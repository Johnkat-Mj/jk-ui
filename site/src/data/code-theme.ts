import { btnCSSTheme } from "./button-theme-css";
import { themeConfig } from "./theme-config";
import { uiCSSTheme } from "./ui-theme-css";


export const codeConfig:Record<string, { title: string; code: string, lang: "css" | "ts" | "js" | "jsx" }> = {
   ...btnCSSTheme,
   ...uiCSSTheme,
   ...themeConfig
} 