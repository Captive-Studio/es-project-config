const { error, concatESConfig } = require('./_rule.js');

module.exports = concatESConfig({
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/component-api-style': [error, ['script-setup']], // Use script-setup as default syntax, can be overriden in project if needed
  },
});
