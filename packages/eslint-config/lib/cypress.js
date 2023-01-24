"use strict";
const dev_1 = require("@w5s/dev");
const config = dev_1.ESLintConfig.concat({
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
