"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ignore_js_1 = __importDefault(require("@w5s/eslint-config/dist/rules/ignore.js"));
const dev_1 = require("@w5s/dev");
const config = dev_1.ESLintConfig.concat({
    ...ignore_js_1.default,
    ignorePatterns: [
        ...(ignore_js_1.default.ignorePatterns ?? []),
        // Autogenerated swagger files
        '**/swagger.yaml',
    ],
});
module.exports = config;
