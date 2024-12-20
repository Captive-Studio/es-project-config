import type eslint from 'eslint';
import { ESLintConfig } from '@w5s/dev';
import prettierConfig from './rules/prettier.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...ESLintConfig.concat(
        {
          extends: [require.resolve('./rules/vue.js')],
        },
        prettierConfig,
      ),
      files: ['*.vue'],
    },
  ],
};
export = config;
