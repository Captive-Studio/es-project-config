"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conventional_changelog_1 = __importDefault(require("@w5s/conventional-changelog"));
const config = {
    ...conventional_changelog_1.default,
    // Override here
};
exports.default = config;
