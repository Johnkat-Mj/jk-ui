import { sidebarItems } from "@/data/index";

export type SlugPaginate = {
    title: string;
    slug: string;
    description: string;
    keywords: string;
};

// Flatten all items from all groups into a single array
const flattenAllItems = (): SlugPaginate[] => {
    return sidebarItems.flatMap((group) =>
        group.items.map(({ title, path, description, keywords }) => ({
            title,
            slug: path,
            description,
            keywords,
        }))
    );
};

// Find the index of the active item based on the slug
const getActiveIndex = (array: SlugPaginate[], slug: string): number => {
    return array.findIndex((item) => item.slug === slug);
};

// Get the previous, next, and current items based on the slug
export const getPagger = (slug: string) => {
    const flattenedItems = flattenAllItems();

    const activeIndex = getActiveIndex(flattenedItems, slug);

    // Handle invalid index
    if (activeIndex === -1) {
        return { prev: null, next: null, current: null };
    }

    // Get current item
    const current = flattenedItems[activeIndex];

    // Get prev item (null if first item)
    const prev = activeIndex > 0 ? flattenedItems[activeIndex - 1] : null;

    // Get next item (null if last item)
    const next = activeIndex < flattenedItems.length - 1 ? flattenedItems[activeIndex + 1] : null;

    return { prev, next, current };
};