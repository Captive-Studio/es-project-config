"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
const commitlint_config_1 = __importDefault(require("@w5s/commitlint-config"));
const types_1 = require("@commitlint/types");
const config = {
    ...commitlint_config_1.default,
    rules: {
        ...commitlint_config_1.default.rules,
        'header-max-length': [types_1.RuleConfigSeverity.Error, 'always', 100],
    },
};
exports.default = config;
