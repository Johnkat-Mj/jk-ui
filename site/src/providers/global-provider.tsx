"use client"

import { type ReactNode, createContext, useContext, useReducer } from "react"


import type { tGlobalContext } from "@/types"
import { globalReducer } from "./global-reducer"
import { INITIAL_GLOBALE_STATE } from "@/const/constants"


const GlobalContext = createContext<tGlobalContext>(INITIAL_GLOBALE_STATE)

const useGlobalContext = () => {
    const globalCntxt = useContext(GlobalContext)

    if (globalCntxt === null) {
        throw Error("Error on context")
    }

    return globalCntxt
}
const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(globalReducer, INITIAL_GLOBALE_STATE)

    const openNavbar = () => {
        dispatch({
            type: "OPEN_NAV"
        })
    }
    const closeNavbar = () => {
        dispatch({
            type: "CLOSE_NAV"
        })
    }
    const toggleNavbar = () => {
        dispatch({
            type: "TOGGLE_NAV"
        })
    }
    const openSidebar = () => {
        dispatch({
            type: "OPEN_SIDEBAR"
        })
    }
    const closeSidebar = () => {
        dispatch({
            type: "CLOSE_SIDEBAR"
        })
    }
    const toggleSidebar = () => {
        dispatch({
            type: "TOGGLE_SIDEBAR"
        })
    }

    const toggleGlobalSearchOpened = () => {
        dispatch({
            type: "TOGGLE_GLOBAL_SEARCH"
        })
    }

    return (
        <GlobalContext.Provider value={{
            isOpenNavbar: state.isOpenNavbar,
            isOpenSidebar: state.isOpenSidebar,
            globalSearchOpened: state.globalSearchOpened,
            openNavbar,
            toggleNavbar, closeNavbar,
            openSidebar, closeSidebar, toggleSidebar,
            toggleGlobalSearchOpened,
        }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


export { GlobalProvider, useGlobalContext }