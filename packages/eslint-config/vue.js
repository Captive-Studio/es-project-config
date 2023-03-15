// http://eslint.org/docs/user-guide/configuring
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./lib/vue.js'), require.resolve('./lib/prettier.js')],
      files: ['*.vue'],
    },
  ],
};
