import type { ReactNode } from "react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
	return <div className="w-full lg:pl-60">{children}</div>;
};
