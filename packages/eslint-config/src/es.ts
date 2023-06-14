import type eslint from 'eslint';
import parentConfig from '@w5s/eslint-config/lib/es.js';
import { ESLintConfig } from '@w5s/dev';

const config: eslint.Linter.Config = ESLintConfig.concat({
  ...parentConfig,
  parserOptions: {
    ...parentConfig.parserOptions,
    // Add '.vue' to extra file extensions
    extraFileExtensions: [...(parentConfig.parserOptions?.['extraFileExtensions'] ?? []), '.vue'],
  },
});

export = config;
