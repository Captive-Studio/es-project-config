import type { PlopGeneratorConfig } from 'plop';
import * as Variables from './template/variables.js';
import * as StyleSheet from './template/Component.scss.template.js';
import * as Component from './template/Component.vue.template.js';
import * as Test from './template/Component.spec.template.js';
import * as Index from './template/index.template.js';
import { composeValidators, requireNotEmpty, requirePascalCase } from '../../validator/index.js';

export interface VueComponentGeneratorOptions {
  componentPath: string;
}

export const vueComponentGenerator = (option: VueComponentGeneratorOptions) => ({
  name: 'vue-component',
  generator: {
    prompts: [
      {
        name: Variables.componentName,
        type: 'input',
        validate: composeValidators(requireNotEmpty(), requirePascalCase()),
      },
    ],
    actions: [
      {
        path: `${option.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.scss`,
        template: StyleSheet.template,
        type: 'add',
      },
      {
        path: `${option.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.vue`,
        template: Component.template,
        type: 'add',
      },
      {
        path: `${option.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.spec.ts`,
        template: Test.template,
        type: 'add',
      },
      {
        path: `${option.componentPath}/{{ ${Variables.componentName} }}/index.ts`,
        template: Index.template,
        type: 'add',
      },
    ],
  } satisfies Partial<PlopGeneratorConfig>,
});
