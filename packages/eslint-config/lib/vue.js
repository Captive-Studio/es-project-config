"use strict";
const es_js_1 = require("./es.js");
const config = {
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: {
            js: es_js_1.parser,
            jsx: es_js_1.parser,
            ts: '@typescript-eslint/parser',
            tsx: '@typescript-eslint/parser',
        },
        project: './tsconfig.json',
    },
    rules: {
        'vue/block-lang': [
            'error',
            {
                script: {
                    allowNoLang: false,
                },
            },
        ],
        'vue/component-api-style': ['error', ['script-setup']], // Use script-setup as default syntax, can be overriden in project if needed
    },
};
module.exports = config;
