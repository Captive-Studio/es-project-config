import type { PlopGeneratorConfig } from 'plop';
import * as Variables from './template/variables.js';
import * as Store from './template/store.template.js';
import * as Test from './template/store.spec.template.js';
import * as Data from './template/data.template.js';
import * as Index from './template/index.template.js';
import { composeValidators, requireNotEmpty, requireCamelCase } from '../../validator/index.js';

export interface PiniaModuleGeneratorOptions {
  storePath: string;
}

export const piniaModuleGenerator = (options: PiniaModuleGeneratorOptions) => ({
  name: 'pinia-module',
  generator: {
    prompts: [
      {
        name: Variables.storeName,
        type: 'input',
        message: 'Store name (ex: myService) :',
        validate: composeValidators(requireNotEmpty(), requireCamelCase()),
      },
    ],
    actions: () => [
      {
        path: `${options.storePath}/{{ ${Variables.storeName} }}/store.ts`,
        template: Store.template,
        type: 'add',
      },
      {
        path: `${options.storePath}/{{ ${Variables.storeName} }}/store.spec.ts`,
        template: Test.template,
        type: 'add',
      },
      {
        path: `${options.storePath}/{{ ${Variables.storeName} }}/data.ts`,
        template: Data.template,
        type: 'add',
      },
      {
        path: `${options.storePath}/{{ ${Variables.storeName} }}/index.ts`,
        template: Index.template,
        type: 'add',
      },
    ],
  } satisfies Partial<PlopGeneratorConfig>,
});
