import type { NodePlopAPI } from 'plop';
import { vueComponentGenerator } from './generator/vue-component/index.js';
import { storeModuleGenerator } from './generator/store-module/index.js';
import { techDiveInGenerator } from './generator/tech-dive-in/index.js';

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
  vue?: boolean;
}

export function plopPlugin(options: PlopPluginOptions) {
  return async (plop: NodePlopAPI) => {
    const { vue = true, path = {}, styleSheet = 'css' } = options;
    const { component = 'src/components', docs = 'docs', store = 'src/store' } = path;

    plop.setWelcomeMessage(`[Captive] What do you want to generate?`);

    if (vue) {
      const generators = [
        vueComponentGenerator({
          styleSheet,
          componentPath: component,
        }),
        techDiveInGenerator({
          techDiveInPath: `${docs}/tech-dive-in`,
        }),
        storeModuleGenerator({
          storePath: store,
        }),
      ];
      generators.forEach((generator) => {
        plop.setGenerator(generator.name, generator.generator);
      });
    }
  };
}
