import type { NodePlopAPI } from 'plop';
import { plopPlugin } from './plugin.js';

export default async (plop: NodePlopAPI) => {
  await plopPlugin({})(plop);
};

export { plopPlugin } from './plugin.js';
