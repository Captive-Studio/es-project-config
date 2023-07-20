module.exports = {
  overrides: [
    {
      extends: [require.resolve('./dist/cypress.js')],
      files: ['**/cypress/**', '**/*.cy.*'],
    },
  ],
};
