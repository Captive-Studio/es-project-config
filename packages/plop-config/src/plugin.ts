/* eslint-disable no-extra-boolean-cast */
import type { NodePlopAPI } from 'plop';
import Path from 'node:path';
import { vueComponentGenerator } from './generator/vue-component/index.js';
import { piniaModuleGenerator } from './generator/pinia-module/index.js';
import { techDiveInGenerator } from './generator/tech-dive-in/index.js';
import { reactComponentGenerator } from './generator/react-component/index.js';
import { readPackageJSON } from './readPackageJSON.js';

export interface PlopPluginOptions {
  /**
   * StyleSheet language
   */
  styleSheet?: 'css' | 'scss';
  /**
   * Project paths
   */
  path?: {
    /**
     * package.json path
     */
    package?: string;
    /**
     * Components (vue, react, etc)
     */
    component?: string;
    /**
     * Store modules (pinia, redux, etc)
     */
    store?: string;
    /**
     * Documentation
     */
    docs?: string;
  };
  /**
   * Enable VueJS generators
   */
  vue?: boolean;
  /**
   * Enable React generators
   */
  react?: boolean;
  /**
   * Test framework used
   */
  test?: 'jest' | 'vitest';
}

export function plopPlugin(options: PlopPluginOptions) {
  return async (plop: NodePlopAPI) => {
    const { vue: vueDefault, react: reactDefault, path = {}, styleSheet = 'css', test: testDefault } = options;
    const { component = 'src/components', docs = 'docs', store = 'src/store' } = path;
    const packagePath = path.package ?? Path.join(plop.getPlopfilePath(), 'package.json');
    const packageData = await readPackageJSON(packagePath);
    const vue = vueDefault ?? Boolean(packageData?.dependencies?.['vue']);
    const react = reactDefault ?? Boolean(packageData?.dependencies?.['react']);
    const test = testDefault ?? (Boolean(packageData?.devDependencies?.['vitest']) ? 'vitest' : 'jest');

    plop.setWelcomeMessage(`[Captive] What do you want to generate?`);

    [
      techDiveInGenerator({
        techDiveInPath: `${docs}/tech-dive-in`,
      }),
    ].forEach((generator) => plop.setGenerator(generator.name, generator.generator));
    if (vue) {
      [
        vueComponentGenerator({
          styleSheet,
          componentPath: component,
        }),
        piniaModuleGenerator({
          storePath: store,
        }),
      ].forEach((generator) => plop.setGenerator(generator.name, generator.generator));
    }
    if (react) {
      [
        reactComponentGenerator({
          styleSheet,
          componentPath: component,
          test,
        }),
      ].forEach((generator) => plop.setGenerator(generator.name, generator.generator));
    }
  };
}
