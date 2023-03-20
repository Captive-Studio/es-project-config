/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

import type * as prettier from 'prettier';
import type { Config } from 'stylelint';

const getPackageScope = (): string | undefined => {
  try {
    const { name } = require('../package.json') as { name?: string };
    const prefixMatch = (name ?? '').match(/(@\w+)\//);
    const packageScope = prefixMatch == null ? undefined : prefixMatch[1];
    return packageScope;
  } catch (error_: unknown) {
    // eslint-disable-next-line no-console
    console.warn(error_);

    return undefined;
  }
};

const getPrettierConfig = (moduleName: string): prettier.Config | undefined => {
  try {
    const moduleConfig = require(moduleName);
    return moduleConfig as prettier.Config | undefined;
  } catch {
    return undefined;
  }
};

// Try require '@my-organization/prettier-config'
const getPrettierConfigDefault = () => {
  const defaultConfig: prettier.Config = {
    trailingComma: 'es5',
  };
  const packageScope = getPackageScope();
  return (packageScope == null ? undefined : getPrettierConfig(`${packageScope}/prettier-config`)) ?? defaultConfig;
};

const bemSelector = (/** @type {'any'|'kebabCase'|'pascalCase'} */ selector = 'any') => {
  const kebabCase = '[\\da-z-]+';
  const pascalCase = '[\\da-z]+';
  const any = '[\\da-zA-Z-]+';
  const word = { any, kebabCase, pascalCase }[selector] ?? any;
  return `^[a-z](${word})?(__(${word}-?)+)*(--(${word}-?)+){0,2}$`;
};

const stylelintConfig: Config = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-standard-vue'],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  rules: {
    'no-descending-specificity': null, // Many false positive https://github.com/stylelint/stylelint/issues/3516
    'prettier/prettier': [true, getPrettierConfigDefault()],
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
