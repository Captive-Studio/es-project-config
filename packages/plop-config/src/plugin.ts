import type { NodePlopAPI } from 'plop';
import { vueComponentGenerator } from './generator/vue-component/index.js';
import { piniaModuleGenerator } from './generator/pinia-module/index.js';
import { techDiveInGenerator } from './generator/tech-dive-in/index.js';
import { reactComponentGenerator } from './generator/react-component/index.js';

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
}

export function plopPlugin(options: PlopPluginOptions) {
  return async (plop: NodePlopAPI) => {
    const { vue = true, react = false, path = {}, styleSheet = 'css' } = options;
    const { component = 'src/components', docs = 'docs', store = 'src/store' } = path;

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
        }),
      ].forEach((generator) => plop.setGenerator(generator.name, generator.generator));
    }
  };
}
