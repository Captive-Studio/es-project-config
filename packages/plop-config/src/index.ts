import type { NodePlopAPI } from 'plop';
import { plopPlugin } from './plugin.js';

// eslint-disable-next-line import/no-default-export
export default async (plop: NodePlopAPI) => {
  await plopPlugin({})(plop);
};

export { plopPlugin } from './plugin.js';
