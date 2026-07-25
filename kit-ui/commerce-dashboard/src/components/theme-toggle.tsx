import { useEffect, useState } from "react";
import {
	MenuContent,
	MenuIcon,
	MenuItem,
	MenuLabel,
	MenuSubMenu,
} from "./jk/menu";

type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(): ThemeMode {
	if (typeof window === "undefined") {
		return "auto";
	}

	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") {
		return stored;
	}

	return "auto";
}

function applyThemeMode(mode: ThemeMode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);

	if (mode === "auto") {
		document.documentElement.removeAttribute("data-theme");
	} else {
		document.documentElement.setAttribute("data-theme", mode);
	}

	document.documentElement.style.colorScheme = resolved;
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<ThemeMode>("auto");

	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);

	useEffect(() => {
		if (mode !== "auto") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");

		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);

	const changeTheme = (theme: ThemeMode) => {
		setMode(theme);
		applyThemeMode(theme);
		window.localStorage.setItem("theme", theme);
	};

	return (
		<MenuSubMenu>
			<MenuItem>
				<MenuIcon aria-hidden="true">
					<span className="iconify ph--sun-horizon" />
				</MenuIcon>
				<MenuLabel>Switch theme</MenuLabel>
			</MenuItem>
			<MenuContent>
				<MenuItem onAction={() => changeTheme("auto")}>
					<MenuIcon aria-hidden="true">
						<span className="iconify ph--monitor" />
					</MenuIcon>
					<MenuLabel>System</MenuLabel>
				</MenuItem>
				<MenuItem onAction={() => changeTheme("dark")}>
					<MenuIcon aria-hidden="true">
						<span className="iconify ph--moon-stars" />
					</MenuIcon>
					<MenuLabel>Dark</MenuLabel>
				</MenuItem>
				<MenuItem onAction={() => changeTheme("light")}>
					<MenuIcon aria-hidden="true">
						<span className="iconify ph--sun-dim" />
					</MenuIcon>
					<MenuLabel>Light</MenuLabel>
				</MenuItem>
			</MenuContent>
		</MenuSubMenu>
	);
}
