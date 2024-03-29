import { plopPlugin } from '@captive/plop-config';

export default function plopGenerator(/** @type {import('plop').NodePlopAPI} */ plop) {
  plopPlugin({
    vue: true,
    react: true,
  })(plop);
}
