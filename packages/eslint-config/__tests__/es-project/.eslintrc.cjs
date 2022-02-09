/* eslint-env node */

module.exports = {
  root: true,
  extends: [require.resolve('../../index')],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
