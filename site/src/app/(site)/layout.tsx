import { SiteFooter } from "@/components/organisms/site-footer";
import { SiteNavbar } from "@/components/organisms/site-navbar";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SiteNavbar />
            {children}
            <SiteFooter />
        </>
    );
}
