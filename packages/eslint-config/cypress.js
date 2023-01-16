module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/cypress.js')],
      files: ['**/cypress/**', '**/*.cy.*'],
    },
  ],
};
