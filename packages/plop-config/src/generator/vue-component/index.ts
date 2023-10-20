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

export const vueComponentGenerator = (options: VueComponentGeneratorOptions) => ({
  name: 'vue-component',
  generator: {
    prompts: [
      {
        name: Variables.componentPath,
        type: 'input',
        default: options.componentPath,
        message: 'Component directory :',
      },
      {
        name: Variables.componentName,
        type: 'input',
        message: 'Component name (ex: HelpButton) :',
        validate: composeValidators(requireNotEmpty(), requirePascalCase()),
      },
    ],
    actions: [
      {
        path: `{{ ${Variables.componentPath} }}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.scss`,
        template: StyleSheet.template,
        type: 'add',
      },
      {
        path: `{{ ${Variables.componentPath} }}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.vue`,
        template: Component.template,
        type: 'add',
      },
      {
        path: `{{ ${Variables.componentPath} }}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.spec.ts`,
        template: Test.template,
        type: 'add',
      },
      {
        path: `{{ ${Variables.componentPath} }}/{{ ${Variables.componentName} }}/index.ts`,
        template: Index.template,
        type: 'add',
      },
    ],
  } satisfies Partial<PlopGeneratorConfig>,
});
