const { off, concatESConfig } = require('./_rule.js');

module.exports = concatESConfig(
  {
    env: {
      'cypress/globals': true,
    },
    extends: ['plugin:cypress/recommended', './jest'],
    plugins: ['cypress'],
  },
  /**
   * Disable some unuseful Jest rules
   */
  {
    rules: {
      'jest/expect-expect': off,
    },
  }
);
