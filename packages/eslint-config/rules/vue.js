const { error, concatESConfig } = require('./_rule.js');

module.exports = concatESConfig({
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
    project: './tsconfig.json',
  },
  rules: {
    'vue/component-api-style': [error, ['script-setup']], // Use script-setup as default syntax, can be overriden in project if needed
  },
});
