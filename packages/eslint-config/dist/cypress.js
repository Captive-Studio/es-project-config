"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cypress_js_1 = __importDefault(require("./rules/cypress.js"));
const config = {
    overrides: [
        {
            ...cypress_js_1.default,
            files: ['**/cypress/**', '**/*.cy.*'],
        },
    ],
};
module.exports = config;
