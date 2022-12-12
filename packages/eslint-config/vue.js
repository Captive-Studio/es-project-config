// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./rules/vue')],
      files: ['*.vue'],
    },
  ],
};
