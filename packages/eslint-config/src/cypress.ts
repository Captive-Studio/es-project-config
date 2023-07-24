import type eslint from 'eslint';
import cypressConfig from './rules/cypress.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...cypressConfig,
      files: ['**/cypress/**', '**/*.cy.*'],
    },
  ],
};
export = config;
