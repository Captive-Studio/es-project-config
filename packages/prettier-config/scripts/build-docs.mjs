import { writeFile, readFile, mkdir } from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const Config = {
  /**
   * generate Preview for these files
   */
  preview: [
    // [file path, optional display name]
    ['dist/index.js', ''],
  ],
};

const Package = {
  async readConfig(fileName) {
    const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
    const rootDirectory = path.dirname(scriptDirectory);
    const configModule = await import(path.join(rootDirectory, fileName));
    return configModule.default;
  },
};

async function buildPageContent(sourceFile, displayName) {
  const config = await Package.readConfig(sourceFile);
  return `
<details>
<summary><code>${displayName}</code></summary>

\`\`\`json
${JSON.stringify(config, null, 2)}
\`\`\`
</details>
  `;
}

async function buildPreview(sourceFile, displayName) {
  const packageName = '@captive/prettier-config';

  return buildPageContent(
    sourceFile,
    displayName == null
      ? `${packageName}/${sourceFile}`
      : `${packageName}${displayName.length === 0 ? '' : `/${displayName}`}`
  );
}

async function main() {
  const previewAll = await Promise.all(Config.preview.map(([file, displayName]) => buildPreview(file, displayName)));
  const markdownContentNew = previewAll.join('\n');
  const file = `node_modules/.docs/RULES.md`;
  await mkdir(path.dirname(file), { recursive: true });

  const markdownContent = await (async () => {
    try {
      return await readFile(file, 'utf8');
    } catch {
      return '';
    }
  })();
  const hasChanged = markdownContentNew !== markdownContent;
  if (hasChanged) {
    await writeFile(file, markdownContentNew);
  }
}

await main();
