import type { ReactNode } from "react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
	return <div className="md:pl-64 w-full">{children}</div>;
};
