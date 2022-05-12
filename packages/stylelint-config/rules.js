module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-config-rational-order/plugin'],
  rules: {
    'selector-class-pattern': null, // TODO: enforce BEM naming convention
  },
};
