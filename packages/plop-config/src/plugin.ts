import type { NodePlopAPI } from 'plop';
import { vueComponentGenerator } from './generator/vue-component/index.js';

export interface PlopPluginOptions {
  /**
   * Project paths
   */
  path?: {
    /**
     * Components (vue, react, etc)
     */
    component?: string;
  };
  vue?: boolean;
}

export function plopPlugin(options: PlopPluginOptions) {
  return (plop: NodePlopAPI) => {
    const { vue = true, path = {} } = options;
    const { component = 'src/components' } = path;

    plop.setWelcomeMessage(`[Captive] What do you want to generate?`);

    if (vue) {
      const generators = [
        vueComponentGenerator({
          componentPath: component,
        }),
      ];
      generators.forEach((generator) => {
        plop.setGenerator(generator.name, generator.generator);
      });
    }
  };
}
