import type eslint from 'eslint';
import prettierConfig from '@captive/prettier-config';

const config: eslint.Linter.Config = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
export = config;
