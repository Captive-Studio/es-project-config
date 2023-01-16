// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/vue.js')],
      files: ['*.vue'],
    },
  ],
};
