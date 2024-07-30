import { readFile } from 'node:fs/promises';

export interface PackageJSON {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}
export async function readPackageJSON(pathString: string): Promise<PackageJSON | undefined> {
  try {
    const content = await readFile(pathString, { encoding: 'utf8' });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(content);
  } catch {
    return undefined;
  }
}
