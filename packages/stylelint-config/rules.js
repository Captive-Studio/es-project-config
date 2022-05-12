module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-config-rational-order/plugin'],
  rules: {
    'no-descending-specificity': null, // Many false positive https://github.com/stylelint/stylelint/issues/3516
    'selector-class-pattern': null, // TODO: enforce BEM naming convention
  },
};
