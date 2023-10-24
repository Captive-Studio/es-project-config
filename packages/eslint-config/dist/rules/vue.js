"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const find_up_1 = __importDefault(require("find-up"));
const es_js_1 = __importDefault(require("./es.js"));
const typescript_js_1 = __importDefault(require("./typescript.js"));
const hasTSConfig = find_up_1.default.sync('tsconfig.json') != null;
const config = dev_1.ESLintConfig.concat(hasTSConfig ? typescript_js_1.default : es_js_1.default, {
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        extraFileExtensions: ['.vue'],
        // FIXME: we cannot use multi parser because buggy
        // - we cannot set parserOptions
        // - some errors are not reported
        // Workaround : if project is detected as typescript, then enable
        parser: hasTSConfig ? '@typescript-eslint/parser' : es_js_1.default.parser,
        project: 'tsconfig.json',
    },
    rules: {
        'vue/component-api-style': ['error', ['script-setup']],
        'vue/no-deprecated-slot-attribute': 'off',
    },
});
module.exports = config;
