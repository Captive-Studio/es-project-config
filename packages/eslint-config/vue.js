// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [require.resolve('./rules/vue'), 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
    },
    project: './tsconfig.json',
  },
  settings: {},
};
