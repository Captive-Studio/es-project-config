/* cspell:disable */
// https://github.com/keithamus/sort-package-json/blob/master/defaultRules.md
module.exports = {
  overrides: [
    {
      extends: [require.resolve('./rules/jsonc.js')],
      files: ['*.json', '*.json5', '*.jsonc'],
    },
  ],
};
