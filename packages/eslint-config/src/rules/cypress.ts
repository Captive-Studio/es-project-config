import { ESLintConfig } from '@w5s/dev';
import type eslint from 'eslint';

const config: eslint.Linter.Config = ESLintConfig.concat(
  {
    env: {
      'cypress/globals': true,
    },
    extends: ['plugin:cypress/recommended', './jest'],
    plugins: ['cypress'],
  },
  /**
   * Disable some useless Jest rules
   */
  {
    rules: {
      'jest/expect-expect': 'off',
      'jest/valid-expect': 'off',
      // Cypress uses a promise like API but in a specific way
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'promise/prefer-await-to-then': 'off',
    },
  },
);

export = config;
