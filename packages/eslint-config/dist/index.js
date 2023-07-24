"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
const ignore_js_1 = __importDefault(require("./rules/ignore.js"));
const cypress_js_1 = __importDefault(require("./cypress.js"));
const es_js_1 = __importDefault(require("./es.js"));
const ts_js_1 = __importDefault(require("./ts.js"));
const jest_js_1 = __importDefault(require("./jest.js"));
const json_js_1 = __importDefault(require("./json.js"));
const vue_js_1 = __importDefault(require("./vue.js"));
const yml_js_1 = __importDefault(require("./yml.js"));
function tryResolve(name) {
    try {
        require.resolve(name);
        return true;
    }
    catch {
        return false;
    }
}
const config = dev_1.ESLintConfig.concat(ignore_js_1.default, es_js_1.default, tryResolve('typescript') ? ts_js_1.default : {}, jest_js_1.default, json_js_1.default, yml_js_1.default, tryResolve('cypress') ? cypress_js_1.default : {}, tryResolve('vue') ? vue_js_1.default : {}, {
    root: true,
});
module.exports = config;
