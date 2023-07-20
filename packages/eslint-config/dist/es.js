"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const es_js_1 = __importDefault(require("@w5s/eslint-config/lib/es.js"));
const dev_1 = require("@w5s/dev");
const config = dev_1.ESLintConfig.concat({
    ...es_js_1.default,
    parserOptions: {
        ...es_js_1.default.parserOptions,
        // Add '.vue' to extra file extensions
        extraFileExtensions: [...(es_js_1.default.parserOptions?.['extraFileExtensions'] ?? []), '.vue'],
    },
});
module.exports = config;
