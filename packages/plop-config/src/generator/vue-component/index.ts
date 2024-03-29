import type { PlopGeneratorConfig } from 'plop';
import * as Variables from './template/variables.js';
import * as StyleSheet from './template/Component.style.template.js';
import * as Component from './template/Component.vue.template.js';
import * as Test from './template/Component.spec.template.js';
import * as Index from './template/index.template.js';
import { componentNamePrompt } from '../../prompt/index.js';

export interface VueComponentGeneratorOptions {
  styleSheet: 'css' | 'scss';
  componentPath: string;
}

export const vueComponentGenerator = (options: VueComponentGeneratorOptions) => ({
  name: 'vue-component',
  generator: {
    prompts: [
      {
        name: Variables.componentName,
        ...componentNamePrompt,
      },
    ],
    actions: () => [
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.${options.styleSheet}`,
        template: StyleSheet.template,
        type: 'add',
      },
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.vue`,
        data: {
          ...options,
        },
        template: Component.template,
        type: 'add',
      },
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.spec.ts`,
        template: Test.template,
        type: 'add',
      },
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/index.ts`,
        template: Index.template,
        type: 'add',
      },
    ],
  } satisfies Partial<PlopGeneratorConfig>,
});
