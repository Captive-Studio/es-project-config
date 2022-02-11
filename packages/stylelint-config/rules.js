module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-config-rational-order/plugin'],
  rules: {
    'at-rule-no-unknown': null,
    'order/properties-order': [],
    'plugin/rational-order': [true],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer'],
      },
    ],
    'selector-class-pattern': null,
  },
};
