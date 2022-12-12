module.exports = {
  overrides: [
    {
      env: {
        'cypress/globals': true,
      },
      extends: [require.resolve('./rules/cypress.js')],
      files: ['**/cypress/**', '**/*.cy.*'],
      plugins: ['cypress'],
    },
  ],
};
