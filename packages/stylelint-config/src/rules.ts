/* eslint-disable @typescript-eslint/naming-convention */

import type { Config } from 'stylelint';
import prettierConfig from '@captive/prettier-config';

const bemSelector = (/** @type {'any'|'kebabCase'|'pascalCase'} */ selector = 'any') => {
  const kebabCase = '[\\da-z-]+';
  const pascalCase = '[\\da-z]+';
  const any = '[\\da-zA-Z-]+';
  const word = { any, kebabCase, pascalCase }[selector] ?? any;
  return `^[a-z](${word})?(__(${word}-?)+)*(--(${word}-?)+){0,2}$`;
};

const stylelintConfig: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue',
    'stylelint-config-prettier-scss',
  ],
  ignoreFiles: [
    '**/dist/**',
    '**/node_modules/**',
    '**/lib/**',
    '**/coverage/**',
    'ios/**',
    'android/**',
    '**/*.min.css',
    '**/vendor/**',
    '**/vendors/**',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  reportNeedlessDisables: true,
  rules: {
    'color-function-notation': null, // TODO: remove this when sassc and sass-rails are not used on projects
    'no-descending-specificity': null,
    // Many false positive https://github.com/stylelint/stylelint/issues/3516
    'prettier/prettier': [true, prettierConfig],
    'selector-class-pattern': [
      bemSelector('any'),
      {
        message: 'Expected class selector to be kebab-case or BEM',
        resolveNestedSelectors: true,
      },
    ],
  },
};

export = stylelintConfig;
