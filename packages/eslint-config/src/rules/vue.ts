import { ESLintConfig } from '@w5s/dev';
import type eslint from 'eslint';
import findUp from 'find-up';
import esConfig from './es.js';
import typescriptConfig from './typescript.js';

const hasTSConfig = findUp.sync('tsconfig.json') != null;

const config: eslint.Linter.Config = ESLintConfig.concat(hasTSConfig ? typescriptConfig : esConfig, {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    extraFileExtensions: ['.vue'],
    // FIXME: we cannot use multi parser because buggy
    // - we cannot set parserOptions
    // - some errors are not reported
    // Workaround : if project is detected as typescript, then enable
    parser: hasTSConfig ? '@typescript-eslint/parser' : esConfig.parser,
    project: 'tsconfig.json',
  },
  rules: {
    'import/no-default-export': 'off', // Export default is required by vue definition
    'vue/component-api-style': ['error', ['script-setup']], // Use script-setup as default syntax, can be overridden in project if needed
    'vue/no-deprecated-slot-attribute': 'off',
  },
});

export = config;
