import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '../public/r');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/registry.ts');

interface RegistryFile {
  name: string;
  path: string;
}

function scanDir(dir: string): RegistryFile[] {
  const results: RegistryFile[] = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    if (file.startsWith('.')) continue;

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // Only include JSON files at root level
    if (stat.isFile() && path.extname(file) === '.json') {
      results.push({
        name: path.basename(file, '.json'),
        path: path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/'),
      });
    }
  }

  return results;
}

function buildRegistryMap(files: RegistryFile[]): Record<string, string> {
  const registry: Record<string, string> = {};

  for (const file of files) {
    if (registry[file.name]) {
      throw new Error(`Duplicate block name: "${file.name}"`);
    }
    registry[file.name] = file.path;
  }

  return registry;
}

function toTsObject(obj: Record<string, string>): string {
  const entries = Object.entries(obj).map(
    ([key, value]) => `  '${key}': '${value}'`
  );

  return `export const registry: Record<string, string> = {
${entries.join(',\n')}
};
`;
}

function main(): void {
  console.log('🔍 Scanning...');

  const files = scanDir(ROOT_DIR);
  const registry = buildRegistryMap(files);

  const tsContent = toTsObject(registry);

  fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8');

  console.log('✅ Done:', OUTPUT_FILE);
}

main();
