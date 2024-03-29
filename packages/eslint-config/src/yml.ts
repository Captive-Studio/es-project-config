import type eslint from 'eslint';
import ymlConfig from './rules/yml.js';

const config: eslint.Linter.Config = {
  overrides: [
    {
      ...ymlConfig,
      files: ['*.yml', '*.yaml'],
    },
  ],
};
export = config;
