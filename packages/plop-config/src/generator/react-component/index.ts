import type { PlopGeneratorConfig } from 'plop';
import * as Variables from './template/variables.js';
import * as Component from './template/Component.tsx.template.js';
import * as Test from './template/Component.spec.template.js';
import * as Index from './template/index.template.js';
import { componentNamePrompt } from '../../prompt/index.js';
import { PlopPluginOptions } from '../../plugin.js';

export interface ReactComponentGeneratorOptions {
  styleSheet: 'css' | 'scss';
  test: NonNullable<PlopPluginOptions['test']>;
  componentPath: string;
}

export const reactComponentGenerator = (options: ReactComponentGeneratorOptions) => ({
  name: 'react-component',
  generator: {
    prompts: [
      {
        name: Variables.componentName,
        ...componentNamePrompt,
      },
    ],
    actions: () => [
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/{{ ${Variables.componentName} }}.tsx`,
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
        data: {
          importTest: options.test === 'vitest' ? 'vitest' : '@jest/globals',
        },
      },
      {
        path: `${options.componentPath}/{{ ${Variables.componentName} }}/index.ts`,
        template: Index.template,
        type: 'add',
      },
    ],
  } satisfies Partial<PlopGeneratorConfig>,
});
