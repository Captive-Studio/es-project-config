"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const yml_js_1 = __importDefault(require("./rules/yml.js"));
const config = {
    overrides: [
        {
            ...yml_js_1.default,
            files: ['*.yml', '*.yaml'],
        },
    ],
};
module.exports = config;
