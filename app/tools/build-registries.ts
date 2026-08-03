import fs from "fs";
import path from "path";
import { enrichRegistryWithDependencies } from "./analyze-dependencies";


function build() {

    const root = process.cwd();
    const registriesPath = path.join(root, "registries");
    const componentsPath = path.join(registriesPath, "components.json");
    const chartPath = path.join(registriesPath, "chart.json");
    const blocksPath = path.join(registriesPath, "blocks.json");
    const marketingPath = path.join(registriesPath, "marketing.json");
    const baseR_Path = path.join(registriesPath, "base.json");
    const themesPath = path.join(registriesPath, "themes.json");
    const outPath = path.join(root, "registry.json");

    function readJsonSync(p: string) {
        try {
            const raw = fs.readFileSync(p, "utf8");
            return JSON.parse(raw);
        } catch (err) {
            console.error(`Failed to read/parse JSON at ${p}:`, err);
            process.exit(1);
        }
    }

    let components = readJsonSync(componentsPath);
    let chart = readJsonSync(chartPath);
    let blocks = readJsonSync(blocksPath);
    const base_r = readJsonSync(baseR_Path);
    let marketing_blocks = readJsonSync(marketingPath);
    let themes = readJsonSync(themesPath);

    // Enrich all registries with npm dependencies
    console.log("📦 Analyzing npm dependencies...");
    components = enrichRegistryWithDependencies(components, registriesPath);
    chart = enrichRegistryWithDependencies(chart, registriesPath);
    blocks = enrichRegistryWithDependencies(blocks, registriesPath);
    marketing_blocks = enrichRegistryWithDependencies(marketing_blocks, registriesPath);
    themes = enrichRegistryWithDependencies(themes, registriesPath);

    const componentItems = (components?.items ?? []).map((item: Record<string, unknown>) => {
        if (item.type !== "registry:ui") return item;

        const registryDependencies = Array.isArray(item.registryDependencies)
            ? item.registryDependencies
            : [];

        return {
            ...item,
            registryDependencies: [
                "@jk-ui/base",
                ...registryDependencies.filter((dependency: string) => dependency !== "@jk-ui/base" && dependency !== "@jk-ui/lib"),
            ],
        };
    });

    // Enhance blocks with proper registry names and dependencies
    const blockItems = (blocks?.items ?? []).map((item: Record<string, unknown>) => {
        if (item.type !== "registry:block") return item;

        const name = String(item.name || "");
        const registryDependencies = Array.isArray(item.registryDependencies)
            ? item.registryDependencies
            : [];

        return {
            ...item,
            name: `block-${name}`, // Add @jk-ui/block- prefix
            registryDependencies: ["@jk-ui/base", ...registryDependencies],
        };
    });

    // Enhance themes with proper registry names
    const themeItems = (themes?.items ?? []).map((item: Record<string, unknown>) => {
        const cssVars = item.cssVars && typeof item.cssVars === "object"
            ? item.cssVars as Record<string, unknown>
            : {};
        const theme = cssVars.theme && typeof cssVars.theme === "object"
            ? cssVars.theme as Record<string, string>
            : {};
        const themeVariables = { ...theme };

        delete themeVariables["color-fg"];
        delete themeVariables["color-bg"];
        delete themeVariables["color-danger"];
        themeVariables["color-fg-muted"] = "var(--muted-foreground)";

        // Convert theme name to shadcn-compatible format
        const themeName = String(item.name || "").replace(/^theme-/, "");

        return {
            ...item,
            name: `theme-${themeName}`, // Ensure theme- prefix
            type: "registry:style",
            cssVars: {
                ...cssVars,
                theme: themeVariables,
            },
        };
    });

    const defaultTheme = themeItems.find(
        (item: Record<string, unknown>) => item.name === "theme-jk-ui",
    ) as Record<string, unknown> | undefined;

    const baseItems = (base_r?.items ?? []).map((item: Record<string, unknown>) =>
        item.name === "base"
            ? {
                ...item,
                type: "registry:style",
                cssVars: defaultTheme?.cssVars,
            }
            : item,
    );

    // Enhance marketing blocks similarly
    const marketingItems = (marketing_blocks?.items ?? []).map((item: Record<string, unknown>) => {
        if (item.type !== "registry:block") return item;

        const name = String(item.name || "");
        const registryDependencies = Array.isArray(item.registryDependencies)
            ? item.registryDependencies
            : [];

        return {
            ...item,
            name: `block-${name}`,
            registryDependencies: ["@jk-ui/base", ...registryDependencies],
        };
    });

    // Enhance chart items
    const chartItems = (chart?.items ?? []).map((item: Record<string, unknown>) => {
        if (item.type !== "registry:ui") return item;

        const registryDependencies = Array.isArray(item.registryDependencies)
            ? item.registryDependencies
            : [];

        return {
            ...item,
            registryDependencies: ["@jk-ui/base", ...registryDependencies],
        };
    });

    const finalRegistry = {
        $schema: "https://ui.shadcn.com/schema/registry.json",
        name: "jk-ui",
        homepage: "https://jk-ui.unoforge.com",
        author: "Johnkat MJ <johnkatmj@gmail.com>",
        items: [
            ...componentItems,
            ...chartItems,
            ...blockItems,
            ...baseItems,
            ...marketingItems,
            ...themeItems
        ],
    };

    try {
        fs.writeFileSync(outPath, JSON.stringify(finalRegistry, null, 2), "utf8");
        console.log(`Wrote registry to ${outPath}`);
    } catch (err) {
        console.error(`Failed to write registry to ${outPath}:`, err);
        process.exit(1);
    }
}


build()
