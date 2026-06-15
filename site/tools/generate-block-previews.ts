import fs from "fs";
import path from "path";

const SOURCES_FILE = path.resolve("block-source.json");
const OUTPUT_FILE = path.resolve("src/generated/blocks-data.ts");

// Convert "login/login01" → "login.login01"
// Convert "login/login01.tsx" → "login.login01"
function normalizeName(name: string) {
  return name
    .replace(/\.(tsx|jsx|ts|js)$/, "")
    .split("/")
    .join(".");
}

// Convert dot-name → import variable name
// "login.login01" → "LoginLogin01"
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

    const dotName = normalizeName(name);

    // Create import path relative to src
    const importPath = filePath
      .replace(/^src\//, "@/")
      .replace(/\.(tsx|ts|jsx|js)$/, "");

    // Extract the last part of the dotName (e.g., "login.login01" → "Login01")
    const componentName = pascalName(dotName.split('.').pop() || dotName);

    imports += `import { ${componentName} } from "${importPath}";\n`;

    entries += `  {\n`;
    entries += `    name: "${dotName}",\n`;
    entries += `    path: "${name}",\n`;
    entries += `    Component: ${componentName},\n`;
    entries += "  },\n";
  }

  const tsContent = `
import React from "react";
${imports}

export interface BlockSource {
  name: string;
  path: string;
  Component: React.ComponentType<unknown>;
}

export const blocksSourceData:BlockSource[] = [
${entries}
];

export type BlockName = typeof blocksSourceData[number]["name"];
`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, tsContent);

  console.log("✔ blocks-data.ts generated!");
}

run();