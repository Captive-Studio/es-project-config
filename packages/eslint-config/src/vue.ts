import type eslint from 'eslint';
import { parser } from './es.js';

const config: eslint.Linter.Config = {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: {
      js: parser,
      jsx: parser,
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
    project: './tsconfig.json',
  },
  rules: {
    'vue/component-api-style': ['error', ['script-setup']], // Use script-setup as default syntax, can be overridden in project if needed
  },
};

export = config;
