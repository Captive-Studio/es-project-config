import type { NodePlopAPI } from 'plop';
import { plopPlugin } from './plugin.js';

export default async (plop: NodePlopAPI) => {
  plopPlugin({
    vue: true,
  })(plop);
};

export { plopPlugin } from './plugin.js';
