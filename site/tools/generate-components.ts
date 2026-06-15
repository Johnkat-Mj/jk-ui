import fs from "fs";
import path from "path";

const SOURCES_FILE = path.resolve("sources.json");
const OUTPUT_FILE = path.resolve("src/generated/components-data.ts");

// Convert "ui/button" → "ui.button"
// Convert "ui/button.tsx" → "ui.button"
function normalizeName(name: string) {
  return name
    .replace(/\.(tsx|jsx|ts|js)$/, "")
    .split("/")
    .join(".");
}

// Convert dot-name → import variable name
// "ui.button" → "UiButton"
function pascalName(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^(.)/, m => m.toUpperCase());
}

function run() {
  const mapping: Record<string, string> = JSON.parse(
    fs.readFileSync(SOURCES_FILE, "utf8")
  );

  let imports = "";
  let entries = "";

  for (const name in mapping) {
    const filePath = mapping[name];
    const absolute = path.resolve(filePath);

    if (!fs.existsSync(absolute)) {
      console.error(`❌ File not found: ${filePath}`);
      continue;
    }

    const raw = fs.readFileSync(absolute, "utf8");

    const dotName = normalizeName(name);

    // Create import path relative to src
    // const importPath = filePath
    //   .replace(/^src\//, "@/") // optional alias
    //   .replace(/\.(tsx|ts|jsx|js)$/, "");
    const importPath = filePath
      .replace(/^src\//, "@/")
      .replace(/\.(tsx|ts|jsx|js)$/, "");

    // Extract the last part of the dotName (e.g., "ui.button" → "Button")
    const componentName = pascalName(dotName.split('.').pop() || dotName);

    imports += `import { ${componentName} } from "${importPath}";\n`;

    entries += `  "${dotName}": {\n`;
    entries += `    name: "${dotName}",\n`;
    entries += "    source: " + JSON.stringify(raw) + ",\n";
    entries += `    Component: ${componentName},\n`;
    entries += "  },\n";
  }

  const tsContent = `
import React from "react";
${imports}

export interface ComponentSource {
  name: string;
  source: string;
  Component: React.ComponentType<unknown>;
}

export const componentsData = {
${entries}
} as const;

export type ComponentName = keyof typeof componentsData;
`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, tsContent);

  console.log("✔ components-data.ts generated!");
}

run();
