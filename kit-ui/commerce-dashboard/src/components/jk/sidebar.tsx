"use client"

import { type ReactNode, createContext, useContext, useReducer } from "react";
import { Button as RAC_Button } from "react-aria-components";
import { type ButtonProps, buttonStyles } from "./button";
import { cx } from "@/lib/utils";

type SidebarContextProps = {
  isOpenSidebar: boolean;
  isResizedSidebar: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  toggleSidebar?: () => void;
  resizeSidebar?: () => void;
};

const INITIAL_STATE: SidebarContextProps = {
  isOpenSidebar: false,
  isResizedSidebar: false,
};

const sidebarReducer = (
  state: SidebarContextProps,
  action: any,
): SidebarContextProps => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOpenSidebar: !state.isOpenSidebar };
    case "OPEN":
      return { ...state, isOpenSidebar: true };
    case "CLOSE":
      return { ...state, isOpenSidebar: false };
    case "RESIZE":
      return { ...state, isResizedSidebar: !state.isResizedSidebar };
    default:
      return state;
  }
};

const SidebarContext = createContext<SidebarContextProps>(INITIAL_STATE);

const useSidebarContext = () => {
  const sidebarCntxt = useContext(SidebarContext);

  if (sidebarCntxt === null) {
    throw Error("Error on context");
  }

  return sidebarCntxt;
};

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(sidebarReducer, INITIAL_STATE);

  const openSidebar = () => {
    dispatch({
      type: "OPEN",
    });
  };
  const closeSidebar = () => {
    dispatch({
      type: "CLOSE",
    });
  };
  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  const resizeSidebar = () => {
    dispatch({
      type: "RESIZE",
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpenSidebar: state.isOpenSidebar,
        isResizedSidebar: state.isResizedSidebar,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        resizeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const SidebarOverlayElement = ({
  isBlured,
  isStatic,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  isBlured?: boolean;
  isStatic?: boolean;
}) => {
  const { isOpenSidebar, closeSidebar } = useSidebarContext();

  const closeSidebar_ = () => {
    if (!isStatic) closeSidebar?.();
  };
  return (
    <div
      data-state={isOpenSidebar ? "open" : "close"}
      className={cx(
        "fixed inset-0 z-40 bg-gray-800/40",
        isBlured ? "backdrop-blur-sm" : "",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        aria-label="Close sidebar"
        onClick={closeSidebar_}
        data-state={isOpenSidebar ? "open" : "close"}
        className={"outline-none ring-0 before:absolute before:inset-0 appearance-none bg-transparent"}
      />
    </div>
  );
};

const SidebarToggler = ({
  variant = "ghost",
  intent,
  className,
  iconOnly = true,
  size = "sm",
  ...props
}: ButtonProps<"ghost">) => {
  const { toggleSidebar } = useSidebarContext();
  return (
    <RAC_Button
      onPress={() => toggleSidebar?.()}
      className={buttonStyles({
        variant: variant,
        intent,
        iconOnly,
        size,
        className: `group ${className}`,
      })}
      {...props}
    />
  );
};

const SidebarClose = ({
  variant,
  intent,
  className,
  iconOnly = true,
  size = "sm",
  ...props
}: ButtonProps<"ghost">) => {
  const { closeSidebar } = useSidebarContext();
  return (
    <RAC_Button
      onClick={closeSidebar}
      className={buttonStyles({
        variant: variant,
        intent,
        iconOnly,
        size,
        className: `group ${className}`,
      })}
      {...props}
    />
  );
};

const SidebarResizer = ({
  variant,
  intent,
  className,
  iconOnly = true,
  size = "sm",
  ...props
}: ButtonProps<"ghost">) => {
  const { resizeSidebar } = useSidebarContext();
  return (
    <RAC_Button
      onClick={resizeSidebar}
      className={buttonStyles({
        variant: variant,
        intent,
        iconOnly,
        size,
        className: `group ${className}`,
      })}
      {...props}
    />
  );
};

const SidebarBase = ({
  children,
  ...props
}: React.ComponentProps<"aside"> & { children: ReactNode }) => {
  const { isResizedSidebar, isOpenSidebar } = useSidebarContext();
  return (
    <aside
      data-state={isOpenSidebar ? "open" : "close"}
      data-resized={isResizedSidebar ? "true" : null}
      {...props}
    >
      {children}
    </aside>
  );
};

export {
  SidebarProvider,
  useSidebarContext,
  SidebarOverlayElement,
  SidebarBase,
  SidebarClose,
  SidebarResizer,
  SidebarToggler,
};
