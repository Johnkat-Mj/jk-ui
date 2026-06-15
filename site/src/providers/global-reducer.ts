import type { tGlobalContext } from "@/types";

type Action =
  | { type: "TOGGLE_NAV" }
  | { type: "OPEN_NAV" }
  | { type: "CLOSE_NAV" }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "TOGGLE_GLOBAL_SEARCH" };

export const globalReducer = (
  state: tGlobalContext,
  action: Action
): tGlobalContext => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return { ...state, isOpenNavbar: !state.isOpenNavbar };
    case "OPEN_NAV":
      return { ...state, isOpenNavbar: true };
    case "CLOSE_NAV":
      return { ...state, isOpenNavbar: false };
    case "TOGGLE_SIDEBAR":
      return { ...state, isOpenSidebar: !state.isOpenSidebar };
    case "OPEN_SIDEBAR":
      return { ...state, isOpenSidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, isOpenSidebar: false };
    case "TOGGLE_GLOBAL_SEARCH":
      return { ...state, globalSearchOpened: !state.globalSearchOpened }
    default:
      return state;
  }
};