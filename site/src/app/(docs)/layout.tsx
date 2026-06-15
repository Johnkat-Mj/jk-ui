import { DocsLayoutClient } from "@/components/organisms/docs-layout-client";

export default function SiteDocsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DocsLayoutClient>
            {children}
        </DocsLayoutClient>
    );
}
