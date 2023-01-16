"use strict";
const _rule_js_1 = require("./_rule.js");
const config = (0, _rule_js_1.concatESConfig)({
    env: {
        'cypress/globals': true,
    },
    extends: ['plugin:cypress/recommended', './jest'],
    plugins: ['cypress'],
}, 
/**
 * Disable some unuseful Jest rules
 */
{
    rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        // Cypress uses a promise like API but in a specific way
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
        'promise/prefer-await-to-then': 'off',
    },
});
module.exports = config;
