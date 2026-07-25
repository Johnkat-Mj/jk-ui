import fs from "fs";
import path from "path";


function build() {

    const root = process.cwd();
    const componentsPath = path.join(root, "registries", "components.json");
    const chartPath = path.join(root, "registries", "chart.json");
    const blocksPath = path.join(root, "registries", "blocks.json");
    const marketingPath = path.join(root, "registries", "marketing.json");
    const baseR_Path = path.join(root, "registries", "base.json")
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

    const components = readJsonSync(componentsPath);
    const chart = readJsonSync(chartPath);
    const blocks = readJsonSync(blocksPath);
    const base_r = readJsonSync(baseR_Path)
    const marketing_blocks = readJsonSync(marketingPath)

    const finalRegistry = {
        $schema: "https://ui.shadcn.com/schema/registry.json",
        name: "jk-ui",
        homepage: "https://jk-ui.unoforge.com",
        author: "Johnkat MJ <johnkatmj@gmail.com>",
        items: [
            ...(components && components.items ? components.items : []),
            ...(chart && chart.items ? chart.items : []),
            ...(blocks && blocks.items ? blocks.items : []),
            ...(base_r && base_r.items ? base_r.items : []),
            ...(marketing_blocks && marketing_blocks.items ? marketing_blocks.items :[])
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