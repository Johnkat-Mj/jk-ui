export type SeoType = {
    ogImage: {
        src: string;
        alt: string;
    };
    keywords: string;
    title: string;
    description: string;
};

export type SidebarItem = {
    title: string;
    path: string;
    description: string;
    keywords: string;
    state?: "updated" | "draft" | "new" | "none" | "wip",
    hideInSidebar?: boolean
}
type SidebarGroupItems = {
    label: string;
    items: SidebarItem[];
}

export type SidebarGroupCat = SidebarGroupItems;


export type BlockItem = {
    key: string,
    title: string,
    preview: string,
    code: {
        html: string,
        astro?: string,
        laravel?: string,
    }
}
export type BlockComponent = {
    name: string,
    title: string,
    description: string,
    items: BlockItem[]
}
export type UiCardProps = {
    href: string;
    title: string;
    description: string;
    icon: string;
    iconDark?: string
}

export type CornerRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
export type BtnSizeVariant = "xs" | "sm" | "md" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl"
export type UiSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
export type VariantIntent = "primary" | "secondary" | "accent" | "info" | "warning" | "success" | "destructive" | "gray" | "neutral"
export type UiVariant = "outline" | "soft" | "subtle" | "solid"
export type SupportedLanguage = "css" | "js" | "ts" | "tsx" | "jsx" | "plain"|"shell"
export type ComponentCode = Record<string, { lang: SupportedLanguage, name: string, code: string, props?: Record<string, unknown> }>






export type tGlobalContext = {
    isOpenNavbar: boolean;
    isOpenSidebar: boolean;
    globalSearchOpened: boolean,
    openNavbar?: () => void;
    closeNavbar?: () => void;
    toggleNavbar?: () => void;
    openSidebar?: () => void;
    closeSidebar?: () => void;
    toggleSidebar?: () => void;
    toggleGlobalSearchOpened?: () => void,
};

