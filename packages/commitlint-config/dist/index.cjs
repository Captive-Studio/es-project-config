'use strict';

var defaultConfig = require('@w5s/commitlint-config');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var defaultConfig__default = /*#__PURE__*/_interopDefault(defaultConfig);

// src/index.ts

// ../../node_modules/@commitlint/types/lib/rules.js
var RuleConfigSeverity;
(function(RuleConfigSeverity2) {
  RuleConfigSeverity2[RuleConfigSeverity2["Disabled"] = 0] = "Disabled";
  RuleConfigSeverity2[RuleConfigSeverity2["Warning"] = 1] = "Warning";
  RuleConfigSeverity2[RuleConfigSeverity2["Error"] = 2] = "Error";
})(RuleConfigSeverity || (RuleConfigSeverity = {}));
var RuleConfigQuality;
(function(RuleConfigQuality2) {
  RuleConfigQuality2[RuleConfigQuality2["User"] = 0] = "User";
  RuleConfigQuality2[RuleConfigQuality2["Qualified"] = 1] = "Qualified";
})(RuleConfigQuality || (RuleConfigQuality = {}));

// src/index.ts
var config = {
  ...defaultConfig__default.default,
  rules: {
    ...defaultConfig__default.default.rules,
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    "body-max-line-length": [RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY],
    "footer-max-line-length": [RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY]
  }
};
var src_default = config;

module.exports = src_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map