import type eslint from 'eslint';
import parentConfig from '@w5s/eslint-config/lib/es.js';
import { ESLintConfig } from '@w5s/dev';

const config: eslint.Linter.Config = ESLintConfig.concat(
  {
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
  parentConfig
);

export = config;
