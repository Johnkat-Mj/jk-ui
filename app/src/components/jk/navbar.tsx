"use client"

import { type ReactNode, createContext, useContext, useReducer } from "react";
import { Button as RAC_Button } from "react-aria-components/Button";
import { type ButtonProps, buttonStyles } from "./button";

type NavbarContextProps = {
	isOpenNavbar: boolean;
	openNavbar?: () => void;
	closeNavbar?: () => void;
	toggleNavbar?: () => void;
};

const INITIAL_STATE: NavbarContextProps = {
	isOpenNavbar: false,
};

type NavbarAction = { type: "TOGGLE" } | { type: "OPEN" } | { type: "CLOSE" };

const navbarReducer = (
	state: NavbarContextProps,
	action: NavbarAction,
): NavbarContextProps => {
	switch (action.type) {
		case "TOGGLE":
			return { ...state, isOpenNavbar: !state.isOpenNavbar };
		case "OPEN":
			return { ...state, isOpenNavbar: true };
		case "CLOSE":
			return { ...state, isOpenNavbar: false };
		default:
			return state;
	}
};

const NavbarContext = createContext<NavbarContextProps>(INITIAL_STATE);

const useNavbarContext = () => {
	const navbarCntxt = useContext(NavbarContext);

	if (navbarCntxt === null) {
		throw Error("Error on context");
	}

	return navbarCntxt;
};

const NavbarProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(navbarReducer, INITIAL_STATE);

	const openNavbar = () => {
		dispatch({
			type: "OPEN",
		});
	};
	const closeNavbar = () => {
		dispatch({
			type: "CLOSE",
		});
	};
	const toggleNavbar = () => {
		dispatch({
			type: "TOGGLE",
		});
	};

	return (
		<NavbarContext.Provider
			value={{
				isOpenNavbar: state.isOpenNavbar,
				openNavbar,
				closeNavbar,
				toggleNavbar,
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
};

const NavbarOverlayElement = ({
	isBlured,
	isStatic,
	...props
}: React.ComponentProps<"div"> & {
	isBlured?: boolean;
	isStatic?: boolean;
}) => {
	const { isOpenNavbar, closeNavbar } = useNavbarContext();

	const closeNavbar_ = () => {
		if (!isStatic) closeNavbar?.();
	};
	return (
		<div data-state={isOpenNavbar ? "open" : "close"} {...props}>
			{!isStatic ? (
				<button
					type="button"
					className="absolute appearance-none bg-transparent outline-0 inset-0"
					onClick={closeNavbar_}
					aria-label="overlay button"
				></button>
			) : null}
		</div>
	);
};

const NavbarToggler = ({
	variant = "ghost",
	intent,
	className,
	iconOnly = true,
	size = "sm",
	...props
}: ButtonProps<"ghost">) => {
	const { toggleNavbar, isOpenNavbar } = useNavbarContext();
	return (
		<RAC_Button
			aria-expanded={isOpenNavbar}
			onPress={() => toggleNavbar?.()}
			className={buttonStyles({
				variant: variant,
				intent,
				iconOnly,
				size,
				className: ` ${className}`,
			})}
			{...props}
		/>
	);
};

const NavbarClose = ({
	variant,
	intent,
	className,
	iconOnly = true,
	size = "sm",
	...props
}: ButtonProps<"ghost">) => {
	const { closeNavbar } = useNavbarContext();
	return (
		<RAC_Button
			onClick={closeNavbar}
			className={buttonStyles({
				variant: variant,
				intent,
				iconOnly,
				size,
				className: ` ${className}`,
			})}
			{...props}
		/>
	);
};

const NavbarBase = ({
	children,
	...props
}: React.ComponentProps<"div"> & { children: ReactNode }) => {
	const { isOpenNavbar } = useNavbarContext();
	return (
		<div data-state={isOpenNavbar ? "open" : "close"} {...props}>
			{children}
		</div>
	);
};

export {
	NavbarProvider,
	useNavbarContext,
	NavbarOverlayElement,
	NavbarBase,
	NavbarClose,
	NavbarToggler,
};
