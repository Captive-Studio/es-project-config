/* eslint-disable @typescript-eslint/naming-convention */

import type { Config } from 'stylelint';
import prettierConfig from '@captive/prettier-config';

const bemSelector = (selectors: Array<'any' | 'kebabCase' | 'pascalCase'>) => {
  const kebabCase = String.raw`[\da-z-]+`;
  const pascalCase = String.raw`[a-zA-Z][\da-zA-Z]+`;
  const any = String.raw`[a-zA-Z][\da-zA-Z-]+`;
  const map = { any, kebabCase, pascalCase } as const;

  const word = selectors.map((selector) => map[selector]).join('|');
  return `^(${word})?(__(${word}-?)+)*(--(${word}-?)+){0,2}$`;
};

// TODO: remove this when sassc and sass-rails are not used on projects
const sasscRailsCompatibility = {
  'alpha-value-notation': null,
  'color-function-notation': null,
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
    ...sasscRailsCompatibility,
    /**
     * Many false positive https://github.com/stylelint/stylelint/issues/3516
     */
    'no-descending-specificity': null,
    'prettier/prettier': [true, prettierConfig],

    /**
     * We want to give developers the freedom to write comments as they see fit.
     * Example of a comment with an empty comment:
     * // Overriding any non-variable SASS must be done after the fact. // For example, to change the default status-tag color: //
     * // .status_tag { background: #6090DB; }
     */
    'scss/comment-no-empty': null,
    'selector-class-pattern': [
      bemSelector(['kebabCase', 'pascalCase']),
      {
        message: 'Expected class selector to be kebab-case or BEM',
        resolveNestedSelectors: true,
      },
    ],
    'selector-id-pattern': [
      bemSelector(['kebabCase', 'pascalCase']),
      {
        message: 'Expected id selector to be kebab-case or BEM',
        resolveNestedSelectors: true,
      },
    ],
  },
};

export = stylelintConfig;
