import fs from "fs";
import path from "path";

/**
 * Generate individual registry JSON files for blocks and themes
 * This allows users to install them like: npx shadcn add @jk-ui/block-navbar
 */

function generateIndividualRegistries() {
  const root = process.cwd();
  const publicR = path.join(root, "public/r");
  const registryJsonPath = path.join(root, "registry.json");

  if (!fs.existsSync(registryJsonPath)) {
    console.error(
      "❌ registry.json not found. Run 'bun run build:registry-json' first."
    );
    process.exit(1);
  }

  const registryData = JSON.parse(
    fs.readFileSync(registryJsonPath, "utf8")
  ) as Record<string, any>;

  if (!registryData.items || !Array.isArray(registryData.items)) {
    console.error("❌ Invalid registry.json structure");
    process.exit(1);
  }

  // Ensure public/r directory exists
  if (!fs.existsSync(publicR)) {
    fs.mkdirSync(publicR, { recursive: true });
  }

  const items = registryData.items as Record<string, any>[];
  let generatedCount = 0;

  // Generate individual JSON files for blocks, themes, and chart components
  const typesToGenerate = ["registry:block", "registry:style"];

  for (const item of items) {
    const isGeneratable = typesToGenerate.includes(item.type);

    // Also generate individual files for blocks and themes
    if (
      (item.name?.startsWith("block-") || item.name?.startsWith("theme-")) &&
      isGeneratable
    ) {
      const fileName = `${item.name}.json`;
      const filePath = path.join(publicR, fileName);

      // Create a proper registry item JSON structure
      const itemData = {
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        ...item,
        // Remove array wrapper, ensure it's a single item
        items: undefined,
      };

      try {
        fs.writeFileSync(filePath, JSON.stringify(itemData, null, 2), "utf8");
        console.log(`✅ Generated: ${fileName}`);
        generatedCount++;
      } catch (err) {
        console.error(`❌ Failed to write ${fileName}:`, err);
      }
    }
  }

  console.log(`\n📦 Generated ${generatedCount} individual registry files`);
}

// Run
generateIndividualRegistries();
