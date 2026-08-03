import fs from "fs";
import path from "path";

interface DependencyMap {
  [key: string]: string[];
}

// Map imports to npm packages
const importToDependency: DependencyMap = {
  "react-aria-components": ["react-aria-components"],
  "react-aria": ["react-aria"],
  "tailwind-variants": ["tailwind-variants"],
  "tailwind-merge": ["tailwind-merge"],
  "clsx": ["clsx"],
  "class-variance-authority": ["class-variance-authority"],
  "lucide-react": ["lucide-react"],
  "input-otp": ["input-otp"],
};

// Base dependencies that all components need
const baseDependencies = ["tailwind-variants", "tailwind-merge"];

/**
 * Extract npm package imports from a TypeScript/TSX file
 */
function extractDependencies(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const dependencies = new Set<string>();

    // Pattern to match imports like: import X from "package-name"
    const importPattern = /from\s+["'](@?[^"'/]+)/g;
    let match;

    while ((match = importPattern.exec(content)) !== null) {
      const importPath = match[1];

      // Check if it's an npm package (not a relative import)
      if (!importPath.startsWith(".")) {
        // Handle scoped packages
        const packageName = importPath.startsWith("@")
          ? importPath.split("/").slice(0, 2).join("/")
          : importPath.split("/")[0];

        if (importToDependency[packageName]) {
          importToDependency[packageName].forEach((dep) =>
            dependencies.add(dep)
          );
        }
      }
    }

    return Array.from(dependencies);
  } catch (err) {
    console.warn(`Could not analyze ${filePath}: ${err}`);
    return [];
  }
}

/**
 * Get all dependencies for a registry item based on its files
 */
export function getItemDependencies(
  item: Record<string, any>,
  registriesRoot: string
): string[] {
  const dependencies = new Set<string>(baseDependencies);

  if (Array.isArray(item.files)) {
    for (const file of item.files) {
      if (typeof file.path === "string") {
        const fullPath = path.join(registriesRoot, "..", file.path);
        if (fs.existsSync(fullPath)) {
          const fileDeps = extractDependencies(fullPath);
          fileDeps.forEach((dep) => dependencies.add(dep));
        }
      }
    }
  }

  // Add react-aria-components if any react-aria imports found
  if (dependencies.has("react-aria")) {
    dependencies.add("react-aria-components");
    dependencies.delete("react-aria");
  }

  // Add common peer dependencies
  if (dependencies.size > 0) {
    dependencies.add("react");
    dependencies.add("react-dom");
  }

  return Array.from(dependencies).sort();
}

/**
 * Enrich registry items with dependency information
 */
export function enrichRegistryWithDependencies(
  registry: Record<string, any>,
  registriesRoot: string
): Record<string, any> {
  if (!Array.isArray(registry.items)) {
    return registry;
  }

  const enrichedItems = registry.items.map((item: Record<string, any>) => {
    if (!item.dependencies) {
      const deps = getItemDependencies(item, registriesRoot);
      if (deps.length > 0) {
        return {
          ...item,
          dependencies: deps,
        };
      }
    }
    return item;
  });

  return {
    ...registry,
    items: enrichedItems,
  };
}

// Run analysis if called directly
if (require.main === module) {
  const root = process.cwd();
  const registriesPath = path.join(root, "registries");

  console.log("📦 Analyzing dependencies...");

  const registryFiles = ["components.json", "chart.json", "blocks.json"];

  for (const file of registryFiles) {
    const filePath = path.join(registriesPath, file);

    if (fs.existsSync(filePath)) {
      const registry = JSON.parse(fs.readFileSync(filePath, "utf8"));
      const enriched = enrichRegistryWithDependencies(registry, registriesPath);

      // Only write if there were changes
      if (JSON.stringify(registry) !== JSON.stringify(enriched)) {
        fs.writeFileSync(filePath, JSON.stringify(enriched, null, 2), "utf8");
        console.log(`✅ Updated ${file}`);
      } else {
        console.log(`⏭️  ${file} - no changes`);
      }
    }
  }

  console.log("✨ Done!");
}
