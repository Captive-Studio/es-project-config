import { plopPlugin } from '@captive/plop-config';

export default async function plopGenerator(/** @type {import('plop').NodePlopAPI} */ plop) {
  await plopPlugin({
    vue: true,
    react: true,
  })(plop);
}
