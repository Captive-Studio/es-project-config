// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./dist/vue.js'), require.resolve('./dist/prettier.js')],
      files: ['*.vue'],
    },
  ],
};
